'use client';

import styles from '@/styles/atom/hamburger-button.module.css';
export default function HamburgerButton({
  toggleActive,
  setToggleActive,
}: {
  toggleActive: boolean;
  setToggleActive: (toggleActive: boolean) => void;
}) {
  return (
    <div
      className={`${styles.container} ${toggleActive && styles.active}`}
      onClick={() => setToggleActive(!toggleActive)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
