import React from "react";
export default function Home({ tasks = [] }) {
  return (
    <>
      <div className='bg-red-500'>
        {tasks.map((items) => {
          return (
            <>
              <h1>{items.title}</h1>
              <p>{items.description}</p>
              <div className='flex gap-10'>
                <button className='py-2 px-5 bg-green-500'>View</button>
                <button className='py-2 px-5 bg-green-500'>View</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
