import Image from "next/image";
import Link from "next/link"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Image
        src={'/hero_image_home.png'}
        width={1456}
        height={816}
        className={styles.imageHero}
        alt={'menu bar'}
        quality={100}
      />

      <div className={styles.textMain}>
        At Traban Construction, we bring your vision to life with unparalleled craftsmanship and dedication. 
        Whether you're planning a new residential development, a commercial building, or a unique custom project, our team of experienced professionals 
        is here to deliver superior results on time and within budget.
      </div>

      {/* CTA */}
      <div className={styles.contactBTNContainer}>
        <Link href="tel:" className={styles.linkBTN}>Contact</Link>
      </div>

      <div className={styles.contactBTNContainer}>
    <Link
          href={"https://wa.me/44?text=Hi%20Luxury%20Times...."} 
          className={styles.linkBTN}
        >
          WhatsApp
        </Link>
    </div>

    <div className={styles.titleSub}>Expertise and Experience</div>

    <Image
        src={'/about_us.png'}
        width={1456}
        height={816}
        className={styles.imageHero}
        alt={'menu bar'}
        quality={100}
      />

      <div className={styles.contactBTNContainer}>
        <Link href={"/about"} className={styles.linkBTN}>About Us</Link>
      </div>

    <div className={styles.titleSub}>Our Services</div>
    <ul className={styles.containerList}>
      <li className={styles.listItem}>Residential Construction</li>
      <li className={styles.listItem}>Commercial Construction</li>
      <li className={styles.listItem}>Project Management</li>
      <li className={styles.listItem}>Design and Build</li>
      <li className={styles.listItem}>Renovations</li>
    </ul>

    </main>
  );
}
