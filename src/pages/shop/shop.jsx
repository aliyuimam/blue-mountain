const Shop = () => {
  const items = [
    {
      img: "https://media.istockphoto.com/id/173908991/photo/new-on-old.jpg?s=1024x1024&w=is&k=20&c=u6DdlgzQY4Mk8iE9uVerMJjXooSykEUziXBqLHegUtE=",
      name: "Converse",
      description: "High-quality canvas shoes",
      review: "120 reviews",
      price: 18.20,
    },
    {
      img: "https://media.istockphoto.com/id/1440041986/photo/black-pants-isolated-in-white-background-invisible-mannequin.jpg?s=2048x2048&w=is&k=20&c=t7-edHF6iMpfrrNwShA2qJBZKYbYLhSKMuuMLpp8r7U=",
      name: "Pants",
      description: "Black Pants",
      review: "20 reviews",
      price: 12.99,
    },
    {
      img: "https://media.istockphoto.com/id/458727719/photo/rolex-deepsea-wristwatch.jpg?s=1024x1024&w=is&k=20&c=V03M_EUNKsPgAfTJJ6x3dvefngN_1IQXb1-7hFg9YhQ=",
      name: "Watch",
      description: "Rolex Deep Sea wristwatch",
      review: "20 reviews",
      price: 5.99,
    },
    {
      img: "https://media.istockphoto.com/id/1699697933/photo/strapped-neckties-in-different-on-white-background-top-view-of-striped-tie-on-white.jpg?s=612x612&w=0&k=20&c=fxjVZhX931ukPgG6o3TZkHRqhTtTSQa6-zSpRZhiUFs=",
      name: "Neck Tie",
      description: "Tie for Suits",
      review: "10 reviews",
      price: 2.99,
    },
    {
      img: "" + "https://plus.unsplash.com/premium_photo-1672829371769-bcff266023a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWduZXIlMjBiYWd8ZW58MHx8MHx8fDA%3D",
      name: "Bag",
      description: "Designer Versace Bag",
      review: "10 reviews",
      price: 22.99,
    },
    {
      img: "" + "https://media.istockphoto.com/id/172425631/photo/long-sleeve-blank-black-tee-shirt-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=rnh3PIrZQ1UOQIH3J9f0iMV061rLi9nouV1VYsXQ5vc=",
      name: "Shirt",
      description: "Long Sleeve Black Shirt",
      review: "10 reviews",
      price: 22.99,
    }
  ];

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {items.map((item, index) => (
            <div key={index} className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden dark:bg-blue-800 transition transform hover:scale-105">
              <img
                  className="object-cover h-56 w-full"
                  src={item.img}
                  alt={item.name}
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-white text-white">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>

                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">({item.review})</span>
                </div>

                <p className="mt-2 text-lg font-bold text-gray-900 text-white">${item.price.toFixed(2)}</p>

                <div className="mt-4 flex justify-between items-center">
                  <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Add to Cart
                  </button>
                  <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
              </div>
            </div>
        ))}
      </div>
  );
};

export default Shop;
