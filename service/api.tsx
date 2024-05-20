import axios from "axios";

export const api = axios.create({
  baseURL: 'https://www.vnw-crm.com',
});