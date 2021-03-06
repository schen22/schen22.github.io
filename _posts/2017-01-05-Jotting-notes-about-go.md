---
layout: post
title:  "Refactoring and jotting notes about go"
date: 2017-01-05 09:56:26 -0600
categories: Languages
---

I hit somewhat of a rut after refactoring. I ran into this error message after implementing a `hitable`, `hitableList`, and `sphere` objects for the ray tracer:

```bash
$ go run main.go > assets/out5.png
panic: runtime error: invalid memory address or nil pointer dereference
[signal SIGSEGV: segmentation violation code=0x1 addr=0x20 pc=0x5efd3]

goroutine 1 [running]:
panic(0x92420, 0xc42000a0c0)
	/usr/local/Cellar/go/1.7.4_1/libexec/src/runtime/panic.go:500 +0x1a1
golang-ray-tracer/objects.(*HitableList).Hit(0xc420014180, 0x0, 0x0, 0x0, 0xc000000000000000, 0x3fef5c28f5c28f5c, 0xbff0000000000000, 0x0, 0x7fefffffffffffff, 0x0, ...)
	<autogenerated>:2 +0x53
main.color(0x0, 0x0, 0x0, 0xc000000000000000, 0x3fef5c28f5c28f5c, 0xbff0000000000000, 0xfa1c0, 0xc420014180, 0xc42000a2c0, 0x6, ...)
	/Users/sarahchen/Documents/go/src/golang-ray-tracer/main.go:14 +0xdb
main.main()
	/Users/sarahchen/Documents/go/src/golang-ray-tracer/main.go:51 +0x4c6
exit status 2
```

Thus the lack of coding the past few days. Though having to return to work this week also impeded progress. In any case, while this error means my program's unable to access the list I created within my `HitableList` data structure, instead of trying to do a quick fix, I really need to go back to the basics and figure out what I'm doing in my code.

In other words I need to learn what rendering objects means.

## Referencing scratchapixel.

Color and brightness is depicted through how light interacts with an object's materials. Light contains photons that can be absorbed, reflected or transmitted by an object. The percentage of photons absorbed, reflected and transmitted determines how objects appear in a scene.

White light contains red, blue and green photons. The color red appears when green and blue photons are absorbed. The red photons reflect the object and allows our eyes to see the object. Each point on an object reflects light rays in different direction. Our eyes' photoreceptors then converts light into neural signals for our brains to interpret.   

## Learning Go

Struct is a type that contains named field.

`type` introduces a new type, followed by the name of the type (Circle). `struct` keyword indicates we're defining a `struct` type and a list of fields inside the curly braces.

```go
type Circle struct {
  x, y, r float64
}

func (c *Circle) area() float64 {
  return math.Pi * c.r*c.r
}
```
Go automatically passes a pointer into this method without the `&` operator

# Pointers.

If there's one thing I learned about Go and C, it's that pointers are friends. Especially in custom structs. If you take a look at the Objects created in my last [push](https://github.com/schen22/golang-ray-tracer/tree/1aed656e8772ae35d032e6638ba254aa84c28719), you can see how I had to call the `Hit` function by reference in order for the `HitRecord` struct to modify the values of its properties without creating a new object.

```go
func (s Sphere) Hit(r models.Ray, t_min float64, t_max float64, rec *HitRecord) bool {
	...
}
```

Similarly, in the `HitableList` and `Hitable` interface, I needed to pass in a reference to the `HitRecord` rather than create new objects that don't store or allow the object to act as a record to whether the object is hittable.

Talking about it now makes it seem like a noobish mistake, but lesson learned! Pointers are friends :)
