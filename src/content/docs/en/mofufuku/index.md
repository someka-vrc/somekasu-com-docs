---
title: Mofufuku Fur Collision Resolver
description: Mofufuku Fur Collision Resolver
sidebar:
  order: 0
---

## Tool Overview

"Mofufuku" is a tool that automatically adjusts normal maps and length masks for fur shaders to generate textures that prevent hair from colliding with clothing. It adjusts the direction and length of the hair to resolve collisions with clothing.

## Use Cases

Suitable for those who have a base body fur shader material but the hair collides with clothing purchased from external stores.

## Notes

* Supports only lilToon shaders. There is a possibility of use by using compatible shaders or applying generated textures to non-lilToon, but the developer cannot support it.  
* Requires normal maps/length masks for the base body's fur shader. Mofufuku adjusts these textures but does not generate them from scratch. For that purpose, "FurTools" by マロンの小屋 is recommended.  
* Please perform final texture adjustments yourself. Mofufuku processes automatically but cannot match handmade assets.

## Installation

Unity version: 2022

Import Mofufuku.unitypackage into the project.
