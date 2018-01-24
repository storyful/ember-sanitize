import Sanitize from 'sanitize';

function sanitizeElement(element, config) {
  var sanitizer = new Sanitize(config);
  var cleaned = document.implementation.createHTMLDocument('sanitizerdoc').body;

  cleaned.appendChild(sanitizer.clean_node(element));
  return cleaned.innerHTML;
}

function sanitize(html, config) {
  var container = document.implementation.createHTMLDocument('sanitizerdoc').body;
  container.innerHTML = html;
  return sanitizeElement(container, config);
}

export {
  sanitize,
  sanitizeElement
};
