# Fast Food Ordering App

This is a mobile application for ordering fast food, built with React Native and Expo. It allows users to browse a menu, add items to their cart, and place orders. The app uses Appwrite for its backend services and Zustand for state management.

## Features

-   **User Authentication:** Sign up and sign in with email and password.
-   **Browse Menu:** View a list of available food items.
-   **Search and Filter:** Search for specific items and filter by category.
-   **Shopping Cart:** Add and remove items from the cart.
-   **Order Placement:** Place orders for the items in the cart.
-   **Profile Management:** View and update user profile information.

## Tech Stack

-   **Frontend:** React Native, Expo, Tailwind CSS
-   **Backend:** Appwrite
-   **State Management:** Zustand
-   **Routing:** Expo Router
-   **UI Components:** NativeWind

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js
-   npm
-   Expo CLI

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/NoureddineDRIOUECH/Fast-Food.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your Appwrite backend and add the environment variables to a `.env` file in the root of the project.
    ```
    EXPO_PUBLIC_APPWRITE_ENDPOINT=...
    EXPO_PUBLIC_APPWRITE_PROJECT_ID=...
    ```

### Running the App

-   Start the Expo development server
    ```sh
    npx expo start
    ```
-   Follow the instructions in the terminal to run the app on an emulator or a physical device.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.