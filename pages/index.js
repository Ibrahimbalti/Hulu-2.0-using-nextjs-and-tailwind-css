import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import FormValidation from "../components/FormValidation";
import RotatingString from "../components/RotatingString";
import GuessNumber from "../components/GuessNumber";
import Januarybeingsunday from "../components/Januarybeingsunday";
import Calculator from "../components/Calculator";
import { array } from "yup";
import CustomRadioInput from "../components/CustomRadioInput";
import designTest from "../components/designTest";
import Formikform from "../components/formikform";
const DesignTests = () => {
  return (
    <div>
      {/* ......................header.................. */}
      <div className='bg-red-500 w-full h-[50px] text-center sticky top-0 z-30 '>
        Header
      </div>
      <div className='flex flex-col items-center'>
        <div className='container bg-gray-500 h-full w-full'>
          {/* ..........................Main div for filter and container................. */}
          <div className='flex gap-5 '>
            {/* ....................filter..................... */}
            <div className='h-[500px] w-[400px] bg-blue-600 mt-10 sticky top-0'></div>

            {/* ....................Main..................... */}
            <div className='w-full h-full flex flex-col gap-3'>
              <div className='h-[300px] w-full bg-green-600'></div>
              <div className='h-[300px] w-full bg-red-600'></div>
              <div className='h-[300px] w-full bg-yellow-600'></div>
              <div className='h-[300px] w-full bg-green-600'></div>
              <div className='h-[300px] w-full bg-red-600'></div>
              <div className='h-[300px] w-full bg-yellow-600'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-red-500 w-full h-[50px] text-center sticky bottom-0 z-30 '>
        Footer
      </div>
    </div>
  );
};
export default function Home() {
  function sortFun(arry) {
    const Sort = (x, y) => x.b - y.b;
    return arry.sort();
  }

  const newSortArray = sortFun([
    // { a: 3, b: 5 },
    // { a: 2, b: 1 },
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ]);
  console.log("Hello new Sort Array", newSortArray);

  /// Return last N element
  const lastFun = (a, n) => {
    console.log("value of a is", a);
    console.log("value of n is ", -n);
    console.log(a.slice(-n));
  };

  lastFun([1, 2, 3, 4, 5], 3);
  // Flate to return the new array and concatinate all sub-array
  const flateFun = (...arry) => {
    return arry.flat();
  };
  const newArry = flateFun([1, 2, 3], [4, 5, 6]);
  console.log("New Arrays is ", newArry);
  // sum up all arrays
  const sumArray = (a, b) => {
    return a.reduce((sum, cur) => {
      console.log("Sum is", sum);
      console.log("Cur is", cur);
      if (cur > b) {
        return sum + cur;
      }
      return sum;
    });
  };

  const sumofArray = sumArray([1, 2, 3, 4, 5], 2);
  console.log("Sum of Array is", sumofArray);

  /// Swap two variable
  let rollNo = 32;
  let seatNo = 3;
  const [rollNos, seatNos] = [seatNo, rollNo];
  console.log("Roll no is", rollNos);
  console.log("saeat no is", seatNos);

  return (
    <div className=''>
      {/* <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav /> */}
      {/* <RotatingString />
      <Januarybeingsunday /> */}
      {/* <GuessNumber /> */}
      {/* <Calculator /> */}

      {/* <h1>Sort Array is</h1>
      {newSortArray.map((item) => {
        return (
          <>
            <h2>Sorted List is : {item}</h2>
            <h2>Sorted Value of b : {item.b}</h2>
          </>
        );

      })} */}

      {/* <h1>Custom Radio Input</h1>
      <label>GEnder </label>
      <div>
        <input type='radio' value='Male' name='gender' /> Male
        <input type='radio' value='Female' name='gender' /> Female
        <input type='radio' value='Other' name='gender' /> Other
      </div> */}

      {/* <span>
          {" "}
          <label>Gender</label>
        </span>
        <span>
          {" "}
          <CustomRadioInput name='Gender' value='Male' />
        </span>
        <span>
          {" "}
          <CustomRadioInput name='Gender' value='Female' />
        </span> */}
      {/* <DesignTests /> */}
      <Formikform />
    </div>
  );
}
