import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const UseDecodeToken = () => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const decodeToken = () => {
      let token;
      token = sessionStorage.getItem(import.meta.env.VITE_TOKEN_NAME);

      if (!token) {
        toast.error(
          "Token not found in cookies, localStorage, or sessionStorage"
        );
        return;
      }

      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
      } catch (error) {
        console.error(`Error decoding token:`, error);
        setDecodedToken(null);
      }
    };

    decodeToken();
  }, []);

  const societyId = decodedToken?.societyData?.selectSociety
    ? decodedToken?.societyData?.selectSociety
    : decodedToken?.societyData?.societyId;
  const token = decodedToken;
  return { token, societyId };
};

export default UseDecodeToken;
