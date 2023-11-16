
import React, { useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import './tableStyles.css';
import Filters from '../Filters';
import SettingsModal from '../SettingsModal';

const Table = ({ rows, columns }) => {
    const gridRef = useRef(null);
    return (
        <div className='ag-grid-table-container' >
            <div className='table-header'>
                <Filters />
                <SettingsModal />
            </div>
            <div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
                <AgGridReact ref={gridRef} animateRows rowData={rows} columnDefs={columns}></AgGridReact>
            </div>
        </div>
    )
}

export default Table