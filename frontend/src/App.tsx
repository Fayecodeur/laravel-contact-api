import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage ";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;
