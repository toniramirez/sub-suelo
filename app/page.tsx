import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Pipeline from "@/components/sections/Pipeline";
import Artists from "@/components/sections/Artists";
import Work from "@/components/sections/Work";
import Numbers from "@/components/sections/Numbers";
import Team from "@/components/sections/Team";
import Studio from "@/components/sections/Studio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Logo from "@/components/ui/Logo";

export default function Page() {
  return (
    <>
      <Header logo={<Logo />} />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Pipeline />
        <Artists />
        <Work />
        <Numbers />
        <Team />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
