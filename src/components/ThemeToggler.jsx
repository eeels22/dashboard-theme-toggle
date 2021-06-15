export default function ThemeToggler() {
  return (
    <div className="ThemeToggler">
      <span className="sub-heading" id="dark-mode">
        Dark mode
      </span>
      <button
        id="button-dark-mode"
        role="switch"
        aria-checked="true"
        aria-labelledby="dark-mode"
      >
        <span>On</span>
        <span>Off</span>
      </button>
    </div>
  );
}
