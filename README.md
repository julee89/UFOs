# UFOs

## Overview
The purpose of this analysis is to help Dana build a webpage with dynamic tables which will allow the user to filter the webpage for an in depth view of UFO viewings by city, state, country, and shape.

## Results
The initial webpage is a compiled view of all the UFO viewings for all the states, cities, countries and shapes. However, with the dynamic filtered buttons the user can view only information that they would like to view.

[Unfiltered View](Resources/ufo.list.PNG)

On the webpage the user will first scroll down to the filters and tables. This table will hold all the data on the table as an unfiltered list as shown here. Thist list has a defaulted date value of 1/10/2010.

Then going through the filter boxes, we can see the first option to fill out on the filter is "Enter a City" where the user will provide a city in lowercase. In this example the user will input "el cajon" in the provided textbox.

[El Cajon Filter](Resources/ufo.elcajon.PNG)

Then the next filter shown will be the
"Enter a State" and "Enter a Country" where the user will provide a state value and country value in lowercase. In this example the user will input "ca" in the provided state textbox and "us" in the country textbox.

[El Cajon & CA Filter](Resources/ufo.elcajonca.PNG)

Then the next filter shown will be
"Enter a Shape" where the user will provide a shape they would like to view shown in the previously filtered, city, state and country. In this example the user will input "triangle" in the provided textbox.

[El Cajon, CA US Triangle Shape Filter](Resources/ufo.elcajoncatrianglefilter.PNG)

Once the following values are provided in the text boxes, it will generate a view such as a the follow shown here.

[El Cajon, CA US Triangle Shape View](Resources/ufo.elcajoncatriangle.PNG)

Following the flow of the columns, we can see that they should all alien sightings in El Cajon, CA in the US with the triangle shapes - there are two rows in the table.

## Summary
One major drawback of this new filtered design is that it is case-sensitive. To make this table more dynamic, it could be beneficial to make it so it is not case-sensitive and allow for the table to increase or decrease columns based on the users needs.