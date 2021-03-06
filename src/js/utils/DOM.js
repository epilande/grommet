// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
function hash(input) {
  var hash = 0, i, chr, len;
  if (input.length === 0) return hash;
  for (i = 0, len = input.length; i < len; i++) {
    chr = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

export default {
  findScrollParents (element, horizontal) {
    var result = [];
    var parent = element.parentNode;
    while (parent && parent.getBoundingClientRect) {
      var rect = parent.getBoundingClientRect();
      // 10px is to account for borders and scrollbars in a lazy way
      if (horizontal) {
        if (rect.width && parent.scrollWidth > (rect.width + 10)) {
          result.push(parent);
        }
      } else {
        if (rect.height && parent.scrollHeight > (rect.height + 10)) {
          result.push(parent);
        }
      }
      parent = parent.parentNode;
    }
    if (result.length === 0) {
      result.push(document);
    }
    return result;
  },

  isDescendant (parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  },

  findAncestor (element, className) {
    var node = element.parentNode;
    while (node != null) {
      if (node.classList && node.classList.contains(className)) {
        break;
      }
      node = node.parentNode;
    }
    return node;
  },

  filterByFocusable (elements) {
    return Array.prototype.filter.call(elements || [], function(element) {
      var currentTag = element.tagName.toLowerCase();
      var validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
      var isValidTag = currentTag.match(validTags) && element.focus;

      if (currentTag === 'a') {
        return isValidTag && element.childNodes.length > 0 && element.getAttribute('href');
      } else if (currentTag === 'svg' || currentTag === 'div') {
        return isValidTag && element.hasAttribute('tabindex');
      }

      return isValidTag;
    });
  },

  getBestFirstFocusable (elements) {
    var bestFirstFocusable;

    Array.prototype.some.call(elements || [], function(element) {
      var currentTag = element.tagName.toLowerCase();
      var isValidTag = currentTag.match(/(input|select|textarea)$/);
      return isValidTag ? ((bestFirstFocusable = element), true) : false;
    });

    if (!bestFirstFocusable) {
      bestFirstFocusable = this.filterByFocusable(elements)[0];
    }

    return bestFirstFocusable;
  },

  isFormElement (element) {
    const elementType = element ? element.tagName.toLowerCase() : undefined;
    return elementType && (
      elementType === 'input' || elementType === 'textarea'
    );
  },

  generateId (element) {
    let id;
    const elementId = element.getAttribute('id');
    if (!elementId) {
      id = hash(element.parentElement.innerHTML);
      element.setAttribute('id', id);
    } else {
      id = elementId;
    }
    return id;
  }
};
