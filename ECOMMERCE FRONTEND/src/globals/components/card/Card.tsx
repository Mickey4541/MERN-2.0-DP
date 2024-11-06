    const Card = () => {
        return (
        <>
            <section className="container mx-auto px-5 md:py-8 flex flex-wrap justify-center">

            <div className="bg-purple-50 text-center p-6 transition-transform duration-500 hover:-translate-y-2 cursor-pointer w-full sm:w-1/2 lg:w-1/4 border border-blue-700 rounded-xl">
                <img 
                src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" 
                alt="Soft Plushy Cushion Chair" 
                className="mx-auto" 
                />
                <div className="flex justify-center mt-4 space-x-1 text-orange-600">
                {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                    </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                </svg>
                </div>
                <h1 className="text-2xl my-4 text-black">Soft Plushy Cushion Chair</h1>
                <p className="mb-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2 className="text-xl font-semibold mb-4 text-black">$29.99</h2>
                <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
            </div>


            <div className="bg-purple-50 text-center p-6 transition-transform duration-500 hover:-translate-y-2 cursor-pointer w-full sm:w-1/2 lg:w-1/4 border border-blue-700 rounded-xl">
                <img 
                src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" 
                alt="Soft Plushy Cushion Chair" 
                className="mx-auto" 
                />
                <div className="flex justify-center mt-4 space-x-1 ">
                {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                    </svg>
                ))}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                </svg>
                </div>
                <h1 className="text-2xl my-4 text-black">Soft Plushy Cushion Chair</h1>
                <p className="mb-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2 className="text-xl font-semibold mb-4 text-black">$29.99</h2>
                <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
            </div>


            <div className="bg-purple-50 text-center p-6 transition-transform duration-500 hover:-translate-y-2 cursor-pointer w-full sm:w-1/2 lg:w-1/4 border border-blue-700 rounded-xl">
                <img 
                src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" 
                alt="Soft Plushy Cushion Chair" 
                className="mx-auto" 
                />
                <div className="flex justify-center mt-4 space-x-1 text-orange-600">
                {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                    </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                </svg>
                </div>
                <h1 className="text-2xl my-4 text-black">Soft Plushy Cushion Chair</h1>
                <p className="mb-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2 className="text-xl font-semibold mb-4 text-black">$29.99</h2>
                <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
            </div>


            <div className="bg-purple-50 text-center p-6 transition-transform duration-500 hover:-translate-y-2 cursor-pointer w-full sm:w-1/2 lg:w-1/4 border border-blue-700 rounded-xl">
                <img 
                src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" 
                alt="Soft Plushy Cushion Chair" 
                className="mx-auto" 
                />
                <div className="flex justify-center mt-4 space-x-1 text-orange-600">
                {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                    </svg>
                ))}
                <svg className="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"/>
                </svg>
                </div>
                <h1 className="text-2xl my-4 text-black">Soft Plushy Cushion Chair</h1>
                <p className="mb-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2 className="text-xl font-semibold mb-4 text-black">$29.99</h2>
                <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
            </div>

            </section>
        </>
        );
    };
    
    export default Card;
    