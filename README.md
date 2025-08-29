1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  

Ans: All these mathods that mantioned above is use for selecting elements by id and class name. The difference between these mathods is shown below.
->getElementById: By this mathod we can select an element by its id and do necessary work. If there is other element with same id it will not select all of them rather it will only select one.
->getElementsByClassName: By this mathod we can select multiple element by same css class and this mathod will return a HTMLCollection and we can use forof or forEach mathod to access the collection.
->querySelector: this mathod is a little bit advance then above mathods. We can select element by id or css class selector.
->querySelectorAll: this mathod returns a nodeList. To access the list one have to use index.

2.How do you create and insert a new element into the DOM?

Ans: By using document.createElement() - mathod , I create an element. After creating an element I use "appendChild()" mathod to insert it into DOM.

3.What is Event Bubbling and how does it work?

Ans: Event Bubbling means when an event happen it run the handler function on the target element first, then it goes to it parent and after that it goes to parent parents and so on.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans: This is technique where we add event listener to the parent instead of adding to multiple children element. This technique is very helpful beacuse it saves time and hardwork.
if we add event to every single element instead of adding to their parent it takes alot of time and hardwork. but if we add to the parent element it will work.

5.What is the difference between preventDefault() and stopPropagation() methods

Ans: 
preventDefault()-> preventDefault() stops the default behaviour of an event. for an example, when we click a submit button or a button inside a form tag the page will automatically reload but 
if we use preventDefault() mathod the page will no reload.

stopPropagation-> THis mathod stop event from bubbling or going to up. for an example, when a event happens it happens on the target element then it goes to the target element parent and 
then parent parents and so on. But if we use stopPropagation mathod then it will only happens on the target element.

