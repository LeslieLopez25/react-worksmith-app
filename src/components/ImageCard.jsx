const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <div className="card w-70 bg-base-100 shadow-sm">
      <figure>
        <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg" alt="Coding" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Stage 1</h2>
        <p>Summary of where I am on this project so far.</p>
      </div>
    </div>
  );
};

export default ImageCard;
