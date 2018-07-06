function getFirstElementByClassName(className) {
  var elements, element;
  elements = document.getElementsByClassName(className);
  
  if (elements) {
    element = elements[0];
    return element;
  }
}

window.onload = function () {
  var search = getFirstElementByClassName('search-box--input-text');
  if (search) {
    search.addEventListener('focus', onSearchFormFocus);
    search.addEventListener('blur', onSearchFormBlur);
  }
};