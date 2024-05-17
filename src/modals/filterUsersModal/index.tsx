import React from 'react';
import './index.scss';
import { IFilterModalProps } from '../../lib/types';



const FilterUserModal: React.FC<IFilterModalProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="organization">Organization</label>
                        <select id="organization" name="organization">
                            <option value="">Select</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="User" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" placeholder="Date" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="">Select</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="reset" className="btn reset-btn">Reset</button>
                        <button type="submit" className="btn filter-btn">Filter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FilterUserModal;
