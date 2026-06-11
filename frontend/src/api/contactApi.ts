import axios from "axios";
import type { Contact } from "../types/contact";
import type { contactFormData } from "../schemas/contactSchema";
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getContacts = async (): Promise<Contact[]> => {
  const response = await api.get("/contacts");
  return response.data.data;
};

export const createContact = async (data: Omit<Contact, "id">) => {
  const response = await api.post<Contact>("/contacts", data);
  return response.data;
};

export const getContactById = async (id: number): Promise<Contact> => {
  const response = await api.get(`/contacts/${id}`);
  return response.data.data;
};

export const updateContact = async (id: number, data: contactFormData) => {
  const response = await api.put(`/contacts/${id}`, data);

  return response.data.data;
};

export const deleteContact = async (id: number) => {
  await api.delete(`/contacts/${id}`);
};
