import { Button } from "@/components/Elements/Button";
import { Loader } from "@/components/Elements/Loader";
import { usePlaidLink } from "react-plaid-link";
import { sendPublicTokenToServer } from "../api/sendPublicTokenToServer";
import useLinkToken from "../hooks/useLinkToken";

const LinkBankButton = () => {
  const { data, error, isLoading } = useLinkToken();

  const onSuccessfulLink = (public_token, metadata) => {
    sendPublicTokenToServer(public_token);
  };

  const { open, ready } = usePlaidLink({
    token: data?.link_token,
    onSuccess: onSuccessfulLink,
  });

  const isReadyToLink = ready && !isLoading;

  return (
    <Button text={"Add Account"} onClick={open} isLoading={!isReadyToLink} />
  );
};

export default LinkBankButton;
