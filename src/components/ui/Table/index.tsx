import React, { useState } from 'react'
import { IUserDetailsProps } from '../../../lib/types'
import Pagination from '../../shared/Paginantion'
import filter from '@/assets/filter.svg'
import more from '@/assets/more.svg'
import { shortenText, formatDate } from '../../../services'
import ViewUserDetailsModal from '../../../modals/viewUserDetailsModal'
import FilterUserModal from '../../../modals/filterUsersModal'
import './index.scss'

interface TableProps {
    data: IUserDetailsProps[];
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}


const Table: React.FC<TableProps> = ({ data, currentPage,
    itemsPerPage,
    totalItems,
    onPageChange,
    onItemsPerPageChange, }) => {
    const [viewUserModalOpen, setViewUserModalOpen] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


    const closeFilterModal = () => setIsModalOpen(false);

    const toggleModalOpen = () => {
        setIsModalOpen((prev) => !prev);
      };

    const handleMoreClick = (userId: any) => {
        setViewUserModalOpen((prev) => !prev);
        setSelectedUserId(userId);
    };
    const closeModal = () => {
        setSelectedUserId(null);
        setViewUserModalOpen(false);
    };
    const selectedUser = data.find(userDetails => userDetails.id === selectedUserId);

    return (
        <>
            <div className="table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>
                                <span>
                                    <p>ORGANIZATION</p>
                                    <img src={filter} alt="" onClick={toggleModalOpen}/>
                                </span>
                            </th>
                            <th>
                                <span>
                                    <p>USERNAME</p>
                                    <img src={filter} alt="" onClick={toggleModalOpen} />
                                </span>
                            </th>
                            <th>
                                <span>
                                    <p>EMAIL</p>
                                    <img src={filter} alt="" onClick={toggleModalOpen}/>
                                </span>
                            </th>
                            <th>
                                <span>
                                    <p>PHONE NUMBER</p>
                                    <img src={filter} alt="" onClick={toggleModalOpen}/>
                                </span>
                            </th>
                            <th>
                                <span>
                                    <p>DATE JOINED</p>
                                    <img src={filter} alt="" onClick={toggleModalOpen}/>
                                </span>
                            </th>
                            <th>
                                <span>
                                    <p>STATUS</p>
                                    <img src={filter} alt="" onClick={toggleModalOpen}/>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <FilterUserModal isOpen={isModalOpen} onClose={closeFilterModal} />
                    <tbody>
                        {currentItems.map((user, index) => (
                            <tr key={index} className='table-row'>
                                <td data-label="ORGANIZATION">{shortenText(user?.organization, 20)}</td>
                                <td data-label="USERNAME">{shortenText(user?.username, 10)}</td>
                                <td data-label="EMAIL">{shortenText(user?.email, 15)}</td>
                                <td data-label="PHONE NUMBER">{user?.phone_number}</td>
                                <td data-label="DATE JOINED">{formatDate(user?.date_joined)}</td>
                                <td data-label="STATUS" className={`status ${user?.status.toLowerCase()}`}><p>{user?.status}</p></td>
                                <td>
                                    <img src={more} alt="more icon" className='more' onClick={() => handleMoreClick(user.id)} />
                                    <div className="more-modal">
                                        {(viewUserModalOpen
                                            && (selectedUserId === user.id)) && (
                                                <ViewUserDetailsModal userDetails={selectedUser} onClose={closeModal} />
                                            )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={onPageChange}
                onItemsPerPageChange={onItemsPerPageChange}
            />
            
        </>
    );
}
export default Table