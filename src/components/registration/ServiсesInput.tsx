import React, {useState} from 'react';
import style from "@/components/registration/registration.module.scss";
import {Dropdown} from "react-bootstrap";

const ServicesInput = ({initialState}) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleCheckboxChange = (value) => {
        const updatedSelection = selectedItems.includes(value)
            ? selectedItems.filter((item) => item !== value)
            : [...selectedItems, value];
        setSelectedItems(updatedSelection);
    };

    const filterOptions = (options) => {
        return options.filter((option) =>
            option.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <Dropdown className='w-100'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className={style.multiselect}>
                {selectedItems.length > 0
                    ? `${selectedItems.length} selected`
                    : 'Виберіть послуги'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {initialState.map((category) => {
                    const filteredOptions = filterOptions(category.data);
                    if (searchTerm && filteredOptions.length === 0) {
                        return null; // Skip rendering this category if no options match the search term
                    }

                    return (
                        <React.Fragment key={category.category}>
                            {searchTerm ? null : (
                                <div className="dropdown-header">{category.category}</div>
                            )}
                            {filteredOptions.map((option) => (
                                <div key={option.name} className="dropdown-item">
                                    <input
                                        type="checkbox"
                                        id={option.name}
                                        checked={selectedItems.includes(option.name)}
                                        onChange={() => handleCheckboxChange(option.name)}
                                    />
                                    <label htmlFor={option.name} className='w-100'>
                                        <div className="checkbox-label ">
                                            <div className='d-flex justify-content-between align-items-center '>
                                                <span>{option.name}</span>
                                                <span className="price">{option.price} грн</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </React.Fragment>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default ServicesInput;