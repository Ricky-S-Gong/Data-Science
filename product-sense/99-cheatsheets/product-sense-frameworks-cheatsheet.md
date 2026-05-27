---
title: "Product Sense Frameworks Cheatsheet"
subtitle: "Analytical PM Interviews"
author: "Ricky Gong"
date: "2026-05-27"
---

# Product Sense Frameworks Cheatsheet

This cheatsheet summarizes the frameworks that can be directly reused from the current Product Sense lessons and practice questions.

这份 cheatsheet 汇总目前 Product Sense 课程和练习中可以直接调用的答题框架。

## 1. Analytical Questions: Core Answer Principle

Analytical PM questions are structured product judgment questions. Do not treat them as pure math or isolated data puzzles.

分析类 PM 题是结构化产品判断题，不是单纯数学题或数据题。

Use every answer to show:

- Problem decomposition
- Goal setting
- Data and metrics reasoning
- Logical decision-making
- Product context
- Strategic tradeoffs

中文复述：

- 先拆问题。
- 再定目标。
- 用数据和指标支撑判断。
- 把结论放回产品、用户和业务语境。
- 主动说明 tradeoffs。

## 2. Metrics Questions: GAME Framework

Use GAME when asked to define success metrics, choose a north star metric, identify KPIs, or measure the success of a feature, product, or company.

当题目要求定义成功指标、北极星指标、KPI，或衡量某个功能/产品/公司的成功时，使用 GAME。

### C: Clarify

Address ambiguity and define scope.

澄清问题和范围。

Ask:

- Are we measuring a feature, product, or company?
- Should we consider the parent company's goals?
- Are related features in or out of scope?
- Does the interviewer want one north star metric or a set of metrics?

### G: Goals

Define what success means.

定义成功。

Ask:

- What is the product vision?
- What does this product do for users?
- How does it support company strategy?
- What user or business outcome matters most?

### A: Actions

Identify user behaviors that support the goal.

找出支持目标的用户行为。

Use a user journey map:

- Pick one use case.
- Walk through the user steps.
- Identify behaviors that prove the goal is being achieved.

### M: Metrics

Translate actions into measurable indicators.

把用户行为转化成可衡量指标。

Use:

- Primary metric
- Secondary diagnostic metrics
- Guardrail or counter metrics
- Leading and lagging indicators when useful

### E: Evaluate

Assess metric weaknesses.

评估指标盲点。

Ask:

- Where does this metric fall short?
- Could it be misleading?
- Does the metric match the feature scope?
- What guardrails should we track?

## 3. A/B Testing Questions: HMMIT Framework

Use HMMIT when asked to design, evaluate, or interpret an A/B test.

当题目要求设计、评估或解读 A/B 测试时，使用 HMMIT。

### H: Hypothesis

What are we testing?

我们到底在验证什么？

Template:

If we change X for user segment Y, metric Z should improve because reason R.

### M: Methodology

How will we test it?

我们如何设计实验？

Cover:

- Control group
- Treatment group
- Target user population
- Random assignment
- Segmentation
- Duration and sample size

### M: Metrics

What will we track?

我们追踪哪些指标？

Use:

- Primary success metric
- Secondary metrics
- Guardrail metrics
- Diagnostic metrics

### I: Impact

How will we use the result?

我们如何根据结果做决策？

Decision rule:

- Primary metric improves and guardrails are stable: launch or ramp up.
- Primary metric improves but guardrails worsen: iterate or limit rollout.
- Primary metric does not improve: do not launch.
- Mixed result: segment, rerun, or gather qualitative insight.

### T: Tradeoffs

What could go wrong?

这个方案可能伤害什么？

Watch for:

- Local optimization hurting overall experience
- Short-term metric gains hurting long-term trust
- More engagement but lower interaction quality
- Revenue gains at the expense of user delight
- Metric blind spots

## 4. Execution and Diagnosis Questions

Use this when a metric drops, fraud rises, delivery time increases, or a product health issue appears.

当题目是指标下降、欺诈上升、配送时间变长或产品健康度异常时，使用这个诊断框架。

Flow:

1. Clarify metric and scope.
2. Validate data quality.
3. Segment the issue.
4. Generate hypotheses.
5. Prioritize likely causes.
6. Investigate with tests or data.
7. Recommend short-term and long-term actions.

Segmentation dimensions:

- Time
- Geography
- Platform
- App version
- User type
- Acquisition channel
- Product surface
- New vs existing users

## 5. Analytical Interview Rubric Self-Check

Use this before finalizing an interview answer.

答完前用这组问题自查。

### Analytical Skills

- Did I use data, not just intuition?
- Did I choose metrics that fit the problem?
- Did I explain metric pros and cons?

### Critical Thinking

- Did I diagnose before solving?
- Did I prioritize by urgency, impact, cost, and testability?
- Did I provide an executable plan?

### Culture Fit

- Did I communicate clearly?
- Did I check in with the interviewer?
- Did I use the interviewer as a collaborator?
- Did I show curiosity about root causes?

## 6. YouTube Key Metrics Practice: Reusable Answer

Question:

You are the PM of YouTube Analytics. What three key metrics would you pick, and why?

Answer structure:

1. Define YouTube's goal as healthy user engagement around entertaining and educational video content.
2. Identify key actions: watching videos, liking videos, commenting on videos.
3. Choose metrics:
   - Average video watch time per user
   - Average number of likes clicked per user
   - Average number of comments per user
4. Evaluate pitfalls:
   - Watch time can reflect addiction or passive browsing.
   - Comments can reflect frustration or negative sentiment.
5. Add guardrails:
   - User satisfaction
   - Comment sentiment
   - Negative feedback rate
   - Long-term retention

30-second version:

I would define YouTube's goal as healthy engagement with entertaining and educational video content. The three metrics I would choose are average video watch time per user, average number of likes per user, and average number of comments per user. These capture consumption, positive feedback, and active participation. I would not treat them as perfect, though: watch time can reflect addiction or passive browsing, and comments can be negative, so I would pair them with guardrails like user satisfaction, comment sentiment, negative feedback rate, and long-term retention.

中文 30 秒版本：

我会把 YouTube 的目标定义为围绕娱乐性和教育性视频内容的健康用户参与。三个指标可以是每位用户平均观看时长、每位用户平均点赞数、每位用户平均评论数。它们分别衡量内容消费、正向反馈和主动参与。但这些指标并不完美：观看时长可能代表沉迷或被动浏览，评论也可能是负面情绪，所以我会搭配用户满意度、评论情感、负反馈率和长期留存作为 guardrails。

## 7. Common Pitfalls

- Do not answer with vague concepts like engagement. Turn them into concrete metrics.
- If asked for one north star metric, do not give three final options.
- Define the metric precisely.
- Match metric granularity to product scope.
- Do not optimize revenue before user value unless the prompt explicitly asks for monetization.
- Always mention blind spots and guardrails.

