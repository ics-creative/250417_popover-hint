// ツールチップの開閉を設定する
const setupHints = () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const tooltip = button.parentElement.querySelector(".menu-hint");
      if (tooltip && !tooltip.matches(":popover-open")) {
        tooltip.showPopover();
      }
    });

    button.addEventListener("mouseleave", () => {
      const tooltip = button.parentElement.querySelector(".menu-hint");
      if (tooltip && tooltip.matches(":popover-open")) {
        tooltip.hidePopover();
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
