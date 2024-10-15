
const About = () => {
  return (
    <div className="max-w-[1000px] mx-auto mb-20 mt-10 flex gap-x-4">
      <div className="relative w-[1000px] ">
        <img
          src="about.jpg"
          alt="About Us"
          width={2000}
          height="500"
          className="rounded-md backdrop-blur-sm"
        />
        <p className="absolute -top-4 cursor-pointer right-0 bg-orange-500 rounded-md p-3">About Us</p>
      </div>
      <div>
        <h1 className="font-bold mb-10">About Our Company</h1>
        <p>
          Welcome to [Your Company Name], where innovation and passion come together to create exceptional experiences. 
          Our mission is to deliver top-quality services, driven by a commitment to excellence and a desire to exceed expectations. 
          With a team of dedicated professionals, we focus on understanding our clients’ needs and providing personalized solutions.
          We believe in building strong, long-lasting relationships based on trust, integrity, and mutual success.
        </p>
      </div>
    </div>
  )
}

export default About