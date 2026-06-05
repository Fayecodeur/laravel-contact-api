import { Routes, Route } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage ";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;
