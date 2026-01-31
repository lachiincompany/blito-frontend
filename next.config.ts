/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/api/:path*", destination: "http://localhost:9000/api/:path*" },
      { source: "/admin/:path*", destination: "http://localhost:9000/admin/:path*" },

      { source: "/accounts/:path*", destination: "http://localhost:9000/accounts/:path*" },
      { source: "/bus_companies/:path*", destination: "http://localhost:9000/bus_companies/:path*" },
      { source: "/city/:path*", destination: "http://localhost:9000/city/:path*" },
      { source: "/routes/:path*", destination: "http://localhost:9000/routes/:path*" },
      { source: "/trips/:path*", destination: "http://localhost:9000/trips/:path*" },
      { source: "/reservations/:path*", destination: "http://localhost:9000/reservations/:path*" },
      { source: "/seat/:path*", destination: "http://localhost:9000/seat/:path*" },
      { source: "/fleet/:path*", destination: "http://localhost:9000/fleet/:path*" },
      { source: "/payments/:path*", destination: "http://localhost:9000/payments/:path*" },
      { source: "/sessions/:path*", destination: "http://localhost:9000/sessions/:path*" },
    ];
  },
};

module.exports = nextConfig;
