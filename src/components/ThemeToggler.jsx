export default function ThemeToggler() {
  return (
    <div>
      <span id="dark-mode">Dark mode</span>
      <button role="switch" aria-checked="true" aria-labelledby="dark-mode">
        <span>On</span>
        <span>Off</span>
      </button>
    </div>
  );
}
