---
layout: post
title:  "Debugging and Chapter 5"
date: 2017-01-13 12:34:26 -0600
categories: Projects
---

So it turned out my bug was including the name of the interface within my struct. So for example, I had:

```go
type HitableList struct {
	Hitable
	List     []Hitable
	ListSize int
}
```

However, when I initialized the `HitableList` object, I would leave the `Hitable` property uninitialized with `HitableList(List: list, ListSize: size)`. This would then create the value: `{<nil> [{ {0 0 -1} 0.5} { {0 -100.5 -1} 100}] 2}`that resulted in the nil pointer dereference error I had received. At the same time, I'm not really sure why the `Hit` function would have ever accessed these `nil` values. In any case, once I removed all the extraneous `Hitable` properties in all the objects I had, I was able to produce this (wrong) image.

![]({{site.baseurl}}/assets/img/out5bug.jpg)

As I added print statements into my `color` function to better understand why the sphere wasn't being created, I realized my `HitRecord` object kept getting created. Thus I had to modify my functions and function calls to pass by reference to make sure the record of the surface normals on the object would be recorded and tracked, thereby producing the following final image:

![]({{site.baseurl}}/assets/img/out5.jpg)
