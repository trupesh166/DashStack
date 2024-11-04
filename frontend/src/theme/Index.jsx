import { ConfigProvider } from "antd";

const ThemeConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "var(--font-primary)",
          colorPrimary: "var(--clr-primary)",
          colorInfo: "var(--clr-secondary)",
          colorSuccess: "var(--clr-success)",
          colorWarning: "var(--clr-warning)",
          colorError: "var(--clr-danger)",
          colorBgBase: "var(--clr-pearl)",
          colorBgContainer: "var(--clr-pearl)",
          fontSize: "var(--text-xl)",
        },
        components: {
          Layout: {
            bodyBg: "#f0f5fb",
            headerBg: "var(--clr-white)",
            siderBg: "var(--clr-white)",
          },
          Menu: {
            // itemBg: "var(--clr-white)",
            // itemColor: "var(--clr-gray)",
            // itemHoverColor: "var(--clr-white)",
            // itemActiveBg: "rgba(var(--clr-primary-rgb),0.10)",
            // itemSelectedBg: "rgba(var(--clr-primary-rgb),0.050980392156862744)",
            // iconMarginInlineEnd: "var(--space-lg)",
            // iconSize: "var(--space-2xl)",
            // itemHeight: 50,
            // margin: "var(--space-md)",
            // padding: "var(--space-lg)",
          },
          Button: {},
          Breadcrumb: {},
          Pagination: {},
          Input: {},
          Checkbox: {},
          Table: {},
          Calendar: {},
          Tag: {},
          Modal: {},
          Tabs: {},
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
