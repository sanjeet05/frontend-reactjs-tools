import * as actions from '../../constants/ActionTypes';
import axios from 'axios';

const apiMiddleware =  ({ dispatch, getState }) => next => action => {

  if (action.type !== actions.API) {
    return next(action);
  }

  const { url, method, data, success } = action.payload;
  // console.log(data);
  const reqObject = data || {};
  
  const config = {
    method,
    url,    
  };

  if (method === 'get') {
    config.params = reqObject;
  } else {
    config.data = reqObject;
  }  

  axios(config)
  .then((response) => {
    dispatch(success(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
     
};

export default apiMiddleware;