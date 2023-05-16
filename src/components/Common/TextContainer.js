import React from 'react'

export default function TextContainer({text}) {
  return (
    <>
  <div className="bg-[#F5F5F5] w-full h-[70px] px-5  flex items-center mt-6 rounded-[7px] text-center">
    <span className=" text-[#4B4B4B] text-xs">
    {text}
    </span>
  </div>
  </>
  )
}
