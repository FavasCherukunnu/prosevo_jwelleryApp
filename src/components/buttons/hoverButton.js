import { NavLink } from "react-bootstrap";
import './hoverButton.css'
import { useEffect, useRef, useState } from "react";
import { BsPinAngle, BsPinFill } from 'react-icons/bs';
import Draggable from "react-draggable";

export function HoverButton(props) {

    const { button, children } = props
    const [isHovered, setIsHovered] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const ref = useRef();

    useEffect(
        () => {
            ref.current.style.height = 0;
            ref.current.addEventListener('transitionend', () => {
                console.log('ended');
                if (ref.current.style.opacity === '0') {
                    ref.current.style.height = 0;
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
        // setIsHovered(false)
        // ref.current.style.position = 'absolute'
        // ref.current.style.top = '105%'
        // ref.current.style.right = '0'

        ref.current.style.zIndex = '0'
        setIsPinned(false);
    }

    const onMouseLeave = () => {
        if (isPinned === false) {

            setIsHovered(false)
        }
    }

    const dropDownContent = () => {
        return (
            <div ref={ref} className='hiddenDiv' style={{ right: 5, opacity: isHovered ? 1 : 0 }}>

                <div className='HideContent'>
                    <div style={{ display: 'flex', justifyContent: 'end', padding: '5px' }}>
                        {
                            isPinned
                                ?
                                <BsPinFill onClick={onUnPinned} className="pinButton" />
                                :
                                <BsPinAngle onClick={onPinned} className="pinButton" />}
                    </div>
                    {children}
                </div>
            </div>
        )
    }


    return (
        <div className="HoverButton-container" onMouseEnter={() => { setIsHovered(true); ref.current.style.height = 'auto' }} onMouseLeave={onMouseLeave}>
            {button}
            {
                    <Draggable>
                        <div ref={ref} className='hiddenDiv' style={{ right: 5, opacity: isHovered ? 1 : 0 }}>

                            <div className='HideContent'>
                                <div style={{ display: 'flex', justifyContent: 'end', padding: '5px' }}>
                                    {
                                        isPinned
                                            ?
                                            <BsPinFill onClick={onUnPinned} className="pinButton" />
                                            :
                                            <BsPinAngle onClick={onPinned} className="pinButton" />}
                                </div>
                                {children}
                            </div>
                        </div>
                    </Draggable>
            }
        </div>
    )

}