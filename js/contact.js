var milliseconds = 10000;

function writePlaceholder(field, text, i) {
  if (i < text.length) {
    field.placeholder = text.substring(0, i + 1);
    i++;
    setTimeout(function () {
      writePlaceholder(field, text, i);
    }, 50);
  }
}

function init() {
  const elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    let placeholder = elements[i].placeholder;
    writePlaceholder(elements[i], placeholder, 0);
  }

  setInterval(function () {
    init();
  }, milliseconds);
}

init();

const funs = new Funs();
funs.signature('left');