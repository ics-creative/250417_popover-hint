// ツールチップの開閉を設定する
const setupHints = () => {
  const menuButtons = document.querySelectorAll(".js-menu-button");

  menuButtons.forEach((button) => {
    // mouseenterでツールチップを表示する
    button.addEventListener("mouseenter", () => {
      const tooltip = button.parentElement.querySelector(".js-menu-hint");
      if (tooltip && !tooltip.matches(":popover-open")) {
        tooltip.showPopover();
      }
    });

    button.addEventListener("mouseleave", () => {
      // mouseleaveでツールチップを非表示にする
      const tooltip = button.parentElement.querySelector(".js-menu-hint");
      if (tooltip && tooltip.matches(":popover-open")) {
        tooltip.hidePopover();
      }
    });
  });
};

// トーストの設定
const setupToast = () => {
  const toastButton = document.querySelector(".js-toast-button");

  // ボタン押下でトーストを表示する
  toastButton.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.popover = "manual";
    toast.classList.add("toast", "js-toast");
    const message = document.createElement("p");
    message.textContent = "トーストです！";
    toast.appendChild(message);

    document.body.appendChild(toast);
    toast.showPopover();

    // 2秒後に自動的に非表示にする
    window.setTimeout(() => {
      toast.hidePopover();
      toast.remove();
    }, 2000);

    // 表示/非表示でトーストを並べる
    toast.addEventListener("toggle", (event) => {
      alignToast(event.newState === "closed");
    });
  });

  // トーストを順番に縦に並べる
  const alignToast = (withMoveAnim) => {
    const toasts = document.querySelectorAll(".js-toast");
    toasts.forEach((toast, index) => {
      toast.style.transition = withMoveAnim
        ? "translate 0.2s linear, opacity 0.2s linear"
        : "opacity 0.2s linear";
      toast.style.translate = `-50% ${(60 + 10) * index}px`;
      toast.style.opacity = 1;
    });
  };
};

// リンクのヒントを表示する設定
const setupLinkHint = () => {
  const help = document.querySelector(".js-link-help");
  const hint = document.querySelector(".js-link-hint");

  // mouseenterでツールチップを表示する
  help.addEventListener("mouseenter", () => {
    if (hint && !hint.matches(":popover-open")) {
      hint.showPopover();
    }
  });

  // mouseleaveでツールチップを非表示にする
  help.addEventListener("mouseleave", () => {
    if (hint && hint.matches(":popover-open")) {
      hint.hidePopover();
    }
  });

  // 要素のタップ、キーボードでも操作できるようにする
  help.addEventListener("click", () => {
    if (hint && !hint.matches(":popover-open")) {
      hint.showPopover();
    } else if (hint && hint.matches(":popover-open")) {
      hint.hidePopover();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupHints();
  setupToast();
  setupLinkHint();
});
