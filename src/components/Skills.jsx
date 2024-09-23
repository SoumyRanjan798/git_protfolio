import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-900 text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between text-center">
          {/* Frontend Section */}
          <div className="md:w-1/3 mb-8">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li>ReactJS</li>
              <li>HTML & CSS</li>
              <li>Typescript</li>
              <li>NextJS</li>
              <li>Android Studio</li>
              <li>React Native</li>
              <li>ThreeJS & Canvas</li>
              <li>AngularJS</li>
              <li>Tailwind & Material</li>
              <li>Xcode & Swift</li>
            </ul>
          </div>
          {/* Backend Section */}
          <div className="md:w-1/3 mb-8">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Backend</h3>
            <ul className="space-y-2">
              <li>Java 1.8+</li>
              <li>SpringBoot</li>
              <li>Golang</li>
              <li>Microservices</li>
              <li>JavaScript</li>
              <li>Kafka</li>
              <li>Socket Programming</li>
              <li>ISO8583 Base24</li>
              <li>C++</li>
              <li>Python</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
              <li>RabbitMQ</li>
            </ul>
          </div>

          {/* Tools & Other Section */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Tools & Other</h3>
            <ul className="space-y-2">
              <li>Git</li>
              <li>Docker</li>
              <li>ORM Hibernate</li>
              <li>AWS & Azure</li>
              <li>Linux & Windows</li>
              <li>JSON & XML & Protobuf</li>
              <li>VS Code & IntelliJIDEA</li>
              <li>Kubernetes</li>
              <li>Bash & CMD</li>
              <li>Jenkins</li>
              <li>Ping IDP</li>
              <li>Unit Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
