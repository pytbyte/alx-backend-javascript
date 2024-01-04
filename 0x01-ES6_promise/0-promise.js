const getResponseFromAPI = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve('API response data'), 1000)
  );
  
export default getResponseFromAPI;
