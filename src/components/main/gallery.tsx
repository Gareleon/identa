import Image from "next/image";
import Typography from "../typography";
import Divider from "./titleDivider";

export default function Gallery() {
  return (
    <section id="gallery" className="w-full min-h-max mx-auto py-10">
      <div className="w-full text-center mb-20">
        <Typography variant="h1" text="Galerija" />
        <Divider />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-screen-xl mx-auto">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="relative w-full h-64 overflow-hidden">
            <Image
              src={`/images/image-${i + 1}.jpg`}
              alt={`Gallery Image ${i + 1}`}
              objectFit="cover"
              layout="fill"
              className="rounded-lg flex justify-center items-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
