
## Potential Additional Features
<hr />

Provide an option for users to select one of multiple locations under the same name. To do so, the results of the fetch of coordinates, based on the name of the location, would be passed back down into the Search component as props where users select and set the state to the desired option for the App component to then feed in to the rest of the useEffect API fetch.<br />
<br />

The use of dynamic thematic styling to reflect conditions of the current weather returned from the API search. To do so a a series of background images that represent different possible weather conditions could be stored in the public folder and these could be set as the background for the current weather component. First, by taking the 'ID' from the returned data (e.g. '800', representing 'clear sky'), then passing the ID to a function inside the useEffect Hook which sets a state to hold the corresponding background image, established in a series of ranges for which the 'ID' correlates to one, where each range would represent a general weather condition and checking which range the ID falls within. The state holding the image would then be passed down to the current weather component which would set the image as it's background. The proposed general weather condition groupings, correlating to ID ranges [here](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2), would be:
- 'clear sky', 
- partly cloudy ('few clouds' and 'scattered clouds'),
- heavy clouds ('broken clouds' and 'overcast clouds'),
- 'thunderstom',
- 'drizzle',
- 'rain',
- 'snow', and
- 'atmosphere' (this would be represented by a hazardous theme).

These groupings are viewed as a being comprehensive enough to cover all the general weather conditions that could occur whilst using a reasonable amount of images and code. Harmony in images through content and tone, and perhaps the use of filtering, would be used to acheive consitincey in styling theme. 

