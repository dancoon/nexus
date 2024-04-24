import About from "@/components/about/about";
import Articles from "@/components/articles/articles";
import Events from "@/components/events/events";
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
      <Articles />
      <Events />
    </>
  );
}
