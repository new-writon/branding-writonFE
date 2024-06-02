import type { Metadata } from 'next';
import '@/styles/global.css';
import ChannelTalkScript from '@/third-party/ChannelTalkScript';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Writon',
  description: '글과 회고로 함께 성장하는 공간 : Writon',
  icons: {
    icon: '/image/icon/writon_w.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
        <ChannelTalkScript />
      </body>
    </html>
  );
}
