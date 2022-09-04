# Cabin Management

Stardew Valley normally requires you to manually build a cabin at Robin's for each person that wants to join your game. This can become cumbersome when going above the normal 3 cabin limit. To fix this issue we have implemented two strategies for automatic cabin management. Both strategies don't require any mods to be installed.

## Strategy 1: Cabin Stack

With this strategy, the farmhouse interior is replaced with the interior of the first joined player's cabin. The strategy is called cabin stack because the rest of the players cabins are "stacked" on top of each other in the same location. Each player will only see their cabin at the stack location. If a player wants others to be able to visit their cabin, they can move it out of the stack by either using a chat command or at Robin's. Cabins not in the stack behave normally. 

The real location of player 1's cabin and the stack are out of bounds, the server cleverly forges the coordinates of the cabins to each player.

**Pros**
- Farmhouse is a communal location
- Players can visit each other's cabins easily
- Spread players across a large map more easily

**Cons**
- Can be messy if lots of people move their cabins out of the stack

## Strategy 2: Farmhouse Stack

With the farmhouse stack strategy, the farmhouse interior is the cabin of the player who entered it. This means each player uses the farmhouse to enter and exit their own cabin. 

**Pros**
- No space wasted on cabins; ideal for mega servers

**Cons**
- Can't visit other player's cabins
- Everyone starts the day in the same spot