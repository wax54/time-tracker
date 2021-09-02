import { emit } from "process";
import { combineReducers } from "redux";
import {Shift} from "../ShiftCollection";
// EX
// import { combineReducers } from "redux";
// function planets(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case RESET_ALL:
//             return { ...INITIAL_STATE };

//         case LOAD_PLANET:
//             return {
//                 ...state,
//                 [action.payload.id]: { ...action.payload }
//             };

//         default:
//             return state;
//     }
// }


// export default combineReducers({
//     films,
//     planets,
//     people,
// });
const SHIFTS_INITIAL_STATE = {};

function shifts(shifts = SHIFTS_INITIAL_STATE, action) {
    
    switch (action.type) {
        case "START_SHIFT":
            const newShift = new Shift(action.payload);
            return {...shifts, [newShift.id]: newShift };
        case "LOAD_SHIFTS":
            shifts = {...shifts}
            action.payload.forEach(shift => shifts[shift.id] = shift );
            return shifts;
        case "UPDATE_SHIFT":
            const updatedShift = new Shift(action.payload);
            return { ...shifts, [updatedShift.id]: updatedShift };
        case "DELETE_SHIFT":
            shifts = { ...shifts };
            delete shifts[action.shiftId];
            return shifts;
        case "RESET_SHIFTS":
            return SHIFTS_INITIAL_STATE;
        default:
            return shifts;
    }
}

const QUEUE_INITIAL_STATE = [];

function shiftQueue(shifts = QUEUE_INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_SHIFT_TO_UPLOAD_QUEUE":
            return [...shifts, action.payload];

        case "REMOVE_SHIFT_FROM_UPLOAD_QUEUE":
            //to be improved
            return shifts.filter(s => s.type !== action.payload.type ||
                    s.category !== action.payload.category ||
                    s.start !== action.payload.start);
        
        case "RESET_UPLOAD_QUEUE":
        //to be improved
        return [...QUEUE_INITIAL_STATE];

        default:
            return shifts;
    }
}

const USER_INITIAL_STATE = {};
function user(user = USER_INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_USER":
            return action.payload;

        case "RESET_USER":
            return USER_INITIAL_STATE;

        default:
            return user;
    }
}
export default combineReducers({
    shifts,
    user,
    shiftQueue
});