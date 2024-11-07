import { ConfigProvider } from "antd";

const ThemeConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "var(--font-primary)",
          colorPrimary: "rgba(231, 76, 60,1)",
          colorInfo: "#f09619",
          colorSuccess: "#39973d",
          colorWarning: "#ffc313",
          colorError: "#e74c3c",
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
          Button: {
            defaultBg: "var(--clr-foundation)",
            defaultBorderColor: "rgb(246,248,251)",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 18,
            lineWidth: 1.5,
            controlHeight: 50,
            paddingInline: 14,
            paddingBlock: 14,
            onlyIconSize: 24,
            contentFontSize: 18,
            colorError: "var(--clr-primary)",
            colorErrorBg: "var(--clr-primary)",
            defaultActiveBorderColor: "rgb(254,81,46)",
            defaultActiveColor: "rgb(254,81,46)",
            defaultColor: "rgb(32,34,36)",
            defaultHoverBg: "var(--clr-white)",
            defaultHoverBorderColor: "var(--clr-dark)",
            defaultHoverColor: "var(--clr-dark)",
            linkHoverBg: "rgb(246,248,251)",
            colorLink: "var(--clr-primary)",
            colorLinkActive: "rgb(254,81,46)",
            colorLinkHover: "rgb(254,81,46)",
            borderColorDisabled: "rgb(211,211,211)",
            colorBgContainerDisabled: "rgb(246,248,251)",
            colorTextDisabled: "rgb(167,167,167)",
            colorPrimary: "rgb(231,76,60)",
            colorPrimaryHover: "rgba(231,77,60,0.78)",
            colorPrimaryActive: "rgba(231,77,60,0.6392156862745098)",
          },
          Input: {
            colorBorder: "rgb(211,211,211)",
            colorError: "var(--clr-primary)",
            colorErrorText: "var(--clr-primary)",
            activeBorderColor: "rgb(86,120,233)",
            hoverBorderColor: "rgb(86,120,233)",
            colorBgContainer: "rgb(255,255,255)",
            colorBorder: "rgb(211,211,211)",
            colorError: "var(--clr-primary)",
            colorIcon: "rgb(32,34,36)",
            colorText: "rgb(32,34,36)",
            borderRadius: 10,
            paddingBlock: 12,
            inputFontSize: 14,
            paddingInline: 14,
            controlHeight: 42,
            lineHeight: 1.5,
          },
          Breadcrumb: {},
          Pagination: {},
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
