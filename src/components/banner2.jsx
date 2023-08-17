import banner from "../images/banner2.jpg"

export default function Banner2(){
    return(
        <div className="flex w-full relative mt-8">
            <img className="w-auto object-cover h-full" src={banner}></img>
            <div className="flex flex-col absolute inset-y-0 right-0 justify-center items-center text-black items w-1/2">
                <div className="">
                    <h1 className="font-bold lg:text-4xl md:text-3xl sm:text-2xl">Des produits de beauté de qualité</h1>
                    <div className="div my-4">
                        <p className="font-semibold lg:text-2xl md:text-xl sm:text-md">
                            Découvrez notre gamme de crèmes et de parfums à prix compétitifs
                        </p>
                        <p className="font-semibold lg:text-2xl md:text-xl sm:text-md">A partir de 2500DA</p>
                    </div>
                    <button className="border-2 border-black w-40 h-14 font-semibold hover:transition hover:duration-150 hover:border-white hover:text-white">Nos Produits</button>
                </div>
            </div>

        </div>
    )
}