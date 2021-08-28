import classes from "../classes";
import html from "../html";
import styles from "../styles";

test.each([
  () => html`<div></div>`,
  () => {
    const child = html`test`;
    return html`<div>${child}</div>`;
  },
  () => {
    const children = Array.from({length: 5}, (_, index) => html`<li>${index}</li>`);
    return html`
      <ul>${children}</ul>
    `;
  },
  () => {
    const text = 'text';
    return html`<div>${text}</div>`;
  },
  () => {
    const style = {
      width: '100px',
      height: '50px'
    }
    return html`
      <div style=${styles(style)} class=${classes('a', 'b')}></div>
    `
  }
])('html', (func) => {
  expect(func()).toMatchSnapshot()
});
