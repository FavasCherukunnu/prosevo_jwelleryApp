import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './IconButton.css'
import { useState } from "react";

export function IconsButton(props) {

    const { icon } = props
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="button-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false) }}>
            <NavLink href="" className='IconButton1'>
                {icon}
            </NavLink>
            <div className='hiddenDiv' style={{ zIndex: isHovered ? 1 : '-1000',right: 5,opacity:isHovered?1:0 }}>
                <div className='HideContent'>
                    sdljlksdfjsdsfsdfsdfsdfdsf adlj fl jlk jljljlf j lkl jkl j
                </div>
            </div>
        </div>
    )

}