# Planning

## Components

- **Header**
  - H1 (Social Media Dashboard)
  - P (Total Followers: 23,004)
  - **Theme toggle**
    - span (Dark mode)
    - toggle element
- **FollowerCardList**
  - **FollowerCard**
    - img (social icon)
    - span (Account/Handle)
    - p (# followers)
    - p (FOLLOWERS)
    - p (Change today)
- **OverviewList**
- H1 (Overview - Today)
- **MetricDetailList**
  - **MetricCard**
    - H3 (metric)
    - img (social icon)
    - span (stat)
    - span
      -img (trend)
      - (change)

## Spikes

- CSS custom properties
  - declare these at :root and apply a clas to body
- prefers-color-scheme media query to override

  - https://kilianvalkhof.com/2020/design/your-dark-mode-toggle-is-broken/
  - https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
  - https://inclusive-components.design/toggle-button/

- Context API https://vimalselvam.com/post/toggle-theme-using-react-hooks/

## Accessibility

- Alt text for icons/ titles (screenreader-only text)
- Addition cue for increase/descrease than just color
- Accessible form controls:

  - https://scottaohara.github.io/a11y_styled_form_controls/
  - https://kittygiraudel.com/2021/04/05/an-accessible-toggle/
  - https://inclusive-components.design/toggle-button/
  - https://kittygiraudel.com/2021/04/05/an-accessible-toggle/#button-variant

How you would style the active state is quite up to you, but I’d personally save on writing class attributes to the <span>s with JavaScript. Instead, I’d write some CSS using pseudo classes to target the relevant span dependent on the state.

[role="switch"][aria-checked="true"] :first-child,
[role="switch"][aria-checked="false"] :last-child {
background: #000;
color: #fff;
}

## Resources

- Video, Coder Coder, 'How I research and plan a real-world website project | FEM social media dashboard, Part 1': https://www.youtube.com/watch?v=iL4irerdGdU
