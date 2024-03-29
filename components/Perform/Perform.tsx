import PerformCard from "./PerformCard";
import { Slide } from "react-awesome-reveal"

const Proform = () => {
  return (
    <section className="px-3 md:px-[12rem] py-[4rem] bg-primary text-primary flex flex-col justify-center text-center">
        <div className="text-xl md:text-4xl  font-bold"><p>Grow your business with me</p></div>
        <div className=" pb-12 text-md md:text-lg"><p>Due to NDA, I can’t show all of my best work but you can see industries list.</p></div>
      <PerformCard />
    </section>
  );
};

export default Proform;
