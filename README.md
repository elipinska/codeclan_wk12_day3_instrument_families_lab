# codeclan_wk12_day3_instrument_families_lab
Lab from Week 12 Day 3 of CodeClan's 16-week software development course

# Pub/Sub: Musical Instrument Families

### Learning Objectives

- Understand how to pass data between models and views using Pub/Sub
- Be able to use the Pub/Sub pattern to build a modular front-end app

## Brief

Your task is to create an app that allows a user to select an instrument family from a drop-down, and see information about it below. Implement the Pub/Sub pattern to separate your presentation and business logic into views and models.

### MVP

- Allow the user to select a musical instrument family from the drop-down and view the family's name and description below it

### Extensions

- Refactor your view code to implement small methods responsible creating sections of the UI
- In addition to displaying the name and description of the musical instrument family, also display a list of the musical instruments

## Considerations

What are the responsibilities of the views and models? What is responsible for listening for the click of the menu item? What is responsible for finding the selected instrument family object? What is responsible for deciding how the instrument family details should be rendered?

## Planning

Draw a diagram of your files, detailing the publishing of and subscribing to events and the flow of data through the application.

The start point contains the directory structure, the basic HTML structure and an `InstrumentFamilies` model with the data. 

You will need you will need to run webpack (`npm run build`)

Note: Don't forget to create a .gitignore file

-------------------------------------------------------

I want to populate the select with the data so…

- Model publishes data
- SelectView subscribes to published data, receives it and populates the select with options.

I want my model to know about the selected instrument family, when a user makes a selection so…

- SelectView has an event listener added to it to listen to for the change event.
- When the select is changed, SelectView publishes the index of the selected option
- Model listens for the index of the selected option.

I want my InfoView to know about the selected Instrument Family Object so…

- When the model receives the index from the SelectView it finds the correct object from it’s data collection and publishes it
- Info View listens for the object being published, receives it and displays its information
