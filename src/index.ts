import html from "./html";

let test = null;
console.log(html`
  <div>
    ${1}

    <a> ${test && "test"} </a>
  </div>
`);
