import React from "react";
import { CheckCircle, Loader2, ExternalLink } from "lucide-react";
import Navigation from "./Navigation";

const VerificationPage = ({
  setCurrentPage,
  verifyAddress,
  setVerifyAddress,
  handleVerifyCredential,
  verifiedCreds,
  isLoading,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navigation setCurrentPage={setCurrentPage} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-3">
          Verify Credentials
        </h2>
        <p className="text-slate-300 mb-8">
          Instantly verify credentials using a Stellar wallet address
        </p>

        {/* INPUT */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-10">
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Stellar Wallet Address
          </label>

          <div className="flex gap-3 flex-wrap">
            <input
              type="text"
              value={verifyAddress}
              onChange={(e) => setVerifyAddress(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono"
              placeholder="GABC...XYZ"
            />

            <button
              onClick={handleVerifyCredential}
              disabled={isLoading || !verifyAddress}
              className="bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  Verify
                  <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* RESULTS */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          Verification Results
        </h3>

        {!verifiedCreds || verifiedCreds.length === 0 ? (
          <p className="text-slate-400">
            No credentials found for this wallet.
          </p>
        ) : (
          <div className="space-y-4">
            {verifiedCreds.map((cred, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-500/30"
              >
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Credential: {cred.asset_code}
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Issuer:{" "}
                      <span className="font-mono break-all">
                        {cred.issuer}
                      </span>
                    </p>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Verified on Stellar
                  </div>
                </div>

                {cred.ipfs && (
                  <a
                    href={`https://ipfs.io/ipfs/${cred.ipfs}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors mt-2"
                  >
                    View Proof on IPFS
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationPage;
