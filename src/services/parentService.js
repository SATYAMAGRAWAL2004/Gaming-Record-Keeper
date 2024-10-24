import axios from "axios";

const API_URL = "http://localhost:8080/api/parents";

const setTimeLimit = async (token, timeLimit) => {
  await axios.put(
    `${API_URL}/set-time-limit`,
    { timeLimit },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const lockApp = async (token) => {
  await axios.post(
    `${API_URL}/lock`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const unlockApp = async (token) => {
  await axios.post(
    `${API_URL}/unlock`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export default { setTimeLimit, lockApp, unlockApp };
