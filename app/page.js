
import Image from "next/image";
import Link from "next/link"
import styles from "./page.module.css";

export default function Home() {

  return (
    <main>
      <div className={styles.containerHeroImage}>
        <Image
          src={'/images/machine_hero.jpg'}
          width={1456}
          height={816}
          className={styles.imageHero}
          alt={'menu bar'}
          quality={100}
        />
      </div>

      {/* INTRO  */}
      <section className={styles.containerIntro}>
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

        <div className={styles.contactDesktop}>07957 195 902</div>

        <div className={styles.contactWhatsapp}>
          <Link
            href={"https://wa.me/447957195902?text=Hi%20Traban%20Construction...."} 
            className={styles.linkBTN}
          >
            WhatsApp
          </Link>
        </div>
      </section>


      {/* ABOUT */}
      <section className={styles.containerAbout}>
        <div className={styles.titleSubLight} id={"about"}>About Us</div>

        <Image
          src={'/images/about_us.jpg'}
          width={1456}
          height={816}
          className={styles.imageAbout}
          alt={'menu bar'}
          quality={100}
        />
        <div className={styles.containerTextDesktop}>
          <div className={styles.textMainWhite}>
              Traban Construction Ltd is a family run business, established in 2009. 
              The company takes its name from the village on the West Coast of Ireland where the family originates from. 
          </div>
          <div className={styles.textMainWhite}>
            Traban is a groundwork&apos;s specialist contractor. With over 25 years experience, 
            we have built a reputation based on service, expertise and quality.
          </div>
        </div>
      </section>

    {/* SERVICES */}
    <div className={styles.titleSub} id={"services"}>Our Services</div>
    <div className={styles.containerTextDesktop}>

      <div className={styles.textMain}>
        We offer a personal and professional service of all aspects relating to 
        groundworks and all other areas of building works, including, but not limited to the following: 
      </div>
      
      <ul className={styles.containerList}>
        <li className={styles.listItem}>Footings/Foundations</li>
        <li className={styles.listItem}>Underpinning</li>
        <li className={styles.listItem}>Piling</li>
        <li className={styles.listItem}>Basements</li>
        <li className={styles.listItem}>Bulk Excavation</li>
        <li className={styles.listItem}>All Aspects of Drainage</li>
        <li className={styles.listItem}>Reinforced Concreete</li>
        <li className={styles.listItem}>Demolition</li>
        <li className={styles.listItem}>Block Paving</li>
        <li className={styles.listItem}>Kerbing</li>
        <li className={styles.listItem}>Tarmac</li>
        <li className={styles.listItem}>Resin</li>
      </ul>

      <div className={styles.textMain}>
        We cover all areas of the South East of England, including: London, Surrey, Sussex, Kent, Essex 
      </div>
    </div>

    {/* PREVIOUS */}
    <div className={styles.containerPrevious}>
    <div className={styles.titleSub} id={"previous"}>Previous Works</div>

    <div className={styles.contianerImageGrid}>
        <Image
            src={'/jobs/job1.jpg'}
            width={1080}
            height={718}
            className={styles.imageJob}
            alt={'correct tick'}
            quality={100}
        />
        <Image
            src={'/jobs/job2.jpg'}
            width={1080}
            height={718}
            className={styles.imageJob}
            alt={'correct tick'}
            quality={100}
        />
        <Image
            src={'/jobs/job3.jpg'}
            width={1080}
            height={718}
            className={styles.imageJob}
            alt={'job 3'}
            quality={100}
        /> 
        <Image
          src={'/jobs/job4.jpg'}
          width={1080}
          height={718}
          className={styles.imageJob}
          alt={'job 4'}
          quality={100}
        />
        <Image
          src={'/jobs/job5.jpg'}
          width={1080}
          height={718}
          className={styles.imageJob}
          alt={'job 5'}
          quality={100}
        />
    </div>

    <div className={styles.containerImageTick}>
        <Image
            src={'/correct_update.png'}
            width={256}
            height={256}
            className={styles.imageTick}
            alt={'correct tick'}
            quality={100}
        />
    </div>

    </div>

    {/* WHY TRABAN */}
    <div className={styles.containerWhy}>
    <div className={styles.titleSub} id={"whytraban"}>Why Choose Traban?</div>
    <div className={styles.textMain}>
      Our committment to excellence is evident in every project we undertake. 
      With a focus on safety, environmental responsibilty and customer satisfation, we ensure
      that every phase of the ground preparation is completed to the highest standards.  
    </div>

    <div className={styles.textMain}>
      Whether it&apos;s a small residential project or a large commercial development, 
      we&apos;ve got the experience, equipment and team to get the job done right!  
    </div>
    </div>

    {/* CONTACT */}
    <section className={styles.containerContact}>
    <div className={styles.titleSubLight} id={"contact"}>Contact Traban</div>

    <Image
        src={'/images/contact_image.jpg'}
        width={1456}
        height={816}
        className={styles.imageContact}
        alt={'menu bar'}
        quality={100}
    />
    <div className={styles.contactBTNContainer}>
      <Link href="tel:07957195902" className={styles.linkBTN}>Contact</Link>
    </div>
    <div className={styles.contactWhatsapp}>
        <Link
          href={"https://wa.me/447957195902?text=Hi%20Traban%20Construction...."} 
          className={styles.linkBTN}
        >
          WhatsApp
        </Link>
    </div>
    <div className={styles.contactDesktop1}>07957 195 902</div>

    <div className={styles.email}>EMAIL: TBCLTD@HOTMAIL.CO.UK</div>
    </section>

    {/* FOOTER */}
    <section className={styles.containerFooter}>
      <div className={styles.titleLinkedin}>Visit our Linkedin</div>
      <Link href={"https://www.linkedin.com/in/martin-folan-9b3699151?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}>
      <div className={styles.containerImageTick}>
          <Image
              src={'/linkedin.png'}
              width={128}
              height={128}
              className={styles.imageLinkedin}
              alt={'linkedin icon'}
              quality={100}
          />
      </div>
      </Link>

      <div className={styles.accGrid}>
        <Image
            src={'/acc2.png'}
            width={758}
            height={403}
            className={styles.imageAcc}
            alt={'linkedin icon'}
            quality={100}
        />
        <Image
            src={'/gold.png'}
            width={1181}
            height={594}
            className={styles.imageAcc}
            alt={'linkedin icon'}
            quality={100}
        />
      </div>

      <div className={styles.containerImage}>
        <Image
            src={'/Traban2.svg'}
            width={600}
            height={600}
            className={styles.imageTraban}
            alt={'menu bar'}
            quality={100}
        />
      </div>
      <div className={styles.footerAddress}>
        <div className={styles.textBold}>&#169; 2018 Traban Construction Limited</div>
        <div className={styles.textBold}>Address:</div>
        <div className={styles.footerAddress}>240 Halfway Street, Sidcup, Kent, DA15 8DW</div>
      </div>
    </section>
    </main>
  );
}
