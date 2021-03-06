# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author and acknowledgments](#author-and-acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

#### Desktop views

![Light mode desktop view](./screenshots/light-desktop.PNG)
![Dark mode desktop view](./screenshots/dark-desktop.PNG)

#### Mobile views

![Light mode mobile view](./screenshots/light-mobile.PNG)
![Dark mode mobile view](./screenshots/dark-mobile.PNG)

### Links

- Solution URL: coming soon...
- [Live site](https://dashboard-theme-toggle.web.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- Achieving a `linear-gradient` effect on borders with `border-radius`
- Considerations in making an accessible toggle button
- Using `useContext` hook to avoid passing props down many levels
- Syning state to local storage so that it persists through a page refresh.

### Continued development

I can improve the solution by:

- Use the `prefers-color-scheme` media query to set the theme to their OS preference.

### Useful resources

- ['An accessible toggle' by Kitty Giraudel](https://kittygiraudel.com/2021/04/05/an-accessible-toggle) - A detailed walkthrough of a HTML and CSS only implementation of an accessible toggle. This inspired me to include the check and cross icons in the toggle to make the choices clearer.
- ['A complete guide to dark mode on the web' by CSS Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) - Outlines different approaches to implementing dark mode.
- ['Learn useContext in 13 minutes' by Web Dev Simplified](https://youtu.be/5LrDIWkK_Bc) - Video introduction to useContext hook.

## Author and acknowledgments

- Coded by En-Chi Liu - [GitHub profile](https://github.com/eeels22)
- Challenge, UI design and icons provided by [Frontend Mentor](https://www.frontendmentor.io)
- `useLocalStorage` hook from [useHooks](https://usehooks.com/useLocalStorage/)
- Toggle button HTML and CSS adapted from example by Kitty Giraudel, same link as above.
