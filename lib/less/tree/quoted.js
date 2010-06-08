if (typeof(require) !== 'undefined' && typeof(__LESS_DIST__) === 'undefined') { var tree = require('less/tree') }

tree.Quoted = function Quoted(value, content) {
    this.value = value;
    this.content = content;
};
tree.Quoted.prototype = {
    toCSS: function () {
        var css = this.value;
        return css;
    },
    eval: function () {
        return this;
    }
};
