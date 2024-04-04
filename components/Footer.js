"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} bg-gray-900`}>
      <div className={styles.container}>
        <div className={styles.join}>
          <h2 className={styles.logo}>Bahrain Business Setup</h2>
          <p className={styles.description}>
            Office Address: Building: 2196 Road: 3640 Block: 436 10th floor,
            office Number 101 Al Seef, Bahrain.
          </p>
          <div className={styles.contactContainer}>
            <div className={styles.email}>
              <p className={styles.info}>Email us at</p>
              <p className={styles.address}>infobkr@bkrgroup.co</p>
            </div>
            <div className={styles.phone}>
              <p className={styles.info}>Call us at</p>
              <p className={styles.address}>+973 35 61 5033</p>
            </div>
          </div>
        </div>
        <div className={styles.submit}>
          <h2 className={styles.submitTitle}>Let&apos;s Book Appointment!</h2>
          <p className={styles.submitDescription}>
            eady to take the first step towards a smoother business journey?
            Submit your quote request today and let us pave the way for your
            success.
          </p>
          <div className={styles.icons}>
            <ion-icon name={"logo-facebook"}></ion-icon>
            <ion-icon name={"logo-twitter"}></ion-icon>
            <ion-icon name={"logo-instagram"}></ion-icon>
            <ion-icon name={"logo-linkedin"}></ion-icon>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; Copyright 2024</p>
          <ul className={styles.footerLinks}>
            <li className={styles.link}>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#about"} className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#services"} className={styles.link}>
                Services
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#contact"} className={styles.link}>
                Contact
              </Link>
            </li>
            <li className={styles.link}>
              <Link href={"#solutions"} className={styles.link}>
                Top Solutions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
