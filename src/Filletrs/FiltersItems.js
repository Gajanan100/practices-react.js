
import React from 'react'

const FiltersItems = ({ filterItem, catItems}) => {
    return (
        <>
            <div className='container my-2  mt-5 text-wrap w-100'>
                <div className=' justify-content-between '>
                    {
                        catItems.map((curclem, index) => {
                            return <button key={curclem} className='btn btn-warning me-2 mt-2' onClick={() => filterItem(curclem)}>{curclem}</button>

                        })
                    }

                </div>
            </div>

            {/* <div className='container d-flex justify-content-between mt-5'>
               <button className='btn btn-warning' onClick={()=>filterItem('Apple')}>Apple</button>
               <button className='btn btn-warning' onClick={()=>filterItem('Samsung')}>Samsung</button>
               <button className='btn btn-warning' onClick={()=>filterItem('OPPO')} >OPPO</button>
               <button className='btn btn-warning'onClick={()=>filterItem('Huawei')}>Huawei</button>
               <button className='btn btn-warning'onClick={()=>filterItem('Microsoft Surface')}>Microsoft Surface</button>
               <button className='btn btn-warning'onClick={()=>filterItem('Infinix')}>Infinix</button>
               {/* <button className='btn btn-warning'onClick={()=>setItem(Menu)}>All Brand</button> */}
            {/* </div > */}
        </>
    )
}

export default FiltersItems