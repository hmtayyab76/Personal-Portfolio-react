import React from "react";
import { Fade } from "react-reveal";

function Stats({ data }) {
  const { Githubstars, HappyClients, YearOfExp, OssPrj } = data;
  return (
    <section className="p-4 md:p-8 w-full">
      <h2 className="mb-4 cshadow text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl">
        <span className="text-green-700">Sta</span>ts
      </h2>
      <Fade bottom>
        <div className="grid grid-cols-2 gap-2 sm:auto-cols-fr sm:grid-flow-col lg:gap-8 ">
          <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-8 w-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
            <h3 className="text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg">
              Github stars
            </h3>
            <span className="text-lg font-medium text-stone-200 sm:text-4xl">
              {Githubstars}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-8 w-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              ></path>
            </svg>
            <h3 className="text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg">
              Happy clients
            </h3>
            <span className="text-lg font-medium text-stone-200 sm:text-4xl">
              {HappyClients}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-8 w-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              ></path>
            </svg>
            <h3 className="text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg">
              Years of experience
            </h3>
            <span className="text-lg font-medium text-stone-200 sm:text-4xl">
              {YearOfExp}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border-none border-green-900 bg-stone-800 px-2 py-4 shadow-xl shadow-black/30 sm:p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-8 w-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              ></path>
            </svg>
            <h3 className="text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg">
              OSS Projects
            </h3>
            <span className="text-lg font-medium text-stone-200 sm:text-4xl">
              {OssPrj}
            </span>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Stats;
