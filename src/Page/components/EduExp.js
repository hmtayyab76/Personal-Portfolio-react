import React from "react";
import { Fade } from "react-reveal";

function EduExp({ education, experience }) {
  if (!experience && !education) {
    return <div>Data Not Fount</div>;
  }
  return (
    <div>
      <section className="p-4 md:p-8" id="resume">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="col-span-1 ">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl">
              <span className="text-green-700">Edu</span>cation
            </h2>
            <ul>
              {education.map((edu, index) => (
                <li
                  className="relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0"
                  key={index}
                >
                  <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                    <Fade top>
                      <span className="whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                        {edu.EduTimePeriod}
                      </span>
                    </Fade>
                    <span className="text-xs font-medium text-stone-400">
                      {edu.EduInstituteName}
                    </span>
                  </div>
                  <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                    <h2 className="font-bold text-stone-200">
                      {edu.EduProgram}
                    </h2>
                    <p className="text-stone-400">{edu.EduDescription}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 ">
            <h2 className="mb-4 text-2xl font-extrabold cshadow tracking-tight text-stone-200 sm:text-3xl">
              <span className="text-green-700">Exp</span>erience
            </h2>
            <ul>
              {experience.map((exp, index) => (
                <li
                  className="relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0"
                  key={index}
                >
                  <div className=" absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                    <Fade bottom>
                      <span className="whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30">
                        {exp.ExpTimePeriod}
                      </span>
                    </Fade>
                    <span className="text-xs font-medium text-stone-400">
                      {exp.ComapnyName}
                    </span>
                  </div>
                  <div className="prose prose-sm flex flex-col pt-10 prose-ul:list-none">
                    <h2 className="font-bold text-stone-200">{exp.JobRoll}</h2>
                    <p className="text-stone-400">{exp.JobDescription}</p>
                    <ul className="my-3 sm:my-5">
                      {exp.FontEnd || exp.BackEnd ? (
                        <>
                          {exp.FontEnd && (
                            <li className="text-stone-400 ml-5 sm:ml-8">
                              <strong className="text-stone-200">
                                Frontend:
                              </strong>{" "}
                              {exp.FontEnd}
                            </li>
                          )}
                          {exp.BackEnd && (
                            <li className="text-stone-400 ml-5 sm:ml-8">
                              <strong className="text-stone-200">
                                Backend:
                              </strong>{" "}
                              {exp.BackEnd}
                            </li>
                          )}
                        </>
                      ) : null}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EduExp;
