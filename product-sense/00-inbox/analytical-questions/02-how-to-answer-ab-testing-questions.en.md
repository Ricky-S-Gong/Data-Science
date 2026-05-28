# How to Answer A/B Testing Questions

## Key Terms
- A/B test: A controlled experiment comparing a current experience against a changed experience.
- PM: Product Manager.
- CTR: Click-through Rate, usually calculated as clicks divided by impressions.
- Control: The group that sees the current or default experience.
- Treatment: The group that sees the new design, feature, or change.
- Cohort: A defined group of users selected or grouped by a rule.
- Impression count: The number of times an element, page, or ad is shown.
- Bounce rate: The share of users who leave after arriving at a page without meaningful further interaction.

## Core Review

Use HMMIT as the answer spine: Hypothesis, Methodology, Metrics, Impact, Tradeoffs.

The interviewer is looking for an experiment that is precise enough to run and mature enough to interpret.

## Framework From The Image

![How to Answer A/B Testing Questions](../../assets/images/analytical-questions/how-to-answer-ab-testing-questions.png)

How to Answer A/B Testing Questions:

1. Hypothesis: What are you testing?
2. Methodology: How will you test it?
3. Metrics: What metrics will you track?
4. Impact: How will you use this information?
5. Tradeoffs: What could go wrong?

## Core Summary

A/B testing questions evaluate whether you can use experiments to validate product decisions. A strong answer should define a clear hypothesis, describe a precise experiment setup, choose relevant metrics, explain how the results will affect the product decision, and discuss tradeoffs that may not be captured by metrics alone.

## Lesson Notes

### Opening

A/B tests are one of the core tools a product manager can employ for understanding user behavior. In fact, at many large tech companies, product managers are heavily involved with experimentation as a means to validate their product decisions.

This is why A/B testing-related questions are often asked in a product management interview. For example:

What experiments would you run on Google’s homepage to increase search queries?

What are the top 3 types of A/B Experiments you would run on Facebook ads to increase revenue?

Of course, there are simple structures to ace any PM interview, but an excellent experimentation interview answer will be sure to cover a few critical basics. Here’s the anatomy of a perfect A/B Test interview answer.

### 1. Hypothesis

First, for any A/B experiment you propose, tell your interviewer what your hypothesis is. What are you actually even testing here? For example, perhaps you believe that by increasing the size of a button, it will increase the clickthrough rate (CTR).

### 2. Methodology

Now that we have a hypothesis, what exactly are we going to engineer differently to test this hypothesis? For instance, let’s run two cohorts of users. In the first cohort, the users will be our control, and will see exactly the same experience as present. In the second cohort, the users will see a button that is increased in area by 50%.

It’s important to be precise here. The interviewer needs to understand what exactly is being proposed, and what the experimental setup will look like. A big component of precision in methodology is defining who exactly the experiment is being run on. Are we targeting all users on the platform? Or should we pick a proper segment of users for whom we feel this test will be particularly well suited.

Don’t forget to add a control to your experiments — without a control, it’s impossible to actually gain useful insights from the data.

### 3. Metrics

Great, now we have an experimental setup. Next, you need to tell your interviewer what metrics you’ll be actually concerned with. What metrics will actually convey useful insights to your product and engineering teams?

In the button example, you’ll obviously want to be tracking CTR, but there are a few other metrics that might be relevant and are worth listing:

Impression count

CTR on other buttons on the page

Button hover time

Time spent on page

Bounce rate on the button’s clickthrough link (assuming the button leads to a new webpage)

To answer these questions, you’ll need to understand the goals of the experiment and anticipate potential pitfalls from launching the proposed redesign.

### 4. Impact

At the end of a day, running an experiment just tells us information. Tell your interviewer how this information will actually be useful. What metrics will you use to make an informed decision about whether or not to launch the proposed feature?

Perhaps you want to ensure that CTR increases with the redesign. Or perhaps the increased clicks on the button shouldn’t decrease the overall clicks of buttons on the page.

Ultimately, the answer to this question depends on the specific feature and the goal of the redesign. Here is a great opportunity to relate your answer to the overall vision and goals of the company.

### 5. Tradeoff

Lastly, every proposed redesign or feature has some sort of tradeoff. What are some potential pitfalls to launching your proposed feature that might not be evident via a purely data-based analysis?

For example, perhaps, by making the button larger, you’ll increase the CTR on that button in question at the expense of other elements on the page. Some other great examples of points to make in typical A/B interview questions are qualities like “meaningful interactions” and user delight. These are not easily captured via metrics, and therefore are often missed in an overly quantitative mindset.

## Interview Answer Template

When answering an A/B testing question, use this order:

1. State the hypothesis.
2. Define the control and treatment.
3. Specify the user population and segmentation.
4. Choose primary, secondary, and guardrail metrics.
5. Explain how you would interpret results and make a launch decision.
6. Discuss tradeoffs and risks beyond the metrics.

ab-testing, experimentation, metrics, product-sense, analytical-questions
