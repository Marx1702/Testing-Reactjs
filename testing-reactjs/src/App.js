import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RegistrationForm from "./Registration/RegistrationForm";

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="app bg-black min-h-screen">
        <h1 className="text-violet-light text-center text-3xl mt-10">
          Welcome
        </h1>
        <RegistrationForm />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
