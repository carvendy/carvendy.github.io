<h1>Archive of posts from {{ page.date | date: "%B %Y" }}</h1>

<ul class="posts">
{% for post in page.posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>