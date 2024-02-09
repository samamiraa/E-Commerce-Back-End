# E-Commerce-Back-End

Walkthrough Video👇🏼<br>
https://drive.google.com/file/d/1TTaz38ocVsdG9P2cICK7rMre0T0ETq33/view

## Description

E-commerce backend built using sequalize, express, SQL and node. My motivation to complete this project was to learn how sequalize can simplify working with data with mySQL. I also learned how when paired with express, each route can be connected with SQL to accomplish different things. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

npm i express
npm i dotenv
npm i mysql2
npm install sequelize sqlite3

## Usage

After installing all required npm packages. First you will start by creating the database in the mySQL shell<br>
<br>
<img width="1280" alt="create database" src="./assets/readmeimg/1 create database.png"><br>
<img width="1280" alt="create database confirmation" src="./assets/readmeimg/2 database created.png"><br>
<br>
Next in the terminal, you will need to seed the database by typing 'npm run seed' in the terminal<br>
<br>
<img width="1280" alt="run seed" src="./assets/readmeimg/3 seed database.png"><br>
<img width="1280" alt="seed confirmation" src="./assets/readmeimg/4 seed confirmation.png"><br>
<br>
Once the database is seeded, next the server needs to start listening by typing 'node server.js' in the terminal<br>
<br>
<img width="1280" alt="start server" src="./assets/readmeimg/5 start server.png"><br>
<img width="1280" alt="server started confirmation" src="./assets/readmeimg/6 server started.png"><br>
<br>
Once the server is started, open up insomnia or postman. In my project, I used insomnia to test my routes. The first test is to show what happens when you input a route that is not defined.<br>
<br>
<img width="1280" alt="wrong route" src="./assets/readmeimg/7 wrong route.png"><br>
<br>
The first route is a get request to find all the categories in the database<br>
<br>
<img width="1280" alt="find all categories" src="./assets/readmeimg/8 find all categories.png"><br>
<br>
The next route is a get requst to find one category by its id<br>
<br>
<img width="1280" alt="find one category" src="./assets/readmeimg/9 find one category.png"><br>
<br>
The next route is a post request to create a new category<br>
<br>
<img width="1280" alt="create category" src="./assets/readmeimg/10 create category.png"><br>
<br>
The next route is a put request to update an existing category<br>
<br>
<img width="1280" alt="update category" src="./assets/readmeimg/11 update category.png"><br>
<br>
The next route is a delete request to delete an existing category<br>
<br>
<img width="1280" alt="delete category" src="./assets/readmeimg/12 delete category.png"><br>
<br>
Next to confirm the category has been deleted, a get request to find the deleted category by its previous id will show a message saying the category does not exist<br>
<br>
<img width="1280" alt="delete confirmation" src="./assets/readmeimg/13 category does not exist.png"><br>
<br>
Next are the test for the routes belonging to the products table. First route is a get request to find all existing products included in this search are tags associated with this product and which category the products belong to<br>
<br>
<img width="1280" alt="find all products" src="./assets/readmeimg/14 find all products.png"><br>
<br>
The next route is a get request to find one product by its id<br>
<br>
<img width="1280" alt="find one product" src="./assets/readmeimg/15 find one product.png"><br>
<br>
The next route is a post request to create a new product<br>
<br>
<img width="1280" alt="create product" src="./assets/readmeimg/16 create new product.png"><br>
<br>
The next route is a put request to update an existing product<br>
<br>
<img width="1280" alt="update product" src="./assets/readmeimg/17 update product.png"><br>
<br>
The next route is a delete request to delete an existing product<br>
<br>
<img width="1280" alt="delete product" src="./assets/readmeimg/18 delete product.png"><br>
<br>
And finally, when you go back to do a get request to find one product by id, you can search that deleted product by its previous id and a message is displayed saying the product does not exist<br>
<br>
<img width="1280" alt="delete product confirmation" src="./assets/readmeimg/19 product does not exist.png"><br>
<br>
The last test routes are for the tags table. The first route is a get request to find all existing tags, included in the search are any existing products that have that tag<br>
<br>
<img width="1280" alt="find all tags" src="./assets/readmeimg/20 find all tags.png"><br>
<br>
The next route is a get request to find a tag by its id<br>
<br>
<img width="1280" alt="find one tag" src="./assets/readmeimg/21 find one tag.png"><br>
<br>
The next route is a post request to create a tag<br>
<br>
<img width="1280" alt="create tag" src="./assets/readmeimg/22 create tag.png"><br>
<br>
The next route is a put request to update an existing tag<br>
<br>
<img width="1280" alt="update tag" src="./assets/readmeimg/23 update tag.png"><br>
<br>
The next route is a delete request to delete an existing tag<br>
<br>
<img width="1280" alt="delete tag" src="./assets/readmeimg/24 delete tag.png"><br>
<br>
And finally, when you go back to do a get request to find one tag by id, you can search that deleted tag by its previous id and a message is displayed saying the tag does not exist<br>
<br>
<img width="1280" alt="delete tag confirmation" src="./assets/readmeimg/25 tag does not exist.png"><br>

## Credits

I always refer to my class activities, but thank you to a few people who helped me with my assignment. Thank you to my colleagues Shawn and Arnaldo for answering a couple of questions regarding myy constraint error I was getting. Thank you to my teachers Saraubh and Daniel who helped me figure out my foreign key issue. Finally, thank you to my tutor Andrew, who always answers the thousands of questions I have for him every session, I appreciate his abundance of patience.

https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
https://sequelize.org/docs/v6/other-topics/other-data-types/

## License

The MIT License is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions.

## Badges

N/A

## Features

N/A

## How to Contribute

N/A

## Tests

Download required packages. Once downloaded, run 'node server.js in terminal, when it confirms its listening, go to insomnia or postman and test out each route. 