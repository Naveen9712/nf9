<<<<<<< HEAD
# TODO: Update Menu Dropdown Layout

## Tasks to Complete

- [x] Update header.jsx:
  - Wrap the entire dropdown content in a new container div with width: 100%.
  - Inside the container, create two child divs: left (50% width, Menu Container) and right (50% width, Social Media Container).
  - Menu Container: Add a <nav> tag and move the existing menu <ul> inside it. Keep background-text and menu-divider inside Menu Container.
  - Social Media Container: Change "Reach Out Us" to an <h1> tag, then add a <div> containing the social media icons (move existing social-links div inside).

- [x] Update header.css:
  - Add styles for .dropdown-container (width: 100%, display: flex).
  - Add styles for .menu-container (width: 50%).
  - Add styles for .social-container (width: 50%).
  - Adjust positions for background-text, menu-divider, and social-links-container to fit within the new layout (change from fixed to relative positioning where needed).
  - Add responsive styles: On mobile (max-width: 768px), change flex-direction to column, stack left on top, right below, adjust widths to 100%.

- [x] Test the changes:
  - Run the app to verify the dropdown opens correctly.
  - Check layout on desktop (50-50 split) and mobile (stacked vertically).
  - Ensure responsiveness and proper indentation.
=======
- [x] Update src/index.css to add responsive font sizes for preloader text (smaller on mobile and tablet)
>>>>>>> 156dc0369c205c0fa75974c1b524ea759f068402
