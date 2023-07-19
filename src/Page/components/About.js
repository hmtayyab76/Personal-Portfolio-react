import React from "react";
// import PersonImage from "../assets/person.jpg";

function About({ data }) {
  const {
    description1,
    description2,
    Employment,
    Study,
    Nationality,
    Location,
    Interests,
    Age,
    PImage,
  } = data;
  return (
    <section className="p-4 pt-12 md:p-8 md:pt-12 w-full">
      <div className="hidden lg:block">
        <h2 className="mb-4 text-2xl cshadow font-extrabold tracking-tight text-stone-200 sm:text-3xl">
          <span className="text-green-700">Abo</span>ut me
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="relative flex grow lg:basis-5/6 ">
          <div className="flex w-full flex-col items-start gap-y-6 overflow-visible rounded-2xl bg-stone-800 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 lg:pr-28 lg:pt-8">
            <p className="whitespace-pre-line text-gray-300 prose">
              {description1}
            </p>
            <p className="whitespace-pre-line text-gray-300 prose">
              {description2}
            </p>
            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Location :
                </span>
                <span className=" text-xs text-gray-300 sm:text-sm">
                  {Location}
                </span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Age :
                </span>
                <span className=" text-xs text-gray-300 sm:text-sm">{Age}</span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Nationality :
                </span>
                <span className=" text-xs text-gray-300 sm:text-sm">
                  {Nationality}
                </span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Interests :
                </span>
                <span className=" text-xs text-gray-300 sm:text-sm">
                  {Interests}
                </span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Study :
                </span>
                <span className=" text-xs text-gray-300 sm:text-sm">
                  {Study}
                </span>
              </li>
              <li className="col-span-1 flex items-start gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  ></path>
                </svg>
                <span className="text-xs font-bold text-white sm:text-sm">
                  Employment:
                </span>
                <span className=" text-xs text-gray-300 sm:text-sm">
                  {Employment}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full grow items-end gap-x-4 lg:flex-1 lg:basis-1/6">
          <div className="mr-auto flex flex-1 lg:hidden">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl">
              <span className="text-green-700">Abo</span>ut me
            </h2>
          </div>
          <div className="-my-8 flex w-full flex-1 justify-center self-center lg:-ml-24 lg:block  lg:py-16">
            <div className="relative z-20 aspect-square w-32 overflow-hidden rounded-3xl shadow-xl shadow-black/40  lg:w-auto ">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                src={PImage}
                alt="profile-image"
                className="object-cover absolute h-full w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
