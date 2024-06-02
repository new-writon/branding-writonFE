'use client';

import React, { useEffect, useState } from 'react';
import styles from './WritonFunctionIntroduce.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';
import { FunctionIntroduceDummy } from './FunctionSectionData';
import FunctionSection from './components/FunctionSection/FunctionSection';
import { functionSectionStateDataType } from '@/types';

export default function WritonFunctionIntroduce() {
  const [activeFunction, setActiveFunction] = useState<string>('회고 작성');
  const [sectionStates, setSectionStates] = useState<
    functionSectionStateDataType[]
  >([
    { name: '회고 작성', state: true },
    { name: '커뮤니티', state: false },
    { name: '챌린지', state: false },
    { name: '스몰톡', state: false },
  ]);

  const chagngeState = (section: string) => {
    setSectionStates((prevStates) => {
      const newStates = [...prevStates];
      const index = newStates.findIndex((item) => item.name === section);

      if (index !== -1) {
        if (newStates[index].state) {
          if (index !== newStates.length - 1)
            newStates[newStates.length - 1].state = false; // Immediately set the last section to false

          for (let i = newStates.length - 2; i > index; i--) {
            setTimeout(
              () => {
                setSectionStates((prevStates) => {
                  const newStates = [...prevStates];
                  newStates[i].state = false;
                  return newStates;
                });
              },
              100 * (newStates.length - 1 - i),
            );
          }
        } else {
          for (let i = 0; i < index; i++) {
            if (!newStates[i].state) {
              setTimeout(() => {
                setSectionStates((prevStates) => {
                  const newStates = [...prevStates];
                  newStates[i].state = true;
                  return newStates;
                });
              }, 100 * i);
            }
          }
          setTimeout(() => {
            setSectionStates((prevStates) => {
              const newStates = [...prevStates];
              newStates[index].state = true;
              return newStates;
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

  return (
    <div className={styles.container}>
      <p className={styles.title}>라이톤이 제공하는 기능</p>
      <div className={styles.function_container}>
        <CategoryTab
          activeFunction={activeFunction}
          setActiveFunction={setActiveFunction}
        />
        <div className={styles.image_container}>
          {FunctionIntroduceDummy.map((item, idx) => (
            <React.Fragment key={idx}>
              <FunctionSection
                sectionData={item}
                sectionStates={sectionStates}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
