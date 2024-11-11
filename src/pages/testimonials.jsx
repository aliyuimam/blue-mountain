const testimonials = () => {
  return (
    <>
   <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-white ">customers</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Hear from our customers
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-blue-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                “I am thrilled with my purchase! The product quality is outstanding, and the attention to detail is remarkable. Not only did my order arrive sooner than expected, but it was also beautifully packaged. Shopping here was a joy, and I’ve already recommended it to friends and family!”
                    </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    
                    <div className="mx-4">
                        <h1 className="font-bold text-white">A.A Imam</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">Customer</span>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-blue-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                “Every purchase here has been a fantastic experience. I appreciate that what you see on the website is exactly what you get—high-quality products with attention to detail. Plus, the team went out of their way to ensure my package was safe during transit. I am beyond satisfied!”
                   </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    
                    <div className="mx-4">
                        <h1 className="font-bold text-white">Aliyu Imam</h1>
                        <span className="text-sm text-white dark:text-white">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default testimonials;