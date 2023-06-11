import { ImageProps } from "interfaces/buttons";
import React, { useEffect, useRef, useState } from "react";
import { buttonStyles, platform, textstyles } from "styles";

type Props = {
  containerStyle: React.CSSProperties;
  content: JSX.Element | string;
  subtitle: string;
  icon: Partial<ImageProps>;
  inverse: boolean;
  disabled: boolean;
  onPress: <T>(a: T) => T | Promise<T> | void | Promise<void>;
  color: string;
  testID?: string;
};

/**
 * Componente de Boton Pildora
 * @param {React.CSSProperties} containerStyle Estilo para el boton
 * @param {JSX.Element | string} content Texto o contenido de tipo <Text />
 * @param {string} subtitle Texto debajo del principal
 * @param {ImageProps} icon Label del icono o Componente <Icon />
 * @param {boolean} inverse Indica si es tipo inverso
 * @param {boolean} disabled Indica si esta deshabilitado
 * @param {Function} onPress Funcion al presionar el boton
 * @param {string} color Color principal para aplicar
 * @param {string} testID
 */
const ButtonHighlight = (props: Partial<Props>) => {
  const {
    content,
    subtitle,
    icon,
    inverse,
    disabled,
    color,
    containerStyle,
    testID,
    onPress,
  } = props;
  return (
    <a>
      <span>aa</span>
    </a>
  );
};

export default ButtonHighlight;
