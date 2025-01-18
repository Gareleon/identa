import Contact from "@/components/main/Contact";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import Intro from "@/components/main/intro";
import { Services } from "@/components/main/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-items-center  min-h-max gap-16  font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Intro />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
