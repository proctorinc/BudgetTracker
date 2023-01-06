import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";
import { Form } from "@/components/Form/Form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  return (
    <Layout title="Login" size="sm">
      <Form onSubmit={handleSubmit(login)}>
        <Input
          label="Email"
          type="text"
          placeholder="Email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          error={errors.password?.message}
        />
        <Button text="Login" />
      </Form>
    </Layout>
  );
};
