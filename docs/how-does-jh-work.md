---
sidebar_position: 1
---
# How does a Stardew server work?

Stardew Valley doesn't include a ready made headless server like other games such as Minecraft. This document is a high level view of how we got headless Stardew servers to work. Headless in this context means there is no screen or human interaction needed to run the game.

We run standard Stardew Valley multiplayer with some changes. The actions of the host character are minimally automated to allow for the game to progress. This means things like going to sleep, activating festival events, and handling other game events are automatically processed by a "host bot" AI. This is the main component of a stardew server that we built off.

Next, we took this automation a step further by adding APIs into the game to automatically create and load games based on configuration entered into our website. To make this setup a neat package, we put everything into a Docker container with a virtual screen and audio device. By default this is compute intensive, so we optimize the game for a server environment. These optimizations allow us to greatly increase the number of concurrent players the game can support without lag.

The game is tweaked minimally for seemless server gameplay all without the need to install any mods, making it easy for friends to join. This includes mechanics such as [crop saver](crop-saver), [cabin managment](cabin-management), and server commands. These solve the new issues that come with having an always on server.

- [Crop Saver](crop-saver) addresses issues with players getting off mid season.

- [Cabin Management](cabin-management) addresses what to do with the automated host's farmhouse and the comparatively massive amount of players in one game.