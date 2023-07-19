import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'e458c77b6cmsh351a1bbb85c880ap146517jsndffd0fba8ec1' ,
    },
  });
    
  return data;
}