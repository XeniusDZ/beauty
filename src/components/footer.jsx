

export default function Footer(){
    return(
    <div className="flex flex-col items-center mt-8 border border-gray mt-64">
    <div className="grid grid-cols-4 w-2/3 justify-center border-x border-gray h-72">
        <div className="flex flex-col ml-2 border-r border-gray">
            <div className="flex flex-col mt-4">
            <h1 className="text-3xl font-bold">Enty.</h1>
            <p className="text-sm font-medium text-gray-600 mt-2">Enty, pour elle et pour lui.</p>
            </div>
        </div>
        <div className="flex flex-col ml-2 gap-1 border-r border-gray">
            <div className="flex flex-col mt-4">
            <h1 className="text-2xl font-semibold">Categroies</h1>
            <div className="flex flex-col text-sm font-medium text-gray-600 gap-1 mt-2">
            <a href="" className="">Nouveautés</a><a href="">Parfum</a><a href="">Hommes</a><a href="">Femmes</a>
            </div>
            </div>
            
        </div>
        <div className="flex flex-col ml-2 border-r border-gray">
            <div className="flex flex-col mt-4">

            <h1 className="text-xl font-semibold">Contact</h1>
            <div className="div flex flex-col mt-2 gap-2">

                <div className="flex flex-col">
                    <p className="text-sm font-semibold">Téléphone</p>
                    <p className="text-sm font-medium text-gray-600">+213550505012</p>
                </div>
            
                <div className="flex flex-col">
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm font-medium text-gray-600">ilyes106@gmail.com</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-sm font-semibold">Location</p>
                    <p className="text-sm font-medium text-gray-600">9ahwat ri7</p>
                </div>

            </div>
            </div>

        </div>
        <div className="flex flex-col ml-2">
            <div className="flex flex-col mt-4">

            <h1 className="text-xl font-semibold">Liens Utiles</h1>
            <div className="flex flex-col text-sm font-medium text-gray-600 gap-1 mt-2">
            <a href="" className="">Info Sur La Companie</a><a href="">Rendez-vous</a><a href="">Contact</a>
            </div>
            </div>



        </div>
    </div>
    <div className="grid grid-cols-4 w-2/3 justify-center border-x border-gray">
        <div className="flex justify-center items-center border-t border-gray mt-1">
            <h1 className="font-semibold text-xs">Copyright 2023 Enty. All Rights Reserved</h1>
        </div>
        <div className="flex col-span-2 justify-center items-center border border-gray mt-1">
        <div className="flex justify-center items-center w-2/3 mt-2">
      <input
        type="text"
        className="py-1 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
        placeholder="Email"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-1 px-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Entrer
      </button>
    </div>
        </div>
        <div className=" border-t border-gray mt-1"></div>
    </div>
    </div>
    )
}