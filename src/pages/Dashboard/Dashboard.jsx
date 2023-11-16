import React from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs'
import './styles.css';
import { TABS } from './utils';

const TABS_ARRAY = Object.values(TABS);

const Dashboard = () => {
    return (
        <div className='container'>
            <h1 className='heading'>Reconciliation Report</h1>
            <div>
                <Tabs>
                    <TabList>
                        {TABS_ARRAY.map(tab => <Tab key={tab.name}>
                            {tab.name}
                        </Tab>)}
                    </TabList>

                    <div className='panels'>
                        {TABS_ARRAY.map(tab => <TabPanel key={tab.name}>
                            {tab.component}
                        </TabPanel>)}
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Dashboard