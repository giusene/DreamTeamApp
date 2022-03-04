import styles from './Main.module.scss';
import Board from './../../components/Board';
import Teams from './../../components/Teams';
import DxAside from './../../components/DxAside';

const Main = () => {
    return(
        <div className={styles.main}>
            <Teams />
            <Board />
            <DxAside />
        </div>
    )
}

export default Main