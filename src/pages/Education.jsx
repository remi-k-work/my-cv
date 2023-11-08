import styles from "./Education.module.css";

import alccLg from "../assets/pages/education/my-certificates-alcc-lg.webp";
import alccMd from "../assets/pages/education/my-certificates-alcc-md.webp";
import alccSm from "../assets/pages/education/my-certificates-alcc-sm.webp";
import alccXs from "../assets/pages/education/my-certificates-alcc-xs.webp";
import prattOrigLg from "../assets/pages/education/my-certificates-pratt-orig-lg.webp";
import prattOrigMd from "../assets/pages/education/my-certificates-pratt-orig-md.webp";
import prattOrigSm from "../assets/pages/education/my-certificates-pratt-orig-sm.webp";
import prattOrigXs from "../assets/pages/education/my-certificates-pratt-orig-xs.webp";
import prattTransLg from "../assets/pages/education/my-certificates-pratt-trans-lg.webp";
import prattTransMd from "../assets/pages/education/my-certificates-pratt-trans-md.webp";
import prattTransSm from "../assets/pages/education/my-certificates-pratt-trans-sm.webp";
import prattTransXs from "../assets/pages/education/my-certificates-pratt-trans-xs.webp";

function Education() {
  return (
    <div className={styles["education"]}>
      <figure>
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
      <figure>
        <figcaption>My Education</figcaption>
        <dl>
          <dt>American Language Communication Center &#8226; 2000 &#8212; 2002 &#8226; New York, US</dt>
          <dd>
            I studied English as a second language and passed the English as a Foreign Language Test. The exam assesses your ability to comprehend and use
            English at the university level. It puts your writing, reading, listening, and speaking abilities to the test.
          </dd>
          <dt>Pratt Institute &#8226; 2002 &#8212; 2004 &#8226; New York, US</dt>
          <dd>
            Pratt Institute equips tomorrow's creative leaders with the knowledge and expertise they need to make the world a better place. Learned about the
            ever changing media, which includes computers and the Internet, as well as art and design in general, which can educate, inspire, and challenge us
            all, as part of my "Interactive Media" degree. Were you aware that Andy Warhol attended Pratt?
          </dd>
        </dl>
      </figure>
    </div>
  );
}

export default Education;
