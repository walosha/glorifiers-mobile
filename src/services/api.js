export const IS_PROD = process.env.NODE_ENV === "production";
console.log(IS_PROD);

export const SERVER_URL = IS_PROD
  ? // In production we want to redirect to /whatever
    ``
  : // In development we gotta redirect to localhost:3001/whatever tho
    "http://localhost:4040";

export const CLIENT_URL = IS_PROD
  ? `${window.location.protocol}//${window.location.host}`
  : "http://localhost:3000";
