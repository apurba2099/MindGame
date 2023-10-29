document.addEventListener("DOMContentLoaded", function () {
    const hideLoadingScreen = () => {
      const loadingScreen = document.querySelector(".loading-screen");
      loadingScreen.style.display = "none";
    };
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.style.display = "block";
    setTimeout(function () {
      hideLoadingScreen();
  
      const emojis = [
        "😁",
        "😁",
        "😢",
        "😢",
        "😍",
        "😍",
        "😉",
        "😉",
        "😎",
        "😎",
        "😘",
        "😘",
        "😊",
        "😊",
        "😂",
        "😂"
      ];
      var shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));
      var openCards = [];
  
      for (var i = 0; i < emojis.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuf_emojis[i];
  
        box.onclick = function () {
          if (
            !this.classList.contains("boxMatch") &&
            !this.classList.contains("boxopen") &&
            openCards.length < 2
          ) {
            this.classList.add("boxopen");
            openCards.push(this);
  
            if (openCards.length === 2) {
              if (openCards[0].innerHTML === openCards[1].innerHTML) {
                openCards[0].classList.add("boxMatch");
                openCards[1].classList.add("boxMatch");
  
                openCards = [];
  
                if (
                  document.querySelectorAll(".boxMatch").length === emojis.length
                ) {
                  setTimeout(function () {
                    alert("🎊Congratulations you win🎊");
                  }, 500);
                }
              } else {
                setTimeout(function () {
                  openCards[0].classList.remove("boxopen");
                  openCards[1].classList.remove("boxopen");
                  openCards = [];
                }, 500);
              }
            }
          }
        };
  
        document.querySelector(".game").appendChild(box);
      }
    }, 3000);
  });
  