import { createStore } from 'redux';
import { mainReducer } from './reducer';

const initialState = {
    tat: [4,4,2],
    formation: {
        Goalkeeper: [{assigned: false}],
        Defender:[
            {assigned: false},
            {assigned: false},
            {assigned: false},
            {assigned: false}
        ],
        Midfielder:[
            {assigned: false},
            {assigned: false},
            {assigned: false},
            {assigned: false}
        ],
        Attacker:[
            {assigned: false},
            {assigned: false},
        ],
    }
}





export const store = createStore(mainReducer, initialState) 