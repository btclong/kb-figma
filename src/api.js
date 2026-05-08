import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ||'https://kb-figma-ak0v.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
