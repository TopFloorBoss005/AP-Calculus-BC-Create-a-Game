export const categories = [
  {
    name: "Finding Extrema",
    questions: [
      { points: 100, question: "Find the critical points of f(x) = x³ - 3x² + 2", answer: "Critical points at x = 0 and x = 2" },
      { points: 200, question: "Find the local extrema of f(x) = x⁴ - 8x²", answer: "Local max at (0, 0); Local mins at (±2, -16)" },
      { points: 300, question: "Determine where f(x) = x³ - 6x² + 9x is increasing/decreasing", answer: "Decreasing on (1, 3); Increasing on (-∞, 1) and (3, ∞)" },
      { points: 400, question: "Find the absolute extrema of f(x) = 2x³ - 3x² - 12x + 5 on [-3, 4]", answer: "Absolute max: f(4) = 69; Absolute min: f(-1) = -8" },
      { points: 500, question: "Find extrema of f(x) = xe^(-x) and classify them.", answer: "Local max at (1, 1/e) ≈ (1, 0.368)" },
    ],
  },
  {
    name: "Implicit Differentiation",
    questions: [
      { points: 100, question: "Find dy/dx if x² + y² = 25", answer: "dy/dx = -x/y" },
      { points: 200, question: "Find dy/dx if x³ + y³ = 6xy", answer: "dy/dx = (6y - 3x²)/(3y² - 6x)" },
      { points: 300, question: "Find dy/dx if sin(xy) = x + y", answer: "dy/dx = (1 - y·cos(xy))/(x·cos(xy) - 1)" },
      { points: 400, question: "Find dy/dx if e^(xy) + ln(y) = x²", answer: "dy/dx = (2x - ye^(xy))/(xe^(xy) + 1/y)" },
      { points: 500, question: "Find d²y/dx² at (1,1) if x² + xy + y² = 3", answer: "d²y/dx² = -2/3 at (1,1)" },
    ],
  },
  {
    name: "Optimization",
    questions: [
      { points: 100, question: "Find the minimum value of f(x) = x² - 4x + 7", answer: "Minimum value is 3, at x = 2" },
      { points: 200, question: "A farmer has 200m of fencing. What dimensions maximize the rectangular area?", answer: "50m × 50m = 2500 m²" },
      { points: 300, question: "Find the dimensions of the open-top box of maximum volume made from a 12×12 sheet by cutting squares of side x from corners.", answer: "x = 2, so 8×8×2 box with volume 128 cubic units" },
      { points: 400, question: "Find the point on y = √x closest to (3, 0).", answer: "The point (5/2, √(5/2)) or equivalently (2.5, √2.5)" },
      { points: 500, question: "A cylindrical can must hold 1000 cm³. Find the radius and height that minimize the total surface area.", answer: "r = (500/π)^(1/3) ≈ 5.42 cm, h = 2r ≈ 10.84 cm" },
    ],
  },
  {
    name: "Related Rates",
    questions: [
      { points: 100, question: "A circle's radius grows at 2 cm/s. How fast is the area increasing when r = 5 cm?", answer: "dA/dt = 20π cm²/s" },
      { points: 200, question: "A 10-ft ladder slides down a wall. The base moves out at 1 ft/s. How fast does the top slide down when the base is 6 ft from the wall?", answer: "dy/dt = -3/4 ft/s" },
      { points: 300, question: "Water fills a cone (r=3, h=6) at 2 cm³/s. How fast is the water level rising when h = 4 cm?", answer: "dh/dt = 2/(π·4) = 1/(2π) cm/s" },
      { points: 400, question: "Two cars leave an intersection: one north at 30 mph, one east at 40 mph. How fast is the distance between them increasing after 2 hours?", answer: "dD/dt = 50 mph (Pythagorean relationship)" },
      { points: 500, question: "A spherical balloon leaks at 12 cm³/s. How fast is the surface area decreasing when r = 10 cm?", answer: "dS/dt = -2.4 cm²/s" },
    ],
  },
  {
    name: "Tangent Lines",
    questions: [
      { points: 100, question: "Find the equation of the tangent line to y = x² at x = 3.", answer: "y = 6x - 9" },
      { points: 200, question: "Find the tangent line to y = sin(x) at x = π/4.", answer: "y = (√2/2)(x - π/4) + √2/2" },
      { points: 300, question: "Find the tangent line to the curve x² + y² = 25 at the point (3, 4).", answer: "y = -3x/4 + 25/4" },
      { points: 400, question: "Find all points on y = x³ - 3x where the tangent is horizontal.", answer: "At x = ±1: points (1, -2) and (-1, 2)" },
      { points: 500, question: "Find the equation of the tangent line to x²y + y³ = 10 at (1, 2).", answer: "y = (-4/13)x + 30/13" },
    ],
  },
];