# Functionality 

The current weather conditions, sunrise and sunset times, and 3 hourly forecast are all shown at the local times of the location searched. The displayed local times were acheived using the unix timestamp of the data with the corresponding timzone offset. <br />
<br />


The weather conditions of the 5 day forecast represent local times of either 12:00, 12:30, 13:00, 13:30, or 14:30. This is because the weather condtions are provided from the API at 3 hour intervals and the local times of the intervals are not identical across locations. Therefore, to show the weather conditions around the middle of the day, conditions had to be taken at one of these 5 selected times to represent the weather for the day. 


