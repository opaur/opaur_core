import { Metadata } from "next";
import SignInClient from "./page.client";

export const metadata: Metadata = {
  title:
    "Opaur - Build Your Brand Aura",
  description: "Opaur - Build Your Brand Aura",
};

const SignIn: React.FC = () => {
  return (    
      <SignInClient />    
  );
};

export default SignIn;
