# Chatbot UI - Design Report

## Approach
I implemented the chatbot UI as a React + TypeScript single-page application (SPA), fulfilling the requirements of three states: Collapsed, Opened, and Expanded.

- Collapsed shows a minimal footprint, just a button.
- Opened expands the chat UI to about 40% of the screen, allowing interaction.
- Expanded covers most of the screen with full chat and source visibility.

## Error Handling (Added)

- If `chats.json` fails to load (e.g: 404 or network error), the UI displays a friendly fallback message instead of breaking.
- If a user selects an invalid chat index, the UI displays `"No chat found"` instead of crashing.
- Dynamic loading replaced static import for better error awareness and user feedback.

## Challenges
- State transitions: Ensuring smooth transitions between collapsed/opened/expanded while preserving the chat state.
- Typing JSON data: TypeScript strictness required careful attention to types and props in every component.

## Potential Improvements
- Persist chatbot state in `localStorage` so it remains open/closed across page reloads.
- Add animations for smoother transitions between UI states.
- Refactor styling using CSS modules or styled-components for scoped and cleaner styles.
- Accessibility enhancements like keyboard navigation and screen reader support.
- Add testing with `Jest` and `React Testing Library`


Overall, I prioritized clarity, responsiveness, and reusability while staying within the 3-hour time window.