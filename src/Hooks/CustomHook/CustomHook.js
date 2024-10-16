
import  { useEffect } from 'react'
const CustomHook = (count) => {

    useEffect(() => {
        if (count >= 1) {
            document.title = `(chats(${count}))`
        }
        else {
            document.title = `(chats)`
        }

    }, [count])
}

export default CustomHook