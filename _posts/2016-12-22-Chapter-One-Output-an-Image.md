---
layout: post
title:  "Chapter One: Output an Image"
date: 2016-12-22 20:56:26 -0600
categories: Projects
---
Why did I choose to implement the project in Go?

I've been wanting to learn it to understand how it helps concurrency. Plus I was influenced by a friend to take this as an opportunity to learn the language.

Lessons learned:

* I need to review linear algebra.
* Homogeneous coordinates can represent points at infinity and finite points. Somehow this matters for computer graphics and 3D computer vision?
  * Vectors for graphics programs are 4D
    * For geometry: 3D + homogeneous coordinate.
    * For colors: RGB plus an alpha transparency channel.
* Pixels are written left to right, top to bottom.
* Red goes to black from left to right.
* Green goes from black to green from bottom to top.

```go
package main

import "fmt"

func main() {
  nx := 200
  ny := 100

  fmt.Printf("P3\n%d %d\n255\n", nx, ny)
  for j := ny - 1; j >= 0; j-- {
    for i := 0; i < nx; i++ {
      r := float64(i) / float64(nx)
      g := float64(j) / float64(ny)
      b := 0.2
      ir := int(255.99 * r)
      ig := int(255.99 * g)
      ib := int(255.99 * b)
      fmt.Printf("%d %d %d\n", ir, ig, ib)
    }
  }
}
```

![]({{site.baseurl}}/assets/img/out1.jpg)

After asking my friend a few questions, I understand a little more about what the code is doing. `nx` and `ny` represent the dimensions of the image created. So there are 200x100 pixels in the image created. Each pixel has a rgb value, where each color is represented in bytes: [0, 255]. Each pixel's value is adjusted by a fraction, akin to how light changes an infinitesimal amount to create a rainbow. As the `b` value stays the same, the `r`, `g` values change by fractions to create the red-green spectrum we see in the output.
