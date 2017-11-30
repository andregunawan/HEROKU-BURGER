# BURGER! BURGER!! BURGER!!!

# Overview
Description: Creating a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Following the MVC design pattern and using Node + MySQL to query and route data in your app, and Handlebars to generate your HTML.

# Functionality

#### Using an home-grown ORM, the app has 3 basic CRUD functions...

READ all entries from the MySQL database and display them to the DOM using Handlebars.
UPDATE a selected burger by clicking "Devour It", which...
hits an /burger/:id route in Express to change its "devoured" status in the MySQL database
re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
CREATE a new burger using the "Place Order" form, which...
hits a /burger/insert route in Express to insert a new burger into the MySQL database
re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

# Demo

https://radiant-sierra-51029.herokuapp.com/

![](https://i.imgur.com/O7RKJKf.gif)

# Credits

Description: The Coding Bootcamp @ UCLA Extension

# License

MIT License

# Copyright

Copyright (c) [2017] [Andre Gunawan]
