import { useState } from 'react';

function ATM() {
  const [message, setMessage] = useState("");
  const [account, setAccount] = useState({
    owner: "Radhika Kapoor",
    balance: 50000,
    pin: 1234,
    isLocked: false,
    transaction: 0
  });

  function handleDeposit() {
    if (account.isLocked) {
      setMessage("Account is locked 🔒");
      return;
    }
    setAccount(prev => ({
      ...prev,
      balance: prev.balance + 5000,
      transaction: prev.transaction + 1
    }));
    setMessage("Rs.5000 deposited ✅");
  }

  function handleWithdraw() {
    if (account.isLocked) {
      setMessage("Account is locked 🔒");
      return;
    }
    if (account.balance < 3000) {
      setMessage("Insufficient funds ❌");
      return;
    }
    setAccount(prev => ({
      ...prev,
      balance: prev.balance - 3000,
      transaction: prev.transaction + 1
    }));
    setMessage("Rs.3000 withdrawn ✅");
  }

  // ✅ Fix 2 — lock message add kiya
  function handleLock() {
    const newLocked = !account.isLocked;
    setAccount(prev => ({ ...prev, isLocked: newLocked }));
    setMessage(newLocked ? "Account locked 🔒" : "Account unlocked 🔓");
  }

  // ✅ Fix 1 — comma hata ke proper function banaya
  function handleReset() {
    setMessage("Account reset 🔄");
    setAccount(prev => ({ ...prev, balance: 50000, transaction: 0 }));
  }

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
      <h1>🏧 ATM Machine</h1>
      <p>Account Owner: {account.owner}</p>
      <p>Balance: Rs. {account.balance.toFixed(2)}</p>
      <p>Transactions: {account.transaction}</p>

      {/* ✅ Fix 3 — background color add kiya */}
      <p style={{
        backgroundColor: account.isLocked ? "#FEE2E2" : "#DCFCE7",
        color: account.isLocked ? "red" : "green",
        padding: "6px",
        borderRadius: "4px"
      }}>
        {account.isLocked ? "🔒 Account Locked" : "🔓 Account Active"}
      </p>

      <button onClick={handleDeposit}>Deposit Rs.5000 💰</button>
      <button onClick={handleWithdraw}>Withdraw Rs.3000 💸</button>
      <button onClick={handleLock}>
        {account.isLocked ? "Unlock Account 🔓" : "Lock Account 🔒"}
      </button>
      <button onClick={handleReset}>Reset 🔄</button>

      {message && (
        <p style={{
          backgroundColor: "#DBEAFE",
          padding: "10px",
          borderRadius: "5px",
          marginTop: "10px"
        }}>
          📢 {message}
        </p>
      )}
    </div>
  );
}

export default ATM;