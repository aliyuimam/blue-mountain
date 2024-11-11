import  { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        const typed = new Typed('.typing', {
            strings: ['','Computers', 'Cosmetics,', 'Beverages,', 'Designers,', 'Phones and lots more!'],
            typeSpeed: 200,
            backSpeed: 60,
            loop: true,
        });


        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section className="relative text-center bg-[url('https://t3.ftcdn.net/jpg/08/07/20/72/240_F_807207204_jMBoFBcjTtLUrwT6jFZHANJccE3nt8IK.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="bg-gray-900 bg-opacity-80 relative mx-auto max-w-screen-xl pt-8 px-9 py-32 flex flex-col items-center">
                    <div className="max-w-xl text-center">
                        <strong
                            className="font-extrabold text-blue-800 text-7xl"
                            style={{
                                textShadow: '5px 2px 8px rgba(0, 0, 0, 0.5)',
                                display: 'inline-block',
                            }}
                        >
                            Blue Mountain Stores
                        </strong>

                        <h1 className="text-white font-extrabold sm:text-5xl mt-4">
                            {/*Discover Everything You Need, <br /> All in One Place <br/>*/}
                            We Sell <span className="typing text-green-500 dark:text-green-700">  </span>
                        </h1>
                        <h3 className="capitalize text-rose-400 mt-2">

                        </h3>
                        <p className="mt-4 max-w-lg text-blue-600 font-bold">
                            Shop our extensive collection across categories, from essentials to unique finds, tailored just for you.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Shop Our Bestsellers
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:bg-black hover:text-white focus:outline-none focus:ring sm:w-auto"
                            >
                                Discover All Categories
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
