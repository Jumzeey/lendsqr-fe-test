import React, { useEffect, useState } from 'react';
import avatar from '@/assets/avatar.svg';
import star from '@/assets/star.svg';
import { formatToNaira } from '../../../services';
import './index.scss';
import { IUserDetailsProps } from '../../../lib/types';

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<IUserDetailsProps | null>(null);

  useEffect(() => {
    // Retrieve userDetails from local storage
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUser(JSON.parse(storedUserDetails));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div key={user.id}>
        <div className="header-section">
          <div className='header'>
            <div className='profile-info'>
              <div className='avatar'><img src={avatar} alt="Avatar" /></div>
              <div className='user-info'>
                <h2>{user.user_details.first_name} {user.user_details.last_name}</h2>
                <p className='user-id'>{user.username}</p>
              </div>
            </div>
            <div className='tier-and-balance'>
              <div className='tier'>
                <p>User's Tier</p>
                <div className='stars'><img src={star} alt="Star" /></div>
              </div>
              <div className='balance'>
                <p>{formatToNaira(user.user_details.loan_payment)}</p>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
          </div>
          <div className='tabs'>
            <span className='active'>General Details</span>
            <span>Documents</span>
            <span>Bank Details</span>
            <span>Loans</span>
            <span>Savings</span>
            <span>App and System</span>
          </div>
        </div>
        <div className="user-details-info">
          <div className='section'>
            <div className='title'>Personal Information</div>
            <div className='details'>
              <div className='detail-item'><span>Full Name:</span><span>{user.user_details.first_name} {user.user_details.last_name}</span></div>
              <div className='detail-item'><span>Phone Number:</span><span>{user.user_details.phone_number}</span></div>
              <div className='detail-item'><span>Email Address:</span><span>{user.user_details.email}</span></div>
              <div className='detail-item'><span>BVN:</span><span>{user.user_details.bvn}</span></div>
              <div className='detail-item'><span>Gender:</span><span>{user.user_details.gender}</span></div>
              <div className='detail-item'><span>Marital Status:</span><span>{user.user_details.marital_status}</span></div>
              <div className='detail-item'><span>Children:</span><span>{user.user_details.children}</span></div>
              <div className='detail-item'><span>Type of Residence:</span><span>{user.user_details.residence}</span></div>
            </div>
          </div>

          <div className='section'>
            <div className='title'>Education and Employment</div>
            <div className='details'>
              <div className='detail-item'><span>Level of Education:</span><span>{user.user_details.education_level}</span></div>
              <div className='detail-item'><span>Employment Status:</span><span>{user.user_details.employment_status}</span></div>
              <div className='detail-item'><span>Sector of Employment:</span><span>{user.user_details.employment_sector}</span></div>
              <div className='detail-item'><span>Duration of Employment:</span><span>{user.user_details.employment_duration}</span></div>
              <div className='detail-item'><span>Office Email:</span><span>{user.user_details.office_email}</span></div>
              <div className='detail-item'><span>Monthly Income:</span><span>{user.user_details.monthly_income}</span></div>
              <div className='detail-item'><span>Loan Repayment:</span><span>{user.user_details.loan_payment}</span></div>
            </div>
          </div>

          <div className='section'>
            <div className='title'>Socials</div>
            <div className='details'>
              <div className='detail-item'><span>Twitter:</span><span>{user.user_details.twitter}</span></div>
              <div className='detail-item'><span>Facebook:</span><span>{user.user_details.facebook}</span></div>
              <div className='detail-item'><span>Instagram:</span><span>{user.user_details.instagram}</span></div>
            </div>
          </div>

          <div className='section'>
            <div className='title'>Guarantor</div>
            <div className='details'>
              <div className='detail-item'><span>Full Name:</span><span>Debby Ogana</span></div>
              <div className='detail-item'><span>Phone Number:</span><span>07060780922</span></div>
              <div className='detail-item'><span>Email Address:</span><span>debby@gmail.com</span></div>
              <div className='detail-item'><span>Relationship:</span><span>Sister</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDetails;
