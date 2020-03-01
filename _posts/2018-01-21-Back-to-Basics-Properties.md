---
layout: post
title:  Back to Basics with Property Attributes
date: 2018-01-21 01:20:26 -0600
categories: Languages
---

Some things that seem obvious to others, to me need to be studied more thoroughly. One such topic I want to focus on this week is properties.
But why Objective-C? Mainly because that's the language we use at Facebook to build our app. And also because I want to better understand why we choose to use Objective-C rather than the 'sexier' Swift language.

Properties are thought of as accessors to a variable in a data object.

@synthesize: controls name of instance variable.

```
@implementation Pokemon
@synthesize type = _myType;
@synthesize name = _myName;
@end
```

Usually we would just let the compiler automatically write the code for these methods (ie. autosynthesis). For example, the two instance variables above would instead be `_type` and `_name` with autosynthesis.

To prevent the compiler from synthesizing an accessor method we can use @dynamic. This tells the compiler to not create an instance variable and accessor. Instead the compiler trusts us that the variable will be available at runtime:

```
@implementation Pokemon
@dynamic type, name;
@end
```

_Property Attributes_

For example: `@property (nonatomic, readwrite, copy) NSString *type;`

- **Atomicity**: By default accessors are locked to ensure atomicity.
- **Read/Write**: (readonly, readwrite) where only a getter is available for the former and a getter/setter available for the latter.
- **Memory-Management**: affects only the setter
  - assign: used for scalar types like CGFloat or NSInteger
  - strong: the property defines an owning relationship. I wonder if I can make this analogy. Let's say we have six Pokemon on hand and we catch a seventh one: Gulpin. Because we are required to hold six Pokemon at all time, we first "retain" Gulpin, "release" Caterpie and set Guplin as our new sixth Pokemon. Similar to a **strong** semantic when a new value is set we first retain it, release the old value, and then set the new value.
  - weak: property defines a nonowning relationship. When a new value is set, the new value is not retained and the old value is not released. The main difference between weak and assign is that a weak property's value will have nilled out if the object it's defined as is ever destroyed. (Hm I guess the Pokemon analogy doesn't work at all. Will need to think more otherwise I'll just be confusing myself. Shall update later).
  - unsafe_unretained: same as assign but indicates a nonowning relationship (unretained) that's not nilled out (unsafe) when the target is destroyed
  - copy: owning relationship like strong but rather than retaining value, it copies the value. Usually used for NSString* or mutable objects to preserve encapsulation.
- **Method Names**:
  - getter=<name>: usually used for Bool properties to define getter name.
    - `@property (nonatomic, getter=didLearn) BOOL learn;`
  - setter=<name>: specifies setter name. Not usually used.

_Definitions I need to remember_
- To be **Statically allocated** means that memory is allocated at compile time.
- A **runtime** is like the baker at a bakery that grabs all the ingredients (data structure, functions, memory-management methods, etc.) to mix together and bake a cake (aka the library that code is linked to to run).

Objective-C discovers object type at runtime and can be described as a messaging structure with dynamic binding.

Let's break that sentence down: Messaging structure uses dynamic binding, meaning the runtime decides which code gets executed. (Whereas languages like python has function calling which decides which code will be executed. I think?).

Need to finish this up later. Time to grocery shop!
