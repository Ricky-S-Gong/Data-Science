# Pick YouTube’s Key Metrics

## Key Terms

| Term | Meaning |
| --- | --- |
| PM | Product Manager. |
| North star metric | A metric that captures the core value of a product and can serve as a rough test of success. |
| GAME framework | Clarify, Goals, Actions, Metrics, Evaluate. This practice mainly uses Goals, Actions, Metrics, Evaluate. |
| Sentiment analysis | A natural language processing method used to determine whether text is positive, negative, or neutral. |
| Watch time | The amount of time users spend watching videos. |

## Question

You are the PM of YouTube Analytics. What would you pick as the three key metrics, and why?

Like many PM questions, this does not have a single correct answer. Give a reasonable answer and defend the perspective.

![YouTube key metrics exercise screenshot](../../assets/images/analytical-questions/exercises/youtube-key-metrics.png)

## How To Approach It

This is a product management metrics question. There is rarely one universally best metric to optimize. Product managers often call the most important metric or metrics a product’s north star metric because they capture the product’s core value and provide a rough test of success.

This solution uses GAME:

| Step | Role in this answer |
| --- | --- |
| Goals | Define what YouTube is trying to accomplish. |
| Actions | Identify user behaviors that support that goal. |
| Metrics | Convert those behaviors into measurable indicators. |
| Evaluate | Discuss false positives, false negatives, and tradeoffs. |

In a real interview, briefly clarify scope before starting. For example: “Should I focus on YouTube Analytics for creators, or YouTube as a viewing platform?” This provided solution treats the prompt as measuring YouTube platform engagement.

## Goal

YouTube has several reasonable goals:

- User retention.
- User engagement.
- More video upload time.
- Monetization through YouTube Premium or ads.

For this answer, choose user engagement. YouTube wants users to get meaningful value from entertaining and educational video content.

Revenue is usually not the best first goal. A company that focuses only on revenue can miss the fact that user experience is often the stronger long-term health metric. First deliver a worthwhile experience; then evaluate monetization.

## Actions

User actions that could indicate engagement include:

- Liking videos.
- Watching videos.
- Commenting on videos.
- Clicking video thumbnails.
- Adding videos to playlists.
- Creating playlists.
- Visiting YouTube pages.

Analyze actions before jumping into metrics. Otherwise, it is easy to skip the reasoning that connects product goals to metric choices.

## Metrics

The strongest actions for this prompt are:

- Watching videos.
- Liking videos.
- Commenting on videos.

Why not the others?

| Candidate action | Why it is less central |
| --- | --- |
| Playlist actions | Useful, but currently more niche and less representative of the platform’s overall health. |
| Thumbnail clicks | Shows interest, but not whether the user enjoyed the content. |
| Page visits | Shows traffic, but not meaningful engagement. |

Final three metrics:

| Metric | What it captures |
| --- | --- |
| Average video watch time per user | Content consumption and depth of viewing. |
| Average number of likes clicked per user | Positive feedback and lightweight appreciation. |
| Average number of comments per user | Active participation and stronger engagement. |

These are defined as per-user averages to give a clearer sense of user engagement.

## Evaluate

The three metrics are useful, but none is perfect.

| Metric | Potential pitfall | Guardrail or mitigation |
| --- | --- | --- |
| Comments per user | Comments can reflect frustration, offense, or disgust rather than positive engagement. | Use sentiment analysis to separate positive, neutral, and negative comments. |
| Watch time per user | Extreme watch time can indicate addiction, passive browsing, or time users later regret. | Track user satisfaction, long-term retention, and negative feedback. |
| Likes per user | Likes can be affected by UI placement, creator prompts, or recommendation exposure. | Pair with quality signals and satisfaction surveys. |

## 30-Second Answer

I would define YouTube’s goal here as driving healthy user engagement around entertaining and educational video content. The key user actions I care about are watching videos, liking videos, and commenting. My three metrics would be average video watch time per user, average number of likes clicked per user, and average number of comments per user. I would be careful with these because watch time can reflect addiction or passive browsing, and comments can be negative, so I would pair them with guardrails like comment sentiment, user satisfaction, and long-term retention.
