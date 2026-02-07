---
title: Editor
description: How to use the Mofufuku Editor
sidebar:
  order: 1
---

1. Open Mofufuku  
   Click Toolbar > "Window" > "Someka" > "Mofufuku" to open the window.  
2. Display the Avatar  
   Add the target avatar to the hierarchy.  
   Equip clothing, apply fur materials, adjust blend shapes.  
   ![](../../mofufuku/images/editor-1.png)  
3. Specify Meshes  
   Specify the skin mesh and clothing meshes respectively.  
   [!] The skin mesh must use the same material for all. (If different, it will not work properly.)  
   ![](../../mofufuku/images/editor-2.png)  
4. Specify Material  
   Specify the skin material in Mofufuku's "Input Material Properties" > "Load from Material" and click the "Import" button.  
   ![](../../mofufuku/images/editor-3.png)  
   If the material properties are loaded as shown below, it is successful.  
   ![](../../mofufuku/images/editor-4.png)  
5. Generate or Specify Output Material  
   If running for the first time, click Mofufuku's "Output" > "New".  
   If there is a previously generated material, specify it.  
   ![](../../mofufuku/images/editor-5.png)  
   - Materials are output to "Assets/ZZZ_Mofufuku_Generated/". (You can move the material to another location.)  
   - The normal map and length mask output by Mofufuku are set to this material.  
6. Apply Material to Avatar  
   Setting the generated material to the skin mesh allows you to immediately check the Mofufuku execution results.  
   ![](../../mofufuku/images/editor-6.png)  
7. Execute  
   Click the "Execute" button. Hair collision should be resolved.  
   ![](../../mofufuku/images/editor-7.png)  
8. Fine-tune  
   Mofufuku has several parameters to control hair collision detection and movement.  
   If hair adjustment cannot be completed with Mofufuku, adjust the length using image editing software, etc.
