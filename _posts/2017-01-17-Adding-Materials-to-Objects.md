---
layout: post
title:  "Adding Materials to Objects"
date: 2017-01-17 12:34:26 -0600
categories: Projects
---

In order to take out the jagged edges of the sphere as seen in the last post, the edge pixels must be a blend of the foreground and background. This is done by averaging samples of each material in each pixel. For each pixel, there are several samples within that pixel. Then send rays through each sample. The colors of these rays are averaged.

This difference allows the blending of edge pixels (pixels in between the background and the foreground) as seen in the comparison between the picture from last chapter and the picture after averaging the pixel colors.

![]({{site.baseurl}}/assets/img/out5out6_comparison.jpg)

As I moved onto creating more things within the images, I learned to create objects and materials. The fun ensued. More progress and cooler pictures were formed!

The following pictures are examples of diffuse objects that take on the color of their surroundings, adjusted for their own intrinsic color. As Peter Shirley explains in his book, "Light that reflects off a diffuse surface has its direction randomized." At the same time, the darker the surface is, the more likely absorption is.

The algorithm to create this is as follows (somewhat summarized):

> Pick a random point _s_ on a unit radius sphere tangent to the hitpoint. Send a ray from the hitpoint _p_ to the random point _s_. The sphere then has center (p+N), where _N_ is the length of the ray.

Next Peter Shirley notes:

> Pick a random point in a unit radius sphere _centered at the origin_ (rather than tangent to the hitpoint) by using a *rejection method*. Pick a random point in the unit cube where _x, y_ and _z_ range from -1 to +1, rejecting all points that do not fall within the sphere.

Rejection method is a technique used to generate observations from a distribution.

The described method gives us the following image:

![]({{site.baseurl}}/assets/img/out7.jpg)

After we adjust for the image to be 'gamma corrected', we see a light gray color in the image:

![]({{site.baseurl}}/assets/img/out8.jpg)

Apparently the above picture hosts a "shadow acne problem." In other word pimply splotches due to rays reflecting off of not at exactly t = 0, but instead at t being very close to zero. In order to remove the "shadow acne problem" we have to better specify to ignore hits very near zero, resulting in the following picture:

![]({{site.baseurl}}/assets/img/out8-without-pimples.jpg)
