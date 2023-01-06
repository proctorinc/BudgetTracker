import { Button } from "@/components/Elements/Button";
import { Input } from "@/components/Form/Input";
import { Layout } from "@/components/Layout";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    // Do login stuff

    navigate("/login");
  };

  return (
    <Layout title="Sign Up" size="sm">
      <form className="flex flex-col" onSubmit={handleSignUp}>
        <Input label="Email" type="text" placeholder="Email" />
        <Input label="Password" type="password" placeholder="Password" />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
        />
        <div className="flex justify-center py-5 w-full">
          <Button text="Login" />
        </div>
      </form>
    </Layout>
  );
};
