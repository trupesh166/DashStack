import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AdminAsideData, StyleGuideAsideMenu } from "@/constants/";

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

    const matchingItem =
      findMatchingItem(AdminAsideData, location.pathname) ||
      findMatchingItem(StyleGuideAsideMenu, location.pathname);

    if (matchingItem && matchingItem.label && matchingItem.label.props.to) {
      setCurrentPage(matchingItem.label.props.to);
    } else {
      setCurrentPage(location.pathname);
    }
  }, [location.pathname]);

  return { currentPage };
};
