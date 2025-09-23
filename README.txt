Prerequisites

Node.js (version 18 or higher)
npm or yarn
Expo CLI: npm install -g @expo/cli
Expo Go app on your mobile device (for testing)

Installation

Clone the repository

bash   git clone https://github.com/Kierran-1/LeafLens.git
   cd LeafLens

Install dependencies

bash   npm install

Start the development server

bash   npx expo start

Run on device/simulator

Mobile: Scan QR code with Expo Go app
Android Emulator: Press a
iOS Simulator: Press i (macOS only)
Web: Press w



🛠️ Tech Stack

Framework: React Native with Expo
Styling: NativeWind (Tailwind CSS for React Native)
Navigation: Expo Router (file-based routing)
Language: JavaScript/TypeScript

This project uses NativeWind, which allows you to use Tailwind CSS classes directly in React Native components.
Example Usage
jsximport { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 bg-green-500 justify-center items-center">
      <Text className="text-white text-2xl font-bold">
        Hello LeafLens! 🌿
      </Text>
    </View>
  );
}
Available Classes

Layout: flex-1, justify-center, items-center, px-4, py-2
Colors: bg-green-500, text-white, border-gray-200
Typography: text-xl, font-bold, text-center
Spacing: m-4, p-6, mb-2, mx-auto

🔧 Development
Running the App
bash# Start with clean cache
npx expo start --clear

# Start with specific platform
npx expo start --android
npx expo start --ios
npx expo start --web
Building for Production
bash# Build for Android
npx eas build --platform android

# Build for iOS
npx eas build --platform ios
🐛 Troubleshooting
Common Issues

"Cannot find module 'babel-preset-expo'"

bash   npm install --save-dev babel-preset-expo
   npx expo start --clear

NativeWind styles not applying

Check babel.config.js includes "nativewind/babel" plugin
Ensure global.css is imported in your root component
Verify tailwind.config.js content paths are correct


Metro bundler cache issues

bash   rm -rf node_modules/.cache
   rm -rf .expo
   npx expo start --clear

Babel configuration errors

Delete and recreate babel.config.js with simple syntax:



js   module.exports = {
     presets: ["babel-preset-expo"],
     plugins: ["nativewind/babel"]
   };
Cache Clearing (Nuclear Option)
bashrm -rf node_modules
rm -rf .expo
rm -rf .metro-cache
rm package-lock.json
npm install
npx expo start --clear
🔄 Git Workflow
Setting up the project
bashgit clone https://github.com/Kierran-1/LeafLens.git
cd LeafLens
npm install
Making changes
bashgit checkout -b feature/your-feature-name
# Make your changes
git add .
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
Pulling latest changes
bashgit checkout master
git pull origin master
npm install  # In case dependencies changed
⚠️ Important Notes for Collaborators
File Encoding & Line Endings

Always use LF line endings (not CRLF) for config files
Set VS Code: Bottom right corner → "CRLF" → change to "LF"
Use UTF-8 encoding for all files

Babel Configuration

Never edit babel.config.js manually - if it breaks, delete and recreate
Use this exact format:

js  module.exports = {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"]
  };
Dependencies

Always run npm install after pulling changes
If you get dependency errors, run npx expo install --fix
Never commit node_modules/ or package-lock.json conflicts

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

