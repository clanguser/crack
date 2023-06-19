import { useMemo } from "react";
import styles from "./LifestyleContainer.module.css";
const LifestyleContainer = ({
  taglineText,
  taglineHeading,
  categoryText,
  iconText,
  propLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.vectorParent} style={frameDivStyle}>
      <img className={styles.frameChild} alt="" src={taglineText} />
      <div className={styles.gettingStarted}>{taglineHeading}</div>
      <div className={styles.firstStepsTo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </div>
      <div className={styles.lifestyle}>{categoryText}</div>
      <div className={styles.hoursAgo}>2 hours ago</div>
      <div className={styles.readMoreParent}>
        <div className={styles.readMore}>Read More</div>
        <img
          className={styles.vuesaxlineararrowRightIcon}
          alt=""
          src={iconText}
        />
      </div>
    </div>
  );
};

export default LifestyleContainer;
