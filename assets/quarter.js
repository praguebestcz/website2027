(function(){
  const now = new Date();
  const q = Math.floor(now.getMonth() / 3) + 1;
  let nextQ = q + 1, nextYear = now.getFullYear();
  if (nextQ > 4) { nextQ = 1; nextYear++; }
  const label = 'Q' + nextQ + '/' + String(nextYear).slice(-2);
  document.querySelectorAll('.next-q').forEach(el => el.textContent = label);
})();
