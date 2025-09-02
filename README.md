# Stratblocks 🧩

**From trading idea → backtest → insight in under 10 minutes.**

Stratblocks is a next-generation backtesting framework that turns natural language strategy descriptions into **modular, bulletproof strategy blocks**. Think of it as LEGO for trading systems — powered by AI and built for speed, clarity, and trust.

---

## 🚀 Why Stratblocks?

Every trader knows the pain:

- ⏳ Hours wasted writing boilerplate code.
- 🐛 Debugging fragile scripts that break on edge cases.
- 📊 Manual, repetitive parameter tuning.
- 🤯 Slow iteration that kills creativity.

Stratblocks eliminates all of that.

**Describe your strategy in plain English → AI assembles it into tested components → visualize and backtest instantly.**

---

## ✨ Core Principles

1. **Lego-Like Strategy Blocks**  
   - Every block = bulletproof, reusable logic (entries, exits, filters, risk, execution).  
   - Blocks snap together visually; no broken code paths.

2. **Explainable AI Assembly**  
   - Natural language → strategy graph.  
   - Transparent flow chart of how blocks connect (no “black box” surprises).

3. **Zero Debugging Headaches**  
   - Block-level integrity means you tweak connections, not code.  
   - Advanced users can create custom blocks while preserving robustness.

4. **Fast Validation Loop**  
   - Go from idea to validation in < 10 minutes.  
   - Standardized performance metrics (Sharpe, CAGR, Max Drawdown, Win Rate).  

5. **AI-Enhanced Insights**  
   - Backtest results are passed through AI analysis.  
   - AI suggests parameter adjustments aligned with your chosen metrics.

---

## 🛠 Tech Stack

- **Backend**: Python (FastAPI), [Backtrader](https://www.backtrader.com/) (engine core), custom stratblock layer.  
- **Frontend**: React + Tailwind + [React Flow](https://reactflow.dev/) for graph editing.  
- **NLP/AI**: spaCy + HuggingFace (parser), GPT models for semantic assembly.  
- **Infra**: Dockerized services, deployable on AWS/Render/Heroku.  

---

## 📅 Roadmap (4-Month Sprint)

### Phase 1: Parser & Blocks (Weeks 1–4)
- Trading vocabulary grammar → structured schema (JSON).  
- Core block library (indicators, signals, risk).  
- Composition engine + validation layer.  

### Phase 2: Visual Assembly (Weeks 5–8)
- Auto-generate strategy graphs.  
- Editable frontend graph UI.  
- Round-trip sync: Natural Language ↔ Graph ↔ Blocks.  

### Phase 3: Backtester Core (Weeks 9–12)
- Historical data pipeline (Yahoo/Alpha Vantage).  
- Fast backtester integration.  
- Metrics engine + sandbox for strategy comparison.  

### Phase 4: Demo & Polish (Weeks 13–16)
- Seamless UX: Input → Graph → Backtest → Results.  
- Advanced features: Monte Carlo, Walk-forward testing.  
- Public MVP demo + immigration/investor pitch deck.  

---

## 🔮 Vision

Stratblocks isn’t just a tool — it’s a paradigm shift:

- **For beginners**: The fastest way to validate an idea without touching code.  
- **For experts**: A transparent, modular system that speeds iteration and fosters creativity.  
- **For the industry**: A bridge between human intuition and machine execution — explainable, fast, and reliable.  

---

## 🏗 Status

This is an **active work-in-progress** (4-month focused sprint).  
Follow the repo for weekly updates, dev logs, and milestones.  

---

## 👤 Author

**Tayebwa Bruno Businge**  
- MSc Financial Engineering (WorldQuant University)  
- Quantitative developer & AI systems builder  
- Focused on building tools at the intersection of **finance + AI + human creativity**

---

## 📜 License

TBD — likely permissive for research, restricted for commercial redistribution.  
(Will finalize closer to public MVP release.)

---

## ⭐ Contribute / Stay Updated

Right now Stratblocks is closed to contributions until the MVP stabilizes.  
You can:  
- Star the repo to follow development.  
- Reach out via Issues for feature requests after MVP launch.  

---

**Stratblocks — where trading strategies snap together like Lego.**
