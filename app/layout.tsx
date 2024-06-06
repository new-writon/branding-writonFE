import type { Metadata } from 'next';
import '@/styles/global.css';
import ChannelTalkScript from '@/third-party/ChannelTalkScript';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export const viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iam.writon.co.kr'),
  title: 'Writon : 글과 회고로 함께 성장하는 공간',
  description:
    '라이톤은 나에게 필요한 목표달성을 위해 “회고 챌린지”에 도전하고, “커뮤니티”를 통해 다른 유저들과 시너지를 만들어가는 회고&커뮤니티 웹서비스입니다',
  keywords: [
    '라이톤',
    'Writon',
    'writon',
    '목표달성',
    '회고',
    '챌린지',
    '커뮤니티',
    '목표달성',
    '자기계발',
    '도전',
    '응원',
    '글',
    '성장',
  ],
  openGraph: {
    title: 'Writon\n:글과 회고로 함께 성장하는 공간',
    description:
      '라이톤은 나에게 필요한 목표달성을 위해 “회고 챌린지”에 도전하고, “커뮤니티”를 통해 다른 유저들과 시너지를 만들어가는 회고&커뮤니티 웹서비스입니다',
    siteName: 'Writon : 글과 회고로 함께 성장하는 공간',
    locale: 'ko_KR',
    type: 'website',
    url: 'https://www.iam.writon.co.kr',
    images: {
      url: '/image/icon/openGraph.png',
    },
  },
  twitter: {
    title: 'Writon : 글과 회고로 함께 성장하는 공간',
    description:
      '라이톤은 나에게 필요한 목표달성을 위해 “회고 챌린지”에 도전하고, “커뮤니티”를 통해 다른 유저들과 시너지를 만들어가는 회고&커뮤니티 웹서비스입니다',
    images: {
      url: '/image/icon/openGraph.png',
    },
  },
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0',

  icons: [
    { rel: 'icon', url: '/image/icon/writon_w.svg', sizes: '48x48' },
    { rel: 'icon', url: '/image/icon/Icon_(192x192).png', sizes: '192x192' },
    { rel: 'icon', url: '/image/icon/Icon_(512x512).png', sizes: '512x512' },
  ],

  manifest: '/manifest.json',
  verification: {
    google: '4LZBJp_5GFiVVDo4NcgegnofhCWdDYPhxMdup2l0Ih8',
    other: {
      'naver-site-verification': ['5841f14781f9e413e1b2fcf9866d6d55bf8ba62a'],
    },
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
        <GoogleAnalytics gaId="GTM-N3PB54VW" />
        <ChannelTalkScript />
      </body>
    </html>
  );
}
