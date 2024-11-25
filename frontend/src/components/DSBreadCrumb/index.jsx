import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

// Convert URL segments into a readable format
const formatTitle = (segment) => {
  return segment
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter
};

export const DSBreadCrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  // Generate breadcrumb items dynamically
  const breadcrumbData = [
    {
      title: "Home",
      href: "/",
    },
    ...pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return {
        title: formatTitle(snippet),
        href: index === pathSnippets.length - 1 ? undefined : url, // No link for the last segment
      };
    }),
  ];

  return (
    <Breadcrumb
      separator=">"
      items={breadcrumbData.map((item, index) => ({
        key: index,
        title: item.href ? (
          <Link to={item.href}>{item.title}</Link>
        ) : (
          item.title
        ),
      }))}
    />
  );
};
