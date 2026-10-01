# YUGA — SIH PS 26208 Optimized Prototype

### Random question system
Every time a player starts a game:
- the full question pool is shuffled;
- 5 questions are selected;
- every question's answer options are independently shuffled;
- the correct-answer index is recalculated.

Thus each new game produces a different sequence and different option positions.

### Optimization
- No external libraries or network calls.
- Small static assets.
- Event-driven hash routing.
- Only the active view is rendered.
- LocalStorage for instant local persistence.
- Responsive CSS.
- Reduced-motion support.
- User-generated text is HTML-escaped.

Open `index.html` directly or deploy the folder to GitHub Pages.

For real accounts across devices, use Supabase Auth + database and move score validation/randomization server-side.
