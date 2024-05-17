import React from 'react'
import view from '@/assets/view.svg'
import del from '@/assets/delete.svg'
import activate from '@/assets/activate.svg'
import './index.scss'
import { useNavigate } from 'react-router-dom';
import { IViewUserDetailsModalProps } from '../../lib/types'

const ViewUserDetailsModal: React.FC<IViewUserDetailsModalProps> = ({ userDetails, onClose }) => {
    const navigate = useNavigate();

    const handleEditProductClick = () => {
        //save userdetails to local storage according to the instruction given
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        navigate(`/users-details`);
        onClose();
    };


    return (
        <div className="modal-container">
            <div className="modal-content">
                <div onClick={handleEditProductClick} className='modal-item view-details'>
                    <img src={view} />
                    <p>View Details</p>
                </div>
                <div className='modal-item blacklist-user'>
                    <img src={del} />
                    <p>Blacklist user</p>
                </div>
                <div className='modal-item activate-user'>
                    <img src={activate} />
                    <p>Activate user</p>
                </div>
            </div>
        </div>
    )
}

export default ViewUserDetailsModal