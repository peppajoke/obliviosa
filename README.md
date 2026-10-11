# Obliviosa (Lumenshire / False Hydra)

Jack's homebrew D&D 5e campaign. A false-hydra mystery on the isolated island of Lumenshire: a nine-year-old girl's botched memory spell turned her into Liv/Obliviosa, a memory-devouring hydra, and her father Fawkes has been feeding the town to her for five years while being hailed as its hero.

## Layout

| Path | What |
| --- | --- |
| `drive/` | Verbatim text mirror of every Google Drive doc for this campaign (46 docs). One folder per Drive folder, plus `loose/` for docs that sit in My Drive root. Each file's first line is an HTML comment with the Drive id and last-modified date. **Do not edit these; they are the pull side of the sync.** |
| `campaign/` | The assembled, working campaign. This is where edits happen. |
| `MANIFEST.json` | Drive id, title, folder, modified date for every mirrored doc. Used to re-pull. |

## campaign/

| File | Purpose |
| --- | --- |
| `00-canon.md` | The one-page truth: what actually happened, who knows what, how the hydra song works, factions, endings. Read first. |
| `01-opening-the-letter.md` | The cold open (letter found in blood, the forgotten friend). Runnable. |
| `02-story-flow.md` | Act structure merged from the 2025 script, Basic Script and the 2023 raw notes. |
| `03-open-questions.md` | Contradictions between source docs and decisions still needed. |
| `04-todo.md` | Every TODO scattered across the Drive docs, consolidated. |

## Source history (so the contradictions make sense)

- **Mar-Jul 2023, first version.** Folder tree `Obliviosa/` (Characters, Locations, Items, Notes, Found documents, Deprecated). Thorne is a planted fake player, Marcus Ainsworth is the museum contact, there is a museum heist, and Liv's lair is a cult cave with hydra babies.
- **Jul 30 2023, revision pass.** Marcus replaced by Karleen ("fully replace chubby with Karleen"), museum moved to Deprecated, Fawkes Missions / Salt Wind intro / Basic Script written, Luminous Vanguard + Seraphina added.
- **Feb-Apr 2025, "redux".** `FALSE HYDRA REDUX SCRIPT`, `Act 1: Salvage Operation`, `Obliviosa Session 0`. Adds a pre-wreck Act 1 at sea, Elara as the hidden big bad, six endings, and a Baldur's Gate / Flaming Fist framing for the players.
- **Oct 2025, this repo.** Direction from Jack: open on the party finding the letter in blood, the letter's addressee being the friend they have already lost and forgotten.

## Re-syncing from Drive

Pull side only. Read each id in `MANIFEST.json` with the Drive connector and overwrite the matching file under `drive/` when `modifiedTime` is newer. Nothing writes back to Drive.
