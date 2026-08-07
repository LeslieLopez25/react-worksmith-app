import React from "react";

const Project = () => {
  return (
    <>
      <div>
        <textarea placeholder="Bio" className="textarea textarea-xl"></textarea>
      </div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://images.pexels.com/photos/1102797/pexels-photo-1102797.png"
            alt="Coding"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there are title and actions
            parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
