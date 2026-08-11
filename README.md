# 🧮 Interactive JS Calculator

A sleek, functional browser-based calculator built from scratch using **Vanilla JavaScript, HTML5, and CSS3**. Designed to handle standard arithmetic operations, floating-point precision, continuous chained calculations, and keyboard shortcuts.

Built as part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

---

## ✨ Features

- **Core Operations:** Performs Addition, Subtraction, Multiplication, and Division.
- **Chained Calculations:** Evaluates expressions sequentially (e.g., entering `12 + 7 - 1` automatically computes `12 + 7` before processing `- 1`).
- **Keyboard Support:** Complete physical keyboard mapping for numbers, operators, Enter (`=`), Escape (`AC`), and Backspace.
- **Input Validation & Safety:**
  - Prevents multiple decimal points in a single operand (`12.3.4` is blocked).
  - Handles consecutive operator switches without triggering unexpected operations.
  - Custom error handling for division by zero (`Nice try, genius!`).
- **Backspace & Clear:** Includes an `AC` (All Clear) button to reset memory and a `⌫` (Backspace) button to correct single-digit entry errors.
- **Precision Rounding:** Automatically rounds long decimal results to prevent screen display overflow.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `0` – `9` | Input Digits |
| `.` | Input Decimal |
| `+`, `-`, `*`, `/` | Operator Selection |
| `Enter` or `=` | Calculate Result |
| `Backspace` | Undo Last Digit |
| `Escape` | All Clear (`AC`) |

---

## 🛠️ Built With

* **HTML5:** Semantic structure and custom data attributes.
* **CSS3:** Modern UI with CSS Grid and Flexbox layouts.
* **Vanilla JavaScript (ES6+):** Event delegation, DOM manipulation, and dynamic evaluation state management (no `eval()` or standard string function execution).

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone [https://github.com/YOUR-USERNAME/calculator.git](https://github.com/YOUR-USERNAME/calculator.git)
