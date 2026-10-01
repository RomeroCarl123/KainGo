# KainGo: Heuristic Showcase

Build KainGo as a high-fidelity 390 × 844 mobile web app with interactive screens demonstrating all 10 Nielsen usability heuristics.

Specs:
Frame size: 390 x 844 (centered mobile viewport container with device frame/preview toggle).
Font: Poppins (fallback Inter). Three text sizes: Title 20 Semibold, Body 14 Regular, Caption 12 Regular.
Spacing steps: 4, 8, 12, 16.
Colors:
- Primary #FF6B35
- Background #FFF8F3
- Card #FFFFFF
- Text #2B2B2B
- Secondary text #8A8A8A
- Border/disabled #F0E2D8
- Food tile #FFE5D6
- Success #2E9E5B
- Error #D93025

Components:
1. Primary button: fill width, height 46, radius 12, fill Primary, white 14 Semibold. Variants: Default, Disabled (fill #F0E2D8, text #8A8A8A).
2. Secondary button: fill width, height 44, radius 12, 1.5 stroke Primary, no fill, Primary text 14 Semibold.
3. Food card: fill width, padding 12, radius 14, white fill, 1 stroke #F0E2D8, horizontal auto layout gap 10. Contains a 52x52 image tile (radius 12, fill #FFE5D6), title 14 Semibold with price 12 Secondary below it, and the quick-add button on the right. Variants: Menu item (+), Cart item (x).
4. Quick-add button: 32 circle, Primary fill, white "+" 20. Icon button: 36 circle, white fill, 1 stroke #F0E2D8 (for Back, Help "?", Cart). Badge: min 18 circle, Primary fill, white 11 text, offset -4 top-right.
5. Chip: padding 7 vertical / 14 horizontal, fully rounded. Variants: Default (white, 1 stroke #F0E2D8), Selected (Primary fill, white text).
6. Input field: fill width, padding 11 x 14, radius 12, white fill, 1 stroke #F0E2D8, 14 placeholder in Secondary. Variants: Empty, Filled, Focused (stroke Primary).
7. Option row (address, payment, size): fill width, padding 10 x 12, radius 12. Variants: Unselected (1.5 stroke #F0E2D8, white), Selected (1.5 stroke Primary, fill #FFEFE6, check mark on right).
8. Toast with Undo: width 362, padding 11 x 14, radius 12, fill #2B2B2B, white 14 text, "Undo" in #FFB596 Semibold.
9. Dialog: width 320, padding 18, radius 18, fill #FFF8F3, Title 20, body 14, primary button then secondary button stacked. Place on a black overlay at 45% opacity.
10. Bottom sheet: width 390, padding 18, radius 22 on top corners only, fill #FFF8F3, title 20.
11. Tracking step: 26 circle dot with 12 gap to the label. Variants: Done (green fill, check), Current (Primary stroke, Semibold label), Upcoming (grey).
12. Error message: title 20 Semibold in Error color, body 14 explaining what went wrong and how to fix it.

Screens & 10 Nielsen Heuristics:
1. Home (Visibility of system status, Recognition rather than recall, Flexibility & efficiency of use)
2. Menu with category chips & search (Match between system & real world, Consistency & standards)
3. Item detail with bottom sheet / option rows (Error prevention)
4. Cart with item removal & Toast with Undo (User control & freedom)
5. Payment failed screen with explicit recovery options (Help users recognize, diagnose, and recover from errors)
6. Order Tracking step-by-step progress (Visibility of system status)
7. Help & Documentation dialog/sheet (? icon button)
Include an interactive "Heuristics Guide / Defense Inspector" overlay or sidebar toggle that points out exactly which screen elements satisfy each of the 10 Nielsen heuristics to support oral defense.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/61bbdb29-4add-4dc6-86c8-36f3517406e0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
