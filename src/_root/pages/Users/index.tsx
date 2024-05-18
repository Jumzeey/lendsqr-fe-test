import React, { useState } from "react"
import Card from "../../../components/ui/Card"
import users from '@/assets/users.svg'
import active from '@/assets/active.svg'
import loan from '@/assets/loans.svg'
import savings from '@/assets/savings.svg'
import Table from "../../../components/ui/Table"
import { useUserData } from "../../../lib/hooks/useUserData"
import './index.scss'
import { useEffect } from "react"

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const { data, fetchUserData } = useUserData();
  const { cardData, fetchData } = useUserData();

  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);


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

        {/* table */}
        <div>
          <Table
            data={data}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage} />
        </div>
      </div>
    </>
  )
}

export default Users