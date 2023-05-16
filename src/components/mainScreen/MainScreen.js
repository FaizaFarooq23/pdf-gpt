import React, { useState } from "react";
import InputField from "../inputField/InputField";
import TextContainer from "../Common/TextContainer";
import { avertissementsBeta, examples, functionalities } from "../../data/textContainerData";
export default function mainScreen({text}) {

  return (
    <div className="w-[80%] flex justify-center ">
    <div className=" w-[80%] flex flex-col py-2 justify-between items-center h-screen">
     
      <div className="flex flex-col justify-center items-center">
      <div>
        <img
          className="mt-4"
          src="/icons\missionMaster.svg"
          alt="Mission Master icon"
        />
      </div>
      <div className=" ">
        <span className="text-[32px] font-bold leading-10 text-[#4B4B4B]">
          Better call Mike
        </span>
        {/* <img className="inline-block" src="\icons\beta.svg" alt="beta Icon" /> */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className=" text-sm font-semibold text-center mt-4 leading-[18px] text-[#4B4B4B]">
          Le 1er assistant IA dédié aux études de droit.
        </span>
        <span className=" text-sm font-semibold leading-[18px] mt-5 text-center text-[#4B4B4B]">
          Réexplique les notions de droit, fiche vos cours, répond à <br /> vos
          questions sur les différents métiers du droit.
        </span>
      </div>
      </div>
      <div className="flex items-center  w-full justify-evenly">
        <div className="flex flex-col items-center w-[30%] ">
          <img src="\icons\example.svg" alt="" />
          <span className=" font-semibold leading-[18px] mt-4 text-center text-[#4B4B4B]">
            Exemples
          </span>
          { examples.map((item) => (
          <TextContainer key={item.id} text={item.text}/>
          ))}
          
          
        </div>
        <div className=" flex flex-col items-center w-[30%]  ">
          <img src="\icons\functionalities.svg" alt="" />
          <span className=" font-semibold leading-[18px] mt-4 text-center text-[#4B4B4B]">
            Fonctionnalités
          </span>
          { functionalities.map((item) => (
          <TextContainer key={item.id} text={item.text}/>
          ))}
        </div>
        <div className="flex flex-col items-center w-[30%] ">
          <img src="\icons\avertissement.svg" alt="" />
          <span className=" font-semibold leading-[18px] mt-4 text-center text-[#4B4B4B]">
            Avertissements - bêta
          </span>
          { avertissementsBeta.map((item) => (
          <TextContainer key={item.id} text={item.text}/>
          ))}
        </div>
      </div>
      <InputField/>
      
    </div>
    </div>
  );
}
