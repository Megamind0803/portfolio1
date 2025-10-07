import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* Star Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#111827" },
          particles: {
            number: { value: 80 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#ffffff" },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold">Shridhar Gaikwad</h1>
        <p className="mt-4 text-xl text-gray-300">
          Digital Marketing | Website Development | SEO | Branding
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          Contact Me
        </a>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I help businesses grow through smart digital marketing strategies,
          high-performing websites, and creative branding solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Website Development */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
            <ul className="text-gray-400 text-sm list-disc pl-5">
              <li>Static Websites</li>
              <li>Dynamic Websites</li>
              <li>E-commerce Stores</li>
              <li>Portfolio Websites</li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <ul className="text-gray-400 text-sm list-disc pl-5">
              <li>Social Media Marketing</li>
              <li>Influencer Marketing</li>
              <li>WhatsApp Funnel</li>
              <li>Content Strategy</li>
            </ul>
          </div>

          {/* SEO & Ads */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">SEO & Advertising</h3>
            <ul className="text-gray-400 text-sm list-disc pl-5">
              <li>Search Engine Optimization</li>
              <li>Google Ads Setup</li>
              <li>Instagram & Facebook Ads</li>
              <li>Analytics & Tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 py-12 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-2">Email: shridharg1995@outlook.com</p>
        <p className="text-gray-400 mb-6">Phone: +91 7898841321</p>
        <a
          href="mailto:shridharg1995@outlook.com"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          Send Email
        </a>
      </section>

      <footer className="text-center text-gray-500 py-6">
        © {new Date().getFullYear()} Shridhar Gaikwad. All rights reserved.
      </footer>
    </div>
  );
}
