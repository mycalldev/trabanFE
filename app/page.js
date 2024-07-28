import Image from "next/image";
import Link from "next/link"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Image
        src={'/images/hero_image_home.jpg'}
        width={1456}
        height={816}
        className={styles.imageHero}
        alt={'menu bar'}
        quality={100}
      />

      <div className={styles.tagline}>Groundwork Construction Specialist for the South East of England</div>

      <div className={styles.textMain}>
        At Traban Construction, we bring your vision to life with unparalleled craftsmanship and dedication. 
        Whether you're planning a new residential development, a commercial building, or a unique custom project, our team of experienced professionals 
        is here to deliver superior results on time and within budget.
      </div>

      {/* CTA */}
      <div className={styles.contactBTNContainer}>
        <Link href="tel:07957195902" className={styles.linkBTN}>Contact</Link>
      </div>

      <div className={styles.contactBTNContainer}>
    <Link
          href={"https://wa.me/447957195902?text=Hi%20Traban%20Construction...."} 
          className={styles.linkBTN}
        >
          WhatsApp
        </Link>
    </div>

    <div className={styles.titleSub}>Expertise and Experience</div>

    <Image
      src={'/images/about_us.jpg'}
      width={1456}
      height={816}
      className={styles.imageAbout}
      alt={'menu bar'}
      quality={100}
    />

    <div className={styles.textMain}>
        With over 25 years in the construction industry, 
        our portfolio showcases a diverse range of successful projects. 
        Our skilled architects, engineers, and builders are committed 
        to maintaining the highest standards of quality and safety.
    </div>

    <div className={styles.titleSub} id={"services"}>Our Services</div>
    <ul className={styles.containerList}>
      <li className={styles.listItem}>Residential Construction</li>
      <li className={styles.listItem}>Commercial Construction</li>
      <li className={styles.listItem}>Project Management</li>
      <li className={styles.listItem}>Design and Build</li>
      <li className={styles.listItem}>Foundations</li>
      <li className={styles.listItem}>Remediation Works</li>
    </ul>

    <div className={styles.contactBTNContainer}>
      <Link href={"/about"} className={styles.linkBTN}>Contact</Link>
    </div>

    <Image
        src={'/images/contact_image.jpg'}
        width={1456}
        height={816}
        className={styles.imageContact}
        alt={'menu bar'}
        quality={100}
    />
    <div className={styles.containerFooter}>
      <div className={styles.textBold}>&#169; 2018 Traban Construction Limited</div>
      <div className={styles.textBold}>Address:</div>
      <div className={styles.footerAddress}>240 Halfway Street, Sidcup, Kent, DA15 8DW</div>
    </div>

    <Image
        src={'/Traban2.svg'}
        width={600}
        height={600}
        className={styles.imageTraban}
        alt={'menu bar'}
        quality={100}
    />
    </main>
  );
}
