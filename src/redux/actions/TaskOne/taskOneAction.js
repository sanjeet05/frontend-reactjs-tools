import * as actions from '../../../constants/ActionTypes';
import { BASE_URL } from '../../../constants/ServerUrl';
import axios from 'axios';

function dataDispatch(data, isFetched) {
  return {
    type: actions.TASK_ONE_DATA,
    payload: {data: data, fetching: isFetched}
  };
}

// return constant data
export const getTaskOneData = () => {
  return (dispatch) => { 
    
    const items = [
      {
        name: 'Image 1',
        url: 'https://source.unsplash.com/random/950x550',
      },
      {
        name: 'Image 2',
        url: 'https://source.unsplash.com/random/150x150',
      },
      {
        name: 'Image 3',
        url: 'https://source.unsplash.com/random/250x200',
      }
    ];

    dispatch(dataDispatch(items, false));

  };
};

// export const getTaskOneData = () => {
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
