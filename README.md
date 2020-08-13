Create a web page which collects customer data from a form. When a customer clicks “Submit”, their data is stored in a Customer object, and then stored in an array. Once the data is collected and stored in an array, a user may click “Query” which will report sta s cs about the Customer data based on some filters. See sample output on the next page.
Instructions:
1. Start with the starter file attached to the submission Folder “FinalTest.txt”. Re-save the file using your first name followed by an underscore. 
2. Declare an empty global array called customerArray to store Customer objects.
3. Write a constructor for a Customer object, using the properties and methods shown here.
4. Create a function that creates the 5 sample customers (below) and adds them to the customerArray. This func on should be called when the page loads.
5. Create a function that displays customers to the “Customers” section of the web page.
Loop through the array calling the toString() method for each customer and output the strings returned to this section.
6. Write a func on called registerCustomer() which will do the following:
● get all input from within the <form>
● create a Customer object and populate the object with the input collected from the form input
● add the Customer object to customerArray
● clear all the input, to get the form ready for new data entry
● call the function you made to output customers to the web page Use an event listener to call this func on for the button “Submit”.
7. Write a function called queryData() which will search the customerArray and output the following information based on the filter fields:
● Total number of customers
● Total number of customers living in [Selected Province]
● Total number of customers matching [Selected Gender]
● Total number of customers aged [Entered Age] and older Use an event listener to call this func on for the button “Query”.
Note: Each statistic being output is based off of 1 filter each. You are not tracking the number of customers that match all filters.