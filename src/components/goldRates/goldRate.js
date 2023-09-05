import React, { useState, useEffect } from 'react';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';
import './goldRate.css'
import axios from 'axios';
import { goldRateApi } from '../../constants/api';
import { useDispatch, useSelector } from 'react-redux';
import { setAllGoldRates } from '../../redux/goldRate/goldRateSlice';
export const GoldRateComponent = () => {
    // const [currentRate, setCurrentRate] = useState(0);
    // const [todayRate, setTodayRate] = useState(0);
    // const [percentageIncrease, setPercentageIncrease] = useState(0);
    // console.log(prevRate);
    const [isMouseEntered, setMouseEntered] = useState(false)
    const dispatch = useDispatch();
    const goldRates = useSelector(
        (state) => {
            return state.goldRate.value;
        }
    )
    const data = { currentRate: goldRates.carrot22, todayRate: goldRates.prev_carrot22 };
    const currentRate = data.currentRate;
    const todayRate = data.todayRate;

    // Calculate percentage increase
    const increase = data.currentRate - data.todayRate;
    const percentageIncrease = (increase / data.todayRate) * 100;
    // setPercentageIncrease(percentage);

    // Simulated data update for demonstration purposes
    useEffect(() => {
        // Fetch current and today's gold rates from an API or data source
        const fetchGoldRates = async () => {
            try {
                // Simulated API response with rates
                // const response = await fetch('URL_TO_GOLD_RATES_API');
                // const data = await response.json();

                const res = await axios.get(goldRateApi);
                dispatch(setAllGoldRates({ value: { ...res.data } }))
                
            } catch (error) {
                console.error('Error fetching gold rates:', error);
            }
        };
        fetchGoldRates();

    }, []);

    const handleMouseEnter = () => {
        setMouseEntered(true)
    }

    const handleMouseLeave = () => {
        setMouseEntered(false)
    }

    return (
        <div className='goldRateComponent' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <div style={{ "display": "flex", "flexDirection": "column", "lineHeight": "1", "height": "100%", "justifyContent": "center", alignItems: 'center' }}>
                <span style={{ color: percentageIncrease > 0 ? 'green' : 'red', fontWeight: '600' }}>{currentRate} </span>
                <span style={{ color: percentageIncrease > 0 ? 'green' : 'red', fontSize: '13px' }}>
                    {percentageIncrease > 0 ? '+' : ''}
                    {currentRate - todayRate}
                    <span style={{ fontSize: '10px' }}>
                        ({percentageIncrease.toFixed(2)}%)
                    </span>
                    <BiSolidRightArrow className='bottomArrow' style={{ transform: isMouseEntered ? 'rotate(90deg)' : '' }} size={10} />
                </span>
            </div>
        </div>
    );
};


export const GoldRateComponentUnstyle = ({ currentRate=0,todayRate=0 }) => {
    
    // const [percentageIncrease, setPercentageIncrease] = useState(0);
    // const [isMouseEntered, setMouseEntered] = useState(false)
    // Simulated data update for demonstration purposes
    const increase = currentRate - todayRate;
    const percentageIncrease = (increase / todayRate) * 100;

    // setPercentageIncrease(percentage);
    // useEffect(() => {
    //     // Fetch current and today's gold rates from an API or data source
    //     const fetchGoldRates = async () => {
    //         try {
    //             // Simulated API response with rates
    //             // const response = await fetch('URL_TO_GOLD_RATES_API');
    //             // const data = await response.json()

    //             // Calculate percentage increase
    //         } catch (error) {
    //             console.error('Error fetching gold rates:', error);
    //         }
    //     };

    //     fetchGoldRates();
    // }, []);

    // const handleMouseEnter = () => {
    //     setMouseEntered(true)
    // }

    // const handleMouseLeave = () => {
    //     setMouseEntered(false)
    // }

    return (
        <div className='goldRateComponent' >

            <div style={{ "display": "flex", "flexDirection": "column", "lineHeight": "1", "height": "100%", "justifyContent": "center", alignItems: 'center' }}>
                <span style={{ color: percentageIncrease > 0 ? 'green' : 'red', fontWeight: '600' }}>{currentRate} </span>
                <span style={{ color: percentageIncrease > 0 ? 'green' : 'red', fontSize: '13px' }}>
                    {percentageIncrease > 0 ? '+' : ''}
                    {currentRate - todayRate}
                    <span style={{ fontSize: '10px' }}>
                        ({percentageIncrease.toFixed(2)}%)
                    </span>
                </span>
            </div>
        </div>
    );
};
