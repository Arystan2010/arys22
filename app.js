async function loadNews() {
    const status = document.getElementById("status");
    status.textContent = "Загрузка...";

    const region = await getUserRegion();
    status.textContent = "Ваш регион: " + region;

    fetch("data/news.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("news-container");
            container.innerHTML = "";

            data.forEach(news => {
                const item = document.createElement("div");
                item.classList.add("news-item");
                item.innerHTML = <h3>${news.title}</h3><p>${news.content}</p>;
                container.appendChild(item);
            });
        });
}

document.getElementById("update-location").addEventListener("click", loadNews);

loadNews();
