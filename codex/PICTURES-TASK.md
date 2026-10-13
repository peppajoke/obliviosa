# Task: pictures for the codex, and a fresh D&D Beyond pull

A brief for an agent with open internet access. Written 2026-10-13. Read `../CLAUDE.md` and `README.md` (this folder) first.

## Context

- `codex/things.js` is Jack's DM codex: one object per thing in the story. Entries can have `images: [{ src, caption }]`; files live in `codex/img/`.
- `player/entries.json` is the **players' journal**: only things the party has learned, approved by Jack. It reuses images from `codex/img/`.
- Both publish automatically: every push to `main` that touches `codex/` or `player/` rebuilds the GitHub Pages site (players' journal at the root, DM codex at an unlisted path given in `../CLAUDE.md`; never write that path anywhere players could see).
- The repo and the site are **public**.

## Part 1: pictures

**Goal:** a good picture for every entry in the table below (people, monsters, places, items and factions without one, deprecated entries excluded). Skip rules, quests, events, spells and documents.

**Sources: openly licensed only.** The site is public, so do not use copyrighted fantasy art from Google Images, Pinterest, ArtStation or D&D books. Use:
- Wikimedia Commons (public domain or CC BY / CC BY-SA), via the API or `upload.wikimedia.org`.
- Openverse (`api.openverse.org`), filtered to commercial-use-allowed licences.
- Museum open-access collections: The Met, Cleveland Museum of Art, Art Institute of Chicago (CC0).

Old paintings, engravings and illustrations (public domain) fit the setting well: a stormy coast for the beach, a 19th-century harbour town for Lumenshire, an armoured knight for the Vanguard, an apothecary's shop, a sea serpent engraving. Pick something that matches the entry's description and the campaign's mood (a foggy, haunted island town). A good evocative match beats nothing; nothing beats a wrong one. Leave an entry without a picture rather than force a bad fit.

**Rules:**
- **Spoilers.** Pictures go on DM entries freely. For the journal, see "Players' journal" below.
- **Characters with fixed looks.** Match the entry's description (hair, armour, age, race). At Jack's table **Fawkes is a woman** (Kael's wife, the mayor); the existing `img/fawkes.jpg` is the book's male version, so add a female one as an extra image if you find a good match, captioned "At Jack's table". Do not add a picture for Kael (he has Sal's face; Jack's Sal portrait is `img/sal.jpg`) or for Salanar Reborn (Jack has an art prompt for him in `campaigns/icespire-nad-group/art/image-prompts.md`).
- **Files:** `codex/img/<entry-id>.jpg` (extras `-2`, `-3`), max 900px on the long side, JPEG quality about 82.
- **Credit in the caption,** e.g. `"A Stormy Coast, Ivan Aivazovsky, 1870s. Public domain, Wikimedia Commons."` or `"Photo by X, CC BY 2.0, via Openverse."` CC BY and CC BY-SA require the author and licence named.
- **Record every pick** in `codex/img/CREDITS.md`: a table of file, entry, title, author, licence and source URL.
- Add `images` to the entry in `codex/things.js` after `summary`/`details`/`table` and before `related`. Match the existing formatting. Do not change anything else.

**Check before committing:**
- `node codex/validate.js` must print ALL CHECKS PASSED (it also checks that image files exist).
- Make a contact sheet of everything you added (a grid of thumbnails labelled with entry ids) and save it as `codex/img/contact-sheet-<date>.jpg` so Jack can review it.

### Entries that need a picture
| id | name | type | scope | summary |
| --- | --- | --- | --- | --- |
| `mary-blackwood` | Mary Blackwood | person | book | Ashe's wife and Thorne's mother, eaten by Liv along with the other children. Ashe cannot remember her; the letter asks Thorne whether she wa… |
| `beatrice` | Beatrice | person | book | Middle-aged, welcoming innkeeper of the Dragon's Inn. Rooms are 10 gp a night and every drink is 1 gp. Her inn has far more tables and chair… |
| `carl` | Carl | person | book | Small, ragged, deaf servant boy at the Dragon's Inn. Because he never heard the song, he has seen the hydra from a distance and remembers it… |
| `sarah` | Sarah | person | book | Middle-aged woman drinking whiskey alone at the Dragon's Inn bar. She remembers nothing of her life except her name, is horrified by it, and… |
| `thomas` | Thomas | person | book | Retired sailor at the Dragon's Inn: bushy white beard, eye patch, half-true sea stories. Can offer the party a short trip on his boat, which… |
| `marcus-noble` | Marcus (noble patron) | person | book | Haughty nobleman at a corner table of the Dragon's Inn, in town to check on his estate, whose servant (Carl) cuts his food. Condescending bu… |
| `jack-smith-patron` | Jack (smith at the inn) | person | book | Burly, bearded patron in a leather apron, fresh from the smithy with a dark ale. Cheerful, and happy to show off the tools he made. (Not the… |
| `thaddeus-finn` | Thaddeus Finn | person | book | A powerful mystic said to solve any problem, whose solutions backfire as the universe balances itself. He theorises the monster took memorie… |
| `portal-wizard` | The portal wizard | person | book | A dark, ambitious wizard who in ancient times accidentally opened a portal to the void and let the Forgotten into Lumenshire. They were even… |
| `the-bard` | The bard | person | book | Lumenshire's bard keeps writing sad songs about lost loved ones and does not know who they are about. Part of the town texture of evidence. |
| `election-boy` | The election boy | person | book | A little boy in town who will not stop talking about Fawkes's re-election. Town texture on arrival. |
| `kael-orendis` | Kael Orendis | person | icespire | Liv's father and Fawkes's husband, whose body Sal wears. Decided 2026-10-13: he returned to Lumenshire mysteriously and recently, the talk o… |
| `lysa` | Lysa | person | icespire | Kael's niece in Sal's sheet, taken by Calishite slavers. Decided 2026-10-13: at this table Liv takes her role, as Kael's daughter. |
| `evil-salanar` | Salanar Reborn | monster | icespire | Decided 2026-10-13: the boss. On landing, Liv recognised her father and tore Sal out of his mind; Sal's soul went back to Salanar's own body… |
| `temple-of-ilmater` | Temple of Ilmater | place | icespire | Decided 2026-10-13: where Kael lies in critical condition after his mysterious return, nursed by priests of Sal's own god. |
| `bound-hands` | The Bound Hands of Ilmater | item | icespire | A relic cord of Ilmater that joins two hands, and two souls, if both grip it willingly. Kael's party's cleric carried it to bind Salanar and… |
| `kaels-party` | Kael's fallen party | faction | icespire | Decided 2026-10-13: the companions who fought Salanar beside Kael two years ago. Salanar killed them all; their bones are still on the Reach… |
| `brother-aldric` | Brother Aldric | person | icespire | A kindly old cleric who is Sal's sponsor, treating the void-stone habit like any other addiction. He has no idea what Sal did; his advice is… |
| `merith` | Merith | person | icespire | Salanar's partner, who died slowly of a wasting sickness he could not cure. The grief that led him to void stones. |
| `jack` | Jack | person | icespire | The campaign's author and Sal's player. After the Cryovain finale he takes over from Nick and DMs Lumenshire, voicing Kael and Salanar Rebor… |
| `icespire-dm` | Nick (Icespire DM) | person | icespire | Nick, DM of the NAD Group's Dragon of Icespire Peak game (TheRecoveryRoom on D&D Beyond). Decided 2026-10-13: he runs the Cryovain finale an… |
| `mosco` | Mosco | person | icespire | A half-orc in the Icespire game who runs a lighthouse and lures ships in to steal for Talos; his people are friends with Cryovain. |
| `phandalin-orcs` | Phandalin orcs | faction | icespire | The orcs Sal has been befriending and rehabilitating in the Icespire game. Charles and Chooch are feuding brothers, Alexander converted to S… |
| `halia-thornton` | Halia Thornton | person | icespire | Runs the Phandalin miners' exchange in the Icespire game, wearing a 'trust the process I love New York' hat. Waking-campaign colour only. |
| `adabra` | Adabra | person | icespire | The Umbrage Hill druid in the Icespire game, receiving ingredients from the party (jade berries, fire fern, orc eyes). Waking-campaign colou… |
| `the-forgotten` | The Forgotten | monster | book | Ten-foot grey tentacled aberrations believed to be an ancient enemy let in through the void portal and let back in by Liv's botched spell. T… |
| `cultist` | Cultist of Obliviosa | monster | book | Stat block for the robed worshippers of Liv. Weak in a fight, they prefer to manipulate minds and avoid direct confrontation. |
| `cryovain` | Cryovain | monster | icespire | The white dragon of Nick's Dragon of Icespire Peak game. The party fights him in the finale; Lumenshire begins in the epilogue after. |
| `luminous-vanguard` | Luminous Vanguard | faction | book | Lumenshire's military, founded by Fawkes after the 'attack' and commanded by Seraphina. Deep blue and silver armour with glowing sigils, eer… |
| `liv-and-the-forgotten` | Liv and the Forgotten | faction | book | One of the three major players: Liv, who just wants to be with her father, and the Forgotten, who worship her without being commanded. Elara… |
| `karleens-rebels` | Karleen and the rebels | faction | book | Karleen's side: uncover the truth at any cost. The treehouse is their evidence room and they push the party into Fawkes's library and secret… |
| `lumenshire` | Lumenshire | place | book | An isolated island town far off the coast of Neverwinter, made of four islands: Residential District (NE), Merchant District (SW), Lumen Pie… |
| `residential-district` | Residential District | place | book | The largest island (NE): town hall, church spires, the central square with its sea-themed fountain, memorial displays, and a graveyard far t… |
| `merchant-district` | Merchant District | place | book | The second-largest island (SW): a grand marble trading hall, warehouses, market stalls and the six shops. Some buildings are still scarred s… |
| `lumen-pier` | Lumen Pier | place | book | The NW island and Lumenshire's only port. Ships are rare; the ferry comes once a week. |
| `forgotten-reach` | Forgotten Reach | place | book | The smallest island (SE). Its bridge was blown five years ago to cut off the Forgotten. The ruined courthouse stands here, Liv's lair is ben… |
| `courthouse` | The ruined courthouse | place | book | Where Fawkes was tried for Elara's murder and where Liv cast Oblivion and devoured the courtroom. Now a ruin on the Forgotten Reach, with Li… |
| `livs-lair` | Liv's lair | place | book | Liv's den beneath the ruins of the courthouse on the Forgotten Reach. Her lair actions project the stolen memories of her victims, which mak… |
| `cult-cave` | The cult cave | place | book | The cultists' cave on the Forgotten Reach: guarded entrance, a candlelit temple with a statue of a serene blue-haired woman, and a nest of h… |
| `town-hall` | Town hall and Fawkes's office | place | book | An imposing carved-stone town hall in the residential district. Fawkes's office has floor-to-ceiling windows over the sea; this is where he … |
| `fawkes-secret-lair` | Fawkes's secret lair and library | place | book | A hidden lair beneath town hall that replaces the cut museum. It holds the Oblivion tome (decided 2026-10-11, Q9), the trial records, his su… |
| `blackwood-farmstead` | The Blackwood farmstead | place | book | Ashe's whitewashed farmhouse with a red roof and green shutters, outside town on the beach side of the road, signposted 'Blackwood'. Overgro… |
| `karleens-treehouse` | Karleen's treehouse | place | book | Karleen's evidence room past the graveyard, full of drawings of a family she does not remember. The treehouse reveal opens the Karleen track… |
| `oversized-graveyard` | The oversized graveyard | place | book | The town's graveyard is far too big for a community this small: evidence of how many have been eaten and forgotten. |
| `central-square` | Central square | place | book | The heart of the residential district, with a fountain of sea-themed sculptures and memorial displays. Karleen finds the party here on the f… |
| `town-library` | The town library | place | book | Lumenshire's library contains information that seems to contradict reality. How is still TODO. |
| `lakeside-cabin` | The lakeside cabin | place | book | Fawkes's family home, where he came back to find Elara holding Liv's head under the lake water and killed her. |
| `boat-graveyard` | The hidden boat graveyard | place | book | Somewhere secret on the coast lie many destroyed boats, which is how travel to the island has been obstructed. Karleen knows where. |
| `apothe-gary` | Apothe-gary | place | book | Gary's dim, smoky potion shop and the main source of anti-song tools. The party walks in on Seraphina buying Mystic Melatonin. |
| `willems-forge` | Willem's Forge | place | book | A hot, cavernous stone forge with a faded portrait of a young man nobody remembers above the anvil. Sells weapons, armour and the tuning for… |
| `gwendolyns-garments` | Gwendolyn's Garments | place | book | A cosy fabric shop with tinkling door bells, run by a sad Gwendolyn. |
| `bartholomews-bakery` | Bartholomew's Bakery | place | book | Bartholomew's bakery, famous for pies and bread, where he keeps finding receipts for customers he never served. |
| `enchanted-garden` | The Enchanted Garden | place | book | A shop that appears among the others the morning after the first song, as if it had always been there (Perception DC 20). Its owner has been… |
| `neverwinter` | Neverwinter | place | book | Lumenshire lies far off the coast of Neverwinter, and the farmhouse looks like 'rural Neverwinter'. Decided 2026-10-11 (Q7) over Baldur's Ga… |
| `phandalin` | Phandalin | place | icespire | Base of Nick's Icespire campaign. Thorne finds Sal at the victory celebration here, the last scene before the cut to black. |
| `gnomengarde` | Gnomengarde | place | icespire | Icespire location where the party has contracts. Poisoned ale here is one suggested knockout. |
| `dwarf-excavation` | The dwarf excavation | place | icespire | Ancient ruins south-west of Phandalin where the party had contracts in the Icespire game. |
| `shrine-of-savras` | Shrine of Savras | place | icespire | Where Rowan touched the altar and saw Cryovain destroying Conyberry, and a fortress on Icespire Peak that felt like home. |
| `staff-of-silence` | Staff of Silence | item | book | Obsidian staff that nullifies all sound in a 50-yard radius, magical sound included. It stops the song long enough to get close to Liv and s… |
| `eternal-tome` | Eternal Tome of Lumenshire | item | book | Legendary tome holding everything that was ever shared knowledge in Lumenshire, but not private secrets. It contains the keeper clause the O… |
| `vial-of-complete-restoration` | Vial of Complete Restoration | item | book | Legendary elixir that cures every ailment, restores lost memories, reverses ageing, and gives advantage on everything for a day. In the keep… |
| `oblivion-tome` | The Oblivion tome | item | book | Elara's book holding the Oblivion spell, which Liv cast from. Fawkes owns it; decided 2026-10-11 (Q9) it is in his secret lair under town ha… |
| `fawkes-serum` | Fawkes's serum | item | book | Fawkes claims it will unmask Forgotten hiding among the townsfolk when mixed into the Remembrance Festival ale. Decided 2026-10-11 (Q3): it … |
| `fawkes-marbles` | Fawkes's marbles | item | book | Marbles Fawkes hands each party member; each can imprison one incapacitated person once. Meant for witnesses to the potion errand. |
| `mystic-melatonin` | Mystic Melatonin | item | book | Gary's gummy that drops the eater into eight hours of deep, dreamless sleep (20 gp). Seraphina buys it to stop her nightmares of the hydra. |
| `potion-of-encapsulation` | Potion of Encapsulation | item | book | Gary's potion that seals the drinker in an impenetrable sphere for 15 minutes or until they snap their fingers. No sound gets in, so it bloc… |
| `balm-of-the-banshee` | Balm of the Banshee | item | book | Gary's throat salve (18 gp) that lets the user scream or sing loud enough to drown out all other sound, shatter glass or stun foes. A song c… |
| `potion-of-deafness` | Potion of Deafness | item | book | Gary can be talked into making exactly one, because it is messed up, and cannot say whether the deafness is permanent. A deafened player com… |
| `tuning-fork` | Tuning fork | item | book | Sold at Willem's Forge for 1 gp. Struck on metal it makes a loud resonant sound that can stun, and counts as noise against the song. |
| `orb-of-screaming` | Orb of Screaming | item | book | Pressed with five fingers, it lets out a piercing scream for one minute and dissolves. A canon song counter that started as a museum item. |
| `hydras-fury` | Hydra's Fury | item | book | The Dragon's Inn's potent cocktail with a splash of dragonfire whiskey, 'known to make even the toughest adventurer forget their worries'. G… |
| `potion-of-clarity` | Potion of clarity | item | book | Ashe's potion, widely regarded as fake paranoid nonsense, that guards the mind against outside influence and gives advantage on Obliviosa ch… |
| `cultist-necklace` | Cultist necklace | item | book | Insignia necklace worn by the cult. One may turn up in a party pocket after the first night, or in Fawkes's desk drawer as trail evidence. |
| `conch-of-absolute-truth` | Conch of absolute truth | item | book | A one-line idea in the 2025 raw notes, never written up. |
| `void-stones` | Void stones | item | icespire | Black crystals that erase pain, and held long enough, erase people. Salanar's addiction; he wears his last one on a cord to resist it. Decid… |
| `sending-stones` | Sending Stones | item | icespire | Darla's stone is paired with Sal's. After the landing, Sal's stone is on unconscious Kael at the temple: a call gets silence and breathing; … |
| `luminous-vanguard-armour` | Luminous Vanguard armour | item | icespire | Third candidate artifact against Cryovain: a suit of glowing-sigil Vanguard armour, or Seraphina's own, that burns cold away. Only reachable… |
| `haunted-one-props` | Haunted One possessions | item | icespire | Personal possessions on the party sheets that are already horror props: Sal's cloth doll skewered with needles, TJ's bone caltrop, Rowan's e… |
| `salt-wind` | The Salt Wind | item | book | The party's ship, helmed by Cid, that wrecks on Lumenshire. |

## Players' journal

Only touch `player/entries.json` for entries that are **already in it**. Add the same image there only if the picture gives nothing away beyond what that journal entry says: no monsters the party has not seen, nothing that hints at a twist. When in doubt, leave the journal alone and list it in your report for Jack. Then run `python3 player/build.py`; it must succeed (it has a leak guard). Never add new journal entries.

## Part 2: fresh D&D Beyond pull (optional, if the sheets are reachable)

The party's sheets were last pulled 2026-10-11 into `campaigns/icespire-nad-group/party/ddb-roster.json`. Character ids are in that file; sheet URLs are `https://www.dndbeyond.com/characters/<id>`.

- Try `https://character-service.dndbeyond.com/character/v5/character/<id>`. Public characters return JSON without login. If it needs auth, follow `campaigns/icespire-nad-group/party/SYNC.md` (Jack signed in, browser pane); never enter credentials.
- Update `ddb-roster.json` with the same fields, append a dated entry to `party/CHANGELOG.md` (what changed per character), and refresh each PC's `details` in `codex/things.js` (the "From D&D Beyond (pulled ...)" block).
- **Party portraits are already done** with art Jack supplied (`img/sal.jpg`, `darla-dewdrop.jpg`, `porridge.jpg`, `rowan-sunwood.jpg`, `sprig-grenoble.jpg`, `tj-star.jpg`, `rynn-caulrunners.jpg`). Do not replace them with D&D Beyond avatars.

## Committing

Commit as Jack's GitHub identity, set per command (do not change global config):
`GIT_AUTHOR_NAME=peppajoke GIT_COMMITTER_NAME=peppajoke GIT_AUTHOR_EMAIL=16992043+peppajoke@users.noreply.github.com GIT_COMMITTER_EMAIL=16992043+peppajoke@users.noreply.github.com git commit ...`

Run `git pull --rebase origin main` before pushing. Pushing to `main` deploys the site.

## Report back to Jack

- How many entries got pictures, and which you skipped and why.
- The contact sheet path.
- Any journal pictures you were unsure about.
- What changed on the D&D Beyond sheets, if Part 2 ran.
