# App Analytics Checklist (GoatCounter)

Gebruik dit bij elke nieuwe app in `apps/<app-naam>/`.

## 1) Voeg het pageview-script toe in `index.html`

Plaats dit vlak voor `</body>`:

```html
<script data-goatcounter="https://hetrechtepadcollege.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

## 2) Voeg een helper toe in `script.js`

```js
function trackEvent(path, title) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, title, event: true });
    return true;
  }
  return false;
}
```

## 3) Track minimaal deze events

- `appnaam/geopend` (app gestart)
- `appnaam/spel-gestart` (eerste actie/startknop)
- `appnaam/antwoord-goed` of `appnaam/antwoord-fout` (kerninteractie)
- `appnaam/spel-afgerond` (resultaat/finish)

## 4) Naamgeving

- Gebruik consistente `path`-namen met prefix van de app, bijvoorbeeld:
  - `koran-app/dag-afgerond`
  - `ramadan-explorer/snelheidsronde-afgerond`
  - `ramadan-quiz/quiz-voltooid`
