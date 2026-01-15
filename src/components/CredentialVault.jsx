import React from 'react';
import { CheckCircle, Wallet, Loader2, ExternalLink, Award, Calendar, User } from 'lucide-react';
import Navigation from './Navigation';

const CredentialVault = ({ 
  setCurrentPage, 
  connectedWallet, 
  connectWallet, 
  credentials, 
  isLoading 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navigation setCurrentPage={setCurrentPage} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-3">My Credentials</h2>
        <p className="text-slate-300 mb-8">View and manage your verifiable credentials</p>

        {!connectedWallet ? (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/10 text-center">
            <Wallet className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Connect Your Wallet</h3>
            <p className="text-slate-300 mb-6">Connect your Stellar wallet to view your credentials</p>
            <button
              onClick={connectWallet}
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Wallet className="w-5 h-5" />
                  Connect Wallet
                </>
              )}
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-sm text-slate-400">Connected Wallet</p>
                  <p className="text-white font-mono text-lg">{connectedWallet}</p>
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
                <p className="text-slate-300">Loading credentials...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {credentials.map((cred) => (
                  <div key={cred.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <Award className="w-10 h-10 text-blue-400" />
                      {cred.verified && (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          Verified
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">{cred.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-slate-300">
                        <User className="w-4 h-4" />
                        <span className="text-sm">Issued by {cred.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{cred.issueDate}</span>
                      </div>
                    </div>

                    <a
                      href={cred.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                    >
                      View Proof
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CredentialVault;