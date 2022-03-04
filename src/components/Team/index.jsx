import { useState } from 'react'
import styles from './Team.module.scss'
import Accordion from 'react-bootstrap/Accordion'
import { milan } from './../../data/milan'
import Players from '../Players'
import { httpGetTeam } from '../../libs/http'

const Team = ({ team }) => {
    const [players, setPlayers] = useState([])
    const resultTeam = milan.squad.filter(player => player.position !== null)
    const item_order = ["Goalkeeper","Defender","Midfielder","Attacker"];
    resultTeam.sort((a, b) => item_order.indexOf(a.position) - item_order.indexOf(b.position));

    const getPlayers = (id) => {
        httpGetTeam(id)
        .then(data => {
            setPlayers(data.squad.filter(player => player.position !== null).sort((a, b) => item_order.indexOf(a.position) - item_order.indexOf(b.position)))
        })
    }

    return (
        <Accordion.Item className={styles.Item} eventKey={team.id}>
            <Accordion.Header className={styles.Header} onClick={() => getPlayers(team.id)}><img src={team.crestUrl} alt={team.Name} />{team.shortName}</Accordion.Header>
            <Accordion.Body className={styles.Body}>
                <ul className={styles.playersList}>
                    {players.map(player => (
                        <Players key={player.id} data={{...player, team: team}} />
                    ))}
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Team