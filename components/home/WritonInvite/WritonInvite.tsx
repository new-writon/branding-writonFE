'use client';
import styles from './WritonInvite.module.css';
import image_invite from '@/public/image/mainPage/invite-onboarding/image-invite.png';
import image_onboarding from '@/public/image/mainPage/invite-onboarding/image-onboarding.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const imageInviteStyle = {
  width: 'calc(410 / 980 * 100vh) !important',
  height: 'calc(410 / 980 * 100vh) !important',
};
const imageOnboardingStyle = {
  width: 'calc(578 / 980 * 100vh) !important',
  height: 'calc(892 / 980 * 100vh) !important',
};

export default function WritonInvite() {
  const [active, setActive] = useState<boolean>(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else if (entry.boundingClientRect.top > 0) {
          setActive(false); // 요소가 화면 위로 올라가면 active 해제
        }
      },
      {
        threshold: 0.5, // 요소가 30% 이상 보이면 콜백 함수 실행
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.container} ${active && styles.active}`}
    >
      <p className={styles.title}>
        우리 팀만의 프라이빗한 회고 공간으로 초대해요
      </p>
      <Image
        src={image_invite}
        alt="invite"
        style={imageInviteStyle}
        quality={100}
        className={styles.image_invite}
      />
      <Image
        src={image_onboarding}
        alt="onboarding"
        style={imageOnboardingStyle}
        quality={100}
        className={styles.image_onboarding}
      />
    </div>
  );
}
