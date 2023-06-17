import React from "react";
import orders from "configuration/orders";
import { ButtonReactive } from "components/Button";

const OrdersListPage = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1>Hacenos tus pedidos!</h1>
      {orders.map((item, index) => (
        <div className="order-card" key={`${index}${item.title}`}>
          <img src={item.source} />
          <div className="order-body">
            <div>
              <span className="order-header">{item.title}</span>
              <p className="order-description">{item.text}</p>
            </div>
            <div className="order-card-buttoner">
              <ButtonReactive
                containerStyle={{ minWidth: 200 }}
                content={"Encargar"}
                color={"var(--color-lg-circle)"}
                onPress={() => console.log()}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersListPage;
