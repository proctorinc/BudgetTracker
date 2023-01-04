export const mockAccountsTotalBalance = 1234567.89;

export const mockAccountId = "test-account-id-123";

export const mockAccount = {
  balances: {
    available: 1000000,
    current: 1000000,
    iso_currency_code: "USD",
    limit: null,
    unofficial_currency_code: null,
  },
  _id: "6386f736c50233ef04a985da",
  mask: "1234",
  name: "Test Bank Account",
  official_name: "Full Account Name",
  subtype: "savings",
  type: "depository",
};

export const mockCashAccounts = [
  {
    balances: {
      available: 200,
      current: 210,
      iso_currency_code: "USD",
      limit: null,
      unofficial_currency_code: null,
    },
    _id: "6386f736c50233ef04a985da",
    mask: "1111",
    name: "Plaid Saving",
    official_name: "Plaid Silver Standard 0.1% Interest Saving",
    subtype: "savings",
  },
];

export const mockCreditAccounts = [
  {
    balances: {
      available: null,
      current: 410,
      iso_currency_code: "USD",
      limit: 2000,
      unofficial_currency_code: null,
    },
    _id: "6386f736c50233ef04a985ce",
    mask: "3333",
    name: "Plaid Credit Card",
    official_name: "Plaid Diamond 12.5% APR Interest Credit Card",
    subtype: "credit card",
  },
];

export const mockInvestmentAccounts = [
  {
    balances: {
      available: null,
      current: 320.76,
      iso_currency_code: "USD",
      limit: null,
      unofficial_currency_code: null,
    },
    _id: "6386f736c50233ef04a985d0",
    mask: "5555",
    name: "Plaid IRA",
    official_name: null,
    subtype: "ira",
  },
];

export const mockLoanAccounts = [
  {
    balances: {
      available: null,
      current: 56302.06,
      iso_currency_code: "USD",
      limit: null,
      unofficial_currency_code: null,
    },
    _id: "6386f736c50233ef04a985d6",
    mask: "8888",
    name: "Plaid Mortgage",
    official_name: null,
    subtype: "mortgage",
  },
];

export const mockAccountCategories = {
  total_balance: mockAccountsTotalBalance,
  categories: {
    cash: {
      subtotal: 150.01,
      accounts: [...mockCashAccounts],
    },
    credit: {
      subtotal: 23490.34,
      accounts: [...mockCreditAccounts],
    },
    investment: {
      subtotal: 2408.0,
      accounts: [...mockInvestmentAccounts],
    },
    loan: {
      subtotal: 234,
      accounts: [...mockLoanAccounts],
    },
  },
};
