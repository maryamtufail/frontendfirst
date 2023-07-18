import React from 'react'

const Hero = () => {
 
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetClassName = event.currentTarget.getAttribute('data-target');
    const targetElements = document.querySelectorAll(`.${targetClassName}`);
    if (targetElements.length > 0) {
      targetElements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home flex flex-col items-center  w-full flex-col pt-[9rem] pb-[16rem] font-bold  text-center">
     <div className="py-6 text-5xl leading-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight"><h1 >
      Level up your  </h1><p>Web <span className='text-conone'>Presence</span></p></div> 
      <p className='md:w-1/2 md:text-xl text-lg'>FrontendFirst, with its emphasis on modern designs and agile methods,  has proven to attract more customers than ever before. Don&apos;t hesitate any longer! Place your order now and experience the benefits firsthand.</p>
      <a href='#'  data-target="project" className="transform px-10 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary mt-[3rem]"  onClick={handleLinkClick}>
       Explore my journey
      </a>
    </section>
  )
}

export default Hero
