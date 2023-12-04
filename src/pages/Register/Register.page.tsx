import React from "react";
import { AuthenticationForm } from "../../components";

export const Register: React.FC = () => {
  return (
    <div>
      <AuthenticationForm isLoggin={false} />
    </div>
  );
};
