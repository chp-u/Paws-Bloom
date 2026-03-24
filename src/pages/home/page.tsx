import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Facilities from "./components/Facilities";
import StoreInfo from "./components/StoreInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Facilities />
        <StoreInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
