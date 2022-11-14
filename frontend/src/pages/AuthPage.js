import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import AuthRight from "../components/Auth/AuthRight";

const AuthPage = () => {
  return (
    <div className="container-fluid vh-100 p-0">
      <div className="d-flex h-100">
        <AuthForm />
        <AuthRight />
      </div>
    </div>
  );
};

export default AuthPage;
