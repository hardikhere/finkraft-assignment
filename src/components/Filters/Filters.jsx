import React, { useState } from 'react';
import './Selector.css'; // Include your styles here

const SelectorItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const nestedItems = item.items && isExpanded ? (
        <ul className="nested">
            {item.items.map((nestedItem, index) => (
                <li key={index}>
                    <SelectorItem item={nestedItem} />
                </li>
            ))}
        </ul>
    ) : null;

    return (
        <div>
            <div className={`selector-item ${item.items ? 'has-nested' : ''}`} onClick={toggleExpansion}>
                {item.label}
            </div>
            {nestedItems}
        </div>
    );
};

const Selector = ({ options }) => {
    return (
        <div className="selector">
            <ul className="top-level">
                {options.map((option, index) => (
                    <li key={index}>
                        <SelectorItem item={option} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Filters = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [options, setOptions] = useState([
        {
            label: 'Vendor Name',
            items: [
                {
                    label: 'Sub Option 1',
                },
                {
                    label: 'Sub Option 2',
                    items: [
                        {
                            label: 'Nested Sub Option 1',
                        },
                        {
                            label: 'Nested Sub Option 2',
                        },
                    ],
                },
            ],
        },
        {
            label: 'OCR Match Status',
            items: [
                {
                    label: 'Sub Option 3',
                },
            ],
        },
    ]);

    return (
        <div style={{ position: 'relative' }}>
            <div className='filter-btn' onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
                Filters
            </div>
            {isFiltersOpen && <Selector options={options} />}
        </div>
    );
};

export default Filters;
