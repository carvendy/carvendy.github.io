    const myTheme = {
      render(state, instance) {
        const container = document.createElement('div');
        container.lang = "en-US";
        container.className = 'gitment-container gitment-root-container';
        container.appendChild(instance.renderHeader(state, instance));
        container.appendChild(instance.renderEditor(state, instance));
        container.appendChild(instance.renderComments(state, instance));
        container.appendChild(instance.renderFooter(state, instance));
        return container;
      },
    };


// 是否出现
const comments = document.createElement('comments');
if(comments){
  var href = window.location.href;
  href = href.replace('https://www.carvendy.com','').replace('https://carvendy.com','').replace(/\?(.*)$/,'');
  const gitment = new Gitment({
    id: href,
    owner: 'carvendy',
    repo: 'carvendy.github.io',
    oauth: {
      client_id: '18edbc252ed6f5d5790c',
      client_secret: 'ad80600d4a939bd9b7d60c3df7616aab0fb8695d',
    },
  });
  gitment.render('comments');
}

  function secondToDate(second) {
    if (!second) {
        return 0;
    }

    var time = new Array(0, 0, 0, 0, 0);

    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }  

    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }

    if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
    }

    if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
    }

    if (second > 0) {
        time[4] = second;
    }
    return time;
}

 
//  #动态显示网站运行时间
function addZero(num){
    if(num < 10){
      return "0"+num;
    }
    return num;
}

function setTime() {
    var create_time = Math.round(new Date(Date.UTC(2019, 02, 01, 0, 0, 0)).getTime() / 1000);
    var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
    currentTime = secondToDate((timestamp - create_time));
    currentTimeHtml = '本站已安全运行' + addZero(currentTime[0]) + '年' + addZero(currentTime[1]) + '天' 
        + addZero(currentTime[2]) + '时' + addZero(currentTime[3]) + '分' + addZero(currentTime[4]) + '秒';
    document.getElementById("htmer_time").innerHTML = currentTimeHtml;
}
setInterval(setTime, 1000);