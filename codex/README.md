# Codex

A searchable index of every thing in the Obliviosa story: people, places, items, factions, events, monsters, spells, documents and concepts/rules. Each entry is one short DM-facing truth with links to related things and to the docs it comes from.

## Opening it

Open `codex/index.html` in a browser, straight from disk. No build step and no server needed. `/` focuses search, `Esc` clears it (or closes the open entry). Each entry has its own URL hash (`index.html#ashe-blackwood`), so you can link to it and back/forward works.

Filters: type chips, scope (All / Book / Icespire table), and a toggle for deprecated things, which are hidden by default.

## Adding or changing a thing

Edit `things.js`. Each thing is one object in `window.THINGS`:

```js
{
  id: "kebab-slug",            // unique, used in the URL hash and in `related`
  name: "Display Name",
  aliases: ["Other names"],    // also searched
  type: "person",              // person | place | item | faction | event | monster | spell | document | concept
  scope: "book",               // book (generic Lumenshire) | icespire (only Jack's table)
  status: "canon",             // canon | proposal | deprecated
  summary: "1-3 plain sentences, DM-facing truth.",
  details: "Optional. Stats, DCs, who knows what.\nNew lines are kept.",
  table: "Optional. Icespire-specific twist on a book thing.",
  related: ["other-ids"],      // every id must exist
  sources: ["book/00-canon.md"] // repo-relative paths that exist
}
```

Rules:

- When a book thing gets a table-specific twist (Ashe Blackwood becomes Ashe Orendis), keep one entry with `scope: "book"` and put the twist in `table`. Do not make a second entry.
- Where docs disagree, follow `book/00-canon.md` and the newest campaign docs, and mark undecided ideas as `proposal`.
- `deprecated` is for things that only survive in `drive/deprecated/` or were explicitly cut.
- Keep the codex in step with the story docs: when people, places, items or decisions change, update `things.js` in the same change.
