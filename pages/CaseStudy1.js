// pages/password-protected.js
import { useState } from "react";

const NOTION_LINK = process.env.NEXT_PUBLIC_NOTION_LINK;
console.log("Notion link:", process.env.NEXT_PUBLIC_NOTION_LINK);

const CaseStudy1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/validate-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: inputValue }),
    });

    if (response.status === 200) {
      setShowError(false);
      window.location.href = process.env.NEXT_PUBLIC_NOTION_LINK;
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="flex flex-col content-center">
      <div
        id="login"
        className="bg-[#FDFEFF] md:w-[600px] ml-auto mr-auto rounded-[18px] p-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] hover:border-blue-300 dark:bg-[#363639] dark:border-none w-[80%] content-center text-center mt-[80px]"
      >
        <h2 className="mb-[16px] mt-[32px]">Protected documents</h2>
        <p className="mb-[36px]">
          Case studies are kept inline with privacy requests, if your
          interested in seeing the content <span className="bg-[]]">drop me an email.</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="h-[48px] w-[80%] md:w-[400px] mb-[24px] mr-auto ml-auto rounded-md p-[8px] border-gray-300 border-2"
            type="password"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Password"
          />
          <button
            className="bg-[#353534] hover:bg-[#454544] text-white mr-auto w-[80%] md:w-[400px] ml-auto rounded-md h-[48px] mb-[32px] "
            type="submit"
          >
            Submit
          </button>
        </form>
        {showError && <p>Incorrect password. Please try again.</p>}
      </div>
    </div>
  );
};

export default CaseStudy1;
