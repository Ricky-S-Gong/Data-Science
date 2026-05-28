# A/B Testing Email Campaign

## Key Terms

| Term | Meaning |
| --- | --- |
| Conversion rate | The percentage of users who complete the target action, here signing up for UberEats. |
| Binary event | An outcome with two possible values, such as signup or no signup. |
| Bernoulli random variable | A random variable that equals 1 with probability `p` and 0 with probability `1 - p`. A single user's signup outcome can be modeled this way. |
| Binomial distribution | The distribution of the number of successes across `n` independent Bernoulli trials. Total signups in one group can be modeled this way. |
| Central Limit Theorem | With a large sample, sample means or proportions become approximately normally distributed, which supports z-tests. |
| Null hypothesis | The default claim that there is no statistically meaningful difference between groups. |
| p-value | The probability of observing a result at least as extreme as the observed one if the null hypothesis were true. |
| Statistical significance | Evidence strong enough, under a chosen threshold such as `alpha = 0.05`, to reject the null hypothesis. |
| Guardrail metric | A metric monitored to ensure that a positive primary metric does not hide damage elsewhere. |

## Question

You are on the data science team at Uber and want to test whether email campaigns for a new feature, UberEats, increase conversion rate on signups for the feature.

Assume you have a very large sample to work with.

Describe, from a statistical standpoint, how you would run the experiment. Explain:

- What tests you would use.
- How you would assess statistical significance.
- Potential shortcomings of the experiment for informing the product decision.

## How To Think

This is a statistics-heavy A/B testing question. The interviewer is not only asking whether you know that an A/B test has a control and treatment group. They want to hear the statistical model behind the test.

The core logic is:

1. Randomly split eligible users into a control group and a treatment group.
2. Send the email campaign only to the treatment group.
3. Measure whether each user signs up for UberEats within a pre-defined attribution window.
4. Treat signup as a binary outcome.
5. Compare the conversion rates between groups using a statistical test for proportions.
6. Interpret statistical significance and practical significance.
7. Discuss limitations before making a product or marketing decision.

## Hints

### Hint 1: Signup Is Binary

For each user, signup is a binary event:

- `1` if the user signs up for UberEats.
- `0` if the user does not sign up for UberEats.

Because the experiment is run across many users, we can analyze the average of these binary outcomes as a conversion rate.

### Hint 2: Define The Null Hypothesis

The null hypothesis generally states that there is no significant observable change between groups.

For this experiment:

- Null hypothesis: the email campaign does not change UberEats signup conversion rate.
- Alternative hypothesis: the email campaign increases UberEats signup conversion rate.

In notation:

- `H0: p_control = p_treatment`
- `H1: p_treatment > p_control`

If the question asks whether the campaign “increases” conversion, a one-sided test is defensible. If the team also cares about any change, including harm, use a two-sided test.

### Hint 3: Large Sample Size Matters

There are many statistical tests, but the large sample size makes a z-test for two proportions especially relevant.

Because signup is binary, the conversion count in each group follows a binomial distribution. With a large enough sample, the sample conversion rate is approximately normal by the Central Limit Theorem.

## Challenges

### Challenge 1

Does your experiment make distribution assumptions about the underlying variable of interest?

Yes. At the user level, signup can be modeled as a Bernoulli random variable. Across users in a group, total signups can be modeled as binomial. With a large sample, the sample conversion rate is approximately normal.

### Challenge 2

What specific statistical test are you running based on the variable of interest?

Use a two-proportion z-test to compare the control conversion rate and treatment conversion rate.

### Challenge 3

Did you explain how to assess significance given the experimental assumptions?

You should compute a z-statistic, convert it to a p-value, and compare that p-value to a pre-selected significance level such as `alpha = 0.05`. You should also report a confidence interval for the treatment effect.

## Experiment Design

### 1. Define Population And Eligibility

The experiment should be run on users who are eligible to receive the UberEats email campaign.

Eligibility should be defined before the experiment starts. For example:

- Existing Uber users in locations where UberEats is available.
- Users who have not already signed up for UberEats.
- Users who can legally and operationally receive marketing emails.
- Users who have not opted out of promotional emails.

This matters because the estimated treatment effect only applies to the population included in the experiment.

### 2. Randomize Users Into Groups

Create two groups:

- Control group: users do not receive the UberEats email campaign.
- Treatment group: users receive the UberEats email campaign.

Randomization should happen at the user level so that, on average, the two groups are balanced across observed and unobserved characteristics.

Important user variables to check after randomization include:

- Demographics.
- Location.
- Historical Uber usage.
- Prior food-delivery usage if available.
- Email engagement history.
- Device type.
- Time zone.

If the groups are materially imbalanced, that could bias the estimated effect.

### 3. Define The Metric

The primary metric is UberEats signup conversion rate.

For each group:

`conversion rate = number of users who sign up / number of users assigned to the group`

The signup attribution window should be specified before launch. For example:

- Signup within 7 days of receiving the email.
- Signup within 14 days of receiving the email.
- Signup within 30 days of the first email in a campaign sequence.

The attribution window matters because email campaigns can have delayed effects.

### 4. Define The Hypotheses

Let:

- `p_A` be the true conversion rate for the control group.
- `p_B` be the true conversion rate for the treatment group.

If the question is specifically whether the email campaign increases conversion:

- `H0: p_B = p_A`
- `H1: p_B > p_A`

If the team wants to detect any difference, positive or negative:

- `H0: p_B = p_A`
- `H1: p_B != p_A`

In an interview, it is useful to say which one you are choosing and why.

## Statistical Model

### User-Level Signup

For each user `i`, define:

- `Y_i = 1` if the user signs up for UberEats.
- `Y_i = 0` otherwise.

Then:

`Y_i ~ Bernoulli(p)`

This means each user's signup outcome is like a weighted coin flip, where `p` is the probability of signup.

### Group-Level Signups

If group A has `n_A` users and conversion probability `p_A`, then the total number of signups in group A follows:

`X_A ~ Binomial(n_A, p_A)`

Likewise:

`X_B ~ Binomial(n_B, p_B)`

The observed conversion rates are:

- `p_hat_A = X_A / n_A`
- `p_hat_B = X_B / n_B`

### Why A z-test Is Appropriate

Because the sample size is very large, the Central Limit Theorem implies that the sample proportions are approximately normally distributed.

This makes a two-proportion z-test appropriate for comparing `p_hat_A` and `p_hat_B`.

## Statistical Test

### Two-Proportion z-test

Use a two-proportion z-test to compare conversion rates.

The observed treatment effect is:

`delta_hat = p_hat_B - p_hat_A`

Under the null hypothesis, the two groups have the same conversion probability. We use the pooled conversion rate:

`p_hat_pooled = (X_A + X_B) / (n_A + n_B)`

The standard error under the null is:

`SE = sqrt(p_hat_pooled * (1 - p_hat_pooled) * (1/n_A + 1/n_B))`

The z-statistic is:

`z = (p_hat_B - p_hat_A) / SE`

Then compute the p-value from the standard normal distribution.

### Assessing Statistical Significance

Choose the significance level before the experiment, such as:

- `alpha = 0.05` for 95% confidence.
- `alpha = 0.01` if the decision has higher risk or many comparisons.

If using a one-sided test:

- Reject the null if `p-value < alpha` and `p_hat_B > p_hat_A`.

If using a two-sided test:

- Reject the null if `p-value < alpha`, then inspect the direction of the effect.

If the null hypothesis is rejected and the treatment group's conversion rate is statistically significantly higher, then the evidence suggests the email campaign increased UberEats signup conversion.

## Practical Significance

Statistical significance is not enough.

With a very large sample, even a tiny lift can become statistically significant. The team should also check whether the effect is large enough to matter.

Useful product decision checks include:

- Absolute lift: `p_hat_B - p_hat_A`.
- Relative lift: `(p_hat_B - p_hat_A) / p_hat_A`.
- Incremental signups: additional signups caused by the campaign.
- Campaign cost per incremental signup.
- Downstream value of acquired users.
- Whether the lift exceeds the minimum detectable or minimum worthwhile effect.

For example, a lift from 10.00% to 10.05% may be statistically significant with enough users, but may not justify engineering, marketing, or brand costs.

## Shortcomings And Caveats

### 1. Signup Does Not Capture Unsubscribes

Modeling signup as a Bernoulli random variable works for assessing whether a user signs up.

However, it does not capture users who:

- Unsubscribe from the email list.
- Mark the email as spam.
- Mute future communication.
- Develop negative sentiment toward Uber or UberEats.

Those outcomes can reduce long-term customer value.

The team should track unsubscribe as a separate binary outcome:

- `1` if the user unsubscribes.
- `0` otherwise.

This can be analyzed with another two-proportion z-test and used as a cost or guardrail metric.

### 2. Email Marketing Can Have Delayed Effects

The answer should not ignore time delay.

Email campaigns often work over time:

- A user may not open the first email.
- A user may convert after the fourth email.
- A user may receive the email but not act until 20 days later.
- A user may need multiple exposures before signing up.

Because of this, the experiment should define a sufficiently long observation window. The team may also analyze conversion over time using cohort curves.

### 3. Conversion Lift May Not Mean Product Success

Even if the campaign increases signup conversion, that does not automatically mean the campaign should launch.

Possible issues include:

- Higher refund or cancellation rates.
- Lower first-order completion rate.
- Lower retention among users acquired through the campaign.
- Lower lifetime value if the campaign attracts low-intent users.
- Customer irritation if the campaign is too aggressive.

The A/B test should be interpreted in context.

### 4. Interference And Contamination

The clean statistical test assumes users in the control and treatment groups do not affect each other.

This may fail if:

- Treatment users forward the email to control users.
- Users live in the same household and influence each other.
- The campaign triggers social or referral effects.
- Users see the campaign in other marketing channels.

If interference is likely, the experiment may need clustering or a geo-level design.

### 5. Multiple Comparisons

If the team tests many email subject lines, user segments, time windows, and metrics, false positives become more likely.

To handle this:

- Pre-register primary metrics and hypotheses.
- Limit exploratory analysis.
- Adjust for multiple comparisons if making many formal claims.
- Treat segment cuts as directional unless powered in advance.

### 6. External Validity

The result applies to the tested users and campaign conditions.

It may not generalize to:

- Other cities.
- Other seasons.
- Different email creative.
- Future user cohorts.
- Users who opted out of marketing.
- Markets where UberEats availability or restaurant density differs.

## Decision Framework

| Result | Product Decision |
| --- | --- |
| Statistically significant and practically meaningful lift, with clean guardrails | Launch or scale the campaign. |
| Statistically significant but tiny lift | Consider cost, long-term value, and whether the campaign is worth operational complexity. |
| No significant lift | Do not launch broadly; iterate on creative, targeting, or channel. |
| Conversion lift but unsubscribe/spam/retention harm | Do not launch as-is; redesign campaign or target narrower segments. |
| Segment-specific lift | Consider targeted rollout if the segment was pre-specified and sufficiently powered. |

## 30-Second Answer

I would randomly assign eligible Uber users into control and treatment groups, where only the treatment group receives the UberEats email campaign. The primary metric is signup conversion within a pre-defined attribution window. Since signup is binary, each user outcome can be modeled as Bernoulli, total signups as binomial, and with a large sample the conversion rates are approximately normal by the Central Limit Theorem. I would test `H0: p_control = p_treatment` using a two-proportion z-test, compute a z-statistic and p-value, and reject the null at a pre-selected alpha such as 0.05 if the treatment conversion rate is significantly higher. I would also check practical significance, unsubscribe rate, spam complaints, retention, lifetime value, and delayed conversion effects before recommending launch.
