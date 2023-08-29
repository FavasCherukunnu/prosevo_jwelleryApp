import { NavLink } from "react-bootstrap";
import './IconButton.css'
import { useEffect, useRef, useState } from "react";

export function IconsButton(props) {

    const { icon } = props

    return (
        <NavLink href="" className='IconButton1'>
            {icon}
        </NavLink>
    )

}