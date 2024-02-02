export const REACT_APP_EXPRESS_SERVER_ORIGIN =
  process.env.REACT_APP_EXPRESS_SERVER_ORIGIN === undefined
    ? "https://localhost:4000"
    : process.env.REACT_APP_EXPRESS_SERVER_ORIGIN;

export const REACT_APP_REACT_SERVER_ORIGIN =
  process.env.REACT_APP_REACT_SERVER_ORIGIN === undefined
    ? "https://localhost:3006"
    : process.env.REACT_APP_REACT_SERVER_ORIGIN;
