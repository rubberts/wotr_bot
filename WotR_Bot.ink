INCLUDE Corruption_1-4
INCLUDE Corruption_5a
INCLUDE Corruption_5b
INCLUDE Military_1-4
INCLUDE Military_5a
INCLUDE Military_5b
INCLUDE Character
INCLUDE Army
INCLUDE Muster
INCLUDE Event
INCLUDE Battle
INCLUDE Warriors

<b>War of the Ring non-cheating bot for solo players</b>
Plays as the Shadow in War of the Ring 2nd edition and supports the Warriors of Middle Earth expansion. 
<i>Based on Queller Bot By Quitch Version 3.0.1 - 2020-07-19</i>

VAR warriors_of_middle_earth = false
VAR lords_of_middle_earth = false
VAR return_knot = -> start

-> start

===start===
{ RANDOM(1, 2):
- 1: -> phase_1_corruption
- 2: -> phase_1_military
}