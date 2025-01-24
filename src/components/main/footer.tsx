import React from "react";
import { MdCopyright } from "react-icons/md";
import {
  contactDetails,
  contactInfo,
  projects,
  socialMediaLinks,
  usefulLinks,
} from "./footerData";
import Typography from "../typography";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="w-full mx-auto py-8">
        <div className="w-full mx-auto  max-w-screen-xl space-y-4 sm:space-y-0 grid grid-cols-1 md:grid-cols-3 justify-center items-center pb-8 px-4">
          {contactInfo.map((item, index) => (
            <div
              className="flex flex-row gap-2 items-center justify-start sm:justify-center"
              key={index}
            >
              <div className="inline">{item.icon}</div>
              <div className="inline">
                <Link
                  href={item.href}
                  title={item.title}
                  className="hover:text-primary"
                >
                  {item.title}
                </Link>
                <Typography variant="p" text={item.subtitle} />
              </div>
            </div>
          ))}
        </div>
        {/* Social Media Links */}
        <div className="w-full  h-fit px-4 md:px-12 py-5 bg-input">
          <div className="flex flex-col md:flex-row  justify-between items-center max-w-screen-md mx-auto">
            <Typography
              text="Povežite se sa nama na društvenim mrežama"
              variant="p"
            />
            <div className="space-x-4 text-2xl flex flex-wrap justify-center py-2">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="max-w-screen-xl px-4 mx-auto  mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="mb-8 md:col-span-3 lg:col-span-2">
            <h5 className="text-2xl font-bold">
              Stomatološka Ordinacija Identa
            </h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <p className="text-md">
              Od osmeha iz snova do zdravih zuba, pružamo vrhunsku stomatološku
              negu koja se prilagođava vašim potrebama. Uz modernu tehnologiju i
              stručan tim, obezbeđujemo da vaša poseta bude prijatna i efikasna.
              Dozvolite nam da budemo deo vašeg puta ka savršenom osmehu.
            </p>
          </div>

          {/* Projects Section */}
          <div>
            <h5 className="text-xl font-bold">Usluge</h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <ul>
              {projects.map((project, index) => (
                <li key={index} className="hover:text-primary cursor-text">
                  {project.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h5 className="text-xl font-bold">Korisni linkovi</h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <ul>
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-xl font-bold">Kontakt</h5>
            <hr className="my-4 w-20 h-1 bg-white" />
            <ul>
              {contactDetails.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="text-sm hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={contact.title}
                  >
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyrights Info */}
      <div className="w-full py-4  bg-black ">
        <div className="max-w-screen-xl px-4 text-center justify-between flex flex-col md:flex-row gap-2 items-center mx-auto text-sm md:text-md">
          <p className="text-white">
            <MdCopyright className="inline-block mr-2" />
            2025 Stomatološka Ordinacija Identa . Sva prava zadržana.
          </p>
          <div className="flex flex-row gap-2 items-center justify-start sm:justify-center">
            <p className="text-white">Made by: </p>{" "}
            <a
              href="https://simplifyproblems.com"
              className="hover:text-primary text-white"
              title="Simplify Problems"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simplify Problems
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
