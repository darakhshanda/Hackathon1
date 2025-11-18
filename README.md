# WordQuest – Vocabulary Quiz Game

WordQuest is a simple, single-page vocabulary quiz built with HTML, CSS, Bootstrap, and JavaScript. Players answer five multiple-choice questions, each showing a word and four possible definitions. The game emphasizes accessibility, clarity, and confidence-building for young or beginner-level English learners.

Live Demo: To be added after GitHub Pages deployment

Repository: https://github.com/darakhshanda/Hackathon1

Google Doc: https://docs.google.com/document/d/1CO9IxA_MEyEC7lFxKhBYlxd-kqR2fAmxuK1pD1NAjeQ/

## Table of Contents

- Overview
- Site Goals
- User Stories
- Backlog
- Design
- Wireframes
- Features
- Accessibility
- Getting Started (Local Dev)
- File Structure
- Testing
- Bugs & Issues
- Deployment
- Technologies Used
- Team & Roles
- Development Workflow
- Roadmap
- Schedule
- License

## Overview

WordQuest delivers a clean MVP experience:

- Intro + instructions
- A 5-question quiz (each with 4 answer options)
- Large, colorful buttons for accessibility
- Results page with score
- Game controls: start, next/back (optional), submit, restart

This project is collaboratively built by a small team with clear roles and a shared GitHub workflow.

## Site Goals

### Core Functionality

- Provide an online quiz of at least 5 words with 4 possible answers each
- Collect user answers and show final results
- Provide large, bold, high-contrast UI elements for accessibility
- Keep things simple as a single-page app (index.html) with linked CSS/JS for easy collaboration

### User Experience

- Simple instructions and readable UI
- Child-friendly design using colorful Bootstrap elements
- Clear quiz progression and final score feedback

### Scalability

- Add difficulty levels
- Add custom question sets
- Optional grading system
- Optional accessibility controls (font size, contrast)

## User Stories

1. As a player, I want to read simple intro instructions so I understand how to play the quiz.
2. As a player, I want to answer 5 questions with four clear answer buttons so I can choose a definition easily.
3. As a young learner, I want big, colorful buttons so I can click answers without difficulty.
4. As a player, I want to see my results at the end so I know how many questions I got right.
5. As a player, I want basic game controls (start, submit, restart) so I can move through the quiz easily.
6. As a player, I want to optionally move back and forth between questions so I can check my answers before finishing.

## Backlog

### Must Have (MVP)

- Intro text and instructions
- Min 5 words in the quiz
- 4 answers per question
- Big colorful buttons (Bootstrap)
- Results screen / end-of-game landing page
- Game controls (start, submit, restart)

### Should Have

- Progress status
- Back/forward navigation
- Review answers before submit
- Difficulty selector
- Question count selector
- Custom question sets

### Could Have

- Grading system
- Accessibility controls (font size, contrast toggle)
- Additional game modes (e.g., Spelling Quest)

### Won’t Have (for now)

- Multi-language functionality

## Design

### Structure (Single Page)

All content is served via one main HTML file (`index.html`) that links to styles and scripts for clarity and team collaboration.

Head:

- `<link>` to `assets/css/style.css`
- Bootstrap CDN
- Google Fonts CDN

Body:

- Header + Navbar
- Section 1: Intro/About/Instructions
- Section 2: Quiz container
	- Question text
	- 4 radio buttons (or button-style options)
	- Submit button
- Hidden Results section (revealed on submit)
- Footer (2-column layout)
	- Left: GitHub icon linking to README
	- Right: Team GitHub profile links

### CSS Architecture

- `assets/css/style.css` (global styles: colors, fonts, Bootstrap helpers)
- Planned team-scope refinements via optional imports (if used):
	- `@import "DS.css";`
	- `@import "DR.css";`
	- `@import "JC.css";`
	- `@import "GC.css";`

Each team member can refine spacing/layout in their own file as needed.

## Wireframes

To be added (screenshots or sketches of Intro, Quiz, Results).

## Features

1) Intro + Instructions — Explains how the quiz works in simple language. (Created by Diane R.)

2) Quiz Engine — 5 questions; 4 multiple-choice options per question; Bootstrap components for large, friendly buttons.

3) Results Page — Shows number correct and offers a restart option. (Created by Joe)

4) Game Controls — Start Quiz, Next / Back (optional), Submit Quiz, Restart.

5) Accessible Layout — Large buttons, bold color contrasts, simple labels, responsive Bootstrap grid.

## Accessibility

- High-contrast color palette and large tap targets
- Clear focus states (via Bootstrap and custom CSS)
- Semantic HTML and ARIA where helpful
- Keyboard navigation supported (tab-through, space/enter selection)

## Getting Started (Local Dev)

Prerequisites:

- A modern web browser
- (Optional) VS Code with the Live Server extension for auto-reload

Clone and run locally:

1) Clone the repo
2) Open the folder in VS Code
3) Open `index.html` in your browser (or use Live Server)

## File Structure

Current structure:

```
index.html
assets/
	css/
		style.css
	script/
		script.js
```

## Testing

### Manual Testing

- Click through all buttons
- Ensure only one radio answer is selectable per question
- Test start, submit, restart
- Check accessibility contrast
- Test on multiple screen sizes (mobile, tablet, desktop)

### Accessibility Testing

- Keyboard navigation (Tab/Shift+Tab, Enter/Space)
- WAVE checks or similar tooling
- Leverage Bootstrap’s built-in ARIA behaviors where applicable

## Bugs & Issues

- Tracked in GitHub Issues (links to be added once issues are created)

## Deployment (GitHub Pages)

1) Push `index.html` and assets to the `main` branch
2) In the GitHub repo, go to Settings → Pages
3) Set Source to `Deploy from a branch`, branch `main`, folder `/root`
4) Save — a live link will be generated:
	 - Expected: `https://darakhshanda.github.io/Hackathon1/`

## Technologies Used

### Languages

- HTML5
- CSS3
- JavaScript

### Frameworks / Libraries

- Bootstrap (CDN)
- Google Fonts

### Tools

- VS Code
- Git & GitHub
- Accessibility testing tools

## Team & Roles

- DS — HTML skeleton structure; Quiz logic (JavaScript)
- Diane R — Text content: intro, Q&A wording, results
- Joe — Global CSS; colors/fonts; Bootstrap setup + style merge
- George — QA testing; Accessibility checking; Debugging & project planning

Collective:

- Code reviews
- Merge requests
- Working in `main` + local test branches

## Development Workflow

- Branch from `main` for features/experiments
- Small, focused pull requests with clear descriptions
- At least one peer review before merging
- Keep `main` releasable; use local branches for WIP

## Roadmap

- Add progress status and navigation (back/forward)
- Review-before-submit flow
- Difficulty and question-count selectors
- Custom question sets
- Grading system (optional)
- Accessibility controls (font size, contrast toggle)
- Additional game modes (e.g., Spelling Quest)

## Schedule

18/11 — 12:00–13:00 (local)

- Push full HTML structure to `main`
- All team members pull and begin styling/JS

## License

TBD — Add a license (e.g., MIT) if/when desired.

