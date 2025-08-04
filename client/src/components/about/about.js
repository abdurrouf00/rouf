import React from 'react';

const AboutMe = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-100">
  <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">About Me</h2>
  <section className="max-w-4xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
    <p className="mb-4 text-gray-700 leading-relaxed">
      I'm a passionate fullstack developer with over 5 years of experience building web applications and services. My journey in software development began during my computer science studies, where I discovered my love for creating elegant solutions to complex problems.
    </p>
    <p className="mb-4 text-gray-700 leading-relaxed">
      Currently, I work as a Senior Software Engineer at TechCorp, where I lead development on our core platform. I specialize in building scalable applications using React, Node.js, and AWS, with a strong focus on code quality and user experience.
    </p>
    <p className="mb-6 text-gray-700 leading-relaxed">
      When I'm not coding, you can find me contributing to open source projects, writing technical articles, or exploring new technologies. I'm particularly interested in serverless architectures, WebAssembly, and the future of web development.
    </p>

    {/* Social Links */}
    <div className="flex justify-center space-x-6 text-blue-600 text-lg">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
        GitHub
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
        LinkedIn
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Twitter
      </a>
    </div>
  </section>
</div>

  );
};

export default AboutMe;
