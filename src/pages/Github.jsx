import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://api.github.com/users/Aekaay123");
      const data = await response.json();
      setData(data);
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-self-center mt-10 gap-y-4 px-4">
        <div>
          <h1>{data.name}</h1>
        </div>
        <div className="">
          <img
            src={data.avatar_url}
            width={200}
            height={200}
            className="rounded-full"
            alt="avater"
          />
        </div>
        <div>
          <p>{data.bio}</p>
          <div className="font-bold">
            <p className="inline">{data.location} : </p>
            <p className="inline">{data.followers} followers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Github;
