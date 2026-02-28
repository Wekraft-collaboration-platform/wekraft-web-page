
import Section1 from "@/modules/web/Section1";
import Hero from "@/modules/web/hero";
import Navbar from "@/modules/web/navbar";

const Home = () => {
  return (
    <div className="bg-black scroll-smooth">
      <Navbar />
      <Hero />
      <Section1/>
    </div>
  );
};

export default Home;