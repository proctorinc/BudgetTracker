import { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";

let USER = {
  id: "test-id-123",
  token: null,
};

const Link = () => {
  const [token, setToken] = useState(null);
  const [publicToken, setPublicToken] = useState(null);
  const [accounts, setAccounts] = useState([]);

  const { open, ready } = usePlaidLink({
    token: token,
    onSuccess: (public_token, metadata) => {
      console.log(`Public Token: ${public_token}`);
      handlePublicToken(public_token);
    },
  });

  const handlePublicToken = async (public_token) => {
    setPublicToken(public_token);
    console.log("Sending public token to server");
    sendPublicTokenToServer(public_token);
  };

  const sendPublicTokenToServer = async (public_token) => {
    console.log("Sending token to server");
    console.log(`Public Token: ${public_token}`);
    console.log(`User id: ${USER.id}`);
    const response = await fetch("http://localhost:4090/set_access_token ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: USER.id,
        public_token: public_token,
      }),
    });
    fetchAccounts();
    // fetchTransactions();
  };

  const fetchAccounts = async () => {
    console.log("Fetching accounts...");
    const response = await fetch("http://localhost:4090/accounts ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: USER.id }),
    });
    const { accounts } = await response.json();
    setAccounts(accounts);
    console.log(`Accounts: ${accounts}`);
  };

  const fetchTransactions = async () => {
    console.log("Fetching transactions...");
    const response = await fetch("http://localhost:4090/transactions/recent ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: USER.id }),
    });
    const { transactions } = await response.json();
    console.log(`Transactions: ${transactions}`);
  };

  useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch("http://localhost:4090/create_link_token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: USER.id }),
      });
      const { link_token } = await response.json();
      setToken(link_token);
      console.log(`Link Token: ${link_token}`);
    };
    createLinkToken();
  }, []);

  return (
    <div>
      <div>
        <h2>User: {USER.id}</h2>
        <h2>Token: {publicToken ? publicToken : "None"}</h2>
      </div>
      <button onClick={() => open()} disabled={!ready}>
        Connect a bank account
      </button>
      <div>
        {accounts &&
          accounts.map((account) => {
            return (
              <div key={account.account_id}>
                <h3>
                  {account.name} ({account.subtype})
                </h3>
                <p>{account.official_name}</p>
                <p>
                  Balance: ${account.balances.current}{" "}
                  {account.balances.iso_currency_code}
                </p>
                <p></p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Link;
