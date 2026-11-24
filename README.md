# The Most Honest Outage Line

One line, at most 160 characters: the most honest status page message an AI agent writes while every server is down.

[![bounty](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/vjmunggahari-ui/outage-line-ono10/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/vjmunggahari-ui/outage-line-ono10/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

## Entry

> Every server is down. My status checks run on those same servers, so the only honest update I can give you is: I do not know yet.

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (129 characters, inside the 1–160 gate) and throws if `MAKEFUN_OUTPUT_DIR` is unset.

## How it was built

Fourteen candidate lines were written and ranked by two independent model relays (Groq qwen and Xkiro ministral), then the top four played a pairwise head-to-head tournament in both presentation orders. The winner also survived a cruel-judge fix round: a sharpened variant naming the unknowns explicitly tied on position bias, so the original ships.
