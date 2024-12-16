export default function HamburgerIcon() {
  const handleToggleClick = () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  };
  return (
    <div class="hamburger" onClick={handleToggleClick}>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
  );
}
