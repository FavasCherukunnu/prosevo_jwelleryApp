import React from 'react'
import GoldRateComponent, { GoldRateComponentUnstyle } from './goldRate'

export function HoverComponent() {
  return (
    <div className='goldRateHoverComponent'>
        <table>
            <tr>
                <td>22 carrot</td>
                <td>:</td>
                <td><GoldRateComponentUnstyle/></td>
            </tr>
            <tr>
                <td>24 carrot</td>
                <td>:</td>
                <td><GoldRateComponentUnstyle/></td>
            </tr>
        </table>
    </div>
  )
}
