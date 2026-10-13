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
    table: "Decided 2026-10-13 (09): Kael and Fawkes's daughter, the daughter our Sal believed was gone. Salanar was unmaking her; her mother's magic half-saved her into the hydra.",
    related: ["fawkes", "elara", "spell-oblivion", "night-of-the-spell", "hydra-song", "keeper-clause", "livs-lair", "the-forgotten", "hydra-spawn", "cult-of-obliviosa", "the-feedings", "salanar"],
    sources: ["campaigns/icespire-nad-group/09-kael-returns.md", "book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/characters/liv-obliviosa.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/loose/false-hydra-redux-script.md", "campaigns/icespire-nad-group/08-salanar.md"],
    images: [{ src: "img/liv.jpg", caption: "From the Liv (Obliviosa) doc: the three-headed blue hydra" }]
  },
  {
    id: "fawkes", name: "Mayor Fawkes", aliases: ["Fawkes", "Fawks", "Hawkes", "the mayor"],
    type: "person", scope: "book", status: "canon",
    summary: "Mayor of Lumenshire, hailed as the hero who drove off 'the Forgotten's attack' five years ago. In truth he killed his wife Elara while she was drowning Liv, and has fed captives to his daughter every few nights since. The only person who remembers everything; suicidal at campaign start.",
    details: "Human fighter 10 (sheet says Lawful Evil). AC 18, HP 85, longsword +1, Protection style, Second Wind, Action Surge, crits on 19-20.\nGreying hair, deep blue eyes, gold and silver armour, dark blue cloak.\nWants to keep Liv alive and keep Karleen out of it. Can be convinced to change.\nHis serum plan for the Remembrance Festival is the keeper ritual by force (decided 2026-10-11, Q3). He owns the Oblivion tome but not the Eternal Tome, so he does not know the clause needs consent.\nHands out marbles that each imprison one witness. Declining his errand means never leaving the island.\nDecided 2026-10-13: at Jack's table she keeps this stat block.",
    table: "Decided 2026-10-13 (09): Fawkes is a woman, Kael's wife and Liv's mother. Her magic half-saved Liv from Salanar's unmaking into the hydra. She keeps every book Fawkes role (mayor, hero of the attack, the feedings, the only one who remembers) and is on the re-election posters. Her husband, dead two years, has just come back; she sits at his bedside and cannot tell him anything. Proposal: she also takes Elara's roles (the portal-wizard's blood), so Elara is cut at this table. First name and stat block open. Image prompts in campaigns/icespire-nad-group/art/image-prompts.md.",
    related: ["liv", "elara", "karleen", "seraphina-dawnbringer", "luminous-vanguard", "fawkes-serum", "fawkes-marbles", "oblivion-tome", "fawkes-trial", "the-feedings", "remembrance-festival", "town-hall", "fawkes-secret-lair", "fawkes-track", "ending-fawkes-sacrifice"],
    sources: ["campaigns/icespire-nad-group/09-kael-returns.md", "book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/characters/mayor-fawkes.md", "drive/loose/fawkes-missions.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/loose/false-hydra-redux-script.md", "campaigns/icespire-nad-group/08-salanar.md"],
    images: [{ src: "img/fawkes.jpg", caption: "From the Mayor Fawkes doc: the book version. At Jack's table Fawkes is a woman (prompts in campaigns/icespire-nad-group/art/image-prompts.md)." }]
  },
  {
    id: "elara", name: "Elara", aliases: ["Liv's mother", "Fawkes's wife"],
    type: "person", scope: "book", status: "canon",
    summary: "Fawkes's wife and Liv's mother: a historian-witch obsessed with the Forgotten and descended from the wizard who first opened the void portal. Fawkes killed her while she was drowning Liv. Decided 2026-10-11 (Q2): she is the will inside the Forgotten, and Liv is her way back into a body.",
    details: "Sapphire eyes, raven-black braided hair, silver crescent-moon pendant. Mentally unstable, alternately tender and cruel to Liv.\nRedux goal: reunite her family into one being, devour Lumenshire as fuel and ascend; Liv is half the plan.\nHer plan and the cure are the same ritual with different intent: she wants to be the keeper of every memory on the island, which is why the cultists feed Liv.\nEndings 4 (kill Elara, save Liv) and 6 (Elara wins) are hers.",
    table: "Proposal (09): cut at this table. Fawkes, Kael's wife, is Liv's mother and takes Elara's roles; the will inside the Forgotten becomes evil Salanar.",
    related: ["fawkes", "liv", "the-forgotten", "portal-wizard", "oblivion-tome", "keeper-clause", "lakeside-cabin", "ending-kill-elara", "ending-elara-wins", "salanar"],
    sources: ["book/00-canon.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md", "drive/characters/elara.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/loose/false-hydra-redux-script.md", "campaigns/icespire-nad-group/08-salanar.md"],
    images: [{ src: "img/elara.jpg", caption: "From the Elara doc" }]
  },
  {
    id: "karleen", name: "Karleen", aliases: ["Karlina", "Karleena"],
    type: "person", scope: "book", status: "canon",
    summary: "Half-elf former assistant to Fawkes, fired two weeks before the party arrives. Liv ate her whole family; Fawkes took her in and hid it. She keeps their drawings and belongings without knowing whose they are, and leads the rebels trying to uncover the truth.",
    details: "Wizard 3, AC 11, HP 18, spell DC 13: Fire Bolt, Mage Hand, Prestidigitation, Magic Missile, Shield, Detect Magic, Misty Step, Invisibility. Not a combatant.\nAuburn hair, green-gold eyes. Kind, optimistic, reserved.\nNoticed watching the party (Perception DC 15); approaches with the DON'T FORGET pages; rents a room at the Dragon's Inn as a base.\nHer treehouse is the evidence room. She pushes the party to break into Fawkes's library / secret lair.\nDecided 2026-10-11 (Q4): she alone gives the intro speech, which is still written in Marcus's voice and needs rewriting.\nPossible keeper. Can become mayor if Liv dies.",
    table: "Darla's track. Q7 and Q10 on the quest board lead to her.",
    related: ["fawkes", "dont-forget-pages", "karleens-treehouse", "karleens-rebels", "karleen-track", "karleen-family-documents", "marcus-ainsworth", "thorne-blackwood", "boat-graveyard", "lysa", "darla-dewdrop"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/03-open-questions.md", "book/05-sacrifice-and-hooks.md", "drive/characters/karleen.md", "drive/notes/into-lumenshire.md", "drive/notes/liv-scratch.md", "drive/notes/obliviosa-redux-raw-notes.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/06-lysa-options.md"],
    images: [{ src: "img/karleen.jpg", caption: "From the Karleen doc" }]
  },
  {
    id: "seraphina-dawnbringer", name: "Seraphina Dawnbringer", aliases: ["Seraphine", "Seraphina"],
    type: "person", scope: "book", status: "canon",
    summary: "Commander of the Luminous Vanguard and Fawkes's right hand. She dreams of the three-headed monster and buys Mystic Melatonin from Gary to stop the dreams; consciously she suspects nothing. Can be peeled away from Fawkes, but it is very hard.",
    details: "Paladin 10 (human in the header, aasimar in her backstory). AC 20, HP 100, Holy Avenger greatsword, Aura of Courage, Improved Divine Smite.\nSummons the party to Fawkes; refusing means a fight and being dragged there unconscious. Can 'deliver justice' as an Act 3 opener.\nOn day one she delivers Fawkes's pitch at the inn in the afternoon.\nA natural keeper if turned. One of the four 'mouths' that can say the truth in the finale.",
    related: ["fawkes", "luminous-vanguard", "mystic-melatonin", "apothe-gary", "fawkes-track", "keeper-clause", "luminous-vanguard-armour"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/characters/seraphina-dawnbringer.md", "drive/locations/apothe-gary.md", "drive/loose/fawkes-missions.md", "drive/locations/lumenshire.md"],
    images: [{ src: "img/seraphina-dawnbringer.jpg", caption: "From the Seraphina Dawnbringer doc" }]
  },
  {
    id: "ashe-blackwood", name: "Ashe Blackwood", aliases: ["Ashe Orendis", "Ashe", "Thorne's dad", "the old man at the farm"],
    type: "person", scope: "book", status: "canon",
    summary: "Very old, paranoid hermit on the Blackwood farmstead. Liv ate his wife Mary and all four children, and he remembers none of them; his house is full of their things. Wrote the letter found in blood, and hates Fawkes, who has tried to move him off the farm.",
    details: "Human, AC 12, HP 24 (level 4). Two attack dogs on chains, a flintlock pistol. Advantage vs charm and fear, disadvantage vs madness.\nGreets the party with 'COME TO TAKE THE REST OF ME DO YE?' and 'I TOLD THAT DIRTY OLD MAN FAWKES I AIN'T LEAVIN'. Persuasion DC 25 or he and the dogs attack.\nShown the letter, he does not recognise his own handwriting, then does, then asks which of them is Thorne.\nHis journal and a 'story thing' clue in the house are still unwritten. Sells or holds the potion of clarity. Possible dark-horse keeper. Possible wildcard combat sheet (TODO).",
    table: "Back to the book's Ashe Blackwood, Thorne's father (2026-10-13). Fawkes is trying to get him off the island alive (Q18).",
    related: ["blackwood-farmstead", "letter-found-in-blood", "thorne-blackwood", "mary-blackwood", "blackwood-blade", "potion-of-clarity", "ashes-journal", "kael-orendis", "sals-errand", "lysa", "childs-drawing"],
    sources: ["book/00-canon.md", "book/01-opening-the-letter.md", "book/05-sacrifice-and-hooks.md", "drive/characters/ashe-blackwood.md", "drive/loose/rude-awakening.md", "drive/found-documents/a-letter-found-in-blood.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md", "campaigns/icespire-nad-group/08-salanar.md"],
    images: [{ src: "img/ashe-blackwood.jpg", caption: "From the Ashe Blackwood doc" }]
  },
  {
    id: "thorne-blackwood", name: "Thorne Blackwood", aliases: ["Thorn", "the forgotten friend"],
    type: "person", scope: "book", status: "canon",
    summary: "Ashe's son, a Lumenshire-born ranger and the party's friend, who brought them to the island after his father's letter and was eaten by Liv during the wreck. Nobody remembers him; only his blood, his family blade and the letter remain.",
    details: "Originally designed as a planted 'fake' player who leaves the table when the song first plays (option A). Options B (cold open) and C (replace him) exist; decided 2026-10-11 (Q6) that each table chooses.\nFixed facts whatever the choice: Ashe's son, carried the family blade, eaten during the wreck and the reason it happened.\nMay have been romantically attached to Karleen (mentioned once, undecided).",
    table: "Decided 2026-10-13 (09): Kael's old friend. At the Cryovain epilogue he sees Sal, thinks he is Kael, and shows him Ashe's letter; Sal knows it is his fault and goes home as Kael with the party. Liv eats Thorne on landing, which erases the hook.",
    related: ["forgotten-friend", "ashe-blackwood", "letter-found-in-blood", "blackwood-blade", "the-wreck", "salt-wind-toast", "thornes-journal", "karleen"],
    sources: ["book/01-opening-the-letter.md", "book/03-open-questions.md", "drive/characters/thorne-blackwood.md", "drive/loose/obliviosa-session-0.md", "drive/loose/act-1-salvage-operation.md", "campaigns/icespire-nad-group/01-plan.md"],
    images: [{ src: "img/thorne-blackwood.jpg", caption: "From the Thorne Blackwood doc" }]
  },
  {
    id: "mary-blackwood", name: "Mary Blackwood", aliases: ["Mary", "Mary Orendis", "Ashe's wife"],
    type: "person", scope: "book", status: "canon",
    summary: "Ashe's wife and Thorne's mother, eaten by Liv along with the other children. Ashe cannot remember her; the letter asks Thorne whether she was kind.",
    table: "The empty beehives behind the farmhouse.",
    related: ["ashe-blackwood", "thorne-blackwood", "blackwood-farmstead", "salanar"],
    sources: ["book/00-canon.md", "drive/characters/thorne-blackwood.md", "drive/found-documents/a-letter-found-in-blood.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "cid-tidebringer", name: "Cid Tidebringer", aliases: ["Cid"],
    type: "person", scope: "book", status: "canon",
    summary: "The party's sailor friend and helmsman of the Salt Wind, who dreams of flying. He survives the wreck and is in town, not remembering it clearly, wanting a 5,000 gp ship or the weekly ferry and already talking about building something that flies.",
    details: "Tall, ebony skin, short curly black hair, silver seagull pendant. Does not fight.\nThe airship escape with Cid is ending 8 and the campaign's 'to be continued' valve. Reunion and airship build (and his collaborator) are TODO.",
    related: ["salt-wind", "the-wreck", "ending-airship-escape", "salt-wind-toast"],
    sources: ["book/00-canon.md", "book/01-opening-the-letter.md", "book/02-story-flow.md", "drive/characters/cid-tidebringer.md", "drive/loose/intro-aboard-the-salt-wind.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/01-plan.md"],
    images: [{ src: "img/cid-tidebringer.jpg", caption: "From the Cid Tidebringer doc" }]
  },
  {
    id: "gary", name: "Gary", aliases: ["the apothecary"],
    type: "person", scope: "book", status: "canon",
    summary: "Small, wiry, wild-haired alchemist who runs Apothe-gary and loves explaining the pun. Sells Seraphina her Mystic Melatonin and most of the island's anti-song tools.",
    details: "Can be talked into brewing one Potion of Deafness, exactly once; he cannot say whether it is permanent.\nTrail clue: a robed customer bought all his Mystic Melatonin.",
    related: ["apothe-gary", "mystic-melatonin", "potion-of-encapsulation", "balm-of-the-banshee", "potion-of-deafness", "seraphina-dawnbringer"],
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/locations/apothe-gary.md", "drive/notes/into-lumenshire.md"],
    images: [{ src: "img/gary.jpg", caption: "From the Apothe-gary doc: Gary at his potion table" }]
  },
  {
    id: "willem", name: "Willem", aliases: ["the blacksmith"],
    type: "person", scope: "book", status: "canon",
    summary: "Gruff mid-40s master blacksmith of Willem's Forge. His hole: the work has become much harder lately and he does not know why, and a faded portrait of a grinning young man with an arm over his shoulder hangs above the anvil.",
    details: "Asked about the portrait, he becomes frightened, accuses the party of putting it there and asks them to leave; he is heard crying afterwards. A half-finished, inferior sword lies on a bench.",
    related: ["willems-forge", "the-holes", "rynn-caulrunners"],
    sources: ["book/00-canon.md", "drive/locations/willems-forge.md"],
    images: [{ src: "img/willem.jpg", caption: "From the Willem's Forge doc: Willem at his anvil" }]
  },
  {
    id: "gwendolyn", name: "Gwendolyn", aliases: ["the seamstress"],
    type: "person", scope: "book", status: "canon",
    summary: "Early-30s seamstress who owns Gwendolyn's Garments. Her hole: she has started feeling lonely and cannot remember ever having a close friend or family member. Red, puffy eyes; lingers on an embroidered cloak.",
    related: ["gwendolyns-garments", "the-holes"],
    sources: ["book/00-canon.md", "drive/locations/gwendolyns-garments.md"],
    images: [{ src: "img/gwendolyn.jpg", caption: "From the Gwendolyn's Garments doc: Gwendolyn in her shop" }]
  },
  {
    id: "bartholomew", name: "Bartholomew", aliases: ["the baker"],
    type: "person", scope: "book", status: "canon",
    summary: "Portly, kindly baker in his late 50s, nervous under the cheer. His hole: he keeps finding receipts and notes for customers he never served.",
    related: ["bartholomews-bakery", "the-holes", "marta-fenwick"],
    sources: ["book/00-canon.md", "drive/locations/bartholomews-bakery.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"],
    images: [{ src: "img/bartholomew.jpg", caption: "From the Bartholomew's Bakery doc: Bartholomew with a pie" }]
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
    table: "Proposal (10): the only wizard on Lumenshire powerful enough to re-merge Sal and Kael, and the Mystic's Emporium is his shop. Missing: Fawkes holds him under town hall to make the festival serum (Q3). He can force the merge without consent, but his solutions always backfire.",
    related: ["thornes-journal", "keeper-clause"],
    sources: ["book/03-open-questions.md", "drive/deprecated/thornes-journal.md"]
  },
  {
    id: "portal-wizard", name: "The portal wizard", aliases: ["Elara's ancestor", "the ancient wizard"],
    type: "person", scope: "book", status: "canon",
    summary: "A dark, ambitious wizard who in ancient times accidentally opened a portal to the void and let the Forgotten into Lumenshire. They were eventually driven back and became myth. Elara is his descendant.",
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
    summary: "Jack's paladin: Salanar merged with Kael Orendis. Salanar, a healer on Lumenshire, was unmaking Liv when her mother's magic half-saved her into the hydra; he killed Kael's party, jumped into Kael, lost his own body, and left believing Kael's family erased. Void crystals to forget, then a spirit bond with Ilmater and a vow to atone. Decided 2026-10-13: on Lumenshire Sal and Kael come apart; Sal's Cryovain memories are locked until they merge again.",
    details: "Paladin 5, Oath of Redemption, HP 34, Sentinel Shield. Faith Ilmater. Hears two voices, Ilmater and the Unmaker. Sponsor: Brother Aldric.\nAt the table a lighthearted, peacekeeping goofball, open about having done something terrible.\nDecided: separated, Sal and Kael hate each other and detest merging; an extremely high Persuasion check for either.\nProposal (09): getting Sal back means the re-merge, replacing 'kill Liv and Sal returns'.\nRejected 2026-10-13: 08, Sal inside the hydra, Fawkes as Kael.",
    links: [{"label": "Character sheet on D&D Beyond (Kael plays from it)", "url": "https://www.dndbeyond.com/characters/164291771"}],
    related: ["kael-orendis", "void-stones", "great-erasure", "vel-tharin", "merith", "brother-aldric", "lysa", "two-voices", "sending-stones", "elara", "jack", "sals-errand", "accomplice-slot"],
    sources: ["campaigns/icespire-nad-group/09-kael-returns.md", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "kael-orendis", name: "Kael Orendis", aliases: ["Kael", "my beloved son Kael"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Liv's father and Fawkes's husband, whose body Sal wears. Decided 2026-10-13: he returned to Lumenshire mysteriously and recently, the talk of the town, and lies in critical condition at the temple of Ilmater. Unconscious for the first few days; advanced healing can wake him early, and there is a quest to quicken it. Once awake he joins the Luminous Vanguard.",
    details: "Two years ago he and his party fought Salanar, who was unmaking Liv; Salanar killed the rest, jumped into Kael, and Kael killed Salanar's body. Merged, Sal was dominant.\nDecided: separated, Kael and Sal hate each other and detest merging; an extremely high Persuasion check gets either to agree. Sal's Cryovain-campaign memories are locked until they merge again.\nProposal (09): his wound is a soul wound; ordinary healing does nothing, it needs Greater Restoration or better. If he still carries Sal's sending stone, Darla's stone reaches an unconscious man.",
    related: ["salanar", "ashe-blackwood", "letter-found-in-blood", "lysa", "great-erasure"],
    sources: ["campaigns/icespire-nad-group/09-kael-returns.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "lysa", name: "Lysa", aliases: ["Kael's niece", "Ashe's granddaughter"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Kael's niece in Sal's sheet, taken by Calishite slavers. Decided 2026-10-13: at this table Liv takes her role, as Kael's daughter.",
    details: "Proposal (09): Sal's mission is atonement, not finding a kidnapped niece; the slaver story is dropped unless Jack wants it.",
    related: ["kael-orendis", "salanar", "ashe-blackwood", "karleen", "cult-of-obliviosa", "boat-graveyard", "mosco", "brother-aldric", "election-boy"],
    sources: ["campaigns/icespire-nad-group/09-kael-returns.md", "campaigns/icespire-nad-group/06-lysa-options.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/07-todo.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "evil-salanar", name: "Salanar Reborn", aliases: ["evil Salanar", "the Unmaker", "old Salanar", "the lich"],
    type: "monster", scope: "icespire", status: "canon",
    summary: "Decided 2026-10-13: the boss. On landing, Liv recognised her father and tore Sal out of his mind; Sal's soul went back to Salanar's own body, two years dead and decomposed on the Reach, and rose as a dark lich.",
    details: "Our Sal exists only when Kael and Salanar are merged; his Cryovain memories are locked in that merge. Separated, they hate each other and detest merging (extremely high Persuasion).\nProposal (09): the lich is Salanar without the Cryovain years, the Unmaker voice made whole. Killing him loses Sal for good. Image prompt in campaigns/icespire-nad-group/art/image-prompts.md.",
    related: ["salanar", "kael-orendis", "two-voices", "the-forgotten", "forgotten-reach", "great-erasure"],
    sources: ["campaigns/icespire-nad-group/art/image-prompts.md", "campaigns/icespire-nad-group/09-kael-returns.md"]
  },
  {
    id: "temple-of-ilmater", name: "Temple of Ilmater", aliases: ["the temple", "Ilmater's temple"],
    type: "place", scope: "icespire", status: "canon",
    summary: "Decided 2026-10-13: where Kael lies in critical condition after his mysterious return, nursed by priests of Sal's own god.",
    details: "Proposal (09): the likely site of a re-merging ritual. The healing quest to wake Kael early starts here.",
    related: ["kael-orendis", "salanar", "evil-salanar", "vial-of-complete-restoration"],
    sources: ["campaigns/icespire-nad-group/09-kael-returns.md"]
  },
  // ───────────────────────────── QUEST BOARD (Icespire table) ─────────────────────────────

  {
    id: "quest-board", name: "The quest board", aliases: [],
    type: "concept", scope: "icespire", status: "canon",
    summary: "Decided 2026-10-13: Jack's table runs on a quest board model. Four boards post work (town hall, the Dragon's Inn, the temple of Ilmater, and Karleen's pages and the cult's chalk pinned over the rest); each quest leads to encounters and pays something concrete plus one piece of the truth.",
    details: "Ignored quests keep moving: torn down, re-posted with a bigger reward, or replaced by news of what went wrong. Recommended day one: Q1, Q3, Q6, Q10, Q13.",
    related: ["re-merge", "town-hall", "the-dragons-inn", "temple-of-ilmater", "karleen"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "re-merge", name: "Re-merging Sal and Kael", aliases: [],
    type: "concept", scope: "icespire", status: "canon",
    summary: "Decided 2026-10-13: our Sal comes back only when Kael and Salanar Reborn merge again. There are several ways; separated, the two hate each other.",
    details: "Proposal (10): 1, Thaddeus Finn can force it without consent at a backfiring price; 2, the Bound Hands of Ilmater, if both grip it willingly (Persuasion DC 25-30 each); 3, Liv, who split them, if she trusts the party. Ilmater wants it done: Kael's paladin powers fail until then, and if the party stalls, Ilmater sends someone (proposal: Brother Aldric). Killing Salanar Reborn loses Sal for good.",
    related: ["salanar", "kael-orendis", "evil-salanar", "thaddeus-finn", "bound-hands", "liv", "brother-aldric", "temple-of-ilmater"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "bound-hands", name: "The Bound Hands of Ilmater", aliases: [],
    type: "item", scope: "icespire", status: "proposal",
    summary: "A relic cord of Ilmater that joins two hands, and two souls, if both grip it willingly. Kael's party's cleric carried it to bind Salanar and died with it on the Reach.",
    details: "Merge method 2 (Q4). Salanar Reborn recognises it on sight.",
    related: ["re-merge", "kaels-party", "forgotten-reach", "evil-salanar"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "kaels-party", name: "Kael's fallen party", aliases: [],
    type: "faction", scope: "icespire", status: "canon",
    summary: "Decided 2026-10-13: the companions who fought Salanar beside Kael two years ago. Salanar killed them all; their bones are still on the Reach.",
    details: "Proposal (10): their cleric carried the Bound Hands of Ilmater. Kael, once awake, asks for help bringing them home (Q4).",
    related: ["kael-orendis", "evil-salanar", "bound-hands", "forgotten-reach"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q01", name: "Q1. Remedies sought for Ser Kael Orendis", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Temple board. Kael's wound is a soul wound and needs Greater Restoration or better. Reward: he wakes days early, before the Vanguard gets to him; the temple's favour.",
    related: ["kael-orendis", "temple-of-ilmater", "q02", "q03", "q05"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q02", name: "Q2. Gary's short list", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board, posted by Gary: a tide-pearl from the Reach shallows, grave-moss, banshee breath. A restorative draught that casts Greater Restoration once. Forgotten in the shallows.",
    related: ["gary", "apothe-gary", "q01", "potion-of-encapsulation", "forgotten-reach"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q03", name: "Q3. Thaddeus Finn owes me 200 gold", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board, posted by Willem. Fawkes holds Finn under town hall to make the festival serum. The ransacked Emporium, a Vanguard patrol, the secret lair. Merge method 1.",
    related: ["thaddeus-finn", "willem", "mystics-emporium", "fawkes-secret-lair", "fawkes-serum", "re-merge"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q04", name: "Q4. The fallen of the Reach", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Temple board, posted by Kael once awake. Bring his party's bones home; their cleric carried the Bound Hands. Crossing to the Reach, the Forgotten, the first sighting of Salanar Reborn. Merge method 2.",
    related: ["kaels-party", "bound-hands", "forgotten-reach", "evil-salanar", "q17"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q05", name: "Q5. Night watch wanted", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Temple board. Singing near the temple: Liv comes at night to look at her father, touches the glass, does not attack. Song damage. Merge method 3.",
    related: ["liv", "kael-orendis", "temple-of-ilmater", "hydra-song", "re-merge"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q06", name: "Q6. Discreet couriers wanted", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Town hall board. The book's potion pickup at Lumen Pier for Fawkes's serum; a rival crew gets there first. Reward: passage home, gold, the mayor's trust.",
    related: ["fawkes", "fawkes-serum", "lumen-pier", "fawkes-marbles", "fawkes-track"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q07", name: "Q7. A witness to be brought in", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Town hall board. The witness is Karleen or someone with her drawings: the Fawkes track's handoff to the Karleen track.",
    related: ["karleen", "fawkes-marbles", "fawkes-track"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q08", name: "Q8. Bounty: Forgotten sighted", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Town hall board. The Act 2 daylight Forgotten, fought in front of everyone; its body carries a clue pointing at Fawkes.",
    related: ["the-forgotten", "luminous-vanguard", "fawkes"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q09", name: "Q9. Festival guards", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Town hall board. Guard the Remembrance Festival: the clock, and a place next to the serum.",
    related: ["remembrance-festival", "fawkes-serum", "luminous-vanguard"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q10", name: "Q10. DON'T FORGET", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Pinned over a Vanguard notice: a page describing each of the party and a crossed-out sixth. 'Treehouse past the graveyard. Dusk.'",
    related: ["karleen", "karleens-treehouse"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q11", name: "Q11. Missing child near the Reach shore", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board. The cult's lost child, near the cave.",
    related: ["lost-child", "cult-cave", "cult-track"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q12", name: "Q12. Scrub the chalk", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Town hall board. The cult's blue chalk symbols; followed in order, they lead to the cave.",
    related: ["cult-of-obliviosa", "cult-cave", "merchant-district"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q13", name: "Q13. Deliveries", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board, Bartholomew. Every address on his old receipts is an empty house set for people nobody remembers.",
    related: ["bartholomew", "bartholomews-bakery", "residential-district"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q14", name: "Q14. Who is in my portrait?", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board, Willem. A reward for naming the woman in the painting over his forge.",
    related: ["willem", "willems-forge"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q15", name: "Q15. A fitting", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board, Gwendolyn. A finished gown for a woman nobody on the island fits.",
    related: ["gwendolyn", "gwendolyns-garments"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q16", name: "Q16. Hydra's Fury challenge", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board, Beatrice. Drink three; the 'so drunk the song cannot land' discovery. TJ's quest.",
    related: ["beatrice", "hydras-fury", "the-dragons-inn", "tj-star"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q17", name: "Q17. Boat for hire past the Reach", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Dragon's Inn board, Thomas. The way across with no bridge, and the hidden boat graveyard.",
    related: ["thomas", "forgotten-reach", "boat-graveyard"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q18", name: "Q18. Escort duty, Blackwood farm", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Town hall board. Fawkes is trying to get Ashe off the island alive; Ashe has a flintlock and two dogs.",
    related: ["ashe-blackwood", "blackwood-farmstead", "fawkes", "luminous-vanguard"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q19", name: "Q19. Parts wanted for a flying machine", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Cid's notice. The escape valve.",
    related: ["cid-tidebringer"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q20", name: "Q20. Gravedigger wanted", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "The church: graves keep getting opened. Salanar Reborn is taking the dead. The first lich thread.",
    related: ["evil-salanar", "the-forgotten"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },
  {
    id: "q21", name: "Q21. A dream interpreter sought", aliases: [],
    type: "quest", scope: "icespire", status: "proposal",
    summary: "Posted anonymously by Seraphina: her nightmare of a three-headed monster. A way to turn her.",
    related: ["seraphina-dawnbringer", "mystic-melatonin"],
    sources: ["campaigns/icespire-nad-group/10-quest-board.md"]
  },

  {
    id: "sals-disappearance", name: "Sal's disappearance", aliases: ["after Cryovain", "the bridge to Lumenshire"],
    type: "event", scope: "icespire", status: "proposal",
    summary: "Decided 2026-10-13: at the Cryovain epilogue Thorne finds Sal, thinks he is Kael and shows him Ashe's letter; Nick cuts to black and the party wakes on the beach without Sal. Nick's one beat: a salt-stained stranger stops in front of Sal and says 'Kael?'",
    details: "Forgotten by the party: Thorne recruited them and Sal to sail home; Liv ate Thorne on landing, so the hook went with him, and the song peeled Salanar off Kael. Earlier bridge ideas (Sal leaving alone, the humming stone, a relapse, the wreckers) are superseded.",
    related: ["salanar", "kael-orendis", "cryovain", "thorne-blackwood", "letter-found-in-blood", "icespire-dm", "sending-stones", "liv"],
    sources: ["campaigns/icespire-nad-group/09-kael-returns.md"]
  },
  {
    id: "brother-aldric", name: "Brother Aldric", aliases: ["Aldric"],
    type: "person", scope: "icespire", status: "canon",
    summary: "A kindly old cleric who is Sal's sponsor, treating the void-stone habit like any other addiction. He has no idea what Sal did; his advice is mundane, earnest and accidentally profound.",
    table: "Proposal (10): Ilmater's messenger. If the party stalls on the merge, he steps off the weekly ferry, sent by a dream, looking for his friend Sal, and talks about Sal's atonement in front of a Kael who has never heard of it.",
    related: ["salanar", "void-stones", "shrine-of-ilmater", "lysa"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
  },
  {
    id: "merith", name: "Merith", aliases: ["Salanar's partner"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Salanar's partner, who died slowly of a wasting sickness he could not cure. The grief that led him to void stones.",
    related: ["salanar", "void-stones", "burden-songs"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "marta-fenwick", name: "Marta Fenwick", aliases: ["the Fenwicks"],
    type: "person", scope: "icespire", status: "deprecated",
    summary: "Superseded 2026-10-13: from the old sending-stone design, where Sal in Phandalin remembered the island wrong.",
    related: ["bartholomew", "bartholomews-bakery", "sending-stones", "salanar"],
    sources: ["campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "jack", name: "Jack", aliases: ["snekkyjek", "the DM"],
    type: "person", scope: "icespire", status: "canon",
    summary: "The campaign's author and Sal's player. After the Cryovain finale he takes over from Nick and DMs Lumenshire, voicing Kael and Salanar Reborn.",
    related: ["salanar", "icespire-dm", "dream-frame", "sending-stones"],
    sources: ["campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "icespire-dm", name: "Nick (Icespire DM)", aliases: ["Nick", "the Icespire DM", "the other DM", "TheRecoveryRoom"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Nick, DM of the NAD Group's Dragon of Icespire Peak game (TheRecoveryRoom on D&D Beyond). Decided 2026-10-13: he runs the Cryovain finale and hands off to Jack by cutting to black during the epilogue, once Sal goes missing. Nothing about his finale is guaranteed.",
    details: "His one beat: in the epilogue a salt-stained stranger (Thorne) stops in front of Sal and says 'Kael?', then cut to black. Brief in campaigns/icespire-nad-group/03-handoff-for-other-dm.md.",
    related: ["the-knockout", "jack", "phandalin", "cryovain"],
    sources: ["campaigns/icespire-nad-group/03-handoff-for-other-dm.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "darla-dewdrop", name: "Darla Dewdrop", aliases: ["Darla"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Nat's halfling Rogue 5 (Soulknife). Her sending stone is paired with Sal's, which is now on unconscious Kael at the temple. Karleen's track is hers: the treehouse, the break-in, the DON'T FORGET pages.",
    details: "From D&D Beyond (pulled 2026-10-11):\nHalfling Rogue 5 / Soulknife, background Farmer. Player: Nat. HP 28, 50 gp.\nSTR 8 DEX 15 CON 10 INT 12 WIS 13 CHA 14\nFeats: Actor, Tough, Weapon Mastery, Dark Bargain\nExpertise: Persuasion, Animal Handling\nMagic items: Sending Stones, Potion of Invisibility, Ring of Warmth (eq)\nGear: Shortbow, Shortsword, 2 daggers, Thieves' Tools, Healer's Kit, Ball bearings x1000, Riding horse, Blue sapphire\nLanguages: Common, Halfling, Elvish, Thieves' Cant, Common Sign Language",
    links: [{"label": "Character sheet on D&D Beyond", "url": "https://www.dndbeyond.com/characters/164907865"}],
    related: ["sending-stones", "karleen", "karleen-track", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "porridge", name: "Porridge", aliases: [],
    type: "person", scope: "icespire", status: "canon",
    summary: "Amanda's drow Wizard 5 (Necromancy) who talks to spirits nobody else sees. The Oblivion tome and the Eternal Tome are hers; most likely to understand the keeper clause first.",
    details: "From D&D Beyond (pulled 2026-10-11):\nDrow Wizard 5 / Necromancy, background Haunted One. Player: Amanda. HP 22, 55 gp.\nSTR 8 DEX 14 CON 13 INT 15 WIS 12 CHA 10\nFeats: Shadow Touched, Dark Bargain, Circle Magic (INT), Character Threads, Runestones\nExpertise: Religion\nCantrips: Chill Touch, Ray of Frost, Poison Spray, Lightning Lure\nSpells: Cause Fear, Unseen Servant, Tasha's Mind Whip, Ice Knife, Magic Missile, Melf's Acid Arrow, Blindness/Deafness, Animate Dead, Summon Lesser Demons\nRacial/feat spells: Dancing Lights, Faerie Fire, Darkness, Invisibility, Wrathful Smite\nMagic items: Ring of Warmth (eq)\nLanguages: Common, Elvish, Undercommon\nTraits: {\"personality\": \"I refuse to become a victim, and I will not allow others to be victimized. I live for the thrill of the hunt.\", \"ideal\": \"I have a dark calling that puts me above the law.\", \"bond\": \"There's evil in me, I can feel it. It must never be set free.\", \"flaw\": \"I talk to spirits that no one else can see.\"}\nLooks: Female drow, 100, 5'0, lavender eyes, white hair, faith Lolth",
    links: [{"label": "Character sheet on D&D Beyond", "url": "https://www.dndbeyond.com/characters/169706396"}],
    related: ["oblivion-tome", "eternal-tome", "keeper-clause", "blindness-deafness", "haunted-one-props", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "rowan-sunwood", name: "Rowan Sunwood", aliases: ["Rowan"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Tara's wood elf Druid 5 (Circle of the Land) from Ardeep Forest. Revivify; Lightning Bolt hits the Forgotten's weakness. Ashe's dogs and the Reach are hers.",
    details: "From D&D Beyond (pulled 2026-10-11):\nElf (wood) Druid 5 / Circle of the Land, background Farmer. Player: Tara. HP 28, 50 gp.\nSTR 8 DEX 13 CON 14 INT 10 WIS 15 CHA 12\nFeats: Crafter, Tough, Dark Bargain\nCantrips: Starry Wisp, Frostbite, Thorn Whip, Druidcraft\nSpells: Healing Word, Moonbeam, Warding Wind, Thunderwave, Absorb Elements, Ice Knife, Conjure Animals, Revivify, Earth Tremor\nLand spells: Speak with Animals, Find Familiar, Shocking Grasp, Sleep, Misty Step, Lightning Bolt\nMagic items: Staff of the Python (eq), Ring of Warmth (eq), Potion of Healing\nLanguages: Common, Elvish, Druidic\nLooks: Female wood elf, 136, light copper skin, strawberry blonde hair dyed pink, green eyes; from Ardeep Forest, ambassador to Nightstone and Waterdeep; rowan staff with copper charms\nPossession: Egg shell painted with scenes of misery in disturbing detail\nBackstory: Born in Ardeep Forest to wood elf druids; forest guardian turned ambassador; began travelling at 120 to teach balance of nature, heal nature in towns, make animal friends.",
    links: [{"label": "Character sheet on D&D Beyond", "url": "https://www.dndbeyond.com/characters/164292669"}],
    related: ["revivify", "the-forgotten", "forgotten-reach", "haunted-one-props", "past-future-rule", "shrine-of-savras", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "sprig-grenoble", name: "Sprig Grenoble", aliases: ["Sprig"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Steph's human Monk 5 (Warrior of Mercy). Her island hooks are the Staff of Silence and sneaking up on Liv while she is not singing; her drum is a noise tool against the song.",
    details: "From D&D Beyond (pulled 2026-10-11):\nHuman Monk 5 / Warrior of Mercy, background Wayfarer. Player: Steph. HP 28, 50 gp.\nSTR 12 DEX 15 CON 14 INT 10 WIS 13 CHA 8\nFeats: Lucky, Savage Attacker, Fey Touched, Dark Bargain\nMagic items: Ring of Warmth (eq, attuned), 2 Spell Scrolls (1st), 2 Potions of Healing\nGear: Quarterstaff, Spear, 5 daggers, Drum, Brewer's Supplies, Herbalism Kit, Thieves' Tools, Riding horse\nLanguages: Common, Common Sign Language, Orc",
    links: [{"label": "Character sheet on D&D Beyond", "url": "https://www.dndbeyond.com/characters/164569028"}],
    related: ["staff-of-silence", "song-counters", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "tj-star", name: "TJ Star", aliases: ["TJ"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Alicia's half-orc Barbarian 4 (Berserker), flaw 'I have an addiction'. He is the 'so drunk the song cannot land' discovery; Hydra's Fury at the Dragon's Inn is for him.",
    details: "From D&D Beyond (pulled 2026-10-11):\nHalf-Orc Barbarian 4 / Berserker, background Haunted One. Player: Alicia. HP 33, 550 gp.\nSTR 15 DEX 12 CON 13 INT 8 WIS 10 CHA 14\nFeats: Weapon Mastery, Dual Wielder, Dark Bargain\nMagic items: Clockwork Amulet x2 (one eq), Potion of Healing\nGear: Flail (eq), Morningstar (eq), Shortsword (eq), Greataxe, 4 handaxes, Shield, three chests of gear\nLanguages: Common, Orc, Infernal\nTraits: {\"personality\": \"I spend money freely and live life to the fullest, knowing that tomorrow I might die. I expect danger around every corner.\", \"ideal\": \"I'm a monster that destroys other monsters, and anything else that gets in my way.\", \"bond\": \"My torment drove away the person I love. I strive to win back the love I've lost. There's evil in me, I can feel it. It must never be set free.\", \"flaw\": \"I have an addiction. I assume the worst in people.\"}\nLooks: Male half-orc, 37, 6'11, 303 lb, hazel eyes, silver hair, green skin\nPossession: A single caltrop made from bone",
    links: [{"label": "Character sheet on D&D Beyond", "url": "https://www.dndbeyond.com/characters/164293521"}],
    related: ["hydras-fury", "song-counters", "haunted-one-props", "dark-bargain"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "rynn-caulrunners", name: "Rynn Caulrunners", aliases: ["Rynn"],
    type: "person", scope: "icespire", status: "canon",
    summary: "Hailey's dwarf Fighter 4 (Battle Master); Hailey rarely plays. Fine to be absent without comment; if present, Willem's Forge is her door.",
    details: "From D&D Beyond (pulled 2026-10-11):\nDwarf Fighter 4 / Battle Master, background Artisan. Player: Hailey (rarely plays). HP 28, 24 gp.\nSTR 15 DEX 14 CON 12 INT 13 WIS 8 CHA 10\nFeats: Crafter, Weapon Mastery, Great Weapon Fighting, Great Weapon Master\nGear: Breastplate, Maul, Handaxe, Smith's Tools\nLanguages: Common, Dwarvish, Common Sign Language",
    links: [{"label": "Character sheet on D&D Beyond", "url": "https://www.dndbeyond.com/characters/168063159"}],
    related: ["willems-forge", "willem"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/README.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "mosco", name: "Mosco", aliases: ["the lighthouse half-orc", "Talos wreckers"],
    type: "person", scope: "icespire", status: "canon",
    summary: "A half-orc in the Icespire game who runs a lighthouse and lures ships in to steal for Talos; his people are friends with Cryovain.",
    details: "Waking-campaign colour.",
    related: ["cryovain", "lysa", "boat-graveyard"],
    sources: ["campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/06-lysa-options.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "phandalin-orcs", name: "Phandalin orcs", aliases: ["Charles", "Chooch", "Chooch Jr", "Alexander", "the orc horn"],
    type: "faction", scope: "icespire", status: "canon",
    summary: "The orcs Sal has been befriending and rehabilitating in the Icespire game. Charles and Chooch are feuding brothers, Alexander converted to Sal's cause, Chooch Jr is gathering orcs to meet in Phandalin. Sal has a horn that summons Charles and his gang.",
    details: "Waking-campaign colour.",
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
    related: ["liv-and-the-forgotten", "liv", "elara", "cult-of-obliviosa", "portal-wizard", "night-of-the-spell", "forgotten-walks-into-town", "vel-tharin", "forgotten-reach"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "drive/characters/the-forgotten.md", "drive/obliviosa-root/what-really-happened-five-years-ago.md", "drive/notes/liv-scratch.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "hydra-spawn", name: "Hydra-Spawn", aliases: ["hydra babies", "the nest"],
    type: "monster", scope: "book", status: "canon",
    summary: "Medium blue-tentacled aberrations, part human, sleeping in a web-like nest in the cult cave. Kept when the sex-cult framing was cut (Q5).",
    details: "CR 4, AC 14, HP 25, speed 30 / swim 30. Two tentacles +6 (1d8+4 plus 1d8 acid, DC 14 Con or poisoned). Memory Drain 60 ft (DC 14 Int, 3d6 psychic, forget a memory). Swallow (3d6 acid). Stealth DC 20 for the whole party or they wake.",
    related: ["cult-cave", "liv", "cult-of-obliviosa", "blue-haired-woman"],
    sources: ["drive/obliviosa-root/hydra-babies.md", "drive/notes/into-lumenshire.md", "book/02-story-flow.md", "book/03-open-questions.md"],
    images: [{ src: "img/hydra-spawn.jpg", caption: "From the Hydra babies doc" }, { src: "img/hydra-spawn-2.jpg", caption: "From the Hydra babies doc" }, { src: "img/hydra-spawn-3.jpg", caption: "From the Hydra babies doc" }, { src: "img/hydra-spawn-4.jpg", caption: "From the Hydra babies doc" }]
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
    sources: ["drive/characters/luminous-vanguard-soldier.md", "book/04-todo.md"],
    images: [{ src: "img/vanguard-soldier.jpg", caption: "From the Luminous Vanguard Soldier doc" }]
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
    summary: "The white dragon of Nick's Dragon of Icespire Peak game. The party fights him in the finale; Lumenshire begins in the epilogue after.",
    details: "Spelling decided 2026-10-11. The party is kitted for him (Rings of Warmth, Ice Knife); Lumenshire is not cold.",
    related: ["forgetting-edge", "phandalin", "icespire-dm", "mosco", "past-future-rule"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
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
    related: ["cultist", "cult-cave", "cult-track", "cultist-journal", "cultist-necklace", "blue-chalk-symbols", "the-forgotten", "elara", "remembrance-festival", "lysa"],
    sources: ["book/00-canon.md", "book/02-story-flow.md", "book/05-sacrifice-and-hooks.md", "drive/notes/into-lumenshire.md", "drive/obliviosa-root/cultist-character-sheet.md", "drive/notes/liv-scratch.md", "campaigns/icespire-nad-group/06-lysa-options.md"],
    images: [{ src: "img/cult-of-obliviosa.jpg", caption: "From the Into Lumenshire notes: a hydra-headed emblem (placed beside the map-to-the-cave beat)" }]
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
    type: "faction", scope: "icespire", status: "deprecated",
    summary: "Dropped 2026-10-13: the name of Salanar's people on his sheet. At this table Salanar is simply a healer on Lumenshire.",
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
    sources: ["book/00-canon.md", "drive/locations/lumenshire.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "residential-district", name: "Residential District", aliases: ["NE island"],
    type: "place", scope: "book", status: "canon",
    summary: "The largest island (NE): town hall, church spires, the central square with its sea-themed fountain, memorial displays, and a graveyard far too big for the town.",
    details: "Memorial displays still need writing (TODO).",
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
    related: ["courthouse", "livs-lair", "cult-cave", "the-forgotten", "veltharin-chapel", "void-stones", "lumenshire"],
    sources: ["book/00-canon.md", "drive/locations/forgotten-reach.md", "drive/locations/lumenshire.md", "drive/characters/mayor-fawkes.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "courthouse", name: "The ruined courthouse", aliases: ["courtroom", "the courthouse"],
    type: "place", scope: "book", status: "canon",
    summary: "Where Fawkes was tried for Elara's murder and where Liv cast Oblivion and devoured the courtroom. Now a ruin on the Forgotten Reach, with Liv's lair beneath.",
    related: ["fawkes-trial", "night-of-the-spell", "livs-lair", "forgotten-reach"],
    sources: ["book/00-canon.md", "drive/characters/mayor-fawkes.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "livs-lair", name: "Liv's lair", aliases: ["Obliviosa's lair", "beneath the courthouse"],
    type: "place", scope: "book", status: "canon",
    summary: "Liv's den beneath the ruins of the courthouse on the Forgotten Reach. Her lair actions project the stolen memories of her victims, which makes the lair one of the places the truth can be shown out loud.",
    details: "The party can go to her here or wait for her to come and feed in town. Final battle staging is TODO.",
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
    table: "Ashe Blackwood's farm, as in the book. Thorne's empty room.",
    related: ["ashe-blackwood", "the-wreck", "childs-drawing", "sals-errand"],
    sources: ["book/00-canon.md", "book/01-opening-the-letter.md", "drive/loose/rude-awakening.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md", "campaigns/icespire-nad-group/06-lysa-options.md"]
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
    related: ["bartholomew", "merchant-district", "marta-fenwick"],
    sources: ["drive/locations/bartholomews-bakery.md", "book/00-canon.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "the-dragons-inn", name: "The Dragon's Inn", aliases: ["the inn", "the tavern"],
    type: "place", scope: "book", status: "canon",
    summary: "Beatrice's inn, too big for its patrons, hung with dragon tapestries. Karleen rents a room here as the party's base, and the party wakes here after each song with cuts they cannot explain.",
    details: "Drinks, all 1 gp: Dragon's Breath Ale, Pixie Punch, Hydra's Fury, Elvish Wine, Dwarven Stout, Faerie Nectar, Unicorn's Blood.\nPatrons: Jack the smith, Marcus the noble with servant Carl, Sarah, Thomas; halflings dicing, a bard. TODO: revise patrons so each leads to the cave or to memory restoration.\nOn day one Seraphina delivers Fawkes's pitch here in the afternoon.",
    table: "TJ's door (Hydra's Fury). Session 1 ends with the party waking here holding the cult plant.",
    related: ["beatrice", "hydras-fury", "carl", "sarah", "thomas", "marcus-noble", "jack-smith-patron", "karleen", "first-night", "merchant-district"],
    sources: ["drive/locations/the-dragons-inn.md", "book/00-canon.md", "book/02-story-flow.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/04-session-1-intro.md"],
    images: [{ src: "img/the-dragons-inn.jpg", caption: "From the Dragon's Inn doc: the common room" }]
  },
  {
    id: "mystics-emporium", name: "The Mystic's Emporium", aliases: ["the magic shop", "abandoned shop"],
    type: "place", scope: "book", status: "canon",
    summary: "A ransacked, abandoned magic shop smelling of burnt wood: overturned shelves, smashed potions, tattered spellbooks. Still needs a clue planted in it (TODO).",
    table: "Proposal (10): Thaddeus Finn's shop, ransacked by the Vanguard when Fawkes took him. The missing clue: Finn's notes on what the song takes and how to give it back, and a Vanguard boot print (Q3).",
    related: ["merchant-district", "enchanted-garden"],
    sources: ["drive/locations/the-mystics-emporium.md", "book/00-canon.md", "drive/obliviosa-root/liv-todo.md"],
    images: [{ src: "img/mystics-emporium.jpg", caption: "From the Mystic's Emporium doc: the abandoned shop" }]
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
    summary: "Base of Nick's Icespire campaign. Thorne finds Sal at the victory celebration here, the last scene before the cut to black.",
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
    summary: "Ancient ruins south-west of Phandalin where the party had contracts in the Icespire game.",
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
    type: "place", scope: "icespire", status: "deprecated",
    summary: "Rejected 2026-10-13: the 08 proposal that Brother Aldric tended Kael's body here through three lost years.",
    related: ["brother-aldric", "salanar", "kael-orendis"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "calimshan", name: "Calimshan (Alimir foothills)", aliases: ["Alimir foothills"],
    type: "place", scope: "icespire", status: "deprecated",
    summary: "Where Sal's sheet placed the Vel'tharin and the Great Erasure, and where Lysa's slavers came from. Superseded 2026-10-13: the Erasure happened on Lumenshire and Liv took Lysa's role.",
    related: ["vel-tharin", "great-erasure", "lysa", "salanar"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/02-party.md"]
  },
  {
    id: "veltharin-chapel", name: "Vel'tharin chapel", aliases: [],
    type: "place", scope: "icespire", status: "deprecated",
    summary: "Rejected 2026-10-13: the 08 proposal of a Vel'tharin chapel on the Forgotten Reach.",
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
    sources: ["drive/items/blackwood-blade.md", "book/01-opening-the-letter.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/04-session-1-intro.md"],
    images: [{ src: "img/blackwood-blade.jpg", caption: "From the Rude Awakening doc: the bloodied blade on the sand" }]
  },
  {
    id: "oblivion-tome", name: "The Oblivion tome", aliases: ["Elara's books", "oblivion spell tome", "Elara's book"],
    type: "item", scope: "book", status: "canon",
    summary: "Elara's book holding the Oblivion spell, which Liv cast from. Fawkes owns it; decided 2026-10-11 (Q9) it is in his secret lair under town hall, the Karleen-track prize, and what he needs for the serum. It leaves out the keeper clause.",
    table: "Porridge's item.",
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
    details: "Decided 2026-10-13: Sal took void crystals recreationally to forget, before his bond with Ilmater. Open: where Sal's last one is now (on Kael, on the lich, or lost in the surf).",
    related: ["salanar", "portal-wizard", "keeper-clause", "great-erasure", "brother-aldric", "vial-of-complete-restoration"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/01-plan.md"]
  },
  {
    id: "sending-stones", name: "Sending Stones", aliases: ["the stone", "sending stone"],
    type: "item", scope: "icespire", status: "proposal",
    summary: "Darla's stone is paired with Sal's. After the landing, Sal's stone is on unconscious Kael at the temple: a call gets silence and breathing; once he wakes, 'Who is this?'; after a re-merge, Sal.",
    details: "Open: one call a day (the item) or three (older docs).",
    related: ["salanar", "darla-dewdrop", "sals-errand", "marta-fenwick", "dream-frame", "jack"],
    sources: ["campaigns/icespire-nad-group/05-sending-stone-and-goals.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/02-party.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "forgetting-edge", name: "The Forgetting Edge", aliases: [],
    type: "item", scope: "icespire", status: "deprecated",
    summary: "Superseded 2026-10-13: a past-timeline artifact against Cryovain from the dream-frame design. A weapon forged from Liv's scale that makes what it cuts forget.",
    related: ["cryovain", "liv", "past-future-rule", "stashable-rewards", "feyfire-lantern", "luminous-vanguard-armour"],
    sources: ["campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md", "campaigns/icespire-nad-group/07-todo.md"]
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
    related: ["oblivion-tome", "keeper-clause", "liv", "night-of-the-spell", "burden-songs"],
    sources: ["drive/obliviosa-root/spell-oblivion.md", "book/00-canon.md", "book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "revivify", name: "Revivify", aliases: [],
    type: "spell", scope: "icespire", status: "canon",
    summary: "Rowan has it. Diamonds are the limit; the party has none listed.",
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
    table: "Back to the book version, to Thorne from Ashe Blackwood. Thorne shows it to Sal at the Cryovain epilogue (decided 2026-10-13); Nick cuts to black and Jack opens on it.",
    related: ["ashe-blackwood", "thorne-blackwood", "kael-orendis", "the-wreck", "blackwood-blade", "forgotten-friend"],
    sources: ["drive/found-documents/a-letter-found-in-blood.md", "book/01-opening-the-letter.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"],
    images: [{ src: "img/letter-found-in-blood.jpg", caption: "From the Rude Awakening doc: the letter in the blood on the sand" }]
  },
  {
    id: "dont-forget-pages", name: "DON'T FORGET pages", aliases: ["the notes", "DON'T FORGET notes"],
    type: "document", scope: "book", status: "canon",
    summary: "Karleen's notes in her own hand that she does not remember writing, each headed DON'T FORGET. They describe every party member perfectly, plus a fifth person, the forgotten friend. The in-world version of the memory cards.",
    details: "Prop to make before session 1.",
    table: "Five descriptions fit the party and a sixth is crossed out so hard the parchment tore; it points at the nameless dead, not at Sal.",
    related: ["karleen", "memory-cards", "forgotten-friend", "marcus-ainsworth"],
    sources: ["book/01-opening-the-letter.md", "book/02-story-flow.md", "drive/notes/into-lumenshire.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
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
    sources: ["book/00-canon.md", "book/05-sacrifice-and-hooks.md", "drive/loose/fawkes-missions.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "the-wreck", name: "The wreck", aliases: ["the shipwreck", "the beach", "cold open"],
    type: "event", scope: "book", status: "canon",
    summary: "The campaign opens with the song in the dark, then the party waking on a beach beside their wrecked ship, a pool of blood, the blade and the letter. Their friend was eaten during the wreck and nobody remembers him.",
    details: "Medicine 12: human blood under an hour old, drag marks into the surf. Investigation 13: one more set of footprints than the party. Insight 10: you are grieving and do not know for whom. Two roads: the farmhouse or the town. Cid is missing (alive, in town).",
    table: "The party wakes one short: Sal is missing. The letter to Thorne lies in the blood. Kael has already been taken to the temple (how, and when, is open).",
    related: ["letter-found-in-blood", "blackwood-blade", "thorne-blackwood", "forgotten-friend", "hydra-song", "blackwood-farmstead", "ships-manifest", "salt-wind", "cid-tidebringer"],
    sources: ["book/01-opening-the-letter.md", "book/02-story-flow.md", "drive/loose/rude-awakening.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/01-plan.md"],
    images: [{ src: "img/the-wreck.jpg", caption: "From the Rude Awakening doc: the wreck on the beach" }]
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
    summary: "Salanar's catastrophe on Lumenshire, about two years ago (decided 2026-10-13). He was unmaking Liv when her mother's spell half-saved her into the hydra; Kael and his party fought him there.",
    details: "Proposal (09): Liv was dying of the wasting sickness that killed Merith, and to Salanar erasure was mercy.",
    related: ["salanar", "vel-tharin", "void-stones", "night-of-the-spell", "kael-orendis", "calimshan"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "the-knockout", name: "The knockout", aliases: ["dream entry"],
    type: "event", scope: "icespire", status: "deprecated",
    summary: "Superseded 2026-10-13: the dream-frame entry. Replaced by Nick's cut to black during the Cryovain epilogue.",
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
    table: "Still used: one card per player each time the song plays.",
    related: ["hydra-song", "dont-forget-pages", "session-boundaries", "ending-kill-liv"],
    sources: ["book/01-opening-the-letter.md", "book/06-dream-frame.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "keeper-clause", name: "The keeper clause", aliases: ["the keeper", "the sacrifice", "the vessel"],
    type: "concept", scope: "book", status: "canon",
    summary: "Oblivion moves memories rather than destroying them, and needs a willing keeper to hold them. Liv skipped the clause, so the spell made her the vessel. To undo it someone must willingly become the keeper: the island remembers, Liv is a girl again, and the keeper is erased from every mind and walks away.",
    details: "Who can pay: Fawkes, a player, Karleen, Ashe, a turned Seraphina; Elara wants it for ascension (same ritual, different intent).\nWithout the Vial of Complete Restoration the keeper dies; with it they live, forgotten. The Eternal Tome holds the clause; the Oblivion tome leaves it out.\nStatus: drafted as a proposal in 05, then built on by the 2026-10-11 decisions (Q2, Q3, keeper wakes in the past ending).",
    related: ["spell-oblivion", "eternal-tome", "vial-of-complete-restoration", "fawkes-serum", "ending-fawkes-sacrifice", "ending-player-sacrifice", "elara", "liv", "salanar", "thaddeus-finn"],
    sources: ["book/05-sacrifice-and-hooks.md", "book/03-open-questions.md", "book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/08-salanar.md"]
  },
  {
    id: "void-of-perception", name: "The void of perception", aliases: ["blurred faces", "perception void", "forgettable people"],
    type: "concept", scope: "book", status: "canon",
    summary: "Unnamed people who will die on the island do not register to the players. Perception 10-14: extremely forgettable; 15-19: something is off; 20+: the face will not resolve. Named NPCs are shown normally. Never explained.",
    details: "Replaces 'blurred faces' (Jack, 2026-10-11). Naming someone at the table is a small mercy. A dead PC's portrait in recaps gets the same treatment, the first visible sign it is the future. Killing Liv restores the faces. A nameless-victim list is TODO.",
    table: "Open at Jack's table whether the rule still applies.",
    related: ["dream-frame", "past-future-rule", "forgotten-friend", "vanguard-soldier"],
    sources: ["book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/04-session-1-intro.md"]
  },
  {
    id: "dream-frame", name: "The dream frame", aliases: ["dream campaign"],
    type: "concept", scope: "book", status: "canon",
    summary: "Obliviosa runs as a dream inside another campaign with an existing party, picked up a session here and there. The wreck on the beach is how the dream begins each time. The players are told nothing about it.",
    details: "Entry needs an existing party, so the book needs per-tier scaling. Persistence: characters and inventory are never forked; continuity conflicts are Liv's illusions.",
    table: "Not used at Jack's table: the dream frame was dropped there on 2026-10-13.",
    related: ["past-future-rule", "persistence-rule", "session-boundaries", "void-of-perception", "the-knockout", "stashable-rewards"],
    sources: ["book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "past-future-rule", name: "Past or future rule", aliases: ["it was the past", "it was the future", "only a dream"],
    type: "concept", scope: "book", status: "canon",
    summary: "If nobody died in the dream it was the past: they wake remembering it all, stashes included. If anyone died or continuity broke it was the future: no recovery, the dreams end, and the waking campaign later arrives at the island for real. If everyone died it was only a dream.",
    details: "Erasure by Liv counts as death. A character brought back inside the dream has not died. The forgotten friend never counts. A keeper is forgotten, not killed (decided 2026-10-11).",
    table: "Not used at Jack's table: the dream frame was dropped there on 2026-10-13.",
    related: ["dream-frame", "revivify", "keeper-clause", "stashable-rewards", "forgetting-edge", "cryovain"],
    sources: ["book/06-dream-frame.md", "book/04-todo.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "persistence-rule", name: "Persistence", aliases: ["nothing is forked"],
    type: "concept", scope: "book", status: "canon",
    summary: "Characters and inventory persist across dream sessions and the waking campaign; nothing is forked. Any continuity conflict is one of Liv's illusions, never apologised for or explained.",
    table: "Not used at Jack's table: the dream frame was dropped there on 2026-10-13.",
    related: ["dream-frame", "past-future-rule"],
    sources: ["book/06-dream-frame.md", "book/00-canon.md", "campaigns/icespire-nad-group/03-handoff-for-other-dm.md"]
  },
  {
    id: "session-boundaries", name: "Session boundaries are the song", aliases: [],
    type: "concept", scope: "book", status: "canon",
    summary: "Each time the DM leaves Lumenshire for the waking campaign the song plays, and each return begins mid-scene or on the beach. Expect to lose a memory card at every boundary. The full procedure is TODO.",
    table: "Not used at Jack's table: the dream frame was dropped there on 2026-10-13.",
    related: ["hydra-song", "memory-cards", "dream-frame"],
    sources: ["book/06-dream-frame.md", "book/04-todo.md"]
  },
  {
    id: "stashable-rewards", name: "Stashable rewards", aliases: ["reward stashes", "caches"],
    type: "concept", scope: "book", status: "canon",
    summary: "Every significant reward on the island needs a plausible hiding place, so the past ending can pay out: the party wakes remembering where they stashed it.",
    table: "Not used at Jack's table: the dream frame was dropped there on 2026-10-13.",
    related: ["past-future-rule", "forgetting-edge"],
    sources: ["book/06-dream-frame.md", "book/04-todo.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
  },
  {
    id: "forgotten-friend", name: "The forgotten friend", aliases: ["the sixth person", "the fifth person"],
    type: "concept", scope: "book", status: "canon",
    summary: "The person who brought the party to the island, eaten by Liv in the wreck and remembered by nobody. Thorne by default; each table chooses (Q6): a planted player, a cold open, Cid, a PC's backstory NPC, or 'whose idea was this trip?'.",
    details: "With an existing party the strongest version is a real NPC from the waking campaign fed to Liv first.",
    table: "A nameless sailor or guide under the void of perception; the party is meant to assume it was Sal. The sixth stays unsolvable.",
    related: ["thorne-blackwood", "the-wreck", "letter-found-in-blood", "void-of-perception", "dont-forget-pages", "ships-manifest"],
    sources: ["book/01-opening-the-letter.md", "book/03-open-questions.md", "book/06-dream-frame.md", "campaigns/icespire-nad-group/01-plan.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
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
    related: ["routing-rule", "eternal-tome", "livs-lair", "sending-stones"],
    sources: ["book/05-sacrifice-and-hooks.md", "campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
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
    type: "concept", scope: "book", status: "deprecated",
    summary: "Rejected 2026-10-13 with 08: Elara had a partner who handed Liv the spell, a slot a table could fill from a PC's backstory.",
    related: ["elara", "salanar", "liv"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "burden-songs", name: "Burden songs", aliases: [],
    type: "concept", scope: "icespire", status: "deprecated",
    summary: "The Vel'tharin's oral tradition, lost in the Erasure (Sal's sheet).",
    related: ["vel-tharin", "hydra-song", "merith", "spell-oblivion"],
    sources: ["campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/party/ddb-roster.json"]
  },
  {
    id: "two-voices", name: "The two voices (Ilmater and the Unmaker)", aliases: ["the Unmaker", "Ilmater"],
    type: "concept", scope: "icespire", status: "canon",
    summary: "Sal hears one warm, sorrowful voice and one cold, rational one, and calls them Ilmater and the Unmaker. He does not know if either is real.",
    related: ["salanar", "elara", "void-stones"],
    sources: ["campaigns/icespire-nad-group/party/ddb-roster.json", "campaigns/icespire-nad-group/08-salanar.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "sals-errand", name: "Sal's errand: bring Ashe home", aliases: ["the goal", "bring Ashe home"],
    type: "concept", scope: "icespire", status: "deprecated",
    summary: "Superseded 2026-10-13: 'bring Ashe home', from the dream-frame design. The goals now are getting Sal back, surviving the song and the festival clock.",
    related: ["salanar", "ashe-blackwood", "sending-stones", "letter-found-in-blood", "remembrance-festival", "origin-wrinkle"],
    sources: ["campaigns/icespire-nad-group/05-sending-stone-and-goals.md", "campaigns/icespire-nad-group/04-session-1-intro.md", "campaigns/icespire-nad-group/07-todo.md"]
  },
  {
    id: "origin-wrinkle", name: "The origin wrinkle", aliases: ["they met twice"],
    type: "concept", scope: "icespire", status: "deprecated",
    summary: "Superseded 2026-10-13: a past-timeline idea from the dream-frame design.",
    related: ["sals-errand", "past-future-rule", "salanar"],
    sources: ["campaigns/icespire-nad-group/05-sending-stone-and-goals.md"]
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
    table: "At Jack's table a re-merged Sal is a natural keeper (proposal).",
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
