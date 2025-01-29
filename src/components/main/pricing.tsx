import Typography from "../typography";
import Divider from "./titleDivider";

const categorizedServices = [
  {
    category: "Oralna hirurgija",
    services: [
      { name: "Hirurško vađenje impaktiranih i poluimpaktiranih zuba" },
      { name: "Hirurško oslobađanje neizniklih zuba" },
      { name: "Apikotomija" },
      { name: "Cistektomija" },
      { name: "Nivelacija grebena" },
      { name: "Frenektomija" },
      { name: "Ugradnja implantata" },
    ],
  },
  {
    category: "Estetska stomatologija",
    services: [
      { name: "Kućno i ordinacijsko izbeljivanje zuba" },
      { name: "Metalokeramička kruna" },
      { name: "Bezmetalna kruna" },
      { name: "Cirkonijum kruna" },
      { name: "Estetske fasete" },
      { name: "Zubni nakit (cirkon)" },
    ],
  },
  {
    category: "Protetika",
    services: [
      { name: "Totalne i parcijalne akrilatne proteze" },
      { name: "Elastične (biodentalplast) proteze" },
      { name: "Skeletirane (vizil) proteze" },
      { name: "Metalokeramičke krune i mostovi" },
      { name: "Krune i mostovi od cirkonijuma" },
      { name: "Nadogradnja zuba" },
      { name: "Protetika na implantatima" },
    ],
  },
  {
    category: "Preventivna i opšta stomatologija",
    services: [
      { name: "Uklanjanje kamenca i poliranje zuba" },
      { name: "Kompozitne plombe" },
      { name: "Amalgamske plombe" },
      { name: "Endodontsko lečenje zuba" },
      { name: "Vađenje zuba" },
    ],
  },
  {
    category: "Ortodoncija",
    services: [
      { name: "Fiksni aparati za ispravljanje zuba" },
      { name: "Folije za ispravljanje zuba" },
      { name: "Dečije mobilne proteze" },
    ],
  },
  {
    category: "Dečija stomatologija",
    services: [
      { name: "Edukacija dece o održavanju oralne higijene i preventiva" },
      { name: "Popravka mlečnih i stalnih zuba" },
      { name: "Vađenje mlečnih i stalnih zuba" },
      { name: "Zalivanje fisura" },
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
              className="w-full h-80  min-h-max border shadow-sm bg-gradient-to-br from-primary to-secondary/40 rounded-md p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 text-slate-800"
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
