import styles from "./Header.module.scss";
import FormationSelector from "./../FormationSelector";
import Logo from "./../Logo";

const Header = () => {
  return (
    <div className={styles.main}>
      <Logo />
      <FormationSelector />
    </div>
  );
};

export default Header;
