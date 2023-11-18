/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb://127.0.0.1:27017/ecommerce",
  },
};

module.exports = nextConfig;
