"use strict";
(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([[330], {
    14950: function(e, n, t) {
        t.r(n),
        t.d(n, {
            default: function() {
                return o
            }
        });
        var a = t(27378)
          , r = t(32101)
          , c = t(93631)
          , l = t(62732)
          , s = function(e) {
            var n, t = e.page;
            return a.createElement("article", {
                id: "page-" + t.databaseId,
                className: "page"
            }, a.createElement("section", {
                className: "page__content"
            }, (null === (n = t.gutenbergBlocks) || void 0 === n ? void 0 : n.nodes) && a.createElement(l.M1, {
                blocks: t.gutenbergBlocks.nodes
            })))
        }
          , o = function(e) {
            var n = e.data.page;
            return a.createElement(r.A, null, a.createElement(c.p, n.seo), a.createElement(s, {
                page: n
            }))
        }
    }
}]);
