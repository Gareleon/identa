import Typography from "../typography";
import Divider from "./titleDivider";

const prices = [
  {
    name: "Preventivna Stomatologija",
    price: {
      currency: "EUR",
      value: 100,
    },
  },
  {
    name: "Estetska Stomatologija",
    price: {
      currency: "EUR",
      value: 200,
    },
  },
  {
    name: "Protetika i Implantologija",
    price: {
      currency: "EUR",
      value: 300,
    },
  },
];

export function Prices() {
  return (
    <section id="pricing" className="w-full h-fit min-h-max mx-auto py-10">
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
