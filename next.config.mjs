import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
          },
          {
            // WordPress mShots — on-demand site screenshots
            protocol: 'https',
            hostname: 's.wp.com',
            port: '',
            pathname: '/mshots/**',
          }
        ],
      },
};

export default withNextIntl(nextConfig);
