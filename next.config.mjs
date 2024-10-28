/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:slug',
                destination: '/',
                permanent: true
            },
            {
                source: '/:slug/:slug*',
                destination: '/',
                permanent: true
            }
        ];
    }
};

export default nextConfig;
