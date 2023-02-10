import { usePlaidLink } from "react-plaid-link";

import { Button } from "@/components/Elements/Button";

import { sendPublicTokenToServer } from "../api/sendPublicTokenToServer";
import useLinkToken from "../hooks/useLinkToken";

export const LinkBankButton = () => {
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
    <div className="flex justify-center p-5">
      <Button text="Add Account" onClick={open} isLoading={!isReadyToLink} />
    </div>
  );
};
