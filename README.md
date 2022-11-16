# Boardgame dice roller

[link to project on netlify](https://boardgame-dice-roller.netlify.app)

## General Info
Boardgame dice roller is simple application to roll dice for nonexistent board game.
This project generates a specific number of dices to roll according to inputs.

## Technologies
* HTML
* CSS
* Javascript
* Local Storage

## Inputs 
- Type of unit - e.g. levys, warriors
- Number of soldiers in unit
- Bonus dice - number of additional dice to generate
- Defence value of enemy (means a minimal value on rolled dice to kill a hostile, if defence is e.g. 4, means that we have to roll minimum value of 4 to kill a enemy)

## Formula of generator
``
(Typ of unit * Number of soldiers in unit) + Bonus dice
``
## Buttons
* Generate dice - after selecting all needed values in inputs, this button generates specific number of dice to roll
* Roll dice - after generating this button rolls all dices. On every click the roll is new
* Save dice - this button saves result of roll to the local storage
* Load dice - loads saved dice from local storage

## Screenshot
![image](https://user-images.githubusercontent.com/71273681/202165325-b73add1c-3ea2-4765-86ff-945eb8050f27.png)
