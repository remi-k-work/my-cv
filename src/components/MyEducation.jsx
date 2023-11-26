import styles from "./MyEducation.module.css";

function MyEducation() {
  return (
    <figure className={styles["my-education"]}>
      <figcaption>My Education</figcaption>
      <dl>
        <dt className={styles["my-education__school"]}>
          <h2 className={styles["school__name"]}>Rzeszów University of Technology</h2>
          <p className={styles["school__year"]}>&#8226; 1997 &#8212; 1999 &#8226;</p>
          <p className={styles["school__location"]}>Rzeszów, Poland</p>
        </dt>
        <dd className={styles["my-education__info"]}>
          Rzeszów University of Technology is a state-funded academic university that makes up a part of the Polish national education and science system.
          Rzeszów University of Technology offers its students a wide variety of programs and courses. It also undertakes research and scientific projects in
          the following specialized fields of the applied sciences: engineering, mathematics, physics, economics, as well as the chemical and biological
          sciences. I originally studied "Computer Science" there, but I was unable to complete my degree owing to personal issues and an imminent opportunity
          to travel to the United States.
        </dd>
        <dt className={styles["my-education__school"]}>
          <h2 className={styles["school__name"]}>American Language Communication Center</h2>
          <p className={styles["school__year"]}>&#8226; 2000 &#8212; 2002 &#8226;</p>
          <p className={styles["school__location"]}>New York, US</p>
        </dt>
        <dd className={styles["my-education__info"]}>
          I studied English as a second language and passed the English as a Foreign Language Test. The exam assesses your ability to comprehend and use English
          at the university level. It puts your writing, reading, listening, and speaking abilities to the test.
        </dd>
        <dt className={styles["my-education__school"]}>
          <h2 className={styles["school__name"]}>Pratt Institute</h2>
          <p className={styles["school__year"]}>&#8226; 2002 &#8212; 2004 &#8226;</p>
          <p className={styles["school__location"]}>New York, US</p>
        </dt>
        <dd className={styles["my-education__info"]}>
          Pratt Institute equips tomorrow's creative leaders with the knowledge and expertise they need to make the world a better place. Learned about the ever
          changing media, which includes computers and the Internet, as well as art and design in general, which can educate, inspire, and challenge us all, as
          part of my "Interactive Media" degree. Were you aware that Andy Warhol attended Pratt?
        </dd>
      </dl>
    </figure>
  );
}

export default MyEducation;
