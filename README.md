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
3. Up the min and max ram. I put 8192 MB in both fields.
4. Specify JVM arguments to reduce stutter from the garbage collector. This seems to work for me: `-XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=600000 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32`

### Set up instance

We are using a modpack file to automatically set up your modded Minecraft instance, including the Forge mod loader.

Each instance is treated as totally separate so things like graphics settings and controls aren't copied between, unfortunately.

1. Click Add Instance
2. TODO work out new workflow

## Updating

TODO update instructions

# Server Setup

## Fresh Server

1. Set up a Forge `43.2.0` server
3. Copy the TODO WHICH FOLDERS folders to the server directory

Adjust your java args. The "best" arguments are hotly discussed, but I'd recommend something like:

`-server -Xms8G -Xmx8G -XX:+UnlockExperimentalVMOptions -XX:+UseZGC -XX:+ZProactive -XX:ZCollectionInterval=600 -XX:+UseLargePages -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled -XX:+PerfDisableSharedMem`

TODO JVM args? This is quite different from the other ones I have.

You can tweak the first couple of params for different RAM. Generally you want the Xms and Xmx (min and max) to be equal because of Java garbage collection things.

Launch the server. It should "just work". If it doesn't, complain bitterly on WhatsApp.

## Updating

You need to delete and re-add the following folders:
* TODO which folders

If I've tested the update correctly, it should "just work". If it doesn't, complain bitterly on WhatsApp.
