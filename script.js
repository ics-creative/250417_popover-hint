// ツールチップの開閉を設定する
const setupHints = () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const hint = button.parentElement.querySelector(".menu-hint");
      if (hint && !hint.matches(":popover-open")) {
        hint.showPopover();
      }
    });

    button.addEventListener("mouseleave", () => {
      const hint = button.parentElement.querySelector(".menu-hint");
      if (hint && hint.matches(":popover-open")) {
        hint.hidePopover();
      }
    });
  });
};

// トーストの設定
const setupToast = () => {
  const toastButton = document.querySelector(".toast-button");

  toastButton.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.popover = "manual";
    toast.classList.add("toast");
    const message = document.createElement("p");
    message.textContent = "トーストです！";
    toast.appendChild(message);

    document.body.appendChild(toast);
    toast.showPopover();

    window.setTimeout(() => {
      toast.hidePopover();
      toast.remove();
    }, 2000)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  setupHints();
  setupToast();
});
