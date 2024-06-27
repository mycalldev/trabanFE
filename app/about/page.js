import Image from "next/image";
import Link from "next/link"
import styles from "../page.module.css";

export default function Home() {
  return (
    <main>
      <Image
        src={'/about_us.png'}
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

      <div className={styles.titleSub}>Expertise and Experience</div>

      <div className={styles.textMain}>
        With over 25 years in the construction industry, 
        our portfolio showcases a diverse range of successful projects. 
        Our skilled architects, engineers, and builders are committed 
        to maintaining the highest standards of quality and safety.
      </div>

      {/* CTA */}
      <div className={styles.contactBTNContainer}>
        <Link href="tel:" className={styles.linkBTN}>Contact</Link>
      </div>
    </main>
  );
}
