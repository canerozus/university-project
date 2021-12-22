import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const { loggedIn } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route
            path="/login"
            element={loggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/"
            element={
              <RequireAuth loggedIn={loggedIn}>
                <Navbar />
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

function RequireAuth({ children, loggedIn }) {
  console.log(loggedIn);

  if (!loggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" />;
  }

  return children;
}
