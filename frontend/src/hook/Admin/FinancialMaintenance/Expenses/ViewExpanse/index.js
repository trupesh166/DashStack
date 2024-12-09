import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import UseDecodeToken from "@/hook/UseDecodeToken";
import { listExpense } from "@/axiosApi/ApiHelper";

export const useViewExpanse = () => {
  const { societyId } = UseDecodeToken();
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await listExpense(societyId);
      console.log(response);
      if (response.data) {
        const formattedData = response?.data?.data?.map((expense, index) => ({
          key: expense._id || index,
          title: expense.title,
          description: expense.discription,
          date: new Date(expense.date).toLocaleDateString(),
          amount: expense.amount,
          billFormat: expense.billDocument
            ? expense.billDocument.includes("pdf")
              ? "PDF"
              : "JPG"
            : "-",
          billDocument: expense.billDocument,
        }));
        setTableData(formattedData);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [societyId]);

  return { tableData, isLoading, fetchData };
};
