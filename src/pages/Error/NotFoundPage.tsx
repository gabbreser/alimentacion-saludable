import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const NotFoundPage = (): JSX.Element => {
  const error = useRouteError();
  console.error(error);
  let message = "";
  if (isRouteErrorResponse(error)) {
    message = error?.statusText || error?.data.message;
  } else if (error instanceof Error) {
    message = error?.message;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
};

export default NotFoundPage;
