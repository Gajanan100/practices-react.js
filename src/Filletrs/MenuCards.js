
import React, { useState } from 'react'
import './MenuCards.css'
import Menu from './Menu';
import NenuItems from './NenuItems';
import FiltersItems from './FiltersItems';

const ButtonsFilters = [...new Set(Menu.map(ele => ele.brand)),"all"];

// console.log(ButtonsFilters); 


const MenuCards = () => {
    const [item, setItem] = useState(Menu)
    const [catItems,setCatItems]=useState(ButtonsFilters)


    const filterItem = (category) =>{
  
        // if(category === "all"){
        //     setCatItems(Menu);
        //     return Menu;
        // }
    
      const filtersData= Menu.filter((ele)=>{
        return ele.brand === category
      })
      setItem(filtersData);
    }
    return (
        <>
             <FiltersItems filterItem={filterItem} catItems={catItems} />
            <NenuItems item={item} />
          
        </>
    )
}

export default MenuCards