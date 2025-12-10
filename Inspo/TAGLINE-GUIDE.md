# Rotating Tagline Implementation Guide
## Amore Hero Section

---

## 🎯 Recommended Configuration

### Timing
- **Display duration:** 4–4.5 seconds per tagline
- **Transition duration:** 500–700ms
- **Total cycle:** 48–54 seconds (12 taglines)

**Why:** 4 seconds gives users enough time to read and absorb each message without feeling rushed. The 500–700ms transition is just long enough to feel intentional, not abrupt.

### Easing Functions
```css
/* Smooth, understated */
ease-out

/* More cinematic */
cubic-bezier(0.4, 0.0, 0.2, 1)

/* Subtle bounce (delightful version) */
cubic-bezier(0.34, 1.56, 0.64, 1)
```

**Recommendation:** Use `ease-out` for fade transitions, `cubic-bezier(0.4, 0.0, 0.2, 1)` for slides.

---

## 🎨 Color Usage (Amore Brand)

### Option 1: Subtle Gray (Recommended)
```css
color: #9ca3af; /* gray-400 */
```
**Why:** Doesn't compete with your hero headline. Feels premium, understated.

### Option 2: Gradient Text (Delightful)
```css
background: linear-gradient(90deg, #26e5a4 0%, #3b82f6 35%, #8b5cf6 65%, #ef4444 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```
**Why:** Reinforces your brand spectrum. Use sparingly—not every page element should be gradient.

### Option 3: Cyan Accent
```css
color: #5de4ff; /* Protocol cyan */
```
**Why:** Matches Protocol branding if you want to tie it to that product line.

---

## 📐 Typography

### Font Recommendations
1. **Inter** (300–400 weight) — Clean, modern, highly readable
2. **Rajdhani** (300–400 weight) — Slightly more tech/cyber feel
3. **JetBrains Mono** (300 weight) — If you want a monospace vibe

**Size:**
- Desktop: `20px` (1.25rem)
- Mobile: `16px` (1rem)

**Tracking:**
```css
letter-spacing: 0.02em; /* Slightly open for readability */
```

**Line Height:**
```css
line-height: 1.4; /* Comfortable, not cramped */
```

---

## 🎬 Animation Styles

### 1. Simple Fade (Recommended)
**Best for:** Clean, professional look. Doesn't distract.
```css
opacity: 0 → 1 → 0
transition: 500ms ease-out
```

### 2. Slide Up Fade
**Best for:** Subtle motion that feels alive without being "cartoony."
```css
opacity: 0 → 1 → 0
transform: translateY(10px) → 0 → translateY(-10px)
transition: 600ms ease-out
```

### 3. Cross-Dissolve
**Best for:** Film-like transitions. Very smooth.
```css
All taglines stacked, only one visible at a time
transition: opacity 700ms ease-in-out
```

### 4. Typewriter (Optional)
**Best for:** If you want something more playful/hackerish.
Not recommended unless it fits the page context.

---

## 💎 Delightful Version Features

### Gradient Mask
Adds a subtle gradient fade on edges:
```css
.tagline-container::before,
.tagline-container::after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 60px;
  pointer-events: none;
  z-index: 1;
}

.tagline-container::before {
  left: 0;
  background: linear-gradient(90deg, #000000 0%, transparent 100%);
}

.tagline-container::after {
  right: 0;
  background: linear-gradient(90deg, transparent 0%, #000000 100%);
}
```

### Subtle Blur Transition
```css
transition: opacity 600ms ease-out, transform 600ms ease-out, filter 600ms ease-out;
filter: blur(0px) → blur(4px) → blur(0px);
```

### Line Highlight (Advanced)
Animated underline that appears briefly:
```css
.tagline::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
  opacity: 0;
  animation: lineHighlight 4s ease-in-out;
}

@keyframes lineHighlight {
  10%, 90% { opacity: 0; }
  40%, 60% { opacity: 0.6; }
}
```

---

## 🚀 Implementation Steps

### For React + Tailwind
1. Copy `RotatingTagline.jsx` into your components folder
2. Import into your hero section
3. Choose version (simple, cross-fade, or gradient)
4. Adjust timing if needed

```jsx
import RotatingTagline from './components/RotatingTagline';

<section className="hero">
  <h1>Healthcare doesn't need another problem.</h1>
  <RotatingTagline />
  <button>Get Started</button>
</section>
```

### For Pure HTML/CSS
1. Copy the HTML structure
2. Paste into your hero section
3. Adjust `animation-delay` values if changing timing
4. Choose animation style (fade, slide, or gradient)

---

## 🎭 Tagline Grouping Strategy

If you want to emphasize certain messages, group them:

**Clinical → Tech Wordplay (1–5):**
- From running codes to writing code.
- From fractures to refactors.
- From AKIs to APIs.
- From admissions to permissions.
- From SOAP to CRUD.

**Personal Journey (6, 9, 10):**
- I learned some systems. Then I learned some more.
- Integrating systems with systems.
- I learned their systems. Then I built my own.

**Mission Statements (7, 8, 12):**
- The system is broken. I'm putting the heart back in healthcare.
- Medicine deserves its heart back — I'm here to return it.
- If you can't beat the system… rewrite it.

**Bold Moves (11):**
- I didn't switch EMRs. I built one.

You could alternate between groups for variety.

---

## ⚡ Performance Tips

1. **Use CSS animations over JavaScript** when possible (better performance)
2. **Limit to one instance per page** (don't stack multiple rotating taglines)
3. **Pause on hover** (optional, for accessibility):
```css
.tagline-container:hover .tagline {
  animation-play-state: paused;
}
```

---

## 🎨 Color Palette Reference

```css
/* Amore Brand */
--primary: #26e5a4;      /* Teal */
--tertiary: #3b82f6;     /* Blue */
--secondary: #8b5cf6;    /* Purple */
--accent-red: #ef4444;   /* Red */
--protocol-cyan: #5de4ff; /* Protocol cyan */

/* Neutrals */
--gray-400: #9ca3af;     /* Recommended tagline color */
--gray-500: #6b7280;     /* Darker option */
--gray-300: #d1d5db;     /* Lighter option */
```

---

## 📋 Final Recommendations

**Best Overall Setup:**
- **Style:** Simple fade or slide-up fade
- **Color:** Gray-400 (#9ca3af)
- **Font:** Inter 300 weight
- **Duration:** 4 seconds per tagline
- **Transition:** 600ms ease-out

**When to Use Gradient Version:**
- On dedicated Amore product page
- Below a plain headline (not competing with other gradients)
- When you want maximum brand expression

**When NOT to Use:**
- Multiple gradient elements already on page
- Mobile viewport (can look busy)
- If performance is a concern

---

## 🔄 Randomization (Optional)

If you want taglines to appear in random order on each page load:

```javascript
// React version
const [taglines] = useState(() => 
  [...originalTaglines].sort(() => Math.random() - 0.5)
);

// Vanilla JS version
const taglines = [/* all taglines */];
const shuffled = taglines.sort(() => Math.random() - 0.5);
```

---

## 🎯 Context Matters

Place this tagline module:
- **Below** your main hero headline
- **Above** your CTA button
- **Between** hero and "Why Me" section

Don't use it:
- In multiple places on one page
- On every page (reserve for homepage/product pages)
- When the page already has a lot of motion

---

**You're ready to ship! 🚀**
