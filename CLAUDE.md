# Working in this repo

Jack keeps feeding story ideas in conversation; refine the docs as they come and treat everything as fluid until he says otherwise.

- `book/` is the generic Obliviosa campaign book. Never put real players, a specific party's characters, or a host campaign (Sal, Kael, Phandalin, Cryovain, Icespire) in it.
- `campaigns/<table>/` holds everything specific to one real group. The current one is `campaigns/icespire-nad-group/`.
- When an idea is specific to Jack's table, write it in the campaign folder. When it would work for any table, write the general version in `book/` and the specific application in the campaign folder.
- `drive/` is a read-only mirror of Google Drive. Do not edit it.
- Record Jack's decisions with dates, and move answered questions out of the open lists.
- When story docs change (new or renamed people, places, items, decisions), update `codex/things.js` to match. The object shape is in `codex/README.md`.
- `player/` is the players' journal: only Jack-approved, player-facing entries. Never copy DM truth into `player/entries.json` without his approval, and always run `python3 player/build.py` (it has a leak guard). See `player/README.md`.
- The Pages site serves the players' journal at the root and the DM codex at `/dm-aaa0a039/`. Never link or mention that DM path anywhere players could see it.
