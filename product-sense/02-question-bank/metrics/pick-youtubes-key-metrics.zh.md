# 选择 YouTube 的关键指标

## 关键术语
- PM：产品经理。
- 北极星指标：体现产品核心价值、可粗略衡量产品成功的关键指标。
- GAME 框架：指标题回答框架，完整版本是澄清问题、定义目标、梳理用户行为、选择指标、评估指标。本文示例主要使用目标、行为、指标、评估四步。
- 情感分析：用自然语言处理方法判断文本倾向是正面、负面还是中性。
- 观看时长：用户观看视频所花的时间。

## 核心复习

这题不是考背 YouTube 的官方指标，而是考你能不能定义产品目标，找出支持目标的用户行为，把行为转化成精确指标，并评估取舍。

![YouTube 关键指标练习截图](../../assets/images/analytical-questions/exercises/youtube-key-metrics.png)
## 课程笔记
### 题目

选择 YouTube 的关键指标

问题：

你是 YouTube Analytics 的 PM。你会选择哪三个关键指标？为什么？

和许多 PM 面试题一样，这道题没有唯一正确答案。你需要给出一个合理答案，并为自己的观点辩护。

#### 复习注解

这题不是考“背 YouTube 的官方指标”，而是考你能不能：

- 定义 YouTube 的产品目标。
- 找出支持目标的用户行为。
- 把行为转化成明确指标。
- 解释为什么这三个指标比其他指标更合适。
- 说明指标的盲点和 guardrails。

### 解题思路

这是一个典型的产品管理指标题。通常不存在某一个永远最适合优化的指标。产品经理经常把最重要的一组指标称为产品的 north star 指标。North star 指标 应该捕捉产品的核心价值，并可以作为粗略判断产品是否成功的 litmus test。

这道题可以使用 GAME framework。它简单而有效。我们要做的是：

Goal：定义产品目标。我们的产品愿景是什么？未来五年希望产品在哪些方面增长？例如，如果我们在 WhatsApp 工作，总体目标可能是提高用户留存。我们希望访问平台的用户能发现有用功能，并持续留在平台上。

Actions：哪些用户行为支持这些目标？例如，哪些功能或行为能驱动 engagement？也许我们希望用户每天至少发送一条消息，因为这类用户往往会在平台上留存几个月。另一个可考虑的行为是 payment：有多少用户升级账户？

指标：明确关注的 actions 后，就要讨论哪些指标能捕捉这些 actions。例如，我们可以追踪升级为 premium 的用户数量，或者一周内每天至少发送一条消息的用户数量。追踪这些指标能帮助我们判断用户是否采取了与产品目标一致的 actions。

Evaluate：和大多数 PM 问题一样，给出答案后还要反思。这个指标是否可能产生 false positive 或 false negative？在哪些情况下，指标看起来是正向的，却会对平台产生负面影响？例如，用户可能升级到 premium，但几天后因为不满意而退款。这些误报或漏报不代表答案错误；它们说明你应该主动指出所选指标的 权衡 和潜在风险。事实上，没有任何单一指标是 foolproof 的。

#### 复习注解

这段可以转化为面试回答的主线：

1. 先说明没有唯一正确答案。
2. 用 GAME 建结构。
3. 把 YouTube 的目标定义为 engagement。
4. 从用户行为中筛出最能代表 engagement 的 actions。
5. 给出三个 per-user average 指标。
6. 评估 watch time 和 comments 的风险。

### 目标

首先，定义 YouTube 作为公司的总体目标。可以选择多种合理目标，它们都可能是好答案。总体来说，YouTube 的目标是向用户提供娱乐性和教育性的视频内容。

YouTube 也有订阅服务 YouTube Premium，用户每月付费后可以访问 premium 和 ad-free content。合理目标可以包括 user retention、user engagement 或更多 video upload time。

在这个答案中，我们选择 user engagement 作为关键方向，因为 YouTube 希望看到用户充分利用平台。

### 用户行为

那么，哪些用户行为与 user engagement 这个目标一致？可以从以下 actions 开始：

- 视频点赞。
- 观看视频。
- 评论视频。
- 点击视频缩略图。
- 将视频加入播放列表。
- 创建播放列表。
- 访问 Youtube.com 页面。

这些都是能够体现平台 engagement 的高层行为。在深入具体指标之前，先从较高层次分析 actions 很重要。否则你可能遗漏重要细节，也可能跳过解释答案所需的中间步骤。

现在，我们要从上面的 actions 中选择一部分，判断哪些对我们最重要，并定义能捕捉这些 actions 的明确指标。

在这个场景里，最重要的用户行为可能是：

- 视频点赞。
- 观看视频。
- 评论视频。

Playlist 指标 虽然有帮助，但它目前更像是 niche feature，无法捕捉 YouTube 作为平台的整体健康度。Clicks 和 visits 有助于判断兴趣，但 likes、comments 和 watches 更能体现用户是否真正喜欢内容并与内容互动。

现在，把这些 actions 重新定义为 指标。这里必须精确：

- Average number of likes clicked per user。
- Average video watch time per user。
- Average number of comments per user。

这些指标都以 per-user averages 的形式定义，目的是清楚反映用户 engagement。

#### 最终指标

1. Average number of likes clicked per user.
2. Average video watch time per user.
3. Average number of comments per user.

### 评估

我们已经定义了三个关键指标，用来衡量与 YouTube 提升 user engagement 目标一致的用户行为。现在，需要思考这些指标的潜在风险和 权衡，这样才能给面试官一个完整答案。

第一个风险：comments 不一定是正向用户指标。发表评论的用户确实是 engaged users，但他们可能是因为感到沮丧、被冒犯，或对内容反感才评论。为了缓解这个问题，可以使用 sentiment analysis tools 分析评论倾向，判断评论整体是正面还是负面。

第二个风险：watch time 被推到极端时，也不一定是正向用户指标。YouTube 当然希望用户活跃，但许多用户可能接近沉迷于 YouTube。如果用户觉得自己花在 YouTube 上的时间是浪费，或者觉得无法控制自己、总是看 YouTube 而没有完成生活中重要的事，那么 YouTube 的强吸引力反而可能成为负面因素。

#### 复习注解

这题的 evaluate 部分很关键，因为三个指标都可能被误读：

- Likes：可能受 UI、推荐曝光、创作者引导影响，不一定完全代表高质量内容。
- Watch time：可能代表沉迷、无聊或低效浏览，不一定代表满意。
- Comments：可能是争议、愤怒或负面情绪，不一定代表正向参与。

可补充的 guardrails：

- User satisfaction survey score。
- Negative feedback rate, such as not interested or dislike signals。
- Comment sentiment score。
- Creator ecosystem health。
- Long-term retention。
- Premium churn or refund rate。

## 30 秒回答
