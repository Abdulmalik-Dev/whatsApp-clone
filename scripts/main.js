// Cash
let friendCaht = document.querySelectorAll(".friend-chat"),
  targetFriendImg = document.querySelector(".user-info-box img"),
  targetFriendName = document.querySelector("#targetFriend"),
  chatArea = document.querySelector(".chat"),
  chatHeader = document.querySelector(".chat-header"),
  friendsArea = document.querySelector(".friends"),
  friendsHeader = document.querySelector(".friends-header");

friendCaht.forEach((friend) => {
  // On Click On Any Freind
  friend.addEventListener("click", (e) => {
    //   Check If The Click On The container For The Friend Chat Or Not
    if (e.target.classList.contains("friend-chat")) {
      // To Remove Class Active On All Friends' Container
      friendCaht.forEach((el) => el.classList.remove("active"));
      //   Add Class Active To The Target Freind
      e.target.classList.add("active");
      //   Set Freind Image
      targetFriendImg.src = e.target.children[0].src;
      //   Set Freind Name
      targetFriendName.innerHTML = e.target.children[1].children[0].innerHTML;
    }
  });
});

// Back Icon Effect
document.querySelector(".back-icon").addEventListener("click", () => {
  // Hide Chat And Chat Header Part
  chatArea.style.cssText = "opacity: 0";
  chatHeader.style.cssText = "opacity: 0";

  // Appear Friends And Friends Header Part
  friendsArea.style.cssText = "opacity: 1; z-index: 100";
  friendsHeader.style.cssText = "opacity: 1; z-index: 100";

  //   On Click On Any Friend Chat
  friendCaht.forEach((el) =>
    el.addEventListener("click", () => {
      // Appear Chat And Chat Header Part
      chatArea.style.cssText = "opacity: 1; z-index: 100";
      chatHeader.style.cssText = "opacity: 1; z-index: 100";

      // Hide Friends And Friends Header Part
      friendsArea.style.cssText = "opacity: 0";
      friendsHeader.style.cssText = "opacity: 0";
    })
  );
});
