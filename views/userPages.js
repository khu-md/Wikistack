const html = require("html-template-tag");
const layout = require("./layout");

// why won't user email display?
module.exports = (user, pages) => layout(html`
<div style="height: 50px"></div>
  <h3>Pages written by ${user.name} at ${user.email}</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
      ${pages.map(page => html`<li><a href="/wiki/${page.slug}">${page.title}</a></li>`)}
    </ul>
  </ul>
`);
