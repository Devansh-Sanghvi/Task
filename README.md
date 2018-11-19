# Master Of Pixel  


## About
This project is a about creating draggable cards within boards and edit and add cards to the board.

## Boilerplate (Project Structure)

The code is written in javascript with react as the framework. We are using React-Native-Router-Flux for navigation and redux and redux-thunk to manage states within the app. We are using realm to store data locally.

Project Code Structure:

1.App- It has all the javascript files which is to meant run the app.

2.App.js-its root component, it wraps router and store provider for redux.

3.router.js-It contains all the routes for navigation from one screen to another.

4.Api-its used for making server request, it has all the four method post,put,get,delete.(Not used in this codebase)

5.Actions- Contains all the action creators for every module.

6.Reducers-Contains all the reducers, respectively mapped with that particular component.

7.Components-Contains all the UI components, kept within the folders named according to the modules respectively and   also contains styles specific to that component.

8.Storage- Contains schema definition and functions in order to store it offline

9.Config-Contains basic configuration like the base-url and theme color of the app.(Not used in this codebase)

10.images-contains all the images we are using in the app.(Not used in this codebase)

11.IOS-contains all the ios platform specific files, like info.plist, appdelegate.m.

12.Android-contains all the Android platform specific files, like Android.xml,mainApplication.java.



## Installation
There are some dependencies and a few instructions on how to run the application.

## Dependencies
- node
- react-native cli
- Xcode

## How to Install and run
1. Install node
2. install react-native cli
3. clone repository and run npm install from cli pointing to the project
4. run react-native ios in order to run it on simulator
