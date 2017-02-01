---
layout: post
title:  "Abstract Different Materials"
date: 2017-01-24 12:34:26 -0600
categories: Projects
---

Getting to the real meat/exciting part of the project. By creating Metal and Lambertian materials, I learned how each material interacts with rays.

Taking into account the point a ray hits a sphere, let's say _N_ is the Normal of the point. A reflected ray's unit vector _v_ will have the direction _(v + 2B)_, where _B_ is the dot product of the vector _v_ and the hit point's normal _N_. The results in the projection of the normal vector onto the ray, as seen with the following code:

```go
func Reflect(v models.Vec3, n models.Vec3) models.Vec3 {
	return v.SubtractVector(n.MultiplyNum(2.0 * v.Dot(n)))
}
```

On the other hand, lambertian materials diffuse rays. Light is reflected at many angles, so we depict this through randomizing how the ray is scattered:

```go
target := rec.P.AddVector(rec.Normal).AddVector(models.RandomInUnitSphere())
*scattered = models.Ray{Origin: rec.P, Direction: target.SubtractVector(rec.P)}
```

Modifying `main.go` to take into various materials of spheres, and adding fuzzier reflections for larger spheres, we're given the following image:

![]({{site.baseurl}}/assets/img/fuzz1.png)
