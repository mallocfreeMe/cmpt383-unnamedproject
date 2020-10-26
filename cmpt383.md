# Sketch a Plan

### 1. Topic idea: what will it actually do?
I want to make a simple multiplayer online game. The current plan is players can shoot projectiles toward each other in a 2d tilemap, and the winning condition is killing all other players except yourself. Moreover, the game also has a log in screen which can handle registrations. 

### 2. The three programming languages you will use, and (briefly) what will be implemented with each.
**JS** -> I will use p5.js or other JS libraries to make a simple game with basic game mechanics and some essential UI elements. <br>
**PHP** -> I will use PHP to talk to the client-side to handle all the registrations and login activities. <br>
**GO** -> I will use GO as a backend to handle collision detections from the client-side. 

### 3. The two inter-language communication methods you will use.
I plan to use **RabbitMQ** and **RPC** communication methods. 

### 4. Deployment technology: Vagrant VM, or Docker containers.
For right now, I plan to use **Docker containers** for deployment.