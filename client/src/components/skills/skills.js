import React, { useEffect, useState } from 'react';

const frontendSkills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'CSS / Tailwind / Styled Components', level: 85 },
  { name: 'Redux / Context API', level: 80 },
  { name: 'Testing (Jest, React Testing Library)', level: 75 },
];

const backendSkills = [
  { name: 'Node.js / Express', level: 90 },
  { name: 'Python / Django', level: 75 },
  { name: 'SQL / NoSQL Databases', level: 85 },
  { name: 'GraphQL / REST APIs', level: 80 },
  { name: 'AWS / Firebase', level: 70 },
];

export default function Career() {
  const [frontendProgress, setFrontendProgress] = useState(frontendSkills.map(() => 0));
  const [backendProgress, setBackendProgress] = useState(backendSkills.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setFrontendProgress((prev) =>
        prev.map((p, i) =>
          p < frontendSkills[i].level ? Math.min(p + 1, frontendSkills[i].level) : p
        )
      );
      setBackendProgress((prev) =>
        prev.map((p, i) =>
          p < backendSkills[i].level ? Math.min(p + 1, backendSkills[i].level) : p
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-gray-50 pt-10 pb-20'>
       <div className="container mx-auto px-5 py-10 ">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Career & Skills</h1>

      <div className="flex flex-wrap justify-between gap-6">
        {/* Frontend Skills */}
        <div className="w-full md:w-[48%] p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Frontend</h2>
          {frontendSkills.map((skill, i) => (
            <div key={skill.name} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm font-medium text-gray-500">{frontendProgress[i]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${frontendProgress[i]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend Skills */}
        <div className="w-full md:w-[48%] p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Backend</h2>
          {backendSkills.map((skill, i) => (
            <div key={skill.name} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm font-medium text-gray-500">{backendProgress[i]}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${backendProgress[i]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
   
  );
}
