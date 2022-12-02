export const mockAccountsTotalBalance = 1234567.89;

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
