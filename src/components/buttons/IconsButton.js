import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './IconButton.css'
import { useEffect, useRef, useState } from "react";

export function IconsButton(props) {

    const { icon, children} = props
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef();

    useEffect(
        ()=>{
            ref.current.style.height=0;
            ref.current.addEventListener('transitionend',()=>{
                if(ref.current.style.opacity==='0'){
                    ref.current.style.height=0;
                }
            })
        },[]
    )
    return (
        <div className="button-container" onMouseEnter={() => {setIsHovered(true);ref.current.style.height='auto'}} onMouseLeave={() => { setIsHovered(false) }}>
            <NavLink href="" className='IconButton1'>
                {icon}
            </NavLink>
            <div ref={ref} className='hiddenDiv' style={{ right: 5,opacity:isHovered?1:0 }}>
                <div className='HideContent'>
                    {children}
                </div>
            </div>
        </div>
    )

}