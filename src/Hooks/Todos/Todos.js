
import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import "./Todos.css"

const getLocallData = () => {
    const list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    }
    else {
        return [];
    }
}

const Todos = () => {

    const [inputvalue, setInputValue] = useState('')
    const [items, setItems] = useState(getLocallData())
    const [buttons,setButtons]=useState(true);
    const[editItem,seteditItems]=useState(null);
    // console.log(inputvalue);

    const addItems = () => {

        if (!inputvalue) {
            alert("Plaese Fill The Data")   
        } 
        else if(inputvalue && !buttons){
            setItems(items.map((ele)=>{
                if(ele.id === editItem){
                    return { ...ele, name:inputvalue}
                }
                    return ele
            }))
               setButtons(true)
              setInputValue('');
               seteditItems(null);
        }
        
        else {
            const allINputData = { id: new Date().getTime().toString(), name: inputvalue }
            setItems([...items, allINputData])
            console.log(items);
        }
    }

    const editItems=(id)=>{
       alert(id);
       const newEdiItems= items.find((ele)=>{
            return ele.id === id;
       })
        //  setItems(newEdiItems);
           setButtons(false)
             setInputValue(newEdiItems.name);
           seteditItems(id);
      
    }

    const DeleteItems = (id) => {

        const newArrays = items.filter((ele, index) => {
            return ele.id !== id;
        })
        setItems(newArrays);
        console.log(newArrays);

    }
    const removeAll = () => {
        setItems([])

    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items])

    return (
        <>

            <div className='container '>
                <div className="g_input_text mt-5 mb-5 ">
                    <input type='text' placeholder='✍ enter items...'
                        autoCapitalize='off' value={inputvalue}

                        onChange={(e) => setInputValue(e.target.value)} />
                        {
                            buttons ?<span onClick={addItems}><IoIosAddCircle /></span>:
                            <span onClick={addItems}><MdEditNote /></span>
                        }
                </div>
                {
                    items.map((ele) => {
                        return (
                            <div key={ele.id} className="d-flex justify-content-between g_show_item mt-1">
                                <h3>{ele.name}</h3>
                                <div className='gap-2'>
                                    <span onClick={() => editItems(ele.id)}><MdEditNote size={30} /></span>
                                    <span onClick={() => DeleteItems(ele.id)}><MdOutlineDeleteSweep size={30} /></span>
                                </div>
                            </div>
                        )

                    })
                }

                <div>
                    <button className='btn btn-primary mt-3 ' onClick={removeAll}>DeleteAll</button>
                </div>
            </div>

        </>
    )
}

export default Todos