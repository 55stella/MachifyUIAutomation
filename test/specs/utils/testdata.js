import dotenv from "dotenv";
dotenv.config();
const username = process.env.username;
const password = process.env.password;
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
