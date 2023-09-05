import { NavLink } from "react-bootstrap";
import './hoverButton.css'
import { useEffect, useRef, useState } from "react";
import { BsPinAngle, BsPinFill } from 'react-icons/bs';
import Draggable from "react-draggable";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export function HoverButton(props) {

    const { button, children,isPinnable } = props
    const [isHovered, setIsHovered] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const ref = useRef();

    useEffect(
        () => {
            ref.current.style.height = 0;
            ref.current.addEventListener('transitionend', () => {
                if (ref.current.style.opacity === '0') {
                    ref.current.style.height = 0;
                    setIsPinned(false);
                }
            })
        }, []
    )

    const onPinned = () => {
        // ref.current.style.position = 'fixed'
        // ref.current.style.top = '0'
        // ref.current.style.right = '0'
        ref.current.style.zIndex = '1000'
        setIsPinned(true);
    }

    const onUnPinned = () => {
        // ref.current.style.position = 'absolute'
        // ref.current.style.top = '105%'
        // ref.current.style.right = '0'

        setIsHovered(false)
        ref.current.style.zIndex = '0'
    }

    const onMouseLeave = () => {
        if (isPinned === false) {

            setIsHovered(false)
        }
    }


    return (
        <div className="HoverButton-container" onMouseEnter={() => { setIsHovered(true); ref.current.style.height = 'auto' }} onMouseLeave={onMouseLeave}>
            {button}
            {
                <Draggable disabled={isPinnable?isPinned ? false : true:true} position={isPinned ? null : { x: 0, y: 0 }}
                >
                    <div ref={ref} className='hiddenDiv' style={{ right: 5, opacity: isHovered ? 1 : 0 }}>

                        <div className='HideContent'>
                            {
                                isPinnable
                                ?
                                <div style={{ display: 'flex', justifyContent: 'end', padding: '5px' }}>
                                {
                                    isPinned
                                        ?
                                        <BsPinFill onClick={onUnPinned} className="pinButton" />
                                        :
                                        <BsPinAngle onClick={onPinned} className="pinButton" />}
                                </div>
                                :null
                            }
                            {children}
                        </div>
                    </div>
                </Draggable>
            }
        </div>
    )

}