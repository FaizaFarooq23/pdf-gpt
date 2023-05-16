import React, { useRef, useState } from "react";

export default function InputField() {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const updateFileName = (e) => {
    setFileName(e.target.name);
  };
  const triggerInput = () => {
    inputRef.current.click();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pb-8">
      <div className="flex justify-between items-center rounded-[10px] w-[94%] input-field">
   
          <div>
            <img
              className="cursor-pointer"
              src="\icons\upload.svg"
              alt="File upload Icon"
              onClick={triggerInput}
            />
          </div>
          <div className="flex justify-start items-center w-full">
          <input
            className=" text-sm hidden"
            ref={inputRef}
            id="file"
            type="file"
            onChange={updateFileName}
          />
          <input type="text" className=" focus:outline-none w-full" />
        </div>
        <div>
          <img
            className="px-4 cursor-pointer"
            src="\icons\sendArrow.svg"
            alt=""
          />
        </div>
      </div>
      <div>
        <span className="text-[10px] font-medium text-[#969696] underline">
          Si vous constatez des limites à l’intelligence artificielle, vos
          feedbacks nous aideront à l’améliorer. N’hésitez pas à nous contacter.
        </span>
      </div>
    </div>
  );
}
