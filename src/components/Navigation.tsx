"use client";

import { useState } from "react";
import styles from "./Navigation.module.css";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div>
          <span>Logo</span>
        </div>
        <button
          className={styles.button}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
        <button
          className={`${styles.buttonClose} ${
            isOpen ? styles.buttonCloseShow : styles.buttonCloseHidden
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>
      <div className={styles.wrapper}>
        <nav
          className={`${styles.nav} ${
            isOpen ? styles.navOpen : styles.navHidden
          }`}
        >
          <ul className={styles.navList}>
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </nav>
        {children}
      </div>
    </>
  );
}
