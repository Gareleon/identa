import { MdFacebook, MdOutlinePhoneInTalk } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const contactInfo = [
  {
    type: "phone",
    icon: <MdOutlinePhoneInTalk size={50} className="text-primary/80" />,
    title: "+381 642223288",
    subtitle: "Pon-Pet 08:00-16:00",
    href: "tel:+381642223288",
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
    title: "kontakt@identa.rs",
    subtitle: "Podrška i informacije",
    href: "mailto:kontakt@identa.rs",
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
    href: "/blog/saveti-za-negu-zuba",
  },
  {
    name: "Zašto su redovni pregledi važni?",
    href: "/blog/redovni-pregledi",
  },
  {
    name: "Kako odabrati pravog stomatologa?",
    href: "/blog/odabir-stomatologa",
  },
  {
    name: "Najnovije tehnologije u stomatologiji",
    href: "/blog/nove-tehnologije",
  },
];

const contactDetails = [
  {
    name: "+381 642223288",
    href: "tel:+381642223288",
    title: "Kontakt telefon Identa",
  },
  {
    name: "kontakt@identa.rs",
    href: "mailto:kontakt@identa.rs",
    title: "Kontakt e-mail Identa",
  },
];

export { socialMediaLinks, projects, usefulLinks, contactDetails, contactInfo };
