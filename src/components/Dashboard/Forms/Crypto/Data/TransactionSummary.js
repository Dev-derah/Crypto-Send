const transactionSummary = [
  {
    senderDetails: {
      senderName: "johndoe",
      amountToSend: {
        value: 500.0,
        currency: "USDT",
      },
      recipientName: "Alice Smith",
      amountToReceive: {
        value: 9800000,
        currency: "NGN",
      },
    },
    receiverDetails: {
      receiverName: "Alice Smith",
      recipientBankAccount: "123456789",
      recipientBank: "WEMA Bank",
      transactionId: "987654321",
    },
    transactionInfo: {
      amountToSend: {
        value: 500,
        currency: "USD",
      },
      transactionSpeed: "Priority send",
      expectedDelivery: "10:00 PM GMT +1",
      transactionFee: {
        value: 5,
        currency: "USD",
      },
      totalCost: {
        value: 505,
        currency: "USD",
      },
    },
  },
];

export default transactionSummary