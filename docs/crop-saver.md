# Crop Saver

Crop Saver is designed to seamlessly protect your crops from dying when you log off. CropSaver requires no mods to be installed. 

## How it works
1. The farm is monitored for newly planted crops.
2. When a new crop is detected, it records who planted it and calculates how many days it would have to live in a vanilla game. For example, if a parsnip is planted on Spring 1 it would live until Summer 1 giving it 28 days to live. Lets call the number of days the crop has to live when planted its HP, so this parsnip would have 28 HP.
3. During a vanilla play through the HP of a crop goes down each night until it hits 0 and dies. With Crop Saver, the crop's HP only goes down if either the person who planted the crop is online or the crop has been watered. This is optimal because it allows for individuals to create gardens that they can leave and come back to without being dependent on friends to take care of. The addition of the watering condition means crops in large group farms, sprinklers, or friends helping you out while you're offline still work as you'd expect.

### Exceptions
- If a crop is ready for harvest while the original planter is offline, it wont die until picked even if it it has 0 HP left. This is so if the offline player is using sprinklers or it rains, the harvestable crops don't die while they're gone.
- When the season turns, if the crop doesn't have enough HP become harvestable, it will immediately die.
