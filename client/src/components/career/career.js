import React from "react";

const CareerTimeline = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-20 pt-20"  >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pt-10">🕒 Career Timeline</h2>

        <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold text-blue-700">Muktodhora Technology Ltd</h3>
          <p className="text-sm text-gray-600">MERN Stack Developer · Chattogram, Bangladesh</p>
          <p className="text-sm text-gray-500">2024 – Present</p>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">🔹 Summary:</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Developing full-stack web applications for internal and client projects.</li>
              <li>Building interactive UIs using React.js and Next.js with Tailwind CSS.</li>
              <li>Creating REST APIs with Node.js, Express, and managing MongoDB databases.</li>
              <li>Collaborating with team using Git and GitHub for version control.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">🏆 Key Achievements:</h4>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Successfully delivered multiple production-ready apps (eCommerce, dashboards).</li>
              <li>Refactored legacy codebases into modular and reusable React components.</li>
              <li>Implemented secure authentication systems using JWT and OAuth.</li>
              <li>Integrated WebSocket for real-time features and improved UX.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-700">🧰 Skills:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git",
                "JWT",
                "REST API",
                "WebSocket",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
