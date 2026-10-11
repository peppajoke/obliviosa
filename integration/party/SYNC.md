# Party sync procedure (weekly, Tuesday after Monday play)

1. Open `https://www.dndbeyond.com/campaigns/7693664` in the built-in browser pane. If it redirects to Sign In, stop and tell Jack to sign in; never enter credentials.
2. Run `sync.js` with the browser `javascript_tool`. It discovers character ids from the page, gets a cobalt token, pulls every sheet, and returns one JSON array.
3. Save the result as `ddb-pull-YYYY-MM-DD.json` in this folder. Diff against the previous pull: levels, HP, classes, feats, spells, magic items, gold, notes text.
4. Append a dated entry to `CHANGELOG.md`: what changed per character, and anything new in Rowan's or anyone's notes that the island should echo (NPCs met, places, vows, items gained or lost).
5. Update `../02-party.md` (table and "things the sheets say") and `ddb-roster.json` if anything structural changed. If a character is now missing from the campaign, say so; do not delete their row, mark it.
6. Commit and push: `/usr/bin/git add -A && /usr/bin/git commit -m "Party sync YYYY-MM-DD" && /usr/bin/git push`.
7. Report to Jack in one short message: who levelled, notable new gear or spells, anything in the notes that touches Lumenshire, and anything that needs his ruling.

Keep the island docs consistent with what the sheets say: if the party gains or loses something that the integration plan relies on (the Sending Stones, Revivify, Rings of Warmth), flag it.
