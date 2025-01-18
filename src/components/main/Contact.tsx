import { FaPaperPlane } from "react-icons/fa";
import Typography from "../typography";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Divider from "./titleDivider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must not exceed 50 characters")
    .trim(),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name must not exceed 50 characters")
    .trim(),
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters long")
    .max(100, "Email must not exceed 100 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must not exceed 500 characters")
    .trim(),
});

export default function Contact() {
  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    },
  });

  // Define submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700"
              >
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography variant="p" text="First Name" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ime"
                          id="inputFirstName"
                          className="shadow-lg w-full px-4 py-2 rounded-md border border-gray-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography variant="p" text="Last Name" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Prezime"
                          id="inputLastName"
                          className="shadow-lg w-full px-4 py-2 rounded-md border border-gray-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography variant="p" text="Email" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email adresa"
                          id="inputEmail"
                          className="shadow-lg w-full px-4 py-2 rounded-md border border-gray-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Typography variant="p" text="Message" />
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          name="message"
                          id="message"
                          placeholder="Poruka"
                          rows={14}
                          className="shadow-lg w-full px-4 py-2 rounded-md border border-gray-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
            </Form>
          </div>
        </div>
        <div className="w-full h-96 max-w-screen-xl mx-auto  justify-center items-center px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.3048320452417!2d21.916115999999995!3d43.3288099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0cfa5f5a4f9%3A0x9751449f9d564b80!2sStomatolo%C5%A1ka%20Ordinacija%20IDENTA!5e0!3m2!1sen!2srs!4v1737144821935!5m2!1sen!2srs"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-between items-center gap-8 py-16 px-4 sm:px-6 lg:px-8"
      id="contact-form"
    >
      <Typography text="Contact" variant="h1" />
      <div className="w-full"></div>
    </section>
  );
}
