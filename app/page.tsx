import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrackRecord from "../components/TrackRecord";
import Partnerships from "../components/Partnerships";
import AccredianEdge from "../components/AccredianEdge";
import DomainExpertise from "../components/DomainExpertise";
import CourseSegmentation from "../components/CourseSegmentation";
import WhoShouldJoin from "../components/WhoShouldJoin";
import CATFramework from "../components/CATFramework";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import EnquiryForm from "../components/EnquiryForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrackRecord />

        <Partnerships />

        <AccredianEdge />

        <DomainExpertise />

        <CourseSegmentation />

        <WhoShouldJoin />

        <CATFramework />

        <HowItWorks />

        <FAQ />

        <Testimonials />

        <EnquiryForm />
      </main>

      <Footer />
    </>
  );
}