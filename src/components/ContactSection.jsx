import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Let's connect and collaborate on something amazing!
        </p>

        {/* ================================
            1st Row (Email | Phone | Location)
        ================================== */}
        <div className="flex items-center justify-center gap-16 flex-wrap text-center">

          {/* Email */}
          <div className="flex flex-col items-center space-y-2">
            <Mail className="h-7 w-7 text-primary" />
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:aakarshvermaav05@gmail.com"
              className="text-muted-foreground hover:text-primary transition"
            >
              aakarshvermaav05@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-2">
            <Phone className="h-7 w-7 text-primary" />
            <h4 className="font-medium">Phone</h4>
            <a
              href="tel:+916268265637"
              className="text-muted-foreground hover:text-primary transition"
            >
              +91 6268265637
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="h-7 w-7 text-primary" />
            <h4 className="font-medium">Location</h4>
            <p className="text-muted-foreground">
              Satna, Madhya Pradesh, India
            </p>
          </div>
        </div>

        {/* ============================
             2nd Row (Social Icons)
        ============================= */}
        <div className="flex flex-col items-center mt-14 space-y-4">
          <h4 className="text-lg font-medium">Social</h4>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/aakarsh-verma-060b03253/"
              target="_blank"
            >
              <Linkedin className="h-6 w-6 hover:text-primary transition" />
            </a>

            <a href="https://www.instagram.com/aaka_r_s_h_0_5/" target="_blank">
              <Instagram className="h-6 w-6 hover:text-primary transition" />
            </a>

            <a href="https://twitter.com/Aakarshverma05" target="_blank">
              <Twitter className="h-6 w-6 hover:text-primary transition" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
