import withPWA from 'next-pwa';

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

const config = withPWA({
  dest: 'public',
})(nextConfig);

export default config;
