---
title: "Blog Style update"
pubDate: 2024-12-18
description: "Refactoring layout and style to achieve a specific visual vibe"
author: "Francesco Wild"
image:
  url: "/assets/defaultBlogImage.png"
  alt: "The Astro logo on a dark background with a pink glow."
tags:
  ["Astro", "Blogging", "Development", "Typescript", "CSS", "Animation", "SASS"]
---

It's so weird when the smallest things take the most time. It happens all of the time, but it always weirds me out.

I just spent the last 3 days figuring out how to polish up this website, and it is only just half of the work, while
the "graphic design is my passion meme" vibe hasn't gone yet. Hopefully by the end of the week I'll be able to get rid of it.

It took me ages to figure out especially how to make each page looking as a "glass card" and not mess up the rest of the layout.
First of all, I had to understand how to fix properly the components' position in the page. I had to add a container div,
which is something I don't really like to do because I feel like it adds complexity, but it was necessary for how margins and such are calculated.
Not using it was always hiding a bit of the glass card when scrolling for the container was on too. Now it doesn't, and the pages are also "full height",
which was the visive outcome I thought for them. So I'm counting that as a win.

Another update that required more time than I expected was making the animated background.
I'm still not 100% sure about it, but for now it looks nice. I've been a bit naive also when trying to sort it out.
thinking I would have been able to find some already-made animation and tweak it a little bit, but it hasn't been that clean.
I ended up using an image for part of the background and a shifting gradient for the rest.
In the end, I think it looks nice nonetheless, and it works well also with the theme change (day-sky vs. night-sky).

There is still a lot to do on the graphic side of things.
Header and footer don't look nice, and they don't give the metallic vibe I was looking for when I added the background gradients.
In addition, fonts are all over the place.
Hopefully I'll be able to find a solution to it quickly and be able to move to adding some more interesting content soon.

But this afternoon I'll work mainly on preparing this evening's D&D session, so for now

Have a good one!

_Francesco (elWildo)_
