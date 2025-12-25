# login-signup-ui

A minimal, responsive login and signup front-end built with plain HTML, CSS and JavaScript.

## Overview

This project provides static pages for user authentication UI:
- `login/login.html` — Login page
- `login/create-account/create.html` — Create account page

Features:
- Responsive layout and accessible form controls
- Client-side validation: password match and live strength feedback
- Small and dependency-free — ready to host on GitHub Pages

## Run locally

From the project root:

Open `http://localhost:8000/login/login.html`

## Deploy

1. Create a GitHub repo named `login-signup-ui` (or use the `gh` CLI below).
2. Push the project to GitHub (see commands in the guide).
3. Enable GitHub Pages from the repository settings (branch: `main`, folder: `/`).

## Notes

This is a static front-end. Form `POST` actions require a server/API to process user data. For demos you can intercept the `submit` event in `create.js` and send to an API endpoint using `fetch()`.
