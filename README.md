
# Counter App

The Counter App is a clean, minimal web application built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**. It demonstrates how modern React state management works in a simple, easy-to-understand project — making it a great starting point for beginners learning Redux.

# Overview

The app allows users to increment, decrement, and reset a numeric counter displayed on screen. The interface is straightforward and distraction-free, built on a dark background with smooth color transitions that give instant visual feedback — the counter turns **green** for positive values and **red** for negative ones, making the current state immediately clear at a glance.

# Features

- **Increment & Decrement** — Increase or decrease the counter with dedicated buttons
- **Reset** — Return the counter to zero instantly with a single click
- **Step Selector** — Choose how much to count by: 1, 5, 10, or 100
- **Color Feedback** — Visual cues to indicate positive or negative values
- **Responsive Design** — Works seamlessly across all screen sizes

# How It Works

The counter value lives in a centralized **Redux store**. A `counterSlice` defines the initial state and three reducers — `increment`, `decrement`, and `reset`. The `Counter` component reads the value using the `useSelector` hook and dispatches actions using `useDispatch`. This separation of UI and logic follows best practices for scalable React applications.

# Tech Stack

- **React.js** — UI components and rendering
- **Redux Toolkit** — Global state management
- **Tailwind CSS** — Utility-first styling
- **Poppins Font** — Clean, modern typography

# Author
Aastha Shukla
