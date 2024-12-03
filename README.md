# Twegion

**Twegion** is a React-based Twitter thread generator leveraging advanced AI models to create engaging and concise threads tailored to your preferences.

---

## Features

- Generate high-quality Twitter threads with minimal effort.
- Customize tone and style for a unique voice.
- Supports interactive and intuitive user input for real-time responses.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A valid [Mistral API key](https://mistral.ai/)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/forloopcodes/twegion.git
   cd twegion
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

---

## Usage

### Set Up API Key

1. Navigate to `./src/App.tsx`.

2. Locate the following code block:
   ```javascript
   const config = {
       method: "post",
       maxBodyLength: Infinity,
       url: "https://api.mistral.ai/v1/chat/completions",
       headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${apiKey}`, // Replace this
           Accept: "application/json",
       },
       data: data,
   };
   ```

3. Replace the API key with your own Mistral API key.

---

### Run the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your fork.
4. Submit a pull request.

---

## License

This project is licensed under the MIT License.

---

By customizing the API key and deploying **Twegion**, you're all set to generate compelling threads. 🚀
