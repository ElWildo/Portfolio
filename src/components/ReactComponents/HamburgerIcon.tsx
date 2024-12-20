import classes from "../../styles/HamburgerIcon.module.scss";
export default function HamburgerIcon() {
  const handleToggleClick = () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  };
  return (
    <div class={classes.hamburger + " glass"} onClick={handleToggleClick}>
      <div class={classes.menuTitle}>Menu</div>
    </div>
  );
}
