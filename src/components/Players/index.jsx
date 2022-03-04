import styles from './Players.module.scss';
import { DragDropContainer } from 'react-drag-drop-container';

const Players = ({ data }) => {

    const dropFunction = (e) => {
        // FUNZIONE SE VOLESSI FARE QUALCOSA ALL'ELEMENTO
    }

    return (
        <DragDropContainer targetKey={data.position} dragData={data} onDrop={(e) => dropFunction(e)}>
            {data.position.charAt(0) === 'G' ?
                <li className={styles.roleG}>
                    <div className={styles.role}>{data.position.charAt(0)}</div>
                    <div className={styles.name}>
                        {data.name}
                    </div>
                </li>
                :
                data.position.charAt(0) === 'D' ?
                    <li className={styles.roleD}>
                        <div className={styles.role}>{data.position.charAt(0)}</div>
                        <div className={styles.name}>
                            {data.name}
                        </div>
                    </li>
                    :
                    data.position.charAt(0) === 'M' ?
                        <li className={styles.roleM}>
                            <div className={styles.role}>{data.position.charAt(0)}</div>
                            <div className={styles.name}>
                                {data.name}
                            </div>
                        </li>
                        :
                        <li className={styles.roleA}>
                            <div className={styles.role}>{data.position.charAt(0)}</div>
                            <div className={styles.name}>
                                {data.name}
                            </div>
                        </li>
            }


        </DragDropContainer>
        // <div>
        //     <ul>
        //         <li>
        //             <DragDropContainer
        //                 targetKey="foo"
        //                 dragData='Cane'
        //                 onDrop={(e) => dropFunction(e)}>
        //                 <div>Cane</div>
        //             </DragDropContainer>
        //         </li>
        //         <li>
        //             <DragDropContainer
        //                 targetKey="portiere"
        //                 dragData='Gatto'
        //                 onDrop={(e) => dropFunction(e)}>
        //                 <div>Gatto</div>
        //             </DragDropContainer>
        //         </li>
        //     </ul>

        // </div>
    )
}

export default Players