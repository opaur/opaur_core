import { Metadata } from "next";
import SignUpClient from "./page.client";

export const metadata: Metadata = {
  title:
    "Opaur - Build Your Brand Aura",
  description: "Opaur - Build Your Brand Aura",
};

const SignUp: React.FC = () => {
  return (    
      <SignUpClient />    
  );
};

export default SignUp;
