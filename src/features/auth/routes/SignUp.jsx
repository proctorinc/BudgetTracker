import { useForm } from "react-hook-form";

import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import { Form } from "@/components/Form/Form";
import useAuth from "@/features/auth/hooks/useAuth";

export const SignUp = () => {
  const form = useForm();
  const { signUp } = useAuth();

  return (
    <Layout title="Sign Up" size="sm">
      <Form onSubmit={signUp} form={form}>
        <Input label="Email" id="email" type="email" form={form} />
        <Input label="Password" id="password" type="password" form={form} />
        <Input
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          form={form}
          match="password"
        />
        <Button text="Sign Up" />
      </Form>
    </Layout>
  );
};
