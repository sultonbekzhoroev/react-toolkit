import { useState, useContext } from "react";
import { GeneralAuthContext } from "./context/GeneralAuthContext";
import FormProducts from "./components/FormProducts";
import "./App.css";

function App() {
  const { signUpwithEmailAndPassword, user, logOut, loginWithWmail } =
    useContext(GeneralAuthContext);
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <div>
          <input
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            placeholder="type your email"
          />
          <input
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            placeholder="type your password"
          />
          <button
            onClick={() =>
              signUpwithEmailAndPassword(newUser.email, newUser.password)
            }
          >
            Register
          </button>
        </div>
        <div>
          <button onClick={() => logOut()}>Log Out{user?.email}</button>
        </div>
        <div>
          <h1>Log In</h1>
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
            placeholder="type your email"
          />
          <input
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            placeholder="type your password"
          />
          <button
            onClick={() => () =>
              loginWithWmail(loginUser.email, loginUser.password)}
          >
            Log in
          </button>
        </div>
      </header>
      <FormProducts />
    </div>
  );
}

export default App;
