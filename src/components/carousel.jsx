import React from "react";
import Slider from "react-slick";
import "./carousel.css"
import { Next_Arrow, Previous_Arrow } from "./next_button";

export default function SimpleSlider() {

    let products = [
        {
          id: 1,
          name: 'Fond de Teint',
          description: 'je sais pas frère',
          price: '$19.99',
          imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
        },
        {
          id: 2,
          name: 'Fond de Teint',
          description: 'je sais pas frère',
          price: '$29.99',
          imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
        },
        {
          id: 3,
          name: 'Fond de Teint',
          description: 'je sais pas frère',
          price: '$39.99',
          imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
        },
        {
          id: 4,
          name: 'Fond de Teint',
          description: 'je sais pas frère',
          price: '$39.99',
          imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
        },
        {
          id: 5,
          name: 'Fond de Teint',
          description: 'je sais pas frère',
          price: '$39.99',
          imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
        },
        {
        id: 5,
        name: 'Fond de Teint',
        description: 'je sais pas frère',
        price: '$39.99',
        imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
      },
      {
      id: 5,
      name: 'Fond de Teint',
      description: 'je sais pas frère',
      price: '$39.99',
      imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
    },
        // Add more products as needed
      ];


function SampleNextArrow(props) {
  const { className,style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <Next_Arrow></Next_Arrow>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <Previous_Arrow></Previous_Arrow>
    </div>
  );
}
      
      


function createProductDiv(product) {
return (
  <div key={product.id} className="product relative group font-bold">
      <div className="relative flex flex-col justify-center height-1/2">
        <div className="flex justify-center">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="text-xl	group-hover:invisible">
          <h2 className="flex justify-center items-center">{product.name}</h2>
          <h2 className="flex justify-center items-center font-normal">{product.description}</h2>
          <p className="flex justify-center items-center">Price: {product.price}</p>
        </div>
      </div>
      <img className="invisible group-hover:visible absolute top-0 right-0" src={product.imageUrl}></img>
      <div className="absolute inset-x-0 bottom-0 h-3/5 hidden group-hover:block bg-white bg-opacity-70">
        <div className="flex flex-col relative h-full w-full">
          <div className="absolute inset-x-0 bottom-0">
            <div className="text-xl">
              <h2 className="flex justify-center items-center">{product.name}</h2>
              <h2 className="flex justify-center items-center font-normal">{product.description}</h2>
              <p className="flex justify-center items-center">Price: {product.price}</p>
              <div className="text-xl text-bold mt-4">
                <button className="rounded-lg w-full h-8 bg-black text-white ">Découvrir</button>
              </div>
            </div>

        </div>
        </div>
      </div>
  </div>
);
}
      

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="mx-12">
    <div>
        <h1 className="font-bold text-4xl mx-8 my-6">Nos Produits</h1>
    </div>

    <Slider {...settings}>
        {products.map((product) => createProductDiv(product))}
    </Slider>
    </div>
  );
}