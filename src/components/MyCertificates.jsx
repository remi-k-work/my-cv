import styles from "./MyCertificates.module.css";

import alccLg from "../assets/components/my-certificates/my-certificates-alcc-lg.webp";
import alccMd from "../assets/components/my-certificates/my-certificates-alcc-md.webp";
import alccSm from "../assets/components/my-certificates/my-certificates-alcc-sm.webp";
import alccXs from "../assets/components/my-certificates/my-certificates-alcc-xs.webp";
import prattOrigLg from "../assets/components/my-certificates/my-certificates-pratt-orig-lg.webp";
import prattOrigMd from "../assets/components/my-certificates/my-certificates-pratt-orig-md.webp";
import prattOrigSm from "../assets/components/my-certificates/my-certificates-pratt-orig-sm.webp";
import prattOrigXs from "../assets/components/my-certificates/my-certificates-pratt-orig-xs.webp";
import prattTransLg from "../assets/components/my-certificates/my-certificates-pratt-trans-lg.webp";
import prattTransMd from "../assets/components/my-certificates/my-certificates-pratt-trans-md.webp";
import prattTransSm from "../assets/components/my-certificates/my-certificates-pratt-trans-sm.webp";
import prattTransXs from "../assets/components/my-certificates/my-certificates-pratt-trans-xs.webp";

function MyCertificates() {
  return (
    <figure className={styles["my-certificates"]}>
      <figcaption>My Certificates</figcaption>
      <picture>
        <source media="(min-width: 992px)" width={1200} height={854} srcSet={alccLg} />
        <source media="(min-width: 768px)" width={992} height={706} srcSet={alccMd} />
        <source media="(min-width: 576px)" width={768} height={546} srcSet={alccSm} />
        <source media="(min-width: 1px)" width={576} height={410} srcSet={alccXs} />
        <img src={alccXs} width={576} height={410} alt="ALCC" />
      </picture>
      <picture>
        <source media="(min-width: 992px)" width={1200} height={854} srcSet={prattOrigLg} />
        <source media="(min-width: 768px)" width={992} height={706} srcSet={prattOrigMd} />
        <source media="(min-width: 576px)" width={768} height={546} srcSet={prattOrigSm} />
        <source media="(min-width: 1px)" width={576} height={410} srcSet={prattOrigXs} />
        <img src={prattOrigXs} width={576} height={410} alt="Pratt" />
      </picture>
      <picture>
        <source media="(min-width: 992px)" width={1200} height={616} srcSet={prattTransLg} />
        <source media="(min-width: 768px)" width={992} height={509} srcSet={prattTransMd} />
        <source media="(min-width: 576px)" width={768} height={394} srcSet={prattTransSm} />
        <source media="(min-width: 1px)" width={576} height={296} srcSet={prattTransXs} />
        <img src={prattTransXs} width={576} height={296} alt="Pratt" />
      </picture>
    </figure>
  );
}

export default MyCertificates;
