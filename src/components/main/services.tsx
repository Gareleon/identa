import Typography from "../typography";
import Image from "next/image";
import Divider from "./titleDivider";
import CustomButton from "./customButton";
import { GiHealingShield, GiToothbrush } from "react-icons/gi";
import {
  RiBracesLine,
  RiScissors2Line,
  RiSparkling2Line,
  RiToothLine,
} from "react-icons/ri";
import { MdCleaningServices, MdEmail } from "react-icons/md";
import { BiChild } from "react-icons/bi";
import { Button } from "../ui/button";
import { PhoneCall } from "lucide-react";

const iconSize = 30;
const iconStyle = "text-primary";

const services = [
  {
    dentist: {
      name: "Dr Biljana Petrovic",
      specialty: "Specijalista oralne hirurgije",
      contact: {
        phone: "064 222 32 88",
        email: "dr.b.petrovic@gmail.com",
        address: "Ilije Bircanina 18, Nis",
      },
      image_href: "/images/intro-illustration-1.jpg",
    },
    services: [
      {
        name: "Oralna Hirurgija",
        icon: <RiScissors2Line size={iconSize} className={iconStyle} />,
        description:
          "Profesionalni tretmani kao što su vađenje umnjaka, implantologija i rešavanje komplikovanih oralnih stanja sa preciznošću i pažnjom.",
        image_href: "/images/oral-surgery.jpg",
      },
      {
        name: "Popravka i Lečenje Zuba",
        icon: <GiToothbrush size={iconSize} className={iconStyle} />,
        description:
          "Efikasno lečenje karijesa i obnavljanje zdravlja vaših zuba uz pomoć savremenih tehnika.",
        image_href: "/images/tooth-repair.jpg",
      },
      {
        name: "Uklanjanje Kamenca",
        icon: <MdCleaningServices size={iconSize} className={iconStyle} />,
        description:
          "Uklanjanje zubnog kamenca i poliranje za bolju oralnu higijenu i prevenciju problema sa desnima.",
        image_href: "/images/cleaning.jpg",
      },
      {
        name: "Protetika",
        icon: <RiToothLine size={iconSize} className={iconStyle} />,
        description:
          "Nudimo širok spektar protetičkih rešenja, uključujući krunice, mostove i proteze prilagođene vašim potrebama.",
        image_href: "/images/prosthetics.jpg",
      },
      {
        name: "Ortodoncija",
        icon: <RiBracesLine size={iconSize} className={iconStyle} />,
        description:
          "Ispravljanje zuba i poboljšanje vašeg osmeha pomoću fiksnih i mobilnih ortodontskih aparata.",
        image_href: "/images/orthodontics.jpg",
      },
      {
        name: "Dečija Stomatologija",
        icon: <BiChild size={iconSize} className={iconStyle} />,
        description:
          "Posebna pažnja posvećena oralnom zdravlju dece sa fokusom na preventivne tretmane i bezbolne procedure.",
        image_href: "/images/pediatric-dentistry.jpg",
      },
      {
        name: "Estetska Stomatologija",
        icon: <RiSparkling2Line size={iconSize} className={iconStyle} />,
        description:
          "Beljenje zuba, fasete i estetski tretmani za savršen osmeh.",
        image_href: "/images/aesthetic-dentistry.jpg",
      },
    ],
  },
  {
    dentist: {
      name: "Dr Kristina Petkovic",
      specialty: "Stomatolog",
      contact: {
        phone: "063 180 29 99",
        email: "dr.kristina.p@gmail.com",
        address: "Ilije Bircanina 18, Nis",
      },
      image_href: "/images/intro-illustration.jpg",
    },
    services: [
      {
        name: "Popravka i Lečenje Zuba",
        icon: <GiToothbrush size={iconSize} className={iconStyle} />,
        description:
          "Efikasno lečenje karijesa i obnavljanje zdravlja vaših zuba uz pomoć savremenih tehnika.",
        image_href: "/images/tooth-repair.jpg",
      },
      {
        name: "Vađenje Zuba",
        icon: <RiScissors2Line size={iconSize} className={iconStyle} />,
        description:
          "Bezbolne procedure vađenja zuba uz brigu o vašem oralnom zdravlju.",
        image_href: "/images/extraction.jpg",
      },
      {
        name: "Uklanjanje Kamenca",
        icon: <MdCleaningServices size={iconSize} className={iconStyle} />,
        description:
          "Uklanjanje zubnog kamenca i poliranje za bolju oralnu higijenu i prevenciju problema sa desnima.",
        image_href: "/images/cleaning.jpg",
      },
      {
        name: "Protetika",
        icon: <RiToothLine size={iconSize} className={iconStyle} />,
        description:
          "Nudimo širok spektar protetičkih rešenja, uključujući krunice, mostove i proteze prilagođene vašim potrebama.",
        image_href: "/images/prosthetics.jpg",
      },
      {
        name: "Ortodoncija",
        icon: <RiBracesLine size={iconSize} className={iconStyle} />,
        description:
          "Ispravljanje zuba i poboljšanje vašeg osmeha pomoću fiksnih i mobilnih ortodontskih aparata.",
        image_href: "/images/orthodontics.jpg",
      },
      {
        name: "Dečija Stomatologija",
        icon: <BiChild size={iconSize} className={iconStyle} />,
        description:
          "Posebna pažnja posvećena oralnom zdravlju dece sa fokusom na preventivne tretmane i bezbolne procedure.",
        image_href: "/images/pediatric-dentistry.jpg",
      },
      {
        name: "Estetska Stomatologija",
        icon: <RiSparkling2Line size={iconSize} className={iconStyle} />,
        description:
          "Beljenje zuba, fasete i estetski tretmani za savršen osmeh.",
        image_href: "/images/aesthetic-dentistry.jpg",
      },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="w-full  min-h-max mx-auto py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full px-4 gap-10 md:gap-24 lg:gap-32">
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
            className={`w-full flex flex-col items-start justify-center gap-10 md:gap-2  ${
              (index + 1) % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            key={index}
          >
            <div className="w-full sm:w-[50%] flex flex-col items-center justify-start gap-4 md:gap-6 lg:gap-10">
              <Typography
                variant="h2"
                text="Usluge"
                className=" underline underline-offset-8 decoration-primary"
              />
              <ul key={index} className="space-y-3 ">
                {service.services.map((service, index) => (
                  <li className="flex flex-row gap-2 justify-start items-center">
                    <span className="inline-block">{service.icon}</span>

                    <Typography
                      variant="h4"
                      text={service.name}
                      className="inline-block"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-[50%] flex flex-col items-center  justify-start gap-4 md:gap-6 lg:gap-5">
              <div className="space-x-4 flex justify-center items-center">
                <Typography
                  variant="h2"
                  text={service.dentist.name}
                  className="inline-block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl md:text-3xl lg:text-4xl"
                />
                <div className="inline-flex flex-row justify-center items-center gap-4 ">
                  <a href={service.dentist.contact.phone} title="Telefon">
                    <PhoneCall
                      size={30}
                      className="text-primary md:animate-bounce"
                    />
                  </a>
                  <a href={service.dentist.contact.email} title="Email">
                    <MdEmail
                      size={30}
                      className="text-primary md:animate-pulse"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Image
                  src={service.dentist.image_href}
                  alt={service.dentist.name}
                  width={400}
                  height={400}
                  className="rounded-md"
                />
                <Typography
                  variant="h4"
                  text={service.dentist.specialty}
                  className="text-white bg-gradient-to-r from-primary to-secondary w-full py-2 rounded-md text-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
