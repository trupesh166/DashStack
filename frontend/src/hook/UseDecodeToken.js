import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";

const UseDecodeToken = () => {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const decodeToken = () => {
      let token;

      if (localStorage.getItem("_token")) {
        token = localStorage.getItem("_token");
      } else if (sessionStorage.getItem("_token")) {
        token = sessionStorage.getItem("_token");
      } else {
        const cookies = parseCookies();
        token = cookies["_token"];
      }

      if (!token) {
        console.error(
          "Token not found in cookies, localStorage, or sessionStorage"
        );
        return;
      }

      try {
        const decoded = jwtDecode(token);
        console.log("decoded-=-=---=-", decoded)
        setDecodedToken(decoded);
      } catch (error) {
        console.error(`Error decoding token:`, error);
        setDecodedToken(null);
      }
    };

    decodeToken();
  }, []);

  const societyId = decodedToken?.societyData?.selectSociety;

  return { decodedToken, societyId };
};

export default UseDecodeToken;
