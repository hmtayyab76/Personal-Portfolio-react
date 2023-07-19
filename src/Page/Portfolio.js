import React from "react";
import "./portfolio.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Stats from "./components/Stats";
import Stack from "./components/Stack";
import MyWork from "./components/MyWork";
import EduExp from "./components/EduExp";
import GetInTeach from "./components/GetInTeach";
import Footer from "./components/Footer";

function Portfolio({ PersonData }) {
  return (
    <div className="view flex justify-center min-h-screen w-full p-0 sm:p-8">
      <div className="flex shadow-strong cshadow min-h-full w-full max-w-screen-xl grow text-white flex-col items-start overflow-hidden border border-stone-900 bg-stone-900 shadow-strong sm:rounded-3xl animate-page-in">
        <Intro data={PersonData[0]} />
        <About data={PersonData[1]} />
        <Stats data={PersonData[2]} />
        <Stack data={PersonData[3]} />
        <MyWork data={PersonData[4].Work} />
        <EduExp
          education={PersonData[5].Education}
          experience={PersonData[5].Experience}
        />
        <GetInTeach data={PersonData[6]} />
        <Footer data={PersonData[7]} />
      </div>
    </div>
  );
}

export default Portfolio;
