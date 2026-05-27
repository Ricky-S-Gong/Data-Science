# A/B Testing Answer Framework

## Acronym

HMMIT:

- Hypothesis
- Methodology
- Metrics
- Impact
- Tradeoffs

## 30-Second Structure

For any A/B testing question, I would first define the hypothesis, then design a control and treatment, choose the target user population, track primary and guardrail metrics, use the results to make a launch decision, and finally discuss tradeoffs that may not be captured by metrics alone.

## Step-by-Step

### 1. Hypothesis

What are we testing?

Template:

If we change X for user segment Y, metric Z should improve because reason R.

### 2. Methodology

How will we test it?

- Control: current experience
- Treatment: proposed change
- Random assignment
- Clear user population
- Relevant segments
- Enough duration and sample size

### 3. Metrics

What will we track?

- Primary success metric
- Secondary diagnostic metrics
- Guardrail metrics

Example:

- Target button CTR
- Impression count
- CTR on other buttons
- Button hover time
- Time spent on page
- Bounce rate after clickthrough

### 4. Impact

How will we use the result?

- Improve + guardrails stable: launch
- Improve + guardrails hurt: iterate or limit rollout
- No improvement: do not launch
- Mixed: segment, rerun, or gather qualitative insight

### 5. Tradeoffs

What could go wrong?

- Local metric improves while overall page worsens
- Clicks increase but interactions become less meaningful
- Short-term gain hurts long-term trust
- Metrics miss user delight or product quality

## Key Terms

- A/B test: 对照实验
- PM: Product Manager
- CTR: Click-through Rate
- Control: 对照组
- Treatment: 实验组
- Cohort: 用户群组
- Impression count: 曝光次数
- Bounce rate: 跳出率

