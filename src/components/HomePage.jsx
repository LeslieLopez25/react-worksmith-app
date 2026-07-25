import React, { useState } from "react";

const HomePage = () => {
  const [createProject, setCreateProject] = useState(false);
  const sections = [
    {
      title: "Project 1 Title",
      description: "Project 1 Description",
      image: "https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg",
    },
    {
      title: "Project 2 Title",
      description: "Project 2 Description",
      image: "https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg",
    },
    {
      title: "Project 3 Title",
      description: "Project 3 Description",
      image: "https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg",
    },
  ];

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-12 md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <img
              className="max-w-sm flex-1 rounded-lg shadow-2xl"
              src={section.image}
              alt={section.title}
            />
            <div>
              <h1 className="text-5xl font-bold">
                {createProject ? "Create Your Project" : "Edit Your Project"}
              </h1>
              <p className="py-6">{createProject ? "Create your project first." : "Edit"}</p>
              <button className="btn btn-primary" onClick={() => setCreateProject(!createProject)}>
                {createProject ? "Create Project" : "Edit Project"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
