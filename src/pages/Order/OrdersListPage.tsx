import React, { CSSProperties } from "react";
import { weeklyDishies } from "configuration/orders";
import { ButtonReactive } from "components/Button";
import { useNavigate } from "react-router-dom";
import { orderMessages } from "configuration/messages";
import { textstyles } from "styles";
import { contactData } from "configuration/constants";

const OrdersListPage = (): JSX.Element => {
  /** Navegacion */
  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  const letterStyle: CSSProperties = {
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "600",
    color: "var(--color-title)",
    marginBlockEnd: 0,
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1 style={{ ...letterStyle }}>{orderMessages.title}</h1>
      <p style={{ ...textstyles.textDescription }}>{orderMessages.legend}</p>
      <span
        style={{
          backgroundColor: "var(--color-text-bg)",
          paddingTop: 10,
          paddingBottom: 10,
          paddingInline: 40,
          borderRadius: 8,
          fontWeight: 500,
          color: "var(--color-title)",
          letterSpacing: "3px",
        }}>
        5 PLATOS $ 4.500
      </span>
      <div className="order-card-buttoner">
        <h4>Pedir!</h4>
        <div>
          <a
            href={contactData.instagram}
            target="_blank"
            aria-label="Pedir por Instagram"
            className="btn-order"
            title="Pedir por Instagram"
            style={{ background: "var(--color-instagram)" }}
            rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
          <a
            href={contactData.whatsapp(`Hola me gustaría encargar`)}
            target="_blank"
            className="btn-order"
            title="Pedir por WhatsApp"
            style={{ backgroundColor: "var(--color-whatsapp)" }}
            aria-label="Pedir por WhatsApp"
            rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="300 -476.1 1792 1792">
              <path d="M1413 497.9c8.7 0 41.2 14.7 97.5 44s86.2 47 89.5 53c1.3 3.3 2 8.3 2 15 0 22-5.7 47.3-17 76-10.7 26-34.3 47.8-71 65.5s-70.7 26.5-102 26.5c-38 0-101.3-20.7-190-62-65.3-30-122-69.3-170-118s-97.3-110.3-148-185c-48-71.3-71.7-136-71-194v-8c2-60.7 26.7-113.3 74-158 16-14.7 33.3-22 52-22 4 0 10 .5 18 1.5s14.3 1.5 19 1.5c12.7 0 21.5 2.2 26.5 6.5s10.2 13.5 15.5 27.5c5.3 13.3 16.3 42.7 33 88s25 70.3 25 75c0 14-11.5 33.2-34.5 57.5s-34.5 39.8-34.5 46.5c0 4.7 1.7 9.7 5 15 22.7 48.7 56.7 94.3 102 137 37.3 35.3 87.7 69 151 101a44 44 0 0 0 22 7c10 0 28-16.2 54-48.5s43.3-48.5 52-48.5zm-203 530c84.7 0 165.8-16.7 243.5-50s144.5-78 200.5-134 100.7-122.8 134-200.5 50-158.8 50-243.5-16.7-165.8-50-243.5-78-144.5-134-200.5-122.8-100.7-200.5-134-158.8-50-243.5-50-165.8 16.7-243.5 50-144.5 78-200.5 134S665.3 78.7 632 156.4s-50 158.8-50 243.5a611 611 0 0 0 120 368l-79 233 242-77a615 615 0 0 0 345 104zm0-1382c102 0 199.5 20 292.5 60s173.2 93.7 240.5 161 121 147.5 161 240.5 60 190.5 60 292.5-20 199.5-60 292.5-93.7 173.2-161 240.5-147.5 121-240.5 161-190.5 60-292.5 60a742 742 0 0 1-365-94l-417 134 136-405a736 736 0 0 1-108-389c0-102 20-199.5 60-292.5s93.7-173.2 161-240.5 147.5-121 240.5-161 190.5-60 292.5-60z"></path>
            </svg>
          </a>
        </div>
      </div>
      {weeklyDishies.map((item, index) => (
        <div key={`${index}${item.title}`} style={{ width: "80%" }}>
          <h2 style={{ ...letterStyle }}>{item.title}</h2>
          <div>
            {item.dishies.map((dish) => (
              <p
                key={dish}
                style={{ fontSize: 22 }}
                className="order-description">
                {dish}
              </p>
            ))}
          </div>
        </div>
      ))}
      {/*
        orders.map((item, index) => (
        <div className="order-card" key={`${index}${item.title}`}>
          <img src={item.source} />
          <div className="order-body">
            <div>
              <span className="order-header">{item.title}</span>
              <p className="order-description">{item.text}</p>
            </div>
            <div className="order-card-buttoner">
              <h4>Pedir!</h4>
              <div>
                <a
                  href={contactData.instagram}
                  target="_blank"
                  aria-label="Pedir por Instagram"
                  className="btn-order"
                  title="Pedir por Instagram"
                  style={{ background: "var(--color-instagram)" }}
                  rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a
                  href={contactData.whatsapp(
                    `Hola me gustaría encargar "${item.title}"`,
                  )}
                  target="_blank"
                  className="btn-order"
                  title="Pedir por WhatsApp"
                  style={{ backgroundColor: "var(--color-whatsapp)" }}
                  aria-label="Pedir por WhatsApp"
                  rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="300 -476.1 1792 1792">
                    <path d="M1413 497.9c8.7 0 41.2 14.7 97.5 44s86.2 47 89.5 53c1.3 3.3 2 8.3 2 15 0 22-5.7 47.3-17 76-10.7 26-34.3 47.8-71 65.5s-70.7 26.5-102 26.5c-38 0-101.3-20.7-190-62-65.3-30-122-69.3-170-118s-97.3-110.3-148-185c-48-71.3-71.7-136-71-194v-8c2-60.7 26.7-113.3 74-158 16-14.7 33.3-22 52-22 4 0 10 .5 18 1.5s14.3 1.5 19 1.5c12.7 0 21.5 2.2 26.5 6.5s10.2 13.5 15.5 27.5c5.3 13.3 16.3 42.7 33 88s25 70.3 25 75c0 14-11.5 33.2-34.5 57.5s-34.5 39.8-34.5 46.5c0 4.7 1.7 9.7 5 15 22.7 48.7 56.7 94.3 102 137 37.3 35.3 87.7 69 151 101a44 44 0 0 0 22 7c10 0 28-16.2 54-48.5s43.3-48.5 52-48.5zm-203 530c84.7 0 165.8-16.7 243.5-50s144.5-78 200.5-134 100.7-122.8 134-200.5 50-158.8 50-243.5-16.7-165.8-50-243.5-78-144.5-134-200.5-122.8-100.7-200.5-134-158.8-50-243.5-50-165.8 16.7-243.5 50-144.5 78-200.5 134S665.3 78.7 632 156.4s-50 158.8-50 243.5a611 611 0 0 0 120 368l-79 233 242-77a615 615 0 0 0 345 104zm0-1382c102 0 199.5 20 292.5 60s173.2 93.7 240.5 161 121 147.5 161 240.5 60 190.5 60 292.5-20 199.5-60 292.5-93.7 173.2-161 240.5-147.5 121-240.5 161-190.5 60-292.5 60a742 742 0 0 1-365-94l-417 134 136-405a736 736 0 0 1-108-389c0-102 20-199.5 60-292.5s93.7-173.2 161-240.5 147.5-121 240.5-161 190.5-60 292.5-60z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))
      */}
    </div>
  );
};

export default OrdersListPage;
