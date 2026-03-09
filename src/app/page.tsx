"use client"
import Navbar from "@/modules/web/navbar";
import Hero from "@/modules/web/hero";
import dynamic from "next/dynamic";

// Lazy load sections 
// This reduces initial bundle size and main thread work
const Section1 = dynamic(() => import("@/modules/web/Section1"), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-black" />,
});
const Section2 = dynamic(() => import("@/modules/web/Section2"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-black" />,
});
const Section3 = dynamic(() => import("@/modules/web/Section3"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-black" />,
});
const NewSection4 = dynamic(() => import("@/modules/web/NewSection4"), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-black" />,
});
const Section5 = dynamic(() => import("@/modules/web/Section5"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-black" />,
});
const Footer = dynamic(() => import("@/modules/web/Footer"));

const Home = () => {
  return (
    <div className="bg-black scroll-smooth selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <NewSection4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Home;
