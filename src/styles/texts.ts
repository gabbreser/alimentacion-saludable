import platform from "./platform";

type StyleProps = {
  headerTitleStyle: React.CSSProperties;
  textBodyLegend: React.CSSProperties;
  textButtonLegend: React.CSSProperties;
  textInputForm: React.CSSProperties;
  textCaption: React.CSSProperties;
  textDescription: React.CSSProperties;
};
/**
 * Estilos
 */
const textstyles: StyleProps = {
  headerTitleStyle: {
    color: "var(--color-white)",
    fontWeight: "600",
    fontSize: platform.fontSizes.HEADER,
    letterSpacing: "0.03em",
    appearance: "none",
    MozAppearance: "none",
    WebkitAppearance: "none",
    lineHeight: 1.5,
    textTransform: "capitalize",
    textDecoration: "none",
  },
  textInputForm: {
    color: "var(--color-lg-text)",
    fontWeight: "400",
    fontSize: platform.fontSizes.MEDIUM,
    letterSpacing: "0.03em",
    appearance: "none",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
  },
  textCaption: {
    fontWeight: "500",
    fontSize: platform.fontSizes.SMALL,
  },
  textBodyLegend: {
    color: "var(--color-lg-text)",
    fontWeight: "500",
    fontSize: platform.fontSizes.LARGE,
    letterSpacing: "0.03em",
    appearance: "none",
    MozAppearance: "none",
    WebkitAppearance: "none",
    lineHeight: 1.5,
    //textTransform: "capitalize",
    textDecoration: "none",
  },
  textButtonLegend: {
    color: "var(--color-text)",
    fontWeight: "600",
    fontSize: "0.75rem", // LARGE = 16
    letterSpacing: "0.03em",
    appearance: "none",
    MozAppearance: "none",
    WebkitAppearance: "none",
    lineHeight: 1.5,
    textTransform: "uppercase",
    textDecoration: "none",
  },
  textDescription: {
    color: "var(--color-text)",
    fontWeight: "600",
    fontSize: platform.fontSizes.TITLE,
    letterSpacing: "0.03em",
    appearance: "none",
    MozAppearance: "none",
    WebkitAppearance: "none",
    lineHeight: 1.5,
    textDecoration: "none",
  },
};

export default textstyles;
