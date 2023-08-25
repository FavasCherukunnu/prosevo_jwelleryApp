import React, { useState, useEffect } from 'react';

const GoldRateComponent = () => {
    const [currentRate, setCurrentRate] = useState(0);
    const [todayRate, setTodayRate] = useState(0);
    const [percentageIncrease, setPercentageIncrease] = useState(0);

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

    return (
        <div>

            <div style={{ "display": "flex", "flexDirection": "column", "lineHeight": "1", "height": "100%", "justifyContent": "center" }}>
                <span style={{ color: percentageIncrease > 0 ? 'green' : 'red', fontWeight: '600' }}>{currentRate} </span>
                <span style={{color: percentageIncrease > 0 ? 'green' : 'red',fontSize:'13px'}}>
                    {percentageIncrease > 0?'+':''}
                    {currentRate-todayRate}
                    <span style={{ fontSize: '10px' }}>
                        ({percentageIncrease.toFixed(2)}%)
                    </span>
                </span>
            </div>
        </div>
    );
};

export default GoldRateComponent;
