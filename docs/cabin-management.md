# Cabin Management

Stardew Valley normally requires you to manually build a cabin at Robin's for each person that wants to join your game. This can become cumbersome when going above the normal 3 cabin limit. To fix this issue we have implemented automatic cabin management. Automatic cabin management doesn't require any mods to be installed.

## Cabin Stack

With this strategy, the farmhouse interior is replaced with the interior of the first joined player's cabin. The strategy is called cabin stack because the rest of the players cabins are "stacked" on top of each other in the same location. Each player will only see their cabin at the stack location. If a player wants others to be able to visit their cabin, they can move it out of the stack by either using a chat command or at Robin's. Cabins not in the stack behave normally. 

The real location of player 1's cabin and the stack are out of bounds, the server cleverly forges the coordinates of the cabins to each player.

**Pros**
- Farmhouse is a communal location
- Players can visit each other's cabins easily
- Spread players across a large map more easily

**Cons**
- Can be messy if lots of people move their cabins out of the stack
