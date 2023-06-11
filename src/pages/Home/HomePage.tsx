import { ButtonReactive } from "components/Button";
import { ViewForm } from "components/Container";
import { Pages } from "configuration/constants";
import React from "react";
import { useNavigate } from "react-router-dom";
import { textstyles } from "styles";

const HomePage = (): JSX.Element => {
  /** Navegacion */
  const navigate = useNavigate();
  return (
    <ViewForm
      style={{
        marginInline: "var(--generic-space-components)",
        textAlignLast: "center",
      }}>
      <h1>Bienvenidos</h1>
      <p style={textstyles.textDescription}>
        Disfruta de nuestras comidas saludables! te invitamos a realizar tu
        pedido, podes ver las opciones semanales{" "}
      </p>
      <ButtonReactive
        containerStyle={{ width: 200 }}
        content={"Pedidos"}
        color={"var(--color-lg-circle)"}
        onPress={() => navigate(`${Pages.ORDERSLISTPAGE}`)}
      />
    </ViewForm>
  );
};

export default HomePage;
