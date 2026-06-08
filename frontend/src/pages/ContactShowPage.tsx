import { useParams } from "react-router-dom";
import { useContact } from "../hooks/useContact";

export default function ContactShowPage() {
  const { id } = useParams();

  const contactId = Number(id);

  const { data: contact, isLoading, isError } = useContact(contactId);

  if (!id || Number.isNaN(contactId)) {
    return <p className="text-danger text-center mt-4">ID invalide</p>;
  }

  // LOADING
  if (isLoading) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Chargement du contact...</p>
      </div>
    );
  }

  // ERROR
  if (isError || !contact) {
    return (
      <div className="alert alert-danger text-center mt-4">
        Erreur lors de la récupération du contact
      </div>
    );
  }

  // SUCCESS
  return (
    <section className="container mt-4 d-flex justify-content-center">
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="mb-3 text-center">Contact #{contact.id}</h3>

        <div className="mb-2">
          <strong>Nom :</strong> {contact.name}
        </div>

        <div className="mb-2">
          <strong>Téléphone :</strong> {contact.phone}
        </div>

        <div className="mb-2">
          <strong>Adresse :</strong> {contact.address ?? "Non renseignée"}
        </div>

        <div className="mt-3 text-center">
          <a href="/contacts" className="btn btn-secondary">
            Retour
          </a>
        </div>
      </div>
    </section>
  );
}
