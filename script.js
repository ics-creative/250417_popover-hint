document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  console.log("menu buttons", menuButtons);

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
});
