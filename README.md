Yu-Gi-Oh Project
This project is a Yu-Gi-Oh! card information website built with Next.js and TypeScript. It integrates the Yu-Gi-Oh! API provided by YGOPRODeck to fetch and display detailed information about the cards.

Table of Contents
Installation
Usage
Features
Technologies
API Integration
Contributing
License
Installation
Clone the repository:

bash
Kodu kopyala
git clone https://github.com/yourusername/yu-gi-oh.git
Navigate to the project directory:

bash
Kodu kopyala
cd yu-gi-oh
Install the dependencies:

bash
Kodu kopyala
npm install
Run the development server:

bash
Kodu kopyala
npm run dev
Open http://localhost:3000 in your browser to see the application.

Usage
Browse through the collection of Yu-Gi-Oh! cards.
Use the search feature to find specific cards by name.
View detailed information for each card, including type, attributes, and effects.
Features
Responsive Design: The project is optimized for both desktop and mobile devices.
Dynamic Routing: Next.js dynamic routes are used to display individual card details.
TypeScript: Strongly typed code for better maintainability and scalability.
API Integration: Fetches live data from the YGOPRODeck API.
Technologies
Next.js: A React framework that enables server-side rendering and static site generation.
TypeScript: A typed superset of JavaScript that adds optional static types.
Tailwind CSS: A utility-first CSS framework for fast and responsive UI development.
YGOPRODeck API: An API to retrieve Yu-Gi-Oh! card data.
API Integration
This project utilizes the YGOPRODeck API to fetch card data. Below is a brief overview of how the API is integrated:

API calls are made using the fetch function to retrieve card information.
The data is then processed and displayed using React components.
Error handling is implemented to manage API response failures.
Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

