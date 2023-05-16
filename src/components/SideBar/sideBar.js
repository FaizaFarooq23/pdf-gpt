import React from "react";

export default function SideBar() {
  return (
    <div className=" bg-[#0393D6] flex flex-col justify-between  w-[20%] h-screen">
      <div className="pt-4 h-2/3">
        <div className="bg-white flex items-center justify-start mx-4 pl-6 py-4 border-[#FFFDFD] rounded-[10px]">
          <img className="inline-block pr-4" src="\icons\plus.svg" alt="" />
          <span className="font-medium pt-0.5 leading-5">Nouvelle demande</span>
        </div>
      </div>

      <div className=" pb-12  h-1/3 flex flex-col justify-between">
        <div className="flex items-center justify-center">
          <div className="border-t border-white w-full mx-4" />
        </div>
        <div className="ml-10">
          <div className="flex justify-start items-center ">
            <img className=" inline-block" src="\icons\star.svg" alt="" />
            <span className="text-white leading-5  font-medium px-3">
              Vos avis
            </span>
          </div>
          <div className="flex justify-start items-center mt-7 ">
            <img className=" inline-block" src="\icons\circle.svg" alt="" />
            <span className="text-white leading-5  font-medium px-3">
              Roadmap
            </span>
          </div>
          <div className="flex justify-start items-center mt-7 ">
            <img className=" inline-block" src="\icons\link.svg" alt="" />
            <span className="text-white leading-5  font-medium px-3">
              Se connecter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
