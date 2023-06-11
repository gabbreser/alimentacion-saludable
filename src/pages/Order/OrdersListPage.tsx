import React from "react";
import orders from "configuration/orders";
import { OrderProps } from "interfaces/order";

const OrdersListPage = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1>Hacenos tus pedido!</h1>
      {orders.map((item, index) => (
        <div className="order-card" key={`${index}${item.title}`}>
          <img src={item.source} />
          <div className="order-body">
            <span className="order-header">{item.title}</span>
            <p className="order-description">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersListPage;
