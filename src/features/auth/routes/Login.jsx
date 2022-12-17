import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Do login stuff

    navigate("/home");
  };

  return (
    <Layout title="Login" size="xs">
      <form className="flex flex-col" onSubmit={handleLogin}>
        <Input label="Email" type="text" placeholder="Email" />
        <Input label="Password" type="password" placeholder="Password" />
        <div className="flex justify-center py-5 w-full">
          <Button text="Login" />
        </div>
      </form>
    </Layout>
  );
};
