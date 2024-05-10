function initialize()
{
  //outTable = document.getElementById("outtable");
  outBox = document.getElementById("outbox");
  foodSelectionBox = document.getElementById("foodsel");
  foodDeletionBox = document.getElementById("fooddel");
  moveNumber = document.getElementById("information");
  foodList = [];
  display();
}

function display()
{
  displayList();
}

//Transfer the array into the outBox and output that in a list.
function displayList()
{
  outBox.innerHTML = "";
  for(var i=0; i<foodList.length; i++)
  {
    outBox.innerHTML += i+1 + ": " + foodList[i] + "<br />";
  }
}
      
/*
  Add an item into the array and display that. However, if the item 
  is a duplicate, warn the user that they cannot do that.
*/
function addFood()
{
  if(foodList.indexOf(foodSelectionBox.value.toUpperCase()) !== -1)
  {
    window.alert("Item is already on the list");
  }
  else
  {
    foodList.push(foodSelectionBox.value.toUpperCase());
  }
  display();
}

/*
  Remove an item from the array and display the array again. However, 
  if the item is not in the list, warn the user that they cannot do that.
*/
function deleteFood()
{
  if(foodList.indexOf(foodDeletionBox.value.toUpperCase()) == -1)
  {
    window.alert("Item is not on the list");
  }
  else
  {
    foodList = foodList.filter(deleteByName);
  }
  display();
}

//Return an array without the item in the parameter
function deleteByName(food) 
{
    return food.toUpperCase() !== foodDeletionBox.value.toUpperCase();
}

/*When Move Up Button is selected, move the item with the number selected 
  one up and the item at that position one place down. Warn the user that 
  the item is at the top of the list already if the item is first.
*/
function moveUp()
{
  var arr = foodList;
  if(moveNumber.itemnumber.value-1 < foodList.length)
  {
    if(moveNumber.itemnumber.value-1 != 0)
    {
      temp = arr[moveNumber.itemnumber.value-2];
      arr[moveNumber.itemnumber.value-2] = arr[moveNumber.itemnumber.value-1];
      arr[moveNumber.itemnumber.value-1] = temp;
    }
  }
  if(moveNumber.itemnumber.value == 1)
  {
    window.alert("Item is already on the top of the list");
  }
  display();
}

/*
  When Move Down Button is selected, move the item with the number selected one down 
  and the item at that position one place up. Warn the user that the item is at the 
  bottom of the list already if the item is last.
*/
function moveDown()
{
  var arr = foodList;
  if(moveNumber.itemnumber.value-1 < foodList.length)
  {
    if(moveNumber.itemnumber.value-1 != foodList.length-1)
    {
      temp = arr[moveNumber.itemnumber.value-1];
      temp2 = moveNumber.itemnumber.value-1;
      temp2++;
      arr[moveNumber.itemnumber.value-1] = arr[temp2];
      arr[temp2] = temp;
    }
  }
  if(moveNumber.itemnumber.value == foodList.length)
  {
    window.alert("Item is already on the bottom of the list");
  }
  display();
}
