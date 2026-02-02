import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const [showLogin, setShowLogin] = useState(true);

  if (loggedIn) return <Profile />;

  return (
    <div>
      {showLogin ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <Register setShowLogin={setShowLogin} />
      )}

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Go to Register" : "Go to Login"}
      </button>
    </div>
  );
}

export default App;
