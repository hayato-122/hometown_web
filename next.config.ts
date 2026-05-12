import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "hayden-decayable-tenselessly.ngrok-free.dev",
    "*.ngrok-free.dev",
    "*.ngrok-free.app",
    "*.ngrok.app",
  ],
};

export default nextConfig;
