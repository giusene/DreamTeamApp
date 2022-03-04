import styles from './Teams.module.scss';
import Accordion from 'react-bootstrap/Accordion'
import Team from './../Team'
import { serieA } from './../../data/serieA'


const Teams = () => {
    return (
        <div className={styles.main}>
            <Accordion flush>

                {serieA.teams.map(team => (
                    <Team key={team.id} team={team} />
                ))}

            </Accordion>
        </div>
    )
}

export default Teams