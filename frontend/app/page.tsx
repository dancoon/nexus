import About from "@/components/about/about";
import Articles from "@/components/articles/articles";
import Contact from "@/components/contact/contact";
import Events from "@/components/events/events";
import Faqs from "@/components/faqs/faqs";
import Feature from "@/components/feature/feature";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners/partners";
import Statistics from "@/components/statistics/statistics";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <About />
      {/* <Partners /> */}
      <Statistics />
      <Articles />
      <Events />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
