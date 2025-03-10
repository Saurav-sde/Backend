What is Node JS?
=> Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the browser. It is built on Google Chrome’s V8 JavaScript engine and is commonly used for building fast and scalable network applications.

What is V8 Engine?
=> It is just a piece of code which is written in c++ to understand our javascripte code
js Code -> V8 engine -> Machine Code

How C++ understands our js code?
string = "1523289ijsd2" it is a string in cpp
i have to write a program to store even , odd and normal character at different variables?
so, we have written a particular cpp code which solves this problem(suppose name of function is StringUnderstandCode());


[2,5,71,20,11,30] write cpp code which sums the element of this array?
the function that i made above to solve the string problem can't solve this problem, so we have to write another particular set of cpp code that solves this problem


like this when we write js code, think like it is wrapped inside a string , now we have to understand this code
=> so to understand this js code, we have written another set of code in cpp, Now it is responsibility of this cpp code to understand this js code and then it gets compiled in machine code




Till now we know frontend, we haven't made our own server,(In swiggy project we used swiggy server for the data)

Now in backend we will learn to make our own server and with server we will also learn database(mongoDB) where our actual data gets saved

server is nothing it is just a js file , it is like intermediator, as we can't give directly access to frontend to talk with database instead of it frontend talk with server server talks with databse and then serves this to frontend

why we made server in between? why can't we directly access databse from frontend?
1️⃣ Security Risks (Major Issue 🚨)
If the frontend directly connects to the database:
❌ Database Credentials Exposed: Anyone can see your DB username & password in browser dev tools.
❌ No Access Control: Hackers can modify queries and delete/steal data easily.
❌ SQL Injection & Attacks: Users can send malicious queries and corrupt the database.

✅ Solution:
A backend server acts as a security layer and ensures only authorized requests access the database.

2️⃣ Business Logic & Validation 🔍
Imagine a payment system where users must pay before accessing premium content.
❌ If the frontend modifies the request (isPremiumUser = true), they could bypass the payment system!

✅ Solution:
A backend server ensures that business logic is properly executed before sending a response to the frontend.

Instead of directly accessing the database, the backend:
✅ Validates & Secures requests 🔐
✅ Processes & Optimizes queries ⚡
✅ Prevents unauthorized access & attacks 🚨
✅ Ensures data consistency & performance 🚀
✅ Allows multiple platforms to access data via APIs 🌎



What type of code we write in the server?
Routing (API Endpoints)
Database Operations
Authentication & Security
Middleware & Validation	function 
Business Logic	
API Communication	
Real-Time WebSockets


In Earlier days we write our server in cpp,java and python , js is used only in frontend
when Node js(v8 engine) came we are able to write server code in js
Node JS :- V8 Engine(follows ecmascript) + global Object(setTimeout(),setInterval(),fetch(),console.log(),DOM...) + How to connect with database 
V8 engine has power to access all these async tasks


if we made our server with cpp, then server definitely understands the cpp code and cpp code runs in server, Now in cpp we have written a set of code that understand js
what we have done is that the existing server which in understanding the cpp code, we have given him the cpp code that undesrstands the js code(V8 engine).so we can say that we have given them v8 engine code,and the server knows how to run the cpp code and v8 engine(the cpp code which we have given to server) knows how to run js so from this we get advantage that we can run our js in backend also

if there is any app that understand cpp code then it can also understands v8 engine as it is also a cpp code
V8 can be embedded in any C++ application to execute JavaScript code within a C++ program.



Does js code gets converted in cpp?
jis hisaab se string ne cpp ka code likha hai waise hi to js ka code cpp mei likha gya hain to conversion ki to koi baat hi nnhi hai direct run ho jaayega