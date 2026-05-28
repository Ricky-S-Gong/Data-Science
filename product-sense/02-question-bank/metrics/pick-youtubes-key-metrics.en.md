# Pick YouTube’s Key Metrics

## Key Terms
- PM: Product Manager.
- North star metric: A metric that captures the core value of a product and can serve as a rough test of success.
- GAME framework: A metrics-answer framework. The full version is Clarify, Goals, Actions, Metrics, Evaluate. This practice mainly uses Goals, Actions, Metrics, Evaluate.
- Sentiment analysis: A natural language processing method used to determine whether text is positive, negative, or neutral.
- Watch time: The amount of time users spend watching videos.

## Core Review

This is not a question about memorizing YouTube’s official metrics. It tests whether you can define a product goal, identify the user actions that support the goal, translate those actions into precise metrics, and evaluate tradeoffs.

Metrics question

GAME framework:

- Goals
- Actions
- Metrics
- Evaluate

Note: This practice solution uses GAME without an explicit Clarify step. In an actual interview, briefly clarify scope first.

![YouTube key metrics exercise screenshot](../../assets/images/analytical-questions/exercises/youtube-key-metrics.png)

## Lesson Notes

### Question

Pick YouTube's Key Metrics

Question

You’re the PM of YouTube’s Analytics. What would you pick as the three key metrics, and why?

As with many PM questions, this one doesn’t have a single answer. Give a reasonable answer and defend your perspective.

### Solution: Approach

Solution

Approach

This is a typical product management metrics question. Generally, there's never any single metric that's the best metric to optimize for. Product managers often name these top metrics their product's "north star" metrics. North star metrics are metrics that capture the core value of your product, and are worth using as a rough litmus test for the success of your product.

In this question, let's use the GAME framework, which is quite simple and effective. We want to:

Goal: Define goals for the product. What is our product vision? Where do we see the product growing in the next five years? For example, if we're working at Whatsapp, perhaps our overall goal is to see the platform grow in terms of user retention. We want to ensure that users who visit our platform discover useful features and stay on the platform.

Actions: What actions do we want our users to take that support these goals? For instance, which features or actions drive engagement? Maybe we want our users to send at least one message per day, since these users often stay on the platform for several months. Another reasonable action to consider here is payment - how many users upgrade their accounts?

Metrics: Now that we've clarified our actions of interest, let's discuss which metrics capture these actions. For example, we can track the number of users that upgrade their account to premium, or the number of users who send one message per day for one week. Tracking these metrics helps indicate to us if our users are taking the Actions that align with our product's Goals.

Evaluate: Of course, as with most PM questions, reflect after you deliver your answer. How might this metric be a false-positive or false-negative? What are some cases where your defined metrics may show positive, but cause deleterious effects for the platform? For instance, perhaps users are upgrading their accounts to premium, but then, after a few days, refunding their purchase because of dissatisfaction with the premium account. These false-positives or false-negatives don't mean that your answer is wrong - it's just always worth mentioning the tradeoffs and potential areas of concern with your selected metric. In fact, no single metric will ever be foolproof!

### Goal

Goal

First, let's define the overall goal for YouTube as a company. There are a variety of goals we can select, and they would all be great answers. Overall, YouTube's goal is to provide entertaining and educational video content to users. YouTube also has a subscription plan, called YouTube Premium, that charges users a monthly subscription fee to access premium and ad-free content. Some reasonable goals include user retention, user engagement, or more video upload time. In this case, we'll select user engagement as the key metric - YouTube wants to see its users getting the most out of the platform.

Note: Generally, revenue is NOT a recommended goal. Companies who focus solely on revenue fail to consider that user experience is a more important health metric for the overall company. First and foremost, deliver an incredible and worthwhile user experience. Then, you can consider monetization metrics.

#### Note

Generally, revenue is NOT a recommended goal. Companies who focus solely on revenue fail to consider that user experience is a more important health metric for the overall company. First and foremost, deliver an incredible and worthwhile user experience. Then, you can consider monetization metrics.

### Actions

Actions

So, what user actions align with the goal of user engagement? Here are some to start with:

Likes on videos

Watching videos

Commenting on videos

Clicks on thumbnails of videos

Adding videos to playlists

Creating playlists

Youtube.com domain page visits

All of these are high-level actions that would indicate engagement on the platform. It's important to consider a high-level analysis of actions prior to diving into the nitty gritty metrics, else you may miss important details and skip some steps to clearly explain your answer.

### Metrics

Metrics

Now, our goal is to take some of the above actions, determine which ones are most important to us, and define clear metrics that capture these actions.

In this case, the most desired user actions are likely:

Likes on videos

Watching videos

Commenting on videos

Playlist metrics, while helpful, are a currently niche feature and don't capture the overall health of YouTube as a platform. Clicks and visits are helpful to determine interest, but the other actions (likes, comments, and watches) give a clearer sense that the user enjoyed and engaged with the content. Now, let's re-define the above actions with respect to metrics. It's important to be precise here.

Average number of likes clicked per user

Average video watch time per user

Average number of comments per user

These metrics are defined as averages based on per-user metrics, to give a clear sense of user engagement.

### Evaluate

Evaluate

We've defined three key metrics that give us a sense of actions consistent with our goal of helping YouTube boost its user engagement. Now, let's think of some pitfalls and potential tradeoffs from these metrics to give a complete answer to the interviewer.

One pitfall: comments are not necessarily a positive user metric. While commenting users are engaged users, they may be frustrated, offended, or disgusted with the content they are viewing. To mitigate this concern, it'd be helpful to use sentiment analysis tools for comments to check if these comments are generally positive or negative in nature.

Another pitfall: watch-time isn't necessarily a positive user metric, when taken to the extreme. Of course, it is beneficial to YouTube to have engaged users on the platform, but many users are nearly addicted to their YouTube viewing habits. If users feel like their time spent on YouTube is a waste, or that they can't help but watch YouTube instead of accomplishing their important life tasks, then perhaps YouTube's attractive influence is actually a downside.

## 30-Second Answer

I would define YouTube's goal here as driving healthy user engagement around entertaining and educational video content. The key user actions I care about are watching videos, liking videos, and commenting. So my three metrics would be average video watch time per user, average number of likes clicked per user, and average number of comments per user. I would be careful with these because watch time can reflect addiction or passive browsing, and comments can be negative, so I would pair them with guardrails like comment sentiment, user satisfaction, and long-term retention.

youtube, metrics, north-star-metric, game-framework, engagement, watch-time, comments, likes
