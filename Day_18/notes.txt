we have heard about data leak. it means that anyone gets the copy of our DB. This happens bcz of many reasons some of them are:-
. In our API we have a loop hole from where they get the copy of the DB
when Data is leaked it means the he has all the ceredentials of the user. suppose he got the password of the instagram now they can simply login our account and use it as they want
and we know that many user keep their password same across different apps and platforms. 
Now if hacker got the ceredentials of instagram then its a high chance they can use it across different platfroms and they can get the access also.
so we can say hacker not only hacked instagram but also hacked some other platforms like gmail account , facebook.


Now the question how can we store the password in the DB
can we store this in encrypted form lets say in place of Rohit@123 we saved Mohan@312 in the db. and to decrypt this Mohan@312 to Rohit@123 we need a key. 


suppose client created an account on the instagram client gave us a username and a password (rohit_negi9-username  Rohit@123-password) to the server now server encrypt this password and save the client ceredentials to the db.  Rohit@123 encrypted into Mohit@312.

Now in future when client login by the username and the password(rohit_negi9-username  Rohit@123-password). Now the server convert this passqword in encrypted form Rohit@123 encrypted into Mohit@312 now server compare the encrypted pass and the db pass if it match it allows the client to login otherwise not

Now suppose hacker got the password from the db Mohan@312 and they have the username now if they hit the server from this username and password (rohit_negi9-username  Mphit@312-password) now server encrypt Mohit@312 and it changes into sky@131 now it doesn't match with the db and the hacker can't logged in.


Whats the problem in this Approach??
Now suppose somehow hacker got the key which is encrypting and decrypting this password then hacker can easily generate the original password by the combination of the password in the db and the key

Now How can we solve this??
the solution is if somehow we can design an algorithm that change the Rohit@123 into Mohan@312 but never change the Mohan@312 into Rohit@123. Means it can encrypt the original password but never decrypt the original password. we want one way solution. After this hacker get the encrypted pass but never decrypt it.

Here the hashing come in this scenario.
suppose the pass is Rohit@123 now it gets hashed into abc21334erbd4bediufj4h3. Now if the hacker gets this hashed pass, then also it is next to impossible to crack the pass.

Rohit@123 -> abc2133sddg4erbd4bediufj4h3sdfer343453sdfret45
rohit@123 -> hbuiwe23hjouinui3ui23uighfh65u677867ujthjgh7t
if we change the single character it gets hashed into completely different string.

Now suppose hacker gets this abc2133sddg4erbd4bediufj4h3sdfer343453sdfret45 . hacker can only crack this using brute force attack. They tried
a->nsdkjlfjklsdjkflsdkfoprejkldfgfdfhfhgh
ab->djnasolkdkasklflasdkflasdolkflsdfhfhf
abc->jaskdjnjklasjdfklwejlrkeoiltjioerioto
abcd->jlsjdfoisjdiofjiosdfklsdjfiorioiorsdf
here we can see if the hacker tried to crack this pass using this approach then it should years to crack it

if we use combination of capital letter, numeric values, special character then this pass gets converted in more strong hashed pass

we are using SHA-256 for hashing the pass
the benefits of the SHA-256 is we can give the pass of any length like 1lakh bits or 10 lakh bits 0r 1 bit, SHA-256 always convert it in 256bit 
Now The work of hacker gets more diificult as they are unable to guess the length of the pass also

But we are also not using this approach now beacuse hacker finds a way to crack this hashed code by using rainbow table.
Rainbow Table is sheet where hacker have already stored the commonly used password and their hashcode

Now Whats the solution of this?
here introduced salting, password is Rohit@123, salting adds some string in this, Rohit@123 + saltAdd("mohit") now this pass becomes Rohit2123mohit now this gets hashed and store this hashcode in the database
now suppose some one has save the commonly used pass 123456 now after salting it became 123456hjksdfa now this gets hashed and the hashedcode gets stored in the db. 

now, after using the combination of salting and hashing it became more difficult for the hacker to crack it 

now the quetsion can we use same salt or different for everyone?
if we are using different salt for everyone then we have to store the salt also in the db. If we are using same salt then we can simply store it in a variable in our server 

why we need salt to store, suppose in future original user came, so in their pass we have to add this salt and then convert it in hashcode and match it with the pass in the db


lets discuss the pros and cons of same salt and different salt
if we are using the same salt for every pass
123456 -> 123456mohit
Rohit@123 -> Rohit@123mohit
saurav -> sauravmohit
cons of this approach is its a high chance that a new user has also the same pass(Rohit@123). 
there is many user who has the pass 123456. now we added mohit in it as salt. 123456mohit suppose there is 20k user who have this password. now we have generated the hashcode of 123456mohit and stored it in the DB.Now suppose in future the db got leaked then this 20k user has same hashcode, now hacker try to generate this hashcode for this hacker used many combination or we cany say brute force attack, now suppose hacker hashed it then this 20k user data gets leaked now think hacker gets the access of salt also , then hacker can easily gain the access to this 20k user

so , we moved to the 2nd solution that is different salt for every user
123456 -> 123456mohit
Rohit@123 -> Rohit@123nmsdfsdfg
saurav -> sauravmsdffgsdfsdg
hacker can hack this also but they can't hack in bulk. in one time they can only hack one user instead of 20k
now here cons is we have to store this salt. Now the question can we store salt in encrypted or simply as text. 
we can store it simply as text. even if hacker get the hash code and the salt, for them it is next to impoossible to generate in original pass.

we store pass -> hash form + salt, both in the db.

What is encryption and decryption?
symmetric cryptography?
Asymmetric cryptography?
Avalanche effect?
bcrypt