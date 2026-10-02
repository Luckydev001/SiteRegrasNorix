import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    allowedDevOrigins: ['192.168.1.9', '104.234.119.67', 'localhost'],
    async redirects() {
        return [
            {
                source: '/noticias/16-09-fazenda-desmanche-grupos',
                destination: '/noticias/15-09-policia-radio-faccoes',
                permanent: false,
            },
        ];
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        config.watchOptions = {
            ...(config.watchOptions || {}),
            followSymlinks: false,
            ignored: [
                '**/node_modules/**',
                '**/.git/**',
                'C:/DumpStack.log.tmp',
                'C:/pagefile.sys',
                'C:/hiberfil.sys',
                'C:/swapfile.sys',
                'C:/System Volume Information/**',
            ],
        };
        return config;
    },
};

export default nextConfig;
