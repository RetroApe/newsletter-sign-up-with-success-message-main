# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop
<p>
  <img src="Newsletter Sign Up with Success Message (desktop-1).png" height="200" hspace="5">
  <img src="Newsletter Sign Up with Success Message (desktop-2).png" height="200" hspace="5">
</p>

Mobile
<p>
  <img src="Newsletter Sign Up with Success Message (mobile-1).png" height="200" hspace="5">
  <img src="Newsletter Sign Up with Success Message (mobile-2).png" height="200" hspace="5">
</p>

### Links

- [Solution URL]()
- [Live Site URL](https://retroape.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Transitions
- Desktop-first workflow
- JavaScript

### What I learned

#### Scaling Image

It seems to me that images don't play well with flexbox. I had trouble with the image to have it scale properly when viewport width changes. Putting the image in a container seems to fix this problem. Of course, these settings did not hurt one bit:

```css
#img-main {
    display: block;
    height: 100%;
    max-inline-size: 100%;
    object-fit: cover;
    object-position: right;
    border-radius: 1rem;
}
```
#### Changing Styles with JavaScript

I can bit by bit see that directly changing styles with JavaScript can pose a lot of problems, especially if one decides to change element's properties in css. There is a high chance if an element is also called in JavaScript, one will have to manually change whatever needs to be changed. I did not have this problem, but I could see it because my transitions are hard-coded in JavaScript. Scaling such website is nigh impossible.

### Continued development

I think I've read somewhere that the proper way to change styles with JavaScript is to use classes. I did not use this approach before because it is already hard to get my head around using JavaScript by itself. That being said, I think I figured basics of how JavaScript functions together with the DOM and now it feels a bit simpler, so doing some research on how to change styles with classes is the next best step in my opinion.

## Author

- Frontend Mentor - [@RetroApe](https://www.frontendmentor.io/profile/RetroApe)
- LinkedIn - [@tomislavsuto81](https://www.linkedin.com/in/tomislavsuto81)
