import './ConvertCase.scss'
import copyImage from '../assets/images/copy.png'

export function ConvertCase() {
    return (
        <div className="main">
            <div className="start">
                Simply enter your text and choose the case you want to convert it to
            </div>
            <form action="" method="post">
                <textarea id="content" placeholder="Put here your text"></textarea>
            </form>
            <div className="actions">
                <button id="lower" className="btn">lower case</button>
                <button id="upper" className="btn">upper case</button>
            </div>
            <div id="copy" className="copy">
                <img id="copy-img" src={copyImage} alt="" />
                <p id="copy-txt">copy</p>
            </div>
        </div>
    )
}