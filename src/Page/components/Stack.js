import React from "react";

function Stack({ data }) {
  const {
    Rct,
    TS,
    Next,
    Vue,
    HTML5,
    CSS3,
    JS,
    NodeJs,
    CPP,
    Py,
    MUI,
    Bootstrap,
    Tailwind,
    CUI,
  } = data;
  return (
    <section className="p-4 md:p-8 w-full">
      <h2 className="mb-4 text-2xl cshadow font-extrabold tracking-tight text-stone-200 sm:text-3xl">
        <span className="text-green-700">Cor</span>e tech stack
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <div className="grid-cols-[max-content_1fr] place-content-start gap-2  sm:grid">
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Frontend
          </h3>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              React
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < Rct ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              TypeScript
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < TS ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              Next
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < Next ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              Vue
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < Vue ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Languages
          </h3>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              HTML5
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < HTML5 ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              CSS3
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < CSS3 ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              JavaScript
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < JS ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
        </div>
        <div className="grid-cols-[max-content_1fr] place-content-start gap-2  sm:grid">
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            UI Libraries
          </h3>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              Material-UI
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < MUI ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              Core-UI
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < CUI ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              React Bootstrap
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < Bootstrap ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              Tailwind CSS
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < Tailwind ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <h3 className="col-start-1 col-end-[span_2] text-xl font-bold text-stone-200">
            Backend
          </h3>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              C++
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < CPP ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>

          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              Node.js
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < NodeJs ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
          <div className="grid grid-flow-col justify-start">
            <span className=" whitespace-nowrap text-sm font-medium text-stone-400">
              Python
            </span>
          </div>
          <div className="flex w-full items-center justify-start space-x-0.5 my-2 sm:my-0">
            {Array(10)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`flex h-1 lg:h-2 flex-grow rounded-md ${
                    index < Py ? "bg-green-700" : "bg-stone-700"
                  }`}
                ></span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
