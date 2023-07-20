import React from "react";
import ProjectCard from "./ProjectCard";
const Project = () => {
 

  return (
    <section className="project md:px-[10rem] py-[5rem] bg-white flex flex-col justify-center text-center">
      <div className="py-5 text-center">
        <p className="text-2xl text-conone font-semibold">Work</p>
        <h2 className="pt-4 pb-6 px-2 text-2xl md:text-4xl text-primary font-semibold">Embark on a journey through my creations.</h2>
        </div>
      <ProjectCard/>
    </section>
  );
};

export default Project;
