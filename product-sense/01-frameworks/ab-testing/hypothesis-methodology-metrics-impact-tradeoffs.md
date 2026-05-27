# A/B Testing Framework: Hypothesis, Methodology, Metrics, Impact, Tradeoffs

## One-Line Use

Use this framework when asked to design, evaluate, or interpret an A/B test in a PM interview.

## Framework

### 1. Hypothesis

Question: What are you testing?

Say:

- What product change you are testing
- Which user behavior you expect to change
- Why you expect that change
- Which metric should move

Template:

If we change X for user segment Y, metric Z will improve because reason R.

### 2. Methodology

Question: How will you test it?

Say:

- Control group sees current experience
- Treatment group sees the proposed change
- Users are randomly assigned
- Define the target user population
- Decide whether to segment by platform, geography, new vs existing users, traffic source, or other meaningful dimensions
- Run the experiment long enough to capture normal usage patterns

### 3. Metrics

Question: What metrics will you track?

Use three layers:

- Primary metric: decides whether the experiment achieved its goal
- Secondary metrics: explain user behavior and support interpretation
- Guardrail metrics: ensure the experiment does not harm the broader product experience

Example for a larger button:

- Primary: CTR on the target button
- Secondary: impression count, hover time, time spent on page
- Guardrails: CTR on other buttons, bounce rate after clickthrough, overall page engagement

### 4. Impact

Question: How will you use this information?

Explain the decision rule:

- Launch if the primary metric improves and guardrails remain healthy
- Iterate if the primary metric improves but guardrails worsen
- Do not launch if the primary metric does not improve
- Segment or rerun if results are mixed or inconclusive

Connect the decision to product and business goals.

### 5. Tradeoffs

Question: What could go wrong?

Discuss what metrics may miss:

- Local optimization hurting the overall page
- Short-term clicks reducing long-term trust
- More engagement but lower interaction quality
- Revenue gains at the expense of user delight
- A redesign making the product less simple or less coherent

## Strong Closing

Close by saying how you would make the final decision and what follow-up experiment or qualitative research you would run next.

