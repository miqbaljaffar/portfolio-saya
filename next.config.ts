import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Browser akan otomatis memilih AVIF jika didukung, jika tidak WebP
  },
};

export default nextConfig;