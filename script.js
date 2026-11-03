fetch('https://api.github.com/repos/shridarpatil/tring')
  .then(r => r.ok ? r.json() : Promise.reject(r.status))
  .then(d => {
    const n = d.stargazers_count;
    const el = document.getElementById('gh-stars');
    el.innerHTML = ' &nbsp;★ ' + (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : n);
    el.hidden = false;
  })
  .catch(() => {}); // leave the count hidden
