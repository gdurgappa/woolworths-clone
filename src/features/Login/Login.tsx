import React from "react";
import { useActiveScreensize } from "../../shared/hooks/useActiveScreensize";
import LoginButton from "./LoginButton";
import LoginSignupButton from "./LoginSignupButton";

const Login = () => {
  const screenSize = useActiveScreensize();
  return screenSize === "lg" ? <LoginSignupButton /> : <LoginButton />;
};

export default Login;
