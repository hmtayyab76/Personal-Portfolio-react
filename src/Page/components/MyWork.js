import React from "react";
// import "swiper/swiper-bundle.css";

function MyWork({ data }) {
  return (
    <section className="w-full px-4 pt-4 sm:px-8 sm:pt-8">
      <h2 className="mb-4 cshadow text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl">
        <span className="text-green-700">My </span>work
      </h2>
      <div className="relative  w-full hide-scroll-bar flex snap-x snap-mandatory snap-start gap-x-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-6 sm:gap-x-8 sm:px-8">
        {data.map((data, index) => (
          <a
            className="relative overflow-hidden rounded-xl shadow-xl shadow-black/30 aspect-video h-36 shrink-0 snap-start snap-always scroll-ml-4 sm:h-48 sm:scroll-ml-8 md:h-56"
            href={data.WLink}
            key={index}
          >
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src={data.WImage}
              alt="Image Description"
              className="object-cover w-full h-full"
              sizes="(min-width: 640px) 450px, 320px"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default MyWork;
