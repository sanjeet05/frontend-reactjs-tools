import * as actions from '../../../constants/ActionTypes';
import { BASE_URL } from '../../../constants/ServerUrl';
import axios from 'axios';

function dataDispatch(data, isFetched) {
  return {
    type: actions.TASK_TWO_DATA,
    payload: {data: data, fetching: isFetched}
  };
}

function getRandomNumber () {
  const min = 1;
  const max = 10;
  const num = Math.floor(min + (Math.random() * (max-min)));
  return num;
}

// return constant data
export const getTaskTwoData = () => {
  return (dispatch) => {
     
    // const items = [
    //   {
    //     name: 'Sanjeet',
    //   },
    //   {
    //     name: 'John',
    //   }
    // ];

    const items = [];

    const num = getRandomNumber();

    for (let i = 0; i < num; i++){
      const obj = {
        id: i,
        name: 'Sanjeet'
      };
      items.push(obj);
    }
        
    dispatch(dataDispatch(items, false));

  };
};

// export const getTaskTwoData = () => {
//   return async (dispatch) => { 
    
//     const path = BASE_URL + '/v1/common/getAll';
//     let reqObject = {}; 
//     try {   
//       const response = await axios({  
//           method: 'post',
//           url: path,
//           data: reqObject,      
//       });
//       dispatch(dataDispatch(response.data, false));
//     } catch(error) {
//       console.log(error);
//     }

//   };
// };
