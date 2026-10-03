import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 pt-16 pb-20">
      <div className="hero-content flex-col gap-6 px-4 lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg"
          className="h-48 w-full rounded-lg object-cover shadow-md hover:shadow-lg sm:h-64 sm:max-w-xs lg:h-80 lg:max-w-sm"
        />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Create Your Project</h1>
          <p className="py-4 text-sm text-gray-500 sm:text-base lg:py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link to="/create-project" className="btn w-full btn-info sm:w-auto">
            Create Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
