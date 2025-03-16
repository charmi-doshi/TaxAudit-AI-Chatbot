import axios from "axios";

export const getTaxResponse = async (userPrompt) => {
  try {
    const response = await axios.post("http://localhost:5000/api/chat", {
      prompt: userPrompt,
    });

    console.log("Response from OpenAI API:", response.data.response);
    return response.data.response;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "Error: Unable to process request.";
  }
};
