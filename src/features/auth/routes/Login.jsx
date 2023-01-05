import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <Layout title="Login" size="sm">
      <form className="flex flex-col" onSubmit={handleLogin}>
        <Input
          label="Email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <div className="flex justify-center py-5 w-full">
          <Button text="Login" />
        </div>
      </form>
    </Layout>
  );
};
