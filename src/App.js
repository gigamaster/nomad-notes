import "./App.css";

//toast
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import { Sidebar, Navbar } from "./layout";
import {
  Home,
  AllNotes,
  ArchiveNotes,
  TrashNotes,
  TagNotes,
  ErrorPage,
} from "./pages";

import { TagsModal, CreateNoteModal } from "./components";

//router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

const App = () => {
  const { viewEditTagsModal, viewCreateNoteModal } = useSelector(
    (state) => state.modal
  );

  return (
    <div className="app">
      {/* modals */}
      {viewCreateNoteModal && <CreateNoteModal />}
      {viewEditTagsModal && <TagsModal type="edit" />}

      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Router basename="/nomad-notes">
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<TagNotes />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to={"/404"} replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
