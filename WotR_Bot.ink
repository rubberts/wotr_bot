# theme: dark

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

VAR warriors_of_middle_earth = false
VAR lords_of_middle_earth = false
VAR return_knot = -> phase_1_corruption
VAR corruption_strategy = false

<b>War of the Ring non-cheating bot for solo players</b>
Plays as the Shadow in War of the Ring 2nd edition and supports the Warriors of Middle Earth expansion.

<i>Based on Queller Bot By Quitch Version 3.0.1 - 2020-07-19</i> 
{corruption_strategy} # CLASS: w3-black
//-> muster_recruit_minion
{ RANDOM(1, 2):
- 1: # IMAGE: corruption_strategy.jpg
    -> phase_1_corruption 
- 2: # IMAGE: military_strategy.jpg
    -> phase_1_military
}

===end_action===
<b>End action</b> # CLASS: w3-pink
-> next_action_end_turn

===attack===
<b>Attack</b> # CLASS: w3-pink # IMAGE: attack.jpg
-> army_is_sortie

===move===
<b>Move</b> # CLASS: w3-pink # IMAGE: move.png
-> next_action_end_turn

===move_nearest_army_towards_exposed===
<b>Move nearest army towards exposed_tooltip</b> # CLASS: w3-pink # IMAGE: move.png
-> next_action_end_turn

===move_army_into_region===
<b>Move army into region</b> # CLASS: w3-pink # IMAGE: move.png
-> next_action_end_turn

===move_unit_into_region===
<b>Move 1 unit into region</b> # CLASS: w3-pink # IMAGE: move.png
-> next_action_end_turn

===move_attack===
<b>Move/Attack</b> # CLASS: w3-pink 
-> next_action_end_turn

===muster_action===
<b>Muster</b> # CLASS: w3-pink
-> next_action_end_turn

===move_nation_down_one_on_political_track===
<b>Move nation down one on political track</b> # CLASS: w3-pink
-> next_action_end_turn

===draw_preferred_event_card===
<b>Draw an Event card with <> # CLASS: w3-pink
{ 
- corruption_strategy:
    a Character symbol # CLASS: w3-pink
- else:
    an Army or Muster symbol # CLASS: w3-pink
}
</b> # CLASS: w3-pink
-> next_action_end_turn

===play_event_faction_card===
<b>Play Event <>
{ warriors_of_middle_earth:
    or Faction Event <>
}
card</b> # CLASS: w3-pink
-> next_action_end_turn

===discard===
<b>Discard</b> # CLASS: w3-pink
-> next_action_end_turn

===draw_character_event_card===
<b>Draw a Character Event card</b> # CLASS: w3-pink # IMAGE: SACC.jpg
-> next_action_end_turn

===retreat_into_stronghold===
<b>Retreat into stronghold</b> # CLASS: w3-pink
-> next_action_end_turn

===retreat===
<b>Retreat</b> # CLASS: w3-pink
-> next_action_end_turn

===move_max_value_into_region===
<b>Move maximum value_tooltip into region</b> # CLASS: w3-pink
-> next_action_end_turn

===ending===
<b>End</b> # CLASS: w3-pink
-> next_action_end_turn

===corruption_5a_attack_character_die===
Attack using character die # CLASS: w3-pink  # IMAGE: ADSAcharacter.png
+ [Done] -> next_action_end_turn
+ [No Character Die] -> corruption_5a_attack_army_die

===corruption_5a_attack_army_die===
Attack using army die # CLASS: w3-pink  # IMAGE: ADSAarmy.png
+ [Done] -> next_action_end_turn
+ [No Army Die] -> move_create_mobile_army

===corruption_5a_move_character_die===
Move using character die # CLASS: w3-pink # IMAGE: ADSAcharacter.png
~ return_knot = -> stronghold_under_threat
+ [Done] -> next_action
+ [Not Possible] -> army

===corruption_5b_pass_possible===
Pass # CLASS: w3-pink
+ [Done] -> next_action
+ [Not Possible] -> playable_character_cards

===military_5a_attack_character_die===
<b>Attack using character die</b> # CLASS: w3-pink # IMAGE: ADSAcharacter.png
+ [Done] -> next_action_end_turn
+ [No Character Die] -> military_5a_attack_army_die

===military_5a_attack_army_die===
<b>Attack using army die</b> # CLASS: w3-pink # IMAGE: ADSAevent.png
+ [Done] -> next_action_end_turn
+ [No Army Die] -> military_move_create_mobile_army

===military_5a_move_character_die===
Move using character die # CLASS: w3-pink
~ return_knot = -> military_stronghold_under_threat
+ [Done] -> next_action_end_turn
+ [No Character Die] -> army

===military_5b_play_card_character_die===
<b>Play card using character die</b> # CLASS: w3-pink # IMAGE: ADSAcharacter.png
+ [Done] -> next_action_end_turn
+ [No Character Die] -> military_5b_play_card_event_die

===military_5b_play_card_event_die===
<b>Play card using using event die</b> # CLASS: w3-pink # IMAGE: ADSAevent.png
+ [Done] -> next_action_end_turn
+ [No Event Die] -> mobile_army_adjacent_military

===military_5b_pass_possible===
Pass # CLASS: w3-pink
{ warriors_of_middle_earth:
 ~ return_knot = -> military_5b_pass_possible_event
 - else:
 ~ return_knot = -> mobile_army_adjacent_target_military
}
+ [Done] -> next_action
+ [Not Possible]
{ warriors_of_middle_earth:
 -> play_faction_event
 - else:
 -> event
}

===military_5b_pass_possible_event===
~ return_knot = -> mobile_army_adjacent_target_military
 -> event

===common_5b_discard_unplayable===
Discard unplayable dice # CLASS: w3-pink
+ [Done] -> next_action
+ [Not Possible] -> common_5b_use_muster_die_set_aside

===common_5b_use_muster_die_set_aside===
<b>Use Muster die set aside for minion</b> # CLASS: w3-pink # IMAGE: ADSAmuster.png
-> next_action_end_turn

===warriors_play_faction_event_card===
Play Faction Event card.  # CLASS: w3-pink
-> next_action_end_turn

===warriors_draw_faction_event_card===
Draw a Faction Event card.  # CLASS: w3-pink
-> next_action_end_turn

===warriors_muster_faction_figure===
Muster faction figures # CLASS: w3-pink
-> next_action_end_turn

===warriors_bring_faction_play===
Bring faction into play # CLASS: w3-pink
-> next_action_end_turn

===next_action_end_turn===
+ [Next Action] -> next_action
+ [End Turn] -> end_gameturn

===next_action===
{ 
- corruption_strategy:
    -> shadow_under_threat_corruption
- else:
    -> shadow_under_threat_military
}

===end_gameturn===
{ 
- corruption_strategy:
    -> phase_1_corruption
- else:
    -> phase_1_military
}