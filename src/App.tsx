import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "./Pages/AuthorizationPage/AuthorizationPage";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("userToken") ? true : false
  );

  const login = (otpCode: string) => {
    localStorage.setItem("userToken", otpCode);
    setIsLogged(true);

    window.location.replace("/main");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizationPage login={login} />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
