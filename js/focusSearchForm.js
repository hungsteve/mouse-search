function onSearchFormFocus() {
  var main = getFirstElementByClassName('main');
  if (main) {
    main.classList.add('main--focus');
  }

  var footer = getFirstElementByClassName('footer');
  if (footer) {
    footer.classList.add('footer--focus');
  }
}

function onSearchFormBlur() {
  var main = getFirstElementByClassName('main');
  if (main) {
    main.classList.remove('main--focus');
  }

  var footer = getFirstElementByClassName('footer');
  if (footer) {
    footer.classList.remove('footer--focus');
  }
}