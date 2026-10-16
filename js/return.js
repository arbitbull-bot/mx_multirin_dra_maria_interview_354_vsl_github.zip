(function () {
  'use strict';
  // Keep the current document and video position when the visitor goes Back.
  var marker = '__mxSamePageReturn';
  function arm() {
    var state = Object.assign({}, window.history.state || {});
    state[marker] = true;
    window.history.pushState(state, '', window.location.href);
  }
  try {
    if (!window.history.state || !window.history.state[marker]) arm();
  } catch (error) { return; }
  window.addEventListener('popstate', function () {
    try { arm(); } catch (error) { return; }
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
}());
