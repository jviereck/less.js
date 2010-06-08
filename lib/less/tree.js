if (typeof(require) !== 'undefined' && typeof(__LESS_DIST__) === 'undefined') { var tree = require('less/tree') }

tree.find = function (obj, fun) {
    for (var i = 0, r; i < obj.length; i++) {
        if (r = fun.call(obj, obj[i])) { return r }
    }
    return null;
};
