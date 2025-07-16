function checkAnswer(answer) {
  const result = document.getElementById('quiz-result');
  if (answer === 'c') {
    result.textContent = '✅ Correct! Paris is the capital of France.';
    result.style.color = 'green';
  } else {
    result.textContent = '❌ Wrong answer. Try again!';
    result.style.color = 'red';
  }
}

function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      const jokeElement = document.getElementById('joke');
      jokeElement.textContent = `${data.setup} - ${data.punchline}`;
      jokeElement.style.color = '#2c3e50';
    })
    .catch(err => {
      document.getElementById('joke').textContent = '⚠️ Could not fetch a joke. Try again later.';
    });
}
