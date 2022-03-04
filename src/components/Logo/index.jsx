import styles from "./Logo.module.scss";
import logo from "./../../libs/img/dreamteam-logo.png";

const Logo = () => {
  return (
    <div className={styles.main}>
      <img src={logo} alt="Dream Team" />
    </div>
  );
};

export default Logo;
