import axios from 'axios'

export const API_GITHUB = axios.create({
  baseURL: 'https://api.github.com/',
})
