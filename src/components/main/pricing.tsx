import Typography from "../typography";
import Divider from "./titleDivider";

const categorizedServices = [
  {
    category: "Oralna hirurgija",
    services: [
      { name: "Vađenje zuba" },
      { name: "Apikoektomija" },
      { name: "Ugradnja implantata Zimmer Biomet Trabecular Metal" },
      { name: "Zimmer Biomet TSV implantat" },
      { name: "MIS 1 Ugradnja implantata" },
      { name: "Umetanje implantata Direct" },
    ],
  },
  {
    category: "Estetska stomatologija",
    services: [
      { name: "Metalokeramička kruna" },
      { name: "Kruna od cirkonijuma" },
      { name: "Porcelanski laminati (furniri)" },
      { name: "Nemetalna kruna" },
      { name: "Zubni nakit (cirkonijum)" },
      { name: "Zoom izbeljivanje zuba" },
      { name: "Kompozitni furniri napravljeni u ordinaciji" },
    ],
  },
  {
    category: "Protetika",
    services: [
      { name: "Kompletne proteze" },
      {
        name: "Proteza podržana sa 4 implantata sa lokatorima (hibridne proteze)",
      },
      { name: "Delimične proteze sa metalnom bazom" },
      { name: "Vironit kombinovane proteze" },
      { name: "Vironit jednostavne proteze" },
    ],
  },
  {
    category: "Preventivna i opšta stomatologija",
    services: [
      { name: "Uklanjanje zubnog kamenca" },
      { name: "Uklanjanje zubnog kamenca + poliranje zuba" },
      {
        name: "Peskarenje zuba metodom protoka vazduha (uklanjanje pigmentacije)",
      },
      { name: "Kompozitne plombe (bele plombe)" },
      { name: "Amalgamske plombe (crne plombe)" },
      { name: "Endodontsko lečenje vitalnog zuba" },
    ],
  },
  {
    category: "Ortodontija",
    services: [
      { name: "Fiksni zubni aparatić (jedna vilica)" },
      { name: "Fiksni estetski protezi za zube (jedna vilica)" },
    ],
  },
];

export function Prices() {
  return (
    <section id="pricing" className="w-full  min-h-max mx-auto py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full px-4 gap-10">
        <div>
          <Typography variant="h1" text="Kategorije" />
          <Divider />
        </div>

        <div className="w-full grid grid-cols-1 gap-5 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 items-start justify-center">
          {categorizedServices.map((category, index) => (
            <div
              key={index}
              className="w-full h-72  min-h-max border shadow-sm bg-gradient-to-br from-primary to-secondary/40 rounded-md p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 text-slate-800"
            >
              <Typography
                variant="h4"
                text={category.category}
                className="text-center mb-4"
              />
              <ul className="space-y-2  w-full pl-4">
                {category.services.map((service, index) => (
                  <li key={index} className="list-disc ">
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
