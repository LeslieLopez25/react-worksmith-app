import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/12899157/pexels-photo-12899157.jpeg"
          className="max-w-xs rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Create Your Project</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link to="/create-project" className="btn btn-info">
            Create Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
