"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Typography from "../typography";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Divider from "./titleDivider";

export default function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validate form inputs
  const validate = () => {
    const newErrors: typeof errors = {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    };

    if (formData.first_name.trim().length < 2) {
      newErrors.first_name = "First name must be at least 2 characters long";
    }
    if (formData.last_name.trim().length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters long";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 1500) {
      newErrors.message = "Message must not exceed 1500 characters";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((err) => err === "");
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to send email: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="w-full bg-muted">
      <div className="w-full h-[60%] min-h-max mx-auto py-10 flex flex-col justify-center items-center ">
        <Typography variant="h1" text="Kontakt" />
        <Divider />

        <div className="max-w-screen-xl h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-center mx-auto py-10 sm:px-6">
          {/* Left Section */}
          <div className="w-full h-full text-white bg-gradient-to-r from-primary to-secondary shadow p-4 md:p-12 col-span-1 ">
            <div className="cta-info">
              <Typography variant="h2" text="100% Zagarantovano zadovoljstvo" />
              <Typography
                variant="p"
                text="Tražite pouzdane i visokokvalitetne stomatološke usluge? U stomatološkoj ordinaciji Identa posvećeni smo pružanju vrhunske nege, koristeći savremenu tehnologiju i individualan pristup svakom pacijentu. Vaš osmeh je naša misija!"
                className="mt-4"
              />
              <Typography
                variant="h3"
                text="Kako da započnete?"
                className="mt-6"
              />
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Kontaktirajte nas za besplatne konsultacije</li>
                <li>Razgovarajte sa našim stručnim timom o svojim potrebama</li>
                <li>
                  Zakažite termin i započnite put ka zdravijem i lepšem osmehu
                </li>
              </ul>
              <Typography
                variant="p"
                text="Neka vaši zubi i osmeh budu u najboljim rukama. Vaš prvi korak ka savršenom osmehu počinje upravo ovde!"
                className="mt-6"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full h-full bg-slate-50 shadow p-4 md:p-12 col-span-1 ">
            <Typography
              variant="h3"
              text="Zakažite svoj termin "
              className="mb-6 text-gray-700"
            />
            <form
              onSubmit={handleSubmit}
              className="min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700"
            >
              {/* First Name */}
              <div>
                <label htmlFor="first_name" className="block mb-2 sr-only">
                  <Typography variant="p" text="First Name" />
                </label>
                <Input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Ime"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={`shadow-lg w-full px-4 py-2 rounded-md border ${
                    errors.first_name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.first_name}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last_name" className="block mb-2 sr-only">
                  <Typography variant="p" text="Last Name" />
                </label>
                <Input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Prezime"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={`shadow-lg w-full px-4 py-2 rounded-md border ${
                    errors.last_name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.last_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="col-span-full">
                <label htmlFor="email" className="block mb-2 sr-only">
                  <Typography variant="p" text="Email" />
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email adresa"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow-lg w-full px-4 py-2 rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div className="col-span-full">
                <label htmlFor="message" className="block mb-2 sr-only">
                  <Typography variant="p" text="Message" />
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Poruka"
                  rows={14}
                  value={formData.message}
                  onChange={handleChange}
                  className={`shadow-lg w-full px-4 py-2 rounded-md border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                variant="default"
                type="submit"
                className="w-full rounded-full md:p-6 col-span-full text-center"
              >
                <Typography text="Zakaži" variant="h5" className="inline" />
                <FaPaperPlane className="ml-2 inline" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
