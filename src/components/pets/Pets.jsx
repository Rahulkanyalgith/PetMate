import React from 'react'


function Pets() {
  
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" >Our Latest Collection</h1>
                <div class="h-1 w-20 bg-green-600 rounded"></div>
            </div>

            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/4  drop-shadow-lg " >
                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"  >
                        <div className="flex justify-center cursor-pointer" >
                            <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://i.pinimg.com/originals/1b/3c/14/1b3c14fc139ba79f6dfa28eb188c30af.png" alt="blog" />
                        </div>
                        <div className="p-5 border-t-2">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Petmate</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" >Dogs</h1>
                            {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                            <p className="leading-relaxed mb-3" >Best Dogs</p>
                            <div className=" flex justify-center">
                                <button type="button" className="focus:outline-none text-white bg-brown-600 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="p-4 md:w-1/4  drop-shadow-lg " >
                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" >
                        <div className="flex justify-center cursor-pointer" >
                            <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://i.pinimg.com/originals/cc/c3/e8/ccc3e8399a147a8507d3025f529bd66b.png" alt="blog" />
                        </div>
                        <div className="p-5 border-t-2">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Petmate</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" s>Cats</h1>
                            {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                            <p className="leading-relaxed mb-3" >Best cats</p>
                            <div className=" flex justify-center">
                                <button type="button" className="focus:outline-none text-white bg-brown-600 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="p-4 md:w-1/4  drop-shadow-lg " >
                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"  >
                        <div className="flex justify-center cursor-pointer" >
                            <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://i.pinimg.com/originals/54/13/7b/54137b78576438d20d58cdc50954b718.png" alt="blog" />
                        </div>
                        <div className="p-5 border-t-2">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Petmate</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" >Birds</h1>
                            {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                            <p className="leading-relaxed mb-3" >This is the best you got</p>
                            <div className=" flex justify-center">
                                <button type="button" className="focus:outline-none text-white bg-brown-600 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="p-4 md:w-1/4  drop-shadow-lg " >
                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"  >
                        <div className="flex justify-center cursor-pointer" >
                            <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://i.pinimg.com/originals/21/e7/3e/21e73eb25c4fbe2e532cae23a9fa9c94.png" alt="blog" />
                        </div>
                        <div className="p-5 border-t-2">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >Petmate</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Fishes</h1>
                            {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                            <p className="leading-relaxed mb-3" >this is the best</p>
                            <div className=" flex justify-center">
                                <button type="button" className="focus:outline-none text-white bg-brown-600 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                            </div>
                        </div>

                    </div>
                </div>

                

            </div>

        </div>
    </section >

    )
}

export default Pets