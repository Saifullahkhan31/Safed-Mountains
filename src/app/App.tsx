import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HookSection } from "./components/HookSection";
import { OrbisSection } from "./components/OrbisSection";
import { CharacterSection } from "./components/CharacterSection";
import { SageTerminal } from "./components/SageTerminal";
import { BooksSection } from "./components/BooksSection";
import { HollowlightSection } from "./components/HollowlightSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        color: "#E0E0E0",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSection />
      <HookSection />
      <OrbisSection />
      <CharacterSection />
      <SageTerminal />
      <BooksSection />
      <HollowlightSection />
      <Footer />
    </div>
  );
}
