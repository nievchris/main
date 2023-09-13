# main
Final updates have been applied

# README.txt

## EventPlanner Pro Website

This repository contains the source code for the EventPlanner Pro website. The website is designed to promote and provide information about EventPlanner Pro, a platform for event planning and management. Below, you'll find an explanation of what the code is trying to accomplish and how it works.

## Table of Contents
1. [Introduction](#introduction)
2. [HTML Structure](#html-structure)
3. [CSS Styling](#css-styling)
4. [JavaScript Functionality](#javascript-functionality)
5. [Mobile Responsiveness](#mobile-responsiveness)

## 1. Introduction

The EventPlanner Pro website aims to showcase the key features of the EventPlanner Pro platform and encourage users to download the software. It features a modern and responsive design, including a sticky header with a navigation menu, a home section with introductory content, a key features section, and a call to action (CTA) section.

## 2. HTML Structure

The HTML structure defines the layout and content of the website. It includes sections for the header, main content, and footer. Here's an overview of the key sections:
- **Header**: Contains the logo, navigation menu, and a mobile-friendly hamburger menu icon.
- **Main Content**: Divided into sections like "Home," "Key Features," and "CTA," which contain textual and visual content.
- **Footer**: Includes the EventPlanner Pro logo and contact information.

## 3. CSS Styling

The CSS styles (found in `styles.css`) are responsible for the visual presentation of the website. Here are some of the key styles and features:
- **Sticky Header**: The header sticks to the top of the page as you scroll down, and it can change its appearance on scroll.
- **Responsive Design**: The website is designed to adapt to various screen sizes and devices.
- **Navigation Menu**: The navigation menu items are styled and spaced evenly.
- **Feature Section**: Features are displayed in a row with icons and descriptions.
- **CTA Section**: Encourages users to download EventPlanner Pro, with a prominent download button.

## 4. JavaScript Functionality

JavaScript (found in the script tag at the end of the HTML) adds interactivity to the website. Here are some of the key JavaScript functionalities:
- **Shrinking Header**: The header and logo can shrink when the user scrolls down the page to provide a cleaner look.
- **Mobile Menu**: On smaller screens, a mobile-friendly menu icon is displayed, and clicking it toggles the visibility of the navigation menu.

## 5. Mobile Responsiveness

The website is designed to be responsive and adapt to different screen sizes. Media queries in the CSS are used to adjust the layout and styling for various devices, such as tablets and mobile phones.

Feel free to modify and enhance this code to suit your needs. If you want to minify the CSS file, you can use the provided Bash shell script (`minify_css.sh`) to reduce its size and optimize the website's loading speed. Simply follow the usage instructions in the script's comments to minify your CSS file.

To get your `minify_css.sh` script to run on another computer, you'll need to ensure that the necessary prerequisites are met and then transfer the script to the target computer. Here's a step-by-step guide on how to do this:

### Prerequisites:

1. **Bash Shell**: Ensure that the target computer has a Bash shell installed. Most Unix-based systems (Linux and macOS) come with Bash by default. For Windows, you can use a Bash emulator like Git Bash or WSL (Windows Subsystem for Linux).

2. **Python and `cssmin` Package**: Make sure Python is installed on the target computer. You can check this by running `python --version` in the terminal. If Python is not installed, download and install it from the official Python website (https://www.python.org/downloads/).

   Next, install the `cssmin` package using pip:
   ```
   pip install cssmin
   ```

### Transfer the `minify_css.sh` Script:

1. **Copy the Script**: You can transfer the `minify_css.sh` script to the target computer using various methods, such as USB drive, email, or cloud storage services like Dropbox or Google Drive. Make sure the script is accessible on the target computer.

### Run the Script on the Target Computer:

1. **Open a Terminal**: On the target computer, open a terminal or command prompt. Ensure you are in the directory where the `minify_css.sh` script is located or navigate to its location using the `cd` command.

2. **Make the Script Executable**: Before running the script, you may need to make it executable. Use the `chmod` command:
   ```
   chmod +x minify_css.sh
   ```

3. **Run the Script**: Execute the script by typing its name in the terminal followed by the input and output file paths as arguments. For example:
   ```
   ./minify_css.sh input.css output.min.css
   ```

   Replace `input.css` with the name of your input CSS file and `output.min.css` with the desired name of the minified output file.

4. **Review Output**: The script will minify the CSS file and save the minified version as specified. Review the terminal output for any success or error messages.

5. **Verify Minified CSS**: Check the output file to ensure that the CSS was successfully minified. You can open it using a text editor or browser to verify its contents.

By following these steps, you should be able to run the `minify_css.sh` script on another computer as long as the prerequisites are met, and the script is correctly transferred.
