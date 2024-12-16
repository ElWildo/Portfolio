import classes from "./HamburgerIcon.module.scss";
export default function HamburgerIcon() {
  const handleToggleClick = () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  };
  return (
    <div class={classes.hamburger} onClick={handleToggleClick}>
      <span class={classes.line}></span>
      <span class={classes.line}></span>
      <span class={classes.line}></span>
    </div>
  );
}
