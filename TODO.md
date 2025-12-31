# TODO: Implement Scroll-Triggered Animations for Services Section

## Tasks
- [x] Update `src/components/services/services.jsx`:
  - [x] Import GSAP and ScrollTrigger
  - [x] Add useRef for the services section
  - [x] Add useEffect with ScrollTrigger registration and animations
  - [x] Implement animations for each card (even indices from right, odd from left)
  - [x] Add media query check for window.innerWidth <= 768
- [x] Test animations in browser at 768px and 468px breakpoints (Browser tool disabled, user can test manually)
- [x] Adjust timing/easing for smoother animations: increase x distance, change scrub to 0.5, adjust start/end, add force3D
