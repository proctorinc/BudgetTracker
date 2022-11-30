import { usePlaidLink } from "react-plaid-link";
import useLinkToken from "../../../hooks/useLinkToken";
import useUser from "../../../hooks/useUser";
import { sendPublicTokenToServer } from "../api/sendPublicTokenToServer";

const LinkBankButton = () => {
  const { user } = useUser();
  const { linkToken } = useLinkToken();
  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      sendPublicTokenToServer(public_token, user);
    },
  });

  const isReadyToLink = ready && linkToken != null;

  return (
    <button
      className="btn btn-primary"
      onClick={open}
      disabled={!isReadyToLink}
    >
      Connect a bank account
    </button>
  );
};

export default LinkBankButton;
