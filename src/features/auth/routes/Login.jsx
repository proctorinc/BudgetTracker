import { useForm } from "react-hook-form";

import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import useAuth from "@/features/auth/hooks/useAuth";
import { Form } from "@/components/Form/Form";

export const Login = () => {
  const form = useForm();
  const { login } = useAuth();

  return (
    <Layout title="Login" size="sm">
      <Form onSubmit={login} form={form}>
        <Input label="Email" id="email" type="email" form={form} />
        <Input label="Password" id="password" type="password" form={form} />
        <Button text="Login" />
      </Form>
    </Layout>
  );
};
