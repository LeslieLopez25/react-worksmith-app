const projects = [
  {
    title: "Project 1 Title",
    type: "Fullstack",
    status: "In Progress",
    image: "https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg",
  },
  {
    title: "Project 2 Title",
    type: "Design",
    status: "Idea",
    image: "https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg",
  },
  {
    title: "Project 3 Title",
    type: "Backend",
    status: "Completed",
    image: "https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg",
  },
];

const hasProjects = false;

const HomePage = () => {
  return (
    <div
      className={`flex min-h-screen bg-base-200 ${hasProjects ? "flex-col items-start p-8 pt-18" : "items-center justify-center"}`}
    >
      {hasProjects ? (
        <>
          {/* Header */}
          <div className="mx-auto mb-12 flex w-full max-w-5xl items-center justify-between">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <button className="btn btn-sm btn-info">New Project</button>
          </div>

          {/* Projects grid */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card cursor-pointer bg-base-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body gap-2">
                  <h2 className="card-title text-lg">{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-sm badge-info">{project.type}</span>
                    <span className="badge badge-ghost badge-sm">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-base-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">No projects yet</h1>
          <p className="max-w-sm text-gray-500">
            Start documenting your work by creating your first project.
          </p>
          <button className="btn mt-2 btn-info">Create your first project</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
