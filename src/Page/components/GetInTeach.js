import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import map from "../assets/map.webp";
import "../portfolio.css";
function GetInTeach({ data }) {
  const [msg, setmsg] = useState(false);

  const form = useRef();
  if (!data) {
    return <div>Error: Invalid data for GetInTeach component</div>;
  }
  const {
    PLocation,
    Email,
    NGitHub,
    NInstagram,
    NTwitter,
    CGitHub,
    CInstagram,
    CTwitter,
  } = data;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v8jgkfm",
        "template_nf2lh2p",
        form.current,
        "c_v9Szu8MVI09jOMW"
      )
      .then(
        (result) => {
          setmsg(true);
          setTimeout(() => {
            setmsg(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="p-4 md:p-8" id="contact">
      <h2 className="mb-4 text-2xl cshadow font-extrabold tracking-tight text-stone-200 sm:text-3xl">
        <span className="text-green-700">Get</span> in touch
      </h2>
      <div className="mb-2 aspect-[5/2] h-auto w-full sm:aspect-[4/1]">
        <div className="relative h-full w-full">
          <div className="absolute top-0 z-10 h-8 w-full bg-gradient-to-b from-stone-900 sm:h-12"></div>
          <div className="absolute right-0 z-10 h-full w-8 bg-gradient-to-l from-stone-900 sm:w-12"></div>
          <div className="absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t from-stone-900 sm:h-12"></div>
          <div className="absolute left-0 z-10 h-full w-8 bg-gradient-to-r from-stone-900 sm:w-12"></div>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={map}
            alt="Map"
            className="h-full w-full bg-gradient-to-t from-stone-900 object-cover object-center"
          />
        </div>
        <div className="relative mx-auto grid gap-x-4 gap-y-8 md:grid-cols-2">
          <div className="bg-stone-900 md:col-span-1">
            <div>
              <p className="prose mb-4 leading-6 text-stone-300">
                Have a project for me? Any questions about something I've built?
                I'd love to hear from you, give me a shout by email or by using
                the form below if you'd like to get in contact with me.
              </p>
              <dl className="mt-6 flex flex-col space-y-4 text-base text-stone-500 sm:space-y-2">
                <div>
                  <dt className="sr-only">Location</dt>
                  <dd className="flex items-center">
                    <a
                      className="-m-2 flex p-2 text-stone-300 hover:text-white"
                      href={PLocation}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 flex-shrink-0 text-stone-100 sm:h-5 sm:w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        ></path>
                      </svg>
                      <span className="ml-3 text-sm sm:text-base">
                        {PLocation}
                      </span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd className="flex items-center">
                    <a
                      className="-m-2 flex p-2 text-stone-300 hover:text-white"
                      href={`mailto:${Email}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 flex-shrink-0 text-stone-100 sm:h-5 sm:w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        ></path>
                      </svg>
                      <span className="ml-3 text-sm sm:text-base">{Email}</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Github</dt>
                  <dd className="flex items-center">
                    <a
                      className="-m-2 flex p-2 text-stone-300 hover:text-white"
                      href={CGitHub}
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-stone-100 sm:h-5 sm:w-5"
                        fill="currentColor"
                        viewBox="0 0 128 128"
                        width="128"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                          fillRule="evenodd"
                        ></path>
                        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                      </svg>
                      <span className="ml-3 text-sm sm:text-base">
                        {NGitHub}
                      </span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Twitter</dt>
                  <dd className="flex items-center">
                    <a
                      className="-m-2 flex p-2 text-stone-300 hover:text-white"
                      href={CTwitter}
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-stone-100 sm:h-5 sm:w-5"
                        fill="currentColor"
                        viewBox="0 0 128 128"
                        width="128"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="ml-3 text-sm sm:text-base">
                        {NTwitter}
                      </span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Instagram</dt>
                  <dd className="flex items-center">
                    <a
                      className="-m-2 flex p-2 text-stone-300 hover:text-white"
                      href={CInstagram}
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-stone-100 sm:h-5 sm:w-5"
                        fill="currentColor"
                        viewBox="0 0 128 128"
                        width="128"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M92.6759 0H35.3226C15.8457 0 0 15.8465 0 35.3234V92.6766C0 112.154 15.8457 128 35.3226 128H92.6759C112.154 128 128 112.154 128 92.6766V35.3234C128.001 15.8465 112.154 0 92.6759 0ZM116.644 92.6766C116.644 105.892 105.892 116.643 92.6766 116.643H35.3226C22.1079 116.644 11.3568 105.892 11.3568 92.6766V35.3234C11.3568 22.1086 22.1079 11.3568 35.3226 11.3568H92.6759C105.891 11.3568 116.643 22.1086 116.643 35.3234V92.6766H116.644Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M64 31.0191C45.8133 31.0191 31.0176 45.8147 31.0176 64.0015C31.0176 82.1875 45.8133 96.9823 64 96.9823C82.1867 96.9823 96.9824 82.1875 96.9824 64.0015C96.9824 45.8147 82.1867 31.0191 64 31.0191ZM64 85.6248C52.0761 85.6248 42.3744 75.9246 42.3744 64.0007C42.3744 52.0761 52.0754 42.3751 64 42.3751C75.9246 42.3751 85.6256 52.0761 85.6256 64.0007C85.6256 75.9246 75.9239 85.6248 64 85.6248Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M98.3656 21.3893C96.1775 21.3893 94.0281 22.2752 92.4828 23.8273C90.9299 25.3718 90.0373 27.522 90.0373 29.7176C90.0373 31.9065 90.9307 34.0559 92.4828 35.608C94.0273 37.1526 96.1775 38.046 98.3656 38.046C100.561 38.046 102.704 37.1526 104.256 35.608C105.808 34.0559 106.694 31.9057 106.694 29.7176C106.694 27.522 105.808 25.3718 104.256 23.8273C102.711 22.2752 100.561 21.3893 98.3656 21.3893Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="ml-3 text-sm sm:text-base">
                        {NInstagram}
                      </span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="md:col-span-1">
            <form
              className="grid min-h-[320px] grid-cols-1 gap-y-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <div className="relative mt-1 rounded-md">
                <input
                  className="block w-full rounded-md border-none bg-stone-700 px-3 py-2 text-white shadow-xl shadow-black/30  sm:text-sm placeholder-stone-500 focus:border-gray-500 focus:ring-gray-500"
                  name="user_name"
                  placeholder="Name"
                  required
                  type="text"
                  fdprocessedid="qv1rbpo"
                />
              </div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <div className="relative mt-1 rounded-md">
                <input
                  className="block w-full rounded-md border-none bg-stone-700 px-3 py-2 text-white shadow-xl shadow-black/30  sm:text-sm placeholder-stone-500 focus:border-gray-500 focus:ring-gray-500"
                  autoComplete="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  type="email"
                  fdprocessedid="ttlhrh"
                />
              </div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <div className="relative mt-1 rounded-md">
                <textarea
                  className="block w-full rounded-md border-none bg-stone-700 px-3 py-2 text-white shadow-xl shadow-black/30  sm:text-sm placeholder-stone-500 focus:border-gray-500 focus:ring-gray-500"
                  maxLength="250"
                  name="message"
                  placeholder="Message"
                  required
                  rows="6"
                  type="text"
                ></textarea>
              </div>
              <button
                aria-label="Submit contact form"
                className="w-max rounded-full border-2 border-green-800 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-green-800 focus:ring-offset-2 focus:ring-offset-stone-800"
                type="submit"
                value="Send"
                fdprocessedid="c3tl6"
              >
                Send Message
              </button>
              {msg ? (
                <div className="fixed top-10 right-10 flex items-center z-50 ">
                  <div className="relative p-2 bg-black rounded font-bold text-green-700">
                    <div className="flex items-center ">
                      <span className="ml-2">Message sent successfully!</span>
                    </div>
                    <div
                      className="absolute bottom-0 right-0 w-full h-1 bg-green-700 rounded-2xl"
                      style={{
                        animation: "progress 2s linear forwards",
                      }}
                    />
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTeach;
