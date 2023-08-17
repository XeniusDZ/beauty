
export default function Products(){
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
          {
            id: 5,
            name: 'Fond de Teint',
            description: 'je sais pas frère',
            price: '$39.99',
            imageUrl: 'https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1b32f881/images/hi-res/SKU/SKU_3077/585773_swatch.jpg?sw=240&sh=240&sm=fit',
          },

        // Add more products as needed
      ];
    return(

        
        <div className="flex flex-col w-full display-center items-center gap-6">
            <div className="flex flex-col gap-1 display-center items-center">
                <h3 className="text-4xl font-semibold">Produits de Enty</h3>
                <h1 className="text-gray text-xl">Découvrez la variété de nos différents produits</h1>
            </div>

            <div id="container-grid" className="w-2/3">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">            
                {products.map((product) => createProductDiv(product))}

                </div>
            </div>

            <button className="border h-12 w-48 border-black font-bold hover:bg-black hover:text-white">Voir tous les produits</button>

        </div>

    )
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
          <img className="invisible group-hover:visible absolute top-0 right-0" src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw317f79e6/images/svg-icons/add-to-wishlist.svg"></img>
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