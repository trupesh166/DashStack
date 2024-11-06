import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AdminAsideData } from "@/constants/";

export const Aside = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    const findMatchingItem = (data, path) => {
      for (const item of data) {
        if (item.key === path) {
          return item;
        }

        if (item.children) {
          const childMatch = findMatchingItem(item.children, path);
          if (childMatch) {
            return childMatch;
          }
        }
      }
      return null;
    };

    const matchingItem = findMatchingItem(AdminAsideData, location.pathname);

    if (matchingItem) {
      setCurrentPage(matchingItem.label.props.to);
    }
  }, [location.pathname]);

  return { currentPage };
};
