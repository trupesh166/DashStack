import { useEffect, useState } from "react"
import { listVisitor } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "../../../UseDecodeToken";

export const useListVisitorDetails = () => {

  const [visitorDetails, setVisitorDetails] = useState([])
  const { societyId } = UseDecodeToken()

  const fetchVisitorDetails = async () => {
    if (!societyId) return;
    try {
      const response = await listVisitor(societyId)
      setVisitorDetails(response.data)
    }
    catch (err) {
      console.log("Failed to fetch VisitorDetails", err)
    }
  }

  useEffect(() => {
    fetchVisitorDetails()
  }, [societyId])

  return { visitorDetails, refetchVisitorDetails: fetchVisitorDetails }

}