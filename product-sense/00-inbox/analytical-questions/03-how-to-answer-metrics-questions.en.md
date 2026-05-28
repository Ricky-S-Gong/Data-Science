# How to Answer Metrics Questions

## Key Terms

| Term | Meaning |
| --- | --- |
| PM | Product Manager. |
| KPI | Key Performance Indicator: a metric used to evaluate progress against an important goal. |
| North star metric | The single metric that best summarizes product or business success. |
| GAME framework | Clarify, Goals, Actions, Metrics, Evaluate. |
| DAU | Daily Active Users. |
| CTR | Click-through Rate, usually clicks divided by impressions. |
| OKR | Objectives and Key Results, a goal-setting system that connects objectives to measurable outcomes. |
| MTTR | Mean Time To Resolution, the average time needed to resolve an issue. |
| Guardrail metric | A metric that protects the product from improving one outcome while damaging another. |
| User journey map | A step-by-step map of how a user moves through a product to accomplish a goal. |

## Core Review

Do not start by listing DAU, retention, or revenue. First define what success means in this product context, then translate that success into user actions and measurable metrics.

The best answers explain:

- What the product or feature is trying to achieve.
- Which user actions prove the goal is being achieved.
- Which metrics best capture those actions.
- Where the chosen metrics can mislead.
- Which guardrails keep the product healthy.

![GAME framework](../../assets/images/analytical-questions/metrics/game-framework.png)

## What Metrics Questions Look Like

In a typical analytical PM interview, expect roughly two metrics questions. Each one usually lasts 20 to 25 minutes including follow-up questions.

Metrics questions are straightforward in form, but the scope can vary:

- A small feature.
- A product.
- An entire company.

You may be asked to define:

- A single north star metric.
- A set of KPIs.
- A general method for measuring feature, product, or company success.

A north star metric is a single metric that best encapsulates success. A clear north star helps teams align stakeholders, maintain customer-centricity, and keep analysis simple.

Common prompts include:

- “Define a north star metric for Airbnb.”
- “What metrics would you measure as a PM launching a new feature on WhatsApp?”
- “How do you define success metrics?”

Common follow-ups include:

- “What additional metrics besides your north star would be helpful to track?”
- “Are there any blind spots or challenges associated with your chosen metrics?”
- “What strategies can you think of for driving your metrics?”

## What Interviewers Are Looking For

Interviewers want to see that you can:

- Set goals for a feature, product, or company.
- Brainstorm metrics that fit the situation.
- Weigh the pros and cons of those metrics.
- Select the metric or metrics that best match the goal.
- Apply product and strategic reasoning, not just data vocabulary.

The key to a solid answer is to define what success means before choosing metrics. Interviewers want to see that you keep the larger goal in mind as you translate product insight into actionable metrics.

## The GAME Framework

GAME is a structured way to move through metrics questions. It helps you justify your final metric choice as you go.

| Step | Question to answer | Output |
| --- | --- | --- |
| Clarify | What exactly is in scope? | Assumptions and boundaries. |
| Goals | What does success mean? | A clear product, feature, or company goal. |
| Actions | What user behaviors support that goal? | A list of meaningful user actions. |
| Metrics | How can those actions be measured? | Candidate metrics and final metric choices. |
| Evaluate | Where can the metric mislead? | Weaknesses, tradeoffs, and guardrails. |

## Running Example: Instagram Discover Feed

Assume the interviewer asks:

“How would you measure the success of Instagram’s Discover feed?”

This example will use the GAME framework from start to finish.

## 1. Clarify Scope

Clarify ambiguity and state assumptions before building the answer. This keeps the answer on track.

If you are unsure what to ask, clarify scope around:

- The company or parent company.
- The specific product surface.
- Related features that may or may not be included.
- Whether the interviewer wants one metric or a set of metrics.

For the Instagram Discover prompt, useful clarifying questions include:

- “Should I be considering Meta’s goals as the parent company of Instagram?”
- “Should I include the search bar in the Discover feed in this analysis?”

Assume the interviewer says:

- Consider Meta’s goals.
- Search bar is out of scope.

![Metrics whiteboard: clarify](../../assets/images/analytical-questions/metrics/whiteboard-1-clarify.png)

## 2. Define Goals

Next, define the main goal for the company, product, or feature. You will refer back to this goal throughout the answer.

Helpful prompts:

- What is the product vision?
- What does this product do for the larger company?
- What does this product do for its users?
- What company mission or strategic goal does it support?

If you do not know the company mission offhand, make a reasonable assumption and tell the interviewer that it is an assumption.

For Instagram Discover:

- Meta’s broader mission likely includes communication, sharing, and community-building.
- Discover is an interest-based feed that shows users content they would not otherwise find.
- Therefore, Discover supports Meta by exposing users to new parts of the world and helping them expand interests.

Example answer:

“I am assuming that Meta’s mission is to give people the power to build community. The Discover feed is an interest-based feed that shows users content they would not find otherwise, which supports Meta’s mission by exposing users to new parts of the world. For now, I will define the goal of Discover as: help users develop and expand their interests.”

![Metrics whiteboard: goals](../../assets/images/analytical-questions/metrics/whiteboard-2-goals.png)

## 3. Map User Actions

Once the goal is clear, identify actions that would prove the goal is being achieved.

Ask:

- What actions or behaviors do we want from users?
- What evidence would show that users are developing and expanding interests?

A common technique is to build a user journey map.

### User Journey Map

A user journey map, or user funnel, is a process flow covering every step a user takes to accomplish a goal. A full walkthrough can include every screen, decision point, and click.

To build one:

1. Pick one use case where the user goal aligns with the product goal.
2. Walk through the steps the user takes from entry point to endpoint.

Avoid mapping many use cases at once. It can confuse the answer. If needed, walk through multiple journeys one at a time.

### Instagram Discover Journey

Use case: the user wants to be entertained by new content for a short period.

Journey:

- User opens Instagram and sees the Home feed.
- User clicks the Discover tab.
- User sees a grid of posts and Reels.
- Search exists, but it is out of scope for this question.
- User scrolls.
- User clicks a post or Reel.
- User may like, comment, visit the poster’s profile, or take other post/Reel actions.
- User may return to the feed.
- Journey ends when the user exits the app or switches to another part of the product.

Key actions that indicate users are developing and expanding interests:

- Open the Discover feed regularly.
- Open posts shown in Discover.
- Like, comment on, or share content shown there.
- Follow creators found there.
- Scroll for more content.
- Search for related topics.

![Metrics whiteboard: actions](../../assets/images/analytical-questions/metrics/whiteboard-3-actions.png)

## 4. Translate Actions Into Metrics

After identifying key actions, brainstorm metrics that measure them.

A practical approach:

1. Start with 5 to 10 candidate metrics.
2. Explain what each candidate captures.
3. Remove metrics that are too broad, noisy, or weakly connected to the goal.
4. Choose 1 to 3 final metrics depending on the prompt.

Be explicit about metrics you considered but did not choose.

### Common Metric Types

| Metric type | What it captures | Examples | Caution |
| --- | --- | --- | --- |
| Product metrics | How users interact with the product. | DAU, CTR, time spent. | Need context because seasonality, product changes, and external events can move them. |
| OKRs | Strategic objectives tied to measurable key results. | Acquired users in specific markets, DAU growth, churn reduction. | Useful for alignment, but may not capture full business health. |
| Business metrics | High-level company performance. | Revenue, net profit margin, customer lifetime value. | Often lagging indicators and too broad for small feature decisions. |
| Quality metrics | Whether a product or process is functioning well. | Bug backlog size, MTTR, page load time. | Often diagnostic rather than a final success metric. |
| Leading indicators | Early signals that move quickly. | Signups, button clicks. | Sensitive and noisy; pair with lagging indicators. |
| Counter or guardrail metrics | Whether one goal is hurting another priority. | Churn rate, customer satisfaction. | Should be tracked alongside the main metric. |

### Instagram Discover Candidate Metrics

The key action selected from the journey is opening posts shown in Discover. Candidate metrics include:

- Total number of posts opened per user.
- Time spent looking at content by user per session.
- Scroll depth per session per user.
- Percentage of Discover sessions with a post click.

Each metric tells a slightly different story. If the goal is to know whether users are developing their interests, time spent looking at content by user per session is a strong candidate because it captures depth of interest.

![Metrics whiteboard: metrics](../../assets/images/analytical-questions/metrics/whiteboard-4-metrics.png)

## 5. Evaluate Weaknesses

All metrics are strong in some areas and weak in others. Evaluation is where you show mature product judgment.

Ask:

- Where does this metric fall short?
- Could it create false positives?
- Could it miss important user experience issues?
- What guardrail metrics should be paired with it?

For the Instagram Discover example:

- Chosen metric: time spent looking at content by user per session.
- Weakness: users may spend a lot of time because they are bored and searching for something interesting, not because they found valuable content.
- Guardrail: pair time spent with engagement signals such as likes or creators followed from Discover.

![Metrics whiteboard: evaluate](../../assets/images/analytical-questions/metrics/whiteboard-5-evaluate.png)

## Answer Quality Bar

| Level | What it looks like |
| --- | --- |
| Okay | Explains broad product goals, lists feasible metrics, and gives a reasonable justification for a north star metric. |
| Good | Clearly ties product goals to user actions, then maps actions to metrics. Understands where metrics can mislead and suggests guardrails. |
| Great | Shows deep understanding of why the product exists, its users, strategic role, and market context. The north star metric is clearly tied to product and organizational success. |

## Common Pitfalls

- Answer the interviewer’s question. If asked for one north star metric, do not end with three final options.
- Make sure your answer is an actual metric. “Engagement” is not a metric; it is a class of metrics.
- Define the measurement clearly. If the metric is DAU, explain what counts as active. If the metric is time spent, specify whether it is per session, per user, or per month.
- Match metric granularity to product scope. A small feature’s effect on overall DAU may be drowned out by noise.
- Do not stop at the north star. Discuss blind spots, guardrails, and tradeoffs.

## Interview Template

1. Clarify scope and assumptions.
2. Define the product, feature, or company goal.
3. Map the user actions that support that goal.
4. Brainstorm candidate metrics.
5. Choose the strongest metric or metric set.
6. Explain why it fits.
7. Evaluate weaknesses and add guardrails.
