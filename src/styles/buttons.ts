type StyleProps = {
  buttonDefault: React.CSSProperties;
};

/**
 * Estilos del Boton
 */
const buttonStyles: StyleProps = {
  buttonDefault: {
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    //display: "-webkit-inline-box",
    //display: "-webkit-inline-flex",
    //display: "-ms-inline-flexbox",
    alignItems: "center",
    //-webkit-align-items: center;
    //-webkit-box-align: center;
    //-ms-flex-align: center;
    //-webkit-box-pack: center;
    //-ms-flex-pack: center;
    WebkitAlignItems: "center",
    justifyContent: "center",
    WebkitJustifyContent: "center",
    //-webkit-justify-content: center;
    boxSizing: "border-box",
    MozBoxSizing: "border-box",
    WebkitBoxSizing: "border-box",
    height: "var(--button-height)",
    flex: 1,
    borderRadius:
      "2rem" /* calc(var(--button-height) / 2) - Ambas son lo mismo o incluso 50% */,

    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.25)",
    transition: "all 0.3s ease",
  },
};

export default buttonStyles;
