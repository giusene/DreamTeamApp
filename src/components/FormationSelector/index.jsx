import styles from "./FormationSelector.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeFormation } from "./../../store/actions";

const FormationSelector = () => {
  const dispatch = useDispatch();
  const tactics = useSelector(state => state.tactics);

  const handleSelect = e => {
    dispatch(
      changeFormation([
        parseInt(e.target.value[0]),
        parseInt(e.target.value[1]),
        parseInt(e.target.value[2]),
      ])
    );
  };

  return (
    <div className={styles.main}>
      Formation:{" "}
      <select onChange={e => handleSelect(e)}>
        <option value={442}>4-4-2</option>
        <option value={433}>4-3-3</option>
        <option value={352}>3-5-2</option>
        <option value={343}>3-4-3</option>
      </select>
    </div>
  );
};

export default FormationSelector;
