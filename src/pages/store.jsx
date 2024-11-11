import { useState } from 'react';
import Header from '../components/header';

const Store = () => {
    const [addedItems, setAddedItems] = useState({
        samsung: false,
    });

    const handleCart = (item) => {
        setAddedItems((prevItems) => ({
            ...prevItems,
            [item]: true,
        }));
    };

     const [count, setCount] = useState(0);

    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function del() {
        setCount(prevCount => prevCount - 1);
    }
    return (
        <>
            <Header />
            <div className="flex-no-wrap relative flex">
                <section
                    id="Projects"
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                >
                    <div className="w-80 bg-white rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
                        <div
                            className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                            }}
                        >
                            <div>
                                <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                                    available
                                </span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <p className="text-gray-400 font-light text-xs text-center">Smartphone</p>
                            <h1 className="text-gray-800 text-center mt-1">Samsung S7 Edge</h1>
                            <p className="text-center text-gray-800 mt-1">$1299</p>
                            <div className="inline-flex items-center mt-2">
                                <button onClick={del} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                    -
                                </button>
                                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                                   {count}
                                </div>
                                <button onClick={add} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                    +
                                </button>
                            </div><br/>
                            <button
                                type="button"
                                className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                    addedItems.samsung ? 'bg-green-500' : 'dark:bg-blue-600'
                                } text-white`}
                                onClick={() => handleCart('samsung')}
                            >
                               {addedItems.samsung ? 'Added' : 'Add to Cart'}
                              
    {addedItems.samsung ? (
        <img src="./success.svg" style={{ width: '30px' }} alt="Success Icon" />
    ) : (
        <img src="./cart.svg" className='p-25' style={{ width: '30px' }} alt="Cart Icon" />
    )}

                            </button>
                        </div>
                    </div>
                    <div className="w-80 bg-white rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
                        <div
                            className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600')",
                            }}
                        >
                            <div>
                                <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                                    available
                                </span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <p className="text-gray-400 font-light text-xs text-center">Laptop</p>
                            <h1 className="text-gray-800 text-center mt-1">MAC Book Pro</h1>
                            <p className="text-center text-gray-800 mt-1">$1234</p>
                            <div className="inline-flex items-center mt-2">
                                <button onClick={del} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                    -
                                </button>
                                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                                   {count}
                                </div>
                               
                                <button onClick={add} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                    +
                                </button>
                            </div><br/>
                            <button
                                type="button"
                                className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                    addedItems.samsung ? 'bg-green-500' : 'dark:bg-blue-600'
                                } text-white`}
                                onClick={() => handleCart('samsung')}
                            >
                               {addedItems.samsung ? 'Added' : 'Add to Cart'}
                              
    {addedItems.samsung ? (
        <img src="./success.svg" style={{ width: '30px' }} alt="Success Icon" />
    ) : (
        <img src="./cart.svg" className='p-25' style={{ width: '30px' }} alt="Cart Icon" />
    )}

                            </button>
                        </div>
                    </div>
                    <div className="w-80 bg-white rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
                        <div
                            className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600')",
                            }}
                        >
                            <div>
                                <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                                    available
                                </span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col items-center">
                            <p className="text-gray-400 font-light text-xs text-center">Camera</p>
                            <h1 className="text-gray-800 text-center mt-1">Canon Camera</h1>
                            <p className="text-center text-gray-800 mt-1">$2299</p>
                            <div className="inline-flex items-center mt-2">
                               <button onClick={del} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                    -
                                </button>
                                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                                   {count}
                                </div>
                                
                                 <button onClick={add} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                    +
                                </button>
                            </div><br/>
                            <button
                                type="button"
                                className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                    addedItems.samsung ? 'bg-green-500' : 'dark:bg-blue-600'
                                } text-white`}
                                onClick={() => handleCart('samsung')}
                            >
                               {addedItems.samsung ? 'Added' : 'Add to Cart'}
                              
    {addedItems.samsung ? (
        <img src="./success.svg" style={{ width: '30px' }} alt="Success Icon" />
    ) : (
        <img src="./cart.svg" className='p-25' style={{ width: '30px' }} alt="Cart Icon" />
    )}

                            </button>
                        </div>
                    </div>
                </section>
            </div>
            
        </>
    );
};

export default Store;
