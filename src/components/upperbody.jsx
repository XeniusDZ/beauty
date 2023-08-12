import banner from "../images/banner1.jpg"
import Upper_image from "./upperimage"
import image from "../images/spa.avif"

export default function Body(){
    return(
        <><div className="flex w-full relative">
            <img className="w-auto object-cover" src={banner}></img>
            <div className="flex flex-col absolute inset-y-0 right-0 justify-center items-center text-black items w-1/2 h-full">
                <div className="">
                    <h1 className="font-semibold text-4xl">Reduction Jusqu'à 50%</h1>
                    <div className="div my-4">
                        <p className="font-bold text-5xl">
                            Produits De Beauté
                        </p>
                        <p className="font-bold text-5xl">Cosmétique</p>
                    </div>
                    <button className="border-2 border-black w-40 h-14 font-semibold">Nos Produits</button>
                </div>
            </div>

        </div>
        <div className="flex mx-16 justify-center gap-16 my-8">
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","Lmaoo toi même tu sais"]}/>
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
            <Upper_image image={image} text={"Random lol"} paragraph={["salam lol","lmao"]}/>
        </div></>
    )
}