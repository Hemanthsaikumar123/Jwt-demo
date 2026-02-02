import { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";

function Profile() {
  const [user, setUser] = useState(null);

const fetchProfile = async () => {
  try {
    const res = await api.get(
      "/profile",
     
    );

    setUser(res.data);
  } catch (error) {
    // 🔴 HERE is where it goes
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }
};


  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
