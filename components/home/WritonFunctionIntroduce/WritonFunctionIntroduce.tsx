'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './WritonFunctionIntroduce.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';
import { FunctionIntroduceDummy } from './FunctionSectionData';
import FunctionSection from './components/FunctionSection/FunctionSection';
import { functionSectionStateDataType } from '@/types';

export default function WritonFunctionIntroduce() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFunction, setActiveFunction] = useState<string>('회고 작성');
  const [sectionStates, setSectionStates] = useState<
    functionSectionStateDataType[]
  >([
    { name: '회고 작성', state: true },
    { name: '커뮤니티', state: false },
    { name: '챌린지', state: false },
    { name: '스몰톡', state: false },
  ]);

  function isSticky() {
    if (!wrapperRef.current) return false;
    if (window.innerWidth <= 720) return false; // 모바일에서는 sticky 동작 안함
    const rect = wrapperRef.current.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > window.innerHeight;
  }

  const chagngeState = (section: string) => {
    setSectionStates((prevStates) => {
      const newStates = [...prevStates];
      const index = newStates.findIndex((item) => item.name === section);
      if (index !== -1) {
        if (newStates[index].state) {
          if (index !== newStates.length - 1)
            newStates[newStates.length - 1].state = false;
          for (let i = newStates.length - 2; i > index; i--) {
            setTimeout(
              () => {
                setSectionStates((prev) => {
                  const copy = [...prev];
                  copy[i].state = false;
                  return copy;
                });
              },
              100 * (newStates.length - 1 - i),
            );
          }
        } else {
          for (let i = 0; i < index; i++) {
            if (!newStates[i].state) {
              setTimeout(() => {
                setSectionStates((prev) => {
                  const copy = [...prev];
                  copy[i].state = true;
                  return copy;
                });
              }, 100 * i);
            }
          }
          setTimeout(() => {
            setSectionStates((prev) => {
              const copy = [...prev];
              copy[index].state = true;
              return copy;
            });
          }, 80 * index);
        }
      }
      return newStates;
    });
  };

  useEffect(() => {
    chagngeState(activeFunction);
  }, [activeFunction]);

  // IntersectionObserver
  useEffect(() => {
    if (!imageContainerRef.current) return;
    if (window.innerWidth <= 720) return; // 모바일에서는 observer 동작 안함
    const observers: IntersectionObserver[] = [];

    FunctionIntroduceDummy.forEach((item, idx) => {
      const ref = sectionRefs.current[idx];
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!isSticky()) {
              if (activeFunction !== FunctionIntroduceDummy[0].name) {
                setActiveFunction(FunctionIntroduceDummy[0].name);
              }
              return;
            }
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              if (activeFunction !== item.name) {
                setActiveFunction(item.name);
              }
            }
          });
        },
        {
          root: null,
          threshold: 0.5,
        },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [activeFunction]);

  // translateX 제어
  useEffect(() => {
    const onScroll = () => {
      if (!imageContainerRef.current || !wrapperRef.current) return;
      if (window.innerWidth <= 720) return; // 모바일에서는 translateX 동작 안함
      if (!isSticky()) {
        imageContainerRef.current.style.transform = `translateX(0px)`;
        return;
      }
      const slideWidth = window.innerWidth;
      const numSections = FunctionIntroduceDummy.length;
      const maxTranslate = slideWidth * (numSections - 1);

      const slideDelay = window.innerHeight * 1.8;
      const start = wrapperRef.current.offsetTop + slideDelay;
      const end =
        wrapperRef.current.offsetTop +
        wrapperRef.current.offsetHeight -
        window.innerHeight;
      const scrollY = window.scrollY;
      if (scrollY < start) {
        imageContainerRef.current.style.transform = `translateX(0px)`;
        return;
      }
      if (scrollY > end) {
        imageContainerRef.current.style.transform = `translateX(-${maxTranslate}px)`;
        return;
      }
      const percent = Math.max(
        0,
        Math.min(1, (scrollY - start) / (end - start)),
      );
      const currentTranslate = percent * maxTranslate;
      imageContainerRef.current.style.transform = `translateX(-${currentTranslate}px)`;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.scroll_wrapper}>
      <p className={styles.title}>라이톤이 제공하는 기능</p>
      <div className={styles.function_container}>
        {window.innerWidth > 720 && (
          <CategoryTab
            activeFunction={activeFunction}
            setActiveFunction={setActiveFunction}
          />
        )}
        <div ref={imageContainerRef} className={styles.image_container}>
          {FunctionIntroduceDummy.map((item, idx) => (
            <div
              className={styles.slide}
              key={idx}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
            >
              <FunctionSection
                sectionData={item}
                sectionStates={sectionStates}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
