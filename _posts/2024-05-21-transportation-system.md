---
layout: post
title:  "What do our transportation systems even look like?"
date:   2024-05-21 16:48:19 +0530
categories: jekyll update
---

While it is expected that we do not know much about our galaxy, the smallest particles that are the building blocks of all matter, or the human brain, most people severely underestimate how little we know about our urban transportation systems. To be fair to them, it is perfectly reasonable to assume that we know almost everything about them; unlike the cosmos and our brains, these systems are entirely man-made. Some government or public transport agencies design and operate these systems, and we as users enjoy their services every day, tapping our cards to pay the fare or pay the toll via an automatic scanner that reads our number plates. These systems generate a lot of data each day, and the data is stored with our governments. However, contrary to popular belief, we do not know nearly enough about these systems.
<br><br>
There are many reasons why. The first is that while each of us have a few simple options to choose how to travel, like driving, or taking public transport, or calling a taxi, thousands of people in a city have to choose from among those few options simultaneously. All of these choices affect how the system performs, like how crowded the train is, is there surge pricing on Uber, and if the bus is going to be on time. And how the system performs affects what people choose. Even though people now share almost all their data with different services, we know very little about how these choices affect different modes.
<br><br>
In this era of big data, sometimes we need to step back and return to simpler causal models. These models do not need to be complete or very realistic, instead, they need to have the right level of abstraction so we can design the policies we want. Take the example of our bus systems. To improve the system, we not only need to know who rides the bus, but also who might ride the bus if the system improves. What do we even mean by improve? Does it mean the same thing for everyone? Different people will have different preferences. For example, people differ by income, and they will have different ideas about what is a good bus system. For someone poor, price is usually the main factor, as long as the system is affordable, it is good. For people with higher incomes, the fare might not be an issue, they’d be willing to pay more if it meant the bus was less crowded. What type of system a city wants is ultimately decided by the people through their political representatives. However, simple understandable models are necessary to inform people what choices they have and how they will affect different groups.
<br><br>
In one of my favorite projects, we studied how the different travel distances for people affect the design of bus systems, primarily the average spacing between two bus stops. People have different trip lengths, and the interests of people with short and long trips are at odds with each other because buses lose time at each bus stop. People with short trips prefer smaller spacing between stops so they do not have to walk too long. The bus stops a lot and is slower, but it doesn’t matter much when trips are short. People who travel long distances prefer a system where stops are farther apart. They have to walk a little longer, but when the bus stops less, they save time on the bus. This is evident by the differences in distances between stops within a city, where a bus stops once every few hundred meters, and intercity buses that only stop once every few hundred kilometers. Imagine how annoying it would be if the bus from Chicago to Detroit stopped every 300 meters just like most buses do in downtown Chicago. Despite being quite clear, the effect of different trip lengths was not accounted for in public transportation design.
<br><br>
The other reason we do not know much about urban transportation systems is that these systems are not designed by central agencies, and they evolve over time when different decision-makers change them according to their requirements. Most urban transportation systems are not products of careful design and thought. Rather, they emerge as a reaction to differing needs of users and varied incentives provided by state and federal governments over a long time.
<br><br>
Let us return to our example of bus systems. Bus systems are designed and run by a single agency in each city. All the information about them is available publicly, and you can whip out your smartphone right now and check where the stops are and when all the buses come. Yet, up until three years ago, there was no dataset about the distances between bus stops. This is despite the fact that the spacing between bus stops is probably the most important design parameter for a bus system. This distance determines how often a bus stops, which means it will affect how frequently the bus comes to a stop and how much it costs to run a bus route. It also affects how long people have to walk on average to get to a bus stop, and that, in turn, affects who rides the bus and for what purpose. Yet, bus agencies rarely remove old stops, and new stops are usually added to satisfy political realities instead of efficient system design.
<br><br>
I have spent the last few years collecting and compiling datasets that capture these basic facts about our transportation systems. I curated a dataset of bus stop spacing in the top 50 U.S. cities. No such dataset of bus stop spacings existed before that, and the researchers and practitioners relied on an anecdotal reference of a conversation between an employee of an American transit agency and a European transit agency. Our dataset is now used by other researchers and practitioners in the community. It puts the practices of different cities into perspective. The average spacing in Chicago, IL, is about 250 meters, while in Seattle, WA, the spacing is about 400 meters. To answer why these spacings are so different, we collected more data about population, employment, demographics, climate, and the built environment. We saw that most differences in stop spacing cannot be explained by any socio-economic, weather, or built-environment-related variables; cities have different spacings just because agencies choose to do so. If the people in Seattle were designing the system, they’d make stops much farther away.
<br><br>
If we want to improve these systems to make them more equitable, accessible, and sustainable in the future, we need to, at the bare minimum, know what these systems look like today. We cannot fix a system if we do not know what is wrong with it. Once we know what the current scenario of these systems is, we can then start building models that help explain how people make decisions, and how different systems interact with each other. It is important to collect data and inform people about it and the models, because transportation decisions are still largely political. A community should have the ability to decide if their bus stops should be very close or far away from each other, or if they should invest more money in highway expansions, bus routes, or electric chargers. There is no right answer, but it is my duty as an academic to make them aware of the current situation and how the system will respond to their choices.