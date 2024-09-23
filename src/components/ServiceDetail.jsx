import React from "react";
import { useParams } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    details: `
      Our Web Design service is focused on crafting exceptional digital experiences that
      captivate your audience. We emphasize the importance of user-centered design, 
      ensuring that your website is not only visually stunning but also functional and easy to navigate. 
      From wireframes to fully responsive designs, we prioritize usability, aesthetic appeal, 
      and seamless interactivity. Whether you need a simple landing page or a complex e-commerce site, 
      we bring your vision to life with a focus on modern design trends and best practices.
    `,
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    details: `
      Our Frontend Development service ensures that your website looks stunning and works 
      flawlessly across all devices. Using the latest technologies like HTML5, CSS3, JavaScript, 
      and React, we create dynamic, responsive, and fast-loading interfaces. 
      Whether you need a website that adapts perfectly to mobile screens or an interactive 
      web application, our team delivers pixel-perfect code and smooth, user-friendly 
      experiences that engage visitors and enhance usability.
    `,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    details: `
      Our Backend Development service is the powerhouse behind your website or application. 
      We develop secure, scalable, and efficient server-side architectures using technologies 
      like Node.js, Python, and Java. Whether you're dealing with complex databases, 
      API integrations, or authentication systems, we ensure that everything runs smoothly in 
      the background, providing a solid foundation for your application to perform at its best. 
      Our solutions are built for performance, reliability, and security.
    `,
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    details: `
      With our Full-Stack Development service, we handle both frontend and backend development, 
      offering you a comprehensive solution for your web application. We take care of the entire 
      development process, from designing intuitive user interfaces to building robust server-side 
      infrastructures. By bridging the gap between the frontend and backend, we ensure seamless 
      communication between all components of your app, creating an efficient, cohesive product 
      that's built to scale.
    `,
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
    details: `
      Our Content Writing service delivers compelling, SEO-friendly content that helps your 
      business connect with its audience. Whether you need blog posts, product descriptions, 
      or website copy, we ensure that each word resonates with your target audience. 
      Our writers are skilled in creating content that is not only informative but also engaging, 
      driving more traffic and increasing your brand's visibility online.
    `,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
    details: `
      With our Digital Marketing service, we help your business grow by reaching the right audience 
      at the right time. Our services include SEO, social media marketing, email campaigns, and PPC 
      advertising. We tailor our strategies to your business needs, ensuring that every dollar spent 
      on marketing delivers measurable results. From increasing brand awareness to generating 
      high-quality leads, our digital marketing experts are here to help you succeed online.
    `,
  },
];

const ServiceDetail = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const service = services.find((s) => s.id === parseInt(id)); // Find the service with the matching ID

  if (!service) {
    return <p>Service not found</p>; // Show a message if the service is not found
  }

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-8">{service.title}</h2>
        <p className="text-lg text-gray-300 mb-8">{service.description}</p>
        <p className="text-lg text-gray-300 whitespace-pre-line">
          {service.details}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetail;
