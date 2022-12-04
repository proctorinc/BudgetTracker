import { usePlaidLink } from "react-plaid-link";
import useLinkToken from "@/hooks/useLinkToken";
import { sendPublicTokenToServer } from "../api/sendPublicTokenToServer";

const LinkBankButton = () => {
  const { linkToken } = useLinkToken();

  const onSuccessfulLink = (public_token, metadata) => {
    const response = sendPublicTokenToServer(public_token);
    console.log(response);
  };

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onSuccessfulLink,
  });

  const isReadyToLink = ready || linkToken != null;

  return (
    <button className="btn" onClick={open} disabled={!isReadyToLink}>
      Connect a bank account
    </button>
  );
};

export default LinkBankButton;
