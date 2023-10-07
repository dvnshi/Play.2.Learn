let streak = 0;

function increaseStreak() {
  streak++;
  document.getElementById('streakCount').innerText = streak;

  if (streak === 1) {
    document.getElementById('streakCount').style.color = 'yellow';
  }
}
