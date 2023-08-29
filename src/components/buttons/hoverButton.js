import { NavLink } from "react-bootstrap";
import './hoverButton.css'
import { useEffect, useRef, useState } from "react";

export function HoverButton(props) {

    const { button, children } = props
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef();

    useEffect(
        () => {
            ref.current.style.height = 0;
            ref.current.addEventListener('transitionend', () => {
                if (ref.current.style.opacity === '0') {
                    ref.current.style.height = 0;
                }
            })
        }, []
    )
    return (
        <div className="HoverButton-container" onMouseEnter={() => { setIsHovered(true); ref.current.style.height = 'auto' }} onMouseLeave={() => { setIsHovered(false) }}>
            {button}
            <div ref={ref} className='hiddenDiv' style={{ right: 5, opacity: isHovered ? 1 : 0 }}>
                <div className='HideContent'>
                    {children}
                </div>
            </div>
        </div>
    )

}