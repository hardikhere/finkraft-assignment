import React, { useState, useMemo, useCallback, useRef } from 'react'
import { overviewTableColumns } from '../../pages/Dashboard/utils';
import Settings from '../../assets/settings.svg'
import './settingsStyles.css';
import Modal from '../Modal';

const SettingsModal = () => {

    const [showModal, setShowModal] = useState(false);
    const gridRef = useRef();
    const sideBar = useMemo(() => {
        return {
            toolPanels: [
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                    toolPanelParams: {
                        suppressRowGroups: true,
                        suppressValues: true,
                        suppressPivots: true,
                        suppressPivotMode: true,
                        suppressColumnFilter: true,
                        suppressColumnSelectAll: true,
                        suppressColumnExpandAll: true,
                    },
                },
            ],
            defaultToolPanel: 'columns',
        };
    }, []);
    const showPivotModeSection = useCallback(() => {
        var columnToolPanel = gridRef.current.api.getToolPanelInstance('columns');
        columnToolPanel.setPivotModeSectionVisible(true);
    }, []);

    const showRowGroupsSection = useCallback(() => {
        var columnToolPanel = gridRef.current.api.getToolPanelInstance('columns');
        columnToolPanel.setRowGroupsSectionVisible(true);
    }, []);

    const showValuesSection = useCallback(() => {
        var columnToolPanel = gridRef.current.api.getToolPanelInstance('columns');
        columnToolPanel.setValuesSectionVisible(true);
    }, []);
    const showPivotSection = useCallback(() => {
        var columnToolPanel = gridRef.current.api.getToolPanelInstance('columns');
        columnToolPanel.setPivotSectionVisible(true);
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return <>
        <img src={Settings} onClick={openModal} className='settings' alt='settings' />
        {showModal && <Modal onClose={closeModal}>
            <select
                multiple
                onChange={e => {
                    const selectedColumns = Array.from(e.target.selectedOptions, option => option.value);
                    // handleColumnChange(selectedColumns);
                }}
            >
                {overviewTableColumns.map(column => (
                    <option key={column.field} value={column.field}>
                        {column.headerName}
                    </option>
                ))}
            </select>
        </Modal>}
    </>
}

export default SettingsModal