import React from "react";

export default function Januarybeingsunday() {
  //   useEffect(() => {
  //     Sunday(2014, 2050);
  //   }, [arry2]);
  var arry2 = [];
  const Sunday = (year1, year2) => {
    for (var y = year1; y < year2; y++) {
      let d = new Date(y, 0, 1);

      if (d.getDay() === 0) {
        arry2.push(y);
      }
    }
  };
  Sunday(2014, 2050);

  return (
    <>
      <h2>
        A Program to find 1st January is being a Sunday between 2014 and 2050
        {arry2.map((years, i) => {
          return (
            <div key={i}>
              <p>1st January is being a Sunday {years}</p>
            </div>
          );
        })}
      </h2>
    </>
  );
}
