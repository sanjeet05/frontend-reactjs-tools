import * as actions from '../../constants/ActionTypes';
import * as apiService from './apiService';

const apiMiddleware =  ({ dispatch, getState }) => next => action => {

  if (action.type !== actions.API) {
    return next(action);
  }

  const { url, method, data, success } = action.payload;
  // console.log(data);
  
  apiService.textApiService(url, method, data)
  .then( res => {
    dispatch(success(res));
  });  
     
};

export default apiMiddleware;
