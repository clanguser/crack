import LifestyleContainer from "../components/LifestyleContainer";
import styles from "./DemoCompany.module.css";
const DemoCompany = () => {
  return (
    <div className={styles.democompany}>
      <div className={styles.democompanyChild} />
      <img className={styles.democompanyItem} alt="" src="/group-34.svg" />
      <img className={styles.democompanyInner} alt="" src="/group-38.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.vuesaxlinearsearchNormalParent}>
          <img
            className={styles.vuesaxlinearsearchNormalIcon}
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
          <div className={styles.findCourses}>Find Courses</div>
        </div>
      </div>
      <div className={styles.weTackleInteresting}>
        We tackle interesting topics every day
      </div>
      <img
        className={styles.vuesaxboldsetting2Icon}
        alt=""
        src="/vuesaxboldsetting2.svg"
      />
      <img className={styles.groupIcon} alt="" src="/group-28.svg" />
      <div className={styles.home}>Home</div>
      <div className={styles.work}>Work</div>
      <div className={styles.pricing}>Pricing</div>
      <div className={styles.blog}>Blog</div>
      <div className={styles.about}>About</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/vector-134.svg" />
      <div className={styles.button}>
        <div className={styles.all}>All</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.all}>Technology</div>
      </div>
      <div className={styles.button2}>
        <div className={styles.all}>Lifestyle</div>
      </div>
      <div className={styles.button3}>
        <div className={styles.all}>Sport</div>
      </div>
      <div className={styles.button4}>
        <div className={styles.all}>Education</div>
      </div>
      <div className={styles.button5}>
        <div className={styles.all}>Healthcare</div>
      </div>
      <div className={styles.button6}>
        <div className={styles.all}>Food</div>
      </div>
      <LifestyleContainer
        taglineText="/rectangle-1073@2x.png"
        taglineHeading="Changing people's lifestyles for the better"
        categoryText="LIFESTYLE"
        iconText="/vuesaxlineararrowright.svg"
        propLeft="40px"
      />
      <LifestyleContainer
        taglineText="/rectangle-1075@2x.png"
        taglineHeading="Simple Solutions for Complex Connections"
        categoryText="TECHNOLOGY"
        iconText="/vuesaxlineararrowright1.svg"
        propLeft="385px"
      />
      <LifestyleContainer
        taglineText="/rectangle-1077@2x.png"
        taglineHeading="All things are difficult before they are easy"
        categoryText="SPORT"
        iconText="/vuesaxlineararrowright2.svg"
        propLeft="730px"
      />
      <LifestyleContainer
        taglineText="/rectangle-1079@2x.png"
        taglineHeading="How to Memorize everything you read?"
        categoryText="EDUCATION"
        iconText="/vuesaxlineararrowright2.svg"
        propLeft="1075px"
      />
      <div className={styles.demoCompany}>Demo Company</div>
    </div>
  );
};

export default DemoCompany;
