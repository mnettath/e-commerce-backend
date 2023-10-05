# e-commerce-backend

## Description

I worked on this e-commerce-backend to give an internet retail company a competitive edge against other e-commerce companies. Having a backend helps the company keep track of their inventory. The inventory can be sorted by category, product, or tag. Additionally, the database shows the relationships between these three categories. Through working on this project, I gained a better understanding of creating models and routes. A challenge that I faced was when my DELETE route in my category-routes.js did not delete the item and returned an error in Insomnia. I was able to troubleshoot and realized that I had put the onDelete: "CASCADE" key on the wrong association. This ended up fixing the problem.

## Installation

In order to use the e-commerce-backend app, the user must install node.js. Node.js can be installed using this link: https://nodejs.org/en/download. It's important to download the LTS option for the computer's operating system. Next, run an "npm i" in the command line. This will bring in the node_modules and allow the user to use the dependencies listed in the package.json. The user will also need to install MySQL Workbench and Insomnia. Finally, the user will create an .env file to store sensitive data like their MySQL username, password, and the database name. Now they are all set!

## Usage

Please see the following usage demonstration: https://drive.google.com/file/d/1RaZOzcC1uglIFXhQqlwFz9Xok5wckRha/view

## Credits

N/A

## License

N/A
