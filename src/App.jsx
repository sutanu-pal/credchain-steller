import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import IssuerDashboard from "./components/IssuerDashboard";
import CredentialVault from "./components/CredentialVault";
import VerificationPage from "./components/VerificationPage";
import { CheckCircle, Wallet } from "lucide-react";
import { issueCredential, verifyWallet } from "./api";

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [connectedWallet, setConnectedWallet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verifyAddress, setVerifyAddress] = useState("");
  const [verifiedCreds, setVerifiedCreds] = useState(null);
  const [toast, setToast] = useState(null);

  const [issueForm, setIssueForm] = useState({
    recipientName: "",
    recipientAddress: "",
    credentialTitle: "",
    description: "",
    proofUrl: ""
  });

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  /* ============================
     CONNECT WALLET (PUBLIC KEY)
  ============================ */
  const connectWallet = () => {
    const wallet = prompt("Enter your Stellar PUBLIC key (starts with G)");

    if (!wallet || !wallet.startsWith("G")) {
      showToast("Invalid Stellar public key", "error");
      return;
    }

    setConnectedWallet(wallet);
    showToast("Wallet connected");
  };

  /* ============================
     ISSUE CREDENTIAL → BACKEND
  ============================ */
  const handleIssueCredential = async () => {
    if (!issueForm.recipientAddress.startsWith("G")) {
      showToast("Invalid recipient wallet", "error");
      return;
    }

    if (!issueForm.credentialTitle) {
      showToast("Credential title required", "error");
      return;
    }

    try {
      setIsLoading(true);

      // ✅ PASS issueForm DIRECTLY
      const result = await issueCredential(issueForm);

      showToast(`Issued! TX: ${result.transaction_hash}`);

      setIssueForm({
        recipientName: "",
        recipientAddress: "",
        credentialTitle: "",
        description: "",
        proofUrl: ""
      });
    } catch (err) {
      showToast("Issuing failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  /* ============================
     VERIFY WALLET → BACKEND
  ============================ */
  const handleVerifyCredential = async () => {
    if (!verifyAddress.startsWith("G")) {
      showToast("Invalid wallet address", "error");
      return;
    }

    try {
      setIsLoading(true);
      const data = await verifyWallet(verifyAddress);
      setVerifiedCreds(data.credentials);
    } catch (err) {
      showToast("Verification failed", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {currentPage === "landing" && (
        <LandingPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "issuer" && (
        <IssuerDashboard
          setCurrentPage={setCurrentPage}
          issueForm={issueForm}
          setIssueForm={setIssueForm}
          handleIssueCredential={handleIssueCredential}
          isLoading={isLoading}
        />
      )}

      {currentPage === "vault" && (
        <CredentialVault
          setCurrentPage={setCurrentPage}
          connectedWallet={connectedWallet}
          connectWallet={connectWallet}
          isLoading={isLoading}
        />
      )}

      {currentPage === "verify" && (
        <VerificationPage
          setCurrentPage={setCurrentPage}
          verifyAddress={verifyAddress}
          setVerifyAddress={setVerifyAddress}
          handleVerifyCredential={handleVerifyCredential}
          verifiedCreds={verifiedCreds}
          isLoading={isLoading}
        />
      )}

      {currentPage === "landing" && (
        <button
          onClick={() => setCurrentPage("vault")}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
        >
          <Wallet className="w-5 h-5" />
          My Vault
        </button>
      )}

      {toast && (
        <div
          className={`fixed top-8 right-8 ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3`}
        >
          <CheckCircle className="w-5 h-5" />
          <p>{toast.message}</p>
        </div>
      )}
    </div>
  );
};

export default App;
