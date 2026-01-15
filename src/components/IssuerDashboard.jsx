import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import Navigation from './Navigation';

const IssuerDashboard = ({ 
  setCurrentPage, 
  issueForm, 
  setIssueForm, 
  handleIssueCredential, 
  isLoading 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navigation setCurrentPage={setCurrentPage} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-white mb-3">Issue Credential</h2>
        <p className="text-slate-300 mb-8">Create and issue a verifiable credential on Stellar</p>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Recipient Name
              </label>
              <input
                type="text"
                value={issueForm.recipientName}
                onChange={(e) => setIssueForm({...issueForm, recipientName: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Recipient Stellar Wallet Address
              </label>
              <input
                type="text"
                value={issueForm.recipientAddress}
                onChange={(e) => setIssueForm({...issueForm, recipientAddress: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono text-sm"
                placeholder="GABC...XYZ7"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Credential Title
              </label>
              <input
                type="text"
                value={issueForm.credentialTitle}
                onChange={(e) => setIssueForm({...issueForm, credentialTitle: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Hackathon Winner"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Description
              </label>
              <textarea
                value={issueForm.description}
                onChange={(e) => setIssueForm({...issueForm, description: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Brief description of the credential..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Proof URL
              </label>
              <input
                type="text"
                value={issueForm.proofUrl}
                onChange={(e) => setIssueForm({...issueForm, proofUrl: e.target.value})}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="https://github.com/project or certificate link"
              />
            </div>

            <button
              onClick={handleIssueCredential}
              disabled={isLoading}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Issuing Credential...
                </>
              ) : (
                <>
                  Issue Credential
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuerDashboard;