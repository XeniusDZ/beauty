export default function Upper_image(props){
    return(
        <div className="flex relative w-96 object-cover max-lg:hidden">
            <img src={props.image} alt="" />
            <div className="flex absolute flex-col h-full justify-center ml-2">
                <h1 className="font-medium max-md:text-sm">{props.text}</h1>
                <div className="my-2">
                <p className="font-semibold xl:text-2xl md:text-xl sm:text-xs">{props.paragraph[0]}</p>
                <p className="font-semibold xl:text-2xl md:text-xl sm:text-xs">{props.paragraph[1]}</p>
                </div>
                <button className="border-2 border-black w-24 h-8 font-semibold text-sm hover:transition hover:duration-150 hover:border-white hover:text-white">Nos Produits</button>
            </div>


        </div>
    )
}