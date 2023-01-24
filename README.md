# Flea of Destiny Modpack

Welcome to Ellisthion's 1.19 Forge modpack. The theme: it's all about Flea. He is the Flea of Destiny, and we shall celebrate him in a grand festival!

The main mods in this pack are:
* Create
* Botania
* Ars Nouveau
* Immersive Engineering
* Thermal Expansion

Progression is gated by quests that must be completed by the player community together.

## Modpack

[Download current modpack](https://github.com/Ellisthion/minecraft-forge-1.19/releases/latest)

[View the changelog](/CHANGELOG.md)

# Client Setup

## Fresh Install

### Set up launcher

1. Get your modded launcher. I recommend [Prism Launcher](https://prismlauncher.org/).
2. Point it at your Java 17 instance. If you've already installed Minecraft vanilla, it will have installed Java 17... somewhere. The standard launcher puts things in AppData or something. If you run vanilla, Task Manager will show the javaw.exe process for Minecraft, and you can use Open File Location to find it.
3. Go to Settings -> Java
4. Increase both the min and max memory allocation. They should be the same. I put 8192 MB in both fields.
4. Specify JVM arguments to reduce stutter from the garbage collector. Paste the entire thing below into box.

Recommended JVM arguments:
```
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+PerfDisableSharedMem -XX:G1HeapRegionSize=16M -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:G1ConcRSHotCardLimit=16 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:GCTimeRatio=99
```

### Set up instance

We are using a modpack file to automatically set up your modded Minecraft instance, including the Forge mod loader.

Each instance is treated as totally separate so things like graphics settings and controls aren't copied between, unfortunately.

1. Click Add Instance
2. Choose import from zip, and import the latest modpack zip file
3. It should automatically download all the mods and set up the instance
4. Once it's ready, click Launch

## Updating

Updating is currently a little fiddly.

1. In Prism Launcher, create a new instance, importing the new modpack file

That's sorta it. You can just use that new instance. But if you want to keep your options:

1. In your original instance, DELETE your `config`, `defaultconfigs`, `mods`, `kubejs`, and `packmenu` folders
2. Copy in those folders from the new instance

# Server Setup

## Fresh Server

1. Set up a Forge `43.2.0` server
2. Copy the following folders from the client instance:
    * `mods`
    * `config`
    * `defaultconfigs`
    * `kubejs`
3. DELETE the following mods from the `mods` folder:
    * `rubidium`
    * `DistantHorizons`

Adjust your java args. The "best" arguments are hotly discussed, but I'd recommend as follows. These are DIFFERENT to the client args.

```
-server -Xmx8G -Xms8G -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1ConcRSHotCardLimit=16 -XX:G1ConcRefinementServiceIntervalMillis=150
```


You can tweak the first couple of params for different RAM. You want the Xms and Xmx (min and max) to be equal.

Launch the server. It should "just work". If it doesn't, complain bitterly on WhatsApp.

## Updating

1. DELETE and re-add the following folders:
    * `mods`
    * `config`
    * `defaultconfigs`
    * `kubejs`
2. DELETE the following mods from the `mods` folder:
    * `rubidium`
    * `DistantHorizons`

If I've tested the update correctly, it should "just work". If it doesn't, complain bitterly on WhatsApp.
