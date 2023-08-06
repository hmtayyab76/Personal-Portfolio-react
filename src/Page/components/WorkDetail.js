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
      f1: "CV Creation: Users can start building their personalized CVs from scratch by selecting from a variety of pre-designed templates. The app offers multiple templates catering to different industries and professions, ensuring that users find a design that best suits their needs.",
      f2: "Cover Letter Builder: Alongside CVs, the app includes a Cover Letter Builder, enabling users to create compelling cover letters that complement their CVs. Users can tailor their cover letters to specific job applications, enhancing their chances of securing an interview.",
      f3: "Resume Templates: The app offers a selection of ready-to-use resume templates that users can customize to their liking. These templates are designed to showcase the user's skills, experiences, and achievements in a visually engaging manner.",
      f4: "Easy Customization: Users can customize the content, layout, font styles, colors, and other visual elements of their CVs, cover letters, and resumes using an intuitive editor. The app provides real-time previewing, enabling users to see the changes as they make them.",
      f5: "Save and Download Options: Once the users are satisfied with their creations, they can save their CVs, cover letters, and resumes in their accounts for future editing. Additionally, they can download the final documents in various formats, such as PDF, DOCX, or TXT, making it convenient for sharing with potential employers.",
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
      f1: "User Authentication and Access Control: The application provides robust user authentication mechanisms, enabling businesses to securely manage user accounts and access levels. Administrators can grant specific permissions to users based on their roles within the organization, ensuring sensitive data is protected.",
      f2: "Dashboard and Data Visualization: The Niotech Cyber Project includes an intuitive dashboard with interactive data visualizations. Administrators can monitor critical cybersecurity metrics, track security incidents, and analyze trends. This real-time overview empowers businesses to make informed decisions and respond promptly to potential threats.",
      f3: "Threat Detection and Alerting: Leveraging the power of React and TypeScript, the application integrates with various cybersecurity tools and APIs to detect potential threats and vulnerabilities. Automated alerts notify administrators of any suspicious activities or potential security breaches, allowing for timely responses.",
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
      f1: "Product Catalog and Search: The website includes a comprehensive product catalog with various categories and filters, enabling users to easily find their desired products. A powerful search feature allows shoppers to quickly locate specific items based on keywords",
      f2: "Shopping Cart: The core functionality of the website is its shopping cart, where users can add products they wish to purchase. The cart displays the selected items, quantities, and total prices, providing users with a clear overview of their selections.",
      f3: "Product Details: Clicking on a product thumbnail reveals detailed information about the item, including images, descriptions, specifications, and customer reviews. This feature assists users in making informed purchasing decisions.",
      f4: "Theme Management (Light/Dark Mode): The website allows users to switch between light and dark themes based on their preferences. The theme management feature enhances the user experience by providing a customizable and visually pleasing interface.",
      f5: "API Integration for Product Data: The website leverages API integration to fetch product data from external sources, ensuring the availability of the latest products and real-time updates.",
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
            className="px-4 max-sm:p-2 py-2 m-2 bg-slate-300  rounded-lg font-bold"
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
      <ul className=" list-decimal pl-8 w-4/5 max-lg:w-full">
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
              <span className="text-green-700">End</span> Description:
            </h2>
            <div className=" text-gray-300">{data.overall}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default WorkDetail;
