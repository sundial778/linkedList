$(document).ready(function() {
window.objectCounter = 0

function makeObject(){
    if(objectCounter === 0){
    objectCounter+=1
    var objectName = prompt("Listname")
   window.listName = new list(objectName,0,null);
    }
}
makeObject()
 function addItem(id)

 {
  
    var item = $(id).val();
  listName.add(item);
  listName.print();
 }
    
  

 $('#addBtn').click(function(e) {
  e.preventDefault();
  addItem("#addBox");
 });

 function search(id)

 {
  var item = $(id).val();
  listName.search(item);

 }

 $('#searchBtn').click(function(e) {
  e.preventDefault();
  search("#searchBox");

 });

 //This node is the object that gets put into the list object. It only has 2 attributes the data and next attribute. The next is the 'link' in the list
 // this autopopulates the data list.
 function randomCharGen(modifier, amt) {
  var numToAdd = null;
  var letrOrNum = null;
  var loopstart = performance.now();
  for (var u = 0; u < modifier; u++) {
   letrOrNum = Math.round(Math.random());
   if (letrOrNum === 0) {
    numToAdd = Math.round(Math.random() * modifier);
    list.add(numToAdd);
   } else {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //select a character from possible and append it to text
    for (var p = 0; p < modifier; p++)
     text += possible.charAt(Math.floor(Math.random() * modifier));
    list.add(text);
   }


  }

  var loopend = performance.now();
  var total = loopend - loopstart;
  console.log("total time = " + total);
 }


 function Node(data) {
  this.data = data;
  this.next = null;

 }

 // This is the list object. It has many methods and attributes. Mainly it has a length attribute that gets increased by the ammount of nodes in the list. The head is the first node.

 function list(name,len,head) {
    this.name = name;
  this.len = 0,
   this.head = null,
   //This method is for fun. I wrote it to write out all the nodes in a certain way
   this.swap = function(x, y) {
    y = this.search(y);
    x = this.search(x);
    var temp = y;
    y = x;
    x = temp;
    return y.data + " Is swapped with " + x.data;
   },
   this.explode = function() {
    var len = this.len;
    for (var writeThis = 1; writeThis <= len; writeThis++) {
     return list.search(writeThis);
    }
   },
   //The wipe clears oot all the node objects to delete all put 0
   this.wipe = function(position) {
    if (position === 0) {
     for (var end = 1; end <= list.len;) {
      //recursively wipe the list
      list.wipe(end);
     }
    } else {
     //otherwise do a single wipe operation and wipe at the indicated posi'
     var currentNode = this.head,
      count = 0,
      prevNode = null,
      thisNode = null,
      wipedNode = null;


     //ensure there will be a head element
     if (position === 1) {
      this.head = currentNode.next;
      wipedNode = currentNode;
      currentNode = null;
      this.len--;

      return wipedNode;
     }
     //if it is not the head element, dive in and find it at the length
     while (count < position) {
      prevNode = currentNode;
      thisNode = currentNode.next;
      count++;
     }
     //re-arrange the nodes to ensure there are no blank spaces in the list
     prevNode.next = thisNode.next;
     wipedNode = thisNode;
     thisNode = null;
     this.len--;

     return wipedNode;
    }
   },
   //This creates a new node and then adds that node to the list. The first item added to the list is the head element.   
   this.add = function(value) {
    var startTime = performance.now()

    var node = new Node(value),
     currentNode = this.head;
    //This is head element creation
    if (!currentNode) {
     this.head = node;
     this.len++;
     return node;
    }
    //if head element already exists, make the new node the next attribute of the node you are working with
    while (currentNode.next) {
     currentNode = currentNode.next;
    }

    currentNode.next = node;
    //make sure the length is up to date

    this.len++;




    var end = performance.now();
    var total = end - startTime;
    // console.log("Total difference is " + total);
    return true;
   },
   //this will look through the node at a position
   this.search = function(position) {
    var currentNode = this.head,
     count = 0;
    if (!currentNode) {
     $("#searchBox").val("No node at index " + position)
    }

    //same concept as the wipe, increase count until you find the node you are looking for

    while (count < position) {
     currentNode = currentNode.next;
     count++;
    }
    console.log(this)
    var str;
    if (currentNode != null) {
        str = currentNode.next.data;
     
    } else {
     str = null;
    }
    $("#searchBox").val("Node = " + currentNode.data + " next = " + str);
   },
   //similar to the search except it returns all 
   this.print = function() {

    var count = 0,
     finish = this.len;

    while (count < finish) {

     console.log(this.search(count))
     count++;

    }
   }
  
 }
});
