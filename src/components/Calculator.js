import React, { useEffect } from "react";
import { useState } from "react";
export default function Calculator() {
  const [firstnumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();

  const multiplayNumber = () => {
    var mN = firstnumber * secondNumber;
    setResult(mN);
  };

  const divideNumber = () => {
    var dN = Math.ceil(firstnumber / secondNumber);
    setResult(dN);
  };

  const addNumber = () => {
    var aN = +firstnumber + +secondNumber;
    setResult(aN);
  };
  const subNumber = () => {
    var sN = firstnumber - secondNumber;
    setResult(sN);
  };

  useEffect(() => {
    setFirstNumber();
    setSecondNumber();
    setResult;
  }, []);

  return (
    <>
      <div className=' bg-white p-5 w-[500px]  my-[200px] text-black container shadow-md shadow-white rounded '>
        <h1 className='text-xl  font-bold mb-4'>Calculator</h1>
        <div className='flex gap-9 w-full'>
          <div>
            <div className='mb-2'>
              <label htmlFor='firstNumber' className='pb-2'>
                First Number
              </label>
              <br />
              <input
                type='number'
                className=' border mt-2 focus:none'
                onChange={(e) => setFirstNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='firstNumber'>Second Number</label>
              <br />
              <input
                type='number'
                className=' border mt-2 '
                onChange={(e) => setSecondNumber(e.target.value)}
              />
            </div>
          </div>

          <div className='mt-8 flex flex-col  gap-3'>
            <button
              className='bg-red-500 py-2 px-5 rounded-md text-white '
              onClick={addNumber}
            >
              Addition
            </button>

            <button
              className='bg-red-500 py-2 px-5 rounded-md text-white '
              onClick={subNumber}
            >
              Subtract
            </button>
          </div>

          <div className='mt-8  flex flex-col gap-3'>
            <button
              className='bg-red-500 py-2 px-5 rounded-md text-white '
              onClick={multiplayNumber}
            >
              Multiply
            </button>
            <button
              className='bg-red-500 py-2 px-5 rounded-md text-white '
              onClick={divideNumber}
            >
              Dividsion
            </button>
          </div>
        </div>

        <div className='mt-4'>
          <h2>Result is </h2>
          {result}
        </div>
      </div>
    </>
  );
}
