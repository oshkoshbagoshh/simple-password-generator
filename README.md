# simple-password-generator
This web application is a simple password generator that generates dynamically creates a  random password at the click of a button.



## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
<!-- 
TODO:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn? -->
The goal was to create an application that would display a password of random characters for the user.

After some trial and error, I got the the randomization aspects figured out. This was done by creating different arrays with the character sets chosen by the user. 
The main challenge I had was working with changing the HTML attributes to actually write the content into the site, but I was able to conduct validation on all of the different steps, 
so that the correct password is generated, logged to the console, and displayed to the user via a window.

## User Story 
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


<!-- ## Table of Contents (Optional) -->

<!-- If your README is long, add a table of contents to make it easy for users to find what they need. -->

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

<!-- Provide instructions and examples for use. Include screenshots as needed.


#
To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
 -->

 ## Mockup

![alt text](./Develop/assets/images/03-javascript-homework-demo.png)

<!-- ## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well. -->

## License

<!-- The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
 -->

<!-- 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections. -->

<!-- ## Badges -->

<!-- ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath) -->
<!-- 
Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
 -->
## Features

<!-- If your project has a lot of features, list them here. -->

## How to Contribute

<!-- If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
 -->
## Tests

<!-- Go the extra mile and write tests for your application. Then provide examples on how to run them here. -->

## Issues / Bugs

Unable to write to the text area as planned, so I have the password currently showing up in a window alert.

The error message is related to the "textarea" element in HTML having an attribute of readonly, so I am working on changing this attribute from the script in future versions.

Here is a screenshot of the issue:

![error screenshot](/1.%20Homework/aj-password-generator/aj_develop/simple-password-generator/Develop/assets/images/issue1.png)