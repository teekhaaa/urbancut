import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={console.log("yes")}>
        <span className={styles.icon} />
      </button>
      <nav className={isOpen ? styles.menuOpen : styles.menuClosed}>
        <ul className='min-h-[100vh] bg-black text-white'>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
