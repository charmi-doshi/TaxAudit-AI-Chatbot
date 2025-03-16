import { ChartArea, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { getTaxResponse } from "./chatService";
import { AiOutlineOpenAI } from "react-icons/ai";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setResponse("Generating response...");

    const aiResponse = await getTaxResponse(prompt);
    setResponse(aiResponse);
  };

  return (
    <div class="h-screen flex flex-col">
      {/* <!-- Header Section --> */}
      <div class="bg-blue-900 text-white p-4">
        <h1 class="text-xl font-bold">Deloitte Auditor Enterprise Chat UI</h1>
      </div>

      {/* <!-- Main Content Section --> */}
      <div class="flex-grow flex flex-col bg-gray-100">
        {/* <!-- Tax Prompt Input --> */}
        <div class="p-4">
          <label
            for="tax-prompt"
            class="block text-lg font-medium text-gray-700"
          >
            Tax Prompt
          </label>
          <textarea
            id="tax-prompt"
            rows="4"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>

        <div class="flex justify-start gap-4 p-4">
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={handleSend}
          >
           <div className="flex items-center gap-1 justify-end"> <AiOutlineOpenAI />  Send </div>
            
          </button>
          <button
            class="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            onClick={() => setPrompt("")}
          >
            Cancel
          </button>
        </div>

        {/* <!-- Response Section --> */}
        <div class="flex-grow bg-white p-4 border-t">
          <h2 class="text-lg font-semibold text-gray-800">Response:</h2>
          <div class="mt-2 p-4 bg-gray-50 border rounded-md text-gray-700">
            {response ? response : "No response yet."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { Send, X, MessageSquare } from "lucide-react";
// import axios from "axios";

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!prompt.trim()) return;

//     setLoading(true);
//     setResponse("Generating response...");

//     try {
//       const res = await axios.post("http://localhost:5000/api/chat", {
//         prompt,
//       });

//       setResponse(res.data.response); // Update UI with AI response
//     } catch (error) {
//       console.error("Error:", error);
//       setResponse("Error fetching AI response.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="bg-white/10 backdrop-blur-lg rounded-t-xl p-4 flex items-center justify-between border-b border-white/10">
//           <div className="flex items-center gap-2">
//             <MessageSquare className="w-6 h-6 text-blue-400" />
//             <h1 className="text-xl md:text-2xl font-semibold text-white">
//               Deloitte
//             </h1>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="hidden md:inline text-green-400 text-sm">
//               Connected
//             </span>
//             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="bg-white/5 backdrop-blur-lg p-4 md:p-6 min-h-[400px] flex flex-col gap-4">
//           {/* Prompt Section */}
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-blue-300 mb-2">
//               Prompt
//             </label>
//             <textarea
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               className="w-full h-32 bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
//               placeholder="Type your message here..."
//             />
//           </div>

//           {/* Response Section */}
//           <div className="flex-1">
//             <label className="block text-sm font-medium text-purple-300 mb-2">
//               Response
//             </label>
//             <div className="w-full min-h-32 bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-slate-300">
//               {loading ? "Loading..." : response || "Response will appear here..."}
//             </div>
//           </div>
//         </div>

//         {/* Footer / Actions */}
//         <div className="bg-white/5 backdrop-blur-lg rounded-b-xl p-4 flex items-center justify-between gap-4 border-t border-white/10">
//           <button
//             onClick={() => {
//               setPrompt("");
//               setResponse("");
//             }}
//             className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
//           >
//             <X className="w-4 h-4" />
//             <span className="hidden md:inline">Clear</span>
//           </button>

//           <button
//             onClick={handleSubmit}
//             className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
//             disabled={loading}
//           >
//             <Send className="w-4 h-4" />
//             <span>{loading ? "Sending..." : "Send Message"}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
