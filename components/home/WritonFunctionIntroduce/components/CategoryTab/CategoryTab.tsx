import styles from './CategoryTab.module.css';

import FunctionIcon_retrospectWrite from '@/public/image/icon/function_icon/FunctionIcon-retrospectWrite.svg';
import FunctionIcon_retrospectWrite_color from '@/public/image/icon/function_icon/FunctionIcon-retrospectWrite-color.svg';
import FunctionIcon_community from '@/public/image/icon/function_icon/FunctionIcon-community.svg';
import FunctionIcon_community_color from '@/public/image/icon/function_icon/FunctionIcon-community-color.svg';
import FunctionIcon_challenge from '@/public/image/icon/function_icon/FunctionIcon-challenge.svg';
import FunctionIcon_challenge_color from '@/public/image/icon/function_icon/FunctionIcon-challenge-color.svg';
import FunctionIcon_smallTalk from '@/public/image/icon/function_icon/FunctionIcon-smallTalk.svg';
import FunctionIcon_smallTalk_color from '@/public/image/icon/function_icon/FunctionIcon-smallTalk-color.svg';
import React from 'react';
import FunctionIcon from '../FunctionIcon/FunctionIcon';
import { functionIconDataType } from '@/types';

const FunctionIcons: functionIconDataType[] = [
  {
    image: FunctionIcon_retrospectWrite,
    image_color: FunctionIcon_retrospectWrite_color,
    text: '회고 작성',
  },
  {
    image: FunctionIcon_community,
    image_color: FunctionIcon_community_color,
    text: '커뮤니티',
  },
  {
    image: FunctionIcon_challenge,
    image_color: FunctionIcon_challenge_color,
    text: '챌린지',
  },
  {
    image: FunctionIcon_smallTalk,
    image_color: FunctionIcon_smallTalk_color,
    text: '스몰톡',
  },
];

export default function CategoryTab({
  activeFunction,
  setActiveFunction,
}: {
  activeFunction: string;
  setActiveFunction: (activeFunction: string) => void;
}) {
  return (
    <div className={styles.container}>
      {FunctionIcons.map((icon) => (
        <React.Fragment key={icon.text}>
          <FunctionIcon
            icon={icon}
            activeFunction={activeFunction}
            setActiveFunction={setActiveFunction}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
