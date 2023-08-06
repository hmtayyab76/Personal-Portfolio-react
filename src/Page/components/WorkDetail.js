import React from "react";
import pi0 from "../assets/pi0.png";
import pi1 from "../assets/Screenshot 2023-08-02 131934.png";
import pi2 from "../assets/pi1.png";
import pi3 from "../assets/Screenshot 2023-08-02 132627.png";
import pi4 from "../assets/Screenshot 2023-08-02 132702.png";
import pi5 from "../assets/Screenshot 2023-08-02 132736.png";
import pi6 from "../assets/Screenshot 2023-08-02 132832.png";
import pi7 from "../assets/Screenshot 2023-08-02 132858.png";
import pi8 from "../assets/Screenshot 2023-08-02 133019.png";
import pi9 from "../assets/Screenshot 2023-08-02 133141.png";
import pi20 from "../assets/pi20.png";
import pi21 from "../assets/pi21.png";
import pi22 from "../assets/pi22.png";
import pi23 from "../assets/pi23.png";
import pi24 from "../assets/pi24.png";
import pi25 from "../assets/pi25.png";
import pi30 from "../assets/pi30.png";
import pi31 from "../assets/pi31.png";
import pi32 from "../assets/pi32.png";
import pi33 from "../assets/pi33.png";
import pi34 from "../assets/pi34.png";
import pi35 from "../assets/pi35.png";

const ProjectsData = [
  {
    name: "CV BUILDER APP",
    images: [pi0, pi1, pi2, pi3, pi4, pi5, pi6, pi7, pi8, pi9],
    skills: ["HTML5", "CSS3", "Tailwind CSS", "React", "MUI"],
    description:
      "The CV Builder app is a web application built using React and Tailwind CSS, designed to help users create professional and visually appealing CVs, cover letters, and resumes with ease. The app provides a user-friendly interface, making it accessible to both beginners and experienced users alike.",
    features: {
      f1: "CV Creation: Users can start building their personalized CVs from scratch by selecting from a variety of pre-designed templates.",
      f2: "Cover Letter Builder: Alongside CVs, the app includes a Cover Letter Builder, enabling users to create compelling cover letters that complement their CVs.",
      f3: "Resume Templates: The app offers a selection of ready-to-use resume templates that users can customize to their liking.",
      f4: "Easy Customization",
      f5: "Save and Download Options",
    },
    overall:
      "Overall, the CV Builder app empowers job seekers to present their qualifications and achievements in a professional and visually appealing manner. With its user-friendly interface, customization options, and various templates, users can create impressive CVs, cover letters, and resumes that stand out in the competitive job market. Whether for entry-level positions or experienced professionals, the CV Builder app is an indispensable tool for anyone seeking to enhance their job application materials and boost their chances of landing their dream job",
  },
  {
    name: "Niotech Cyber Workspace",
    images: [pi20, pi21, pi22, pi23, pi24, pi25],
    skills: ["TypeScript", "Core UI", "Tailwind CSS", "React", "MUI"],
    description:
      "The Niotech Cyber Project is a cutting-edge web application that aims to revolutionize the way businesses manage and enhance their cybersecurity practices. Built using TypeScript (TS), React, Tailwind CSS, and Material-UI (MUI) components, this project offers a powerful and user-friendly interface for businesses to effectively manage their cybersecurity operations, monitor potential threats, and analyze security risks.",
    features: {
      f1: "User Authentication and Access Control.",
      f2: "Dashboard and Data Visualization.",
      f3: "Threat Detection and Alerting.",
      f4: "Admin Dashboard: As part of the project, an advanced admin dashboard is created using Material-UI (MUI) components. The dashboard provides administrators with an all-encompassing view of cybersecurity activities, system performance, and user activity. It enables administrators to manage users, view reports, and configure security settings efficiently.",
    },
    overall:
      "Overall, the CV Builder app empowers job seekers to present their qualifications and achievements in a professional and visually appealing manner. With its user-friendly interface, customization options, and various templates, users can create impressive CVs, cover letters, and resumes that stand out in the competitive job market. Whether for entry-level positions or experienced professionals, the CV Builder app is an indispensable tool for anyone seeking to enhance their job application materials and boost their chances of landing their dream job",
  },
  {
    name: "Add to Cart Shopping Website",
    images: [pi30, pi31, pi32, pi33, pi34, pi35],
    skills: ["HTML5", "CSS3", "BootStrap", "React", "JavaScript"],
    description:
      "The Add to Cart Shopping Website is a modern and user-friendly e-commerce platform that aims to provide shoppers with a seamless and enjoyable shopping experience. This web application is built using Bootstrap, JavaScript, CSS, and React, offering a responsive and visually appealing interface to users across various devices.",
    features: {
      f1: "Product Catalog and Search",
      f2: "Shopping Cart: The core functionality of the website is its shopping cart, where users can add products they wish to purchase. The cart displays the selected items, quantities, and total prices, providing users with a clear overview of their selections.",
      f3: "Product Details",
      f4: "Theme Management (Light/Dark Mode): The website allows users to switch between light and dark themes based on their preferences.",
      f5: "API Integration for Product Data.",
      f6: "Add to Cart and Checkout: The Add to Cart feature enables users to add products to their shopping cart with a single click. The checkout process guides users through a smooth and secure payment process, offering multiple payment options.",
    },
    overall:
      "In conclusion, the Add to Cart Shopping Website is a feature-rich e-commerce platform built using Bootstrap, JavaScript, CSS, and React. With its user-friendly interface, seamless cart management, secure payment integration, and API-based product data updates, the website delivers an exceptional online shopping experience. Whether users are shopping for everyday items or specific products, the website offers a convenient and enjoyable shopping journey, making it an ideal choice for both shoppers and businesses alike.",
  },
];

function SkillsAndDeliverables({ skills }) {
  return (
    <div>
      <h2 className="text-2xl cshadow mt-4 mb-7 font-extrabold tracking-tight  sm:text-3xl">
        <span className="text-green-700">Skills</span> and deliverables:
      </h2>
      <div className="bg-slate-200 w-full max-sm:flex flex-wrap my-10 max-sm:bg-transparent rounded-xl">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 max-sm:p-2 py-2 m-2 bg-slate-300  rounded-lg font-bold"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
function FeaturesList({ features }) {
  return (
    <div>
      <h2 className="text-2xl cshadow mt-4 mb-7 font-extrabold tracking-tight  sm:text-3xl">
        <span className="text-green-700">Fea</span>tures:
      </h2>
      <ul className=" list-decimal pl-8 w-1/2 max-lg:w-full">
        {Object.values(features).map((feature, index) => (
          <li key={index} className=" text-gray-300 pl-3 text-base font-normal">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
function WorkDetail({ data }) {
  return (
    <>
      {/* <MyWork data={data[4].Work} /> */}

      {ProjectsData.map((data, index) => (
        <div key={index} className="p-10 max-lg:p-5 w-full">
          <h1 className="text-center font-extrabold text-2xl">{data.name}</h1>
          <div className="flex justify-center w-full ">
            <div
              className={`max-lg:w-full w-4/5 p-10 max-lg:p-5 overflow-x-auto flex transform transition-transform duration-500 hsc`}
            >
              {data.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="relative mx-4 max-lg:my-0 max-lg:mx-2 my-4 rounded-2xl"
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl cshadow font-extrabold tracking-tight  sm:text-3xl">
              <span className="text-green-700">Disc</span>ription:
            </h2>
            <div className=" w-2/3 max-lg:w-full font-medium text-gray-300">
              {data.description}
            </div>
            <SkillsAndDeliverables skills={data.skills} />
            <FeaturesList features={data.features} />
            <h1> </h1>
            <h2 className="my-4 text-2xl cshadow font-extrabold tracking-tight  sm:text-3xl">
              <span className="text-green-700">Conc</span>lusion:
            </h2>
            <div className=" text-gray-300 w-4/5 max-lg:w-full">
              {data.overall}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default WorkDetail;
