import classes from "./HamburgerIcon.module.scss";
export default function HamburgerIcon() {
  const handleToggleClick = () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  };
  return (
    <div class={classes.hamburger + " platinum"} onClick={handleToggleClick}>
      <div class={classes.menuTitle}>Menu</div>
    </div>
  );
}
