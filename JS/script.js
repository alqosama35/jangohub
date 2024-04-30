document.addEventListener('DOMContentLoaded', function() {
    const newsForm = document.getElementById('news-form');
    const newsInput = document.getElementById('news-input');
    const newsList = document.getElementById('news-list');

    // عرض الأخبار المحفوظة عند تحميل الصفحة
    displaySavedNews();

    // عند تقديم النموذج، أضف الخبر إلى القائمة
    newsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newsText = newsInput.value;
        if (newsText.trim() !== '') {
            addNews(newsText);
            saveNews(newsText);
            newsInput.value = '';
        }
    });

    // إضافة الخبر إلى القائمة
    function addNews(text) {
        const li = document.createElement('li');
        li.textContent = text;
        newsList.appendChild(li);
    }

    // حفظ الخبر في localStorage
    function saveNews(news) {
        let savedNews = localStorage.getItem('news');
        savedNews = savedNews ? JSON.parse(savedNews) : [];
        savedNews.push(news);
        localStorage.setItem('news', JSON.stringify(savedNews));
    }

    // عرض الأخبار المحفوظة
    function displaySavedNews() {
        const savedNews = JSON.parse(localStorage.getItem('news'));
        if (savedNews) {
            savedNews.forEach(news => {
                addNews(news);
            });
        }
    }
});

document.getElementById("theme").addEventListener("click", function() {
    var currentCSS = document.getElementById("css-link").getAttribute("href");
    if (currentCSS === "CSS/styles.css") {
        document.getElementById("css-link").setAttribute("href", "CSS/stylesdark.css");
    } else {
        document.getElementById("css-link").setAttribute("href", "CSS/styles.css");
    }
  });