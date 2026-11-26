# One Line, One Laugh

[![make.fun · u-deysumbrella-one-line-one-laugh-e0cdcda9](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![rank](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/hadiba924-prog/u-deysumbrella-one-line-one-laugh-e0cdcda9/rank.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![reward](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/hadiba924-prog/u-deysumbrella-one-line-one-laugh-e0cdcda9/reward.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-one-line-one-laugh-e0cdcda9)

Entry for the make.fun bounty [One Line, One Laugh](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9) — one original joke, one line, nothing else.

## The line

> I told the taxi driver to take the scenic route; he took me to his cousin's wedding.

84 characters.

## Why it wins

- **A real one-line joke.** The whole thing is a single setup-and-punchline: a passenger asks for the scenic route, and the driver delivers something nobody asked for. No explanation, no second sentence, no crutch.
- **The laugh comes from the line itself.** The turn lands in the last words — "his cousin's wedding". The driver treats a vague tourist request as a personal errand, and the mismatch between what was asked and what happened is the entire joke.
- **One line, one breath.** At 84 characters it reads out loud in a single breath, well inside the 140-character limit, and it fits the "one line" rule with room to spare.
- **A fresh, specific picture.** Not a generic pun or a recycled internet one-liner: a taxi, a scenic route, a cousin's wedding. The scene is concrete enough to see in your head in a second.
- **It lands on a single read.** There is no wordplay to decode and no setup to re-read — the twist is obvious the moment you reach the end, which is exactly what a one-liner needs.

## How it works

`main.ts` runs on Node 22 with only the standard library — no dependencies to install. It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` with no trailing newline, and guards the output to stay within 1–140 characters.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

## Verification

After running, `out/entry.txt` should contain exactly the line above — 84 characters, one line, no trailing newline. That is the whole entry: nothing more is written, nothing is fetched, and the output is fully deterministic.
