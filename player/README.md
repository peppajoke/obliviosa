# The players' journal

One shared codex for the whole party (decided by Jack, 2026-10-13), containing only what the party has seen, heard or been told, and only what Jack has approved. It is published as this repo's GitHub Pages site; the DM codex sits at an unlisted address beside it (see Publishing).

## Why it is safe enough

GitHub Pages serves files, and anyone can read a served file. So the journal is filtered **before** it is published: `build.py` writes the journal from `entries.json` alone, and nothing from the DM codex goes into it. The journal page and its data contain no secrets. The DM codex and this repo are public but unlisted, which is fine for this table.

## Files

| File | What |
| --- | --- |
| `entries.json` | Player-facing entries, written from the party's side: what they saw, what they were told (lies included). `"status": "staged"` entries are drafts and are never published; `"live"` (the default) entries are. |
| `live.txt` | Quick reveals without Claude: add an entry id on its own line and commit (e.g. in the GitHub mobile app) and that entry goes live on the next build. |
| `config.json` | Journal title and subtitle; the public repo name once it exists. |
| `secrets.txt` | Leak guard: terms that make the build fail if they appear in a published entry. An entry may list a term in its `allow` array once Jack has approved that reveal. |
| `build.py` | Builds `dist/` (gitignored): the codex page in player mode, the published entries, and only the images they use. |
| `sessions/` | Transcripts and proposed reveals, one file per session. Private. |

## Entry shape

```json
{
  "id": "the-thing-in-the-water",
  "name": "The thing in the water",
  "aliases": ["the singing"],
  "type": "monster",
  "summary": "What the party knows, in their terms.",
  "details": "Optional extra lines.",
  "images": [{ "src": "img/liv.jpg", "caption": "What you saw from the beach" }],
  "related": ["other-player-entry-ids"],
  "seen": "Session 2",
  "status": "staged",
  "forgotten": false,
  "allow": []
}
```

- Ids are **player-facing** and must not give anything away (`the-thing-in-the-water`, not `liv`). The build checks ids against the leak guard too.
- Images are reused from `codex/img/`; only the ones used get published.
- `forgotten: true` turns the entry into a blank card (name `▒▒▒▒▒▒▒▒`, "You cannot remember what"). Use it when the song takes something, or when Liv eats someone the party knew. Nothing about a forgotten entry is published. Restore it by setting `forgotten` back to false.

## Publishing

`.github/workflows/pages.yml` runs on every push that touches `player/` or `codex/`. It builds the journal (stopping if the leak guard trips) and deploys one GitHub Pages site:

- **https://peppajoke.github.io/obliviosa/** is the players' journal. This is the link to give the players.
- **https://peppajoke.github.io/obliviosa/dm-aaa0a039/** is the DM codex, at an unlisted address. Do not share it.

Decided 2026-10-13: one repo, no separate public repo. Jack keeps this repo public and accepts that the DM material is only hidden, not locked: the players are not going to go looking.

Players just keep the page open: it checks for new entries every minute and pops up "New in your journal: ...". From commit to their screen is about one to two minutes.

## Before a session

The agent drafts the likely reveals for the next session as `"status": "staged"` entries (session 1's are already in `entries.json`). Jack reads them over. Nothing is published until an entry goes live.

## During a session

- **Ask Claude**: "reveal the mayor", "reveal Gary, add that he sells deafness potions". Claude edits or writes the entry, flips it to live, runs the build (leak guard), commits and pushes.
- **Or without Claude**: add the entry's id to `live.txt` in the GitHub mobile app and commit.
- To make the party forget something: set `"forgotten": true` on that entry.

## After each session

1. Put the session transcript or notes in `sessions/NN-transcript.md`.
2. An agent reads the transcript against the DM codex and writes `sessions/NN-proposed.md`: a numbered list of proposed new entries and edits, in the party's words, each flagged if it brushes a secret.
3. Jack approves ("all but 4, reword 6").
4. The approved changes go into `entries.json`, then run `python3 player/build.py`. It refuses to build if a secret slipped in.
5. Publish `dist/` to the public repo, which deploys to GitHub Pages.

Rules for the agent: only what the party actually perceived or was told; never DM truth they have not learned; when unsure, leave it out and ask.
