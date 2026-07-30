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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-200 px-8 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-24">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-12 md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <img
              className="w-full rounded-lg object-cover shadow-2xl md:w-1/2"
              src={section.image}
              alt={section.title}
            />
            <div className="flex flex-1 flex-col gap-4">
              <h1 className="text-5xl font-bold">{section.title}</h1>
              <p className="text-lg text-gray-500">{section.description}</p>
              <button className="btn btn-primary">Create Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
