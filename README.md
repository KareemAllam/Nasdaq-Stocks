# Nasdaq React Native App

This is a React Native application for displaying stock information from the Nasdaq exchange. The project is bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Project Structure

- `src/`: Contains the source code for the application.
  - `components/`: Reusable UI components.
  - `screens/`: Application screens.
  - `data/`: Data fetching hooks and utilities.
  - `utils/`: Utility functions.
  - `theme/`: Theme and styling configurations.
- `tests/`: Contains test files and mocks

## Getting Started

> **Note**: Ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions up to the "Creating a new application" step before proceeding.

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/nasdaq-react-native-app.git
cd nasdaq-react-native-app
```

### Step 2: Install Dependencies

Install the project dependencies using npm or Yarn:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

### Step 3: Configure Environment Variables

Create a .env file in the root of the project and add the following environment variables:

```env
POLYGON_BASE_URL=https://api.polygon.io
POLYGON_API_URL=/v3/reference
POLYGON_API_KEY=YOUR_API_KEY_HERE
```

> ⚠ **Note**: Replace `YOUR_API_KEY_HERE` with your actual API key from Polygon.io.

### Step 4: Start the Metro Server

Start the Metro server, the JavaScript bundler that ships with React Native:
For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

For IOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your app running in your Android Emulator or iOS Simulator.

### Step 6: Running Tests

To run the tests for this project, use the following command:

```bash
# using npm
npm test

# OR using Yarn
yarn test
```
