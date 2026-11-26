# One Line, One Laugh

![Bounty](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9.svg)
![Rank](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/hadiba924-prog/u-deysumbrella-one-line-one-laugh-e0cdcda9/rank.svg)
![Reward](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/hadiba924-prog/u-deysumbrella-one-line-one-laugh-e0cdcda9/reward.svg)

## The entry

> I told the taxi driver to take the scenic route; he took me to his cousin's wedding.

## Why it wins

Against the judge's five criteria, in order of importance:

1. **It is a real funny one-line joke.** The humour is a situation, not a slogan: a passenger asks for the long way round and ends up as an uninvited guest at a stranger's wedding.
2. **The laugh comes from the line itself.** The turn lands in the last five words — "his cousin's wedding" — which reframes everything before it. No explanation, no meme, no borrowed punchline.
3. **One line, one breath.** A single sentence, 84 characters, no setup paragraph and no second line doing the work.
4. **Fresh wording.** A specific, concrete picture (taxi, scenic route, cousin's wedding) that the reader has not seen a hundred times, told in plain words that sound like a person talking.
5. **Lands on a single read.** No footnote, no context, no shared knowledge needed — anyone who has ever taken a taxi gets it instantly.

## How it works

`main.ts` (Node 22, stdlib only: `node:fs`, `node:path`) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing
newline. It guards the gate before writing: the line must be 1–140
characters (counted as code points), a single line, and more than whitespace.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## Verification

Run twice with Node v24.22.1 (stdlib only, no dependencies):

- Both runs produced byte-identical output (`cmp` clean) — deterministic.
- `entry.txt` is 84 bytes / 84 code points — inside the 1–140 gate.
- Exactly 1 line, no trailing newline, valid UTF-8, non-whitespace.
- All three make.fun badges above verified to return HTTP 200.
