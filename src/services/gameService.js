import axios from "axios";

const API_URL = "http://localhost:8080/api/games";

const getGameSessions = async (token) => {
  const { data } = await axios.get(`${API_URL}/sessions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const startGame = async (token) => {
  await axios.post(
    `${API_URL}/start`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const stopGame = async (token) => {
  await axios.post(
    `${API_URL}/stop`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export default { getGameSessions, startGame, stopGame };
