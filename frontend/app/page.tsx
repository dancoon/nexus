import About from "@/components/about/about";
import Feature from "@/components/feature/feature";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners/partners";
import Statistics from "@/components/statistics/statistics";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Partners />
      <Statistics />
    </>
  );
}
