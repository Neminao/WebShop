import React from 'react';
import ProductsItem from './ProductsItem';

export default class Products extends React.Component {
    render() {
        return (
            <div className='productPage'>
               
                    <ProductsItem title='Kolonijalna roba' imgLink='style/img/spices-2548653_640.jpg' />
                    <ProductsItem title='Voce i povrce' imgLink='style/img/food-1209503_640.jpg' />
                    <ProductsItem title='Mlečni proizvodi' imgLink='style/img/cheese-2785_640.jpg' />
              
                    <ProductsItem title='Riba i proizvodi od ribe' imgLink='style/img/fish-984299_640.jpg' />
                    <ProductsItem title='Mesni proizvodi' imgLink='style/img/salami-2645403_640.jpg' />
                    <ProductsItem title='Jaja' imgLink='style/img/egg-944495_640.jpg' />
                
                <ProductsItem title='Konditori' imgLink='style/img/chocolate-183543_640.jpg' />
                <ProductsItem title='Alkoholna i bezalkoholna pica' imgLink='style/img/tee-1740871_640.jpg' />
                <ProductsItem title='Hemija' imgLink='style/img/lavender-products-616444_640.jpg' />
              
            
            </div>
        )
    }
}