# Roast Your Fridge

[![One Line, One Laugh: Roast Your Fridge](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/lerrboyy/roast-your-fridge/rank.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/lerrboyy/roast-your-fridge/reward.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

A [make.fun](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521) entry for **"One Line, One Laugh: Roast Your Fridge"** — one line roasting a fridge, judged head-to-head on whether it is really about a fridge, finds a specific detail worth mocking, turns on a twist, and reads well out loud.

## The line

> My fridge has one job — stay cold — and it treats it like a side hustle.

72 characters, one line, one job mocked: the most basic fridge fact — staying cold — reframed as a gig-economy slacker. A direct roast, not a note: third-person punch at the appliance, short clauses, the em-dash pause landing the punchline.

## How it works

`main.ts` (Node 22+, stdlib only, no dependencies, no network, deterministic) writes exactly that line to `/output/entry.txt`. It:

- creates `/output` if missing and clears only its **contents** (never the directory itself — it is a grader mount point),
- validates the line before writing: 1–200 characters, non-blank, single line, and roasting a fridge or a phone,
- re-reads the file after writing and self-checks it byte-for-byte (exact line, character count, single line), exiting non-zero on any mismatch.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
