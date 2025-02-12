import { MdFacebook, MdOutlinePhoneInTalk } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Clock } from "lucide-react";

const contactInfo = [
  {
    type: "working-hours",
    icon: <Clock size={50} className="text-primary/80" />,
    title: "Ponedeljak - Petak",
    subtitle: "10:00 - 20:00",
    href: "",
  },
  {
    type: "phone",
    icon: <MdOutlinePhoneInTalk size={50} className="text-primary/80" />,
    title: "+381 642223288",
    subtitle: "+381 631802999",
    href: "tel:+381642223288",
    hrefSub: "tel:+381631802999",
  },

  {
    type: "location",
    icon: <FaMapMarkedAlt size={50} className="text-primary/80" />,
    title: "Niš, Srbija",
    subtitle: "Ilije Birčanina 18, Niš",
    href: "https://maps.app.goo.gl/cLPcCnuoD4RpKtV99",
  },
  {
    type: "email",
    icon: <IoIosMail size={50} className="text-primary/80" />,
    title: "identanis@gmail.com",
    subtitle: "Podrška i informacije",
    href: "mailto:identanis@gmail.com",
  },
];

const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063612251504",
    icon: <MdFacebook className="hover:text-primary" size={30} />,
    title: "Identa Facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/identabiljanapetrovic/?hl=en",
    icon: <RxInstagramLogo className="hover:text-primary" size={30} />,
    title: "Identa Instagram",
  },
];

const projects = [
  {
    name: "Estetska Stomatologija",
    href: "/services/estetska-stomatologija",
    title: "Rešenja za savršen osmeh od Identa",
  },
  {
    name: "Implantologija",
    href: "/services/implantologija",
    title: "Najbolji implantološki tretmani u Nišu",
  },
  {
    name: "Dečija Stomatologija",
    href: "/services/decija-stomatologija",
    title: "Nega i briga za najmlađe pacijente",
  },
  {
    name: "Oralna Hirurgija",
    href: "/services/oralna-hirurgija",
    title: "Profesionalni i sigurni hirurški tretmani",
  },
  {
    name: "Preventivna Stomatologija",
    href: "/services/preventivna-stomatologija",
    title: "Održite zdravlje zuba uz Identa",
  },
];

const usefulLinks = [
  {
    name: "Saveti za negu zuba",
    href: "https://curaprox.rs/blog/post/cisti-zubi-detaljno-uputstvo",
  },
  {
    name: "Zašto su redovni pregledi važni?",
    href: "https://hypelist.rs/stomatoloski-pregled/",
  },
  {
    name: "Kako odabrati pravog stomatologa?",
    href: "https://stomatologija.me/blog/kako-izabrati-pravog-stomatologa/",
  },
  {
    name: "Najnovije tehnologije u stomatologiji",
    href: "https://www.ictvesti.com/nove-tehnologije-u-sluzbi-inovacija-u-stomatologiji/",
  },
];

const contactDetails = [
  {
    name: "identanis@gmail.com",
    href: "mailto:identanis@gmail.com",
    title: "Kontakt e-mail Identa",
  },
  {
    name: "+381 642223288",
    href: "tel:+381642223288",
    title: "Kontakt telefon Identa",
  },
  {
    name: "+381 631802999",
    href: "tel:+381631802999",
    title: "Kontakt telefon Identa",
  },
  {
    name: "dr.kristina.p@gmail.com",
    href: "mailto:dr.kristina.p@gmail.com",
    title: "Kontakt e-mail Identa",
  },
  {
    name: "dr.b.petrovic@gmail.com",
    href: "mailto:dr.b.petrovic@gmail.com",
    title: "Kontakt e-mail Identa",
  },
];

export { socialMediaLinks, projects, usefulLinks, contactDetails, contactInfo };
