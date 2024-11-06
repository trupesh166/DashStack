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
            itemBg: "var(--clr-white)",
            itemColor: "var(--clr-gray)",
            itemHoverColor: "var(--clr-white)",
            itemSelectedColor: "var(--clr-white)",
            iconMarginInlineEnd: "var(--space-lg)",
            iconSize: "var(--space-2xl)",
            itemHeight: 50,
            fontSize: "var(--text-sm)",
            margin: "var(--space-md)",
            padding: "var(--space-lg)",
            motionEaseOut: "linear",
            motionEaseOutCirc: "linear",
            motionEaseOutQuint: "linear",
            motionDurationSlow: "1",
          },
          Button: {},
          Breadcrumb: {},
          Pagination: {},
          Input: {
            colorBorder: "rgb(211,211,211)",
            colorError: "rgb(231,76,60)",
            colorErrorText: "rgb(231,76,60)",
            activeBorderColor: "rgb(86,120,233)",
            hoverBorderColor: "rgb(86,120,233)",
            colorBgContainer: "rgb(255,255,255)",
            colorBorder: "rgb(211,211,211)",
            colorError: "rgb(231,76,60)",
            colorIcon: "rgb(32,34,36)",
            colorText: "rgb(32,34,36)",
            borderRadius: 10,
            paddingBlock: 12,
            inputFontSize: 14,
            paddingInline: 14,
            controlHeight: 42,
            lineHeight: 1.5,
          },
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
