import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";

const UseDecodeToken = () => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const decodeToken = () => {
      let token;

      if (localStorage.getItem(import.meta.env.VITE_TOKEN_NAME)) {
        token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
      } else if (sessionStorage.getItem(import.meta.env.VITE_TOKEN_NAME)) {
        token = sessionStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
      } else {
        const cookies = parseCookies();
        token = cookies[import.meta.env.VITE_TOKEN_NAME];
      }

      if (!token) {
        console.error(
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

  const societyId = decodedToken?.societyData?.selectSociety;
  const token = decodedToken;

  return { token, societyId };
};

export default UseDecodeToken;
