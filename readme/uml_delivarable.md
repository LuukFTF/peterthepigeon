# UML Delivarable
Programmeren 4
2021-06-06
Lucas van der Vegt


![](img/uml.jpg)

## Verantwoording

### General

Mijn game theme genarator woorden waren:

Kind of Fun: Fellowship  
Game Mechanic: Spy  
X-Factor: Pigeons  

Het algemene idee van de game is dat je een player en een pigeon hebt die samen moeten werken om een bepaald doel te bereiken in het level. Het is ook narretive based, dus de verschillende levels zitten aan elkaar verbonden met een verhaallijn.   
Het idee is dat je dit singleplayer of coop multiplayer kan spelen (als je singleplayer speelt ben je zowel de player als de pigeon)  

De input word via een old school snes controller (usb variant) en via keyboard.

De Main Mechanics zijn als volgend: 

**Algemene mechanics:**
- Movement van de player en pigeon   
- Controls  
- Level initialisation  
- Collision (Doors, Walls, Entities)  
- Usable Items  
- Picking up and dropping items  
- Inventory slots 

**Pigoen mechanics:**
- Default use
- Quick hack
- Toggle fly/ walk
- Mounting player
- Toggle Nightvision

**Player mechanics:**
- Default use
- Call pigeon

**Door mechanics:**
- Open and close
- lock and unlock

*Ik zal in dit document niet alle individuele onderdelen tot in detail uitleggen, maar alleen de belangrijkste mechanics en relevante onderdelen.*

### Game Class

Laten we beginnen met de game class, omdat het idee is dat er verschillende levels zijn roept de game een level aan. Standaard kiest het level 1.
Zodra de class word aangemaakt word de `startLevel()` function gecalled en word het level geiniteerd.
De gameloop roept een update aan van het gestarte level (en daarin worden weer de subclasses geupdate)
In deze class staat een global function `checkCollision()`, deze neemt twee inputs en checkt of er een overlap is in hun `ClientRect` en als dat er is geeft de funtion een `true` value mee terug.

### Level Class
Deze class word geiniteerd in de `init()` function waarin alle nieuwe classes worden aangemaakt en worden geiniteerd. Alle classes zitten hier in zoals je kan zien aan de variabeles. Ook worden op dit niveau de gameover en level finish gehandeled.
De `update()` function word elke gameLoop gecalled en hierin worden alle updates van de child classes in gecalled.
Alle variabelen in level zijn private omdat die alleen binnen de class nodig zijn. De functions ook, maar op een na, `update()` is belangrijk dat die door de game aangeroepen kan worden.


### element : HTMLElement
Elke class die je fysiek kan zien in de game heeft een `element` (`HTMLElement`) variabele. Deze word gebruikt om de DOM te kunnen manipuleren. Deze staat op private omdat je een class alleen direct zelf controle geeft over zichzelf. Als je van buitenaf een element wilt beinvloeden moet je dat via een function in de class doen.

### Position (+ Rotation)
Elke zichtbare class heeft ook een position die aangeeft waar het zich bevind. Dit word aangegeven met de private variabele `posX` & `posY`


### Speed

### getRectangle()

### getFutureRectangle()

### Update()

### Spawn()

### Reset()



### Pigeon

### Player


### input & onKey


### Item


### Wall

### Door




## UML Codesnippet

```ts
class Game {
    - levelNumber : number = 1
    - level : Level
    |
    + gameLoop() : void
    + checkCollision(a : ClientRect, b : ClientRect) : boolean
    - startLevel(level : number) : void { new Level(level) }
    has class Level {
        - level : number
        - pigeon : Pigeon
        - player : Player
        - nightvision_goggles : Nightvision_goggles
        - empty_pigeon_hand : Empty_pigeon_hand
        - hacking_device : Hacking_device
        - lockpick_tool : Lockpick_tool
        - poison_vial : Poison_vial
        - empty_hand : Empty_hand
        - wall : wall[]
        - door : door[]
        - car : car[]
        - gameOver : boolean
        - finished : boolean
        |
        - init()
        - startLevel1()
        + update()
        - finish()
        |
        has class Pigeon {
            - element : HTMLElement
            - posX : number
            - posY : number
            - speedX : number
            - speedY : number
            - inputUp : number 
            - inputDown : number 
            - inputLeft : number 
            - inputRight : number 
            - inputA : number
            - inputB : number
            - inputX : number
            - inputY : number
            - inputL : number
            - inputR : number
            - inputM1 : number
            - inputM2 : number
            - flying : boolean
            - slotR : Item = Nightvision_goggles
            - slot1 : Item = Empty_pigeon_hand
            - slot2 : Item = Hacking_device
            - slot3 : Item = Lockpick_tool
            - slot4 : Item = Poison_vial
            - nightvision : boolean
            - mounted : boolean
            - staminaAmount : number = 100
            |
            + spawn() : void
            + update() : void
            + reset() : void
            - onKeyUp()
            - onKeyDown()
            - toggleFlying() : void
            - mountPlayer() : void
            - useSlotR() : void
            - useSlot1() : void
            - useSlot2() : void
            - useSlot3() : void
            - useSlot4() : void
            - openMenu() : void
            - openInventory() : void
            - pickupItem() : void
            - dropItem() : void
            + checkPlayerCollision()
            + checkItemCollision()
            + checkBorderCollision()
            + checkWallCollsion()
            + checkDoorCollsion()
            + checkCarCollsion()
            + getRectangle() : ClientRect
            + getFutureRectangle() : ClientRect
        }
        |
        has class Player {
            - element : HTMLElement
            - posX : number
            - posY : number
            - speedX : number
            - speedY : number
            - inputUp : number 
            - inputDown : number 
            - inputLeft : number 
            - inputRight : number 
            - inputA : number
            - inputB : number
            - inputX : number
            - inputY : number
            - inputL : number
            - inputR : number
            - inputM1 : number
            - inputM2 : number
            - slot1 : Item = Empty_hand
            |
            + spawn() : void
            + update() : void
            + reset() : void
            - onKeyUp()
            - onKeyDown()
            - useSlotR() : void
            - useSlot1() : void
            - useSlot2() : void
            - useSlot3() : void
            - useSlot4() : void
            - openMenu() : void
            - openInventory() : void
            - pickupItem() : void
            - dropItem() : void
            - callPigeon() : void
            + getRectangle() : ClientRect
            + getFutureRectangle() : ClientRect
        }
        has class Item {
            - element : HTMLElement
            - name : string
            - posX : number
            - posY : number
            - droppped : boolean
            - owner : string
            |
            + spawn() : void
            + update() : void
            + reset() : void
            |
            extends class Hacking_device {
                - name : string = "Hacking Device"
                |
                + quickuse()
            }
            extends class Empty_pigeon_hand {
                - name : string = "Empty Hand"
                |
                + use()
            }
            extends class Lockpick_tool {
                - name : string = "Lockpick Tool"
                |
                + use()
            }
            extends class Poison_vial {
                - name : string = "Poison Vial"
                |
                + use()
            }
            extends class Nightvision_goggles {
                - name : string = "Nightvision Goggles"
                |
                + toggle()
            }
            extends class Empty_hand {
                - name : string = "Empty Hand"
                |
                + use()
            }
        }
        |
        has class Wall {
            - element : HTMLElement
            - posX : number
            - posY : number
            - sizeX : number
            - sizeY : number
            |
            + spawn() : void
            + update() : void
            + reset() : void
            + getRectangle() : ClientRect
        }
        |
        has class Door {
            - element : HTMLElement
            - posX : number
            - posY : number
            - rotation : number
            - isOpened : boolean
            - isLocked : boolean
            |
            + spawn() : void
            + update() : void
            + reset() : void
            + toggleOpen() : void
            + unlock() : void
            + lock() : void
            + getRectangle() : ClientRect
        }
        |
        // has class Car {
        //     - element : HTMLElement
        //     - posX : number
        //     - posY : number
        // }
    }
}

```