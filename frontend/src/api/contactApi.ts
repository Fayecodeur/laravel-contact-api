import axios from "axios";
import type { Contact } from "../types/contact";
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getContact = async (): Promise<Contact[]> => {
  const response = await api.get("/contacts");
  return response.data.data;
};
