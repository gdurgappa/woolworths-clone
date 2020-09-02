import React from "react";
import { useActiveScreensize } from "../../shared/hooks/useActiveScreensize";
import HeaderCartArea from "./HeaderCartArea";
import HeaderCartButton from "./HeaderCartButton";

const Login = () => {
  const screenSize = useActiveScreensize();
  return screenSize === "lg" ? <HeaderCartArea /> : <HeaderCartButton />;
};

export default Login;
