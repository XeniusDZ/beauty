import Photo from "../images/ENTY.png"
import Cart from "../images/cart.svg"
import Menu from "../images/menu.svg"
import Search from "../images/search.svg"
import React, { useState } from 'react';


export default function Nav(){
    const isLoggedIn = false;
    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
      setShowDiv(!showDiv);
    };
    return(
        <>
        <div id="upper_bar" className="flex w-full h-20">
            
            <div className="flex justify-center items-center flex-1 border border-gray">
            {!isLoggedIn &&(
                <ul className="flex justify-center font-semibold max-lg:hidden">
                    <li className="flex justify-center w-32">
                        <a href="/Signin">Login/Register</a>
                    </li>
                </ul>
            )}
            </div>
            
            <div className="flex w-96 justify-center items-center border border-gray">
                <div className="w-32">
                    <img src={Photo}></img>
                </div>
            </div>
            <div className="flex justify-center items-center flex-1 border border-gray">
                <div className="w-1/3">
                    <div className="flex flex-nowrap">
                        <div className="border border-gray max-lg:hidden">
                            <a href="#" className="">
                                <img src={Search} className="h-6 w-6 m-2" alt="" />
                            </a>

                        </div>
                        <div className="relative border border-gray max-sm:border-0">
                            <a onClick={toggleDiv}>
                                <img src={Cart} className="h-6 w-6 m-2" alt="" />
                            </a>
                            {showDiv && (
                                <div className="mt-4 h-64 w-64 bg-white border border-gray rounded rounded absolute top-6 lg:left-0 z-10 max-sm:right-0 max-md:right-0 max-lg:right-0"></div>)}
                        </div>
                        
                        
                    </div>

                </div>

            </div>
        </div>
        <div id="lower-bar">
            <ul className="flex justify-center gap-6 my-4 font-semibold">
                <li><a href="">Accueil</a></li>
                <li><a href="">Produits</a></li>
                <li><a href="">Contact</a></li>
            </ul>

        </div></>
        
        )

}