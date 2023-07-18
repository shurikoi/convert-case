import { useRef, useState } from 'react'
import './ConvertCase.scss'
import copyImage from '../assets/ui/copy.png'
import copySuccessImage from '../assets/ui/copy-success.png'

export function ConvertCase() {
    // event handlers to convert case:
    const inputRef = useRef()

    const toLowerCase = () => {
        inputRef.current.value = inputRef.current.value.toLowerCase()
    }

    const toUpperCase = () => {
        inputRef.current.value = inputRef.current.value.toUpperCase()
    }
    
    // event handler ('handleCopy' func) for the copy button:
    const [imageValue, setImageValue] = useState(copyImage)
    const [ isCopied, setIsCopied ] = useState(false)
    
    const setCopySuccessColor = () => {
        setImageValue(copySuccessImage)
        setIsCopied((state) => !state)
        
        setTimeout(() => {
            setImageValue(copyImage)
            setIsCopied((state) => !state)
        }, 1000)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(inputRef.current.value)
        setCopySuccessColor()
    }

    return (
        <div className="main">
            <div className="start">
                Simply enter your text and choose the case you want to convert it to
            </div>
            <form action="" method="post">
                <textarea ref={inputRef} id="content" placeholder="Put here your text"></textarea>
            </form>
            <div className="actions">
                <button id="lower" className="btn" onClick={toLowerCase}>lower case</button>
                <button id="upper" className="btn" onClick={toUpperCase}>upper case</button>
            </div>
            <div className="copy" onClick={handleCopy}>
                <img className="copy-img" src={imageValue} alt=""/>
                <p className={`copy-txt ${isCopied ? 'copied' : ''}`}>copy</p>
            </div>
        </div>
    )
}