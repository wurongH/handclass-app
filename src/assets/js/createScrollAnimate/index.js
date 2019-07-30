function e() {
    return false
}
function a(f) {
    b(function(n) {
        f || (f = {});
        var h = n || +new Date(),
        k = f.duration || 500,
        r = h + k,
        i,
        o = f.onChange || e,
        l = f.abort || e,
        j = f.onComplete || e,
        p = f.easing ||
        function(v, u, x, w) {
            return - x * Math.cos(v / w * (Math.PI / 2)) + x + u
        },
        g = "startValue" in f ? f.startValue: 0,
        q = "endValue" in f ? f.endValue: 100,
        s = f.byValue || q - g;
        f.onStart && f.onStart(); (function m(t) {
            if (l()) {
                j(q, 1, 1);
                return
            }
            i = t || +new Date();
            var v = i > r ? k: i - h,
            u = v / k,
            w = p(v, g, s, k),
            x = Math.abs((w - g) / s);
            o(w, x, u);
            if (i > r) {
                f.onComplete && f.onComplete();
                return
            }
            b(m)
        })(h)
    })
}
var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
function(f) {
    return window.setTimeout(f, 1000 / 60)
};
var d = window.cancelAnimationFrame || window.clearTimeout;
function b() {
    return c.apply(window, arguments)
}
export default a;
