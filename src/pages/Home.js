import React from "react";
import Nav from "../components/Nav";
import { useRouter } from "next/router";

function Home({ tasks }) {
  const router = useRouter();
  return (
    <>
      <Nav />
      <div className='flex gap-10 mt-20'>
        {tasks.map((items) => {
          return (
            <div className='bg-red-500'>
              <h1>{items.title}</h1>
              <p>{items.description}</p>
              <div className='flex gap-10'>
                <button
                  className='py-2 px-5 bg-green-500'
                  onClick={() => router.push(`/task/${tasks._id}`)}
                >
                  edit
                </button>
                <button className='py-2 px-5 bg-green-500'>View</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/task");
  const tasks = await response.json();

  return {
    props: {
      tasks,
    },
  };
}
