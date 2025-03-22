export default function renderNews(newsItems) {
  return `
    <section id="news">
      <h2 class="section-title">News</h2>
      <div class="search news">
        <input type="search" name="news" placeholder="Search News...">
      </div>
      <div class="container news">
        ${newsItems.map(renderNewsItem).join("")}
      </div>
    </section>
  `;
}

export function renderNewsItem(news) {
  return `
    <div class="news-card">
      <div class="news-title">
        <i class="${news.icon}"></i>
        <h3>${news.title}</h3>
      </div>
      <div class="news-description">
        <p>${news.description}</p>
      </div>
    </div>
  `;
}