// component css styles
import styles from "./MyCertificates.module.css";

// assets
import * as assets from "../assets/my-certificates";

export default function MyCertificates() {
  return (
    <figure className={styles["my-certificates"]}>
      <figcaption>My Certificates</figcaption>
      <a href="/my-certificates.pdf" target="_blank">
        <picture>
          <source media="(min-width: 992px)" width={1200} height={854} srcSet={assets.alccLg} />
          <source media="(min-width: 768px)" width={992} height={706} srcSet={assets.alccMd} />
          <source media="(min-width: 576px)" width={768} height={546} srcSet={assets.alccSm} />
          <source media="(min-width: 1px)" width={576} height={410} srcSet={assets.alccXs} />
          <img src={assets.alccXs} width={576} height={410} alt="ALCC" />
        </picture>
        <picture>
          <source media="(min-width: 992px)" width={1200} height={854} srcSet={assets.prattOrigLg} />
          <source media="(min-width: 768px)" width={992} height={706} srcSet={assets.prattOrigMd} />
          <source media="(min-width: 576px)" width={768} height={546} srcSet={assets.prattOrigSm} />
          <source media="(min-width: 1px)" width={576} height={410} srcSet={assets.prattOrigXs} />
          <img src={assets.prattOrigXs} width={576} height={410} alt="Pratt" />
        </picture>
        <picture>
          <source media="(min-width: 992px)" width={1200} height={616} srcSet={assets.prattTransLg} />
          <source media="(min-width: 768px)" width={992} height={509} srcSet={assets.prattTransMd} />
          <source media="(min-width: 576px)" width={768} height={394} srcSet={assets.prattTransSm} />
          <source media="(min-width: 1px)" width={576} height={296} srcSet={assets.prattTransXs} />
          <img src={assets.prattTransXs} width={576} height={296} alt="Pratt" />
        </picture>
      </a>
    </figure>
  );
}
