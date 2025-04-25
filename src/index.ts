import dotenv from 'dotenv';

dotenv.config();

import FinbudData from 'finbud-data';

console.log('FINBUD_DATA_API_KEY', process.env.FINBUD_DATA_API_KEY);
console.log('MCP_SERVER_URL', process.env.MCP_SERVER_URL);

// Instantiate the client
// Authentication (e.g., API key) might be needed here depending on your API setup.
// Example: const client = new FinbudData({ apiKey: process.env.FINBUD_DATA_API_KEY });
const client = new FinbudData({
  apiKey: process.env.FINBUD_DATA_API_KEY,
  baseURL: process.env.MCP_SERVER_URL // Or your actual MCP server URL string
});

async function main() {
  console.log('Attempting to retrieve estimates...');

  try {
    // Replace 'REPLACE_ME' with a valid identifier for your API
    const estimates = await client.analysts.retrieveEstimates('AAPL');

    console.log('API Call Successful:');
    console.log(JSON.stringify(estimates, null, 2));
  } catch (error) {
    console.error('API Call Failed:');
    if (error instanceof Error) {
      console.error(`Error name: ${error.name}`);
      console.error(`Error message: ${error.message}`);
      // Log stack trace for more details
      console.error(error.stack);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    // Specific error handling based on the client library's error types can be added here
    // e.g., if (error instanceof FinbudData.APIError) { ... }
  }
}

main();
