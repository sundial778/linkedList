$(document).ready(function() {


   //This node is the object that gets put into the list object. It only has 2 attributes the data and next attribute. The next is the 'link' in the list
    var Node = function(data) {
        this.data = data;
        this.next = null;

    }

// This is the list object. It has many methods and attributes. Mainly it has a length attribute that gets increased by the ammount of nodes in the list. The head is the first node.


    var list = {
        _length: 0,
        head: null,
        //This method is for fun. I wrote it to write out all the nodes in a certain way
        explode: function() {
            var len = this._length
            for (writeThis = 1; writeThis <= len; writeThis++) {
                list.search(writeThis)
            }
        },
        //The wipe clears oot all the node objects 
        wipe: function(position) {
            if (position === 0) {
                for (end = 1; end <= list._length;) {
                    list.wipe(end)
                }
            } else {

                var currentNode = this.head,
                    length = this._length,
                    count = 0,
                    prevNode = null,
                    thisNode = null,
                    wipedNode = null;



                if (position === 1) {
                    this.head = currentNode.next;
                    wipedNode = currentNode;
                    currentNode = null;
                    this._length--;

                    return wipedNode;
                }

                while (count < position) {
                    prevNode = currentNode;
                    thisNode = currentNode.next;
                    count++;
                }

                prevNode.next = thisNode.next;
                wipedNode = thisNode;
                thisNode = null;
                this._length--;

                return wipedNode;
            }
        },

        add: function(value) {
            var startTime = performance.now()

            var node = new Node(value),
                currentNode = this.head;

            if (!currentNode) {
                this.head = node;
                this._length++;
                return node;
            }
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;

            this._length++;

            //     if(currentNode.next){
            //list.count()
            //   return true
            //        }
            //        else{
            //        	this.total = 1
            //        }



            var end = performance.now()
            var total = end - startTime
                // console.log("Total difference is " + total);
            return true;
        },
        search: function(position) {
            var currentNode = this.head,
                length = this._length,
                count = 1



            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            return currentNode;
        },

        print: function() {
            // 	if(!this.total ){
            // 	//list.count()
            // }

            var currentNode = this.head,
                count = 0
            finish = this.length

            while (count < finish) {
                console.log(currentNode)
                currentNode = currentNode.next;
                count++;

            }
        }
    }

    // this autopopulates the data list.
    function randomNumberGen(amt, modifier) {
        var loopstart = performance.now()
        for (var u = 0, modifier; u < modifier; u++) {

            var numToAdd = Math.round(Math.random() * modifier)
            list.add(numToAdd)
                // console.log(numToAdd)

        }

        var loopend = performance.now()
        var total = loopend - loopstart
        console.log("total time = " + total)
    }

    /*
    count: function()
    { 
    	list.total = 1,
    	currentNode = list.head
    	if(!currentNode)
    	{
    		return false;
    	}
    	else{
    	while(currentNode.next)
    	{
    		list.total +=1
    		 currentNode = currentNode.next;
    	}
    	return list.total;
    }
    }
    ,*/
    });
