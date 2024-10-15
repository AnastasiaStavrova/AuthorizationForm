import { useState } from "react";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("userToken") ? true : false
  );

  const login = (otpCode: string) => {
    localStorage.setItem("userToken", otpCode);
    setIsLogged(true);
    console.log("Yes");
  };

  return (
    <>
      <AuthForm login={login} />
    </>
  );
}

export default App;
