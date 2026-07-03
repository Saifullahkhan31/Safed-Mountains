Design a website for "SAFED: ORIGINS" — an epic sci-fi political thriller novel by Chad Khan.
This is a premium, cinematic book website. The visual language is dark, military, and atmospheric.
It must feel like classified intelligence meets ancient doctrine — think redacted government files
crossed with aged leather-bound manuscripts. Every design decision should feel intentional,
earned, and world-specific. Avoid anything generic or templated.

─── GLOBAL COLOR PALETTE ───────────────────────────────────────────────────

Background Primary:   #050505  (near-black — the dominant surface)
Background Secondary: #111111  (panel/card surfaces)
Background Tertiary:  #0A0A0A  (alternating dark sections)
Gold / Brand Accent:  #DCA341  (Safed gold — primary highlight, headings, CTAs)
SAGE Green:           #4ADE80  (used exclusively for SAGE AI elements and tech terminals)
Orbis Red:            #8B0000  (used exclusively for Orbis Terra faction elements)
Body Text:            #E0E0E0  (light gray — primary readable text)
Muted Text:           #6B7280  (secondary/supporting text)
Dividers:             #1F1F1F  (barely-visible structural separators)
Border Accent:        #2A2A2A  (card and panel borders)

─── TYPOGRAPHY SYSTEM ──────────────────────────────────────────────────────

Display / Hero:       Archivo Narrow — Bold, uppercase, tight tracking (-0.02em to -0.04em)
                      Used for section titles, book title, character names, location stamps
                      Scale: 96px (hero) / 72px / 56px / 40px

Subheadings:          Archivo Narrow — Regular or SemiBold, mixed case
                      Scale: 28px / 22px

Body Copy:            Inter — Light (300) or Regular (400), generous line-height (1.75)
                      Scale: 18px / 16px / 14px

Labels / Tags / Mono: IBM Plex Mono — used for faction tags, status indicators,
                      SAGE terminal text, redacted document labels, classified stamps,
                      page eyebrows (e.g. "// THREAT ASSESSMENT"), and timestamps
                      Scale: 13px / 11px — always UPPERCASE with wide letter-spacing (0.2em+)

Quotes / Pull:        Archivo Narrow — Italic, gold color (#DCA341), slightly larger than body

─── LAYOUT & GRID ──────────────────────────────────────────────────────────

Grid:                 12-column, 1280px max-width, 24px gutters, 80px side margins (desktop)
                      On mobile: 4-column, 16px gutters, 20px side margins
Section Rhythm:       Alternating backgrounds (#050505 and #111111 / #0A0A0A)
                      Each section has 96px–120px vertical padding (desktop), 64px (mobile)
Border Radius:        0px everywhere — sharp edges throughout. This is military, not friendly.
Dividers:             1px solid lines in #1F1F1F or #DCA341 (gold dividers for emphasis)

─── VISUAL TEXTURE RULES ───────────────────────────────────────────────────

SAFED / Lore Sections:   Aged parchment texture overlaid at low opacity (5–8%) on
                          background. Warm, worn, ancient-document feel.
Orbis Terra Sections:     Exposed concrete or dark brushed steel texture. Cold and corporate.
SAGE / Tech Sections:     Subtle dot-matrix or circuit-grid overlay in #4ADE80 at 4% opacity.
                          Green glow (box-shadow: 0 0 30px rgba(74, 222, 128, 0.15))
Hero / Full-bleed:        Full-screen video or cinematic image, always overlaid with a
                          gradient fade to #050505 on the bottom 40% of the frame.

─── COMPONENT SYSTEM ───────────────────────────────────────────────────────

Primary CTA Button:   Border: 1px solid #DCA341 | Text: #DCA341 | Background: transparent
                      Hover: Background fills to #DCA341, text turns #050505
                      Font: IBM Plex Mono, 12px, uppercase, 0.2em tracking
                      Padding: 14px 32px | No border-radius

Secondary CTA:        Same but with #E0E0E0 border and text. Hover fills #E0E0E0, text #050505

SAGE Button:          Same structure but with #4ADE80 (green). Used only in SAGE sections.

Faction Tag / Label:  IBM Plex Mono, 11px, uppercase, 0.3em tracking
                      Gold (#DCA341) for Safed | Red (#8B0000) for Orbis | Green for SAGE
                      Gray (#6B7280) for neutral/government
                      No background — just colored text above a 1px bottom border

Card / Panel:         Background: #111111 | Border: 1px solid #2A2A2A
                      On hover: border transitions to #DCA341 | Card lifts 4px (translateY)
                      No drop shadows — use border glow instead

Section Eyebrow:      IBM Plex Mono, 11px, uppercase, 0.4em tracking, colored by section type
                      Always appears 12px above the main section heading
                      e.g. "// INTELLIGENCE BRIEF" or "// OPERATIVE PROFILE"

Horizontal Rule:      Full-width 1px line. Gold version: #DCA341 at 30% opacity
                      Used before and after major content breaks

─── NAVBAR ─────────────────────────────────────────────────────────────────

Background:           #050505 with a subtle 1px gold bottom border (#DCA341, 20% opacity)
                      Becomes slightly transparent (85% opacity) when scrolled, with backdrop blur
Logo / Title:         "SAFED" in Archivo Narrow Bold, 20px, gold (#DCA341), uppercase
                      Subtitle ": ORIGINS" in Archivo Narrow Regular, same size, #6B7280
Nav Links:            Inter Medium, 13px, uppercase, 0.15em tracking, #E0E0E0
                      Active state: gold underline (#DCA341) 1px
                      Hover: text transitions to gold
CTA in Nav:           "Get the Book" — styled as primary CTA button (small version)
Height:               64px fixed

─── FOOTER ─────────────────────────────────────────────────────────────────

Background:           #050505 with a full-bleed cinematic image (The Vault / Safed Mountain
                      artwork) faded to near-black using a top-to-bottom gradient overlay
Content:              "SAFED PROTOCOL: INITIATE" in large Archivo Narrow display
                      Below: "SAFED: THE CONTINUUM — COMING SOON" in gold
                      Newsletter email input (IBM Plex Mono styled input, SAGE-green border)
                      Nav links repeat in a minimal row
                      Copyright: "© 2025 Chad Khan. All Rights Reserved." in mono 11px

─── PHOTOGRAPHY & ILLUSTRATION STYLE ───────────────────────────────────────

All character and scene imagery is AI-generated in a painterly cinematic style.
Dark, earthy, desaturated-but-warm tones. Oil painting texture. Heavy atmospheric haze.
Characters rendered with dramatic directional lighting, deep shadow detail.
Images should never be displayed with white backgrounds or bright fills.
Use a dark overlay (gradient or flat semi-transparent #050505) wherever images appear
as backgrounds to ensure text legibility.

─── MOTION / INTERACTION NOTES (for prototype layer) ───────────────────────

Scroll Reveals:       Elements fade in + slide up 30px as they enter the viewport
Hover on Cards:       4px lift + border transitions to gold
Typewriter Effect:    SAGE terminal section types out text character by character
Hero Video:           Autoplays, muted, loops. Unmute toggle (small, top-right of hero)
Parallax:             Hero and footer background images scroll at 0.5x speed
Page Transitions:     Subtle fade-in on page load (200ms)