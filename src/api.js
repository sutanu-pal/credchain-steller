const API_BASE = "http://127.0.0.1:8000";

/* ISSUE CREDENTIAL */
export async function issueCredential(form) {
  const response = await fetch(`${API_BASE}/issue-credential`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      recipient_name: form.recipientName,
      recipient_wallet: form.recipientAddress,
      credential_title: form.credentialTitle,
      description: form.description,
      proof_url: form.proofUrl
    })
  });

  if (!response.ok) {
    throw new Error("Issue credential failed");
  }

  return await response.json();
}

/* VERIFY WALLET */
export async function verifyWallet(wallet) {
  const response = await fetch(`${API_BASE}/verify/${wallet}`);

  if (!response.ok) {
    throw new Error("Verification failed");
  }

  return await response.json();
}
