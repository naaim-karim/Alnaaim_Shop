// Section
// Shopping Message
// ===================

const messages = [
  "Shopping isn’t available just yet, but the wait will be worth it! Drop your email, and we’ll notify you when we’re live! 🛍️",
  "We’re cooking up something amazing! Shopping is not open yet, but sign up, and you’ll be the first to know when it is! 🔥",
  "Exciting things are on the way! Shopping is not available yet, but let us keep you in the loop—be the first to know when we launch! ✨",
  "Good things take time! We’re getting ready to launch our store. Want to be the first in line? Sign up for updates! ⏳",
  "Hold tight! Our store isn’t open yet, but we’ll let you know the moment it is! 🚀",
];

document.querySelector(".shopping-message").textContent =
  messages[Math.floor(Math.random() * messages.length)];
