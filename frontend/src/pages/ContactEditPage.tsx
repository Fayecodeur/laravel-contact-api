import { useParams } from "react-router-dom";
import { useContact } from "../hooks/useContact";
import ContactEditForm from "../components/ContactEditForm";

export default function ContactEditPage() {
  const { id } = useParams();

  const { data: contact, isLoading } = useContact(Number(id));

  if (isLoading) return <p>Chargement...</p>;

  if (!contact) return <p>Introuvable</p>;

  return (
    <div className="container mt-4">
      <h3>Modifier contact</h3>
      <ContactEditForm contact={contact} />
    </div>
  );
}
