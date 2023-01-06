import { useState } from "react";

import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";
import { Form } from "@/components/Form/Form";

export const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <Layout title="Login" size="sm">
      <Form onSubmit={handleLogin}>
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
        <Button text="Login" />
      </Form>
    </Layout>
  );
};
