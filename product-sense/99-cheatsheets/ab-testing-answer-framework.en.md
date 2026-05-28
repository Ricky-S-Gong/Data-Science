# A/B Testing Answer Framework

## Key Terms

- HMMIT: Hypothesis, Methodology, Metrics, Impact, Tradeoffs.
- A/B test: A controlled experiment comparing a current experience against a changed experience.
- CTR: Click-through Rate, usually calculated as clicks divided by impressions.
- Control: The group that sees the current experience.
- Treatment: The group that sees the proposed change.
- Guardrail metric: A metric used to make sure a change does not damage another important part of the user experience.

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

- Primary metric improves and guardrails are stable: launch.
- Primary metric improves but guardrails are hurt: iterate or limit rollout.
- Primary metric does not improve: do not launch.
- Results are mixed: segment, rerun, or gather qualitative insight.

### 5. Tradeoffs

What could go wrong?

- A local metric improves while the overall page experience gets worse.
- Clicks increase but interactions become less meaningful.
- A short-term gain hurts long-term trust.
- Metrics miss user delight or product quality.
