import './globals.css';
import HideDevOverlay from '@/components/HideDevOverlay';

export const metadata = {
    title: 'Florida RP — Patch Notes',
    description: 'Atualizações, hotfix e sistemas da Florida RP.',
    icons: {
        icon: '/brand/isotipo.png',
        apple: '/brand/isotipo.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <HideDevOverlay />
                {children}
            </body>
        </html>
    );
}
