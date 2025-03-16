import { ArrowBigDown } from "lucide-react";
import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="border border-blue-900 w-full max-w-3xl h-full flex flex-col">
        {/* Header */}
        <div className="bg-blue-900 text-white font-bold text-lg flex justify-between p-4">
          <span>Deloitte Auditor Enterprise Chat UI</span>
          <span className="text-gray-300 font-extrabold">Deloitte.</span>
        </div>

        {/* Prompt Section */}
        <div className="border-t border-blue-900 p-4 flex-1">
          <p className="text-blue-900 font-semibold text-lg">Tax Prompt</p>
          <textarea className="w-full border border-blue-900 h-40 mt-2 p-2 resize-none"></textarea>
        </div>

        {/* Buttons */}
        <div className="border-t border-blue-900 flex items-center p-4 gap-4">
          <button className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-semibold">
            <ArrowBigDown className="mr-2" />
        
            Send
          </button>
          <button className="bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
            Cancel
          </button>
        </div>

        {/* Response Section */}
        <div className="border-t border-blue-900 p-4 bg-gray-300 flex-1">
          <p className="text-blue-900 font-semibold text-lg">Response</p>
          <div className="h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
