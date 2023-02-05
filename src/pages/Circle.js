import React from "react";

function Circle() {
  const searchInfo = [
    {
      name: "Doctor",
    },
    {
      name: "Clinic",
    },
    {
      name: "Staff",
    },
  ];
  return (
    <div className='bg-yellow-500 flex flex-col items-center justify-center gap-1 py-20'>
      <div class='relative bg-white opacity-30 box-shadow   rounded-full h-16 w-16 flex items-center justify-center '>
        <div class='opacity-100 absolute top-0 left-0 h-full w-full transform rotate-x(-45deg) rotate-y(-45deg) flex flex-col items-center justify-center'>
          <div class='bg-gradient-to-t from-[#1BAB97] opacity-100 to-[#0055A8] h-14 w-14 box-shadow2 rounded-full '></div>
        </div>
      </div>

      <div className='relative  '>
        <div class='h-0 absolute top-[3px] w-0 border-x-[12px] border-x-transparent rotate-180 border-b-[16px] border-b-black opacity-10 '></div>
        <div class='h-0 w-0 border-x-[12px] border-x-transparent rotate-180 border-b-[16px] border-b-[#0055A8] '></div>
      </div>
    </div>
  );
}

export default Circle;
