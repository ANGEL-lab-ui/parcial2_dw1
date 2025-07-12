function increment(id) {
  const el = document.getElementById(id);
  el.textContent = parseInt(el.textContent) + 1;
}

function decrement(id) {
  const el = document.getElementById(id);
  const current = parseInt(el.textContent);
  if (current > 0) {
    el.textContent = current - 1;
  }
}

function reset(id) {
  document.getElementById(id).textContent = 0;
}