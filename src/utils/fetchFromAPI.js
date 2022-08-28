import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '5f067e65c2mshd23753e5fb549d9p1e71bajsn754d4f803e56',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}
