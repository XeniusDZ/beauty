import banner from "../images/banner1.jpg"
import Upper_image from "./upperimage"
import image from "../images/spa.avif"

export default function Body(){
    return(
        <><div className="flex w-full relative">
            <img className="w-auto object-cover h-full" src={banner}></img>
            <div className="flex flex-col absolute inset-y-0 right-0 justify-center items-center text-black items w-1/2">
                <div className="">
                    <h1 className="font-semibold lg:text-4xl md:text-3xl sm:text-2xl">Reduction Jusqu'à 50%</h1>
                    <div className="div my-4">
                        <p className="font-bold lg:text-5xl md:text-4xl sm:text-3xl">
                            Produits De Beauté
                        </p>
                        <p className="font-bold lg:text-5xl md:text-4xl sm:text-3xl">Cosmétique</p>
                    </div>
                    <button className="border-2 border-black w-40 h-14 font-semibold hover:transition hover:duration-150 hover:border-white hover:text-white">Nos Produits</button>
                </div>
            </div>

        </div>
        <div className="flex mx-16 justify-center gap-16 my-8">
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
        </div></>
    )
}