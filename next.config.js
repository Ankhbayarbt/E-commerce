/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb+srv://Temuulen:Temuuka123@cluster0.ikgbq1w.mongodb.net/",
  },
  images: {
    domains: ["res.cloudinary.com", "https://images.unsplash.com"],
  },
};

module.exports = nextConfig;
