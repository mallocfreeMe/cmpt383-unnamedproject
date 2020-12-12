# Project Summary

### 1. What is the overall goal of the project?

I wanted to make a simple multiplayer online game. The previous plan was players can shoot projectiles toward each other in a 2d tilemap, and the winning condition is killing all other players except yourself. Due to my time limits, I made a game support two players on the client side to simulate the intended game.

### 2. Which languages did you use, and what parts of the system are implemented in each?

**JS** -> I used p5.js library to write a simple game. <br>
**PHP** -> I used PHP to provide login and registeration supports. <br>
**C** -> I used C to generatee a tilemap array which is used in JS to draw game's map.

### 3. The two inter-language communication methods you will use.

1. I used Rest call - ajax call over http to commicate between JS and PHP in index.php and gethint.php
2. I used PHP's foreign function interface to communicate with c inside arr.php, login.php and sketch.js.  

### 4. Exactly what steps should be taken to get the project working, after getting your code? [This should start with vagrant up or docker-compose up and can include one or two commands to start components after that.]

1.docker-compose run php74 php arr.php
<br>
2. docker-compose up
<br>
http://localhost:8100

### 5. What features should we be looking for when marking your project?
1. the login in page (suggestion)
2. how array pass from arr.php to login.php and sketch.js
3. the register page
4. the game page