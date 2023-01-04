import { accountHandlers } from "./mock_features/accounts";
import { fundHandlers } from "./mock_features/funds";
import { budgetHandlers } from "./mock_features/budgets";
import { transactionHandlers } from "./mock_features/transactions";
import { plaidHandlers } from "./mock_features/plaid";

export const handlers = [
  ...accountHandlers,
  ...fundHandlers,
  ...budgetHandlers,
  ...transactionHandlers,
  ...plaidHandlers,
];
