# GroceryListManager

##HTML and JavaScript
The client is greeted with a logo on top of the page. 
Next, it is straight to the point regarding the point of the program, which is to serve as a grocery list. 
Program takes in text inputs to add and/or delete items from the list.
Program takes in list ordering as a method of moving the items within the list up or down the order. 
Displays the list of items in a table. 

##CSS Section
Logo is front and center.
The background and the texts provide a nice color contrast visual aesthetics.

##Reflection
What went well is the CSS portion of the code and creating the HTML elements. It all displayed as intended and I personally felt that it looked nice visually and had a simple yet clean look. What I had obstacles with throughout this project was with sections of the JavaScript code. Particularly the deleteFood() function as it would incorrectly not delete even when the name of the item was inputted correctly. This was fixes after troubleshooting by adhering to the rule regarding shortening functions. So, after splitting the big function into two separate smaller functions and making sure each worked as intended, the problem was solved. One function returned an array without the food that was to be deleted and the other would set the foodList as the array that was returned by the previous function and displayed it to the user. 
From this project I learned many things within JavaScript, especially regarding the configuring and accessing different things from arrays using keywords like .filter or .itemnumber.value.
