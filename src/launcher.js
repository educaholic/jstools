(function () {
  var searchDomain = ".creatorsland.com.br";
  var cookieId = "clref";
  var refVarName = "_ref";

  function findLinkObject(a) {
    return a && a.search && 0 <= a.search(searchDomain) && 0 > window.location.href.search(searchDomain)
  }

  function p(a, b, c) {
    c || (c = window.location.href);

    var e = c.split("#")[1] || "",
      d = c.split("#")[0].split("?")[1] || "";

    c = c.split("#")[0].split("?")[0];

    var h = new RegExp("(" + a + "\x3d([^\x26]*))", "gi"),
      g = "undefined" !== typeof b && null !== b;

    h.test(d) ? d = g ? d.replace(h, a + "\x3d" + b) : d.replace(h, "") : g && (0 < d.length && (d += "\x26"), d +=
      a + "\x3d" + b);
    d && (c += "?" + d);
    e && (c += "#" + e);

    return c
  }

  function _createHiddenField(a, b) {
    var c =
      document.createElement("input");
    c.type = "hidden";
    c.name = a;
    c.value = b;
    return c
  }

  function _addRefToLink(a) {
    a = this.getAttribute("href");
    if (this instanceof HTMLAnchorElement && findLinkObject(a)) {
      var f = libObj.generateRef();
      this.setAttribute("href", p(refVarName, f, a))
    }
  }

  function _addRefToKeyDown(a) {
    var f = this.getAttribute("href");
    a.keyCode === s.DOM_VK_RETURN && this instanceof HTMLAnchorElement && findLinkObject(f) && (a = libObj
      .generateRef(),
      this.setAttribute("href", p(refVarName, a, f)))
  }

  function _addRefToForm(a) {
    if (a.target instanceof HTMLFormElement && "get" === a.target.method && findLinkObject(a.target.action) && !a
      .target._ref) {
      var f =
        libObj.generateRef();
      a.target.appendChild(_createHiddenField(refVarName, f))
    }
  }

  if ("undefined" == typeof s) var s = {
    DOM_VK_RETURN: 13
  };

  if ("undefined" == typeof n) {
    var n = function (a) {
      this.query = a
    };
    n.prototype.get = function (a) {
      return this.query.split("#")[0].replace("?", "").split("\x26").filter(function (a) {
        return !!a
      }).reduce(function (a, b) {
        var e = b.split("\x3d"),
          d = e[1];
        a[e[0]] = d ? decodeURIComponent(d.replace(/\+/g, " ")) : "";
        return a
      }, {})[a]
    }
  }

  window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);


  window.clLib || (window.clLib = {});

  var libObj = window.clLib;

  libObj.getDomain || (libObj.getDomain = function () {
    var a = document.domain;
    return a && a.search && 0 <= a.search(searchDomain) ? searchDomain : a
  });

  libObj.addEventListeners || (libObj.addEventListeners = function () {
    document.querySelectorAll("a[href]").forEach(function (a) {
      a.removeEventListener("mousedown", _addRefToLink);
      a.removeEventListener("keydown", _addRefToKeyDown);
      a.addEventListener("mousedown", _addRefToLink);
      a.addEventListener("keydown", _addRefToKeyDown)
    });
    document.removeEventListener("submit",
      _addRefToForm);
    document.addEventListener("submit", _addRefToForm)
  });

  libObj.getCookie || (libObj.getCookie = function (name) {

    console.log('get cookie: ' + name);

    name += "\x3d";
    try {
      for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
        var e = "undefined" == typeof b[c].trim ? b[c] : b[c].trim();
        if (0 == e.indexOf(name)) return ck = e.substring(name.length, e.length)
      }
    } catch (d) {
      console.error(d.message)
    }
    return null
  });

  libObj.setCookie || (libObj.setCookie = function (name, value, durationDays, domain) {

    console.log('set cookie: ' + name + '= ' + value);
    console.log('domain : ' + domain);

    var d = new Date;
    d.setTime(d.getTime() + (durationDays * 24 * 60 * 60 * 1000)); // convert days to milisseconds
    durationDays = "expires\x3d" + d.toUTCString();
    try {
      document.cookie = name + "\x3d" + value + ";" + durationDays + ";" + ("domain\x3d" + domain) +
        ";path\x3d/;Secure;SameSite\x3dNone"
    } catch (h) {
      idhotobj.util.log(h.message)
    }
  });

  // libObj.getUUID || (libObj.getUUID = function () {
  //   return Math.random().toString(36).substring(2) + (new Date).getTime().toString(36)
  // });


  // libObj.generateSid || (libObj.generateSid = function () {
  //   var a = (new Date).getTime();
  //   return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,
  //     function (b) {
  //       var c = (a + 16 * Math.random()) % 16 | 0;
  //       a = Math.floor(a / 16);
  //       return ("x" == b ? c : c & 3 | 8).toString(16)
  //     })
  // });



  libObj.generateRef || (libObj.generateRef = function () {
    var a = libObj.getCookie(cookieId);
    // return a ? a + "." + Date.now() : null
    return a ? a : null
  });



  // libObj.getPageViewId || (libObj.getPageViewId = function () {
  //   libObj.pageViewId || (libObj.pageViewId = "PV" + libObj.getUUID());
  //   return libObj.pageViewId
  // });

  // libObj.getTraceId || (libObj.getTraceId = function () {
  //   return "LT" +
  //     libObj.getUUID()
  // });

  // libObj.getHotIdJson || (libObj.getHotIdJson = function () {
  //   var a = null;
  //   return a = (a = libObj.getCookie(cookieId)) ? "{" === a[0] ? JSON.parse(a) : JSON.parse(window.atob(a)) : {}
  // });

  // libObj.getHotId || (libObj.getHotId = function () {
  //   var a = libObj.getHotIdJson();
  //   a.pageview_id = libObj.getPageViewId();
  //   a.trace_id = libObj.getTraceId();
  //   return window.btoa(JSON.stringify(a))
  // });



  // libObj.setSid || (libObj.setSid = function () {
  //   var a = libObj.getHotIdJson();
  //   a.sid || (a.sid = libObj.generateSid(), libObj.setCookie(cookieId,
  //     window.btoa(JSON.stringify(a)), 50, libObj.getDomain()))
  // });

  libObj.configRefId || (libObj.configRefId = function () {
    var a;
    a = (new n(window.location.search)).get(refVarName);

    console.log(a);

    if (a) {
      libObj.setCookie(cookieId, a, 50, libObj.getDomain())
    }

    // var f;
    // /^((?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4}))\.\d+$/g.test(a) ? (f = a
    //   .split(".")[1], f = Date.now() - f, f = 0 < f && 12E4 > f) : f = !1;


    // a = f ? a.split(".")[0] : void 0;
    // a ? libObj.setCookie(cookieId, a, 50, libObj.getDomain()) : libObj.setSid()
  });



  libObj.configRefId();
  libObj.addEventListeners();
})();
