import dotenv from "dotenv";
dotenv.config();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
export const profileCreationTestData = {
  userDetails: {
    name: "Stella Agbadu",
    age: "20",
    location: "lagos",
    Interests: "music",
    username: username,
    password: password,
  },
};
