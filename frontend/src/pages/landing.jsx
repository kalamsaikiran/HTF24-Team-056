import React from 'react'
import PieChartWithCenterLabel from '../components/Pie'
import SimpleBarChart from '../components/Bar'
import SimpleLineChart from '../components/Line'

const Landing = () => {
    const dynamicUData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const dynamicPData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const dynamicXLabels = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    return (
        <>
            <div className='flex justify-between p-10 gap-x-3'>
                <div className='flex flex-col border rounded-2xl p-3 w-1/3 border-black'>
                    <div>
                        <h1 className='text-3xl font-bold mb-5'>Nutrients</h1>
                        <p>640 cal</p>
                        <div className='border rounded-2xl border-gray-400'>
                            <PieChartWithCenterLabel />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border rounded-2xl p-3 w-1/3 border-black'>
                    <div>
                        <h1 className='text-3xl font-bold mb-5'>calories</h1>
                        <p>640 cal</p>
                        <div className='border rounded-2xl border-gray-400'>
                            <SimpleLineChart/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col border rounded-2xl p-3 w-1/3 border-black'>
                    <div>
                        <h1 className='text-3xl font-bold mb-5'>Calories Taken vs Burnt</h1>
                        <p>640 cal</p>
                        <div className='border rounded-2xl border-gray-400'>
                            <SimpleBarChart
                                uData={dynamicUData}
                                pData={dynamicPData}
                                xLabels={dynamicXLabels}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Landing;