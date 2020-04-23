import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
    
    // const modifiedData = { confirmed, recovered, deaths, lastUpdate }
    // don't have to store the value in an object if we immediately return it

    return { confirmed, recovered, deaths, lastUpdate };
    
  } catch (error) {

  }
};