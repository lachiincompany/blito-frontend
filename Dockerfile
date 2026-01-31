FROM node:20-alpine

WORKDIR /app

# (اختیاری ولی مفید) NPM mirror via build args
ARG NPM_REGISTRY=https://registry.npmjs.org/

RUN npm config set registry ${NPM_REGISTRY}

COPY package*.json ./
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps


COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]

