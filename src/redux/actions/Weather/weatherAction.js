import * as actions from '../../../constants/ActionTypes';
import * as servers from '../../../constants/ServerUrl';
import * as constants from '../../../constants/Constants';

function dataDispatch(data, isFetched) {
  return {
    type: actions.GET_WEATHER_DATA,
    payload: {data: data, fetching: isFetched}
  };
}


export const getWeatherData = (data={}) => {
  const path = servers.WEATHER_URL;
    
  const reqObj = {
    q: `${data.city}, ${data.country_code}`,
    appid: constants.API_KEY,
    units: 'metric',
  };

  return ({
    type: actions.API,
    payload: {
      url: path,
      method: 'get',
      data: reqObj,
      success: (data) => dataDispatch(data, false),    
    }
  });
};
