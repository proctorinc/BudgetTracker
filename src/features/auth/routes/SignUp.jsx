import { useRef } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { FormLayout } from "@/components/Layout";
import { Form } from "@/components/Form/Form";
import useAuth from "@/features/auth/hooks/useAuth";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { signUp, error } = useAuth();
  const password = useRef({});

  password.current = watch("password");

  return (
    <FormLayout title="Sign Up">
      <Form onSubmit={handleSubmit(signUp)} error={error}>
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
        <Input
          label="Confirm Password"
          type="password"
          register={register("confirmPassword", {
            required: "Confirm Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: (value) =>
              value === password.current || "Passwords must match",
          })}
          error={errors.confirmPassword?.message}
        />
        <Button text="Sign Up" className="mt-3" />
      </Form>
    </FormLayout>
  );
};
