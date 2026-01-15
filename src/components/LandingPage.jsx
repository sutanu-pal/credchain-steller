import React from 'react';
import { CheckCircle, Shield, Wallet, FileCheck, ArrowRight } from 'lucide-react';

const LandingPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            CredChain
          </h1>
          <p className="text-2xl text-blue-200 mb-4">
            On-Chain Credential Verification on Stellar
          </p>
          <p className="text-xl text-slate-300 mb-12">
            Issue. Own. Verify credentials instantly.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setCurrentPage('issuer')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              Issue Credential <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentPage('verify')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              Verify Credential <CheckCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <FileCheck className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Issue Credentials</h3>
            <p className="text-slate-300">
              Create and issue verifiable credentials directly on the Stellar blockchain with immutable proof.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Wallet className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Store in Wallet</h3>
            <p className="text-slate-300">
              Credentials are stored securely in your Stellar wallet, giving you complete ownership and control.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Verify Instantly</h3>
            <p className="text-slate-300">
              Anyone can verify credentials in seconds using just a Stellar wallet address. No intermediaries needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;