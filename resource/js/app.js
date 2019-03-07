    const myTheme = {
    render(state, instance) {
      const container = document.createElement('div')
      container.lang = "en-US"
      container.className = 'gitment-container gitment-root-container'
      container.appendChild(instance.renderHeader(state, instance))
      container.appendChild(instance.renderEditor(state, instance))
      container.appendChild(instance.renderComments(state, instance))
      container.appendChild(instance.renderFooter(state, instance))
      return container
    },
  }

    var href = window.location.href;
    href = href.replace('https://www.carvendy.com','').replace('https://carvendy.com','')
    const gitment = new Gitment({
      id: href,
      owner: 'carvendy',
      repo: 'carvendy.github.io',
      oauth: {
        client_id: '18edbc252ed6f5d5790c',
        client_secret: 'ad80600d4a939bd9b7d60c3df7616aab0fb8695d',
      },
    })
    
    gitment.render('comments')
