import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sportshead.dev/", // replace this with your deployed domain
  author: "sportshead",
  desc: "Personal blog and portfolio of @sportshead",
  title: "sportshead.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-GB"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sportshead",
    linkTitle: "@sportshead on Github",
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.wikimedia.org/sportz",
    linkTitle: "@sportz on WMF GitLab",
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/593239954184732683",
    linkTitle: "@sportzpikachu on Discord",
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://ieji.de/@sportshead",
    linkTitle: "@sportshead@ieji.de",
    active: true,
  },
  {
    name: "Keybase",
    href: "https://keybase.io/sportshead",
    linkTitle: "@sportshead on Keybase",
    active: true,
  },
  {
    name: "PGP",
    href: "https://keys.openpgp.org/vks/v1/by-fingerprint/A6B6D031782EBDF7631A8E7EA874DB2CBFD3CFD0",
    linkTitle: "<me@sportshead.dev>: A6B6 D031 782E BDF7 631A 8E7E A874 DB2C BFD3 CFD0",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@sportshead.dev",
    linkTitle: "Send me an email",
    active: true,
  },
];
