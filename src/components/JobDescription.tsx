export default function JobDescription() {
  return (
    <div className="max-h-screen overflow-y-auto pr-4 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">🚀 Frontend Developer</h1>
        <p className="text-xl opacity-90">Fast Track Position</p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full">Remote-First</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">3-4 Weeks Timeline</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">$600-$1,000 USD</span>
        </div>
      </div>

      {/* The Opportunity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🎯 <span className="ml-2">The Opportunity</span>
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            We're building the next-generation <strong>B2B platform for promotional products</strong> in Latin America. 
            Think "Shopify meets custom manufacturing" - companies come to us to create branded merchandise for their teams and clients.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="font-medium text-yellow-800">The Challenge:</p>
            <p className="text-yellow-700 text-sm mt-1">
              We need to ship a complete frontend in record time. Our HTML mockups are ready, design system is implemented, 
              and backend APIs are documented. We need a <strong>React pro</strong> who can convert 25+ pages into a production-ready application.
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Build */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          📋 <span className="ml-2">What You'll Build</span>
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Frontend Client Portal (25 pages)</h3>
            <ul className="space-y-1 text-sm text-gray-600 ml-4">
              <li>🏠 <strong>Homepage</strong> with dynamic product categories</li>
              <li>📦 <strong>Product Catalog</strong> with advanced filtering (1,900+ products)</li>
              <li>🧮 <strong>Quotation system</strong> (like a shopping cart but without payment)</li>
              <li>🧮 <strong>Real-time Pricing Calculator</strong> with complex algorithms</li>
              <li>👤 <strong>User Dashboard</strong> with quotes history and favorites</li>
              <li>🔐 <strong>Authentication Flow</strong> with email verification</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Admin Backoffice (3+ pages)</h3>
            <ul className="space-y-1 text-sm text-gray-600 ml-4">
              <li>📊 <strong>Analytics Dashboard</strong> with real-time KPIs</li>
              <li>🛠️ <strong>Product Management</strong> with CRUD operations</li>
              <li>⚙️ <strong>Configuration Panel</strong> for pricing rules</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Tech Stack (Locked)</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div><strong>Frontend:</strong> React 18+ + TypeScript + Vite</div>
              <div><strong>Styling:</strong> CSS Modules (no Tailwind)</div>
              <div><strong>Backend:</strong> Supabase (PostgreSQL + Edge Functions)</div>
              <div><strong>Deploy:</strong> Vercel with automatic CI/CD</div>
              <div><strong>Auth:</strong> Supabase Auth with role-based access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We're Looking For */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🧬 <span className="ml-2">Who We're Looking For</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">✅ Technical Requirements</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <strong>React/TypeScript expert</strong> (2+ years minimum)</li>
              <li>• <strong>Fast execution</strong> - can ship quality code quickly</li>
              <li>• <strong>Problem solver</strong> - doesn't wait for perfect specs</li>
              <li>• <strong>Designer's eye</strong> - can make UX decisions autonomously</li>
              <li>• <strong>Tool agnostic</strong> - uses AI, templates, libraries</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-700 mb-2">🔥 Mindset Requirements</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• <strong>Hands-on attitude</strong> - solves problems vs escalating</li>
              <li>• <strong>Speed over perfection</strong> - ships first, iterates later</li>
              <li>• <strong>Creative problem solving</strong> - fills gaps in requirements</li>
              <li>• <strong>No "that's not my job"</strong> - owns entire UX</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-red-50 border border-red-200 p-3 rounded-lg">
          <h3 className="font-semibold text-red-700 mb-1">❌ What We DON'T Need</h3>
          <ul className="text-sm text-red-600 space-y-1">
            <li>• Years of experience (if you can deliver, we don't care about your CV)</li>
            <li>• Perfect code (we need functional, not beautiful)</li>
          </ul>
        </div>
      </div>

      {/* Compensation */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          💰 <span className="ml-2">Compensation & Timeline</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Project Details</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>⏰ <strong>Timeline:</strong> 3-4 weeks maximum</li>
              <li>💵 <strong>Budget:</strong> $600 - $1,000 USD</li>
              <li>🕐 <strong>Availability:</strong> Full-time commitment required</li>
              <li>🌍 <strong>Location:</strong> Remote (GMT-3 preferred)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Payment Structure</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>💰 <strong>25% upfront</strong> after challenge completion</li>
              <li>💰 <strong>25% at milestone</strong> (main pages functional)</li>
              <li>💰 <strong>25% at milestone</strong> (integration complete)</li>
              <li>💰 <strong>25% at delivery</strong> (production ready)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Challenge */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🎮 <span className="ml-2">The Challenge</span>
        </h2>
        
        <p className="text-gray-700 mb-4 font-medium">
          Instead of CVs and interviews, we have a coding challenge.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">What You'll Do</h3>
            <ol className="space-y-1 text-sm text-gray-600">
              <li>1. 📥 <strong>Download</strong> our 60-minute coding challenge</li>
              <li>2. 🔧 <strong>Build</strong> a mini product catalog with React</li>
              <li>3. 🐛 <strong>Fix</strong> intentional bugs and improve UX</li>
              <li>4. 🚀 <strong>Deploy</strong> your solution and submit the URL</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">What We'll Measure</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>⚡ <strong>Speed:</strong> How fast you deliver working code</li>
              <li>👁️ <strong>Quality:</strong> Bug detection and UX improvements</li>
              <li>🧠 <strong>Problem Solving:</strong> How you handle incomplete requirements</li>
              <li>🎨 <strong>Creativity:</strong> Your solutions for unspecified features</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-gray-800 mb-2">Time Investment</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>⏱️ <strong>Challenge:</strong> 45-90 minutes maximum</li>
              <li>📞 <strong>Follow-up:</strong> 15-minute video call with top candidates</li>
              <li>✅ <strong>Decision:</strong> Within 48 hours of submission</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ready to Start */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🚀 <span className="ml-2">Ready to Start?</span>
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Step 1: Download Challenge</h3>
            <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono">
              git clone https://github.com/swag-chile/frontend-challenge.git<br/>
              cd frontend-challenge<br/>
              npm install<br/>
              npm start
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Step 2: Complete & Submit</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✅ Complete all challenge tasks</li>
              <li>🚀 Deploy to Vercel/Netlify (Optional)</li>
              <li>📧 Submit your URL + GitHub repo using the form →</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Step 3: Wait for Results</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>🤖 <strong>Auto-scoring</strong> analyzes your submission</li>
              <li>📞 <strong>Video call</strong> with top candidates</li>
              <li>🎉 <strong>Start date</strong> confirmed within 48 hours</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🤔 <span className="ml-2">FAQ</span>
        </h2>
        
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-gray-800">Q: Can I use AI tools like ChatGPT/Copilot?</p>
            <p className="text-sm text-gray-600">A: Absolutely! Use whatever helps you deliver faster.</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-800">Q: What if I don't finish the challenge in time?</p>
            <p className="text-sm text-gray-600">A: Submit what you have. We value progress over perfection.</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-800">Q: Can I ask questions during the challenge?</p>
            <p className="text-sm text-gray-600">A: Nope! Part of the test is handling ambiguity autonomously.</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-800">Q: What about ongoing work after this project?</p>
            <p className="text-sm text-gray-600">A: Strong performers will have opportunities for continued collaboration.</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          📞 <span className="ml-2">Questions?</span>
        </h2>
        <p className="mb-2"><strong>Email:</strong> dev@swag.cl</p>
        <p className="text-sm opacity-90">Response time: Within 24 hours</p>
        
        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-sm opacity-75">
            🔄 Share with developer friends who might be a good fit
          </p>
          <div className="mt-2 text-xs opacity-60">
            <p>Last updated: 18 August 2025 | Challenge difficulty: Intermediate to Advanced</p>
            <p>Success rate: ~15% of applicants pass to video call stage</p>
          </div>
        </div>
      </div>
    </div>
  )
}