import * as actions from '../../../constants/ActionTypes';

let intialData = {
  data: null,
  fetching: true
};

export default function reducer(state = intialData, action) {
  switch(action.type) {
    case actions.TASK_TWO_DATA:       
      state = {
        ...state,
        data: action.payload.data,
        fetching: action.payload.fetching,
      }; 
      break;  
    case actions.CLEAR_STATE_VALUE:            
      state = {
        ...state,
        data: action.payload.data,
        fetching: action.payload.fetching,
      };
      break;   
    default:
      break;
  }
  return state;
};
