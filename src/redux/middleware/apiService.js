import axios from 'axios';

export const textApiService = async (url, method, data) => {
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
  try {   
    const response = await axios(config);
    return response.data;
  } catch(error) {
    console.error(error);
  }
};

export const weatherApiService = async (url, method, data) => {
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
  try {   
    const response = await axios(config);
    return response.data;
  } catch(error) {
    console.error(error);
  }
};