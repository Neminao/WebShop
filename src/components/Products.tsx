import React from 'react';
import ProductsItem from './ProductsItem';

export default class Products extends React.Component {
    render() {
        const detailsKol = [
            <h4 id='kol1'>Ulje</h4>,
            <h4 id='kol1'>Secer</h4>,
            <h4 id='kol1'>Brasno</h4>,
            <h4 id='kol1'>Pirinac</h4>,
            <h4 id='kol1'>Testenine</h4>,
            <h4 id='kol1'>Zacini</h4>
        ]
        return (
            <div className='productPage'>

                <ProductsItem title='Kolonijalna roba' imgLink='style/img/spices-2548653_640.jpg' details={detailsKol}/>
                <ProductsItem title='Voce i povrce' imgLink='style/img/food-1209503_640.jpg' details={detailsKol}/>
                <ProductsItem title='Mlečni proizvodi' imgLink='style/img/cheese-2785_640.jpg' details={detailsKol}/>

                <ProductsItem title='Riba i proizvodi od ribe' imgLink='style/img/fish-984299_640.jpg' details={detailsKol}/>
                <ProductsItem title='Mesni proizvodi' imgLink='style/img/salami-2645403_640.jpg' details={detailsKol}/>
                <ProductsItem title='Jaja' imgLink='style/img/egg-944495_640.jpg' details={detailsKol}/>

                <ProductsItem title='Konditori' imgLink='style/img/chocolate-183543_640.jpg' details={detailsKol}/>
                <ProductsItem title='Alkoholna i bezalkoholna pica' imgLink='style/img/tee-1740871_640.jpg' details={detailsKol}/>
                <ProductsItem title='Hemija' imgLink='style/img/lavender-products-616444_640.jpg' details={detailsKol}/>


            </div>
        )
    }
}