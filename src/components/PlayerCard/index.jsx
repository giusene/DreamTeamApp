import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./PlayerCard.module.scss";
import { useDispatch } from "react-redux";
import { deletePlayer } from "./../../store/actions";

const PlayerCard = ({ data, index }) => {
  const boxRef = useRef([]);
  const dispatch = useDispatch();

  const handleDelete = () => {
    // console.log(data.position, index);
    dispatch(deletePlayer(data.position, index));
  };

  useEffect(() => {
    gsap.to(boxRef.current[index], { rotation: "+=360" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      <div
        ref={el => (boxRef.current[index] = el)}
        className={styles.card}
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className={styles.deleteBtn} onClick={handleDelete}>
          x
        </div>
        <div className={styles.info}>
          <div
            className={styles.logo}
            style={{
              backgroundImage: `url(${data.team?.crestUrl})`,
            }}
          ></div>

          <div className={styles.name}>{data.name}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
