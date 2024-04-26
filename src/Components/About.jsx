import React from "react";
import { useLoaderData,Link } from "react-router-dom";

export const githubinfoloader = async () => {
  try {
    const data = await fetch("https://api.github.com/users/Aadiii01");
    return data.json();
  } catch (error) {
    console.log("Error During Github API: ", error);
  }
};

function About() {
  const data = useLoaderData();
  console.log(data);

  return (
    <section className="px-2 py-10 md:px-0 mt-[150px] mb-[100px]">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0 ">
            <img
              className="relative h-48 w-48 rounded-full animate-pulse bg-slate-500 object-cover"
              src={data.avatar_url}
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl font-newl text-black">{data.bio}</p>
            </blockquote>
            <p className="mt-7 font-newr text-lg font-semibold text-black">
              {data.name}
            </p>
            <p className="mt-1 font-newm text-base text-gray-600">
              Username - <span className="font-newl">{data.login}</span>
            </p>
            <p className="mt-1 font-newm text-base text-gray-600">
              Total Repo - <span className="font-newl">{data.public_repos}</span>
            </p>
            <p className="mt-1 font-newm text-base text-gray-600">
              Location - <span className="font-newl">{data.location}</span>
            </p>

          </div>
        </div>
        <Link to="https://github.com/Aadiii01" target="_blank">
        <button className="ml-[420px] mt-[30px] w-[220px] h-[50px] text-center cursor-pointer border-none bg-black rounded-[12px] hover:bg-[#201f1f]">
          <div className="font-newr text-[18px] tracking-[-0.1px] leading-6 text-[#ffffff]">
            Check Github Profile
          </div>
        </button>
        </Link>
      </div>
    </section>
  );
}

export default About;
