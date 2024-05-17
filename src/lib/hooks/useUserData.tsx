import { useState } from "react";
import axios from "../utils/axiosInstance";
import { IUserData, IUserDetailsProps, IPaginationProps, } from "../types";

export const useUserData = () => {
  const [cardData, setCardData] = useState<IUserData>({
    user_count: 0,
    active_users_count: 0,
    users_loan_count: 0,
    users_with_savings_count: 0
  });

  const [data, setData] = useState<IUserDetailsProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [paginate, setPaginate] = useState<IPaginationProps>({
    totalItems: 0,
    itemsPerPage: 20,
    currentPage: 1,
    onPageChange: (page: number) => setCurrentPage(page),
    onItemsPerPageChange: (itemsPerPage: number) => setItemsPerPage(itemsPerPage)
  });

  const fetchData = async () => {
    try {
      const response = await axios.get<IUserData>("1a9acd7f-bd06-40ed-89d0-e0d0083c7bb0");
      setCardData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/9a458580-7f5a-4f7c-a282-1fcff2c5853e");
      setData(response.data.result);
      setPaginate(response.data.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { cardData, fetchData, data, currentPage, itemsPerPage, paginate, fetchUserData };
};
