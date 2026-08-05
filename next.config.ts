import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,

    // NOTE: `output: "export"` was removed on purpose.
    // Static export disables Next's image optimizer (it forces
    // images.unoptimized), which left ~29 MB of full-size photos being sent
    // to visitors. Every page here is still statically prerendered at build
    // time — on Vercel this deploys the same way, but images are served as
    // AVIF/WebP at the size the device actually needs.
    images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

export default nextConfig;
