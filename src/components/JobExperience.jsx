import styles from "./JobExperience.module.css";

import danceshopperLg from "../assets/components/job-experience/job-experience-danceshopper-lg.webp";
import danceshopperMd from "../assets/components/job-experience/job-experience-danceshopper-md.webp";
import danceshopperSm from "../assets/components/job-experience/job-experience-danceshopper-sm.webp";
import danceshopperXs from "../assets/components/job-experience/job-experience-danceshopper-xs.webp";
import notfortouristsLg from "../assets/components/job-experience/job-experience-notfortourists-lg.webp";
import notfortouristsMd from "../assets/components/job-experience/job-experience-notfortourists-md.webp";
import notfortouristsSm from "../assets/components/job-experience/job-experience-notfortourists-sm.webp";
import notfortouristsXs from "../assets/components/job-experience/job-experience-notfortourists-xs.webp";
import syncroLg from "../assets/components/job-experience/job-experience-syncro-lg.webp";
import syncroMd from "../assets/components/job-experience/job-experience-syncro-md.webp";
import syncroSm from "../assets/components/job-experience/job-experience-syncro-sm.webp";
import syncroXs from "../assets/components/job-experience/job-experience-syncro-xs.webp";

function JobExperience() {
  return (
    <div className={styles["job-experience"]}>
      <div className={styles["job-experience__job"]}>
        <p className={styles["job-experience__year"]}>2001 &#8212; 2003</p>
        <div className={styles["job-experience__info"]}>
          <h2 className={styles["job-info__role"]}>Full-Stack Developer</h2>
          <span className={styles["job-info__company"]}>DanceShopper</span>
        </div>
        <a href="https://www.danceshopper.com/" target="_blank">
          <picture className={styles["job-experience__pic"]}>
            <source media="(min-width: 992px)" width={1200} height={1187} srcSet={danceshopperLg} />
            <source media="(min-width: 768px)" width={992} height={981} srcSet={danceshopperMd} />
            <source media="(min-width: 576px)" width={768} height={759} srcSet={danceshopperSm} />
            <source media="(min-width: 1px)" width={576} height={570} srcSet={danceshopperXs} />
            <img src={danceshopperXs} width={576} height={570} alt="DanceShopper" />
          </picture>
        </a>
        <p className={styles["job-experience__txt"]}>
          We met at the ALCC English School in New York, where you get a chance to meet people from all over the world. He was originally from Taiwan, was
          really interested in technology and e-commerce, and had this brilliant idea to sell items for professional dancers online. How could you possibly sell
          shoes online if clients could not physically try them on? Professional dancing, on the other hand, is a nice and specific niche where dancers know
          exactly what they need and order their shoes frequently before every major competition. Those shoes take a lot of abuse and must be updated
          frequently. So, since I already had some expertise with ASP.NET and C#, I decided to assist him in realizing his vision. We took inspiration from
          other websites on the Internet and created an e-commerce website from the ground up, including the SQL Server database for the back end and VeriSign
          for credit card processing. We also implemented a content management system for updating the products, and an analytics system for tracking user
          behavior. The website was launched on time and was well-received by the customers.
        </p>
      </div>
      <div className={styles["job-experience__job"]}>
        <p className={styles["job-experience__year"]}>2004 &#8212; 2006</p>
        <div className={styles["job-experience__info"]}>
          <h2 className={styles["job-info__role"]}>Web Consultant</h2>
          <span className={styles["job-info__company"]}>Not For Tourists</span>
        </div>
        <a href="https://www.notfortourists.com/" target="_blank">
          <picture className={styles["job-experience__pic"]}>
            <source media="(min-width: 992px)" width={1200} height={1187} srcSet={notfortouristsLg} />
            <source media="(min-width: 768px)" width={992} height={981} srcSet={notfortouristsMd} />
            <source media="(min-width: 576px)" width={768} height={759} srcSet={notfortouristsSm} />
            <source media="(min-width: 1px)" width={576} height={570} srcSet={notfortouristsXs} />
            <img src={notfortouristsXs} width={576} height={570} alt="NotForTourists" />
          </picture>
        </a>
        <p className={styles["job-experience__txt"]}>
          The Not For Tourists Guide to New York City is a map-based, neighborhood-by-neighborhood dream guide designed to lighten the load of already
          street-savvy New Yorkers, commuters, business travelers, and, yes, tourists too. I was hired as a web consultant to assist in the implementation of a
          more centralized and database-driven content management system. So that multiple editors with varying levels of access might simply modify their
          guidelines from a single central database. I created the main website as well as the CMS, which would automatically sync with the most recent
          modifications. This would allow a traveling editor to simply contribute, add, or amend any landmark, restaurant, bar, or store that would subsequently
          appear in the guide's final book version. We even tried implementing automatic page layout in InDesign by linking it straight to the central database.
          The CMS also allowed for the automatic generation of an interactive map with hotspots and interactive tooltips, allowing for a more interactive user
          experience. We also implemented a search feature, allowing users to quickly find any landmark, restaurant, bar, or store within the guide.
        </p>
      </div>
      <div className={styles["job-experience__job"]}>
        <p className={styles["job-experience__year"]}>2006, 2007</p>
        <div className={styles["job-experience__info"]}>
          <h2 className={styles["job-info__role"]}>.NET Programmer</h2>
          <span className={styles["job-info__company"]}>Syncro Services</span>
        </div>
        <a href="https://www.syncroservices.com/" target="_blank">
          <picture className={styles["job-experience__pic"]}>
            <source media="(min-width: 992px)" width={1200} height={1187} srcSet={syncroLg} />
            <source media="(min-width: 768px)" width={992} height={981} srcSet={syncroMd} />
            <source media="(min-width: 576px)" width={768} height={759} srcSet={syncroSm} />
            <source media="(min-width: 1px)" width={576} height={570} srcSet={syncroXs} />
            <img src={syncroXs} width={576} height={570} alt="Syncro" />
          </picture>
        </a>
        <p className={styles["job-experience__txt"]}>
          For over 60 years, Syncro Services has been a pioneer in content distribution. They are putting their experience to work to maximize cloud-based
          content management, whether it be asset management for individual clients or the distribution of some of the most popular television shows in the
          world. Syncro deals with a lot of stuff, and if I recall correctly, YouTube did not exist at the time. They were delivering their content in an
          old-fashioned manner by mailing out a large number of DVDs and other items. So, once again, we envisioned a centralized website where clients could
          immediately upload and browse their media. Switching to 100% digitally stored media significantly reduced distribution expenses. Not only that, but
          the central website made cooperation and brainstorming on new ideas easier and virtually instantaneous. Back then, we employed cutting-edge
          technology, ASP.NET 2.0, in conjunction with Microsoft's Silverlight to create engaging, dynamic user experiences for Web and mobile applications.
          This approach enabled us to build a website that was both cost-effective and user-friendly. We were able to quickly respond to customer feedback and
          evolve our product. The website was a great success, and we were able to expand our customer base significantly.
        </p>
      </div>
    </div>
  );
}

export default JobExperience;
