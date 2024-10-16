
import React, {  useState } from 'react'
import CustomHook from './CustomHook'

const UseEffectsHook = () => {
    const [count, setCount] = useState(0)
    CustomHook(count)
    // useEffect(() => {
    //     if (count >= 1) {
    //         document.title = `(chats(${count}))`
    //     }
    //     else {
    //         document.title = `(chats)`
    //     }

    // }, [count])

    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default UseEffectsHook