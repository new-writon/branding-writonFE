'use client';

import styles from './RenderCell.module.css';

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  differenceInCalendarWeeks,
  getDay,
  isSameMonth,
  isSameDay,
  addDays,
  format,
} from 'date-fns';

import goldBadgeRound from '@/public/image/mainPage/badge/goldBadge-round.svg';
import goldBadge from '@/public/image/mainPage/badge/goldBadge.svg';
import preBtn_round_blue from '@/public/image/mainPage/badge/preBtn-round_blue.svg';
import silverBadgeRound from '@/public/image/mainPage/badge/silverBadge-round.svg';
import silverBadge from '@/public/image/mainPage/badge/silverBadge.svg';
import todayBtn_blue from '@/public/image/mainPage/badge/todayBtn-round_blue.svg';
import writeNotSpecified_blue from '@/public/image/mainPage/badge/writeActiveClick_blue.svg';
import writeClick_blue from '@/public/image/mainPage/badge/writeActiveClick_blue.svg';
import writeActiveHover_blue from '@/public/image/mainPage/badge/writeActiveHover_blue.svg';
import writeActive_blue from '@/public/image/mainPage/badge/writeActive_blue.svg';
import writePre_blue from '@/public/image/mainPage/badge/writePre_blue.svg';
import Image from 'next/image';

const writeButtons = {
  writeNotSpecified: writeNotSpecified_blue,
  writeActiveHover: writeActiveHover_blue,
  writeActive: writeActive_blue,
  writeClick: writeClick_blue,
  writePre: writePre_blue,
  preBtn_round: preBtn_round_blue,
  todayBtn: todayBtn_blue,
};

function getLast10Days() {
  const CalendarData = [];
  const today = new Date();

  for (let i = 0; i < 10; i++) {
    // 새로운 Date 객체 생성하여 today 객체를 복사
    const previousDay = new Date(today);
    // 날짜를 i일 전으로 설정
    previousDay.setDate(today.getDate() - i);
    // 배지 색상을 설정
    let badgeColor;
    if (i === 0) {
      badgeColor = 'Purple';
    } else if (i === 1 || i === 2 || i === 6 || i === 8 || i === 9) {
      badgeColor = 'Gold';
    } else if (i === 4 || i === 7) {
      badgeColor = 'lightPurple';
    } else {
      badgeColor = 'Silver';
    }
    // 객체를 배열에 추가
    CalendarData.push({
      date: previousDay,
      badge: badgeColor,
    });
  }

  return CalendarData;
}

export default function RenderCell({ fold }: { fold: boolean }) {
  const CalendarData = getLast10Days();
  const today = new Date(); // 월이 바뀌면 챌린지 마지막날 유지
  const monthStart = startOfMonth(today); // 1월 1일 (그 달의 시작이 나오게 됨.)
  const monthEnd = endOfMonth(today); // 1월 31일이 나옴.(그 달의 끝)
  const startDate =
    getDay(startOfWeek(monthStart)) === 0
      ? startOfWeek(addDays(startOfWeek(monthStart), -1)) // 9월 1일이 일요일이면 8월 31일이 나오게 됨.
      : startOfWeek(monthStart); // 해당 날짜의 해당 주의 시작 날짜

  const endDate = endOfWeek(monthEnd); // 해당 날짜의 해당 주의 끝 날짜
  const weekNumber =
    getDay(today) === 0
      ? differenceInCalendarWeeks(today, monthStart)
      : differenceInCalendarWeeks(today, monthStart) + 1;

  const SelectBadge = (day: Date) => {
    let BadgeColor = writeButtons.writeNotSpecified;
    //badge 선택 함수
    CalendarData.map((item) => {
      if (isSameDay(day, item.date)) {
        switch (item.badge) {
          case 'lightPurple':
            BadgeColor = writeButtons.writePre;
            break;
          case 'Gold':
            BadgeColor = goldBadge;
            break;
          case 'Silver':
            BadgeColor = silverBadge;
            break;
          case 'Purple':
            BadgeColor = writeButtons.writeActive;
            break;
        }
      }
    });
    return BadgeColor;
  };

  const rows = [];
  let days = [];
  let day = addDays(startDate, 1); // 월요일부터 보이게 하기 위해서 (원래 일요일부터 보임)
  let index = 0;
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = !isSameMonth(day, monthStart)
        ? format(day, 'M.d')
        : format(day, 'd'); //formattedDate랑 같은 값만 서버값이랑 비교해서 처리하면 된다.
      days.push(
        <div
          key={format(day, 'yyyy-MM-dd')}
          className={`${styles.cell} ${
            !isSameMonth(day, monthStart) // 1월이면 12월 2월 비활성화
              ? styles.disabled
              : isSameDay(day, today) // 오늘 날짜 나올때까지 돌리기 오늘날짜 select!!
                ? styles.selected
                : format(today, 'M') === format(day, 'M') // 해당 달이면 활성화
                  ? styles.valid
                  : ''
          }`}
        >
          <div
            className={`${styles.innerday} ${
              SelectBadge(day) === writeButtons.writeActive ||
              SelectBadge(day) === writeButtons.writePre
                ? styles.Active
                : styles.notActive
            }`} // 반응형을 위한 코드
          >
            <div
              className={`${styles.text} ${
                format(today, 'M') !== format(day, 'M')
                  ? styles.not_valid
                  : styles.valid
              }`}
            >
              {Number(format(day, 'd')) > Number(format(today, 'd')) &&
              isSameMonth(day, monthStart) ? (
                ''
              ) : (
                <Image
                  className={`${
                    SelectBadge(day) === writeButtons.writeActive
                      ? styles.writeActive
                      : SelectBadge(day) === writeButtons.writePre
                        ? styles.writePre
                        : SelectBadge(day) === writeButtons.writeNotSpecified
                          ? styles.writeNotSpecified
                          : ''
                  }`}
                  src={
                    //모바일
                    SelectBadge(day) === writeButtons.writeActive
                      ? writeButtons.todayBtn
                      : SelectBadge(day) === goldBadge
                        ? goldBadgeRound
                        : SelectBadge(day) === silverBadge
                          ? silverBadgeRound
                          : SelectBadge(day) === writeButtons.writePre
                            ? writeButtons.preBtn_round
                            : writeButtons.writeActive
                  }
                  alt="반응형 뱃지"
                />
              )}
              {formattedDate}
            </div>
            {Number(format(day, 'd')) > Number(format(today, 'd')) &&
            isSameMonth(day, monthStart) ? ( // 이미지 안나와여하는것 : 주말, 오늘 이후 날짜들, 다른 달 짜투리들
              <Image
                className={styles.virtual_image}
                src={silverBadge} //상관없음. 어차피 opacity 0
                alt="virtual"
              />
            ) : (
              <Image
                className={
                  SelectBadge(day) === writeButtons.writeActive
                    ? styles.writeActive
                    : SelectBadge(day) === writeButtons.writePre
                      ? styles.writePre
                      : SelectBadge(day) === writeButtons.writeNotSpecified
                        ? styles.writeNotSpecified
                        : ''
                }
                src={
                  SelectBadge(day) === writeButtons.writeActive
                    ? writeButtons.writeActive
                    : SelectBadge(day) // 여기서 부터 로직 작성, 오늘이 아닌데, 어떤 값이 false면 그 write사진 writePre로 변경  Status, todayStatus값으로 구분 f,f면 아에 안쓴거(오늘날짜, 아닌날짜 구분까지 플러스하기), t,f면 실버색깔, t,t 금색깔
                }
                alt="성공"
              />
            )}
          </div>
        </div>,
      );

      day = addDays(day, 1);
    }
    rows.push(
      <div key={index} className={styles.row}>
        {days}
      </div>,
    );
    index++;
    days = [];
  }
  return (
    <div className={styles.container}>{fold ? rows : rows[weekNumber]}</div>
  );
}
