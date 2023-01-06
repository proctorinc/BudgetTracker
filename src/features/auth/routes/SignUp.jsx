import { useState } from "react";

import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";

import useAuth from "../hooks/useAuth";
import { Form } from "@/components/Form/Form";

export const SignUp = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    signUp({ email, password, confirmPassword });
  };

  return (
    <Layout title="Sign Up" size="sm">
      <Form onSubmit={handleSignUp}>
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
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        <Button text="Sign Up" />
      </Form>
    </Layout>
  );
};
