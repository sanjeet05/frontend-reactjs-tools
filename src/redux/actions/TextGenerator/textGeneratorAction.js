import * as actions from '../../../constants/ActionTypes';
import * as servers from '../../../constants/ServerUrl';

function dataDispatch(data, isFetched) {
  return {
    type: actions.TEXT_GENERATOR_DATA,
    payload: {data: data, fetching: isFetched}
  };
}


export const getTextGeneratorData = (data) => {
  const path = servers.TEXT_GENERATOR_URL + '/';
  return ({
    type: actions.API,
    payload: {
      url: path,
      method: 'get',
      data,
      success: (data) => dataDispatch(data, false),    
    }
  });
};

// const path = servers.TEXT_GENERATOR_URL + '/';
// export const getTextGeneratorData = (data) => ({
//   type: actions.API,
//   payload: {
//     url: path,
//     method: 'get',
//     data,
//     success: (data) => dataDispatch(data, false),    
//   }
// });