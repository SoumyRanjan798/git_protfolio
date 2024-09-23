import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import erpImage from "../assets/ERP.png";
import everlink from "../assets/EverLink.png";
import melbourn from "../assets/melbournbank.png";
import amex from "../assets/Amex.png";
import espn from "../assets/espn.png";
import bloging from "../assets/blog.png";
import security from "../assets/secutity.png";

// Career/Organization projects
const careerProjects = [
  {
    id: 5,
    name: "Open Banking - Everlink Canada Payment Service",
    description: "Open banking has the potential to revolutionize the way people manage their finances...",
    TechStack: "React, Java, SpringBoot, PINGIDP, MongoDB, AWS, Base24",
    image: everlink,
    VisitHere: "https://www.everlink.ca/open-banking/",
  },
  {
    id: 6,
    name: "Digital PIN DebitCard/Credit Card Pin Management System",
    TechStack: "SpringBoot, JPA, MicroServices, Socket, RSA",
    image: everlink,
    VisitHere: "https://www.everlink.ca/solutions/",
  },
  {
    id: 7,
    name: "Bank of Melbourne: (Business Banking Online Banking Service)",
    TechStack: "Java, AngularJs, Microservice, Mongo, Node, etc.",
    image: melbourn,
    VisitHere: "https://bbo.bankofmelbourne.com.au/",
  },
  {
    id: 8,
    name: "AMEX Credit Card Management Solution Benefit Modules",
    TechStack: "SpringBoot, Java, ReactJS, Microservice, MySQL, SpringSecurity, etc.",
    image: amex,
    VisitHere: "https://www.americanexpress.com/in/credit-cards/",
  },
];

// Personal and freelance projects
const personalProjects = [
  {
    id: 1,
    name: "Securities And Asset Management App",
    TechStack: "Java , React , MySQL ,AWS , etc.",
    image: security,
    VisitHere:"https://www.bamboohr.com/pl-pages/bamboohr-software-i1?utm_campaign=BAMB-DG-SSRFreeDemo-2022EG&utm_medium=review-sites&utm_source=selectsoftwarereviews.com&utm_content=CoreHR&utm_term=CoreHR&ssrid=ssr&ssr_partner=yes&ssr_id=m060jeohnzxw1ssa",
    github: "https://github.com/SoumyRanjan798/Security_MS",
  },
  {
    id: 2,
    name: "Food Blogging App",
    TechStack: "Java FullStack",
    image: bloging,
    VisitHere: "https://iamafoodblog.com/",
    github: "https://github.com/SoumyRanjan798/Blog_App",
  },
  {
    id: 3,
    name: "ESPN Trade Analyzer",
    TechStack: "React, NodeJS/Express, MongoDB, Bootstrap, Puppeteer, Render, GitHub Pages",
    image: espn,
    github: "https://github.com/SoumyRanjan798/ESPN_Fantsy",
    VisitHere: "https://scraper.bet",
  },
  {
    id: 4,
    name: "Enterprise Resource Planning",
    TechStack: "SpringBoot, JPA, MySQL, Spring Security, AngularJS, etc.",
    image: erpImage,
    github: "https://github.com/YouafKhan1",
    VisitHere: "https://erp.shivit.in",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-16 overflow-x-hidden" id="project">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Career/Organization Projects */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          My Career/Organization Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {careerProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-md font-bold mb-1 text-center">{project.name}</h3>
              <p className="text-gray-400 mb-2 text-xs md:text-sm text-center">{project.TechStack}</p>
              <div className="flex justify-center">
                <a
                  href={project.VisitHere}
                  className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-3 py-1 text-xs rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Here
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal line separator */}
        <hr className="my-10 border-t-2 border-gray-600" />

        {/* Personal and Freelance Projects */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          My Personal And Freelance Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {personalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-md font-bold mb-1 text-center">{project.name}</h3>
              <p className="text-gray-400 mb-2 text-xs md:text-sm text-center">{project.TechStack}</p>
              <div className="flex justify-center">
                {project.VisitHere && (
                  <a
                    href={project.VisitHere}
                    className="inline-block bg-gradient-to-r 
                    from-green-300 to-blue-300 text-white px-3 py-1 text-xs rounded-full mr-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Here
                  </a>
                )}
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-3 py-1 text-xs rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
