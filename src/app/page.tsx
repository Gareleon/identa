import Contact from "@/components/main/Contact";
import Footer from "@/components/main/footer";
import Gallery from "@/components/main/gallery";
import Header from "@/components/main/header";
import Intro from "@/components/main/intro";
import { Prices } from "@/components/main/pricing";
import { Services } from "@/components/main/services";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-items-center  min-h-max gap-16  font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Intro />
      <Services />
      <Prices />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
