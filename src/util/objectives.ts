import shuffle from 'lodash.shuffle';

export const objectives = [
  "Proc outlaw on a raid or strike boss",
  "One player has the same perk in every weapon slot",
  "Every player has an exotic armor piece",
  "Any weekly emblem tracker at exactly 69",
  "Complete tower jumping puzzle",
  "Multi-person emote with an opponent in Gambit or Crucible",
  "Half-banked medal",
  "Complete a strike with zero kills",
  "One-phase any dungeon boss",
  "One player has weapons with the same frame name in every slot",
  "Defeat Shuro Chi",
  "Complete Presage",
  "Complete a raid encounter in Festival of the Lost masks",
  "Have exactly 420 parallax trajectory",
  "100k nightfall",
  "\"Operation Babydog\" or \"Fireteam Piccolo\"",
  "Any player in any instance has Sunshot equipped",
  "Get a pike into the basement of Crypt Security",
  "Any new weapon with Rampage",
  "Complete a heroic public event on four different destinations",
  "Obtain an exotic kinetic weapon",
  "Dismantle two Prime Engrams",
  "Win a game in the Trials or Competitive playlists",
  "Complete a Wrathborn Hunt",
  "Obtain and use the Scanner Augment in the Europan Eclipsed zone",
  "Defeat the final boss of any raid",
  "Complete the Chamber of Suffering",
  "Earn an Ascendant Shard",
  "Complete one entire phase of the Riven encounter",
  "Complete every lost sector on a destination",
  "Complete the Master and Legend difficulty lost sectors",
  "Complete battlegrounds with matching elements in heavy, energy, and subclass",
  "Gild the weekly tracker for Shattered Realm completion time",
  "Defeat Vorgeth and Morgeth",
  "\"Guardians make their own fate\"",
  "Complete the weekly challenge in any raid",
  "Complete every daily bounty on a single destination",
  "Complete the final tier of Altars of Sorrow",
  "Kill two Champions with one shot or ability",
  "Complete the Deep Stone Crypt spacewalk",
];

export function getObjectiveSet (): string[] {
  return shuffle(objectives).slice(0, 25);
}

