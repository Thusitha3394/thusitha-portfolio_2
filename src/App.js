// Updated App.js with content-rich sections and design improvements
import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const sections = [
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = darkMode
    ? `rgba(36, 25, 20, ${0.6 + Math.min(scrollY / 1000, 0.4)})`
    : `rgba(245, 235, 225, ${0.6 + Math.min(scrollY / 1000, 0.4)})`;

  const smoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "bg-stone-900 text-white" : "bg-stone-100 text-gray-900"}>
      {/* Navbar */}
      <header
        className="sticky top-0 z-30 backdrop-blur-md shadow-md"
        style={{ backgroundColor }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="font-bold text-lg">Thusitha</div>
          <nav className="hidden md:flex gap-6">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => smoothScroll(s)}
                className="hover:underline capitalize"
              >
                {s}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
          <button
            className="ml-4 px-3 py-1 rounded bg-stone-700 text-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-80 p-4 space-y-2 text-white">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => smoothScroll(s)}
                className="block w-full text-left capitalize"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="text-center space-y-4 py-10" id="home">
        <img
          src="profile.jpg"
          alt="Thusitha Wijesooriya"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-stone-500 shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Thusitha Wijesooriya</h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300">
          Data Engineer | Analytics Enthusiast | AI Explorer
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <a
            href="mailto:thusitha.wije94@gmail.com"
            className="bg-stone-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/thusitha-wijesooriya-189153147/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-600 text-stone-600 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/Thusitha3394"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 text-gray-500 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </section>

      {/* Sections */}
      <section id="about" className="px-4 py-10 max-w-4xl mx-auto animate-fade-up">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          Experienced Data Engineer and Statistical Data Analyst with 4+ years of expertise in Data Analysis,
          Machine Learning, and Data Science. Passionate about building scalable data solutions, optimizing
          ETL processes, and leveraging BI tools to drive data-driven decision-making.
        </p>
      </section>
      <section id="skills" className="px-4 py-10 max-w-4xl mx-auto animate-fade-up">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-2">
          <li>Python, R, SQL</li>
          <li>Power BI, Tableau, QlikSense</li>
          <li>Azure, AWS, Docker, Kubernetes</li>
          <li>Apache Spark, Hadoop, Kafka, Airflow</li>
          <li>MongoDB, PostgreSQL, SQL Server</li>
          <li>Databricks, PySpark</li>
        </ul>
      </section>
      <section id="projects" className="px-4 py-10 max-w-4xl mx-auto animate-fade-up">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {["Data Engineering Projects", "Machine Learning Projects", "Deep Learning Projects", "Computer Vision Projects", "LLM & AI Projects", "Power BI Dashboards"].map((category) => (
          <div key={category} className="border p-4 rounded-lg mb-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-1">{category}</h3>
            <p className="text-gray-500">Projects coming soon...</p>
          </div>
        ))}
      </section>
      <section id="experience" className="px-4 py-10 max-w-4xl mx-auto animate-fade-up">
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Senior Data Engineer – Arimac Digital (2020–2024)</strong><br />
            Led real-time data pipelines, built Azure cloud infrastructure, worked with clients like VISA, ETIHAD, Nestle.
          </li>
          <li>
            <strong>Associate Data Engineer – Altria Consulting (2019–2020)</strong><br />
            Built data warehouses, SSIS/SSRS reports, Power BI dashboards for clients like LB Finance, HNB, Hutch.
          </li>
        </ul>
      </section>
      <section id="education" className="px-4 py-10 max-w-4xl mx-auto animate-fade-up">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="space-y-2">
          <li>
            <strong>Analytics for Business Decision Making</strong> – Mohawk College (2024–2025)
          </li>
          <li>
            <strong>International Business Management</strong> – Mohawk College (2023–2024)
          </li>
          <li>
            <strong>B.Sc. (Hons) Applied Statistics</strong> – University of Colombo (2016–2020)
          </li>
        </ul>
      </section>
      <section id="certifications" className="px-4 py-10 max-w-4xl mx-auto animate-fade-up">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Microsoft Certified: Azure Data Engineer Associate</li>
          <li>Google Data Analytics Professional Certificate</li>
          <li>IBM Data Science Professional Certificate</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
