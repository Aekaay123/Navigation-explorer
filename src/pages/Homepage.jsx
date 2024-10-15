const Homepage = () => {
  return (
    <div className="max-w-[1000px] mx-auto mb-20 mt-10 flex gap-x-4">
      <div className="relative">
        <img
          src="landscape.jpg"
          alt=""
          width={2000}
          height={2000}
          className="rounded-md backdrop-blur-sm"
        />
        <p className="absolute -top-4 cursor-pointer right-0 bg-orange-500 rounded-md p-3">landscape</p>
      </div>
      <div>
        <h1 className="font-bold mb-10">Explore Stunning Landscapes</h1>
        <p>
          Journey through some of the world most awe-inspiring landscapes.
          Whether it’s the serene beauty of endless meadows, the dramatic peaks
          of towering mountains, or the tranquil shores of pristine lakes, each
          scene is a masterpiece of nature. Let these stunning vistas transport
          you to a place of peace, adventure, and wonder, where every view tells
          a story and every moment feels timeless.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
