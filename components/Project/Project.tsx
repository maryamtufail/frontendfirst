import React from "react";
import ProjectCard from "./ProjectCard";
const Project = () => {
 

  return (
    <section className="project px-2 py-12 bg-white min-h-screen flex flex-col justify-center">
      <div className="py-10 text-center">
        <p className="text-2xl text-[#3294FE] font-semibold">Work</p>
        <h2 className="pt-2 text-4xl text-[#333333] font-semibold">Embark on a journey through my creations.</h2>
        </div>
      <ProjectCard/>
    </section>
  );
};

export default Project;
