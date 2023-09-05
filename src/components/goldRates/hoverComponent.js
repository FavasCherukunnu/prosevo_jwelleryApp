import React from 'react'
import GoldRateComponent, { GoldRateComponentUnstyle } from './goldRate'
import { useSelector } from 'react-redux';

export function HoverComponent() {

  const goldRates = useSelector(
    (state) => {
      return state.goldRate.value;
    }
  )
  return (
    <div className='goldRateHoverComponent'>
      <table>
        <tr>
          <td>21 carrot</td>
          <td>:</td>
          <td><GoldRateComponentUnstyle currentRate={goldRates.carrot21} todayRate={goldRates.prev_carrot21} /></td>
        </tr>
        <tr>
          <td>20 carrot</td>
          <td>:</td>
          <td><GoldRateComponentUnstyle currentRate={goldRates.carrot20} todayRate={goldRates.prev_carrot20}/></td>
        </tr>
      </table>
    </div>
  )
}
