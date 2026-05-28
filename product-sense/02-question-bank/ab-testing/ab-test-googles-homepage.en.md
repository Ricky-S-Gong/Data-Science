# A/B Test Google’s Homepage

## Key Terms

| Term | Meaning |
| --- | --- |
| A/B test | A controlled experiment comparing a current experience against a changed experience. |
| Search traffic | Search activity generated from Google’s mobile homepage. |
| CTR | Click-through Rate, usually clicks divided by impressions. |
| Bounce rate | The share of users who leave after arriving without taking the desired action. |
| Zero state | The state of an input or interface before the user has typed or selected anything. |
| Autosuggest | Search suggestions shown to help users formulate or complete a query. |
| Google Doodle | Google’s temporary logo treatment, often used for branding, education, or cultural moments. |

## Question

What A/B tests would you run on Google’s mobile homepage to increase search traffic?

This prompt assumes the user has already reached Google’s homepage. The goal is to encourage the user to search instead of bouncing away to another site.

## Hints

Before running any A/B test, define the experiment clearly. Think of A/B tests like science experiments:

- Hypothesis: what do we believe will happen?
- Methodology: how will we test it?
- Analysis: how will the outcome inform a product decision?

In this case, the goal is already given: increase search traffic. A simple example would be making the search box bigger and more noticeable.

If stuck, think from the user’s perspective. When users land on Google’s homepage, why might they leave?

- They may not notice how to start searching.
- They may not know how to phrase the query.
- They may not know that Google can answer certain categories of needs, such as weather.

## Challenges To Address

For each experiment, answer:

1. What is the hypothesis, and why is it reasonable?
2. What metrics will you watch?
3. What do you expect to see in those metrics?
4. How will metric changes inform the product decision?
5. What non-data factors should be considered before launch?

## Answer Structure

For each proposed experiment, use the A/B testing structure:

| Component | What to cover |
| --- | --- |
| Hypothesis | Your initial belief about the experiment outcome. |
| Methodology | How you will test the hypothesis, including control and treatment. |
| Metrics | What you will measure. |
| Impact | How the result affects the product decision. |
| Tradeoff | What risks may not be obvious from experiment data alone. |

## Brainstorm: What Can We Change?

Start by listing elements on the mobile homepage that could be adjusted:

- Google logo.
- Search box.
- Search button.
- Footer.
- Profile icon.
- Background.

This brainstorm helps identify the product levers available for increasing search traffic.

## Experiment 1: Make The Search Box More Noticeable

### Hypothesis

The search box may not be noticeable enough to users. Making it more visually prominent should increase engagement with search.

This is plausible because the mobile Google homepage can feel visually crowded, with several buttons and icons around the page.

### Methodology

Create a treatment version that accentuates the search box:

- Bolder search box border.
- Slight color treatment or contrast on the search box.
- Thicker and larger search button.

For this interview prompt, the segment can be all users. In other A/B testing questions, more careful user segmentation may be necessary.

### Metrics

| Metric | Expected direction | Why it matters |
| --- | --- | --- |
| CTR on search box | Increase | Shows more users are engaging with the primary search entry point. |
| Searches initiated from the search box per impression | Increase | Measures actual search traffic, not just focus or taps. |
| CTR on other homepage elements | Likely decrease | Helps detect whether the new design steals attention from other important elements. |
| Bounce rate | Should not substantially increase | A rise may mean the design confuses users and pushes them out of Google. |

### Impact

If the first two metrics increase and bounce rate stays stable, this treatment is a strong launch candidate. A decline in other elements may be acceptable if the net effect increases search traffic without damaging important experiences.

### Tradeoffs

Even if the experiment succeeds, consider qualitative tradeoffs:

- Users may be discouraged from using image search or other search modes.
- The design may funnel users too aggressively into one search path.
- Users may notice Google Doodle less often.
- Lower Doodle engagement could hurt Google’s creative, educational brand expression.

## Experiment 2: Richer Zero-State Queries

### Hypothesis

Some users reach the Google homepage but do not know how to formulate the query they need. Showing richer zero-state suggestions when the user taps the search box should reduce abandonment and increase search traffic.

### Methodology

Add richer zero-state autosuggest queries when users click the search box. Zero state means the search box is active but empty.

Start with a simple treatment:

- When the user clicks the search box, show helpful search options.
- Put a trending search query in the top position.
- Example trending query: “Donald Trump Election.”

![Zero-state trending query suggestion](../../assets/images/analytical-questions/exercises/google-homepage-zero-state-trending.png)

### Metrics

| Metric | Expected direction | Why it matters |
| --- | --- | --- |
| Abandon rate after clicking search box | Decrease | Indicates fewer users give up after starting. |
| CTR on the new suggested trending query | Increase from zero | Measures whether users use the new suggestion. |
| CTR on other suggested queries | Should not meaningfully decline | Ensures the new suggestion does not cannibalize better suggestions. |
| Overall clicks on suggested queries | Increase | Confirms a net gain in search behavior. |

### Impact

Launch only if the new trending suggestion creates a net increase in search metrics. Do not launch if the trending query CTR is much lower than existing suggestions or if overall suggested-query clicks decline.

### Tradeoffs

A major risk is inappropriate trending query suggestions. For example, violent or disturbing news could trend and shock users on the Google homepage.

Before launch, ensure safety and abuse systems can reliably detect and filter inappropriate content.

## Experiment 3: Add Shortcut Links On The Homepage

This proposed experiment is based on a real feature launched on Google’s mobile homepage.

### Hypothesis

Users may not know how to search or may not know that Google supports useful search categories. Surfacing useful content categories on the homepage can help users discover features and begin searches.

Example:

- A user may not know they can search weather directly in Google.
- A visible weather shortcut may help them discover and start that query.

### Methodology

Design contextual icons below the search box:

- Weather.
- Sports.
- Entertainment.
- Eat & Drink.
- Other useful query categories.

The icons can be updated from a larger set of useful query categories. If a user clicks entertainment, Google can surface more entertainment-related queries.

![Google mobile homepage shortcut links](../../assets/images/analytical-questions/exercises/google-homepage-shortcut-links.png)

### Metrics

| Metric | Expected direction | Why it matters |
| --- | --- | --- |
| CTR on shortcut icons | Increase from zero | Measures whether users use the new entry points. |
| Search engagement after icon click | Improve | Includes abandon rate and number of follow-up queries. |
| CTR on search box | Slight decrease may be acceptable | Users may shift some activity from typing to shortcut clicks. |
| Net homepage interaction rate | Increase | The overall goal is more search-related interaction. |

### Impact

If search box interaction declines more than the gain from icon CTR, the feature may not be worth launching. Ideally, search box usage declines only slightly while icon CTR rises enough to create a net gain in mobile homepage interaction.

### Tradeoffs

Users may become comfortable clicking icons instead of typing richer queries. For example, instead of searching “weather tomorrow” or “weather in Maine,” users may repeatedly click a generic “weather” shortcut.

This could have negative long-term effects on Google search retention if users become less expressive in query formulation.

## Comparison Of The Three Experiments

| Experiment | Complexity | Main upside | Main risk |
| --- | --- | --- | --- |
| Make search box more noticeable | Low | More users start search directly. | Other homepage elements receive less attention. |
| Richer zero-state queries | Medium | Users who do not know what to type get help. | Trending suggestions may be inappropriate. |
| Shortcut links | High | Users discover useful search categories. | Users may rely on shallow shortcuts instead of richer queries. |

## Overall Takeaway

Any of these experiments can be strong if discussed with enough detail and foresight. The best answer is not necessarily the most complex idea. The best answer is clear, testable, high impact, and honest about tradeoffs.
