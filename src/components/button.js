import { useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import'./button.css';

function Divdid(props) {
    return (<Col {...props}></Col>)

}
export function BasicExample() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='buttonHoverShow' style={{ "position": "relative", "display": "inline-block" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false) }}>
            <button >Hover Me</button>
            <div className='hiddenDiv' style={{ zIndex: isHovered ? 1 : -1000,right: 5,opacity:isHovered?1:0 }}>
                <div className='HideContent'>
                    sdljlksdfjsdsfsdfsdfsdfdsf adlj fl jlk jljljlf j lkl jkl j
                </div>
            </div>
        </div>
    );
}

