const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <div className="card w-36 rounded-lg border border-base-300 bg-base-100 shadow-md sm:w-56 lg:w-70">
      <figure>
        <img
          src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg"
          alt="Coding"
          className="h-24 w-full rounded-t-lg object-cover sm:h-32 lg:h-40"
        />
      </figure>
      <div className="card-body p-3 sm:p-4">
        <h2 className="card-title text-sm sm:text-base">Stage 1</h2>
        <p className="text-xs sm:text-sm">Summary of where I am on this project so far.</p>
      </div>
    </div>
  );
};

export default ImageCard;
