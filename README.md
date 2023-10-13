# The Catholic Corner
The **The Catholic Corner** is a web-based tool that provides users with access to daily Mass readings, including scripture passages, psalms, and gospel readings. It allows users to select their region, date, and view the readings for the day.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Cloning the Repository](#cloning-the-repository)
  - [Navigating to the Project Directory](#navigating-to-the-project-directory)
  - [Installing Required Modules](#installing-required-modules)
- [Using the Application](#using-the-application)
  - [Opening the App in a Web Browser](#opening-the-app-in-a-web-browser)
  - [Selecting Region and Date](#selecting-region-and-date)
    - [Sunday Mode](#sunday-mode)
    - [Selecting Your Region](#selecting-your-region)
    - [Choosing the Date](#choosing-the-date)
  - [Viewing Readings](#viewing-readings)
  - [Current Limitations](#current-limitations)
- [Styling Code](#styling-code)
- [Building the Application](#building-the-application)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Daily Mass Readings:** Access the daily readings, including First Reading, Responsorial Psalm, Gospel Acclamation, and Gospel Reading.
- **Sunday Mode:** Conveniently access the Sunday Mass Readings at the click of a button.
- **Regional Selection:** Choose your region to get readings specific to your location or preferences.
- **Date Picker:** Easily select the desired date to view readings for any day.
- **Responsive Design:** The app is designed to work seamlessly on both desktop and mobile devices.
- **Copyright Information:** Includes copyright details for the scripture readings.

## Installation

Follow these steps on a terminal to install and run the app locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/theopin/catholic-daily-readings.git
    ```

2. **Navigate to the Project Directory:**
   ```bash
   cd catholic-daily-readings
    ```

2. **Install the required modules**
   ```bash
   npm install
    ```

## Using the Application

### Opening the App in a Web Browser

To access the **Catholic Daily Readings App**, follow these steps:


1. Run the following command in a terminal to start the application:

    ```bash
    npm start
    ```

2. Open your web browser.

3. Enter the following URL in the address bar:

    ```bash
    http://localhost:3000
    ```
    


This will take you to the app's interface.

### Selecting Region and Date

Once you have opened the app, you can customize your experience:

**Sunday Mode**
- Click on the blue button titled "Sunday" to view the readings for this weekend's celebration.
- Click on the same button to toggle back to the current day view to browse the Mass Readings of the other days

**Selecting Your Region:**
- The default region is set as Singapore.
- Use the dropdown menu to choose your region.
- This allows you to get readings specific to your location or preferences.

**Choosing the Date:**
- Utilize the date picker to select the desired date for the readings.
- This allows you to view readings for any day you prefer.

### Viewing Readings

After making your selections, the app will display the daily Mass readings based on your chosen region and date. Enjoy your readings!

**Current Limitations**
- Responsorial Psalm is not shown for all days.
- There is a limit on days which can be selected to obtain their Daily Mass Readings.
- If there are multiple options for the celebration of the Mass, only 1 set of readings are displayed.

## Styling Code

Run the following command:
```bash
npm run lint
 ```

This runs ESLint, a style checker, on the codebase to flag out any issues related to the code quality. It is configured to use the [Airbnb Style Guide](https://airbnb.io/javascript/react/).


## Building the Application

Run the following command:
```bash
npm run build
 ```

This builds the app for production to the './build' folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## License

This project is licensed under the [License Name]. You can find the full details of the license in the [LICENSE.md](LICENSE.md) file.

## Acknowledgments

- The app sources its readings from Universalis Publishing Limited.
- Scripture readings are from the Jerusalem Bible, copyright © 1966, 1967, and 1968 by Darton, Longman & Todd, Ltd and Doubleday, a division of Random House, Inc, used by permission of the publishers.
- Text of the Psalms: Copyright © 1963, The Grail (England), used with permission of A.P. Watt Ltd. All rights reserved.