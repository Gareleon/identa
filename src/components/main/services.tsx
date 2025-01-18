import Typography from "../typography";
import Image from "next/image";
import Divider from "./titleDivider";
import CustomButton from "./customButton";
import { GiHealingShield } from "react-icons/gi";
import { RiSparkling2Line, RiToothLine } from "react-icons/ri";

const services = [
  {
    name: "Preventivna Stomatologija",
    icon: <GiHealingShield size={50} className="text-primary" />,
    description:
      "Redovne kontrole i profesionalno čišćenje zuba ključ su za očuvanje zdravlja vaših zuba i desni. Naš tim vam pomaže da sprečite potencijalne probleme i održite svoj osmeh zdravim i blistavim.",
    image_href: "/images/intro-illustration.jpg",
  },
  {
    name: "Estetska Stomatologija",
    icon: <RiSparkling2Line size={50} className="text-primary" />,
    description:
      "Bilo da želite beljenje zuba, fasete, ili potpuno novi osmeh, naš tim specijalista koristi najsavremenije tehnike kako bi vaš osmeh zablistao i ostavio najbolji utisak.",
    image_href: "/images/intro-illustration.jpg",
  },
  {
    name: "Protetika i Implantologija",
    icon: <RiToothLine size={50} className="text-primary" />,
    description:
      "Rešavamo probleme sa nedostatkom zuba uz pomoć zubnih proteza, krunica, mostova i zubnih implantata. Naša rešenja su funkcionalna, estetska i dugotrajna, prilagođena vašim potrebama.",
    image_href: "/images/intro-illustration.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full h-fit min-h-max mx-auto py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full px-4 gap-10">
        <div className="w-full flex flex-col justify-between items-center gap-16">
          <div>
            <Typography variant="h1" text="Naše usluge" />
            <Divider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-center">
            <Typography
              variant="h3"
              text="Prava stvar za vaš osmeh"
              className="border-b sm:border-b-0  sm:border-r pb-4 sm:pr-3 sm:pb-0 text-center sm:text-left"
            />
            <Typography
              variant="h5"
              text="Naša stručnost u stomatološkoj nezi i modernim tehnikama osigurava da pružimo inovativna, efikasna i prilagođena rešenja koja zadovoljavaju vaše jedinstvene potrebe."
            />
          </div>
        </div>

        {services.map((service, index) => (
          <div
            className={`flex flex-col items-center justify-center gap-2 ${
              (index + 1) % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            key={index}
          >
            <div className="w-full sm:w-[50%] flex flex-col items-start justify-start gap-4 md:gap-6 lg:gap-10">
              <div className="space-y-2 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {service.icon}
                <Typography variant="h2" text={service.name} />
              </div>

              <Typography variant="h5" text={service.description} />
              <a href="#pricing" title="Saznaj više">
                <CustomButton text="Saznaj više" variant="outline" />
              </a>
            </div>
            <Image
              src={service.image_href}
              alt={service.name}
              width={600}
              height={600}
              className="w-full sm:w-[50%]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
