import Image from "next/image";
import Typography from "../typography";
import CustomButton from "./customButton";

export default function Intro() {
  return (
    <section className="w-full h-screen min-h-max pt-6 mx-auto bg-gradient-to-r  from-primary to-secondary pb-0 flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-6 lg:gap-10 py-20 px-4 ">
        <div className="w-full sm:w-1/2 text-background flex flex-col space-y-4 lg:space-y-8">
          <Typography variant="h1" text="Dobrodošli u Identa" />
          <hr className="border-muted h-px w-[50%]" />
          <Typography variant="h5" text="Stomatološke usluge po vašoj meri" />
          <Typography
            variant="p"
            text="Vaš partner za očuvanje zdravlja osmeha. Pružamo vrhunsku negu i personalizovane tretmane."
          />
          <Typography
            variant="p"
            text="Najsavremenije tehnologije za sigurnost i najbolje rezultate."
          />
          <Typography
            variant="p"
            text="Posetite nas i uživajte u bezbolnim stomatološkim uslugama!"
          />
          <a href="#contact" title="Zakaži pregled" className="w-fit">
            <CustomButton text="Zakaži pregled" variant="default" />
          </a>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            src="/images/intro-illustration-1.jpg"
            alt="identa-1"
            width={500}
            height={800}
            className="rounded-3xl shadow-lg shadow-black/50 "
          />
        </div>
      </div>
    </section>
  );
}
