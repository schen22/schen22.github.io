---
layout: post
title:  "Chapter Three: Rays, a simple camera and background"
date: 2016-12-27 21:18:26 -0600
categories: Projects
---
For the longest time I was stuck on this bug where the gradient was off. I couldn't figure it out.

![]({{site.baseurl}}/assets/img/out2-bug.jpg)

I went over my code in `main.go` in the way I understood it:

* Begin the gradient background in the lower left corner: (-2, -1, -1). Define the width and height of the background to 4 and 2 units; respectively. Represent with the vectors: `{4, 0, 0}` and `{0, 2, 0}`.
* For each pixel between the coordinates, scale the ray of light with the horizontal and vertical vectors that are scaled incrementally with the magnitudes u, v.
* Form the ray with the direction of the added horizontal, vertical scalars.
* Find the color of the ray by finding its unit vector and scale the magnitude by the y-coordinate that's bounded by [0, 1].
* Form a linear interpolation between blue (0.5, 0.7, 1.0) to white (1.0, 1.0, 1.0) and compute the resulting vector from the direction.
* Convert the color vector into RGB values and print out.

I finally realized I had a problem of variable shadowing where I was overriding the values of my horizontal and vertical vectors within my for loops.

After fixing the error, I received the expected output:

![]({{site.baseurl}}/assets/img/out2.jpg)

Onwards to Chapter 4 now! Adding a sphere. Maybe I'll add more to this post later.
