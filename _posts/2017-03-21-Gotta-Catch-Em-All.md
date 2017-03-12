---
layout: post
title:  Gotta Catch 'em All
date: 2017-03-12 01:20:26 -0600
categories: Reflections Projects
---

It's been a while since I've posted and I feel I owe it to myself to explain what I've been up to in order to figure out if I can prevent such a long delay from occurring again. A lot has happened in the past few weeks since I last worked on my side project. Unfortunately I was in the middle of writing a post describing learning about dialectrics that work got much busier than expected. A good busy of course! My project proposal at work was approved and I had to juggle defining the vision of the new project, being team lead, teaching scrum master responsibilities to the next scrum master, and developing for both projects I was in charge of.

The really awesome part though, was that I was also able to continue an Pokemon augmented reality project I'd been working on with two others at work; first as an event for IBM's "Take Your Kid's to Work Day," then at talks for local charter schools, and just this past Tuesday, at [SXSW's Education Exposition](http://sxswedu.com/expo) by participating in [TEALS' Science Fair](https://www.tealsk12.org/). TEALS stands for Technology Education and Literacy in Schools and helps promote computer science education courses in high schools. A huge passion of mine is to encourage and drive STEM education for K-12 public schools. And what way is better than inspiring students into STEM through Pokemon? Makes it fun for both me and the audience.

![]({{site.baseurl}}/assets/pokemil/sxsw_edu_expo.jpg)

The awesome part about AR is that it allows people

I worked with a designer who provided the 3D models and animation, and another engineer who introduced me to coding augmented reality games with Unity and Vuforia SDK. I added a shader to the 3D models to make sure the objects looked more like cartoons; otherwise the color was slightly off. When I added a shader though, I realized how similar all of the concepts were to the Ray Tracing project I had picked up! Depending on the albedo, and the number of light sources, the color of the 3D object differed. Taking into account that we had only one light source, and that handy toon shaders could be imported into the Unity project, I was happy to find how more realistic the Pokemon looked after the shader was applied.

Before a shader was applied:

![]({{site.baseurl}}/assets/pokemil/pikachu_preshader.png)

After the shader was applied:

![]({{site.baseurl}}/assets/pokemil/pikachu_postshader.png)

Putting everything together with the animation the designer gave us, the image recognition of the vinyl print in order to display the 3D object (Pikachu), here's one of the Pokemon we were able to show at the SXSW Education Exposition:

![]({{site.baseurl}}/assets/pokemil/ar_demo.gif)

Overall the demo was a blast. We had three vinyl prints that represented three different Pokemon: Pikachu, Bulbasaur, and Mew. The students loved it, the parents loved it, the educators, after hearing my (and all the other IBM volunteers I was able to convince to come) spheal about how important AR could be within education, loved it. At first parents and educators were curious why we were at the exposition demonstrating a seemingly random AR game. However, augmented reality apps and games, similar to virtual reality, have the power to change how students will learn in the future.

Imagine having similar icons to the vinyl print we created, placed in a textbook. A student points their phone into the textbook at the icon. The chapter is about animal cells and cell parts. Imagine students taking apart a cell, and discovering again what scientists had discovered in a lab, but in a classroom with their friends! Simply awe-inspiring. The concepts would be more intriguing as students would be relating to the experience first-hand, and hopefully as a result of being more intriguing, the idea behind the different parts of a cell would be better remembered. Of course, this is all from my perspective as an engineer and student. The actual implementation would be different, but the vision and goal to aim for is what I believe is unique.

In terms of how we used the AR demo to encourage students towards STEM education, I asked students who were captivated by the Pokemon, what they want to build, what their favorite games were, what their favorite subjects were, and what they loved to do. I showed them how they could relate their passion for Pokemon, gaming, shopping, drawing, and marine biology to the AR game we made, and what we do at IBM. My main goal for attending and ensuring IBM had a presence at the SXSW Education Exposition, was to help students see that you don't have to have the pre-conceived notion of an "engineering" or "science" mind to be an engineer or a creator. You don't have to fit into any of the boxes people commonly portray programmers or computer scientists or innovators into. Instead, I wanted to help people see that everything is connected - and the passion to follow what you love, is the most important. (Aside from practicality and reality). The ability to dream and continue exploring was something I wanted to relate to everyone there.

A 6-year old kid tried to peek behind the phone to see if Bulbasaur was hiding behind it. As he realized nothing was there, he looked back at the screen and yelped in delight again as he saw Bulbasaur again. He tried to hold out his hand to touch Bulbasaur, to locate where he was on the map; only to find Bulbasaur was like a ghost! He repeated the same actions again, and looked up in surprise. Right then and there, his look to me and the sparkle and hint at magic made all the hours I put into improving, debugging and testing the app, printing vinyl prints and coordinating volunteer efforts, worth it. Here's to creating more magical moments for people to experience.
