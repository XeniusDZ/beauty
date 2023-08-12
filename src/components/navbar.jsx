import Photo from "../images/ENTY.png"
import Cart from "../images/cart.svg"
import Menu from "../images/menu.svg"
import Search from "../images/search.svg"

export default function Nav(){
    return(
        <><div id="upper_bar" className="flex w-full h-20">
            <div className="flex justify-center items-center flex-1 border border-gray">
                <ul className="flex justify-center font-semibold">
                    <li className="flex justify-center w-32 border-r pr-6">
                        <a href="">Login/Register</a>
                    </li>
                    <li className="flex justify-center w-32 border-l pr-8">
                        <a href="">English</a>
                    </li>
                </ul>

            </div>
            <div className="flex w-96 justify-center items-center border border-gray">
                <div className="w-32">
                    <img src={Photo}></img>
                </div>
            </div>
            <div className="flex justify-center items-center flex-1 border border-gray">
                <div className="w-1/3">
                    <div className="flex flex-wrap">
                        <div className="border border-gray">
                            <a href="#" className="">
                                <img src={Search} className="h-6 w-6 m-2" alt="" />
                            </a>

                        </div>
                        <div className="border border-gray">
                            <a href="">
                                <img src={Cart} className="h-6 w-6 m-2" alt="" />
                            </a>
                        </div>
                        <div className="border border-gray">
                            <a href="">
                                <img src={Menu} className="h-6 w-6 m-2" alt="" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <div id="lower-bar">
            <ul className="flex justify-center gap-6 my-4 font-semibold">
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">PAGES</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">NEWS</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>

        </div></>
        
        )

}