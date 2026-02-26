import React, { useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useAnimations";
import { personalInfo } from "../data/resumeData";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const titleRef = useScrollAnimation("contact", "fadeUp");
  const formRef = useScrollAnimation("contact", "fadeUp");
  const infoRef = useScrollAnimation("contact", "fadeLeft");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Form submission handler to prevent page reload
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);

      const response = await fetch(
        `https://formsubmit.co/${personalInfo.email}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        form.current.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: personalInfo.linkedin,
      icon: "💼",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: personalInfo.github,
      icon: "🔗",
      color: "hover:text-gray-400",
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.email}`,
      icon: "📧",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl sm:text-5xl font-bold mb-6 text-text-primary"
          >
            Let's Connect
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            and collaborations. Let's build something meaningful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                Get In Touch
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to chat
                about product strategy and AI—I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-lg flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-text-primary font-medium hover:text-accent-coral transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Location</p>
                  <p className="text-text-primary font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-lg flex items-center justify-center text-2xl">
                  📄
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Resume</p>
                  <a
                    href="/portfolio/assets/Resume 2025_Vaibhavi_Satish_.pdf"
                    download
                    className="text-text-primary font-medium hover:text-accent-coral transition-colors"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-12 h-12 border border-accent-blue/30 rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:border-accent-coral/50 hover:bg-accent-coral/10 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef as React.RefObject<HTMLDivElement>}>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="p-8 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm space-y-6"
            >
              {/* Hidden FormSubmit.co fields */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_honey" value="" />
              <input type="hidden" name="_format" value="json" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-accent-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-coral focus:outline-none focus:ring-2 focus:ring-accent-coral/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-accent-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-coral focus:outline-none focus:ring-2 focus:ring-accent-coral/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-accent-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-coral focus:outline-none focus:ring-2 focus:ring-accent-coral/20 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 border border-accent-blue/30 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-coral focus:outline-none focus:ring-2 focus:ring-accent-coral/20 transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-accent-coral text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-coral/30 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-700 text-center">
                  ❌ Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
