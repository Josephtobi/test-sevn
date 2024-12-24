import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Industries from "./pages/Industries";
import Solutions from "./pages/Solutions";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import RiskAdvisory from "./pages/RiskAdvisory";
import Landing from "./pages/Landing";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/solutions":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/careers":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/risk-advisory":
        title = "";
        metaDescription = "";
        break;
      case "/landing":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Industries />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/risk-advisory" element={<RiskAdvisory />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}
export default App;