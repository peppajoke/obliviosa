// Obliviosa Codex data. One object per thing in the story.
// Shape and rules: see codex/README.md. Loaded by codex/index.html as a plain script
// (not JSON) so the page works when opened straight from disk.
window.THINGS = [

  // ───────────────────────────── PEOPLE (book) ─────────────────────────────

  {
    id: "liv", name: "Liv (Obliviosa)", aliases: ["Obliviosa", "the hydra", "the false hydra", "the three-headed monster", "the blue monster"],
    type: "monster", scope: "book", status: "canon",
    summary: "Fawkes and Elara's daughter. At nine she cast Oblivion at her father's murder trial to make the town forget his crime; the spell failed and she became a thirty-foot blue memory-devouring hydra. Anyone she eats is erased from the memory of everyone who knew them.",
    details: "Cannot speak; understands Common. Wants to be with her father. Knows everything.\nCR 10, AC 17, HP 195, speed 40 / swim 40. Multiattack: bite +10 (2d10+6) and two tentacles +10 (2d6+6, grapple DC 16, up to three grappled).\nFrightful Presence DC 16 Wis, 120 ft. Legendary Resistance 3/day. Regeneration 10 unless she took acid or fire damage. Must submerge every 4 hours.\nLair actions replay stolen memories: Memory Eruption, Spectral Guardian (a Specter), Distorted Reality; legendary lair actions Memory Maze, Phantasmal Assault, Reverie of Oblivion (DC 16).\nShe sings the hydra song. Killing her restores every lost memory on the island; saving her through a willing keeper does too (keeper clause).\nOpen: INT 2 vs. a Liv who 'longs for forgiveness'; Frightful Presence is referenced as 'altered memory' by a lair action but does not alter memory.",
    table: "Proposal (08-salanar): her song is the Vel'tharin burden song turned inside out, and the Vel'tharin are inside her. Her lair projections can show a robed healer (Salanar, face a perception void) handing her a black stone. In the future timeline she will know the soul in Kael's body.",
    related: ["fawkes", "elara", "spell-oblivion", "night-of-the-spell", "hydra-song", "keeper-clause", "livs-lair", "the-forgotten", "hydra-spawn", "cult-of-obliviosa", "the-feedings", "salanar"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/characters/liv-obliviosa.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/loose/false-hydra-redux-script.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "fawkes", name: "Mayor Fawkes", aliases: ["Fawkes", "Fawks", "Hawkes", "the mayor"],
    type: "person", scope: "book", status: "canon",
    summary: "Mayor of Lumenshire, hailed as the hero who drove off 'the Forgotten's attack' five years ago. In truth he killed his wife Elara while she was drowning Liv, and has fed captives to his daughter every few nights since. The only person who remembers everything; suicidal at campaign start.",
    details: "Human fighter 10 (sheet says Lawful Evil). AC 18, HP 85, longsword +1, Protection style, Second Wind, Action Surge, crits on 19-20.\nGreying hair, deep blue eyes, gold and silver armour, dark blue cloak.\nWants to keep Liv alive and keep Karleen out of it. Can be convinced to change.\nHis serum plan for the Remembrance Festival is the keeper ritual by force (decided 2026-10-11, Q3). He owns the Oblivion tome but not the Eternal Tome, so he does not know the clause needs consent.\nHands out marbles that each imprison one witness. Declining his errand means never leaving the island.",
    table: "Proposal (08-salanar): he alone knows who helped Liv cast the spell and believes that man (Salanar) is dead. He does not know Kael's body carries Salanar.",
    related: ["liv", "elara", "karleen", "seraphina-dawnbringer", "luminous-vanguard", "fawkes-serum", "fawkes-marbles", "oblivion-tome", "fawkes-trial", "the-feedings", "remembrance-festival", "town-hall", "fawkes-secret-lair", "fawkes-track", "ending-fawkes-sacrifice"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/characters/mayor-fawkes.md", "drive/loose/fawkes-missions.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/loose/false-hydra-redux-script.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "elara", name: "Elara", aliases: ["Liv's mother", "Fawkes's wife"],
    type: "person", scope: "book", status: "canon",
    summary: "Fawkes's wife and Liv's mother: a historian-witch obsessed with the Forgotten and descended from the wizard who first opened the void portal. Fawkes killed her while she was drowning Liv. Decided 2026-10-11 (Q2): she is the will inside the Forgotten, and Liv is her way back into a body.",
    details: "Sapphire eyes, raven-black braided hair, silver crescent-moon pendant. Mentally unstable, alternately tender and cruel to Liv.\nRedux goal: reunite her family into one being, devour Lumenshire as fuel and ascend; Liv is half the plan.\nHer plan and the cure are the same ritual with different intent: she wants to be the keeper of every memory on the island, which is why the cultists feed Liv.\nEndings 4 (kill Elara, save Liv) and 6 (Elara wins) are hers.",
    table: "Proposal (08-salanar): Salanar was her research partner. The Oblivion ritual is their joint work; drowning Liv may have been preparation, since only the portal-wizard's blood can open the void.",
    related: ["fawkes", "liv", "the-forgotten", "portal-wizard", "oblivion-tome", "keeper-clause", "lakeside-cabin", "ending-kill-elara", "ending-elara-wins", "salanar"],
    sources: ["book/00-canon.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md", "drive/characters/elara.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/loose/false-hydra-redux-script.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "karleen", name: "Karleen", aliases: ["Karlina", "Karleena"],
    type: "person", scope: "book", status: "canon",
    summary: "Half-elf former assistant to Fawkes, fired two weeks before the party arrives. Liv ate her whole family; Fawkes took her in and hid it. She keeps their drawings and belongings without knowing whose they are, and leads the rebels trying to uncover the truth.",
    details: "Wizard 3, AC 11, HP 18, spell DC 13: Fire Bolt, Mage Hand, Prestidigitation, Magic Missile, Shield, Detect Magic, Misty Step, Invisibility. Not a combatant.\nAuburn hair, green-gold eyes. Kind, optimistic, reserved.\nNoticed watching the party (Perception DC 15); approaches with the DON'T FORGET pages; rents a room at the Dragon's Inn as a base.\nHer treehouse is the evidence room. She pushes the party to break into Fawkes's library / secret lair.\nDecided 2026-10-11 (Q4): she alone gives the intro speech, which is still written in Marcus's voice and needs rewriting.\nPossible keeper. Can become mayor if Liv dies.",
    table: "Darla's track. Lysa option B (proposal): Karleen is Lysa, a wreck survivor Fawkes renamed. In session 1 she was supposed to meet the party and 'a man named Kael'.",
    related: ["fawkes", "dont-forget-pages", "karleens-treehouse", "karleens-rebels", "karleen-track", "karleen-family-documents", "marcus-ainsworth", "thorne-blackwood", "boat-graveyard", "lysa", "darla-dewdrop"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md", "drive/characters/karleen.md", "drive/notes/into-lumenshire.md", "drive/notes/liv-scratch.md", "drive/notes/obliviosa-redux-raw-notes.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "seraphina-dawnbringer", name: "Seraphina Dawnbringer", aliases: ["Seraphine", "Seraphina"],
    type: "person", scope: "book", status: "canon",
    summary: "Commander of the Luminous Vanguard and Fawkes's right hand. She dreams of the three-headed monster and buys Mystic Melatonin from Gary to stop the dreams; consciously she suspects nothing. Can be peeled away from Fawkes, but it is very hard.",
    details: "Paladin 10 (human in the header, aasimar in her backstory). AC 20, HP 100, Holy Avenger greatsword, Aura of Courage, Improved Divine Smite.\nSummons the party to Fawkes; refusing means a fight and being dragged there unconscious. Can 'deliver justice' as an Act 3 opener.\nOn day one she delivers Fawkes's pitch at the inn in the afternoon.\nA natural keeper if turned. One of the four 'mouths' that can say the truth in the finale.",
    related: ["fawkes", "luminous-vanguard", "mystic-melatonin", "apothe-gary", "fawkes-track", "keeper-clause", "luminous-vanguard-armour"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/characters/seraphina-dawnbringer.md", "drive/locations/apothe-gary.md", "drive/loose/fawkes-missions.md", "drive/locations/lumenshire.md"]
  },
  {
    id: "ashe-blackwood", name: "Ashe Blackwood", aliases: ["Ashe Orendis", "Ashe", "Thorne's dad", "the old man at the farm"],
    type: "person", scope: "book", status: "canon",
    summary: "Very old, paranoid hermit on the Blackwood farmstead. Liv ate his wife Mary and all four children, and he remembers none of them; his house is full of their things. Wrote the letter found in blood, and hates Fawkes, who has tried to move him off the farm.",
    details: "Human, AC 12, HP 24 (level 4). Two attack dogs on chains, a flintlock pistol. Advantage vs charm and fear, disadvantage vs madness.\nGreets the party with 'COME TO TAKE THE REST OF ME DO YE?' and 'I TOLD THAT DIRTY OLD MAN FAWKES I AIN'T LEAVIN'. Persuasion DC 25 or he and the dogs attack.\nShown the letter, he does not recognise his own handwriting, then does, then asks which of them is Thorne.\nHis journal and a 'story thing' clue in the house are still unwritten. Sells or holds the potion of clarity. Possible dark-horse keeper. Possible wildcard combat sheet (TODO).",
    table: "At the Icespire table he is Ashe Orendis, Kael's father, and the letter is to Kael. He remembers Kael leaving but not the family before him. Bringing him home to Phandalin is Sal's errand. If the party is kind he gives them Kael's room and a child's drawing of a blue-haired girl. Proposal (08): Kael left the night of the attack, 'silent, wrong, one eye darker'. Open: does he know his son's eyes do not match?",
    related: ["blackwood-farmstead", "letter-found-in-blood", "thorne-blackwood", "mary-blackwood", "blackwood-blade", "potion-of-clarity", "ashes-journal", "kael-orendis", "sals-errand", "lysa", "childs-drawing"],
    sources: ["book/00-canon.md", "book/01-opening-the-letter.md", "book/05-sacrifice-and-hooks.md", "drive/characters/ashe-blackwood.md", "drive/loose/rude-awakening.md", "drive/found-documents/a-letter-found-in-blood.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "thorne-blackwood", name: "Thorne Blackwood", aliases: ["Thorn", "the forgotten friend"],
    type: "person", scope: "book", status: "canon",
    summary: "Ashe's son, a Lumenshire-born ranger and the party's friend, who brought them to the island after his father's letter and was eaten by Liv during the wreck. Nobody remembers him; only his blood, his family blade and the letter remain.",
    details: "Originally designed as a planted 'fake' player who leaves the table when the song first plays (option A). Options B (cold open) and C (replace him) exist; decided 2026-10-11 (Q6) that each table chooses.\nFixed facts whatever the choice: Ashe's son, carried the family blade, eaten during the wreck and the reason it happened.\nMay have been romantically attached to Karleen (mentioned once, undecided).",
    table: "Not in the Icespire run. The forgotten friend there is a nameless sailor/guide under the void of perception, and the letter is to Kael.",
    related: ["forgotten-friend", "ashe-blackwood", "letter-found-in-blood", "blackwood-blade", "the-wreck", "salt-wind-toast", "thornes-journal", "karleen"],
    sources: ["book/01-opening-the-letter.md", "book/03-open-questions.md", "drive/characters/thorne-blackwood.md", "drive/loose/obliviosa-session-0.md", "drive/loose/act-1-salvage-operation.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "mary-blackwood", name: "Mary Blackwood", aliases: ["Mary", "Mary Orendis", "Ashe's wife"],
    type: "person", scope: "book", status: "canon",
    summary: "Ashe's wife and Thorne's mother, eaten by Liv along with the other children. Ashe cannot remember her; the letter asks Thorne whether she was kind.",
    table: "Sal, on the sending stone, remembers that 'Mary keeps bees behind the house'. The hives are there, empty.",
    related: ["ashe-blackwood", "thorne-blackwood", "blackwood-farmstead", "salanar"],
    sources: ["book/00-canon.md", "drive/characters/thorne-blackwood.md", "drive/found-documents/a-letter-found-in-blood.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "cid-tidebringer", name: "Cid Tidebringer", aliases: ["Cid"],
    type: "person", scope: "book", status: "canon",
    summary: "The party's sailor friend and helmsman of the Salt Wind, who dreams of flying. He survives the wreck and is in town, not remembering it clearly, wanting a 5,000 gp ship or the weekly ferry and already talking about building something that flies.",
    details: "Tall, ebony skin, short curly black hair, silver seagull pendant. Does not fight.\nThe airship escape with Cid is ending 8 and the campaign's 'to be continued' valve. Reunion and airship build (and his collaborator) are TODO.",
    table: "Whether Cid is a perception void is still open (01-plan).",
    related: ["salt-wind", "the-wreck", "ending-airship-escape", "salt-wind-toast"],
    sources: ["book/00-canon.md", "book/01-opening-the-letter.md", "book/02-story-flow.md", "drive/characters/cid-tidebringer.md", "drive/loose/intro-aboard-the-salt-wind.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "gary", name: "Gary", aliases: ["the apothecary"],
    type: "person", scope: "book", status: "canon",
    summary: "Small, wiry, wild-haired alchemist who runs Apothe-gary and loves explaining the pun. Sells Seraphina her Mystic Melatonin and most of the island's anti-song tools.",
    details: "Can be talked into brewing one Potion of Deafness, exactly once; he cannot say whether it is permanent.\nTrail clue: a robed customer bought all his Mystic Melatonin.",
    related: ["apothe-gary", "mystic-melatonin", "potion-of-encapsulation", "balm-of-the-banshee", "potion-of-deafness", "seraphina-dawnbringer"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/locations/apothe-gary.md", "drive/notes/into-lumenshire.md"]
  },
  {
    id: "willem", name: "Willem", aliases: ["the blacksmith"],
    type: "person", scope: "book", status: "canon",
    summary: "Gruff mid-40s master blacksmith of Willem's Forge. His hole: the work has become much harder lately and he does not know why, and a faded portrait of a grinning young man with an arm over his shoulder hangs above the anvil.",
    details: "Asked about the portrait, he becomes frightened, accuses the party of putting it there and asks them to leave; he is heard crying afterwards. A half-finished, inferior sword lies on a bench.",
    related: ["willems-forge", "the-holes", "rynn-caulrunners"],
    sources: ["book/00-canon.md", "drive/locations/willems-forge.md"]
  },
  {
    id: "gwendolyn", name: "Gwendolyn", aliases: ["the seamstress"],
    type: "person", scope: "book", status: "canon",
    summary: "Early-30s seamstress who owns Gwendolyn's Garments. Her hole: she has started feeling lonely and cannot remember ever having a close friend or family member. Red, puffy eyes; lingers on an embroidered cloak.",
    related: ["gwendolyns-garments", "the-holes"],
    sources: ["book/00-canon.md", "drive/locations/gwendolyns-garments.md"]
  },
  {
    id: "bartholomew", name: "Bartholomew", aliases: ["the baker"],
    type: "person", scope: "book", status: "canon",
    summary: "Portly, kindly baker in his late 50s, nervous under the cheer. His hole: he keeps finding receipts and notes for customers he never served.",
    table: "Sal on the stone remembers the bakery as the Fenwicks' (Marta Fenwick). Bartholomew has run it for thirty years.",
    related: ["bartholomews-bakery", "the-holes", "marta-fenwick"],
    sources: ["book/00-canon.md", "drive/locations/bartholomews-bakery.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "beatrice", name: "Beatrice", aliases: ["the innkeeper"],
    type: "person", scope: "book", status: "canon",
    summary: "Middle-aged, welcoming innkeeper of the Dragon's Inn. Rooms are 10 gp a night and every drink is 1 gp. Her inn has far more tables and chairs than patrons.",
    related: ["the-dragons-inn", "hydras-fury"],
    sources: ["book/00-canon.md", "drive/locations/the-dragons-inn.md"]
  },
  {
    id: "carl", name: "Carl", aliases: ["Servantboy Carl", "the deaf servant boy"],
    type: "person", scope: "book", status: "canon",
    summary: "Small, ragged, deaf servant boy at the Dragon's Inn. Because he never heard the song, he has seen the hydra from a distance and remembers it, though he never saw it eat anyone.",
    details: "Originally the servant of the noble patron Marcus; Q4 (decided 2026-10-11) keeps Carl as a tavern patron when Marcus Ainsworth is cut. Seeds the cave / Forgotten Reach.",
    related: ["the-dragons-inn", "marcus-noble", "hydra-song", "liv"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/03-open-questions.md", "drive/locations/the-dragons-inn.md"]
  },
  {
    id: "sarah", name: "Sarah", aliases: ["the woman at the bar"],
    type: "person", scope: "book", status: "canon",
    summary: "Middle-aged woman drinking whiskey alone at the Dragon's Inn bar. She remembers nothing of her life except her name, is horrified by it, and turns agitated or angry if pushed.",
    related: ["the-dragons-inn", "the-holes"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "drive/locations/the-dragons-inn.md"]
  },
  {
    id: "thomas", name: "Thomas", aliases: ["Thomas the sailor", "the old sailor"],
    type: "person", scope: "book", status: "canon",
    summary: "Retired sailor at the Dragon's Inn: bushy white beard, eye patch, half-true sea stories. Can offer the party a short trip on his boat, which is a backup push past the Forgotten Reach.",
    related: ["the-dragons-inn", "forgotten-reach", "cult-track"],
    sources: ["book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/locations/the-dragons-inn.md"]
  },
  {
    id: "marcus-noble", name: "Marcus (noble patron)", aliases: ["the noble at the inn"],
    type: "person", scope: "book", status: "canon",
    summary: "Haughty nobleman at a corner table of the Dragon's Inn, in town to check on his estate, whose servant (Carl) cuts his food. Condescending but happy to talk about his holdings.",
    details: "A different Marcus from the cut Marcus Ainsworth, though Q4 calls Carl 'Marcus's deaf servant'. Which Marcus that means is unresolved.",
    related: ["carl", "the-dragons-inn", "marcus-ainsworth"],
    sources: ["drive/locations/the-dragons-inn.md", "book/03-open-questions.md"]
  },
  {
    id: "jack-smith-patron", name: "Jack (smith at the inn)", aliases: ["the burly smith"],
    type: "person", scope: "book", status: "canon",
    summary: "Burly, bearded patron in a leather apron, fresh from the smithy with a dark ale. Cheerful, and happy to show off the tools he made. (Not the real-world Jack.)",
    related: ["the-dragons-inn", "willems-forge"],
    sources: ["drive/locations/the-dragons-inn.md"]
  },
  {
    id: "thaddeus-finn", name: "Thaddeus Finn", aliases: ["the mystic"],
    type: "person", scope: "book", status: "canon",
    summary: "A powerful mystic said to solve any problem, whose solutions backfire as the universe balances itself. He theorises the monster took memories as payment and that restoring them has a price. Decided 2026-10-11 (Q10) to salvage him from the deprecated Thorne's Journal.",
    related: ["thornes-journal", "keeper-clause"],
    sources: ["book/03-open-questions.md", "drive/deprecated/thornes-journal.md"]
  },
  {
    id: "portal-wizard", name: "The portal wizard", aliases: ["Elara's ancestor", "the ancient wizard"],
    type: "person", scope: "book", status: "canon",
    summary: "A dark, ambitious wizard who in ancient times accidentally opened a portal to the void and let the Forgotten into Lumenshire. They were eventually driven back and became myth. Elara is his descendant.",
    table: "Proposal (08): only his bloodline can open the void, and void stones are shards of his portal.",
    related: ["elara", "the-forgotten", "void-stones"],
    sources: ["book/00-canon.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "the-bard", name: "The bard", aliases: ["local bard"],
    type: "person", scope: "book", status: "canon",
    summary: "Lumenshire's bard keeps writing sad songs about lost loved ones and does not know who they are about. Part of the town texture of evidence.",
    related: ["the-holes", "residential-district"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "drive/notes/into-lumenshire.md"]
  },
  {
    id: "election-boy", name: "The election boy", aliases: ["little boy", "the kid who won't shut up"],
    type: "person", scope: "book", status: "canon",
    summary: "A little boy in town who will not stop talking about Fawkes's re-election. Town texture on arrival.",
    table: "Lysa option A (proposal) suggests he, or another nameless child, could secretly be Lysa.",
    related: ["fawkes-re-election", "lysa"],
    sources: ["book/02-story-flow.md", "drive/obliviosa-root/basic-script.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "marcus-ainsworth", name: "Marcus Ainsworth", aliases: ["chubby", "Marcus"],
    type: "person", scope: "book", status: "deprecated",
    summary: "Cut. A bookish museum scholar and Thorne's childhood friend who held the DON'T FORGET notes and pitched the museum heist. Replaced by Karleen ('fully replace chubby with Karleen'); decided 2026-10-11 (Q4).",
    details: "Into Lumenshire still voices Karleen's speech as Marcus's ('he'); that rewrite is a TODO.",
    related: ["karleen", "museum-of-wonders", "dont-forget-pages", "marcus-noble"],
    sources: ["drive/deprecated/marcus-ainsworth.md", "drive/notes/liv-scratch.md", "drive/notes/into-lumenshire.md", "book/03-open-questions.md"]
  },
  {
    id: "blue-haired-woman", name: "The blue-haired woman", aliases: ["blue-haired statue"],
    type: "person", scope: "book", status: "deprecated",
    summary: "Cut. In the 2023 cave, a blue-haired woman (Liv in human form) having sex with cultists, sick and eating more. Decided 2026-10-11 (Q5): the sex-cult material is cut; cultists and a nest of spawn remain, and Liv stays a victim.",
    related: ["cult-cave", "cult-of-obliviosa", "hydra-spawn", "liv"],
    sources: ["drive/notes/into-lumenshire.md", "drive/deprecated/thornes-journal.md", "book/03-open-questions.md"]
  },

  // ───────────────────────────── PEOPLE (Icespire table) ─────────────────────────────

  {
    id: "salanar", name: "Sal (Salanar)", aliases: ["Sal", "Salanar", "Brother Salanar"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Jack's paladin: the soul of Salanar, a grief-mad healer who used void stones in an erasure he believed was mercy, living in Kael Orendis's body after forcing his soul into it. Decided 2026-10-13: Salanar and Kael are both from Lumenshire, his catastrophe happened there, and he was on the bad side of the Liv ordeal.",
    details: "Paladin 5, Oath of Redemption, HP 34, Sentinel Shield. Faith Ilmater. Two years 'clean', wears his last void stone on a cord. Hears two voices, Ilmater and the Unmaker. Sponsor: Brother Aldric.\nAt the table he is a lighthearted, peacekeeping goofball, open about having done something terrible; do not make him grim.\nNot on the island: Jack DMs the dream. Reachable by sending stone, three calls a day; remembers the island as it was before the rampage.\nProposal (08): Elara's partner, the island's healer; put Elara's book and a void stone in Liv's hands and was meant to be the vessel, then flinched. His empty body was eaten, so the island has forgotten him; five years in Kael's body, two years awake.\nOpen: how dark (did he know about Elara and Liv), what went wrong with the stone, what the Unmaker is, and how to handle 'Calimshan' at the table (recommend goofball deflection).",
    related: ["kael-orendis", "void-stones", "great-erasure", "vel-tharin", "merith", "brother-aldric", "lysa", "two-voices", "sending-stones", "elara", "jack", "sals-errand", "accomplice-slot"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "kael-orendis", name: "Kael Orendis", aliases: ["Kael", "my beloved son Kael"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Ashe Orendis's youngest son, a paladin born on Lumenshire, whose body Sal wears. He confronted Salanar, who forced his soul into Kael. The letter in the blood is addressed to him.",
    details: "Fixed: Kael, the body swap, Kael's oath and his mission to find Lysa.\nProposal (08): he confronted Salanar on the Reach the night of the rampage as the bridge came down, and his body left the island silent and wrong, one eye darker. Older docs (04, 05) say he left young, before Liv; 08 supersedes that but 05/06 are not yet rewritten.\nNobody at the table knows a Kael; every player knows whose body bears the name.",
    related: ["salanar", "ashe-blackwood", "letter-found-in-blood", "lysa", "great-erasure"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "lysa", name: "Lysa", aliases: ["Kael's niece", "Ashe's granddaughter"],
    type: "person", scope: "icespire", status: "proposal",
    summary: "Kael's niece and Ashe's granddaughter, taken by Calishite slavers (from Lumenshire, per 08) before the night of the spell. Finding her is Kael's mission and Sal's thread to redemption. Where she is now is undecided.",
    details: "Options (06): A alive on the island as a nameless child nobody notices (recommended); B she is Karleen; C she was eaten and is inside Liv; D she is with the cult as Liv's favoured acolyte.\nShared mechanism: the slaver ship wrecked on Lumenshire, perhaps lured by the Talos wreckers.\nTiming conflict: 06 says about two and a half years ago; 08 moves it to about five and a half.\nSal has never said her name to anyone but Brother Aldric.",
    related: ["kael-orendis", "salanar", "ashe-blackwood", "karleen", "cult-of-obliviosa", "boat-graveyard", "mosco", "brother-aldric", "election-boy"],
    sources: ["campaigns/icespire-nad-group/06-lysa-options.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/07-todo.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "brother-aldric", name: "Brother Aldric", aliases: ["Aldric"],
    type: "person", scope: "icespire", status: "canon",
    summary: "A kindly old cleric who is Sal's sponsor, treating the void-stone habit like any other addiction. He has no idea what Sal did; his advice is mundane, earnest and accidentally profound.",
    details: "Proposal (08): he tended Kael's body at a shrine of Ilmater on the mainland through Salanar's three lost years.",
    related: ["salanar", "void-stones", "shrine-of-ilmater", "lysa"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "merith", name: "Merith", aliases: ["Salanar's partner"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Salanar's partner, who died slowly of a wasting sickness he could not cure. The grief that led him to void stones.",
    details: "Proposal (08): on Lumenshire, a sickness the Vel'tharin burden songs could not lift; Salanar meant the spell to take Merith's death from him too.",
    related: ["salanar", "void-stones", "burden-songs"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "marta-fenwick", name: "Marta Fenwick", aliases: ["the Fenwicks"],
    type: "person", scope: "icespire", status: "proposal",
    summary: "Sal's memory, on the sending stone, of the bakery next to Willem's: 'Marta Fenwick, three kids, the youngest has a lisp.' The bakery is Bartholomew's; the Fenwicks are a hole the party can go and stand in.",
    related: ["bartholomew", "bartholomews-bakery", "sending-stones", "salanar"],
    sources: ["campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "jack", name: "Jack", aliases: ["snekkyjek", "the DM"],
    type: "person", scope: "icespire", status: "canon",
    summary: "The campaign's author. DMs the Lumenshire dream and plays Sal in the Icespire game, so Sal stays in Phandalin and speaks only through the sending stone.",
    details: "Everything Sal hears on the stone, Sal knows in the Icespire game: Jack has an in-character reason to dread a letter he has not received yet.",
    related: ["salanar", "icespire-dm", "dream-frame", "sending-stones"],
    sources: ["campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "icespire-dm", name: "TheRecoveryRoom (Icespire DM)", aliases: ["the Icespire DM", "the other DM", "TheRecoveryRoom"],
    type: "person", scope: "icespire", status: "canon",
    summary: "DM of the NAD Group's Dragon of Icespire Peak game. Knocks the whole party out at a moment of their choosing, implies Sal is in danger beforehand, and keeps loot and XP from the dream on the sheets.",
    details: "Needs to give Jack: the knockout scene, the party's level, a yes on loot carrying over. Open: comfort with Cryovain having already hit Phandalin (past timeline).",
    related: ["the-knockout", "jack", "phandalin", "cryovain"],
    sources: ["campaigns/icespire-nad-group/03-handoff-for-other-dm.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "darla-dewdrop", name: "Darla Dewdrop", aliases: ["Darla"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Nat's halfling Rogue 5 (Soulknife). Holds the Sending Stones that reach Sal. Karleen's track is hers: the treehouse, the break-in, the DON'T FORGET pages.",
    details: "Player: Nat. HP 28. Expertise Persuasion and Animal Handling, Actor feat, Potion of Invisibility, Ring of Warmth, Common Sign Language.",
    related: ["sending-stones", "karleen", "karleen-track", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "porridge", name: "Porridge", aliases: [],
    type: "person", scope: "icespire", status: "canon",
    summary: "Amanda's drow Wizard 5 (Necromancy) who talks to spirits nobody else sees. The Oblivion tome and the Eternal Tome are hers; most likely to understand the keeper clause first.",
    details: "Player: Amanda. HP 22. Animate Dead, Summon Lesser Demons, Tasha's Mind Whip, Cause Fear, Darkness. Blindness/Deafness is a song counter she already owns. Haunted One; bond 'There's evil in me'.",
    related: ["oblivion-tome", "eternal-tome", "keeper-clause", "blindness-deafness", "haunted-one-props", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "rowan-sunwood", name: "Rowan Sunwood", aliases: ["Rowan"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Tara's wood elf Druid 5 (Circle of the Land) from Ardeep Forest. Revivify changes the death math of the past/future rule; Lightning Bolt hits the Forgotten's weakness. Ashe's dogs and the Reach are hers.",
    details: "Player: Tara. HP 28. Staff of the Python, Conjure Animals, Moonbeam. Keeps the party's session notes. Personal possession: an eggshell painted with scenes of misery. Saw Cryovain destroying Conyberry at the shrine of Savras.",
    related: ["revivify", "the-forgotten", "forgotten-reach", "haunted-one-props", "past-future-rule", "shrine-of-savras", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "sprig-grenoble", name: "Sprig Grenoble", aliases: ["Sprig"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Steph's human Monk 5 (Warrior of Mercy). Her island hooks are the Staff of Silence and sneaking up on Liv while she is not singing; her drum is a noise tool against the song.",
    details: "Player: Steph. HP 28. Lucky, Fey Touched (Misty Step, Hex), thieves' tools, speaks Orc. Faith Eldath.",
    related: ["staff-of-silence", "song-counters", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "tj-star", name: "TJ Star", aliases: ["TJ"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Alicia's half-orc Barbarian 4 (Berserker), flaw 'I have an addiction'. He is the 'so drunk the song cannot land' discovery; Hydra's Fury at the Dragon's Inn is for him.",
    details: "Player: Alicia. HP 33, 550 gp, three chests of gear, Clockwork Amulets. Personal possession: a caltrop made from bone.",
    related: ["hydras-fury", "song-counters", "haunted-one-props", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "rynn-caulrunners", name: "Rynn Caulrunners", aliases: ["Rynn"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Hailey's dwarf Fighter 4 (Battle Master); Hailey rarely plays. Fine to be absent from the dream without comment; if present, Willem's Forge is her door.",
    details: "Player: Hailey. HP 28. Maul, Great Weapon Master, smith's tools. No Dark Bargain on her sheet.",
    related: ["willems-forge", "willem"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "mosco", name: "Mosco", aliases: ["the lighthouse half-orc", "Talos wreckers"],
    type: "person", scope: "icespire", status: "canon",
    summary: "A half-orc in the Icespire game who runs a lighthouse and lures ships in to steal for Talos; his people are friends with Cryovain.",
    details: "Lysa proposal (06): a Calishite slaver ship lured onto the Reach by wreckers like these ties both campaigns together.",
    related: ["cryovain", "lysa", "boat-graveyard"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/06-lysa-options.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "phandalin-orcs", name: "Phandalin orcs", aliases: ["Charles", "Chooch", "Chooch Jr", "Alexander", "the orc horn"],
    type: "faction", scope: "icespire", status: "canon",
    summary: "The orcs Sal has been befriending and rehabilitating in the Icespire game. Charles and Chooch are feuding brothers, Alexander converted to Sal's cause, Chooch Jr is gathering orcs to meet in Phandalin. Sal has a horn that summons Charles and his gang.",
    details: "Part of why Sal stays behind: the orcs and the town need him.",
    related: ["salanar", "phandalin"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "halia-thornton", name: "Halia Thornton", aliases: [],
    type: "person", scope: "icespire", status: "canon",
    summary: "Runs the Phandalin miners' exchange in the Icespire game, wearing a 'trust the process I love New York' hat. Waking-campaign colour only.",
    related: ["phandalin"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "adabra", name: "Adabra", aliases: ["the Umbrage Hill druid"],
    type: "person", scope: "icespire", status: "canon",
    summary: "The Umbrage Hill druid in the Icespire game, receiving ingredients from the party (jade berries, fire fern, orc eyes). Waking-campaign colour only.",
    related: ["phandalin", "rowan-sunwood"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },

  // ───────────────────────────── MONSTERS ─────────────────────────────

  {
    id: "the-forgotten", name: "The Forgotten", aliases: ["tentacle people", "squid people", "the Forgotten's attack"],
    type: "monster", scope: "book", status: "canon",
    summary: "Ten-foot grey tentacled aberrations believed to be an ancient enemy let in through the void portal and let back in by Liv's botched spell. Twist: they are people, cultists and victims, corrupted by memory magic. They regard Liv as a goddess but she does not command them; Elara is the will inside them (Q2).",
    details: "Super weak to lightning: attackers get advantage on hit and damage.\nLarge, AC 16, HP 150, speed 30, roughly CR 9. Two tentacles +9 (3d8+5, grapple DC 17, two at once), Memory Drain (DC 16 Wis, 3d6 psychic, last 24 hours erased), Swallow (DC 16 Dex, 6d6 acid), Fearful Presence DC 16, incorporeal movement. Legendary: Memory Absorption, Nightmarish Presence, Move. Immune psychic, charm, fear.\nAct 2 finale: one wanders into town in daylight and carries a clue pointing at Fawkes (TODO).\nTimeline (Q8): the fake history says they were a myth until recently; canon is five years since the rampage.",
    table: "Proposal (08): most of the unmade Vel'tharin became the Forgotten.",
    related: ["liv-and-the-forgotten", "liv", "elara", "cult-of-obliviosa", "portal-wizard", "night-of-the-spell", "forgotten-walks-into-town", "vel-tharin", "forgotten-reach"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "drive/characters/the-forgotten.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/notes/liv-scratch.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "hydra-spawn", name: "Hydra-Spawn", aliases: ["hydra babies", "the nest"],
    type: "monster", scope: "book", status: "canon",
    summary: "Medium blue-tentacled aberrations, part human, sleeping in a web-like nest in the cult cave. Kept when the sex-cult framing was cut (Q5).",
    details: "CR 4, AC 14, HP 25, speed 30 / swim 30. Two tentacles +6 (1d8+4 plus 1d8 acid, DC 14 Con or poisoned). Memory Drain 60 ft (DC 14 Int, 3d6 psychic, forget a memory). Swallow (3d6 acid). Stealth DC 20 for the whole party or they wake.",
    related: ["cult-cave", "liv", "cult-of-obliviosa", "blue-haired-woman"],
    sources: ["drive/obliviosa-root/hydra-babies.md", "drive/notes/into-lumenshire.md", "book/02-story-flow.md", "book/03-open-questions.md"]
  },
  {
    id: "cultist", name: "Cultist of Obliviosa", aliases: ["Cultist of the Mind's Eye", "cultist stat block"],
    type: "monster", scope: "book", status: "canon",
    summary: "Stat block for the robed worshippers of Liv. Weak in a fight, they prefer to manipulate minds and avoid direct confrontation.",
    details: "CR 2, AC 13 leather, HP 33. Scimitar, dagger. Mind Wipe 1/day (DC 15 Wis or forget what it was doing and lose its next turn). Arcana, Deception, Religion +4.\nLoot: cultist uniform, necklace with insignia, a journal (the linked doc is lost).",
    related: ["cult-of-obliviosa", "cultist-necklace", "cultist-journal"],
    sources: ["drive/obliviosa-root/cultist-character-sheet.md"]
  },
  {
    id: "vanguard-soldier", name: "Luminous Vanguard Soldier", aliases: ["Vanguard knight", "Lumin Guard soldier"],
    type: "monster", scope: "book", status: "canon",
    summary: "Stat block for a rank-and-file Vanguard knight: a level 6 human paladin, devoted and humble. The public and secret history sections are still empty.",
    details: "AC 18 (chain and shield), HP 72, longsword, Dueling, Divine Smite, Lay on Hands 30, Aura of Protection +3.\nNameless Vanguard who will die on the island fall under the void of perception.",
    related: ["luminous-vanguard", "void-of-perception"],
    sources: ["drive/characters/luminous-vanguard-soldier.md", "book/04-todo.md"]
  },
  {
    id: "ironclad", name: "Ironclad (arcane construct)", aliases: ["arcane construct", "museum guard construct"],
    type: "monster", scope: "book", status: "deprecated",
    summary: "Cut with the museum. An arcane construct guardian (AC 18, HP 60, slam +7) that emerged when a heist alarm tripped.",
    related: ["museum-of-wonders"],
    sources: ["drive/deprecated/arcane-construct.md", "drive/deprecated/museum-of-wonders.md"]
  },
  {
    id: "cryovain", name: "Cryovain", aliases: ["the white dragon"],
    type: "monster", scope: "icespire", status: "canon",
    summary: "The white dragon of the waking campaign, Dragon of Icespire Peak. The party met him once and got stomped. The past-timeline payoff is a weapon from Lumenshire that can kill him.",
    details: "Spelling decided 2026-10-11. The party is kitted for him (four Rings of Warmth, Ice Knife on two casters); Lumenshire is not cold.\nOpen: whether he has already hit Phandalin in the past timeline (05 proposes removing that need).",
    related: ["forgetting-edge", "phandalin", "icespire-dm", "mosco", "past-future-rule"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },

  // ───────────────────────────── FACTIONS ─────────────────────────────

  {
    id: "luminous-vanguard", name: "Luminous Vanguard", aliases: ["the Vanguard", "Lumin Guard", "Luminous Vanguard Knights"],
    type: "faction", scope: "book", status: "canon",
    summary: "Lumenshire's military, founded by Fawkes after the 'attack' and commanded by Seraphina. Deep blue and silver armour with glowing sigils, eerie precision, an almost cult-like air; the town trusts them. Their job is to keep the secret and keep Liv alive.",
    details: "They question newcomers who arrive without Karleen; suspicious ones go to Seraphina. If ignored, they start hunting the party.\nThe guard can be separated from Fawkes, but it is very hard.\nTrail evidence: a patrol roster with gaps on the nights of the feedings.",
    related: ["fawkes", "seraphina-dawnbringer", "vanguard-soldier", "fawkes-track", "patrol-roster", "luminous-vanguard-armour"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/locations/lumenshire.md", "drive/characters/mayor-fawkes.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "cult-of-obliviosa", name: "The cult of Obliviosa", aliases: ["the cultists", "black robes", "robed outsiders", "the cult"],
    type: "faction", scope: "book", status: "canon",
    summary: "Black-robed worshippers who believe Liv is a goddess who takes away pain and that the town is lucky to be fed to her. They are slowly turning into Forgotten, and they feed Liv to fill the vessel for Elara.",
    details: "Base: the cult cave on the Forgotten Reach. They call the Remembrance Festival 'the Feast'.\nTheir pitch arrives planted on the party the first night: a necklace, a dead cultist with a journal, or blue chalk symbols on the door.\nCult track reveals how the song works, what blocks it, that the Forgotten were people, and 'the vessel must be filled'.",
    table: "Lysa option D (proposal): surviving slavers became the robed outsiders and Lysa grew up among them as Liv's favoured acolyte.",
    related: ["cultist", "cult-cave", "cult-track", "cultist-journal", "cultist-necklace", "blue-chalk-symbols", "the-forgotten", "elara", "remembrance-festival", "lysa"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/notes/into-lumenshire.md", "drive/obliviosa-root/cultist-character-sheet.md", "drive/notes/liv-scratch.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "liv-and-the-forgotten", name: "Liv and the Forgotten", aliases: ["the Forgotten (faction)"],
    type: "faction", scope: "book", status: "canon",
    summary: "One of the three major players: Liv, who just wants to be with her father, and the Forgotten, who worship her without being commanded. Elara is the will steering them toward the keeper ritual.",
    related: ["liv", "the-forgotten", "elara", "cult-of-obliviosa"],
    sources: ["book/00-canon.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "karleens-rebels", name: "Karleen and the rebels", aliases: ["the rebels"],
    type: "faction", scope: "book", status: "canon",
    summary: "Karleen's side: uncover the truth at any cost. The treehouse is their evidence room and they push the party into Fawkes's library and secret lair.",
    details: "If ignored, Karleen is arrested by the Vanguard and her treehouse is torched.",
    related: ["karleen", "karleens-treehouse", "karleen-track", "fawkes-secret-lair"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "vel-tharin", name: "The Vel'tharin", aliases: ["Vel'tharin", "the healer order"],
    type: "faction", scope: "icespire", status: "proposal",
    summary: "Salanar's people, a healer order of Ilmater that sang burden songs. Sal's sheet places them in the Alimir foothills of Calimshan; the 08 proposal makes them Lumenshire's healers, with a chapel on the south-east island beside the courthouse.",
    details: "Proposal: unmade in the Great Erasure on the night of Liv's spell; most became the Forgotten; Liv's song is their burden song. The table may already have heard 'Calimshan' (see Sal).",
    related: ["salanar", "burden-songs", "great-erasure", "veltharin-chapel", "the-forgotten", "calimshan"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "flaming-fist", name: "Flaming Fist (43rd Fist Infantry)", aliases: ["43rd Fist Infantry", "Fist", "Gortash"],
    type: "faction", scope: "book", status: "deprecated",
    summary: "Cut. The 2025 Session 0 made the party new Flaming Fist of Baldur's Gate celebrating Gortash's fall, sworn in and branded before heading out. Dropped with the pre-wreck act (Q1) and the Neverwinter anchor (Q7).",
    related: ["salvage-operation", "baldurs-gate", "neverwinter"],
    sources: ["drive/loose/obliviosa-session-0.md", "book/03-open-questions.md"]
  },

  // ───────────────────────────── PLACES (book) ─────────────────────────────

  {
    id: "lumenshire", name: "Lumenshire", aliases: ["the island", "Isles of Lumenshire"],
    type: "place", scope: "book", status: "canon",
    summary: "An isolated island town far off the coast of Neverwinter, made of four islands: Residential District (NE), Merchant District (SW), Lumen Pier (NW) and the Forgotten Reach (SE, bridge destroyed). Quiet, under-populated, and covered in Fawkes re-election posters.",
    details: "Getting off: return passage 1,000 gp a head, a ship 5,000 gp, or the weekly ferry. There is no map yet (TODO).\nSociety/History DC 15: you have heard of it and cannot remember why.",
    table: "Sal remembers the island as it was before the rampage and describes it wrong in all the ways that matter.",
    related: ["residential-district", "merchant-district", "lumen-pier", "forgotten-reach", "blackwood-farmstead", "neverwinter", "fawkes-re-election"],
    sources: ["book/00-canon.md", "drive/locations/lumenshire.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "residential-district", name: "Residential District", aliases: ["NE island"],
    type: "place", scope: "book", status: "canon",
    summary: "The largest island (NE): town hall, church spires, the central square with its sea-themed fountain, memorial displays, and a graveyard far too big for the town.",
    details: "Memorial displays still need writing (TODO).",
    table: "Proposal (08): a burden-song hymnal in the church.",
    related: ["town-hall", "oversized-graveyard", "central-square", "lumenshire", "town-library"],
    sources: ["book/00-canon.md", "drive/locations/residential-district.md", "drive/obliviosa-root/basic-script.md"]
  },
  {
    id: "merchant-district", name: "Merchant District", aliases: ["SW island", "grand trading hall"],
    type: "place", scope: "book", status: "canon",
    summary: "The second-largest island (SW): a grand marble trading hall, warehouses, market stalls and the six shops. Some buildings are still scarred shells from 'the attack'.",
    related: ["apothe-gary", "willems-forge", "gwendolyns-garments", "bartholomews-bakery", "the-dragons-inn", "mystics-emporium", "enchanted-garden", "lumenshire"],
    sources: ["book/00-canon.md", "drive/locations/merchant-district.md"]
  },
  {
    id: "lumen-pier", name: "Lumen Pier", aliases: ["NW island", "the port"],
    type: "place", scope: "book", status: "canon",
    summary: "The NW island and Lumenshire's only port. Ships are rare; the ferry comes once a week.",
    details: "Fawkes's potion shipment arrives here two days into the first-day structure.",
    table: "Sal remembers crossing a bridge by the pier to the courthouse. There is no bridge.",
    related: ["lumenshire", "fawkes-serum", "boat-graveyard"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/locations/lumen-pier.md"]
  },
  {
    id: "forgotten-reach", name: "Forgotten Reach", aliases: ["Mysterious Island", "SE island", "the Reach"],
    type: "place", scope: "book", status: "canon",
    summary: "The smallest island (SE). Its bridge was blown five years ago to cut off the Forgotten. The ruined courthouse stands here, Liv's lair is beneath it, and the cult cave is on it. Nobody goes.",
    details: "The Drive doc is empty: 'Forgotten Reach part 1' is TODO. Townsfolk only know rumours about the ruined building.",
    table: "Proposal (08): the Vel'tharin chapel stood here; void stones wash up on its shore; Kael confronted Salanar here as the bridge came down.",
    related: ["courthouse", "livs-lair", "cult-cave", "the-forgotten", "veltharin-chapel", "void-stones", "lumenshire"],
    sources: ["book/00-canon.md", "drive/locations/forgotten-reach.md", "drive/locations/lumenshire.md", "drive/characters/mayor-fawkes.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "courthouse", name: "The ruined courthouse", aliases: ["courtroom", "the courthouse"],
    type: "place", scope: "book", status: "canon",
    summary: "Where Fawkes was tried for Elara's murder and where Liv cast Oblivion and devoured the courtroom. Now a ruin on the Forgotten Reach, with Liv's lair beneath.",
    related: ["fawkes-trial", "night-of-the-spell", "livs-lair", "forgotten-reach"],
    sources: ["book/00-canon.md", "drive/characters/mayor-fawkes.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "livs-lair", name: "Liv's lair", aliases: ["Obliviosa's lair", "beneath the courthouse"],
    type: "place", scope: "book", status: "canon",
    summary: "Liv's den beneath the ruins of the courthouse on the Forgotten Reach. Her lair actions project the stolen memories of her victims, which makes the lair one of the places the truth can be shown out loud.",
    details: "The party can go to her here or wait for her to come and feed in town. Final battle staging is TODO.",
    table: "Proposal (08): the projections show the night, including a robed healer with a voided face handing her a black stone.",
    related: ["liv", "courthouse", "forgotten-reach", "cult-cave", "partial-knowledge"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/characters/liv-obliviosa.md", "drive/characters/mayor-fawkes.md"]
  },
  {
    id: "cult-cave", name: "The cult cave", aliases: ["the cave", "Obliviosa's temple"],
    type: "place", scope: "book", status: "canon",
    summary: "The cultists' cave on the Forgotten Reach: guarded entrance, a candlelit temple with a statue of a serene blue-haired woman, and a nest of hydra-spawn. Destination of the cult track.",
    details: "Leads: Ashe's clues, cultist trails, the lost-child search, a map in an unreadable language, Thomas's boat. A 'cool way to find the cave' (riddle?) is TODO.\nCut (Q5): the 2023 cultist bickering about who is her favourite and the sex scene.",
    related: ["cult-of-obliviosa", "hydra-spawn", "forgotten-reach", "cult-track", "lost-child", "map-to-the-cave", "blue-haired-woman"],
    sources: ["book/02-story-flow.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md", "drive/notes/into-lumenshire.md", "drive/notes/liv-scratch.md"]
  },
  {
    id: "town-hall", name: "Town hall and Fawkes's office", aliases: ["Fawkes's office", "town hall"],
    type: "place", scope: "book", status: "canon",
    summary: "An imposing carved-stone town hall in the residential district. Fawkes's office has floor-to-ceiling windows over the sea; this is where he makes his serum pitch and hands out the marbles.",
    related: ["fawkes", "fawkes-secret-lair", "fawkes-serum", "fawkes-marbles", "residential-district"],
    sources: ["book/00-canon.md", "drive/loose/fawkes-missions.md"]
  },
  {
    id: "fawkes-secret-lair", name: "Fawkes's secret lair and library", aliases: ["Fawkes's library", "secret lair under town hall", "Fawkes's vault"],
    type: "place", scope: "book", status: "canon",
    summary: "A hidden lair beneath town hall that replaces the cut museum. It holds the Oblivion tome (decided 2026-10-11, Q9), the trial records, his suicide note and the documents on Karleen's family. The Karleen-track break-in.",
    details: "Layout, first boss and the Fawkes encounter are TODO. Raw notes mention tentacle people and cultist guards.",
    table: "In 01-plan the Feyfire Lantern sits in Fawkes's vault (proposal).",
    related: ["oblivion-tome", "trial-records", "fawkes-suicide-note", "karleen-family-documents", "karleen-track", "town-hall", "museum-of-wonders", "feyfire-lantern"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/03-open-questions.md", "drive/notes/liv-scratch.md", "drive/notes/obliviosa-redux-raw-notes.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "blackwood-farmstead", name: "The Blackwood farmstead", aliases: ["the farmhouse", "Orendis farm"],
    type: "place", scope: "book", status: "canon",
    summary: "Ashe's whitewashed farmhouse with a red roof and green shutters, outside town on the beach side of the road, signposted 'Blackwood'. Overgrown yard, candlelit windows, two dogs, and rooms full of a family he cannot remember.",
    details: "A clue in the house ('something cool that is a story thing') is TODO.",
    table: "At the Icespire table it is the goal location, not just a door. Kael's room, a child's drawing of a blue-haired girl, empty beehives, and perhaps a child's room newer than the others (Lysa option C).",
    related: ["ashe-blackwood", "the-wreck", "childs-drawing", "sals-errand"],
    sources: ["book/00-canon.md", "book/01-opening-the-letter.md", "drive/loose/rude-awakening.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "karleens-treehouse", name: "Karleen's treehouse", aliases: ["the old treehouse", "evidence room"],
    type: "place", scope: "book", status: "canon",
    summary: "Karleen's evidence room past the graveyard, full of drawings of a family she does not remember. The treehouse reveal opens the Karleen track.",
    details: "What happens there besides exposition is TODO. Trail evidence nearby: blue chalk symbols. Torched if the party ignores Karleen.",
    related: ["karleen", "karleen-track", "oversized-graveyard", "blue-chalk-symbols"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/notes/obliviosa-redux-raw-notes.md"]
  },
  {
    id: "oversized-graveyard", name: "The oversized graveyard", aliases: ["graveyard"],
    type: "place", scope: "book", status: "canon",
    summary: "The town's graveyard is far too big for a community this small: evidence of how many have been eaten and forgotten.",
    related: ["the-holes", "residential-district", "karleens-treehouse"],
    sources: ["book/00-canon.md", "drive/notes/into-lumenshire.md"]
  },
  {
    id: "central-square", name: "Central square", aliases: ["the square", "fountain"],
    type: "place", scope: "book", status: "canon",
    summary: "The heart of the residential district, with a fountain of sea-themed sculptures and memorial displays. Karleen finds the party here on the first morning.",
    details: "Town texture: graffiti reading 'Fuck the Forgotten', strange symbols on walls.",
    related: ["residential-district", "karleen", "remembrance-festival"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/locations/residential-district.md"]
  },
  {
    id: "town-library", name: "The town library", aliases: ["library"],
    type: "place", scope: "book", status: "canon",
    summary: "Lumenshire's library contains information that seems to contradict reality. How is still TODO.",
    related: ["the-holes", "residential-district"],
    sources: ["drive/notes/into-lumenshire.md", "book/04-todo.md"]
  },
  {
    id: "lakeside-cabin", name: "The lakeside cabin", aliases: ["the lake"],
    type: "place", scope: "book", status: "canon",
    summary: "Fawkes's family home, where he came back to find Elara holding Liv's head under the lake water and killed her.",
    related: ["fawkes", "elara", "liv", "fawkes-trial"],
    sources: ["book/00-canon.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md"]
  },
  {
    id: "boat-graveyard", name: "The hidden boat graveyard", aliases: ["destroyed boats", "ship graveyard"],
    type: "place", scope: "book", status: "canon",
    summary: "Somewhere secret on the coast lie many destroyed boats, which is how travel to the island has been obstructed. Karleen knows where.",
    table: "Lysa proposal: the Calishite slaver ship is one of them.",
    related: ["karleen", "lumen-pier", "the-wreck", "lysa"],
    sources: ["book/00-canon.md", "drive/notes/obliviosa-redux-raw-notes.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "apothe-gary", name: "Apothe-gary", aliases: ["Apothe-Gary", "the apothecary"],
    type: "place", scope: "book", status: "canon",
    summary: "Gary's dim, smoky potion shop and the main source of anti-song tools. The party walks in on Seraphina buying Mystic Melatonin.",
    details: "Stock: Healing Potion 2d6 (10 gp), Mystic Melatonin (20), Potion of Truth (30), Elixir of the Eagle (15), Levitation (20), Enhanced Hearing (12), Soothing Salve (5), Tonic of Courage +5 for 5 min (7), Potion of Encapsulation, Flame Oil +1 / +1d6 (8), Antidote (10), Balm of the Banshee (18).",
    related: ["gary", "mystic-melatonin", "potion-of-encapsulation", "balm-of-the-banshee", "potion-of-deafness", "seraphina-dawnbringer", "merchant-district"],
    sources: ["drive/locations/apothe-gary.md", "book/00-canon.md"]
  },
  {
    id: "willems-forge", name: "Willem's Forge", aliases: ["the forge", "the smithy"],
    type: "place", scope: "book", status: "canon",
    summary: "A hot, cavernous stone forge with a faded portrait of a young man nobody remembers above the anvil. Sells weapons, armour and the tuning fork that can drown out the song.",
    details: "Stock: dagger 5 gp, chainmail 30, mace 15, warhammer 25, shield 10, tuning fork 1, greataxe 35, throwing hammer 5, breastplate 20.",
    table: "Rynn's door, if she is present.",
    related: ["willem", "tuning-fork", "merchant-district", "rynn-caulrunners"],
    sources: ["drive/locations/willems-forge.md", "book/00-canon.md", "campaigns/icespire-nad-group/02-party.md"]
  },
  {
    id: "gwendolyns-garments", name: "Gwendolyn's Garments", aliases: [],
    type: "place", scope: "book", status: "canon",
    summary: "A cosy fabric shop with tinkling door bells, run by a sad Gwendolyn.",
    details: "Stock: thread 1 gp, hemming tape 5, embroidery kit 10, Enchanted Kevlar Cloth 80, silk 20, buttons 2.",
    related: ["gwendolyn", "merchant-district"],
    sources: ["drive/locations/gwendolyns-garments.md", "book/00-canon.md"]
  },
  {
    id: "bartholomews-bakery", name: "Bartholomew's Bakery", aliases: ["the bakery"],
    type: "place", scope: "book", status: "canon",
    summary: "Bartholomew's bakery, famous for pies and bread, where he keeps finding receipts for customers he never served.",
    details: "Stock: baguette 1 gp, apple tart 3, sourdough 2, blueberry muffin 1.5, almond croissant 3, oatmeal raisin cookies 1.5, a bag of crisps 1 (loud CRUNCH).",
    table: "Sal remembers it as the Fenwicks' bakery, next to Willem's.",
    related: ["bartholomew", "merchant-district", "marta-fenwick"],
    sources: ["drive/locations/bartholomews-bakery.md", "book/00-canon.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "the-dragons-inn", name: "The Dragon's Inn", aliases: ["the inn", "the tavern"],
    type: "place", scope: "book", status: "canon",
    summary: "Beatrice's inn, too big for its patrons, hung with dragon tapestries. Karleen rents a room here as the party's base, and the party wakes here after each song with cuts they cannot explain.",
    details: "Drinks, all 1 gp: Dragon's Breath Ale, Pixie Punch, Hydra's Fury, Elvish Wine, Dwarven Stout, Faerie Nectar, Unicorn's Blood.\nPatrons: Jack the smith, Marcus the noble with servant Carl, Sarah, Thomas; halflings dicing, a bard. TODO: revise patrons so each leads to the cave or to memory restoration.\nOn day one Seraphina delivers Fawkes's pitch here in the afternoon.",
    table: "TJ's door (Hydra's Fury). Session 1 ends with the party waking here holding the cult plant.",
    related: ["beatrice", "hydras-fury", "carl", "sarah", "thomas", "marcus-noble", "jack-smith-patron", "karleen", "first-night", "merchant-district"],
    sources: ["drive/locations/the-dragons-inn.md", "book/00-canon.md", "book/02-story-flow.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/04-session-1-intro.md"]
  },
  {
    id: "mystics-emporium", name: "The Mystic's Emporium", aliases: ["the magic shop", "abandoned shop"],
    type: "place", scope: "book", status: "canon",
    summary: "A ransacked, abandoned magic shop smelling of burnt wood: overturned shelves, smashed potions, tattered spellbooks. Still needs a clue planted in it (TODO).",
    related: ["merchant-district", "enchanted-garden"],
    sources: ["drive/locations/the-mystics-emporium.md", "book/00-canon.md", "drive/obliviosa-root/liv-todo.md"]
  },
  {
    id: "enchanted-garden", name: "The Enchanted Garden", aliases: [],
    type: "place", scope: "book", status: "canon",
    summary: "A shop that appears among the others the morning after the first song, as if it had always been there (Perception DC 20). Its owner has been forgotten.",
    related: ["first-night", "merchant-district", "the-holes"],
    sources: ["book/02-story-flow.md", "drive/notes/into-lumenshire.md"]
  },
  {
    id: "neverwinter", name: "Neverwinter", aliases: [],
    type: "place", scope: "book", status: "canon",
    summary: "Lumenshire lies far off the coast of Neverwinter, and the farmhouse looks like 'rural Neverwinter'. Decided 2026-10-11 (Q7) over Baldur's Gate.",
    table: "Phandalin is a few days from Neverwinter, so the Icespire game fits without moving anything.",
    related: ["lumenshire", "baldurs-gate", "phandalin"],
    sources: ["book/00-canon.md", "book/03-open-questions.md", "drive/locations/lumenshire.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "baldurs-gate", name: "Baldur's Gate", aliases: [],
    type: "place", scope: "book", status: "deprecated",
    summary: "Cut. The 2025 Session 0 started the party in a Baldur's Gate tavern as Flaming Fist. Dropped for Neverwinter (Q7).",
    related: ["flaming-fist", "neverwinter"],
    sources: ["drive/loose/obliviosa-session-0.md", "book/03-open-questions.md"]
  },
  {
    id: "museum-of-wonders", name: "Museum of Wonders", aliases: ["Lumenshire Alley Museum of Wonders", "the museum", "the heist"],
    type: "place", scope: "book", status: "deprecated",
    summary: "Cut. A 24-room magic museum and heist (alarm levels, potion roulette, riddles, construct guards) that held the Staff of Silence, Eternal Tome and Vial. Replaced by Fawkes's secret lair under town hall.",
    details: "Potion roulette colours: red hostile, blue advantage, green one-word sentences, yellow/purple raise the alarm, orange/pink lower it, white shrinks you to an inch.",
    related: ["marcus-ainsworth", "ironclad", "fawkes-secret-lair", "staff-of-silence", "eternal-tome", "vial-of-complete-restoration", "crystal-orb-of-clairvoyance", "chronomancers-pocket-watch", "feyfire-lantern", "mask-of-disguise", "cloak-of-elvenkind", "harp-of-serenity", "orb-of-screaming"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md", "drive/notes/liv-scratch.md", "book/04-todo.md"]
  },

  // ───────────────────────────── PLACES (Icespire table) ─────────────────────────────

  {
    id: "phandalin", name: "Phandalin", aliases: [],
    type: "place", scope: "icespire", status: "canon",
    summary: "Base of the waking Icespire campaign. Sal stays here while the party dreams, holding the town and the orcs together; in the future timeline a letter for Kael Orendis arrives here.",
    related: ["salanar", "cryovain", "phandalin-orcs", "gnomengarde", "dwarf-excavation", "letter-found-in-blood"],
    sources: ["campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "gnomengarde", name: "Gnomengarde", aliases: [],
    type: "place", scope: "icespire", status: "canon",
    summary: "Icespire location where the party has contracts. Poisoned ale here is one suggested knockout.",
    related: ["phandalin", "the-knockout"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "dwarf-excavation", name: "The dwarf excavation", aliases: [],
    type: "place", scope: "icespire", status: "canon",
    summary: "Ancient ruins south-west of Phandalin where the party has contracts. A collapse here is one suggested knockout.",
    related: ["phandalin", "the-knockout"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "shrine-of-savras", name: "Shrine of Savras", aliases: [],
    type: "place", scope: "icespire", status: "canon",
    summary: "Where Rowan touched the altar and saw Cryovain destroying Conyberry, and a fortress on Icespire Peak that felt like home.",
    related: ["rowan-sunwood", "cryovain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "shrine-of-ilmater", name: "Shrine of Ilmater (mainland)", aliases: [],
    type: "place", scope: "icespire", status: "proposal",
    summary: "Proposal (08): where Brother Aldric cared for Kael's body during Salanar's three lost years.",
    related: ["brother-aldric", "salanar", "kael-orendis"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "calimshan", name: "Calimshan (Alimir foothills)", aliases: ["Alimir foothills"],
    type: "place", scope: "icespire", status: "canon",
    summary: "Where Sal's sheet places the Vel'tharin commune and the Great Erasure, and where Lysa's Calishite slavers came from. 08 relocates the Erasure to Lumenshire; Kael's body went south on the slaver route.",
    details: "Calimshan problem at the table: retcon openly, Sal fudging it as goofball deflection (recommended), or Sal mixing up Kael's life with his own.",
    related: ["vel-tharin", "great-erasure", "lysa", "salanar"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/02-party.md"]
  },
  {
    id: "veltharin-chapel", name: "Vel'tharin chapel", aliases: [],
    type: "place", scope: "icespire", status: "proposal",
    summary: "Proposal (08): the ruined chapel of Lumenshire's healer order on the Forgotten Reach, beside the courthouse. One of the places where the party stands in Sal's story without him.",
    related: ["vel-tharin", "forgotten-reach", "courthouse"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md"]
  },

  // ───────────────────────────── ITEMS ─────────────────────────────

  {
    id: "staff-of-silence", name: "Staff of Silence", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "Obsidian staff that nullifies all sound in a 50-yard radius, magical sound included. It stops the song long enough to get close to Liv and speak the ritual.",
    details: "Rare. Attunement by a spellcaster. Action to toggle, concentration up to 10 minutes. Also blocks verbal spell components. Formerly a museum item; its new location is not placed yet.",
    table: "Sprig's hook.",
    related: ["hydra-song", "song-counters", "keeper-clause", "museum-of-wonders", "sprig-grenoble"],
    sources: ["drive/items/staff-of-silence.md", "book/00-canon.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/02-party.md"]
  },
  {
    id: "eternal-tome", name: "Eternal Tome of Lumenshire", aliases: ["Eternal Tome"],
    type: "item", scope: "book", status: "canon",
    summary: "Legendary tome holding everything that was ever shared knowledge in Lumenshire, but not private secrets. It contains the keeper clause the Oblivion tome leaves out, so reading it is how the party learns the price before paying it.",
    details: "Attunement; an action to ask. Kept secret by a few custodians. One of the four 'mouths' that can say the truth in the finale. Formerly a museum item.",
    table: "Porridge's item.",
    related: ["keeper-clause", "oblivion-tome", "partial-knowledge", "museum-of-wonders", "porridge"],
    sources: ["drive/items/eternal-tome-of-lumenshire.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/02-party.md"]
  },
  {
    id: "vial-of-complete-restoration", name: "Vial of Complete Restoration", aliases: ["the Vial"],
    type: "item", scope: "book", status: "canon",
    summary: "Legendary elixir that cures every ailment, restores lost memories, reverses ageing, and gives advantage on everything for a day. In the keeper ritual it anchors one mind: without it the keeper dies; with it the keeper lives, forgotten.",
    details: "Consumable, one action. Formerly a museum item.",
    table: "Proposal (08): Sal's last void stone may play this role for him, or be the price.",
    related: ["keeper-clause", "museum-of-wonders", "void-stones"],
    sources: ["drive/items/vial-of-complete-restoration.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "blackwood-blade", name: "Swift Blade of the Blackwood Family", aliases: ["Blackwood blade", "the family blade"],
    type: "item", scope: "book", status: "canon",
    summary: "Thorne's family longsword, found in the pool of blood on the beach. Someone will want to give it back to Ashe; let that be a scene.",
    details: "Rare longsword +1, finesse, versatile (1d10), silvery with glowing elven runes and the crest on a blackwood hilt. Once per short rest, bonus action: advantage on Acrobatics or Stealth for a minute. Arcana DC 15: the runes are still warm; it was attuned to someone until very recently.\nKarleen: 'Bring the sword. I think I knew the man who carried it.'",
    table: "Not on the Icespire beach: the letter lies there alone.",
    related: ["thorne-blackwood", "ashe-blackwood", "letter-found-in-blood", "the-wreck"],
    sources: ["drive/items/blackwood-blade.md", "book/01-opening-the-letter.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/04-session-1-intro.md"]
  },
  {
    id: "oblivion-tome", name: "The Oblivion tome", aliases: ["Elara's books", "oblivion spell tome", "Elara's book"],
    type: "item", scope: "book", status: "canon",
    summary: "Elara's book holding the Oblivion spell, which Liv cast from. Fawkes owns it; decided 2026-10-11 (Q9) it is in his secret lair under town hall, the Karleen-track prize, and what he needs for the serum. It leaves out the keeper clause.",
    table: "Porridge's item. Proposal (08): margin notes signed 'S.' (Salanar).",
    related: ["spell-oblivion", "fawkes", "fawkes-secret-lair", "keeper-clause", "fawkes-serum", "elara", "porridge", "salanar"],
    sources: ["book/00-canon.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md", "drive/notes/obliviosa-redux-raw-notes.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "fawkes-serum", name: "Fawkes's serum", aliases: ["the potions", "the serum", "potion pickup"],
    type: "item", scope: "book", status: "canon",
    summary: "Fawkes claims it will unmask Forgotten hiding among the townsfolk when mixed into the Remembrance Festival ale. Decided 2026-10-11 (Q3): it is his attempt to be the keeper by force, pulling every memory into himself; without the consent clause it would make a second vessel instead.",
    details: "The shipment arrives at Lumen Pier; the party fetches it in secret and must imprison any witness in a marble. 'Potion Pickup': another adventuring group gets there first (TODO). Missions 2 and 3 and 'Captured!' are TODO.",
    related: ["fawkes", "remembrance-festival", "keeper-clause", "fawkes-marbles", "lumen-pier", "fawkes-track", "oblivion-tome"],
    sources: ["drive/loose/fawkes-missions.md", "book/00-canon.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md"]
  },
  {
    id: "fawkes-marbles", name: "Fawkes's marbles", aliases: ["the marbles", "witness marbles"],
    type: "item", scope: "book", status: "canon",
    summary: "Marbles Fawkes hands each party member; each can imprison one incapacitated person once. Meant for witnesses to the potion errand.",
    details: "Handoffs: on the Fawkes track the first marble is meant for Karleen; a cultist may carry one (cult to Fawkes).",
    related: ["fawkes", "fawkes-serum", "fawkes-track", "routing-rule"],
    sources: ["drive/loose/fawkes-missions.md", "book/05-sacrifice-and-hooks.md"]
  },
  {
    id: "mystic-melatonin", name: "Mystic Melatonin", aliases: ["no-dream gummies"],
    type: "item", scope: "book", status: "canon",
    summary: "Gary's gummy that drops the eater into eight hours of deep, dreamless sleep (20 gp). Seraphina buys it to stop her nightmares of the hydra.",
    details: "Trail clue: a robed customer bought Gary's whole stock.",
    related: ["gary", "apothe-gary", "seraphina-dawnbringer", "cult-of-obliviosa"],
    sources: ["drive/locations/apothe-gary.md", "book/00-canon.md", "book/05-sacrifice-and-hooks.md"]
  },
  {
    id: "potion-of-encapsulation", name: "Potion of Encapsulation", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "Gary's potion that seals the drinker in an impenetrable sphere for 15 minutes or until they snap their fingers. No sound gets in, so it blocks the song.",
    related: ["apothe-gary", "song-counters"],
    sources: ["drive/locations/apothe-gary.md", "book/00-canon.md", "drive/notes/into-lumenshire.md"]
  },
  {
    id: "balm-of-the-banshee", name: "Balm of the Banshee", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "Gary's throat salve (18 gp) that lets the user scream or sing loud enough to drown out all other sound, shatter glass or stun foes. A song counter.",
    related: ["apothe-gary", "song-counters"],
    sources: ["drive/locations/apothe-gary.md", "book/00-canon.md"]
  },
  {
    id: "potion-of-deafness", name: "Potion of Deafness", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "Gary can be talked into making exactly one, because it is messed up, and cannot say whether the deafness is permanent. A deafened player communicates by drawing until cured.",
    related: ["gary", "song-counters", "carl"],
    sources: ["drive/notes/into-lumenshire.md", "book/00-canon.md"]
  },
  {
    id: "tuning-fork", name: "Tuning fork", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "Sold at Willem's Forge for 1 gp. Struck on metal it makes a loud resonant sound that can stun, and counts as noise against the song.",
    related: ["willems-forge", "song-counters"],
    sources: ["drive/locations/willems-forge.md", "book/00-canon.md"]
  },
  {
    id: "orb-of-screaming", name: "Orb of Screaming", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "Pressed with five fingers, it lets out a piercing scream for one minute and dissolves. A canon song counter that started as a museum item.",
    related: ["song-counters", "museum-of-wonders"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md", "book/00-canon.md", "drive/notes/into-lumenshire.md"]
  },
  {
    id: "hydras-fury", name: "Hydra's Fury", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "The Dragon's Inn's potent cocktail with a splash of dragonfire whiskey, 'known to make even the toughest adventurer forget their worries'. Getting blackout drunk on it is a song counter; how that works is still TODO.",
    table: "TJ Star's discovery.",
    related: ["the-dragons-inn", "song-counters", "tj-star"],
    sources: ["drive/locations/the-dragons-inn.md", "book/00-canon.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/02-party.md"]
  },
  {
    id: "potion-of-clarity", name: "Potion of clarity", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "Ashe's potion, widely regarded as fake paranoid nonsense, that guards the mind against outside influence and gives advantage on Obliviosa checks.",
    related: ["ashe-blackwood", "song-counters"],
    sources: ["drive/loose/rude-awakening.md", "book/00-canon.md"]
  },
  {
    id: "cultist-necklace", name: "Cultist necklace", aliases: ["necklace with insignia"],
    type: "item", scope: "book", status: "canon",
    summary: "Insignia necklace worn by the cult. One may turn up in a party pocket after the first night, or in Fawkes's desk drawer as trail evidence.",
    related: ["cult-of-obliviosa", "cultist", "first-night", "routing-rule"],
    sources: ["drive/obliviosa-root/cultist-character-sheet.md", "book/05-sacrifice-and-hooks.md"]
  },
  {
    id: "conch-of-absolute-truth", name: "Conch of absolute truth", aliases: [],
    type: "item", scope: "book", status: "proposal",
    summary: "A one-line idea in the 2025 raw notes, never written up.",
    related: [],
    sources: ["drive/notes/obliviosa-redux-raw-notes.md"]
  },
  {
    id: "feyfire-lantern", name: "Feyfire Lantern", aliases: [],
    type: "item", scope: "book", status: "deprecated",
    summary: "Museum item: a lantern whose 30-foot light counts as sunlight and dispels magical darkness. Deprecated with the museum.",
    table: "Proposal (01-plan): candidate past-timeline artifact against Cryovain, rewritten as the relic that drove back the Forgotten, kept in Fawkes's vault. Weaker tie than the Forgetting Edge.",
    related: ["museum-of-wonders", "forgetting-edge", "fawkes-secret-lair"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "crystal-orb-of-clairvoyance", name: "Crystal Orb of Clairvoyance", aliases: [],
    type: "item", scope: "book", status: "deprecated",
    summary: "Museum item: scry a location within a mile for 10 minutes. Deprecated with the museum.",
    related: ["museum-of-wonders"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md"]
  },
  {
    id: "chronomancers-pocket-watch", name: "Chronomancer's Pocket Watch", aliases: [],
    type: "item", scope: "book", status: "deprecated",
    summary: "Museum item: cast Haste on yourself once per long rest. Deprecated with the museum.",
    related: ["museum-of-wonders"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md"]
  },
  {
    id: "mask-of-disguise", name: "Mask of Disguise", aliases: [],
    type: "item", scope: "book", status: "deprecated",
    summary: "Museum item: a porcelain mask granting Disguise Self at will. Deprecated with the museum.",
    related: ["museum-of-wonders"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md"]
  },
  {
    id: "cloak-of-elvenkind", name: "Cloak of Elvenkind", aliases: [],
    type: "item", scope: "book", status: "deprecated",
    summary: "Museum item: advantage on Stealth and untrackable by mundane means. Deprecated with the museum.",
    related: ["museum-of-wonders"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md"]
  },
  {
    id: "harp-of-serenity", name: "Harp of Serenity", aliases: [],
    type: "item", scope: "book", status: "deprecated",
    summary: "Museum item: calming melodies that charm listeners within 30 feet into non-aggression for a minute. Deprecated with the museum.",
    related: ["museum-of-wonders"],
    sources: ["drive/deprecated/museum-of-wonders.md", "drive/items/museum-items.md"]
  },
  {
    id: "void-stones", name: "Void stones", aliases: ["void stone", "Sal's last void stone", "black stone"],
    type: "item", scope: "icespire", status: "canon",
    summary: "Black crystals that erase pain, and held long enough, erase people. Salanar's addiction; he wears his last one on a cord to resist it. Decided 2026-10-13: void stones belong to this story.",
    details: "Proposal (08): they are shards of the portal Elara's ancestor opened and wash up on the Reach. Sal's last stone is the one from the courtroom, the vessel that failed or that he refused to be.\nDecided 2026-10-11: no void stone prop on the beach.",
    related: ["salanar", "portal-wizard", "keeper-clause", "great-erasure", "brother-aldric", "vial-of-complete-restoration"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "sending-stones", name: "Sending Stones", aliases: ["the stone", "sending stone"],
    type: "item", scope: "icespire", status: "proposal",
    summary: "Darla's sending stone reaches Sal in Phandalin live, as the Cryovain storyline happens. From his side the party is asleep beside him; he answers up to three times a day, gives them the errand, and remembers the island as it was.",
    details: "Proposal for feedback (05). First contact: 'You are right here. You are all asleep.' Hearing 'Kael' is when Sal knows it is real.\nDrift: each session is later in the Icespire story; the song reaches the stone as static where names should be.\nOpen: who holds the other stone, Sal or an NPC. Only one is on any sheet.",
    related: ["salanar", "darla-dewdrop", "sals-errand", "marta-fenwick", "dream-frame", "jack"],
    sources: ["campaigns/icespire-nad-group/05-goal-stones-and-origin.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "forgetting-edge", name: "The Forgetting Edge", aliases: [],
    type: "item", scope: "icespire", status: "proposal",
    summary: "Recommended past-timeline artifact against Cryovain: a weapon forged from one of Liv's scales. What it cuts, forgets: a dragon that forgets how to fly, its breath, its name.",
    details: "Obtained however Liv is resolved: kill her and take a scale, or save her and the hydra form sheds. In 05 it becomes something the island gave them that they stashed and forgot, not the reason they went.",
    related: ["cryovain", "liv", "past-future-rule", "stashable-rewards", "feyfire-lantern", "luminous-vanguard-armour"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "luminous-vanguard-armour", name: "Luminous Vanguard armour", aliases: ["Seraphina's armour"],
    type: "item", scope: "icespire", status: "proposal",
    summary: "Third candidate artifact against Cryovain: a suit of glowing-sigil Vanguard armour, or Seraphina's own, that burns cold away. Only reachable by turning Seraphina or taking it off her.",
    related: ["luminous-vanguard", "seraphina-dawnbringer", "forgetting-edge", "cryovain"],
    sources: ["campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "haunted-one-props", name: "Haunted One possessions", aliases: ["cloth doll skewered with needles", "bone caltrop", "painted eggshell"],
    type: "item", scope: "icespire", status: "canon",
    summary: "Personal possessions on the party sheets that are already horror props: Sal's cloth doll skewered with needles, TJ's bone caltrop, Rowan's eggshell painted with scenes of misery. Liv can use them.",
    related: ["salanar", "tj-star", "rowan-sunwood", "porridge"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },

  // ───────────────────────────── SPELLS ─────────────────────────────

  {
    id: "spell-oblivion", name: "Oblivion", aliases: ["Veil of Forgotten Memories"],
    type: "spell", scope: "book", status: "canon",
    summary: "7th-level necromancy ritual that makes a group forget specific events or people. A botched casting scrambles memories and can thin the barrier to things from beyond. Liv's failed casting made her the hydra and reopened the way for the Forgotten.",
    details: "Casting time 1 hour, range 100 yards, instantaneous. Components: black ink, a lock of hair from a loved one, a pearl worth 500 gp.\nCanon reframe: it moves memories rather than destroying them, and it needs a keeper (see keeper clause).",
    table: "Proposal (08): sung as the Vel'tharin burden song turned inside out, with Salanar's void stone meant to be the vessel.",
    related: ["oblivion-tome", "keeper-clause", "liv", "night-of-the-spell", "burden-songs"],
    sources: ["drive/obliviosa-root/spell-oblivion.md", "book/00-canon.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "revivify", name: "Revivify", aliases: [],
    type: "spell", scope: "icespire", status: "canon",
    summary: "Rowan has it. A death undone inside the dream does not count for the past/future rule, so Revivify changes the death math. Diamonds are the limit; the party has none listed.",
    related: ["rowan-sunwood", "past-future-rule"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "book/06-dream-frame.md"]
  },
  {
    id: "blindness-deafness", name: "Blindness/Deafness", aliases: [],
    type: "spell", scope: "icespire", status: "canon",
    summary: "On Porridge's sheet. Deafening an ally is a song counter she already owns.",
    related: ["porridge", "song-counters", "potion-of-deafness"],
    sources: ["campaigns/icespire-nad-group/02-party.md"]
  },

  // ───────────────────────────── DOCUMENTS ─────────────────────────────

  {
    id: "letter-found-in-blood", name: "A letter found in blood", aliases: ["the letter", "My Beloved son Thorne", "My beloved son Kael"],
    type: "document", scope: "book", status: "canon",
    summary: "Ashe's soaked letter to his son, found in the pool of blood on the beach. He describes a wailing song, toys and sketches of a family he cannot remember, and begs his son to come home. It is the campaign's opening, handed over as a physical prop.",
    details: "Signed 'Your loving father, Ashe Blackwood'. Optional: 'DON'T FORGET M' scratched in blood on the rock beside the pool.",
    table: "Addressed to 'my beloved son Kael' and signed Ashe Orendis. It is the reason for the trip in both timelines (05 proposal). Ashe has a dozen more letters he never sent. In the future timeline it arrives in Phandalin after Cryovain.",
    related: ["ashe-blackwood", "thorne-blackwood", "kael-orendis", "the-wreck", "blackwood-blade", "forgotten-friend"],
    sources: ["drive/found-documents/a-letter-found-in-blood.md", "book/01-opening-the-letter.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "dont-forget-pages", name: "DON'T FORGET pages", aliases: ["the notes", "DON'T FORGET notes"],
    type: "document", scope: "book", status: "canon",
    summary: "Karleen's notes in her own hand that she does not remember writing, each headed DON'T FORGET. They describe every party member perfectly, plus a fifth person, the forgotten friend. The in-world version of the memory cards.",
    details: "Prop to make before session 1.",
    table: "Five descriptions fit the party and a sixth is crossed out so hard the parchment tore; it points at the nameless dead, not at Sal.",
    related: ["karleen", "memory-cards", "forgotten-friend", "marcus-ainsworth"],
    sources: ["book/01-opening-the-letter.md", "book/02-story-flow.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "ships-manifest", name: "The ship's manifest", aliases: ["manifest"],
    type: "document", scope: "book", status: "canon",
    summary: "Found in the wreck (Investigation DC 14): the passenger count is one higher than the party, and that name is water-ruined. One more bedroll, mess kit and hammock than needed.",
    related: ["the-wreck", "forgotten-friend"],
    sources: ["book/01-opening-the-letter.md", "campaigns/icespire-nad-group/04-session-1-intro.md"]
  },
  {
    id: "cultist-journal", name: "The cultist's journal", aliases: ["cult journal"],
    type: "document", scope: "book", status: "canon",
    summary: "Linked from the Cultist sheet but deleted from Drive. To be rewritten as the cult's planted pitch: she is a goddess who takes away pain; it names the cave on the Reach and the night of the Feast.",
    table: "Lysa option D (proposal): Lysa is its author.",
    related: ["cult-of-obliviosa", "cultist", "first-night", "cult-track", "lysa"],
    sources: ["drive/obliviosa-root/cultist-character-sheet.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "thornes-journal", name: "Thorne's Journal", aliases: [],
    type: "document", scope: "book", status: "deprecated",
    summary: "Marked 'DEPRECATE. DO NOT USE.' A diary of growing amnesia: rearranged furniture, shops that appeared overnight, a shack east of town, the mayor knowing. Only Thaddeus Finn is salvaged from it (Q10).",
    related: ["thaddeus-finn", "thorne-blackwood"],
    sources: ["drive/deprecated/thornes-journal.md", "book/03-open-questions.md"]
  },
  {
    id: "ashes-journal", name: "Ashe's journal", aliases: [],
    type: "document", scope: "book", status: "proposal",
    summary: "Ashe's journal of cryptic notes and scribbled thoughts. Exists on his sheet; the contents are still TODO.",
    related: ["ashe-blackwood"],
    sources: ["drive/characters/ashe-blackwood.md", "drive/loose/rude-awakening.md", "book/04-todo.md"]
  },
  {
    id: "map-to-the-cave", name: "Map to the cave", aliases: ["Thorne's house map", "Ashe's map"],
    type: "document", scope: "book", status: "canon",
    summary: "A map leading to the cave, written in a language the party cannot read; a local scholar must be persuaded to translate it. A backup push toward the cult track.",
    related: ["cult-cave", "cult-track", "ashe-blackwood"],
    sources: ["drive/notes/into-lumenshire.md", "book/05-sacrifice-and-hooks.md"]
  },
  {
    id: "fawkes-suicide-note", name: "Fawkes's suicide note", aliases: [],
    type: "document", scope: "book", status: "canon",
    summary: "In Fawkes's secret lair; one of the Karleen-track reveals.",
    related: ["fawkes", "fawkes-secret-lair", "karleen-track"],
    sources: ["book/02-story-flow.md", "drive/obliviosa-root/liv-todo.md"]
  },
  {
    id: "trial-records", name: "Legal records of Fawkes's trial", aliases: ["trial records"],
    type: "document", scope: "book", status: "canon",
    summary: "Kept in Fawkes's lair. Karleen-track reveal; they may name a witness the Vanguard is protecting (handoff to the Fawkes track).",
    related: ["fawkes-trial", "fawkes-secret-lair", "karleen-track", "routing-rule"],
    sources: ["book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/notes/obliviosa-redux-raw-notes.md"]
  },
  {
    id: "karleen-family-documents", name: "Documents on Karleen's family", aliases: [],
    type: "document", scope: "book", status: "canon",
    summary: "Papers about the family Liv ate, which Fawkes thinks he might share with Karleen someday. In his lair.",
    related: ["karleen", "fawkes", "fawkes-secret-lair"],
    sources: ["book/02-story-flow.md", "drive/notes/obliviosa-redux-raw-notes.md"]
  },
  {
    id: "re-election-posters", name: "Re-election posters", aliases: ["Ten more years!", "10 more years!"],
    type: "document", scope: "book", status: "canon",
    summary: "Fawkes's posters cover the town: 'Ten more years.' The first thing the party sees in town. A prop to make.",
    related: ["fawkes-re-election", "fawkes"],
    sources: ["book/01-opening-the-letter.md", "drive/locations/lumenshire.md", "drive/notes/obliviosa-redux-raw-notes.md", "book/04-todo.md"]
  },
  {
    id: "patrol-roster", name: "Vanguard patrol roster", aliases: [],
    type: "document", scope: "book", status: "canon",
    summary: "Trail evidence: a Vanguard patrol roster with a gap on the nights of the feedings.",
    related: ["luminous-vanguard", "the-feedings", "routing-rule"],
    sources: ["book/05-sacrifice-and-hooks.md"]
  },
  {
    id: "childs-drawing", name: "Child's drawing of a blue-haired girl", aliases: [],
    type: "document", scope: "icespire", status: "proposal",
    summary: "Ashe gives the party it, if they are kind: a child's drawing of a blue-haired girl, signed with a name that has been scratched out. The first real clue at the farmhouse.",
    related: ["ashe-blackwood", "blackwood-farmstead", "liv"],
    sources: ["campaigns/icespire-nad-group/04-session-1-intro.md"]
  },

  // ───────────────────────────── EVENTS ─────────────────────────────

  {
    id: "night-of-the-spell", name: "The night of the spell (the rampage)", aliases: ["the rampage", "the Forgotten's attack", "the attack", "the three-day siege", "five years ago"],
    type: "event", scope: "book", status: "canon",
    summary: "Five years ago Liv cast Oblivion in the courtroom, became the hydra, devoured the courtroom and much of the town, and let the Forgotten back in. Fawkes and a militia drove the Forgotten to the Reach and blew the bridge; the town forgot and remembers it as 'the Forgotten's attack'.",
    details: "Public story: a three-day siege on the merchant district, saved by Fawkes. Timeline decided 2026-10-11 (Q8): five years since; feedings steady and small until they doubled a few months ago.\nHow the players learn what happened that night is TODO.",
    table: "Proposal (08): the same night as the Great Erasure. Salanar put the spell in Liv's hands; Kael confronted him on the Reach.",
    related: ["liv", "fawkes-trial", "spell-oblivion", "the-forgotten", "courthouse", "fawkes", "great-erasure"],
    sources: ["book/00-canon.md", "book/03-open-questions.md", "drive/characters/mayor-fawkes.md", "drive/locations/lumenshire.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "fawkes-trial", name: "Fawkes's trial", aliases: ["the murder trial"],
    type: "event", scope: "book", status: "canon",
    summary: "Fawkes stood trial in the courthouse for killing Elara. Nine-year-old Liv cast Oblivion on the courtroom to make everyone forget his crime.",
    related: ["fawkes", "elara", "liv", "courthouse", "trial-records", "night-of-the-spell", "lakeside-cabin"],
    sources: ["book/00-canon.md", "drive/characters/mayor-fawkes.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md"]
  },
  {
    id: "remembrance-festival", name: "Remembrance Festival", aliases: ["the Feast", "the festival"],
    type: "event", scope: "book", status: "canon",
    summary: "The town festival where Fawkes plans to put his serum in the celebratory ale. It is the campaign's clock: four days out on arrival, and every hook points at it. The cultists call it the Feast.",
    details: "Karleen thinks Fawkes is about to do something there; Fawkes needs the potions before it; the cult's journal names it. If the party never walks to the third path, the festival brings it to them.",
    table: "Fawkes's offer of free passage expires with it; the weekly ferry leaves the morning after.",
    related: ["fawkes-serum", "fawkes", "cult-of-obliviosa", "routing-rule", "keeper-clause"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/loose/fawkes-missions.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "the-wreck", name: "The wreck", aliases: ["the shipwreck", "the beach", "cold open"],
    type: "event", scope: "book", status: "canon",
    summary: "The campaign opens with the song in the dark, then the party waking on a beach beside their wrecked ship, a pool of blood, the blade and the letter. Their friend was eaten during the wreck and nobody remembers him.",
    details: "Medicine 12: human blood under an hour old, drag marks into the surf. Investigation 13: one more set of footprints than the party. Insight 10: you are grieving and do not know for whom. Two roads: the farmhouse or the town. Cid is missing (alive, in town).",
    table: "A small coastal hull that is not theirs, nobody at the tiller; the blood site is a perception void; the headcount comes up one short and the missing name is Sal's. No weapon, only the letter.",
    related: ["letter-found-in-blood", "blackwood-blade", "thorne-blackwood", "forgotten-friend", "hydra-song", "blackwood-farmstead", "ships-manifest", "salt-wind", "cid-tidebringer"],
    sources: ["book/01-opening-the-letter.md", "book/02-story-flow.md", "drive/loose/rude-awakening.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "salt-wind", name: "The Salt Wind", aliases: [],
    type: "item", scope: "book", status: "canon",
    summary: "The party's ship, helmed by Cid, that wrecks on Lumenshire.",
    related: ["cid-tidebringer", "salt-wind-toast", "the-wreck"],
    sources: ["drive/loose/intro-aboard-the-salt-wind.md", "book/01-opening-the-letter.md"]
  },
  {
    id: "salt-wind-toast", name: "The Salt Wind toast", aliases: ["Intro: Aboard the Salt Wind"],
    type: "event", scope: "book", status: "proposal",
    summary: "Optional fifteen-minute prologue: Cid raises a bottle 'to memories past', the party retells fake past adventures, the song plays, and the planted Thorne player leaves. Kept only when running option A (Q1).",
    details: "Fake adventures for the toast are TODO.",
    related: ["salt-wind", "cid-tidebringer", "thorne-blackwood", "forgotten-friend", "salvage-operation"],
    sources: ["drive/loose/intro-aboard-the-salt-wind.md", "book/01-opening-the-letter.md", "book/03-open-questions.md"]
  },
  {
    id: "salvage-operation", name: "Act 1: Salvage Operation", aliases: ["pre-wreck act", "ghost ship"],
    type: "event", scope: "book", status: "deprecated",
    summary: "Cut to off-screen backstory (Q1, 2026-10-11). The 2025 pre-wreck act: a heartless merchant's 500,000 gp salvage contract, a ghost ship full of Forgotten, a storm and a cryptic hydra fight, cut to black.",
    related: ["flaming-fist", "salt-wind-toast", "the-forgotten"],
    sources: ["drive/loose/act-1-salvage-operation.md", "drive/loose/false-hydra-redux-script.md", "book/02-story-flow.md", "book/03-open-questions.md"]
  },
  {
    id: "first-night", name: "The first night", aliases: ["fade to black", "waking at the inn"],
    type: "event", scope: "book", status: "canon",
    summary: "After the party's first day in town the song plays and the scene fades. They wake at the inn with wounds they cannot explain; off-screen Liv fed and the cultists came through. The cult's pitch is planted on them: a necklace, a dead cultist with a journal, or blue chalk on their door.",
    details: "Morning: townsfolk waking in the street, the Enchanted Garden has appeared. A memory dump / way to regain memories is TODO.",
    related: ["hydra-song", "the-dragons-inn", "cult-of-obliviosa", "cultist-journal", "cultist-necklace", "blue-chalk-symbols", "enchanted-garden", "routing-rule"],
    sources: ["book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/04-session-1-intro.md"]
  },
  {
    id: "forgotten-walks-into-town", name: "A Forgotten walks into town", aliases: ["Act 2 finale"],
    type: "event", scope: "book", status: "canon",
    summary: "Act 2 finale: a Forgotten wanders into town in daylight and the party fights it in front of everyone. On its body is a clue pointing at Fawkes (TODO).",
    related: ["the-forgotten", "fawkes"],
    sources: ["book/02-story-flow.md", "drive/loose/false-hydra-redux-script.md", "drive/obliviosa-root/liv-todo.md"]
  },
  {
    id: "lost-child", name: "The lost child search", aliases: ["lost child near the cave"],
    type: "event", scope: "book", status: "canon",
    summary: "Villagers search for a child last seen near the cave. The child is never found, and when the party returns the parents remember neither the child nor the party. 50% chance of meeting Liv and the song.",
    table: "Lysa option A (proposal): the 'lost child' could be Lysa.",
    related: ["cult-cave", "cult-track", "lysa"],
    sources: ["drive/notes/into-lumenshire.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "fawkes-re-election", name: "Fawkes's re-election", aliases: ["the election", "election buzz"],
    type: "event", scope: "book", status: "canon",
    summary: "Fawkes is running again: posters everywhere, a boy who will not stop talking about it. Town texture that keeps the mayor in the party's face.",
    related: ["fawkes", "re-election-posters", "election-boy"],
    sources: ["book/01-opening-the-letter.md", "book/02-story-flow.md", "drive/locations/lumenshire.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "the-feedings", name: "The feedings", aliases: ["the truce", "captive sacrifice"],
    type: "event", scope: "book", status: "canon",
    summary: "Every few nights Fawkes delivers a captive to Liv so she feeds without rampaging. Decided 2026-10-11 (Q8): steady and small for five years, doubled a few months ago, which is why holes started showing and Karleen started asking.",
    related: ["fawkes", "liv", "patrol-roster", "karleen"],
    sources: ["book/00-canon.md", "book/03-open-questions.md", "drive/characters/mayor-fawkes.md"]
  },
  {
    id: "great-erasure", name: "The Great Erasure", aliases: ["the Erasure"],
    type: "event", scope: "icespire", status: "canon",
    summary: "Salanar's catastrophe: with void stones he unmade nearly all the Vel'tharin, believing he was ending suffering. Decided 2026-10-13 that it happened on Lumenshire; proposed (not confirmed) that it is the same night as Liv's spell.",
    details: "Sheet version: in Calimshan; Kael led the survivors to confront him. Merge proposal (08): Salanar meant the spell to take the whole island's grief into his stone, flinched, and Liv became the vessel.",
    related: ["salanar", "vel-tharin", "void-stones", "night-of-the-spell", "kael-orendis", "calimshan"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "the-knockout", name: "The knockout", aliases: ["dream entry"],
    type: "event", scope: "icespire", status: "canon",
    summary: "How the dream starts at Jack's table: the Icespire DM knocks out the whole party at once (Cryovain's breath, an avalanche, an excavation collapse, poisoned ale at Gnomengarde, an ordinary night's camp). Sal stays awake; beforehand Sal is shown separated or in danger.",
    related: ["icespire-dm", "dream-frame", "salanar", "the-wreck"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md", "campaigns/icespire-nad-group/04-session-1-intro.md"]
  },
  {
    id: "ancient-portal", name: "The opening of the void portal", aliases: ["void portal"],
    type: "event", scope: "book", status: "canon",
    summary: "In ancient times Elara's ancestor opened a portal to the void and let the Forgotten into Lumenshire. Ancient sorcerers eventually banished them and they faded into myth.",
    related: ["portal-wizard", "the-forgotten", "elara", "void-stones"],
    sources: ["drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/characters/the-forgotten.md", "book/00-canon.md"]
  },

  // ───────────────────────────── CONCEPTS / RULES ─────────────────────────────

  {
    id: "hydra-song", name: "The hydra song", aliases: ["the song", "the wailing song", "song of oblivion"],
    type: "concept", scope: "book", status: "canon",
    summary: "Liv sings, and anyone who hears it is affected. At the table: play the Hydra song track in the dark, every player rolls 2d6 and takes it as damage, and the DM edits reality while it plays.",
    details: "It opens the campaign, ends sessions, and marks every boundary between the dream and the waking game. Each time it plays, collect one memory card per player.\nTrack: Hydra song on YouTube (link in MANIFEST.json).",
    table: "Proposal (08): it is the Vel'tharin burden song, sung by the people inside her. It reaches the sending stone as static where a name should be.",
    related: ["liv", "song-counters", "memory-cards", "session-boundaries", "burden-songs", "first-night"],
    sources: ["book/00-canon.md", "book/01-opening-the-letter.md", "drive/loose/rude-awakening.md", "drive/obliviosa-root/basic-script.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "song-counters", name: "Ways to resist the song", aliases: ["methods for beating the hydra", "magic earmuffs"],
    type: "concept", scope: "book", status: "canon",
    summary: "Potion of Encapsulation, Balm of the Banshee, a tuning fork or other loud noise, Gary's one Potion of Deafness, playing an instrument (Wis DC 10 to keep the memory), the Staff of Silence, the Orb of Screaming, blackout drunk on Hydra's Fury, or sneaking up while she is not singing. Ashe's potion of clarity gives advantage.",
    details: "Magic earmuffs are listed with 'how to get?'. Finalising which methods are discoverable where is TODO. Each must be learnable from at least two places.",
    related: ["hydra-song", "potion-of-encapsulation", "balm-of-the-banshee", "tuning-fork", "potion-of-deafness", "staff-of-silence", "orb-of-screaming", "hydras-fury", "potion-of-clarity", "blindness-deafness"],
    sources: ["book/00-canon.md", "drive/notes/into-lumenshire.md", "book/04-todo.md"]
  },
  {
    id: "memory-cards", name: "Memory cards", aliases: ["index cards"],
    type: "concept", scope: "book", status: "canon",
    summary: "At session zero each player writes 6 to 8 index cards, one fact each about their character's relationships and history. Each time the song plays the DM takes one per player, face down; that fact is no longer true. Killing Liv returns every card; saving her does not.",
    table: "One card each at the end of every dream session; staying on the island costs them who they are.",
    related: ["hydra-song", "dont-forget-pages", "session-boundaries", "ending-kill-liv"],
    sources: ["book/01-opening-the-letter.md", "book/06-dream-frame.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "keeper-clause", name: "The keeper clause", aliases: ["the keeper", "the sacrifice", "the vessel"],
    type: "concept", scope: "book", status: "canon",
    summary: "Oblivion moves memories rather than destroying them, and needs a willing keeper to hold them. Liv skipped the clause, so the spell made her the vessel. To undo it someone must willingly become the keeper: the island remembers, Liv is a girl again, and the keeper is erased from every mind and walks away.",
    details: "Who can pay: Fawkes, a player, Karleen, Ashe, a turned Seraphina; Elara wants it for ascension (same ritual, different intent).\nWithout the Vial of Complete Restoration the keeper dies; with it they live, forgotten. The Eternal Tome holds the clause; the Oblivion tome leaves it out.\nStatus: drafted as a proposal in 05, then built on by the 2026-10-11 decisions (Q2, Q3, keeper wakes in the past ending).",
    table: "Proposal (08): Salanar was meant to be the vessel and refused. In the future timeline Sal can finally be the keeper.",
    related: ["spell-oblivion", "eternal-tome", "vial-of-complete-restoration", "fawkes-serum", "ending-fawkes-sacrifice", "ending-player-sacrifice", "elara", "liv", "salanar", "thaddeus-finn"],
    sources: ["book/05-sacrifice-and-hooks.md", "book/03-open-questions.md", "book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "void-of-perception", name: "The void of perception", aliases: ["blurred faces", "perception void", "forgettable people"],
    type: "concept", scope: "book", status: "canon",
    summary: "Unnamed people who will die on the island do not register to the players. Perception 10-14: extremely forgettable; 15-19: something is off; 20+: the face will not resolve. Named NPCs are shown normally. Never explained.",
    details: "Replaces 'blurred faces' (Jack, 2026-10-11). Naming someone at the table is a small mercy. A dead PC's portrait in recaps gets the same treatment, the first visible sign it is the future. Killing Liv restores the faces. A nameless-victim list is TODO.",
    table: "The forgotten friend (a nameless sailor or guide) and the blood site are voids. Cid is undecided.",
    related: ["dream-frame", "past-future-rule", "forgotten-friend", "vanguard-soldier"],
    sources: ["book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/04-session-1-intro.md"]
  },
  {
    id: "dream-frame", name: "The dream frame", aliases: ["dream campaign"],
    type: "concept", scope: "book", status: "canon",
    summary: "Obliviosa runs as a dream inside another campaign with an existing party, picked up a session here and there. The wreck on the beach is how the dream begins each time. The players are told nothing about it.",
    details: "Entry needs an existing party, so the book needs per-tier scaling. Persistence: characters and inventory are never forked; continuity conflicts are Liv's illusions.",
    table: "Runs inside the NAD Group's Dragon of Icespire Peak game. Entry level 5, party of five or six; scaled Liv, Forgotten, Fawkes and Seraphina still TODO. Working assumption: one dream session is one night's sleep in the Icespire game.",
    related: ["past-future-rule", "persistence-rule", "session-boundaries", "void-of-perception", "the-knockout", "stashable-rewards"],
    sources: ["book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "past-future-rule", name: "Past or future rule", aliases: ["it was the past", "it was the future", "only a dream"],
    type: "concept", scope: "book", status: "canon",
    summary: "If nobody died in the dream it was the past: they wake remembering it all, stashes included. If anyone died or continuity broke it was the future: no recovery, the dreams end, and the waking campaign later arrives at the island for real. If everyone died it was only a dream.",
    details: "Erasure by Liv counts as death. A character brought back inside the dream has not died. The forgotten friend never counts. A keeper is forgotten, not killed (decided 2026-10-11).",
    table: "Future is the default. Past: they wake from the knockout with the Cryovain weapon's location. Future: a letter for Kael arrives in Phandalin after Cryovain.",
    related: ["dream-frame", "revivify", "keeper-clause", "stashable-rewards", "forgetting-edge", "cryovain"],
    sources: ["book/06-dream-frame.md", "book/04-todo.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "persistence-rule", name: "Persistence", aliases: ["nothing is forked"],
    type: "concept", scope: "book", status: "canon",
    summary: "Characters and inventory persist across dream sessions and the waking campaign; nothing is forked. Any continuity conflict is one of Liv's illusions, never apologised for or explained.",
    table: "The Icespire DM is asked not to patch the contradictions. Jack sends a loot list after each session.",
    related: ["dream-frame", "past-future-rule"],
    sources: ["book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "session-boundaries", name: "Session boundaries are the song", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "Each time the DM leaves Lumenshire for the waking campaign the song plays, and each return begins mid-scene or on the beach. Expect to lose a memory card at every boundary. The full procedure is TODO.",
    related: ["hydra-song", "memory-cards", "dream-frame"],
    sources: ["book/06-dream-frame.md", "book/04-todo.md"]
  },
  {
    id: "stashable-rewards", name: "Stashable rewards", aliases: ["reward stashes", "caches"],
    type: "concept", scope: "book", status: "canon",
    summary: "Every significant reward on the island needs a plausible hiding place, so the past ending can pay out: the party wakes remembering where they stashed it.",
    related: ["past-future-rule", "forgetting-edge"],
    sources: ["book/06-dream-frame.md", "book/04-todo.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "forgotten-friend", name: "The forgotten friend", aliases: ["the sixth person", "the fifth person"],
    type: "concept", scope: "book", status: "canon",
    summary: "The person who brought the party to the island, eaten by Liv in the wreck and remembered by nobody. Thorne by default; each table chooses (Q6): a planted player, a cold open, Cid, a PC's backstory NPC, or 'whose idea was this trip?'.",
    details: "With an existing party the strongest version is a real NPC from the waking campaign fed to Liv first.",
    table: "A nameless sailor or guide under the void of perception; the party is meant to assume it was Sal. The sixth stays unsolvable.",
    related: ["thorne-blackwood", "the-wreck", "letter-found-in-blood", "void-of-perception", "dont-forget-pages", "ships-manifest"],
    sources: ["book/01-opening-the-letter.md", "book/03-open-questions.md", "book/06-dream-frame.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "the-holes", name: "The holes", aliases: ["evidence of the erased"],
    type: "concept", scope: "book", status: "canon",
    summary: "Being eaten erases the person, not the evidence. Belongings, portraits, receipts, extra chairs, an oversized graveyard and sad songs remain. Each townsperson carries one unexplained hole.",
    details: "Willem's portrait, Gwendolyn's loneliness, Bartholomew's receipts, Sarah at the bar, the inn's empty tables, the Enchanted Garden, the library.",
    related: ["willem", "gwendolyn", "bartholomew", "sarah", "oversized-graveyard", "the-bard", "enchanted-garden", "town-library"],
    sources: ["book/00-canon.md", "drive/notes/into-lumenshire.md"]
  },
  {
    id: "dm-may-lie", name: "The DM may lie", aliases: ["session-zero disclaimer", "gaslighting disclaimer"],
    type: "concept", scope: "book", status: "canon",
    summary: "Session-zero disclaimer: 'If I'm saying something that doesn't add up, that's probably part of the mystery.' The DM may lie to players about what their characters know.",
    related: ["dream-frame", "hydra-song"],
    sources: ["book/00-canon.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "routing-rule", name: "Three-hook routing rule", aliases: ["three hooks", "hearing all three paths"],
    type: "concept", scope: "book", status: "canon",
    summary: "Jack, 2026-10-11. Day one gives a signal for every path (Karleen in the morning, the Vanguard in the afternoon, the cult planted at night). They pursue one fully. A second presents itself naturally inside the first. The third is left as a trail of evidence.",
    details: "Handoffs: Karleen track hands off to Fawkes; Fawkes track to Karleen (the witness is her); cult track to Fawkes (a cultist with a marble) or Karleen (her family's names carved in the cave).\nTrail clues: blue chalk by the treehouse, the Vanguard roster gap, a cultist necklace in Fawkes's desk, Gary's robed customer.\nIgnored threads keep moving: Karleen arrested, the Vanguard hunts them, disappearances accelerate.",
    related: ["karleen-track", "fawkes-track", "cult-track", "remembrance-festival", "partial-knowledge", "blue-chalk-symbols", "patrol-roster", "cultist-necklace", "fawkes-marbles"],
    sources: ["book/05-sacrifice-and-hooks.md", "book/02-story-flow.md"]
  },
  {
    id: "karleen-track", name: "Karleen track", aliases: ["Team Karleen"],
    type: "concept", scope: "book", status: "canon",
    summary: "Classic dungeon: the treehouse reveal, then breaking into Fawkes's library / secret lair. Reveals that Fawkes killed his wife, had a daughter and owns the Oblivion tome; trial records, suicide note, Karleen's family papers.",
    details: "Minimum truth: the daughter is the monster. Enough to confront Fawkes or kill Liv. No keeper clause without the Eternal Tome.",
    table: "Darla's track.",
    related: ["karleen", "karleens-treehouse", "fawkes-secret-lair", "routing-rule", "fawkes-track", "darla-dewdrop"],
    sources: ["book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/notes/liv-scratch.md"]
  },
  {
    id: "fawkes-track", name: "Fawkes track", aliases: ["Team Fawkes"],
    type: "concept", scope: "book", status: "canon",
    summary: "Intrigue and deception: Seraphina's summons, Fawkes's speech, the marbles and the serum errand. Reveals the erasure of evidence and who the rival 'potion pickup' party is. Team Fawkes players run errands for a suicide that would make things worse.",
    details: "Minimum truth: he is feeding her and planning something at the festival. They may never learn Liv is his daughter until he says so.",
    related: ["fawkes", "seraphina-dawnbringer", "fawkes-serum", "fawkes-marbles", "routing-rule", "karleen-track"],
    sources: ["book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/loose/fawkes-missions.md"]
  },
  {
    id: "cult-track", name: "Cult track", aliases: ["the cave track"],
    type: "concept", scope: "book", status: "canon",
    summary: "Sneaking and fighting: Ashe's clues or cultist trails lead to the cult cave on the Forgotten Reach. Reveals how to beat the monster, that the cultists become Forgotten, and the hydra-spawn nest.",
    details: "Minimum truth: how the song works, what blocks it, that the Forgotten were people, that 'the vessel must be filled'. They may never learn who she is.",
    related: ["cult-of-obliviosa", "cult-cave", "routing-rule", "map-to-the-cave", "lost-child", "thomas"],
    sources: ["book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/notes/liv-scratch.md"]
  },
  {
    id: "partial-knowledge", name: "Only the broad strokes", aliases: ["partial-knowledge constraint", "four mouths"],
    type: "concept", scope: "book", status: "canon",
    summary: "Jack, 2026-10-11. Assume the party ends knowing part of the story. Every track must reach an ending on its own, and the keeper clause, song-blocking tools and Fawkes's guilt must each be learnable in two places. Unlearned truth becomes the epilogue.",
    details: "NPCs fill gaps in the finale: Fawkes, Liv's lair projections, Seraphina's dreams, the Eternal Tome. If a player guesses everything in session two, let them be right.",
    table: "Sal on the stone is an extra information source that only gives broad strokes: he remembers a childhood, not a trial.",
    related: ["routing-rule", "eternal-tome", "livs-lair", "sending-stones"],
    sources: ["book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "blue-chalk-symbols", name: "Blue chalk symbols", aliases: ["strange symbols"],
    type: "concept", scope: "book", status: "canon",
    summary: "Strange symbols appearing around town that nobody can identify. Blue chalk on the party's door can be the cult plant, and blue chalk near the treehouse is trail evidence.",
    related: ["cult-of-obliviosa", "karleens-treehouse", "routing-rule", "first-night"],
    sources: ["book/05-sacrifice-and-hooks.md", "drive/notes/into-lumenshire.md", "book/02-story-flow.md"]
  },
  {
    id: "accomplice-slot", name: "The accomplice slot", aliases: [],
    type: "concept", scope: "book", status: "proposal",
    summary: "General version of the Salanar idea for the book: Elara had a partner who handed Liv the spell and was then eaten and forgotten. The book could ship a default (the healer of the Reach) and let a table fill it with a PC's backstory. Not written into the book yet.",
    related: ["elara", "salanar", "liv"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "burden-songs", name: "Burden songs", aliases: [],
    type: "concept", scope: "icespire", status: "proposal",
    summary: "The Vel'tharin's oral tradition. Sal's sheet: lost in the Erasure. Proposal (08): songs that lift pain out of the sick and carry it, and Liv's song is one turned inside out.",
    related: ["vel-tharin", "hydra-song", "merith", "spell-oblivion"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "two-voices", name: "The two voices (Ilmater and the Unmaker)", aliases: ["the Unmaker", "Ilmater"],
    type: "concept", scope: "icespire", status: "canon",
    summary: "Sal hears one warm, sorrowful voice and one cold, rational one, and calls them Ilmater and the Unmaker. He does not know if either is real.",
    details: "Proposal (08): the Unmaker is Elara reaching him through the stone, or his own eaten old self inside Liv. Recommend leaving it ambiguous and deciding for the finale.",
    related: ["salanar", "elara", "void-stones"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "sals-errand", name: "Sal's errand: bring Ashe home", aliases: ["the goal", "bring Ashe home"],
    type: "concept", scope: "icespire", status: "proposal",
    summary: "The obvious goal on the island: 'Find Ashe Orendis. Make sure he is alright. Do not tell him anything about me. If he will come, bring him back to Phandalin.' Ashe will not leave, and what holds him there is the song, which means Liv, which means Fawkes.",
    details: "Pressures: one memory card lost every night, the four-day festival clock, and Sal on the stone. The letter is the reason for the trip in both timelines (proposal replacing the two-reason version in 01-plan).",
    related: ["salanar", "ashe-blackwood", "sending-stones", "letter-found-in-blood", "remembrance-festival", "origin-wrinkle"],
    sources: ["campaigns/icespire-nad-group/05-goal-stones-and-origin.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "origin-wrinkle", name: "The origin wrinkle", aliases: ["they met twice"],
    type: "concept", scope: "icespire", status: "proposal",
    summary: "Past-timeline idea: Sal posted the Lumenshire job in Phandalin and five strangers took it, which is how the party met. Liv ate the trip, so their 'first' meeting at the Phandalin job board was the second, and the odd familiarity was real.",
    details: "Present-day Sal does not remember hiring them: either a continuity break (so the future) or the song took it from him too. Jack decides when the ending is known.",
    related: ["sals-errand", "past-future-rule", "salanar"],
    sources: ["campaigns/icespire-nad-group/05-goal-stones-and-origin.md"]
  },
  {
    id: "dark-bargain", name: "Dark Bargain (feat)", aliases: [],
    type: "concept", scope: "icespire", status: "proposal",
    summary: "A homebrew feat on every character's sheet except Rynn's, campaign-wide. What it is has not been recorded yet; a party-wide pact is exactly what Liv's illusions can play with.",
    related: ["salanar", "darla-dewdrop", "porridge", "rowan-sunwood", "sprig-grenoble", "tj-star"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/07-todo.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },

  // ───────────────────────────── ENDINGS ─────────────────────────────

  {
    id: "ending-fawkes-sacrifice", name: "Ending 1: Fawkes's sacrifice", aliases: ["redemption ending"],
    type: "concept", scope: "book", status: "canon",
    summary: "Fawkes willingly becomes the keeper, finally doing what he could not do at the courthouse. Everyone remembers; Liv wakes up human and does not know him, and neither does anyone else.",
    related: ["fawkes", "keeper-clause", "liv"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "ending-player-sacrifice", name: "Ending 2: A player's sacrifice", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "A PC becomes the keeper. It must be earned through caring about Liv or the town, and the clause is only learned in fiction. If nobody dies, the dream was the past, and the keeper is remembered only by their own player.",
    table: "In the future timeline Sal himself can be the keeper (08 proposal).",
    related: ["keeper-clause", "past-future-rule", "vial-of-complete-restoration", "salanar"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "book/06-dream-frame.md"]
  },
  {
    id: "ending-kill-liv", name: "Ending 3: Kill Liv", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "Destroy the vessel and every memory spills back out: all memories and memory cards restored, faces of the nameless restored, Fawkes imprisoned if alive, Karleen can become mayor. Nobody has to volunteer, which is why a tired party will take it.",
    table: "Liv's scale can become the Forgetting Edge (proposal).",
    related: ["liv", "memory-cards", "karleen", "fawkes", "keeper-clause", "forgetting-edge"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/obliviosa-root/basic-script.md"]
  },
  {
    id: "ending-kill-elara", name: "Ending 4: Kill Elara, save Liv", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "Liv is saved without a keeper: no memories are restored, and Fawkes flees Lumenshire with his daughter to begin anew.",
    related: ["elara", "liv", "fawkes"],
    sources: ["book/00-canon.md", "drive/obliviosa-root/basic-script.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "ending-taken-prisoner", name: "Ending 5: Taken prisoner by the Forgotten", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "The party is captured by the Forgotten. Listed in the redux; the epilogue is unwritten.",
    related: ["the-forgotten"],
    sources: ["book/00-canon.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "ending-elara-wins", name: "Ending 6: Elara wins", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "Elara completes the keeper ritual for herself and ascends; everyone becomes Forgotten.",
    related: ["elara", "keeper-clause", "the-forgotten"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/loose/false-hydra-redux-script.md"]
  },
  {
    id: "ending-party-wipe", name: "Ending 7: Party wipe", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "The party is wiped from the face of the earth and forgotten by their own loved ones. Under the dream frame a total wipe means it was only a dream (decided 2026-10-11).",
    related: ["past-future-rule"],
    sources: ["book/00-canon.md", "drive/obliviosa-root/basic-script.md", "book/06-dream-frame.md"]
  },
  {
    id: "ending-airship-escape", name: "Ending 8: Airship escape", aliases: ["to be continued"],
    type: "concept", scope: "book", status: "canon",
    summary: "Without solving the crisis, the party flees by airship with Cid to fight another day. The 'to be continued' valve.",
    related: ["cid-tidebringer"],
    sources: ["book/00-canon.md", "drive/obliviosa-root/basic-script.md", "drive/obliviosa-root/liv-todo.md"]
  }
];
