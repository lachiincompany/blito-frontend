# Build stage
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Run stage
FROM node:20-slim
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/package*.json ./
RUN npm install --omit=dev --legacy-peer-deps

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# اگر next.config.js لازم بود، بعداً اضافه می‌کنیم (اختیاری)

EXPOSE 3000
CMD ["npm", "run", "start"]
