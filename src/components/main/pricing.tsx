import Typography from "../typography";
import Divider from "./titleDivider";

const prices = [
  {
    name: "Metalokeramička kruna",
    price: {
      currency: "EUR",
      value: 64,
    },
  },
  {
    name: "Kruna od cirkonijuma",
    price: {
      currency: "EUR",
      value: 170,
    },
  },
  {
    name: "Porcelanski laminati (furniri)",
    price: {
      currency: "EUR",
      value: 128,
    },
  },
  {
    name: "MIS 1 Ugradnja implantata",
    price: {
      currency: "EUR",
      value: 400,
    },
  },
  {
    name: "Kompozitne plombe (bele plombe)",
    price: {
      currency: "EUR",
      value: 17,
    },
  },
  {
    name: "Vađenje zuba",
    price: {
      currency: "EUR",
      value: 13,
    },
  },
  {
    name: "Kompletne proteze",
    price: {
      currency: "EUR",
      value: 187,
    },
  },
  {
    name: "Zoom izbeljivanje zuba",
    price: {
      currency: "EUR",
      value: 77,
    },
  },
  {
    name: "Proteza podržana sa 4 implantata sa lokatorima (hibridne proteze)",
    price: {
      currency: "EUR",
      value: 2152,
    },
  },
  {
    name: "Fiksni zubni aparatić (jedna vilica)",
    price: {
      currency: "EUR",
      value: 443,
    },
  },
  {
    name: "Umetanje implantata Direct",
    price: {
      currency: "EUR",
      value: 450,
    },
  },
  {
    name: "Uklanjanje zubnog kamenca",
    price: {
      currency: "EUR",
      value: 13,
    },
  },
  {
    name: "Nemetalna kruna",
    price: {
      currency: "EUR",
      value: 149,
    },
  },
  {
    name: "Uklanjanje zubnog kamenca + poliranje zuba",
    price: {
      currency: "EUR",
      value: 17,
    },
  },
  {
    name: "Endodontsko lečenje vitalnog zuba",
    price: {
      currency: "EUR",
      value: 32,
    },
  },
  {
    name: "Peskarenje zuba metodom protoka vazduha (uklanjanje pigmentacije)",
    price: {
      currency: "EUR",
      value: 13,
    },
  },
  {
    name: "Amalgamske plombe (crne plombe)",
    price: {
      currency: "EUR",
      value: 15,
    },
  },
  {
    name: "Kompozitni furniri napravljeni u ordinaciji",
    price: {
      currency: "EUR",
      value: 30,
    },
  },
  {
    name: "Fiksni estetski protezi za zube (jedna vilica)",
    price: {
      currency: "EUR",
      value: 494,
    },
  },
  {
    name: "Delimične proteze sa metalnom bazom",
    price: {
      currency: "EUR",
      value: 340,
    },
  },
  {
    name: "Zubni nakit (cirkonijum)",
    price: {
      currency: "EUR",
      value: 13,
    },
  },
  {
    name: "Ugradnja implantata Zimmer Biomet Trabecular Metal",
    price: {
      currency: "EUR",
      value: 553,
    },
  },
  {
    name: "Apikoektomija",
    price: {
      currency: "EUR",
      value: 102,
    },
  },
  {
    name: "Vironit kombinovane proteze",
    price: {
      currency: "EUR",
      value: 391,
    },
  },
  {
    name: "Zimmer Biomet TSV implantat",
    price: {
      currency: "EUR",
      value: 553,
    },
  },
  {
    name: "Vironit jednostavne proteze",
    price: {
      currency: "EUR",
      value: 302,
    },
  },
];

export function Prices() {
  return (
    <section id="pricing" className="w-full  min-h-max mx-auto py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full px-4 gap-10">
        <div>
          <Typography variant="h1" text="Cenovnik" />
          <Divider />
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full max-w-screen-lg mx-auto table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Usluga
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Cena
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.map((service, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {service.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {service.price.value} {service.price.currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
