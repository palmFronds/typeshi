# Claude Project Context — MoMoney MVP

## High-level goal
MoMoney is an embedded, optional brokerage-native layer designed to boost first funding and first trade rates by reducing ambiguity and fear at the critical moment of action. Most people enter these platforms without the experience needed to actively manage their funds, and are immediately confronted with an overwhelming interface. This leads the majority to drop off before or just after their first trade, causing brokerages to lose significant revenue. MoMoney addresses this problem directly.

This repo builds a 5–7 minute guided UI flow that:
- Situates users in a brokerage UI
- Teaches concepts only when/if tied to UI elements
- Ends in one low-risk, constrained embodiment (first action)
- Then disappears

This is an experiment and an MVP, not a full product.

---

## Product constraints (do not violate)
- One primary outcome: first funding / first trade
- Guidance must be optional, interruptible, and ephemeral
- No persistent AI copilot behavior
- No abstract education or market theory
- No branching curricula or long personalization trees
- Every concept must directly map to a UI element or action

Essentially, if a feature does not reduce ambiguity at the moment of action, it does not belong.

---

## Stack (tentatively)
- Frontend: React (iframe-safe)
- Backend: FastAPI
- State: minimal (session-scoped, no heavy user models)
- Analytics: event-based (opt-in, completion, action)
- Dev environment: Cursor + Claude Code

Assume future iframe embedding into brokerage onboarding flows.

---

## Architectural principles
- Prefer explicit flows over clever abstractions
- Optimize for clarity and falsifiability, not extensibility
- Keep components shallow and readable
- Avoid premature AI features (chat, recommendations, strategy) unless explicitly mentioned.

This codebase should be easy to explain in one diagram.

---

## Claude behavior expectations
When assisting in this repo:
- Bias toward simplicity over generality
- Ask: “Does this help the user act with confidence *right now*?”
- Flag scope creep aggressively
- Suggest instrumentation when logic is added
- Prefer deleting code to adding it

Do not introduce:
- Always-on assistants
- Market analysis
- Strategy logic
- Heavy personalization systems

---

## Current open questions
- Simulated vs real embodiment in MVP
- Optimal placement trigger (pre-fund vs pre-trade)
- Copy tone for risk framing
- Minimum analytics required for broker pilots

Treat all answers as hypotheses, not truths.

## Success signals for this MVP
When working on code, optimize for:
- Time from opt-in to first action: <5 minutes
- Comprehension proxy: user can explain *why* they're taking action
- Code reviewability: new contributor can understand flow in <30 min

Red flags during development:
- Adding a feature that requires >2 sentences to explain its purpose
- Creating abstractions used by <3 components
- Building logic that assumes user state beyond this session

## Request calibration examples
✅ GOOD: "Add a tooltip explaining limit vs market orders at the order type selector"
❌ BAD: "Add an AI that analyzes user risk tolerance"

✅ GOOD: "Log when users pause >10s on the funding amount screen"
❌ BAD: "Build a personalization engine to optimize flow ordering"