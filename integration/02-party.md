# 02. The party (synced from D&D Beyond 2026-10-11)

Campaign **NAD Group** ("AKA Sal's Pizza"), DM TheRecoveryRoom, [campaign 7693664](https://www.dndbeyond.com/campaigns/7693664). Raw pull in `party/ddb-roster.json`. Re-sync method at the bottom.

| Character | Class | Player | HP | Key kit | On the island |
| --- | --- | --- | --- | --- | --- |
| **Sal** (Salanar in Kael Orendis's body) | Paladin 5, Oath of Redemption | Jack (DMing the dream) | 34 | Sentinel Shield, splint, greatclub, Zone of Truth, Calm Emotions | Not on the island. Asleep-side voice on the stone. |
| **Darla Dewdrop** | Rogue 5, Soulknife, halfling | Nat | 28 | **Sending Stones**, Potion of Invisibility, Ring of Warmth, expertise Persuasion and Animal Handling, Actor | Karleen's track is hers: treehouse, the break-in, the DON'T FORGET pages. She holds the stone that reaches Sal. |
| **Porridge** | Wizard 5, Necromancy, drow | Amanda | 22 | Animate Dead, Summon Lesser Demons, Blindness/Deafness, Tasha's Mind Whip, Cause Fear, Darkness; talks to spirits nobody else sees | The Oblivion tome and the Eternal Tome are hers. Blindness/Deafness is a song counter she already owns. Most likely to understand the keeper clause first. |
| **Rowan Sunwood** | Druid 5, Circle of the Land, wood elf | Tara | 28 | Staff of the Python, Revivify, Conjure Animals, Moonbeam, Pass without Trace, Lightning Bolt (land spell) | Revivify changes the death math. Lightning Bolt is the Forgotten's weakness. Ashe's dogs and the Reach are hers. |
| **Sprig Grenoble** | Monk 5, Warrior of Mercy, human | Steph | 28 | Lucky, Fey Touched (Misty Step, Hex), Stunning Strike, Hand of Healing, drum, thieves' tools, speaks Orc | Staff of Silence, sneaking up on Liv while she is not singing. The drum is a noise tool against the song. |
| **TJ Star** | Barbarian 4, Berserker, half-orc | Alicia | 33 | Dual Wielder, Clockwork Amulet, 550 gp, three chests of gear, "I have an addiction" | The "so drunk the song cannot land" discovery. Hydra's Fury at the Dragon's Inn is for him. |
| **Rynn Caulrunners** | Fighter 4, Battle Master, dwarf | Hailey (rarely plays) | 28 | Maul, Great Weapon Master, smith's tools | Occasional. Fine to be absent from the dream without comment; if present, Willem's Forge is her door. |

**Entry level: 5.** Scale Liv, the Forgotten, Fawkes and Seraphina to a level 5 party of five or six.

## Things the sheets say about the waking game

- **Every character has the "Dark Bargain" feat.** Homebrew, campaign-wide. Jack knows what it is; it should be written into `01-plan.md` because a party-wide pact is exactly the kind of thing Liv's illusions can play with. **[Jack: what is Dark Bargain?]**
- **Four Rings of Warmth and Ice Knife on two casters.** The party is kitted for Cryovain. Lumenshire is not cold. Let them notice.
- **The Sending Stones are Darla's.** Only one stone is listed on any sheet. **[Jack: who holds the other, Sal or an NPC?]** If Sal, the live-line design works as written. If an NPC, the design needs Sal to have borrowed it.
- **Three Haunted One backgrounds** (Sal, Porridge, TJ) and one personal possession each that is already a horror prop: a cloth doll skewered with needles, a bone caltrop, an eggshell painted with scenes of misery. Liv can use those.
- **Rowan's notes record the campaign so far:** Sal's horn summons orcs; Charles and Chooch are feuding brothers; Alexander converted to Sal's cause; Chooch Jr is gathering orcs to meet in Phandalin; a lighthouse where a half-orc named Mosco lures ships for Talos, and "they are friends with Cryovain and they are Talos"; Halia Thornton runs the miners' exchange; Adabra (the Umbrage Hill druid) is receiving ingredients; a shrine of Savras where Rowan touched the altar and saw Cryovain destroying Conyberry and a fortress on Icespire Peak that felt like home. Full text in the JSON.
- **Revivify is on the table** (Rowan). The past/future rule says "died and stayed dead at the end of the dream". Revivify keeps a death from counting. Diamonds are the limit; the party has one blue sapphire and no diamonds listed.

## Sal's full backstory, as written on the sheet

Now on file in the JSON. Two things in it matter for the integration and were not known before:

1. **Kael Orendis confronted Salanar in Calimshan, among the Vel'tharin survivors.** The integration says Kael grew up in Lumenshire. Both can be true: Kael was born on the island, left young (which is why Ashe still remembers him and why Liv never got him), became a paladin on the mainland and was in Calimshan when the Erasure happened. Ashe has not seen him since he left.
2. **Lysa, Kael's niece, taken by Calishite slavers six months before the Erasure.** Kael's niece is **Ashe's granddaughter**, the child of one of the four Orendis children Liv ate. Ashe cannot remember her. Sal is actively searching for her. The two campaigns now share a missing girl. **[Jack: deliberate? If yes, Lysa is the strongest possible thread between the island and the waking game, and the past ending can hand Sal a lead.]**

## Re-syncing from D&D Beyond

1. Open `https://www.dndbeyond.com/campaigns/7693664` in the browser pane while Jack is signed in. Character ids are the `/characters/<id>` links on that page.
2. In page JavaScript: `POST https://auth-service.dndbeyond.com/v1/cobalt-token` with credentials to get a token, then `GET https://character-service.dndbeyond.com/character/v5/character/<id>` with `Authorization: Bearer <token>`. Direct curl is refused (403); unauthenticated fetch from the page is refused too.
3. Regenerate `party/ddb-roster.json` and this table.
