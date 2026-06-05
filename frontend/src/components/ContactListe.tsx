import type { Contact } from "../types/contact";

type ContactProps = {
  contact: Contact;
};
export default function ContactListe({
  contact: { name, phone, address },
}: ContactProps) {
  return (
    <tr>
      <td> {name} </td>
      <td> {phone} </td>
      <td> {address} </td>
    </tr>
  );
}
