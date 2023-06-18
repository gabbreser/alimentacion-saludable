import { ButtonReactive } from "components/Button";
import { ViewForm } from "components/Container";
import { Pages } from "configuration/constants";
import { homeMessages, orderMessages } from "configuration/messages";
import React from "react";
import { useNavigate } from "react-router-dom";
import { textstyles } from "styles";

const HomePage = (): JSX.Element => {
  /** Navegacion */
  const navigate = useNavigate();
  return (
    <ViewForm
      style={{
        backgroundColor: "antiquewhite",
        marginInline: "0px",
        textAlignLast: "center",
      }}>
      <h1>{homeMessages.title}</h1>
      <p style={textstyles.textDescription}>{homeMessages.legend}</p>
      <ButtonReactive
        containerStyle={{ width: 200 }}
        content={orderMessages.access}
        color={"var(--color-lg-circle)"}
        onPress={() => navigate(`${Pages.ORDERSLISTPAGE}`)}
      />
    </ViewForm>
  );
};

export default HomePage;
