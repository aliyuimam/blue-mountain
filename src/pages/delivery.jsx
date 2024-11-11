import  { useState, useEffect, } from 'react';
import { Header, Footer} from '../components'

const Delivery = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(59);

    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000); 

   
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Header />
    <div style={{
  backgroundSize: "cover",
  backgroundImage: `url(https://img.freepik.com/free-photo/aerial-view-cargo-ship-with-cargo-container-sea_335224-1372.jpg)`,
  height: "100vh",
}} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-5 text-2xl font-bold text-blue-800">
        TIME BEFORE NEXT DELIVERY TO NIGERIA
      </h1>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg text-white">
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          <span className="text-lg font-semibold">days</span>
        </div>
        <div className="flex flex-col p-5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg text-white">
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          <span className="text-lg font-semibold">hours</span>
        </div>
        <div className="flex flex-col p-5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg text-white">
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          <span className="text-lg font-semibold">min</span>
        </div>
        <div className="flex flex-col p-5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg text-white">
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": counter }}></span>
          </span>
          <span className="text-lg font-semibold">sec</span>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default Delivery;
