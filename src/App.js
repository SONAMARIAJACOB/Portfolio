import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Sona Maria Jacob
          </h1>
          <p className="text-xl text-gray-300">
            Full-Stack Developer | Java | Dot Net | Spring Boot | React | PHP |
            WooCommerce | Node.js
          </p>
          <p className="text-sm text-gray-400">
            Dubai, UAE |{" "}
            <a
              href="mailto:sonamaria57@gmail.com"
              className="text-blue-400 hover:underline"
            >
              sonamaria57@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="tel:+971502613770"
              className="text-blue-400 hover:underline"
            >
              +971 50 261 3770
            </a>
          </p>
          <p className="text-sm">
            <a
              href="https://linkedin.com/in/sonamariajacob"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </header>

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-300 border-b border-purple-500 pb-2">
            About Me
          </h2>
          <p className="text-gray-200">
            A results-driven Full-Stack Developer with over four years of
            experience in backend and frontend development, specializing in
            Java, Spring Boot, Dot Net, PHP, NodeJS, WooCommerce, WordPress, and ReactJS.
            Adept at designing, developing, and optimizing web applications with
            a strong focus on scalability, performance, and user experience.
            Experienced in building microservices-based architectures,
            integrating RESTful APIs, and implementing responsive web designs.
            Proficient in database management (MySQL), DevOps tools (Docker,
            Jenkins, Git), and Agile methodologies (Scrum, JIRA). Successfully
            led e commerce and hospitality projects, enhancing digital platforms
            for major brands. Passionate about delivering robust digital
            solutions through efficient backend services and seamless frontend
            experiences.
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-300 border-b border-purple-500 pb-2">
            Experience
          </h2>

          {[
            {
              company: "Dropixel (Freelance)",
              role: "IT Project Coordinator",
              duration: "Sep 2024 – Present",
              bullets: [
                "Led the WooCommerce project, optimizing e-commerce operations by developing and customizing digital solutions on the WooCommerce platform.",
                "Optimized WooCommerce and WordPress platforms by integrating APIs and ensuring seamless data flow between systems.",
                "Ensured system functionality across different environments, applying DevOps best practices for deployment automation.",
              ],
            },
            {
              company: "Tata Consultancy Services (TCS)",
              role: "Software Developer",
              duration: "Dec 2021 – Aug 2024",
              bullets: [
                "Developed microservices-based solutions using Java and Spring Boot, integrating RESTful APIs for seamless data exchange.",
                "Built SQL-based data models to support business intelligence and reporting requirements.",
                "Collaborated with DevOps teams to implement CI/CD pipelines using Jenkins, Git, and Docker, reducing deployment times by 30%.",
                "Contributed to the development of microservices-based solutions, supporting the creation of robust and scalable platforms for major hospitality brands like Crowne Plaza and Holiday Inn, Java-based applications, focusing on backend services and API integrations.",
                "Developed and optimized front-end solutions using HTML, CSS, JavaScript, NodeJS, NextJS and React enhancing user engagement for customer-facing booking portals.",
              ],
            },
            {
              company: "Infomerica Pvt. Ltd.",
              role: "Software Developer Trainee",
              duration: "Apr 2021 – Dec 2021",
              bullets: [
                "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and WordPress, ensuring seamless functionality across multiple devices.",
                "Conducted user testing and debugging to improve usability and performance, contributing to a 10% increase in customer satisfaction.",
              ],
            },
            {
              company: "S N Hospital",
              role: "Data Analyst",
              duration: "Oct 2020 – Mar 2021",
              bullets: [
                "Conducted data analysis and troubleshooting to resolve discrepancies in patient records. ",
                "Assisted in the automation of hospital reporting processes, reducing manual effort by 40%.",
                "Provided technical support and worked on software configuration management tools.",
              ],
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="bg-gray-800 border border-gray-700 p-5 rounded-xl"
            >
              <h3 className="text-xl font-bold text-purple-200">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-400">
                {exp.role} | {exp.duration}
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300">
                {exp.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-300 border-b border-purple-500 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-200">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>PHP</span>
            <span>NodeJS</span>
            <span>ReactJS</span>
            <span>WooCommerce</span>
            <span>WordPress</span>
            <span>MySQL</span>
            <span>Docker</span>
            <span>Jenkins</span>
            <span>Git</span>
            <span>Agile (Scrum, JIRA)</span>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-purple-300 border-b border-purple-500 pb-2">
            Certifications
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li>WordPress & WooCommerce Development – Udemy</li>
            <li>AWS Cloud Practitioner – Udemy</li>
            <li>Full Stack Development Training – Udemy</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-16">
          Portfolio crafted with 💻 by Sona Maria Jacob
        </footer>
      </div>
    </div>
  );
}

export default App;
