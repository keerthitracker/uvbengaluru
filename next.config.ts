import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/vehicles/x-47', destination: '/vehicles/x-47-venom', permanent: true },
      { source: '/vehicles/x-47-desert-wing', destination: '/vehicles/x-47-venom', permanent: true },
    ]
  },
}

export default nextConfig
