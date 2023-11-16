import Table from '../Table'
import './styles.css'
import React from 'react'

const TabTableContent = (props) => {
    return (
        <div className='table-container'>
            <Table {...props} />
        </div>
    )
}

export default TabTableContent