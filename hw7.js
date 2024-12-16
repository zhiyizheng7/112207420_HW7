// 編輯名稱功能
const nameElement = document.getElementById("user-name");
const editButton = document.getElementById("edit-btn");
let isEditing = false;

editButton.addEventListener("click", () => {
    if (!isEditing) {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "name-input";
        input.value = nameElement.textContent;
        nameElement.textContent = "";
        nameElement.appendChild(input);
        editButton.textContent = "save";
        isEditing = true;
    } else {
        const input = document.getElementById("name-input");
        nameElement.textContent = input.value;
        editButton.textContent = "edit";
        isEditing = false;
    }
});

// 新增音樂功能
const addMusicButton = document.getElementById("add-music-btn");
const addMusicForm = document.getElementById("add-music-form");
const submitMusicButton = document.getElementById("submit-music");
const musicList = document.getElementById("music-list");

addMusicButton.addEventListener("click", () => {
    addMusicForm.style.display = "block";
});

submitMusicButton.addEventListener("click", () => {
    const musicLink = document.getElementById("music-link").value;
    const musicName = document.getElementById("music-name").value;

    if (musicLink && musicName) {
        const musicItem = document.createElement("div");
        musicItem.className = "music-item";

        const img = document.createElement("img");
        img.src = "spotify_icon.png";
        img.alt = musicName;

        const p = document.createElement("p");
        const a = document.createElement("a");
        a.href = musicLink;
        a.textContent = musicName;
        a.target = "_blank";

        p.appendChild(a);
        musicItem.appendChild(img);
        musicItem.appendChild(p);
        musicList.appendChild(musicItem);

        // 清空表單並隱藏
        document.getElementById("music-link").value = "";
        document.getElementById("music-name").value = "";
        addMusicForm.style.display = "none";
    } else {
        alert("Please fill in all fields!");
    }
});
