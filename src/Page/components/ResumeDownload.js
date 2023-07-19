import resume from "../assets/resume.pdf";
const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div
      className="flex rounded-full border-2  bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2  focus:ring-offset-2 focus:ring-offset-stone-800 border-green-800 focus:ring-green-800 cursor-pointer"
      onClick={handleDownload}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="mr-2 h-5 w-5 stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        ></path>
      </svg>
      Resume
    </div>
  );
};

export default ResumeDownloadButton;
