import { Link } from "react-router-dom";

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
      className={`flex min-h-screen bg-base-100 ${hasProjects ? "flex-col items-start p-4 pt-20 pb-20 sm:p-8 sm:pt-18" : "items-center justify-center px-4"}`}
    >
      {hasProjects ? (
        <>
          {/* Header */}
          <div className="mx-auto mb-8 flex w-full max-w-5xl items-center justify-between sm:mb-12">
            <h1 className="text-3xl font-bold sm:text-3xl">My Projects</h1>
            <Link to="/create-project" className="btn btn-sm btn-info">
              New Project
            </Link>
          </div>

          {/* Projects grid */}
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card cursor-pointer rounded-lg bg-base-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover sm:h-48"
                  />
                </figure>
                <div className="card-body gap-2 p-4">
                  <h2 className="card-title text-base sm:text-lg">{project.title}</h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge rounded-full p-2 badge-sm badge-info">
                      {project.type}
                    </span>
                    <span className="badge rounded-full badge-ghost p-2 badge-sm">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center gap-4 px-4 text-center">
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
          <h1 className="text-2xl font-bold sm:text-3xl">No projects yet</h1>
          <p className="max-w-sm text-sm text-gray-500 sm:text-base">
            Start documenting your work by creating your first project.
          </p>
          <Link to="/create-project" className="btn mt-2 w-full btn-info sm:w-auto">
            Create your first project
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
