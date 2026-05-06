/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'flagshipbio.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.igene.in' },
      { protocol: 'https', hostname: 'www.probes-test.com' },
    ],
  },
};

export default nextConfig;
