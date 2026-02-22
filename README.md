# Job Tracker - Smart Interface 

## Overview
This project is a Job Application Tracker, a web-based tool that helps users manage and track job applications in one place.

# Answers to Questions

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById: It selects a single element using its unique ID. It returns one element or null if    nothing matches.

 2. getElementsByClassName: It selects all elements that have a specific class. It returns an HTMLCollection, which updates live when the DOM changes.
3. querySelector: It selects the first element that matches a CSS selector.
4. querySelectorAll: It selects all elements matching a CSS selector and returns a static NodeList (it does not update automatically).

## 2. How to Create and Insert a New Element into the DOM
```bash
let div = document.createElement('div');
div.className = 'new-element p-5 border bg-gray-200';
div.innerHTML = `<p> hello World! </p>`

document.body.appendChild(div);
```
## 3. What is Event Bubbling?
Event bubbling is the process where an event first runs on the target element and then moves upward to its parent elements.
## 4. What is Event Delegation and Why is It Useful?
Event delegation means adding a single event listener to a parent element instead of adding listeners to every child element.

## 5. Difference Between preventDefault() and stopPropagation()
1. preventDefault(): It stops the default behavior of an element (for example, preventing form submission or link navigation).

2. stopPropagation(): It stops the event from bubbling up to parent elements.
## 🛠️ Tech Stack

```bash
# 🛠️ Tech Stack
- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Font Awesome
```

[This project is licensed under the MIT License.](https://choosealicense.com/licenses/mit/)