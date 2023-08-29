import React, { useState, useEffect } from 'react';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';
import './goldRate.css'
export const GoldRateComponent = () => {
    const [currentRate, setCurrentRate] = useState(0);
    const [todayRate, setTodayRate] = useState(0);
    const [percentageIncrease, setPercentageIncrease] = useState(0);
    const [isMouseEntered,setMouseEntered] = useState(false)
    // Simulated data update for demonstration purposes
    useEffect(() => {
        // Fetch current and today's gold rates from an API or data source
        const fetchGoldRates = async () => {
            try {
                // Simulated API response with rates
                // const response = await fetch('URL_TO_GOLD_RATES_API');
                // const data = await response.json();
                const data = { currentRate: 40000, todayRate: 39000 };

                // Update state with fetched rates
                setCurrentRate(data.currentRate);
                setTodayRate(data.todayRate);

                // Calculate percentage increase
                const increase = data.currentRate - data.todayRate;
                const percentage = (increase / data.todayRate) * 100;
                setPercentageIncrease(percentage);
            } catch (error) {
                console.error('Error fetching gold rates:', error);
            }
        };

        fetchGoldRates();
    }, []);

    const handleMouseEnter = ()=>{
        setMouseEntered(true)
    }

    const handleMouseLeave = ()=>{
        setMouseEntered(false)
    }

    return (
        <div className='goldRateComponent' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <div style={{ "display": "flex", "flexDirection": "column", "lineHeight": "1", "height": "100%", "justifyContent": "center",alignItems:'center' }}>
                <span style={{ color: percentageIncrease > 0 ? 'green' : 'red', fontWeight: '600' }}>{currentRate} </span>
                <span style={{ color: percentageIncrease > 0 ? 'green' : 'red', fontSize: '13px' }}>
                    {percentageIncrease > 0 ? '+' : ''}
                    {currentRate - todayRate}
                    <span style={{ fontSize: '10px' }}>
                        ({percentageIncrease.toFixed(2)}%)
                    </span>
                    <BiSolidRightArrow className='bottomArrow' style={{transform: isMouseEntered?'rotate(90deg)':''}}  size={10} />
                </span>
            </div>
        </div>
    );
};


export const GoldRateComponentUnstyle = () => {
    const [currentRate, setCurrentRate] = useState(0);
    const [todayRate, setTodayRate] = useState(0);
    const [percentageIncrease, setPercentageIncrease] = useState(0);
    const [isMouseEntered,setMouseEntered] = useState(false)
    // Simulated data update for demonstration purposes
    useEffect(() => {
        // Fetch current and today's gold rates from an API or data source
        const fetchGoldRates = async () => {
            try {
                // Simulated API response with rates
                // const response = await fetch('URL_TO_GOLD_RATES_API');
                // const data = await response.json();
                const data = { currentRate: 40000, todayRate: 39000 };

                // Update state with fetched rates
                setCurrentRate(data.currentRate);
                setTodayRate(data.todayRate);

                // Calculate percentage increase
                const increase = data.currentRate - data.todayRate;
                const percentage = (increase / data.todayRate) * 100;
                setPercentageIncrease(percentage);
            } catch (error) {
                console.error('Error fetching gold rates:', error);
            }
        };

        fetchGoldRates();
    }, []);

    const handleMouseEnter = ()=>{
        setMouseEntered(true)
    }

    const handleMouseLeave = ()=>{
        setMouseEntered(false)
    }

    return (
        <div className='goldRateComponent' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <div style={{ "display": "flex", "flexDirection": "column", "lineHeight": "1", "height": "100%", "justifyContent": "center",alignItems:'center' }}>
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
