//its obfuscated script of original site, simple :)
var cbSplit;
if (!cbSplit)cbSplit = function (a, b, c) {
  if ("[object RegExp]" !== Object.prototype.toString.call(b))return cbSplit._nativeSplit.call(a, b, c);
  var d = [], e = 0, g = (b.ignoreCase ? "i" : "") + (b.multiline ? "m" : "") + (b.sticky ? "y" : ""), b = RegExp(b.source, g + "g"), j, h, k, a = a + "";
  cbSplit._compliantExecNpcg || (j = RegExp("^" + b.source + "jQuery(?!\\s)", g));
  if (void 0 === c || 0 > +c)c = Infinity; else if (c = Math.floor(+c), !c)return[];
  for (; h = b.exec(a);) {
    g = h.index + h[0].length;
    if (g > e && (d.push(a.slice(e, h.index)), !cbSplit._compliantExecNpcg && 1 < h.length && h[0].replace(j, function () {
      for (var a = 1; a < arguments.length - 2; a++)void 0 === arguments[a] && (h[a] = void 0)
    }), 1 < h.length && h.index < a.length && Array.prototype.push.apply(d, h.slice(1)), k = h[0].length, e = g, d.length >= c))break;
    b.lastIndex === h.index && b.lastIndex++
  }
  e === a.length ? (k || !b.test("")) && d.push("") : d.push(a.slice(e));
  return d.length > c ? d.slice(0, c) : d
}, cbSplit._compliantExecNpcg = void 0 === /()??/.exec("")[1], cbSplit._nativeSplit = String.prototype.split;
String.prototype.split = function (a, b) {
  return cbSplit(this, a, b)
};
plrree111 = plerer110 = plee109 = pelelelp108 = plelelp107 = plelp106 = plelp104 = plepl105 = topPanelDomain = plelp103 = null;
function flReady() {
  StartInit(null, null)
}
function StartInit() {
  plelp103 = new sdo(server, city);
  plelp104 = qqq41();
  var a = jQuery("#map").find("#map6")[0];
  a.setParameter("geocenter", parseInt(1E6 * center.latitude) + "|" + parseInt(1E6 * center.longitude));
  a.setParameter("city", city);
  a.setParameter("server", server_fl);
  a.setParameter("maptype", maptype);
  a.setParameter("zoom", zoom);
  a.setParameter("key", mkey);
  a.setParameter("showRouteTypeInRow", showRouteTypeInRow);
  a.setParameter("trafficserver", traffic);
  a.setParameter("trafficcity", traffic_city);
  a.setParameter("trafficrefresh", traffic_refresh);
  a.setParameter("NoAnimation", no_animation);
  for (var b in iVehicles)a.setParameter("ivehicle", iVehicles[b]);
  for (var c in routeTypeGeoLineColor) {
    var d = parseInt(routeTypeGeoLineColor[c].substr(1), 16);
    a.setParameter("routeTypeColor", c + "|" + d)
  }
  for (b in routeTypesToPngRules)c = routeTypesToPngRules[b], a.setParameter("routePngRule", c);
  for (b in routeTypesToHiPngRules)c = routeTypesToHiPngRules[b], a.setParameter("routeHiPngRule", c);
  a.startInit();
  jQuery(window).resize(function () {
    jQuery(plelp104.getDiv()).height(jQuery("body").height() - 69 - 79)
  });
  plelp106 = new ithien58;
  plelelp107 = hhh44();
  jQuery(plelelp107.getDiv()).appendTo("body");
  plelelp107.prepearePanel();
  pelelelp108 = ndfghe49();
  jQuery(pelelelp108.getDiv()).appendTo("body");
  plee109 = cmyfpnl29();
  jQuery(plee109.getDiv()).appendTo("body");
  plee109.prepearePanel();
  topPanelDomain = gtrfgtrf53();
  jQuery(topPanelDomain.getDiv()).appendTo("#init_top");
  plepl105 = createBottomPanelDomain();
  jQuery(plepl105.getDiv()).appendTo("#init_bottom");
  plerer110 = new ddd40(plelp104.getMap())
}
function gtrfgtrf53() {
  var a = jQuery("#topPanelDiv")[0];
  return new tttop54(a)
}
function tttop54(a) {
  var b = jQuery(a).find("#topPanelRoutesButton")[0], c = !1, d = jQuery(a).find("#topPanelStationSearchButton")[0], e = !1, g = jQuery(a).find("#topPanelFavButton")[0], j = !1, h = jQuery(a).find("#topPanelHideAll")[0], k = jQuery(a).find("#topPanelHideAllSep")[0], o = jQuery(a).find("#topPanelTraffic")[0], s = !1;
  jQuery(o).click(function () {
    (s = !s) ? jQuery(a).find("#topPanelTraffic").css("background-image", "url('img/traffic_on.png')") : jQuery(a).find("#topPanelTraffic").css("background-image", "url('img/traffic_off.png')");
    plelp104.setTrafficVisibility(s)
  });
  jQuery(h).css("visibility", "hidden");
  jQuery(k).css("visibility", "hidden");
  jQuery(h).click(function () {
    plelp104.clearAll();
    plelp106.clearAll();
    plelelp107.clearAll();
    jQuery(h).css("visibility", "hidden");
    jQuery(k).css("visibility", "hidden")
  });
  var m = !1, q = !1;
  plelp104.errer102("if2", function () {
    jQuery(h).css("visibility", "visible");
    jQuery(k).css("visibility", "visible");
    m = !0
  });
  plelp104.errer102("if1", function () {
    m = !1;
    q || (jQuery(h).css("visibility", "hidden"), jQuery(k).css("visibility", "hidden"))
  });
  plelp106.errer102("if2", function () {
    jQuery(h).css("visibility", "visible");
    jQuery(k).css("visibility", "visible");
    q = !0
  });
  plelp106.errer102("if1", function () {
    q = !1;
    m || (jQuery(h).css("visibility", "hidden"), jQuery(k).css("visibility", "hidden"))
  });
  var p = null;
  jQuery(a).find("#topPanelHideAll").mousedown(function () {
    jQuery(a).find("#topPanelHideAll").css("background-image", "url('img/top_eye_down.png')")
  });
  jQuery(a).find("#topPanelHideAll").mouseup(function () {
    jQuery(a).find("#topPanelHideAll").css("background-image", "url('img/top_eye_up.png')")
  });
  jQuery(a).find("#topPanelHideAll").mouseleave(function () {
    jQuery(a).find("#topPanelHideAll").css("background-image", "url('img/top_eye_up.png')")
  });
  jQuery(b).mouseenter(function () {
  });
  jQuery(b).mouseleave(function () {
  });
  jQuery(b).click(function () {
    c ? plelelp107.hidePanel() : (p == pelelelp108 && pelelelp108.clearAllResults(), null != p && p.hidePanel(), plelelp107.showPanel(), p = plelelp107)
  });
  plelelp107.errer102("routes_panel_showed", function () {
    jQuery(b).css("background-image", "url('img/routes_button_down.png')");
    c = !0
  });
  plelelp107.errer102("routes_panel_hided", function () {
    jQuery(b).css("background-image", "url('img/routes_button_hi.png')");
    c = !1
  });
  jQuery(d).mouseenter(function () {
  });
  jQuery(d).mouseleave(function () {
  });
  jQuery(d).click(function () {
    e ? pelelelp108.hidePanel() : (null != p && p.hidePanel(), pelelelp108.showPanel(), p = pelelelp108)
  });
  pelelelp108.errer102("station_search_panel_shown", function () {
    jQuery(d).css("background-image", "url('img/station_search_button_down.png')");
    e = !0
  });
  pelelelp108.errer102("station_search_panel_hidden", function () {
    jQuery(d).css("background-image", "url('img/station_search_button_hi.png')");
    e = !1
  });
  jQuery(g).mouseenter(function () {
  });
  jQuery(g).mouseleave(function () {
  });
  jQuery(g).click(function () {
    j ? plee109.hidePanel() : (p == pelelelp108 && pelelelp108.clearAllResults(), null != p && p.hidePanel(), plee109.showPanel(), p = plee109)
  });
  plee109.errer102("fav_panel_shown", function () {
    jQuery(g).css("background-image", "url('img/fav_button_down.png')");
    j = !0
  });
  plee109.errer102("fav_panel_hidden", function () {
    jQuery(g).css("background-image", "url('img/fav_button_hi.png')");
    j = !1
  });
  this.getHeight = function () {
    return jQuery(a).height()
  };
  this.getDiv = function () {
    return a
  }
}
function qqq41() {
  var a = jQuery("#map")[0];
  return new rrr42(a)
}
onRouteShownFl = function (a) {
  a = a.split("|");
  plelp103.gmgmgrt20ByNumType(a[1], a[0]).reer101("if5");
  plelp104.visibleLinesCount++;
  plelp104.reer101("if2")
};
onRouteHiddenFl = function (a) {
  a = a.split("|");
  plelp103.gmgmgrt20ByNumType(a[1], a[0]).reer101("GeoLineHided");
  plelp104.visibleLinesCount--;
  if (0 >= plelp104.visibleLinesCount)plelp104.visibleLinesCount = 0, plelp104.reer101("if1")
};
function rrr42(a) {
  oe.call(this);
  this.visibleStationsCount = this.visibleLinesCount = 0;
  var b = jQuery(a).find("#map6")[0];
  this.fobj = b;
  var c = {};
  this.setTrafficVisibility = function (a) {
    !0 === a ? b.setTrafficVisibility("1") : b.setTrafficVisibility("0")
  };
  var d = function (a) {
    var b;
    if (!a)return!1;
    if (!a.hasOwnProperty("srcElement") && !a.hasOwnProperty("target") && !$.browser.mozilla)return!1;
    if (a.srcElement)b = a.srcElement; else if (a.target)b = a.target;
    if ("object" == b.nodeName.toLowerCase() || "embed" == b.nodeName.toLowerCase()) {
      if ("clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" == b.getAttribute("classid"))return!0;
      if ("application/x-shockwave-flash" == b.getAttribute("type"))return!0
    }
    return!1
  }, e = function (a) {
    var c;
    if (d(a) && b) {
      if (!a)a = window.event;
      a.wheelDelta ? c = -a.wheelDelta : a.detail && (c = a.detail / 3);
      b.handleWheel({x:a.screenX, y:a.screenY, delta:c, ctrlKey:a.ctrlKey, altKey:a.altKey, shiftKey:a.shiftKey})
    }
  };
  window.addEventListener && window.addEventListener("DOMMouseScroll", e, !1);
  window.onmousewheel = document.onmousewheel = e;
  this.clearAll = function () {
    b.clearAll();
    this.visibleLinesCount = this.visibleStationsCount = 0
  };
  this.setStationHighlight = function (a, c) {
    var d = parseInt(1E6 * a.latitude), e = parseInt(1E6 * a.longitude), o = parseInt(1E6 * a.latitude2), s = parseInt(1E6 * a.longitude2);
    b.setHighlightSearchStation(a.id + "|" + a.name + "|" + a.description + "|" + a.type + "|" + d + "|" + e + "|" + o + "|" + s + "|" + c)
  };
  this.showStation = function (a) {
    this.visibleStationsCount++;
    this.reer101("if2");
    var d = parseInt(1E6 * a.latitude), e = parseInt(1E6 * a.longitude), k = parseInt(1E6 * a.latitude2), o = parseInt(1E6 * a.longitude2);
    void 0 == c[a.id + "_" + a.type] && (a.errer102("StSelected", function () {
      b.setHighlightSearchStation(a.id + "|" + a.name + "|" + a.description + "|" + a.type + "|" + d + "|" + e + "|" + k + "|" + o + "|1")
    }), a.errer102("if4", function () {
      b.setHighlightSearchStation(a.id + "|" + a.name + "|" + a.description + "|" + a.type + "|" + d + "|" + e + "|" + k + "|" + o + "|0")
    }), c[a.id + "_" + a.type] = a);
    b.showSearchStation(a.id + "|" + a.name + "|" + a.description + "|" + a.type + "|" + d + "|" + e + "|" + k + "|" + o)
  };
  this.hideStation = function (a) {
    this.visibleStationsCount--;
    if (0 >= this.visibleStationsCount)this.reer101("if1"), this.visibleStationsCount = 0;
    var c = parseInt(1E6 * a.latitude), d = parseInt(1E6 * a.longitude), e = parseInt(1E6 * a.latitude2), o = parseInt(1E6 * a.longitude2);
    b.hideSearchStation(a.id + "|" + a.name + "|" + a.description + "|" + a.type + "|" + c + "|" + d + "|" + e + "|" + o)
  };
  this.showRoute = function (a) {
    b.showRoute(a.name + "|" + a.type + "|" + a.num + "|" + a.id1 + "|" + a.id2)
  };
  this.hideRoute = function (a) {
    b.hideRoute(a.name + "|" + a.type + "|" + a.num + "|" + a.id1 + "|" + a.id2)
  };
  this.setCenter = function (a) {
    a = parseInt(1E6 * a.latitude).toString() + "|" + parseInt(1E6 * a.longitude).toString();
    b.setCenter(a)
  };
  this.getMap = function () {
    return map
  };
  this.setZoom = function (a) {
    b.setZoom(a.toString())
  };
  this.getZoom = function () {
    return map.getZoom()
  };
  this.getDiv = function () {
    return a
  };
  e = new google.maps.LatLng(54.619797717849536, 39.7320556640625);
  new google.maps.InfoWindow({content:jQuery("#stationForecastWindowTemplate")[0], position:e});
  new Vehicle(1, "\u0410 445 \u0421\u0410", 54.619797717849536, 39.7320556640625, 0, 0, "\u0410", 55);
  new Station(1, "\u0414\u043e\u043c \u0445\u0443\u0434\u043e\u0436\u043d\u0438\u043a\u0430", 54.61989771784953, 39.7322556640625, 54.61389771784954, 39.7352556640625, "\u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043b\u0435\u043d\u0438\u043d\u0430", 0)
}
function createBottomPanelDomain() {
  var a = jQuery("#bottomPanelDiv")[0];
  return new BottomPanelDomain(a)
}
function BottomPanelDomain(a) {
  this.getHeight = function () {
    return jQuery(a).height()
  };
  this.getDiv = function () {
    return a
  }
}
onRouteVehiclesShownFl = function (a) {
  a = a.split("|");
  plelp103.gmgmgrt20ByNumType(a[1], a[0]).reer101("VehiclesShown");
  plelp106.reer101("if2");
  plelp106.visibleRoutesCount++
};
onRouteVehiclesHiddenFl = function (a) {
  a = a.split("|");
  plelp103.gmgmgrt20ByNumType(a[1], a[0]).reer101("if12");
  plelp106.visibleRoutesCount--;
  0 >= plelp106.visibleRoutesCount && plelp106.reer101("if1")
};
function ithien58() {
  oe.call(this);
  this.visibleRoutesCount = 0;
  this.startDisplayAllVehicles = function (a) {
    var b = plelp104.fobj, c = "", d;
    for (d in a)var e = a[d], c = c + (";" + e.name + "|" + e.type + "|" + e.num + "|" + e.id1 + "|" + e.id2);
    c = c.substr(1);
    b.showAllRoutesVehicles(c)
  };
  this.startDisplayVehicles = StartDisplayVehicles = function (a) {
    plelp104.fobj.showRouteVehicles(a.name + "|" + a.type + "|" + a.num + "|" + a.id1 + "|" + a.id2)
  };
  this.clearAll = function () {
    this.visibleRoutesCount = 0
  };
  this.stopDisplayVehicles = function (a) {
    plelp104.fobj.hideRouteVehicles(a.name + "|" + a.type + "|" + a.num + "|" + a.id1 + "|" + a.id2)
  }
}
function hhh44() {
  var a = jQuery("#routesPanelDiv")[0];
  return new nnnfd45(a)
}
var isRoutesLoaded = !1, isMapReady = !1;
function flMapReady() {
  isMapReady = !0;
  showAllOnStart && isRoutesLoaded && plelelp107.setShowAllCheck(!0)
}
function jsRoutesLoaded() {
  isRoutesLoaded = !0;
  showAllOnStart && isMapReady && plelelp107.setShowAllCheck(!0)
}
function nnnfd45(a) {
  function b(a, b, f) {
    var i = a.substr(b, f), l = a.substring(0, b), a = a.substring(b + f, a.length);
    return l + '<span class="highlight">' + i + "</span>" + a
  }

  oe.call(this);
  var c = this, d = {}, e = {}, g = {}, j = [], h = jQuery(a).find("#showAllCheck")[0];
  this.isShowAll = !1;
  var k = function (a) {
    c.isShowAll && s(!1);
    plelp106.startDisplayVehicles(a)
  }, o = function (a) {
    plelp106.stopDisplayVehicles(a)
  };
  this.clearAll = function () {
    jQuery(h).css("background-image", "url('img/check_no.png')");
    c.isShowAll = !1
  };
  var s = function (a) {
    if (a)jQuery(h).css("background-image", "url('img/check_yes.png')"), plelp103.gmear3(function (a) {
      plelp106.startDisplayAllVehicles(a);
      c.isShowAll = !0;
      for (var b in a)g[a[b].getKey()].setCheckAndState(!1, !1, !0);
      plee109.setCheckAndStateAllRouteItems(!1, !1, !0)
    }); else {
      jQuery(h).css("background-image", "url('img/check_no.png')");
      plelp103.gmear3(function (a) {
        for (var b in a)plelp106.stopDisplayVehicles(a[b])
      });
      c.isShowAll = !1;
      for (var b in j)g[j[b].getKey()].setCheckAndState(!1, !1);
      plee109.setCheckAndStateAllRouteItems(!1, !1, !1)
    }
  };
  this.setShowAllCheck = s;
  jQuery(h).click(function () {
    c.isShowAll = !c.isShowAll;
    s(c.isShowAll)
  });
  jQuery(a).css("visibility", "hidden");
  jQuery(a).find("#routesPanelSearchInput")[0].value = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430";
  jQuery(a).find("#routesPanelSearchInput").focus(function () {
    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430" == jQuery(this).attr("value") && jQuery(this).attr("value", "")
  });
  jQuery(a).find("#routesPanelSearchInput").blur(function () {
    "" == jQuery(this).attr("value") && jQuery(this).attr("value", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")
  });
  this.prepearePanel = function () {
    var b = jQuery("body").height();
    $.browser.msie ? jQuery(a).css("height", b - 60 - 79 - 3) : jQuery(a).css("height", b - 60 - 79);
    $.browser.msie ? jQuery(a).find("#routesPanelBlocks").css("height", b - 60 - 79 - 46) : jQuery(a).find("#routesPanelBlocks").css("height", b - 60 - 79 - 40);
    jQuery(a).css("left", "0px");
    jQuery(a).css("top", 79);
    jQuery(a).css("visibility", "hidden")
  };
  this.showPanel = function () {
    jQuery(a).css("left", "0px");
    var b = topPanelDomain.getHeight();
    jQuery(a).css("top", b);
    var f = plepl105.getHeight(), i = jQuery("body").height();
    $.browser.msie ? jQuery(a).css("height", i - f - b - 3) : jQuery(a).css("height", i - f - b);
    $.browser.msie ? jQuery(a).find("#routesPanelBlocks").css("height", i - f - b - 46 - 28) : jQuery(a).find("#routesPanelBlocks").css("height", i - f - b - 40 - 28);
    jQuery(a).css("visibility", "visible");
    this.reer101("routes_panel_showed")
  };
  this.hidePanel = function () {
    jQuery(a).css("left", "0px");
    var b = topPanelDomain.getHeight();
    jQuery(a).css("top", b);
    jQuery(a).css("visibility", "hidden");
    this.reer101("routes_panel_hided")
  };
  var m = function (a, f) {
    if (-1 != a.num.toLowerCase().indexOf(f.toLowerCase())) {
      var i = jQuery(e[a.type][a.id].panel).find("#routesPanelBlockLineName").html(), i = b(i, i.toLowerCase().indexOf(f.toLowerCase()), f.length);
      jQuery(e[a.type][a.id].panel).find("#routesPanelBlockLineName").html(i)
    }
    -1 != a.end1.toLowerCase().indexOf(f.toLowerCase()) && (i = jQuery(e[a.type][a.id].panel).find("#routesPanelBlockLineFrom").html(), i = b(i, i.toLowerCase().indexOf(f.toLowerCase()), f.length), jQuery(e[a.type][a.id].panel).find("#routesPanelBlockLineFrom").html(i));
    -1 != a.end2.toLowerCase().indexOf(f.toLowerCase()) && (i = jQuery(e[a.type][a.id].panel).find("#routesPanelBlockLineTo").html(), i = b(i, i.toLowerCase().indexOf(f.toLowerCase()), f.length), jQuery(e[a.type][a.id].panel).find("#routesPanelBlockLineTo").html(i))
  }, q = {}, p = function (a, b) {
    var f = jQuery(d[a.type]), i = qwer46(a);
    g[a.getKey()] = i;
    i.wantToHide = o;
    i.wantToShow = k;
    i.prepeareForShowing();
    q[a.getKey()] = i;
    jQuery(i.getDiv()).appendTo(f.find("#routesPanelBlockItems")[0]);
    f = {};
    f.route = a;
    f.panel = i.getDiv();
    f.ord = b;
    j.push(a);
    return f
  };
  this.getDiv = function () {
    return a
  };
  var r = function (a, b, f) {
    for (var i = !0, l = 0; l < a.length; l++) {
      for (var c = 0; c < b.length; c++)if (b[c].id == a[l].id) {
        var i = !1, n = e[b[c].type][b[c].id].panel, o = b[c];
        jQuery(n).find("#routesPanelBlockLineName").html(o.num);
        jQuery(n).find("#routesPanelBlockLineFrom").html(o.end1);
        jQuery(n).find("#routesPanelBlockLineTo").html(o.end2);
        m(b[c], f)
      }
      if (i)jQuery(e[a[l].type][a[l].id].panel).remove(), e[a[l].type][a[l].id].panel = "removed";
      i = !0
    }
    i = !0;
    for (c = 0; c < b.length; c++) {
      for (l = 0; l < a.length; l++)b[c].id == a[l].id && (i = !1);
      if (i) {
        "hidden" == jQuery(d[b[c].type]).css("visibility") && (i = d[b[c].type], jQuery(i).css("margin-bottom", "20px"), jQuery(i).css("overflow", "auto"), jQuery(i).css("visibility", "inherit"), jQuery(i).css("height", "auto"), jQuery(i).find("#routePanelBlockHeader").css("height", "40px"), jQuery(i).find("#routePanelBlockHeader").find("img").css("height", "auto"), jQuery(i).find("#routePanelBlockHeader").find("img").css("margin-top", "5px"), jQuery(i).find("#routePanelBlockHeader").find("span").css("height", "auto"), jQuery(i).find("#routePanelBlockHeader").find("span").css("margin-top", "7px"), jQuery(i).find("#routePanelBlockHeader").find("span").css("font-size", "18px"));
        i = b[c];
        l = f;
        n = jQuery(d[i.type]);
        if (void 0 !== q[i.getKey()])var k = q[i.getKey()];
        k.prepeareForShowing();
        e[i.type][i.id].panel = k.getDiv();
        var n = n.find("#routesPanelBlockItems")[0], o = k.getDiv(), g = i, j = e[g.type][g.id].ord, s = [], p = void 0;
        for (p in e[g.type])if (e[g.type][p].ord < j && "removed" != e[g.type][p].panel)s[e[g.type][p].ord] = e[g.type][p].panel;
        0 == s.length ? jQuery(n).prepend(o) : jQuery(s[s.length - 1]).after(o);
        m(i, l)
      }
      i = !0
    }
  }, i = function (b, i) {
    if ("@SEARCH_DECLINED" != i) {
      var f = {}, l;
      for (l in d)l && (f[l] = 0);
      for (l = 0; l < i.length; l++)f[i[l].type] += 1;
      for (var c in d)0 == f[c] && (jQuery(d[c]).css("visibility", "hidden"), jQuery(d[c]).css("height", "0px"), jQuery(d[c]).find("#routePanelBlockHeader").css("height", "0px"), jQuery(d[c]).find("#routePanelBlockHeader").find("img").css("height", "0px"), jQuery(d[c]).find("#routePanelBlockHeader").find("img").css("margin-top", "0px"), jQuery(d[c]).find("#routePanelBlockHeader").find("span").css("height", "0px"), jQuery(d[c]).find("#routePanelBlockHeader").find("span").css("margin-top", "0px"), jQuery(d[c]).find("#routePanelBlockHeader").find("span").css("font-size", "0px"), jQuery(d[c]).css("margin-bottom", "0px"), jQuery(d[c]).css("overflow", "hidden"), jQuery(d[c]).css("margin-top", "0px"));
      d.hasOwnProperty("Nothing") && (jQuery(d.Nothing).remove(), delete d.Nothing);
      0 != i.length ? (r(j, i, b), j = i) : (f = jQuery("#routesPanelBlockTemplate").clone().appendTo(jQuery(a).find("#routesPanelBlocks")), f.html("<span style='color: #000;font-family: trebuchet MS;font-size: 14px;font-weight:bold;margin-left:10px;'>\u041d\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0439 \u0444\u0440\u0430\u0437\u0435 \"" + b + '"</span>'), d.Nothing = f[0], r(j, i, ""), j = [])
    } else d.hasOwnProperty("Nothing") && (jQuery(d.Nothing).remove(), delete d.Nothing, j = []), plelp103.gmear3(n)
  }, n = function (a) {
    r(j, a, "");
    j = a
  }, f = function () {
    if ("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430" != jQuery(a).find("#routesPanelSearchInput")[0].value) {
      var b = trim(jQuery(a).find("#routesPanelSearchInput")[0].value).replace(/["]+/g, "");
      plelp103.asrts25(b, i)
    }
  };
  jQuery(a).find("#routesPanelSearchButton").click(function () {
    f()
  });
  jQuery(a).find("#routesPanelSearchButton").mousedown(function () {
    jQuery(a).find("#routesPanelSearchButton")[0].src = "img/search_down.png"
  });
  jQuery(a).find("#routesPanelSearchButton").mouseup(function () {
    jQuery(a).find("#routesPanelSearchButton")[0].src = "img/search.png"
  });
  jQuery(a).find("#routesPanelSearchInput").keyup(function () {
    f()
  });
  var l = function (a) {
    var b = null, i;
    for (i in a) {
      var f = {};
      if (0 != a[i].length) {
        for (var b = a[i][0].type, l = 0; l < a[i].length; l++)f[a[i][l].id] = p(a[i][l], l);
        e[b] = f
      }
    }
    plelp103.gmear3(function (a) {
      j = a;
      jsRoutesLoaded()
    })
  };
  plelp103.gart1(function (b) {
    for (var i in b) {
      var f = new RouteType(b[i].typeId, b[i].typeName, b[i].typeShName);
      if (!d[f.type]) {
        var c = jQuery("#routesPanelBlockTemplate").clone().appendTo(jQuery(a).find("#routesPanelBlocks"));
        c.attr("id", "routesPanelBlockTemplate" + f.id.toString());
        d[f.type] = c[0];
        e[f.type] = {};
        c.find("#routesPanelBlockIco")[0].src = routeTypesBlockIcons[f.type];
        c.find("#routesPanelBlockName").html(f.name);
        c.find("#routesPanelBlockName").addClass("blockHeader" + routeTypesBlockStylePostfix[f.type])
      }
    }
    plelp103.gar2(l)
  })
}
function trim(a) {
  for (var a = a.replace(/^\s+/, ""), b = a.length; 0 <= --b;)if (/\S/.test(a.charAt(b))) {
    a = a.substring(0, b + 1);
    break
  }
  return a
}
function qwer46(a) {
  var b = jQuery("#routesPanelBlockLineTemplate").clone(!0);
  b.attr("id", "routesPanelBlockLineTemplate" + a.id.toString());
  b.find("#routesPanelBlockLineTagIco").css("background-image", "url('" + routeTypesLineTags[a.type] + "')");
  b.find("#routesPanelBlockLineName").html(a.num.toLowerCase());
  b.find("#routesPanelBlockLineFrom").html(a.end1);
  b.find("#routesPanelBlockLineTo").html(a.end2);
  return new RoutesPanelItem(b[0], a)
}
function RoutesPanelItem(a, b) {
  var c = this, d = jQuery(a).find("#routesPanelBlockLineGeo")[0], e = !1, g = jQuery(a).find("#routesPanelBlockLineCheck")[0], j = !1, h = jQuery(a).find("#routesPanelBlockLineFav")[0], k = !1;
  this.setCheckAndState = function (a, b, c) {
    j = b;
    a ? jQuery(g).css("background-image", "url('img/check_yes.png')") : jQuery(g).css("background-image", "url('img/check_no.png')");
    !0 === c && jQuery(g).css("background-image", "url('img/check_gray.png')")
  };
  this.prepeareForShowing = function () {
    jQuery(g).click(function () {
      j ? void 0 != c.wantToHide && c.wantToHide(b) : void 0 != c.wantToShow && c.wantToShow(b)
    });
    jQuery(d).click(function () {
      e ? plelp104.hideRoute(b) : plelp104.showRoute(b)
    });
    jQuery(h).click(function () {
      k ? plelp103.delRouteFromFavorites(b) : plelp103.addRouteToFavorites(b)
    })
  };
  plelp103.idirtif14(b) ? (jQuery(h).css("background-image", "url('img/left_fav_button_down.png')"), k = !0) : (jQuery(h).css("background-image", "url('img/left_fav_button_up.png')"), k = !1);
  b.errer102("VehiclesShown", function () {
    j = !0;
    jQuery(g).css("background-image", "url('img/check_yes.png')")
  });
  b.errer102("if12", function () {
    j = !1;
    jQuery(g).css("background-image", "url('img/check_no.png')")
  });
  b.errer102("AddedToFav", function () {
    k = !0;
    jQuery(h).css("background-image", "url('img/left_fav_button_down.png')")
  });
  b.errer102("RemovedFromFav", function () {
    k = !1;
    jQuery(h).css("background-image", "url('img/left_fav_button_up.png')")
  });
  b.errer102("if5", function () {
    e = !0;
    jQuery(d).css("background-image", "url('" + routeTypeGeoLineButtonDownIco[b.type] + "')")
  });
  b.errer102("GeoLineHided", function () {
    e = !1;
    jQuery(d).css("background-image", "url('img/route_line_button_up.png')")
  });
  this.getDiv = function () {
    return a
  }
}
function ndfghe49() {
  var a = jQuery("#stationSearchPanelDiv")[0];
  return new alskd50(a)
}
function alskd50(a) {
  oe.call(this);
  var b = {}, c = [];
  currentStationIndex = 0;
  jQuery(a).css("visibility", "hidden");
  jQuery(a).find("#stationSearchPanelInput")[0].value = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430";
  jQuery(a).find("#stationSearchPanelInput").focus(function () {
    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430" == jQuery(this).attr("value") && jQuery(this).attr("value", "")
  });
  jQuery(a).find("#stationSearchPanelInput").blur(function () {
    "" == jQuery(this).attr("value") && jQuery(this).attr("value", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")
  });
  this.showPanel = function () {
    jQuery(a).css("left", "0px");
    var b = topPanelDomain.getHeight();
    jQuery(a).css("top", b);
    var c = plepl105.getHeight(), d = jQuery("body").height();
    $.browser.msie ? jQuery(a).css("height", d - c - b - 3) : jQuery(a).css("height", d - c - b);
    $.browser.msie ? jQuery(a).find("#stationSearchPanelBlocks").css("height", d - c - b - 46) : jQuery(a).find("#stationSearchPanelBlocks").css("height", d - c - b - 40);
    jQuery(a).css("visibility", "visible");
    this.reer101("station_search_panel_shown")
  };
  this.hidePanel = function () {
    jQuery(a).css("left", "0px");
    var b = topPanelDomain.getHeight();
    jQuery(a).css("top", b);
    jQuery(a).css("visibility", "hidden");
    this.reer101("station_search_panel_hidden")
  };
  var d = function (b, c) {
    var d = 1 != b.type ? 0 : 1, e = jQuery(a).find("#stationSearchBlockItemTemplate" + b.id.toString() + "_" + d).find("#stationSearchBlockItemName").html(), k = e.toLowerCase().indexOf(c.toLowerCase()), g = c.length, i = e.substr(k, g), n = e.substring(0, k), e = e.substring(k + g, e.length);
    jQuery(a).find("#stationSearchBlockItemTemplate" + b.id.toString() + "_" + d).find("#stationSearchBlockItemName").html(n + '<span class="highlight">' + i + "</span>" + e)
  }, e = function (a) {
    var d = jQuery(b[1 != a.type ? 0 : 1]), a = qpzrmic51(a);
    a.errer102("WasClicked", function (a) {
      for (var b = 0; b < c.length && !(c[b] == a); b++);
      c[currentStationIndex].reer101("if4");
      currentStationIndex = b;
      c[currentStationIndex].reer101("StSelected");
      plelp104.setCenter(new Position(c[currentStationIndex].latitude, c[currentStationIndex].longitude))
    });
    jQuery(a.getDiv()).appendTo(d.find("#stationSearchBlockItems")[0])
  };
  this.getDiv = function () {
    return a
  };
  var g = function (a) {
    var c = {}, d;
    for (d in b)d && (c[d] = 0);
    for (d = 0; d < a.length; d++) {
      var e = 1 != a[d].type ? 0 : 1;
      c[e] += 1
    }
    for (var k in b)0 == c[k] && (jQuery(b[k]).css("visibility", "hidden"), jQuery(b[k]).css("height", "0px"), jQuery(b[k]).find("#stationPanelBlockHeader").css("height", "0px"), jQuery(b[k]).find("#stationPanelBlockHeader").find("img").css("height", "0px"), jQuery(b[k]).find("#stationPanelBlockHeader").find("img").css("margin-top", "0px"), jQuery(b[k]).find("#stationPanelBlockHeader").find("span").css("height", "0px"), jQuery(b[k]).find("#stationPanelBlockHeader").find("span").css("margin-top", "0px"), jQuery(b[k]).find("#stationPanelBlockHeader").find("span").css("font-size", "0px"), jQuery(b[k]).css("margin-bottom", "0px"), jQuery(b[k]).css("overflow", "hidden"), jQuery(b[k]).css("margin-top", "0px"))
  }, j = function (c, k, g) {
    for (var j = !0, h = 0; h < c.length; h++) {
      for (var r = 0; r < k.length; r++)if (k[r].id == c[h].id && k[r].type == c[h].type) {
        var j = !1, i = c[h], n = 1 != i.type ? 0 : 1, f, l = jQuery(a).find("#stationSearchBlockItemTemplate" + i.id.toString() + "_" + n).find("#stationSearchBlockItemName").html();
        if (-1 != l.toLowerCase().indexOf("<span")) {
          f = l.substring(0, l.toLowerCase().indexOf("<span"));
          var t = l.substring(l.toLowerCase().indexOf(">") + 1, l.toLowerCase().indexOf("</span>")), l = l.substring(l.toLowerCase().indexOf("</span>") + 7, l.length);
          f = f + t + l
        } else f = l;
        jQuery(a).find("#stationSearchBlockItemTemplate" + i.id.toString() + "_" + n).find("#stationSearchBlockItemName").html(f);
        d(c[h], g)
      }
      j && (j = 1 != c[h].type ? 0 : 1, jQuery(a).find("#stationSearchBlockItemTemplate" + c[h].id.toString() + "_" + j).remove());
      j = !0
    }
    j = !0;
    for (r = 0; r < k.length; r++) {
      for (h = 0; h < c.length; h++)k[r].id == c[h].id && k[r].type == c[h].type && (j = !1);
      if (j) {
        1 != k[r].type ? (j = 0, i = "\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438") : (j = 1, i = "\u0422\u0440\u0430\u043c\u0432\u0430\u0439\u043d\u044b\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438");
        if (b.hasOwnProperty(j))"hidden" == jQuery(b[j]).css("visibility") && (h = b[j], jQuery(h).css("margin-bottom", "20px"), jQuery(h).css("overflow", "auto"), jQuery(h).css("visibility", "inherit"), jQuery(h).css("height", "auto"), jQuery(h).find("#stationPanelBlockHeader").css("height", "40px"), jQuery(h).find("#stationPanelBlockHeader").find("img").css("height", "auto"), jQuery(h).find("#stationPanelBlockHeader").find("img").css("margin-top", "5px"), jQuery(h).find("#stationPanelBlockHeader").find("span").css("height", "auto"), jQuery(h).find("#stationPanelBlockHeader").find("span").css("margin-top", "7px"), jQuery(h).find("#stationPanelBlockHeader").find("span").css("font-size", "18px")); else if (h = j, j = i, !b[h])i = jQuery("#stationSearchBlockTemplate").clone().appendTo(jQuery(a).find("#stationSearchPanelBlocks")), b[h] = i[0], i.find("#stationSearchBlockIco")[0].src = stationSearchBlockIcons[h], i.find("#stationSearchBlockName").html(j), i.find("#stationSearchBlockName").addClass("blockSearchHeader" + h);
        e(k[r]);
        d(k[r], g)
      }
      j = !0
    }
  }, h = function (d, e) {
    var k = e;
    if ("@SEARCH_DECLINED" != k)if (b.hasOwnProperty(2) && (jQuery(b[2]).remove(), delete b[2]), g(k), 0 != k.length) {
      j(c, k, d);
      c = k;
      for (var h in c)plelp104.showStation(c[h]);
      currentStationIndex = 0;
      c[currentStationIndex].reer101("StSelected");
      plelp104.setCenter(new Position(c[currentStationIndex].latitude, c[currentStationIndex].longitude));
      plelp104.setZoom(16)
    } else h = jQuery("#stationSearchBlockTemplate").clone().appendTo(jQuery(a).find("#stationSearchPanelBlocks")), h.html("<span style='color: #000;font-family: trebuchet MS;font-size: 14px;font-weight:bold;margin-left:10px;'>\u041d\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0439 \u0444\u0440\u0430\u0437\u0435 \"" + d + '"</span>'), b[2] = h[0], j(c, k, ""), c = []; else b.hasOwnProperty(2) && (jQuery(b[2]).remove(), delete b[2]), k = [], g(k), j(c, k, ""), c = []
  }, k = function () {
    if ("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430" != jQuery(a).find("#stationSearchPanelInput")[0].value) {
      for (var b = jQuery(a).find("#stationSearchPanelInput")[0].value, b = b.replace(/^\s+/, ""), d = b.length; 0 <= --d;)if (/\S/.test(b.charAt(d))) {
        b = b.substring(0, d + 1);
        break
      }
      var b = b.replace(/["]+/g, ""), k;
      for (k in c)c[k].reer101("if4"), plelp104.hideStation(c[k]);
      plelp103.searchStations(b, h)
    }
  };
  this.clearAllResults = function () {
    jQuery(a).find("#stationSearchPanelInput")[0].value = "";
    k()
  };
  jQuery(a).find("#stationSearchPanelButton").click(function () {
    k()
  });
  jQuery(a).find("#stationSearchPanelInput").keyup(function (a) {
    "38" == a.which ? 0 != c.length && (0 != currentStationIndex && currentStationIndex--, c[currentStationIndex].reer101("StSelected"), c[currentStationIndex + 1].reer101("if4"), a = jQuery("#stationSearchPanelBlocks").scrollTop(), jQuery("#stationSearchPanelBlocks").scrollTop(a - 36), plelp104.setCenter(new Position(c[currentStationIndex].latitude, c[currentStationIndex].longitude))) : "40" == a.which ? 0 != c.length && (currentStationIndex != c.length - 1 && currentStationIndex++, c[currentStationIndex].reer101("StSelected"), 0 != currentStationIndex && c[currentStationIndex - 1].reer101("if4"), 1 < currentStationIndex && (a = jQuery("#stationSearchPanelBlocks").scrollTop(), jQuery("#stationSearchPanelBlocks").scrollTop(a + 36)), plelp104.setCenter(new Position(c[currentStationIndex].latitude, c[currentStationIndex].longitude))) : "13" == a.which ? 0 != c.length && plerer110.showForecastWindow(c[currentStationIndex]) : k()
  });
  new Station(12, "\u041c\u0438\u0440\u043d\u0430\u044f", 51.741905, 36.194072, 51.742583, 36.194168, "\u0412 \u0446\u0435\u043d\u0442\u0440", 0);
  new Station(13, "\u041c\u0438\u0440\u043d\u0430\u044f", 51.741905, 36.194072, 51.742583, 36.194168, "\u0412 \u0446\u0435\u043d\u0442\u0440", 1)
}
function qpzrmic51(a) {
  var b = 1 != a.type ? 0 : 1, c = jQuery("#stationSearchBlockItemTemplate").clone(!0);
  c.attr("id", "stationSearchBlockItemTemplate" + a.id.toString() + "_" + b);
  c.find("#stationSearchBlockItemTagIco").css("background-image", "url('" + stationTypesItemTags[b] + "')");
  c.find("#stationSearchBlockItemFav").attr("id", "stationSearchBlockItemFav" + a.id.toString() + "_" + b);
  c.find("#stationSearchBlockItemForecast").attr("id", "stationSearchBlockItemForecast" + a.id.toString() + "_" + b);
  c.find("#stationSearchBlockItemName").html(a.name);
  c.find("#stationSearchBlockItemDescription").html(a.description);
  return new StationPanelItem(c[0], a)
}
function StationPanelItem(a, b) {
  oe.call(this);
  var c = this, d = jQuery(a).find("#stationSearchBlockItemFav" + b.id.toString() + "_" + b.type)[0], e = !1, g = jQuery(a).find("#stationSearchBlockItemForecast" + b.id.toString() + "_" + b.type)[0];
  b.errer102("StSelected", function () {
    var b = jQuery(a).find("#stationSearchBlockItemBackLine");
    b.css("background-image", "url('img/line_back_hi_x.png')");
    b = jQuery(a).find("#stationSearchBlockItemEndTag");
    b.css("background-image", "url('img/line_endbookmark_hi.png')");
    b = jQuery(a).find("#lineGrad");
    b.css("background-image", "url('img/line_grad_hi.png')")
  });
  b.errer102("if4", function () {
    var b = jQuery(a).find("#stationSearchBlockItemBackLine");
    b.css("background-image", "url('img/line_back_x.png')");
    b = jQuery(a).find("#stationSearchBlockItemEndTag");
    b.css("background-image", "url('img/line_endbookmark.png')");
    b = jQuery(a).find("#lineGrad");
    b.css("background-image", "url('img/line_grad.png')")
  });
  jQuery(a).click(function () {
    c.reer101("WasClicked", [b])
  });
  plelp103.isinif13(b) ? (jQuery(d).css("background-image", "url('img/left_fav_button_down.png')"), e = !0) : (jQuery(d).css("background-image", "url('img/left_fav_button_up.png')"), e = !1);
  b.errer102("AddedToFavorites", function () {
    jQuery(d).css("background-image", "url('img/left_fav_button_down.png')");
    e = !0
  });
  b.errer102("RemovedFromFavorites", function () {
    jQuery(d).css("background-image", "url('img/left_fav_button_up.png')");
    e = !1
  });
  jQuery(d).click(function () {
    e ? plelp103.delFromFavorites(b) : plelp103.addToFavorites(b)
  });
  jQuery(g).mousedown(function () {
    jQuery(g).css("background-image", "url('img/station_forecast_button_down.png')")
  });
  jQuery(g).mouseup(function () {
    jQuery(g).css("background-image", "url('img/station_forecast_button_up.png')")
  });
  jQuery(g).mouseleave(function () {
    jQuery(g).css("background-image", "url('img/station_forecast_button_up.png')")
  });
  jQuery(g).click(function () {
    plerer110.showForecastWindow(b)
  });
  this.getDiv = function () {
    return a
  }
}
function cmyfpnl29() {
  var a = jQuery("#favoritesPanelDiv")[0];
  return new FavoritesPanelDomain(a)
}
function FavoritesPanelDomain(a) {
  oe.call(this);
  var b = {};
  jQuery(a).css("visibility", "hidden");
  var c = {};
  this.setCheckAndStateAllRouteItems = function (a, b, d) {
    for (var e in c)c[e].setCheckAndState(a, b, d)
  };
  var d = function (a) {
    plelelp107.isShowAll && plelelp107.setShowAllCheck(!1);
    plelp106.startDisplayVehicles(a)
  }, e = function (a) {
    plelp106.stopDisplayVehicles(a)
  };
  this.prepearePanel = function () {
    var b = jQuery("body").height();
    $.browser.msie ? jQuery(a).css("height", b - 60 - 79 - 3) : jQuery(a).css("height", b - 60 - 79);
    $.browser.msie ? jQuery(a).find("#favoritesPanelBlocks").css("height", b - 60 - 79 - 12) : jQuery(a).find("#favoritesPanelBlocks").css("height", b - 60 - 79 - 8);
    jQuery(a).css("left", "0px");
    jQuery(a).css("top", 79);
    jQuery(a).css("visibility", "hidden")
  };
  this.showPanel = function () {
    jQuery(a).css("left", "0px");
    var b = topPanelDomain.getHeight();
    jQuery(a).css("top", b);
    var c = plepl105.getHeight(), d = jQuery("body").height();
    $.browser.msie ? jQuery(a).css("height", d - c - b - 3) : jQuery(a).css("height", d - c - b);
    $.browser.msie ? jQuery(a).find("#favoritesPanelBlocks").css("height", d - c - b - 12) : jQuery(a).find("#favoritesPanelBlocks").css("height", d - c - b - 8);
    jQuery(a).css("visibility", "visible");
    this.reer101("fav_panel_shown")
  };
  this.hidePanel = function () {
    jQuery(a).css("left", "0px");
    var b = topPanelDomain.getHeight();
    jQuery(a).css("top", b);
    jQuery(a).css("visibility", "hidden");
    this.reer101("fav_panel_hidden")
  };
  var g = function (c, d) {
    if (!b[c]) {
      var e = jQuery("#favoritesBlockTemplate").clone().appendTo(jQuery(a).find("#favoritesPanelBlocks"));
      b[c] = e[0];
      e.find("#favoritesBlockIco")[0].src = favBlockIcons[c];
      e.find("#favoritesBlockName").html(d);
      e.find("#favoritesBlockName").addClass("blockFavHeader" + c)
    }
  }, j = function (a) {
    var c = jQuery(b[0]), a = createFavStationPanelItem(a);
    jQuery(a.getDiv()).appendTo(c.find("#favoritesBlockItems")[0])
  }, h = function (a) {
    var h = jQuery(b[1]), g = createFavRoutePanelItem(a);
    c[a.getKey()] = g;
    g.wantToHide = e;
    g.wantToShow = d;
    jQuery(g.getDiv()).appendTo(h.find("#favoritesBlockItems")[0])
  };
  this.getDiv = function () {
    return a
  };
  g(0, "\u041c\u043e\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438");
  g(1, "\u041c\u043e\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b");
  plelp103.errer102("if9", function (a) {
    j(a)
  });
  plelp103.errer102("if8", function (a) {
    jqline = jQuery("#favoritesStationBlockItemTemplate" + a.id + "_" + a.type);
    jqline.remove()
  });
  plelp103.errer102("if7", function (a) {
    h(a)
  });
  plelp103.errer102("if6", function (a) {
    jqline = jQuery("#routesFavPanelBlockLineTemplate" + a.getKey());
    jqline.remove();
    delete c[a.getKey()]
  });
  (function () {
    plelp103.ggcg6Content(function (a) {
      if ("No_results" != a)for (var b in a)j(a[b])
    });
    plelp103.grccnt18(function (a) {
      if ("No_results" != a)for (var b in a) {
        var c = plelp103.gmgmgrt20(a[b].type + "-" + a[b].num, a[b].name, a[b].num, a[b].end1, a[b].end2, a[b].type, a[b].id1, a[b].id2);
        h(c)
      }
    })
  })()
}
function createFavStationPanelItem(a) {
  var b = 1 != a.type ? 0 : 1, c = jQuery("#favoritesStationBlockItemTemplate").clone(!0);
  c.attr("id", "favoritesStationBlockItemTemplate" + a.id.toString() + "_" + b);
  c.find("#favoritesBlockItemTagIco").css("background-image", "url('" + stationTypesItemTags[b] + "')");
  c.find("#favoritesBlockItemName").html(a.name);
  c.find("#favoritesBlockItemDescription").html(a.description);
  return new FavStationPanelItem(c[0], a)
}
function FavStationPanelItem(a, b) {
  jQuery(a).find("#favoritesBlockItemRemove").click(function () {
    plelp103.delFromFavorites(b)
  });
  jQuery(a).find("#favoritesBlockItemForecast").mousedown(function () {
    jQuery(a).find("#favoritesBlockItemForecast").css("background-image", "url('img/station_forecast_button_down.png')")
  });
  jQuery(a).find("#favoritesBlockItemForecast").mouseup(function () {
    jQuery(a).find("#favoritesBlockItemForecast").css("background-image", "url('img/station_forecast_button_up.png')")
  });
  jQuery(a).find("#favoritesBlockItemForecast").click(function () {
    plerer110.showForecastWindow(b)
  });
  this.getDiv = function () {
    return a
  }
}
function createFavRoutePanelItem(a) {
  var b = jQuery("#routesFavPanelBlockLineTemplate").clone(!0);
  b.attr("id", "routesFavPanelBlockLineTemplate" + a.getKey());
  b.find("#routesPanelBlockLineTagIco").css("background-image", "url('" + routeTypesLineTags[a.type] + "')");
  b.find("#routesPanelBlockLineName").html(a.num.toLowerCase());
  b.find("#routesPanelBlockLineFrom").html(a.end1);
  b.find("#routesPanelBlockLineTo").html(a.end2);
  return new FavRoutePanelItem(b[0], a)
}
function FavRoutePanelItem(a, b) {
  var c = this, d = jQuery(a).find("#favoritesBlockLineGeo")[0], e = !1, g = jQuery(a).find("#routesPanelBlockLineCheck")[0], j = !1;
  jQuery(a).find("#favoritesBlockItemRemove").click(function () {
    plelp103.delRouteFromFavorites(b)
  });
  this.setCheckAndState = function (a, b, c) {
    j = b;
    a ? jQuery(g).css("background-image", "url('img/check_yes.png')") : jQuery(g).css("background-image", "url('img/check_no.png')");
    !0 === c && jQuery(g).css("background-image", "url('img/check_gray.png')")
  };
  jQuery(g).click(function () {
    j ? void 0 != c.wantToHide && c.wantToHide(b) : void 0 != c.wantToShow && c.wantToShow(b)
  });
  jQuery(d).click(function () {
    e ? plelp104.hideRoute(b) : plelp104.showRoute(b)
  });
  b.vehvisible ? (j = !0, jQuery(g).css("background-image", "url('img/check_yes.png')")) : (j = !1, jQuery(g).css("background-image", "url('img/check_no.png')"));
  b.linevisible ? (e = !0, jQuery(d).css("background-image", "url('" + routeTypeGeoLineButtonDownIco[b.type] + "')")) : (e = !1, jQuery(d).css("background-image", "url('img/route_line_button_up.png')"));
  b.errer102("VehiclesShown", function () {
    j = !0;
    jQuery(g).css("background-image", "url('img/check_yes.png')")
  });
  b.errer102("if12", function () {
    j = !1;
    jQuery(g).css("background-image", "url('img/check_no.png')")
  });
  b.errer102("if5", function () {
    e = !0;
    jQuery(d).css("background-image", "url('" + routeTypeGeoLineButtonDownIco[b.type] + "')")
  });
  b.errer102("GeoLineHided", function () {
    e = !1;
    jQuery(d).css("background-image", "url('img/route_line_button_up.png')")
  });
  this.getDiv = function () {
    return a
  }
}
function oe() {
  var a = !1, b = !1;
  this.Events = {};
  this.errer102 = function (a, b) {
    this.Events[a] || (this.Events[a] = []);
    this.Events[a].push(b)
  };
  this.RemoveHandler = function (a, b) {
    for (var e = this.Events[a], g = []; 0 < e.length;) {
      var j = e.shift();
      j != b && g.push(j)
    }
    this.Events[a] = g
  };
  this.reer101 = function (c, d) {
    if (!b && (a = !0, void 0 === d && (d = []), this.Events.hasOwnProperty(c))) {
      for (var e = 0; e < this.Events[c].length; e++) {
        var g = this.Events[c][e];
        if (!(void 0 == g || null == g))try {
          g.apply(this, d)
        } catch (j) {
          alert(j.description)
        }
      }
      a = !1;
      b && this.Free()
    }
  };
  this.FreeEvents = function () {
    for (var a in this.Events)for (; 0 < this.Events[a].length;)this.Events[a].pop()
  };
  this.Free = function () {
    a ? b = !0 : this.FreeEvents()
  }
}
function Station(a, b, c, d, e, g, j, h) {
  oe.call(this);
  this.id = a;
  this.name = b;
  this.latitude = c;
  this.longitude = d;
  this.latitude2 = e;
  this.longitude2 = g;
  this.description = j;
  this.type = h;
  this.size = 2;
  this.getKey = function () {
    return this.id + "_" + this.type
  }
}
function Forecast(a, b, c, d, e, g, j, h) {
  this.stationId = a;
  this.vehicleId = b;
  this.seconds = c;
  this.latitude = d;
  this.longitude = e;
  this.latitude2 = g;
  this.longitude2 = j;
  this.type = h
}
function Route(a, b, c, d, e, g, j, h) {
  oe.call(this);
  this.id = a;
  this.name = b;
  this.num = c;
  this.end1 = d;
  this.end2 = e;
  this.type = g;
  this.id1 = j;
  this.id2 = h;
  this.vehvisible = this.linevisible = !1;
  this.errer102("if5", function () {
    this.linevisible = !0
  });
  this.errer102("GeoLineHided", function () {
    this.linevisible = !1
  });
  this.errer102("VehiclesShown", function () {
    this.vehvisible = !0
  });
  this.errer102("if12", function () {
    this.vehvisible = !1
  });
  this.getKey = function () {
    return this.type + "-" + this.num
  }
}
function RouteType(a, b, c) {
  oe.call(this);
  this.id = a;
  this.name = b;
  this.type = c
}
function Vehicle(a, b, c, d, e, g, j, h) {
  oe.call(this);
  this.id = a;
  this.gosnum = b;
  this.lat = c;
  this.lng = d;
  this.direction = e;
  this.speed = g;
  this.routeType = j;
  this.routeNum = h;
  this.size = 0
}
function Position(a, b) {
  this.latitude = a;
  this.longitude = b
}
isStationInFavoritesFl = function (a) {
  a = a.split("|");
  a = plelp103.giveMeStationBy(a[0], a[1]);
  return plelp103.isinif13(a) ? "1" : "0"
};
function traceToJS(a) {
  alert(a)
}
function addStationToDomainFl(a) {
  var b = a.split("|"), a = b[0], c = b[1], d = b[2], e = b[3], g = parseInt(b[4]) / 1E6, j = parseInt(b[5]) / 1E6, h = parseInt(b[6]) / 1E6, b = parseInt(b[7]) / 1E6;
  plelp103.giveMeStation(parseInt(a), c, g, j, h, b, d, e)
}
function sdo(a, b) {
  oe.call(this);
  this.serverAdress = a;
  var c = this, d = [];
  this.localRepository = d;
  var e = [];
  this.localRtRepository = e;
  var g = void 0;
  this.vehRequest = g;
  var j = "undefined", h = function (a, b, f) {
    for (var c = -1, d = 0; d < a.length; d++)a[d].id == b && a[d].type == f && (c = d);
    return c
  }, k = function (a, b) {
    for (var f = -1, c = 0; c < a.length; c++)a[c].id == b && (f = c);
    return f
  }, o = function (a) {
    for (var b = {}, a = a.split(/@ST=|;/g), f = 1; f < a.length;) {
      var c = {};
      c.type = a[f + 1];
      c.name = a[f + 2];
      c.desc = a[f + 3];
      c.longit = a[f + 4];
      c.latit = a[f + 5];
      c.longit2 = a[f + 6];
      c.latit2 = a[f + 7];
      b[a[f]] = c;
      f += 8
    }
    return b
  }, s = function (a) {
    for (var b = {}, a = a.split(/@ROUTE=|;/g), f = 1; f < a.length;) {
      var c = {};
      c.name = a[f + 1];
      c.num = a[f + 2];
      c.end1 = a[f + 3];
      c.end2 = a[f + 4];
      c.type = a[f + 5];
      c.id1 = a[f + 6];
      c.id2 = a[f + 7];
      b[a[f]] = c;
      f += 8
    }
    return b
  };
  this.gart1 = function (a, c) {
    c = c || !1;
    $.post(this.serverAdress + "searchAllRouteTypes.php?city=" + b + "&r=" + Math.random(), {},
      function (b) {
        a(b)
      }, "json").error(function () {
      c && c()
    })
  };
  this.gar2 = function (a, c) {
    c = c || !1;
    $.post(this.serverAdress + "searchAllRoutes.php?city=" + b + "&r=" + Math.random(), {},
      function (b) {
        var c = {}, d;
        for (d in b) {
          var n = s(b[d]), h = [], g;
          for (g in n)if (-1 == k(e, g)) {
            var j = new Route(n[g].type + "-" + n[g].num, n[g].name, n[g].num, n[g].end1, n[g].end2, n[g].type, n[g].id1, n[g].id2);
            e.push(j);
            h.push(j)
          } else h.push(e[k(e, g)]);
          c[d] = h
        }
        a(c)
      }, "json").error(function () {
      c && c()
    })
  };
  this.gmear3 = function (a) {
    a(e)
  };
  this.lgrg4 = function (a, c, f) {
    f = f || !1;
    $.post(this.serverAdress + "searchDotsForRoute.php?city=" + b + "&r=" + Math.random(), {userRtId1:a.id1, userRtId2:a.id2, userRtType:a.type},
      function (b) {
        for (var f = [
          [],
          []
        ], d = 0; d < b[0].length; d++) {
          var e = new Position(b[0][d].lat, b[0][d].lon);
          f[0].push(e)
        }
        if ("-" != b[1])for (d = 0; d < b[1].length; d++)e = new Position(b[1][d].lat, b[1][d].lon), f[1].push(e); else f[1] = b[1];
        c(f, a)
      }, "json").error(function () {
      f ? f() : alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430!")
    })
  };
  this.rbvg5 = function (a, c, f) {
    for (var f = f || !1, d = "", e = "", h = 0; h < a.length; h++)d = d + "@i" + a[h].id1 + "&" + a[h].type + "&" + a[h].id, e = e + "@i" + a[h].id2;
    g = $.post(this.serverAdress + "searchVehiclesOnRoute.php?city=" + b + "&r=" + Math.random(), {userRtIds1:d, userRtIds2:e},
      function (a) {
        var b = [], f;
        for (f in a) {
          for (var i = 0; i < a[f].rtVehicles[0].length; i++) {
            var d = a[f].rtVehicles[0][i], d = new Vehicle(d.vId, "", d.vLat, d.vLon, d.vDirect, 0, d.vType, d.vrtNum);
            b.push(d)
          }
          if ("-" != a[f].rtVehicles[1])for (i = 0; i < a[f].rtVehicles[1].length; i++)d = a[f].rtVehicles[1][i], d = new Vehicle(d.vId, "", d.vLat, d.vLon, d.vDirect, 0, d.vType, d.vrtNum), b.push(d)
        }
        g = void 0;
        c(b)
      }, "json").error(function () {
      g = void 0;
      f && f()
    })
  };
  var m = function (a) {
    var a = a + "=", b = document.cookie.indexOf(a);
    if (-1 == b)return"null";
    var c = document.cookie.indexOf(";", b + a.length);
    if (-1 == c)c = document.cookie.length;
    return unescape(document.cookie.substring(b + a.length, c))
  }, q = function (a, b, c, d, e, g) {
    document.cookie = a + "=" + escape(b) + (c ? "; expires=" + c : "") + (d ? "; path=" + d : "") + (e ? "; domain=" + e : "") + (g ? "; secure" : "")
  }, p = function (a, b, c) {
    if (m(a))document.cookie = a + "=" + (b ? "; path=" + b : "; path=/") + (c ? "; domain=" + c : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
  };
  this.cfsth8 = function () {
    p("FavStat2" + b)
  };
  this.ClearFavRtList = function () {
    p("FavRoutes2" + b)
  };
  this.rememberRoute = function (a, c) {
    var f = "inLinesShown" == c ? m("LinesShown" + b) : m("VehiclesShown" + b);
    if ("null" != f) {
      var d = !1, e = "inLinesShown" == c ? m("LinesShown" + b) : m("VehiclesShown" + b);
      "null" != e && "" != e && -1 != e.indexOf(a.id) && (d = !0);
      !1 == d && (f = "" != f ? f + ";" + a.id : f + a.id, d = new Date, d.setDate(365 + d.getDate()), "inLinesShown" == c ? q("LinesShown" + b, f, d.toGMTString()) : q("VehiclesShown" + b, f, d.toGMTString()))
    } else d = new Date, d.setDate(365 + d.getDate()), "inLinesShown" == c ? q("LinesShown" + b, a.id, d.toGMTString()) : q("VehiclesShown" + b, a.id, d.toGMTString())
  };
  this.rtfgt11 = function (a, c) {
    var f = "inLinesShown" == c ? m("LinesShown" + b) : m("VehiclesShown" + b);
    if ("null" != f && "" != f) {
      var d = a.id + ";", f = f.replace(d, ""), d = ";" + a.id, f = f.replace(d, ""), d = a.id, f = f.replace(d, ""), d = new Date;
      d.setDate(365 + d.getDate());
      "inLinesShown" == c ? q("LinesShown" + b, f, d.toGMTString()) : q("VehiclesShown" + b, f, d.toGMTString())
    }
  };
  this.grgrrt12 = function (a, c) {
    var f = "inLinesShown" == c ? m("LinesShown" + b) : m("VehiclesShown" + b);
    "null" != f && "" != f ? $.post(this.serverAdress + "searchFavRoutes.php?city=" + b + "&r=" + Math.random(), {userFavRtList:f}, function (b) {
      b = s(b);
      a(b)
    }) : a("No_results")
  };
  this.isinif13 = function (a) {
    var c = !1, f = m("FavStat2" + b);
    if ("null" != f && "" != f) {
      var d = 1 != parseInt(a.type) ? 0 : 1;
      -1 != f.indexOf(";" + a.id + "_" + d) && (c = !0);
      0 == f.indexOf(a.id + "_" + d) && (c = !0)
    }
    return c
  };
  this.idirtif14 = function (a) {
    var c = !1, f = "\u0422\u0440" != a.type ? 0 : 1, d = m("FavRoutes2" + b);
    "null" != d && "" != d && (-1 != d.indexOf(";" + a.id + "_" + f) && (c = !0), 0 == d.indexOf(a.id + "_" + f) && (c = !0));
    return c
  };
  this.addToFavorites = function (a) {
    var d = !1, f = m("FavStat2" + b), e = 1 != a.type ? 0 : 1;
    "null" != f ? !1 == c.isinif13(a) && (e = "" != f ? f + ";" + a.id + "_" + e : f + a.id + "_" + e, d = new Date, d.setDate(365 + d.getDate()), q("FavStat2" + b, e, d.toGMTString()), d = !0) : (d = new Date, d.setDate(365 + d.getDate()), q("FavStat2" + b, a.id + "_" + e, d.toGMTString()), d = !0);
    a.reer101("AddedToFavorites");
    this.reer101("if9", [a]);
    return d
  };
  this.addRouteToFavorites = function (a) {
    var d = !1, f = m("FavRoutes2" + b), e = "\u0422\u0440" != a.type ? 0 : 1;
    "null" != f ? !1 == c.idirtif14(a) && (e = "" != f ? f + ";" + a.id + "_" + e : f + a.id + "_" + e, d = new Date, d.setDate(365 + d.getDate()), q("FavRoutes2" + b, e, d.toGMTString()), d = !0) : (d = new Date, d.setDate(365 + d.getDate()), q("FavRoutes2" + b, a.id + "_" + e, d.toGMTString()), d = !0);
    a.reer101("AddedToFav");
    this.reer101("if7", [a]);
    return d
  };
  this.delFromFavorites = function (a) {
    var c = !1, d = m("FavStat2" + b);
    if ("null" != d) {
      if ("" != d) {
        var c = 0 != a.type ? 0 : 1, d = d.replace(";" + a.id + "_" + c + ";", ";"), e = ";" + a.id + "_" + c;
        d.indexOf(e) == d.length - e.length && (d = d.replace(e, ""));
        e = a.id + "_" + c + ";";
        0 == d.indexOf(e) && (d = d.replace(e, ""));
        d == a.id + "_" + c && (d = "");
        c = new Date;
        c.setDate(365 + c.getDate());
        q("FavStat2" + b, d, c.toGMTString())
      }
      c = !0;
      a.reer101("RemovedFromFavorites");
      this.reer101("if8", [a])
    }
    return c
  };
  this.delRouteFromFavorites = function (a) {
    var c = !1, d = "\u0422\u0440" != a.type ? 0 : 1, e = m("FavRoutes2" + b);
    "null" != e && "" != e && (e = e.replace(";" + a.id + "_" + d + ";", ";"), c = ";" + a.id + "_" + d, e.indexOf(c) == e.length - c.length && (e = e.replace(c, "")), c = a.id + "_" + d + ";", 0 == e.indexOf(c) && (e = e.replace(c, "")), e == a.id + "_" + d && (e = ""), d = new Date, d.setDate(365 + d.getDate()), q("FavRoutes2" + b, e, d.toGMTString()), c = !0, this.reer101("if6", [a]));
    a.reer101("RemovedFromFav");
    return c
  };
  this.ggcg6Content = function (a) {
    var c = m("FavStat2" + b);
    "null" != c && "" != c ? $.post(this.serverAdress + "searchFavStations.php?city=" + b + "&r=" + Math.random(), {userFavStList:c}, function (b) {
      var b = o(b), c = [], e;
      for (e in b)if (-1 == h(d, e, b[e].type)) {
        var g = new Station(e, b[e].name, b[e].latit / 1E6, b[e].longit / 1E6, b[e].latit2 / 1E6, b[e].longit2 / 1E6, b[e].desc, b[e].type);
        d.push(g);
        c.push(g)
      } else c.push(d[h(d, e, b[e].type)]);
      a(c)
    }) : a("No_results")
  };
  this.grccnt18 = function (a) {
    var c = m("FavRoutes2" + b);
    "null" != c && "" != c ? $.post(this.serverAdress + "searchFavRoutes.php?city=" + b + "&r=" + Math.random(), {userFavRtList:c}, function (b) {
      b = s(b);
      a(b)
    }) : a("No_results")
  };
  this.giveMeStation = function (a, b, c, e, g, j, k, m) {
    -1 == h(d, a, m) ? (a = new Station(a, b, c, e, g, j, k, m), d.push(a)) : a = d[h(d, a, m)];
    return a
  };
  this.giveMeStationBy = function (a, b) {
    for (var c = 0; c < d.length; c++) {
      var e = d[c];
      if (e.id == a && e.type == b)return e
    }
    return null
  };
  this.gmgmgrt20 = function (a, b, c, d, g, h, j, m) {
    -1 == k(e, a) ? (a = new Route(a, b, c, d, g, h, j, m), e.push(a)) : a = e[k(e, a)];
    return a
  };
  this.gmgmgrt20ByNumType = function (a, b) {
    for (var c = 0; c < e.length; c++) {
      var d = e[c];
      if (d.type == b && d.num == a)return d
    }
    return null
  };
  this.giveForecast = function (a, c) {
    $.post(this.serverAdress + "searchForecast.php?city=" + b + "&r=" + Math.random(), {userStType:a.type, userStId:a.id}, function (a) {
      c(a)
    }, "json")
  };
  this.jgmvfct22 = function (a, c, d) {
    $.post(this.serverAdress + "searchVehicleForecast.php?city=" + b + "&r=" + Math.random(), {VehicleId:a.substr(1), Type:c}, function (b) {
      var c = {}, e;
      for (e in b)c[e] = new Forecast(e, a, b[e].arr_time, b[e].station_lat0 / 1E6, b[e].station_lon0 / 1E6, b[e].station_lat1 / 1E6, b[e].station_lon1 / 1E6, b[e].type);
      d(a, c)
    }, "json")
  };
  this.iwtgrs23 = function (a, c) {
    $.post(this.serverAdress + "searchStationsOnRoute.php?city=" + b + "&r=" + Math.random(), {userRtId1:a.id1, userRtId2:a.id2, userRtType:a.type}, function (b) {
      for (var e = [], g = 0; g < b.length; g++)e[g] = [];
      for (g = 0; g < b.length; g++)if ("-" != b[g]) {
        var j = o(b[g]), k;
        for (k in j)if (-1 == h(d, k, j[k].type)) {
          var m = new Station(k, j[k].name, j[k].latit / 1E6, j[k].longit / 1E6, j[k].latit2 / 1E6, j[k].longit2 / 1E6, j[k].desc, j[k].type);
          d.push(m);
          e[g].push(m)
        } else e[g].push(d[h(d, k, j[k].type)])
      } else e[g] = b[g];
      c(e, a)
    }, "json")
  };
  this.searchStations = function (a, c) {
    "undefined" != j && j.abort();
    2 < a.length ? j = $.get(this.serverAdress + "searchText.php?city=" + b + "&r=" + Math.random(), {userText:a}, function (b) {
      var b = o(b), e = [], g;
      for (g in b)if (-1 == h(d, g, b[g].type)) {
        var j = new Station(g, b[g].name, b[g].latit / 1E6, b[g].longit / 1E6, b[g].latit2 / 1E6, b[g].longit2 / 1E6, b[g].desc, b[g].type);
        d.push(j);
        e.push(j)
      } else e.push(d[h(d, g, b[g].type)]);
      c(a, e)
    }) : c(a, "@SEARCH_DECLINED")
  };
  var r = "undefined";
  this.searchIdStation = function (a, c) {
    "undefined" != r && r.abort();
    r = $.post(this.serverAdress + "searchStId.php?city=" + b + "&r=" + Math.random(), {idSt:a}, function (a) {
      var a = o(a), b = [], e;
      for (e in a)if (-1 == h(d, e, a[e].type)) {
        var g = new Station(e, a[e].name, a[e].latit / 1E6, a[e].longit / 1E6, a[e].latit2 / 1E6, a[e].longit2 / 1E6, a[e].desc, a[e].type);
        d.push(g);
        b.push(g)
      } else b.push(d[h(d, e, a[e].type)]);
      c(b)
    })
  };
  this.asrts25 = function (a, b) {
    if ("" != a) {
      for (var c = [], d = 0; d < e.length; d++)(-1 != e[d].num.toLowerCase().indexOf(a.toLowerCase()) || -1 != e[d].end1.toLowerCase().indexOf(a.toLowerCase()) || -1 != e[d].end2.toLowerCase().indexOf(a.toLowerCase())) && c.push(e[d]);
      b(a, c)
    } else b(a, "@SEARCH_DECLINED")
  }
}
function onForecastWindowShownFl(a) {
  var a = a.split("|"), a = plelp103.giveMeStationBy(a[0], a[1]), b = parseInt(1E6 * a.latitude), c = parseInt(1E6 * a.longitude), d = parseInt(1E6 * a.latitude2), e = parseInt(1E6 * a.longitude2), a = plelp103.isinif13(a) ? a.id + "|" + a.name + "|" + a.description + "|" + a.type + "|" + b + "|" + c + "|" + d + "|" + e + "|1" : a.id + "|" + a.name + "|" + a.description + "|" + a.type + "|" + b + "|" + c + "|" + d + "|" + e + "|0";
  fobj.setFavStation(a)
}
function onStationMakeFavFl(a) {
  a = a.split("|");
  a = plelp103.giveMeStationBy(a[0], a[1]);
  plelp103.addToFavorites(a)
}
function onStationMakeNotFavFl(a) {
  a = a.split("|");
  a = plelp103.giveMeStationBy(a[0], a[1]);
  plelp103.delFromFavorites(a)
}
function ddd40() {
  oe.call(this);
  var a = plelp104.fobj;
  plelp103.errer102("if9", function (b) {
    var c = parseInt(1E6 * b.latitude), d = parseInt(1E6 * b.longitude), e = parseInt(1E6 * b.latitude2), g = parseInt(1E6 * b.longitude2);
    a.setFavStation(b.id + "|" + b.name + "|" + b.description + "|" + b.type + "|" + c + "|" + d + "|" + e + "|" + g + "|1")
  });
  plelp103.errer102("if8", function (b) {
    var c = parseInt(1E6 * b.latitude), d = parseInt(1E6 * b.longitude), e = parseInt(1E6 * b.latitude2), g = parseInt(1E6 * b.longitude2);
    a.setFavStation(b.id + "|" + b.name + "|" + b.description + "|" + b.type + "|" + c + "|" + d + "|" + e + "|" + g + "|0")
  });
  this.showForecastWindow = function (b) {
    var c = parseInt(1E6 * b.latitude), d = parseInt(1E6 * b.longitude), e = parseInt(1E6 * b.latitude2), g = parseInt(1E6 * b.longitude2);
    a.showStationForecastWindow(b.id + "|" + b.name + "|" + b.description + "|" + b.type + "|" + c + "|" + d + "|" + e + "|" + g)
  }
}
;
city = "vladivostok";
