---
title: Component (+v1.0)
description: How to use the Mofufuku component
sidebar:
  order: 2
  badge:
    text: PRO
    variant: tip
---

The Mofufuku component enables Mofufuku processing and preview when added to an avatar's mesh object.

1. Display the avatar
   Add the target avatar to the Hierarchy. Dress the avatar, apply the fur material, and adjust blend shapes as needed.
   ![](../../mofufuku/images/editor-1.png)
2. Add the component
   Select the skin mesh object, click the "Add Component" button in the Inspector, and add the "Mofufuku Fur Resolver" component.
3. Verify the material
   The mesh material is set automatically. If the material is not the expected fur material, set it manually and click the "Import" button. ![](../../mofufuku/images/component-1.png)
4. Assign the clothing mesh
   Drag and drop the clothing mesh object into the "Clothes" field.
5. Add skin parts
   If you have other parts that use the same material (for example, a tail), add the "Mofufuku Fur Resolver Reference" component to those parts and set the "Reference" field to the original skin mesh object.
6. Fine-tune
   Mofufuku provides several parameters to control fur collision and motion. If you cannot complete length adjustments in Mofufuku, use an image-editing tool to adjust the length of the fur textures.
