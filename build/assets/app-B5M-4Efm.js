window.onscroll = function () {
    var n = document.querySelectorAll(".display-fadein"), l = function () {
        for (var a = 0; a < n.length; a++) {
            var e = 100;
            window.innerHeight > n[a].getBoundingClientRect().top + e && n[a].classList.add("on")
        }
    };
    window.addEventListener("load", l), window.addEventListener("scroll", l)
};
const t = document.getElementById("hamburger-menu"), c = document.getElementById("hamburger-background"),
    o = document.getElementById("hamburger-button"), i = "hamburger-active";
t != null && setTimeout(function () {
    t.style.display = "block"
}, 500);
if (t != null && c != null && o != null) {
    let n = function (l) {
        l.preventDefault(), u(), setTimeout(function () {
            l.preventDefault()
        }, 500)
    };
    o.addEventListener("click", function (l) {
        o.classList.contains(i) ? u() : (t.style.display = "block", g(), setTimeout(function () {
            t.animate({opacity: "1"}, 500)
        }, 500))
    }), c.addEventListener("click", n), c.addEventListener("touchstart", n), window.addEventListener("resize", function (l) {
        o.classList.contains(i) && (t.style.display = "none", u())
    })
}

function g() {
    t != null && c != null && o != null && (o.classList.toggle(i, !0), t.classList.add(i), c.classList.add(i))
}

function u() {
    t != null && c != null && o != null && (o.classList.toggle(i, !1), t.classList.remove(i), c.classList.remove(i))
}

const d = document.getElementById("loading-main"), r = document.getElementById("btnSend"),
    m = document.getElementById("form"), f = document.getElementById("btnBack");
d != null && window.addEventListener("unload", function (n) {
    d.style.display = "none"
});
d != null && r != null && m != null && r.addEventListener("click", function (n) {
    return r.disabled = !0, setTimeout(function () {
        d.style.display = "block"
    }, 100), m.submit(), !1
});
f != null && f.addEventListener("click", function (n) {
    return history.back(), !1
});
(function () {
    document.querySelectorAll(".simpleModalOpen").forEach(function (e) {
        e.onclick = function () {
            var s = e.getAttribute("data-modal");
            document.getElementById(s).style.display = "block"
        }
    }), document.querySelectorAll(".simpleModalClose").forEach(function (e) {
        e.onclick = function () {
            var s = e.closest(".simpleModal");
            s.style.display = "none"
        }
    });
    const a = document.querySelectorAll(".simpleModal");
    window.onclick = function (e) {
        e.target.className === "simpleModal" && a.forEach(function (s) {
            s.style.display = "none"
        })
    }, a.forEach(function (e) {
        e.addEventListener("touchstart", s => {
            s.target.className === "simpleModal" && (e.style.display = "none")
        })
    })
})();
