import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbar() {

  const [offCanvas, setOffCanvas] = useState(false);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetClassName = event.currentTarget.getAttribute('data-target');
    const targetElements = document.querySelectorAll(`.${targetClassName}`);

    if (targetElements.length > 0) {
      targetElements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="flex bg-primary justify-between items-center lg:px-[12rem] py-5 px-[1.5rem]">
        <a href="#" data-target="home" onClick={handleLinkClick}>
        <Image
            src="/img/frontslogo.png"
            width={200}
            height={120}
            alt="logo"
          />
        </a>
        <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
          <Image
            src="/img/nmenu.png"
            width={40}
            height={32}
            className="cursor-pointer"
            onClick={() => setOffCanvas(true)} alt="openmenu"
          />
        </OutsideClickHandler>
      </nav>
      <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""} `}>
        <div className={style.close_icon}>
          <Image
            src="/img/close.png"
            width={50}
            height={50}
            onClick={() => setOffCanvas(false)} alt="closemenu"
          />
        </div>
        <div className={style.canvas_content}>

          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <a href="#" data-target="home" onClick={handleLinkClick}>
                Home
              </a>
            </p>
            <p>
              <a href="#" data-target="about" onClick={handleLinkClick}>
                About
              </a>
            </p>
            <p>
              <a href="#" data-target="serivce" onClick={handleLinkClick}>
              Serivce
              </a>
            </p>
            <p>
              <a href="#" data-target="contact" onClick={handleLinkClick}>
                Contact
              </a>
            </p>
          </div>
        </div>
        <div className={style.social}>
          <a href="https:www.instagram.com/frontendfirst" aria-label="Instagram">
            <FiInstagram className="w-8 h-8"/>
          </a>
          <a href="https:www.linkedin.com/in/maryam-tufail7" aria-label="Linkedin">
          <FiLinkedin className="w-8 h-8"/>
          </a>
        </div>
        <div className={style.email}>
          <p>Get in touch</p>
          <h2>
            <u>maryamtufail78@gmail.com</u>
          </h2>
        </div>

      </div>
    </>
  );
}