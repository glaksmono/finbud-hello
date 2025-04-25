# finbud-hello

This is a simple example project to demonstrate how to use the `finbud.ai-data` client library.

## Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **(Optional) Configure Environment:** If your API requires authentication (like an API key), you might need to set environment variables. The example code (`src/index.ts`) assumes no specific authentication is needed by default, but shows where you might add it (e.g., reading from `process.env.FINBUD_API_KEY`).

3.  **Update Placeholder:** Open `src/index.ts` and replace the `'REPLACE_ME'` placeholder in the `client.analysts.retrieveEstimates('REPLACE_ME')` call with a valid identifier relevant to your API endpoint.

## Running the Example

1.  **Compile TypeScript:**
    ```bash
    npx tsc
    ```

2.  **Run the compiled JavaScript:**
    ```bash
    node dist/index.js
    ```

This will execute the API call defined in `src/index.ts` and print the results or any errors to the console.