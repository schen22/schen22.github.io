---
layout: post
title:  Subclassing and Alternatives
date: 2018-02-04 01:20:26 -0600
categories: Obj-C
---

Sunday learning for today has taken me longer than usual. At the same time I think it's quite necessary to understand these various patterns that come across often: subclass, protocol, delegation, configuration objects, composition.

Subclassing by itself seems to make sense; but I get mixed up when I look at protocol and delegation together. But first let's stick with what I've found out about subclassing and I'll save comparing the two patterns for next time.

Class clusters hide implementation details behind abstract classes. However, because objective-c has nothing to label classes as 'abstract,' convention is therefore found in the docs. (Which honestly I find pretty arbitrary and confusing..) Class clusters is a type of factory pattern that defines all the necessary logic those that inherit the base class must implement. In other words: subclasses can override default implementation of base classes. Here's an example of a subclass with my favorite example using Pokemon:

*Abstract base class*
```
typedef NS_ENUM(NSUInteger, PokemonType) {
  PokemonTypeWater,
  PokemonTypeFire,
  PokemonTypeGrass
}

@interface Pokemon: NSObject
@property NSString *name;
@property NSUInteger level;

+ (Pokemon *)pokemonWithType:(PokemonType)type;
- (void) attack;

@end
```
*Subclass*
```
@interface PokemonWater: Pokemon
@end
@implementation PokemonWater
- (void) attack {
  [self waterGun];
}
@end
```

In the subclass example, `attack` method is required to implement Pokemon. When checking for equality between subclasses, use `isKindOfClass:[Pokemon class]` method rather than comparing with `[Pokemon class]` itself.

- Subclasses should inherit from the class cluster's abstract base class.
- Subclass should define its own storage.
- Subclass should override required methods of superclass.

Out of all these rules for subclassing, the second one is the most confusing to me. So let's walk through another Pokemon example.

```
@interface PokemonWater : Pokemon
{
  NSString *name;
  ...
}

- (id)initWithPokemon:(Pokemon *)pokemon name:(NSString *)name;
+ (PokemonWater *)waterPokemonFromPokemon:(Pokemon *)pokemon name:(NSString *)name;

@end
```
In implementation:

```
@implementation PokemonWater

- (id)initWithPokemon:(Pokemon *)pokemon name:(NSString *)name
{
  // Defining own storage from Pokemon type by calling on the superclass
  // method for defining a Pokemon.
  if (self = [super initWithLevel:pokemon.level personality:pokemon.personality])
  {
      self.name = name;
  }
  return self;
}

+ (PokemonWater *)waterPokemonFromPokemon:(Pokemon *)pokemon name:(NSString *)name
{
  // Again, defining own storage.
  return [[PokemonWater alloc] initWithPokemon:pokemon name:name];
}
```

Overall it looks like subclasses are more commonly used for implementing custom parts of a platform, and model objects. i.e. in view controllers when we subclass UIViewController; or building a UITableViewCell with custom layout. Any time something can be more reusable across other parts of the project seem to be a good opportunity to subclass.

Until next time. Back to work!
