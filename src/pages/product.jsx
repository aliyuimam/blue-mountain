import { useState } from "react";
import { Header, Footer } from "../components";

const Product = () => {
    const [addedItems, setAddedItems] = useState({
        computing: false,
        gaming: false,
        electronics: false,
        television: false,
        cosmetics: false,
        watches: false,
    });

    const handleCart = (item) => {
        setAddedItems((prevItems) => ({
            ...prevItems,
            [item]: true,
        }));
    };

    return (
        <>
            <Header />
            <div>
                <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                        <h2 className="text-5xl font-bold text-blue-600">Shop with us today</h2>
                        <p className="dark:text-gray-600">and get exciting offers</p>
                    </div>
                    <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">


                        <div className="transition duration-500 hover:scale-105 max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://cdn.vectorstock.com/i/1000v/28/63/laptop-tablet-desktop-mobile-vector-1642863.avif" alt="laptop" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl text-center font-semibold tracking-wide">Computing</h2>
                                    <p className="dark:text-gray-800 text-center">Laptops and Desktops.</p>
                                </div>
                                <button 
                                    type="button" 
                                    className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                        addedItems.computing ? 'bg-green-500' : 'dark:bg-blue-600'
                                    } text-white`}
                                    onClick={() => handleCart('computing')}
                                >
                                    {addedItems.computing ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>


                        <div className="transition duration-500 hover:scale-105 max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://cdn.vectorstock.com/i/1000v/46/11/console-game-element-play-ps-5-playstation-next-vector-37874611.avif" alt="gaming" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl text-center font-semibold tracking-wide">Gaming</h2>
                                    <p className="dark:text-gray-800 text-center">Play Stations and Xbox</p>
                                </div>
                                <button 
                                    type="button" 
                                    className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                        addedItems.gaming ? 'bg-green-500' : 'dark:bg-blue-600'
                                    } text-white`}
                                    onClick={() => handleCart('gaming')}
                                >
                                    {addedItems.gaming ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>


                        <div className="transition duration-500 hover:scale-105 max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://cdn.vectorstock.com/i/1000v/30/50/power-outlet-light-switch-and-electrical-plug-set-vector-1153050.avif" alt="electronics" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl text-center font-semibold tracking-wide">Electronics</h2>
                                    <p className="dark:text-gray-800 text-center">Switch, socket, Wires.</p>
                                </div>
                                <button 
                                    type="button" 
                                    className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                        addedItems.electronics ? 'bg-green-500' : 'dark:bg-blue-600'
                                    } text-white`}
                                    onClick={() => handleCart('electronics')}
                                >
                                    {addedItems.electronics ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>


                        <div className="transition duration-500 hover:scale-105 max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://cdn.vectorstock.com/i/1000v/44/60/big-tv-on-two-holders-vector-21254460.avif" alt="television" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl text-center font-semibold tracking-wide">Televisions</h2>
                                    <p className="dark:text-gray-800 text-center">High-quality viewing experience.</p>
                                </div>
                                <button 
                                    type="button" 
                                    className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                        addedItems.television ? 'bg-green-500' : 'dark:bg-blue-600'
                                    } text-white`}
                                    onClick={() => handleCart('television')}
                                >
                                    {addedItems.television ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>


                        <div className="transition duration-500 hover:scale-105 max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://cdn.vectorstock.com/i/1000v/06/62/decorative-cosmetics-and-makeup-products-mock-up-vector-28960662.avif" alt="cosmetics" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl text-center font-semibold tracking-wide">Cosmetics</h2>
                                    <p className="dark:text-gray-800 text-center">Powders, Brushes and Eyelashes.</p>
                                </div>
                                <button 
                                    type="button" 
                                    className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                        addedItems.cosmetics ? 'bg-green-500' : 'dark:bg-blue-600'
                                    } text-white`}
                                    onClick={() => handleCart('cosmetics')}
                                >
                                    {addedItems.cosmetics ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>
                        
                        
                        <div className="transition duration-500 hover:scale-105 max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://cdn.vectorstock.com/i/1000x1000/44/70/men-wrist-watches-with-metal-bracelet-clockface-vector-20174470.webp" alt="watches" className="object-cover object-center w-full rounded-t-md h-64 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl text-center font-semibold tracking-wide">Watches</h2>
                                    <p className="dark:text-gray-800 text-center">Rolex, Omega and Casio.</p>
                                </div>
                                <button 
                                    type="button" 
                                    className={`flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md ${
                                        addedItems.watches ? 'bg-green-500' : 'dark:bg-blue-600'
                                    } text-white`}
                                    onClick={() => handleCart('watches')}
                                >
                                    {addedItems.watches ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>

                    </div>
                    <br />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Product;