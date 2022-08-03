import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import FormValidation from "../components/FormValidation";
export default function Home() {
  return (
    <div className='flex justify-center flex-col items-center mt-24'>
      {/* <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Nav /> */}
      <FormValidation />
    </div>
  );
}
