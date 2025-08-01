// You can replace these with AI-generated tips later!
const tips = [
  "Take a few deep breaths — even 60 seconds can calm your nervous system.",
  "It's okay to ask for help. You're not alone.",
  "Try a short walk or stretch when you're feeling overwhelmed.",
  "Limit social media time if it makes you feel anxious.",
  "Write down 3 things you're grateful for today."
];

const tipElement = document.getElementById("tip");
const randomTip = tips[Math.floor(Math.random() * tips.length)];
tipElement.textContent = randomTip;

const stories = [
  "Today I told my friend I needed space, and it felt scary — but also powerful. Respecting my own boundaries matters.",
  "I was really anxious about speaking in class. But I practiced at home, and today I actually raised my hand. Small win, big courage.",
  "My mental health hasn’t been great this week. But I decided to go for a walk and journal, and that helped me clear my mind.",
  "Sometimes I don't feel okay — and that's okay. Talking to someone helps more than bottling it up.",
  "I texted my cousin today to check in. We ended up having a really honest talk. I feel less alone now."
];

const storyElement = document.getElementById("story");
const randomStory = stories[Math.floor(Math.random() * stories.length)];
storyElement.textContent = randomStory;

const selfCareTips = [
  "Start your day with a deep breath and slow stretch.",
  "Put your phone down for 15 minutes and just be present.",
  "Write down one good thing that happened today.",
  "Take 5 minutes to move — stretch, dance, or walk.",
  "Drink a glass of water mindfully, without distractions.",
  "Look in the mirror and say one kind thing to yourself.",
  "Do something creative — doodle, sing, or write something fun.",
  "Spend time outside, even just by an open window.",
  "Turn off notifications and enjoy quiet for a few minutes.",
  "Talk to someone you trust, or check in with yourself through journaling."
];

const selfCareTipElement = document.getElementById("selfCareTip");
const randomSelfCareTip = selfCareTips[Math.floor(Math.random() * selfCareTips.length)];
selfCareTipElement.textContent = randomSelfCareTip;