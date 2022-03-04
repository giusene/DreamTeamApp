import styles from "./Board.module.scss";
import DropBox from "../DropBox";
import { useSelector } from "react-redux";
import field from "./../../libs/img/field.png";

const Board = () => {
  const formation = useSelector(state => state.formation);

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${field})` }}>
      <div className={styles.goalkeeper}>
        {formation.Goalkeeper.map((e, i) => (
          <DropBox role="Goalkeeper" index={i} content={e} key={i} />
        ))}
      </div>
      <div className={styles.defenders}>
        {formation.Defender.map((e, i) => (
          <DropBox role="Defender" index={i} content={e} key={i} />
        ))}
      </div>
      <div className={styles.midfielders}>
        {formation.Midfielder.map((e, i) => (
          <DropBox role="Midfielder" index={i} content={e} key={i} />
        ))}
      </div>
      <div className={styles.attackers}>
        {formation.Attacker.map((e, i) => (
          <DropBox role="Attacker" index={i} content={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Board;
