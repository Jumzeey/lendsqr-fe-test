import Card from "../../../components/ui/Card"
import users from '@/assets/users.svg'
import active from '@/assets/active.svg'
import loan from '@/assets/loans.svg'
import savings from '@/assets/savings.svg'
import axios from "../../../lib/utils/axiosInstance"
import './index.scss'
import { IUserData } from "../../../lib/types"
import { useEffect, useState } from "react"

const Users = () => {
  const [cardData, setCardData] = useState<IUserData>({
    user_count: 0,
    active_users_count: 0,
    users_loan_count: 0,
    users_with_savings_count: 0
  }) 

  const response = {
    "user_count": 500,
    "active_users_count": 300,
    "users_loan_count": 100,
    "users_with_savings_count": 350
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get<IUserData>("/8670df66-f175-4696-b8f4-2501a7350b96");
        setCardData(response);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(cardData.active_users_count)
  console.log(cardData)
  
  return (
    <>
      <div className="user">
        <p className="user-title">Users</p>
        <div className="analysis">
        <Card title={"Users"} icon={users} figure={cardData.user_count} />
        <Card title={"Active Users"} icon={active} figure={cardData.active_users_count} />
        <Card title={"Users with Loans"} icon={loan} figure={cardData.users_loan_count} />
        <Card title={"Users with Savings"} icon={savings} figure={cardData.users_with_savings_count} />
        </div>
      </div>
    </>
  )
}

export default Users