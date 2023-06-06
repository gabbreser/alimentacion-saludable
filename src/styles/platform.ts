/**
 * Estilos genericos
 */
const platform = {
  generic: {
    borderWidth: "var(--generic-border-width)",
    borderRadius: "var(--generic-border-radius)",
    borderToSpace: 8,
    paddingSpaces: "var(--generic-space-components)",
    containerSpaces: "var(--generic-space-container)",
    height: "var(--form-control-body-height)",
  },
  fontSizes: {
    SMALL: "calc(var(--font-size-SMALL) + 0px)",
    MEDIUM: "calc(var(--font-size-MEDIUM) + 0px)",
    LARGE: "calc(var(--font-size-LARGE) + 0px)",
    HEADER: "calc(var(--font-size-HEADER) + 0px)",
    TITLE: "calc(var(--font-size-TITLE) + 0px)",
    ICON: "calc(var(--font-size-ICON) + 0px)",
  },
  colors: {
    primary: "#00BAA4", // '#1abc9c', // Turguoise   // original '#5BC8AC',
    primaryStatus: "#008b6e", //'#39ac8f',
    secondary: "#98DBC6",
    tertiary: "#E6D72A",
    quaternary: "#9958da",
    underlayColor: "rgba(40, 40, 40, 0.5)",
    text: "#5f6368", //'#5A5A5A',
    icon: "#5A5A5A",
    formPrimaryBG: "#FFF",
    formSecondaryBG: "#F2F2F2",
    listBackground: "#eeeeee",
    listBackgroundLigher: "#f6f6f6",
    primaryDisableBackground: "#E9E9E9",
    primaryDisableText: "#9197AE",
    secondaryDisableBackground: "#F5F5F5",
    secondaryDisableText: "#CECECE",
    border: "rgba(0, 0, 0, 0.16)",
    borderContainer: "#E7E7EF",
    borderButton: "#ebebeb",
    placeholder: "#9197AE",
    black: "#2C2C2C",
    white: "#FFFFFF",
    expenseAmount: "#F44336",
    incomeAmount: "#5BC8AC",
    transferAmount: "rgba(3, 169, 244, 0.6)",
    disabled: "#E9E9E9",
    error: "#93001A",
    warning: "#E1980A",
    success: "#34a853", // '#08DAC1',
  },
};

export default platform;
