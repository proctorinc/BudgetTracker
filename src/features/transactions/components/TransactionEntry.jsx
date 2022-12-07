const TransactionEntry = ({ transaction }) => {
  return (
    <div className="flex border border-gray-600 px-4 py-3 rounded-lg">
      <div>
        <p className="text-xl">{transaction.name}</p>
      </div>
      <div className="flex justify-end flex-grow">
        <p className="text-xl">{transaction.category[0]}</p>
        <p className="text-xl">{transaction.date}</p>
        <p className="text-xl">{formatCurrency(transaction.amount)}</p>
      </div>
    </div>
  );
};

export default TransactionEntry;
