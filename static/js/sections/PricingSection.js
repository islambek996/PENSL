import React, { useState, useEffect, useCallback } from 'react';
import PlanTable from '../components/PlanTable';
import SpringDiv from '../components/SpringDiv';

const PricingSection = () => {
    const [showTable1, setShowTable1] = useState(false);
    const [showTable2, setShowTable2] = useState(false);
    const [showTable3, setShowTable3] = useState(false);
    const [visibleTable, setVisibleTable] = useState('table2')

    const pricePlans = [
        {
            name: 'Starter',
            price: '9.99',
            includedFeatures: [
                '2 GB of space',
                '14 days of backups',
                'Social integrations',
                'Client Billing',  
            ],
            unincludedFeatures: [
                'Remote access',
                'Custom domain',
                '24 hour support',
                'Admin tools',
                'Collaboration tools',
                'User management',
            ]
        },
        {
            name: 'Professional',
            price: '19.99',
            includedFeatures: [
                '2 GB of space',
                '14 days of backups',
                'Social integrations',
                'Client Billing',
                'Remote access',
                'Custom domain',
                '24 hour support',
            ],
            unincludedFeatures: [
                'Admin tools',
                'Collaboration tools',
                'User management',
            ]
        },
        {
            name: 'Team',
            price: '49.99',
            includedFeatures: [
                '2 GB of space',
                '14 days of backups',
                'Social integrations',
                'Client Billing',
                'Remote access',
                'Custom domain',
                '24 hour support',
                'Admin tools',
                'Collaboration tools',
                'User management', 
            ],
            unincludedFeatures: []
        },
    ]

    const handleChangeVisibleTable = (table) => {
        setShowTable1(false);
        setShowTable2(false);
        setShowTable3(false);
        
        if (table === 'table1') {
            setShowTable1(true);
            setVisibleTable('table1');
        } else if (table === 'table2') {
            setShowTable2(true);
            setVisibleTable('table2');
        } else {
            setShowTable3(true);
            setVisibleTable('table3');
        }
    }
    
    const handleWindowResize = useCallback(() => {
        if (parseInt(window.innerWidth) >= 1024) {
            setShowTable1(true);
            setShowTable2(true);
            setShowTable3(true);
            return;
        }

        setShowTable1(false);
        setShowTable2(false);
        setShowTable3(false);

        if (visibleTable === 'table1') {
            setShowTable1(true);
        } else if (visibleTable === 'table2') {
            setShowTable2(true);
        } else {
            setShowTable3(true);
        }
    }, [visibleTable]);



    useEffect(() => {
        handleWindowResize();
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [handleWindowResize]);

    return (
        <div id="pricing-section" className="bg-[url('./assets/pricing.png')] bg-cover bg-center bg-no-repeat lg:h-screen bg-fixed">
            <div className='bg-[rgba(47,24,147,0.4)] h-full w-full text-white flex flex-col items-center
                            py-20 px-5'>
                
                <SpringDiv>
                    <h1 className='mb-5'>Plans & Pricing</h1>
                </SpringDiv>

                <SpringDiv>
                    <p className='mb-5 text-lg'>Startup Framework is free foreever - you only pay for custom domain hosting or to export you site.</p>
                </SpringDiv>

                <div className='lg:hidden flex gap-2 mb-5 bg-gray-800 rounded-md'>
                    <div 
                        className={`text-sm px-5 py-2 cursor-pointer ${showTable1 && 'bg-red-400'}`}
                        onClick={() => { handleChangeVisibleTable('table1') }}
                    >
                        <p>Starter</p>
                    </div>

                    <div 
                        className={`text-sm px-5 py-2 cursor-pointer ${showTable2 && 'bg-red-400'}`}
                        onClick={() => { handleChangeVisibleTable('table2') }}
                    >
                        <p>Professional</p>
                    </div>

                    <div 
                        className={`text-sm px-5 py-2 cursor-pointer ${showTable3 && 'bg-red-400'}`}
                        onClick={() => { handleChangeVisibleTable('table3') }}
                    >
                        <p>Team</p>
                    </div>
                </div>

                <div className='h-full w-full max-w-[1200px] gap-8 lg:flex'>
                    <PlanTable 
                        name={pricePlans[0].name} 
                        price={pricePlans[0].price}
                        includedFeatures={pricePlans[0].includedFeatures}
                        unincludedFeatures ={pricePlans[0].unincludedFeatures}
                        show={showTable1}
                        slideDuration={0.4}
                    />
                    <PlanTable 
                        name={pricePlans[1].name} 
                        price={pricePlans[1].price}
                        includedFeatures={pricePlans[1].includedFeatures}
                        unincludedFeatures ={pricePlans[1].unincludedFeatures}
                        show={showTable2}
                        slideDuration={0.8}
                    />
                    <PlanTable 
                        name={pricePlans[2].name} 
                        price={pricePlans[2].price}
                        includedFeatures={pricePlans[2].includedFeatures}
                        unincludedFeatures ={pricePlans[2].unincludedFeatures}
                        show={showTable3}
                        slideDuration={1.2}
                    />

                </div>
            </div>
        </div>
    )
}

export default PricingSection