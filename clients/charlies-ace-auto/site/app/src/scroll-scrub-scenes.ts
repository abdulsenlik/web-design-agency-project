/**
 * THE REBUILD: one continuous ~15s film (single-shot), split at exact frame
 * boundaries into four acts so each act carries its own chapter copy. Every
 * poster is the first frame of the encoded clip beside it.
 *
 * Keep this array a module constant. Changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import { createElement } from "react";

import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { CtaCall, CtaEstimate } from "@/site/ctas";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#c62f2f",
  background: "#131416",
  ink: "#ece7dd",
  muted: "#b3b8bd",
};

const heroActions = [
  createElement(CtaEstimate, { key: "estimate" }),
  createElement(CtaCall, { key: "call" }),
];

const returnActions = [createElement(CtaEstimate, { key: "estimate" })];

const act = (n: number) => ({
  clip: `/assets/world/rebuild-0${n}.mp4`,
  mobileClip: `/assets/world/rebuild-0${n}-mobile.mp4`,
  poster: `/assets/world/rebuild-0${n}-poster.jpg`,
  mobilePoster: `/assets/world/rebuild-0${n}-mobile-poster.jpg`,
});

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    ...act(1),
    id: "the-problem",
    label: "The problem",
    title: "The art of getting you back.",
    body: "Expert auto repair and bodywork in Arlington Heights, Illinois.",
    tags: ["1429 E Algonquin Rd, Arlington Heights"],
    actions: heroActions,
    align: "left",
    scroll: 1.1,
    objectPosition: "62% 50%",
    mobileObjectPosition: "64% 50%",
  },
  {
    ...act(2),
    id: "the-inspection",
    label: "Inspection",
    title: "First, we look closely.",
    body: "Before anything gets fixed, we find out what actually happened. The plan should fit your car, not a guess.",
    align: "left",
    scroll: 1.3,
    objectPosition: "62% 50%",
    mobileObjectPosition: "64% 50%",
  },
  {
    ...act(3),
    id: "the-work",
    label: "The work",
    title: "Then we do the work.",
    body: "Bodywork, paint and mechanical repair, done carefully and explained in plain words.",
    align: "left",
    scroll: 1.3,
    objectPosition: "62% 50%",
    mobileObjectPosition: "64% 50%",
  },
  {
    ...act(4),
    id: "the-return",
    label: "The return",
    title: "Back to your week.",
    body: "It was never only about the car. It was about getting you back on the road.",
    actions: returnActions,
    align: "left",
    scroll: 1.2,
    objectPosition: "62% 50%",
    mobileObjectPosition: "64% 50%",
  },
];
