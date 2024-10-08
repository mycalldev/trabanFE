'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
      setToggle(!toggle)
  }

  return (
    <main >
      <div className={styles.navContainer}>
        <div className={styles.containerGrid}>
          <div>
            <Link href="/#" className={styles.undreline}>
              <div className={styles.titleMain}><span>Traban</span> Construction</div>
            </Link>
          </div>
          <div onClick={() => handleToggle()} className={styles.containerBurger}>
              <Image
                src={'/hamburger.png'}
                width={32}
                height={32}
                className={styles.imageBurger}
                alt={'menu bar'}
                quality={100}
              />
          </div>

        </div>
      </div>
      {toggle ? 
            <nav className={styles.navOpen}>
              <ul className={styles.unorderedList}>
                <Link href={'/'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Home</li>
                  </div>
                </Link>
                <a href={'#about'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>About Us</li>
                  </div>
                </a>
                <a href={'#services'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Services</li>
                  </div>
                </a>
                <a href={'#previous'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Previous Works</li>
                  </div>
                </a>
                <a href={'#whytraban'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Why Choose Traban</li>
                  </div>
                </a>
                <a href={'#contact'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Contact</li>
                  </div>
                </a>
              </ul>
            <div className={styles.closeMenu} onClick={() => handleToggle()}>Close Menu</div>
          </nav> 
            : 
          <div></div>
          }


          {/* DESKTOP NAV */}
          <Link href="/#" className={styles.undreline}>
            <div className={styles.titleMainDesktop}>TRABAN CONSTRUCTION</div>
          </Link>
            <nav className={styles.navContainerGrid}>
              <ul className={styles.navDesktopGrid}>
                <a href={'#about'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer}>
                    <li className={styles.listItem}>About Us</li>
                  </div>
                </a>
                <a href={'#services'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer}>
                    <li className={styles.listItem}>Services</li>
                  </div>
                </a>
                <a href={'#previous'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer}>
                    <li className={styles.listItem}>Previous Works</li>
                  </div>
                </a>
                <a href={'#whytraban'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer}>
                    <li className={styles.listItem}>Why Choose Traban</li>
                  </div>
                </a>
                <a href={'#contact'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer}>
                    <li className={styles.listItem}>Contact</li>
                  </div>
                </a>
              </ul>
            </nav>
    </main>
  )
}
