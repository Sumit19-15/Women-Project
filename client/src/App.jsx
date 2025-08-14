import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Emergency from "./pages/Emergency";
import Feedback from "./pages/Feedback";
import "./App.css";

function LayoutWrapper({ children }) {
  const location = useLocation();

  const noLayoutRoutes = ["/emergency", "/feedback"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main
        className={!hideLayout ? "px-40 flex flex-1 justify-center py-5" : ""}
      >
        {children}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#181111]"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/emergency" element={<Emergency />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
          </Routes>
        </LayoutWrapper>
      </Router>
    </div>
  );
}
