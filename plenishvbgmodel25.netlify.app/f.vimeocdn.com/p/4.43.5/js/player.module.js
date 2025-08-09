/* VimeoPlayer - v4.43.5 - 2025-08-07 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    d as t,
    a as n,
    i,
    s as o,
    b as r,
    C as a,
    c as l,
    e as s,
    f as c,
    g as d,
    h as u,
    x as _,
    j as p,
    k as m,
    t as v,
    l as f,
    V as h,
    m as E,
    T as g,
    n as b,
    r as C,
    o as T,
    P as y,
    G as L,
    p as A,
    q as S,
    u as I,
    v as O,
    E as P,
    w as R,
    y as N,
    z as D,
    A as w,
    B as k,
    Q as M,
    S as V,
    D as B,
    F as U,
    H as x,
    R as F,
    I as H,
    J as W,
    K as G,
    L as Y,
    M as $,
    N as K,
    O as q,
    U as z,
    W as j,
    X,
    Y as Z,
    Z as J,
    $ as Q,
    a0 as ee,
    a1 as te,
    a2 as ne,
    a3 as ie,
    a4 as oe,
    a5 as re,
    a6 as ae,
    a7 as le,
    a8 as se,
    a9 as ce,
    aa as de,
    ab as ue,
    ac as _e,
    ad as pe,
    ae as me,
    af as ve,
    ag as fe,
    ah as he,
    ai as Ee,
    aj as ge,
    ak as be,
    al as Ce,
    am as Te,
    an as ye,
    ao as Le,
    ap as Ae,
    aq as Se,
    ar as Ie,
    as as Oe,
    at as Pe,
    au as Re,
    av as Ne,
    aw as De,
    ax as we,
    ay as ke,
    az as Me,
    aA as Ve,
    aB as Be,
    aC as Ue,
    aD as xe,
    aE as Fe,
    aF as He,
    aG as We,
    aH as Ge,
    aI as Ye,
    aJ as $e,
    aK as Ke,
    aL as qe,
    aM as ze,
    aN as je,
    aO as Xe,
    aP as Ze,
    aQ as Je,
    aR as Qe,
    aS as et,
    aT as tt,
    aU as nt,
    aV as it,
    aW as ot,
    aX as rt,
    aY as at,
    aZ as lt,
    a_ as st,
    a$ as ct,
    b0 as dt,
    b1 as ut,
    b2 as _t,
    b3 as pt,
    b4 as mt,
    b5 as vt,
    b6 as ft,
    b7 as ht,
    b8 as Et,
    b9 as gt,
    ba as bt
} from "./vendor.module.js";
export {
    a6 as BigScreen, ba as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
const Ct = Symbol("_spatialUnsupported"),
    Tt = Symbol("_spatialFailure"),
    yt = "vimeo-logo",
    Lt = "video-title",
    At = "video-byline",
    St = "video-portrait",
    It = "chapter-share-base",
    Ot = "anybody",
    Pt = "nobody",
    Rt = "password",
    Nt = "disable",
    Dt = "ptv",
    wt = "unlisted",
    kt = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    Mt = Symbol("_seek"),
    Vt = Symbol("_changeVolume"),
    Bt = Symbol("_changeMuted"),
    Ut = Symbol("_showOverlay"),
    xt = Symbol("_reset"),
    Ft = Symbol("_changeLoop"),
    Ht = Symbol("_changeQuality"),
    Wt = Symbol("_openVimeo"),
    Gt = Symbol("_changeColor"),
    Yt = Symbol("_disableVolume"),
    $t = Symbol("_enableVolume"),
    Kt = Symbol("_disableCaptions"),
    qt = Symbol("_enableCaptions"),
    zt = Symbol("_forceFullscreen"),
    jt = Symbol("_turnCaptionsOn"),
    Xt = Symbol("_turnCaptionsOff"),
    Zt = Symbol("_changeCaptionsStyles"),
    Jt = Symbol("_resetCaptionsStyles"),
    Qt = Symbol("_toggleNativeControls"),
    en = Symbol("_showOutro"),
    tn = Symbol("_hideOutro"),
    nn = Symbol("_setControlsVisibility"),
    on = Symbol("_overrideControlbarBehavior"),
    rn = Symbol("_activatePictureInPicture"),
    an = Symbol("_deactivatePictureInPicture"),
    ln = Symbol("_attachSpatialPlaybackEvents"),
    sn = Symbol("_revealSpatialControls"),
    cn = Symbol("_setTime"),
    dn = Symbol("_addCard"),
    un = Symbol("_removeCard"),
    _n = Symbol("_changePlaybackRate"),
    pn = Symbol("_destroy"),
    mn = Symbol("_changeAudioTrack"),
    vn = Symbol("_requestCompleteLiveSubtitles"),
    fn = Symbol("_closeRemoteComponent"),
    hn = Symbol("_updateLiveSubtitleRequests"),
    En = Symbol("_showVideoThumbnail"),
    gn = Symbol("_hideVideoThumbnail"),
    bn = Symbol("_showLocalAccessGate"),
    Cn = Symbol("_error"),
    Tn = Symbol("_playRejected"),
    yn = Symbol("_playResolved"),
    Ln = Symbol("_paused"),
    An = Symbol("_pausedForAd"),
    Sn = Symbol("_resumedAfterAd"),
    In = Symbol("_ended"),
    On = Symbol("_volumeChanged"),
    Pn = Symbol("_mutedChanged"),
    Rn = Symbol("_qualityChanged"),
    Nn = Symbol("_targetTimeReached"),
    Dn = Symbol("_firstTimeUpdate"),
    wn = Symbol("_playbackRateChanged"),
    kn = Symbol("_nudgeAttempted"),
    Mn = Symbol("_showNudgeNotification"),
    Vn = Symbol("_nudgeEnded"),
    Bn = Symbol("_fragmentChanged"),
    Un = Symbol("_fullscreenButtonPressed"),
    xn = Symbol("_pauseButtonPressed"),
    Fn = Symbol("_playButtonPressed"),
    Hn = Symbol("_prefsButtonPressed"),
    Wn = Symbol("_ccButtonPressed"),
    Gn = Symbol("_chapterSeekAttempted"),
    Yn = Symbol("_chapterSeek"),
    $n = Symbol("_chapterChanged"),
    Kn = Symbol("_scrubbingStarted"),
    qn = Symbol("_scrubbingEnded"),
    zn = Symbol("_controlBarVisibilityChanged"),
    jn = Symbol("_toastVisibilityChanged"),
    Xn = Symbol("_sidedockVisibilityChanged"),
    Zn = Symbol("_menuVisibilityChanged"),
    Jn = Symbol("_captionsChanged"),
    Qn = Symbol("_cuePointAdded"),
    ei = Symbol("_cuePointRemoved"),
    ti = Symbol("_stereoscopicButtonPressed"),
    ni = Symbol("_menuPanelOpened"),
    ii = Symbol("_badgePressed"),
    oi = Symbol("_willEnterFullscreen"),
    ri = Symbol("_didEnterFullscreen"),
    ai = Symbol("_willExitFullscreen"),
    li = Symbol("_didExitFullscreen"),
    si = Symbol("_likeButtonPressed"),
    ci = Symbol("_watchLaterButtonPressed"),
    di = Symbol("_shareButtonPressed"),
    ui = Symbol("_embedButtonPressed"),
    _i = Symbol("_vodButtonPressed"),
    pi = Symbol("_collectionsButtonPressed"),
    mi = Symbol("_followButtonPressed"),
    vi = Symbol("_overlayOpened"),
    fi = Symbol("_overlayClosed"),
    hi = Symbol("_facebookButtonPressed"),
    Ei = Symbol("_twitterButtonPressed"),
    gi = Symbol("_tumblrButtonPressed"),
    bi = Symbol("_emailButtonPressed"),
    Ci = Symbol("_popupOpened"),
    Ti = Symbol("_debugButtonPressed"),
    yi = Symbol("_popupClosed"),
    Li = Symbol("_showAndroidVRDeepLink"),
    Ai = Symbol("_debugDataChange"),
    Si = Symbol("_mousedOut"),
    Ii = Symbol("_mousedOver"),
    Oi = Symbol("_mouseTimeout"),
    Pi = Symbol("_liked"),
    Ri = Symbol("_unliked"),
    Ni = Symbol("_addedToWatchLater"),
    Di = Symbol("_removedFromWatchLater"),
    wi = Symbol("_userLogIn"),
    ki = Symbol("_userLoggedIn"),
    Mi = Symbol("_userLoggedOut"),
    Vi = Symbol("_loginFailure"),
    Bi = Symbol("_configChanged"),
    Ui = Symbol("_liveEventSettingsChanged"),
    xi = Symbol("_passwordUnlocked"),
    Fi = Symbol("_privateUnlocked"),
    Hi = Symbol("_enteredTinyMode"),
    Wi = Symbol("_enteredMiniMode"),
    Gi = Symbol("_enteredNormalMode"),
    Yi = Symbol("_assetUrlsRefreshed"),
    $i = Symbol("_embedSettingChanged"),
    Ki = Symbol("_createInteractiveChanged"),
    qi = Symbol("_ottMetadataSet"),
    zi = Symbol("_outroDisplayed"),
    ji = Symbol("_outroHidden"),
    Xi = Symbol("_outroVideoPressed"),
    Zi = Symbol("_becameActive"),
    Ji = Symbol("_becameInactive"),
    Qi = Symbol("_loadVideo"),
    eo = Symbol("_swapVideo"),
    to = Symbol("_outroLinkPressed"),
    no = Symbol("_followed"),
    io = Symbol("_unfollowed"),
    oo = Symbol("_outroImagePressed"),
    ro = Symbol("_outroCtaPressed"),
    ao = Symbol("_cardDisplayed"),
    lo = Symbol("_cardPressed"),
    so = Symbol("_spaceChanged"),
    co = Symbol("_displayContextChanged"),
    uo = Symbol("_videoModuleReady"),
    _o = Symbol("_statsModuleReady"),
    po = Symbol("_apiModuleReady"),
    mo = Symbol("_ready"),
    vo = Symbol("_notificationHidden"),
    fo = Symbol("_airPlayAvailable"),
    ho = Symbol("_airPlayNotAvailable"),
    Eo = Symbol("_airPlayActivated"),
    go = Symbol("_airPlayDeactivated"),
    bo = Symbol("_airPlayButtonPressed"),
    Co = Symbol("_adBuffering"),
    To = Symbol("_adComplete"),
    yo = Symbol("_adClicked"),
    Lo = Symbol("_adError"),
    Ao = Symbol("_adPaused"),
    So = Symbol("_adResumed"),
    Io = Symbol("_adStarted"),
    Oo = Symbol("_adSkipped"),
    Po = Symbol("_allAdsCompleted"),
    Ro = Symbol("_logMetric"),
    No = Symbol("_interactiveHotspotClicked"),
    Do = Symbol("_interactiveOverlayPanelClicked"),
    wo = Symbol("_interactiveMarkerClicked"),
    ko = Symbol("_interactiveSeekCall"),
    Mo = Symbol("_transcriptChanged"),
    Vo = Symbol("_rightContentAreaVisibilityChange"),
    Bo = Symbol("_rightContentAreaEnabled"),
    Uo = Symbol("_rightContentAreaDisabled"),
    xo = Symbol("_transcriptNavActive"),
    Fo = Symbol("_transcriptSessionStarted"),
    Ho = Symbol("_transcriptKeyPressed"),
    Wo = Symbol("_aiWidgetKeyPressed"),
    Go = Symbol("_qoeSurveyPresented"),
    Yo = Symbol("_parentUrlAvailable"),
    $o = Symbol("_liveEventSafeToPlay"),
    Ko = Symbol("_startTimeUpdated"),
    qo = Symbol("_endTimeUpdated"),
    zo = Symbol("_remoteComponentMounted"),
    jo = Symbol("_accessGateOpened"),
    Xo = Symbol("_accessGateClosed"),
    Zo = Symbol("_eventedStoreCreated"),
    Jo = Symbol("_outroDataReceived"),
    Qo = Symbol("_videoThumbnailLoadComplete"),
    er = Symbol("_privateLoginStatusUpdated"),
    tr = Symbol("_frameCaptured"),
    nr = Symbol("_playbackLocked"),
    ir = Symbol("_playbackUnlocked");
let or = {};

function rr(e = "", t = {}) {
    var n;
    if (null != (n = or.en) && n[e] && (e = or.en[e]), Object.keys(t).forEach((n => {
            e = e.replace(new RegExp(`{${n}}`, "g"), t[n])
        })), e.match(/\{\w+}/)) throw new Error("Missing token definition.");
    return e
}

function ar(e) {
    let t, n, i;
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? (i = Math.floor(e / 1e3), t = Math.round(e % 1e3 / 100), i + "." + t + "K") : (n = Math.floor(e / 1e6), t = Math.round(e % 1e6 / 1e5), n + "." + t + "M")
}

function lr(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}

function sr(e) {
    return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, ((e, t) => String.fromCharCode("0x" + t)))
}
const cr = function(t) {
        const n = i => i.length >= t.length ? t.apply(this, i) : (...t) => n([].concat(e(i), t));
        return n([])
    }(((e, t) => Object.keys(e).every((n => e[n] === t[n])))),
    dr = (e = []) => ({
        get: t => t ? e.find(cr(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(cr(t)), 1).pop()
    });

function ur(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function _r(e) {
    try {
        return new URL(e).origin
    } catch (xe) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function pr({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        l = n - i * a,
        s = i - n / a;
    if (l > 0 && l < o || s > 0 && s < o) {
        const e = n / (n - l),
            t = i / (i - s);
        r = gr(Math.max(e, t), 3)
    }
    return {
        extraWidth: l,
        extraHeight: s,
        scaleFactor: r
    }
}

function mr(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function vr(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let l = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        s = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${s},top=${l},${c}`)
}

function fr(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work))|(videoji|videoshipinurl)\.(hk|cn))(?=$|\/)/.test(e)
    }(e) ? _r(e) : ""
}

function hr(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)|(videoji|videoshipinurl)\.(hk|cn))\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = Er(i),
        a = t(window.location.search),
        l = t(`${i}`.split("?")[1]),
        s = Object.assign(a, l, o);
    return n(`${e}/video/${r}/config`, s)
}

function Er(e) {
    if (lr(e)) return parseInt(e, 10);
    const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
    if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
    return parseInt(t[2], 10)
}

function gr(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function br(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function Cr(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) Cr(e, i, t[i])
}

function Tr(e, t, n) {
    n.forEach((n => {
        e(n, ((...e) => {
            t.apply(void 0, [n].concat(e))
        }))
    }))
}

function yr(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function Lr(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce(((e, t) => (...n) => e(t.apply(void 0, n))))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (; null != (n = e) && n.parentElement && !br(e, t);) {
        var n;
        e = e.parentElement
    }
    return br(e, t) ? e : null
}));
let Ar = 0;

function Sr(e = "p") {
    return `${e}${++Ar}`
}
const Ir = {
        _seek: Sr(),
        _play: Sr(),
        _pause: Sr(),
        _playbackRateChange: Sr()
    },
    Or = "done",
    Pr = "started",
    Rr = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    Nr = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9,
        geoBlocked: 14,
        drmPlaybackUnavailable: 15
    },
    Dr = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        TOAST_VISIBILITY_CHANGED: "toastvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DRM_INIT_FAILED: "drminitfailed",
        DURATION_CHANGE: "durationchange",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        REMOTE_PLAYBACK_AVAILABILITY_CHANGE: "remoteplaybackavailabilitychange",
        REMOTE_PLAYBACK_CONNECTING: "remoteplaybackconnecting",
        REMOTE_PLAYBACK_CONNECT: "remoteplaybackconnect",
        REMOTE_PLAYBACK_DISCONNECT: "remoteplaybackdisconnect",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        PLAYER_LOGIN_SUCCESSFUL: "playerLoginSuccessful",
        PLAYER_LOGIN_FAILED: "playerLoginFailed",
        COMPONENT_VISIBILITY_CHANGE: "componentVisibilityChange",
        APP_BREAKPOINT_CHANGE: "appBreakpointChange",
        LOAD_VIDEO: "loadVideo"
    },
    wr = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    kr = "4.43.5",
    Mr = "PROD",
    Vr = !0 === o.iOS,
    Br = "chapter",
    Ur = ["t", "start", "at"],
    xr = "vimeo_",
    Fr = `${xr}t_`,
    Hr = "preact-menu",
    Wr = "one",
    Gr = "two",
    Yr = "three",
    $r = "four",
    Kr = {
        [Wr]: "000000",
        [Gr]: "00adef",
        [Yr]: "ffffff",
        [$r]: "000000"
    },
    qr = {
        [Wr]: "color_one",
        [Gr]: "color_two",
        [Yr]: "color_three",
        [$r]: "color_four"
    },
    zr = {
        [Wr]: "colorOne",
        [Gr]: "colorTwo",
        [Yr]: "colorThree",
        [$r]: "colorFour"
    };
var jr = function(e) {
    return e.POPUP = "popup", e.ON_SITE = "onsite", e
}(jr || {});
const Xr = 12e3,
    Zr = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144];
let Jr = function(e) {
        return e.VP_PLAYER_UI_OVERLAYS = "vp-player-ui-overlays", e.VP_PLAYER_UI_CONTAINER = "vp-player-ui-container", e.VP_VIDEO = "vp-video", e.VP_VIDEO_WRAPPER = "vp-video-wrapper", e.VP_TELECINE = "vp-telecine", e.VP_CONTROLS = "vp-controls", e.VP_CAST_BUTTON = "vp-cast-button", e.VP_CAPTIONS = "vp-captions", e.VP_MENU = "vp-menu", e.VP_SIDEDOCK = "vp-sidedock", e.VP_TITLE = "vp-title", e.VP_TARGET = "vp-target", e.VP_PREVIEW = "vp-preview", e.COMPASS_WRAPPER = "compass-wrapper", e.STEREOSCOPIC = "stereoscopic", e.CC = "cc", e.CUSTOM_LOGO = "custom-logo", e.FULLSCREEN = "fullscreen", e.THUMB = "thumb", e.LIKE_ICON = "like-icon", e.WATCH_LATER_ICON = "watch-later-icon", e.FILL = "fill", e.SHOWFOCUS = "showfocus", e.ADS_WRAPPER = "vp-ads-wrapper", e.ADS_TAG = "vp-ads-tag", e.ADS_COUNTDOWN = "vp-ads-countdown", e.VP_SPIN = "vp-spin", e
    }({}),
    Qr = function(e) {
        return e.VP_OUTRO_WRAPPER = "vp-outro-wrapper", e.VP_PREFS = "vp-prefs", e.VP_PROGRESS = "vp-progress", e.PIP = "pip", e.VOLUME = "volume", e.VOD_BUTTON = "vod-button", e.LIKE_BUTTON = "like-button", e.WATCH_LATER_BUTTON = "watch-later-button", e
    }({}),
    ea = function(e) {
        return e.EXCLUDE_GLOBAL_BUTTON_STYLES = "exclude-global-button-styles", e.ENTER_FULLSCREEN_ICON = "enter-fullscreen-icon", e.EXIT_FULLSCREEN_ICON = "exit-fullscreen-icon", e.CONTENT_AREA_BACKGROUND_CONTAINER = "vp-content-area-background", e.REMOTE_ACCESS_GATE = "vp-remote-access-gate", e.SCRUBBING = "scrubbing", e
    }({}),
    ta = function(e) {
        return e.RIGHT_CONTENT_AREA = "right-content-area", e.NEW_WINDOW_DESCRIPTION = "new-window", e.VP_OVERLAY_LABELLEDBY = "overlay-labelledby", e
    }({}),
    na = function(e) {
        return e.TRANSCRIPT_LIST = "transcript-list", e.TRANSCRIPT_CUE_PREFIX = "transcript-cue", e.TRANSCRIPT_MENU = "transcript-menu", e.TRANSCRIPT_VIEWER = "transcript-viewer", e.TRANSCRIPT_USAGE_DESCRIPTION = "transcript-usage-description", e
    }({}),
    ia = function(e) {
        return e.AI_WIDGET_ID = "ai-widget", e
    }({}),
    oa = function(e) {
        return e.QOE_SURVEY_TEXT = "qoe-survey-text", e.REPLAY = "replay", e.BROADCAST_OVER = "broadcast-over", e.FRAME_CAPTURED = "frame-captured", e
    }({}),
    ra = function(e) {
        return e.TITLE_TEXT = "title-text", e
    }({}),
    aa = function(e) {
        return e.TEXT_TRACK_ID_PREFIX = "telecine-track-", e
    }({}),
    la = function(e) {
        return e.COLLAPSE = "collapse-control-bar-button", e.CC = "cc-control-bar-button", e.PREFS = "prefs-control-bar-button", e.CHAPTERS = "chapters-control-bar-button", e.TRANSCRIPT = "transcript-control-bar-button", e.FULLSCREEN = "fullscreen-control-bar-button", e.PIP = "pip-control-bar-button", e
    }({}),
    sa = function(e) {
        return e.FONT_FAMILY_ACCORDION = "font-family-accordion", e.EDGE_STYLE_ACCORDION = "edge-style-accordion", e.VP_CC_FONT_COLOR_LABEL = "vp-cc-font-color-label", e.VP_CC_BACKGROUND_COLOR_LABEL = "vp-cc-background-color-label", e.VP_CC_BACKGROUND_OPACITY_LABEL = "vp-cc-background-opacity-label", e.VP_CC_FONT_SIZE_LABEL = "vp-cc-font-size-label", e.VP_CC_FONT_OPACITY_LABEL = "vp-cc-font-opacity-label", e.VP_CC_FONT_EDGE_STYLE_LABEL = "vp-cc-font-edge-style-label", e.VP_CC_WINDOW_OPACITY_LABEL = "vp-cc-window-opacity-label", e.VP_CC_WINDOW_COLOR_LABEL = "vp-cc-window-color-label", e
    }({}),
    ca = function(e) {
        return e.SEARCH_INPUT = "search-input", e
    }({}),
    da = function(e) {
        return e.CONTENT_AREA_SIBLING_ELIGIBLE = "data-content-area-sibling-eligible", e
    }({}),
    ua = function(e) {
        return e.NOT_SUPPORTED = "not-supported", e.DRM_FAILURE = "drm-failure", e.DECODE = "decode", e.NETWORK = "network", e.UNKNOWN = "unknown", e.TELECINE_FILE_ERROR = "telecine-file-error", e.TELECINE_DOWNLOAD_ERROR = "telecine-download-error", e.MEDIA_URL_EXPIRED = "media-url-expired", e.SCANNER_ERROR = "scanner-error", e.ERROR = "error", e.LOAD_VIDEO_VIA_CONFIG = "load-video-via-config-error", e.LOCAL_ACCESS_GATE_ERROR = "local-access-gate-error", e
    }({});
const _a = () => ({
        type: ua.NETWORK,
        title: "Network error",
        message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    pa = () => ({
        type: ua.ERROR,
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        modal: !0,
        final: !0
    });
var ma = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        type: ua.NOT_SUPPORTED,
        title: "Unsupported viewing environment",
        message: `Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="${ta.NEW_WINDOW_DESCRIPTION}">Help Center</a>.`,
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        type: ua.DRM_FAILURE,
        title: "Rights issue",
        message: "We’re having trouble authorizing playback for this video. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        type: ua.NOT_SUPPORTED,
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        type: ua.NOT_SUPPORTED,
        final: !1
    }),
    MediaDecodeError: () => ({
        type: ua.DECODE,
        final: !1
    }),
    MediaNetworkError: _a,
    MediaUnknownError: () => ({
        type: ua.UNKNOWN,
        title: "Browser error",
        message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    FileError: () => ({
        type: ua.TELECINE_FILE_ERROR,
        final: !1
    }),
    DownloadError: () => ({
        type: ua.TELECINE_DOWNLOAD_ERROR,
        final: !1
    }),
    MediaUrlExpired: () => ({
        type: ua.MEDIA_URL_EXPIRED,
        title: "Playback error",
        message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !1
    }),
    ScannerError: () => ({
        type: ua.SCANNER_ERROR,
        final: !1
    }),
    PlayerError: pa
});
const va = e => ({
        onClick: e,
        onKeyDown: t => {
            "Enter" !== t.key && " " !== t.key || e(t)
        }
    }),
    fa = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (xe) {
                return Promise.reject(xe)
            }
        }
    }((function(e) {
        return o.clipboardAPI ? function(t, n) {
            try {
                var i = function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(navigator.clipboard.writeText(e), (function() {
                    return !0
                }))
            } catch (xe) {
                return n()
            }
            return i && i.then ? i.then(void 0, n) : i
        }(0, (function(t) {
            return ha(e)
        })) : ha(e)
    }));

function ha(e) {
    const t = document.createElement("textarea");
    t.value = e, document.body.appendChild(t), t.select();
    const n = document.execCommand("copy");
    return document.body.removeChild(t), n
}
const Ea = (e, t, n) => {
    var i;
    return null !== (i = t[n]) && void 0 !== i ? i : e[n]
};

function ga(e, t) {
    return !e || 0 === e.length || -1 !== e.indexOf(t)
}
const Ca = e => [Nr.main, Nr.privateUnlocked].includes(e),
    Ta = (e, t) => e && (e.contains(t.target) || e === t.target),
    ya = (...e) => e.reduce(((e, t) => t ? e ? `${e} ${t}` : t : e), null),
    La = (e = [], t) => e.map((e => r(r({}, e), {}, {
        active: `${e.id}` === t
    }))),
    Aa = e => {
        let t = 0,
            n = 0;
        if (e) {
            const {
                left: i,
                right: o
            } = ur(e), {
                borderLeftWidth: r,
                borderRightWidth: a
            } = window.getComputedStyle(e, "");
            t = i + parseInt(r, 10), n = o - parseInt(a, 10)
        }
        return {
            leftOffsetValue: t,
            rightOffsetValue: n
        }
    },
    Sa = (e, t) => Math.max(e - t.startTime, 0),
    Ia = (e, t) => {
        const {
            startTime: n,
            endTime: i,
            duration: o
        } = t;
        return e < n ? 0 : e > i ? 1 : Sa(e, t) / o
    },
    Oa = (e, t = !0) => {
        const n = 100 * (t ? gr(e, 2) : e);
        return `${Math.max(Math.min(n,100),0)}%`
    },
    Pa = (e, t) => {
        const {
            startTime: n,
            duration: i
        } = t;
        return n + i * e
    },
    Ra = (e, t) => {
        const {
            duration: n
        } = t;
        return n * e || 0
    },
    Na = (e, t, n) => (n - t) * e + t,
    Da = (e, t, n) => (e - t) / (n - t),
    wa = (e, t) => e.filter((e => {
        const n = e.startTime >= t.startTime && e.startTime <= t.endTime,
            i = e.endTime >= t.startTime && e.endTime <= t.endTime,
            o = e.startTime < t.startTime && e.endTime >= t.endTime;
        return n || i || o
    }));
let ka = function(e) {
    return e.EMPTY = "empty", e.SHARE = "share", e.HELP = "help", e.ERROR = "error", e.SPATIAL_REDIRECT = "spatial-redirect", e.NOT_SUPPORTED = "not-supported", e.INTERACTIVE = "interactive", e
}({});
const Ma = e => e === ka.INTERACTIVE || e === ka.EMPTY,
    Va = e => (e => void 0 !== e.settings)(e) ? !e.settings.background && 0 !== e.settings.controls : !e.background && e.controls,
    Ba = e => (Date.now() - e) / 1e3,
    Ua = e => Math.round(1e3 * e),
    xa = (e, t, n) => {
        const i = String(e);
        return new Array(t - i.length + 1).join(n || "0") + i
    },
    Fa = (e, t) => {
        const n = Math.ceil(e) < 0;
        e = Math.abs(e);
        var i = Math.floor(e / 3600 % 60),
            o = Math.floor(e / 60 % 60);
        if (e = Math.floor(e % 60), t) {
            var r = e + " second" + (1 === e ? "" : "s");
            return o > 0 && (r = o + " minute" + (1 === o ? "" : "s") + ", " + r), i > 0 && (r = i + " hour" + (1 === i ? "" : "s") + ", " + r), r
        }
        return (n ? "-" : "") + (i > 0 ? i + ":" : "") + xa(o, 2) + ":" + xa(e, 2)
    };
let Ha = function(e) {
        return e.ONE = "--color-one", e.TWO = "--color-two", e.THREE = "--color-three", e.FOUR = "--color-four", e.ONE_MONOCHROME = "--color-one-monochrome", e.TWO_MONOCHROME = "--color-two-monochrome", e.ONE_OPACITY_NINETY = "--color-one-opacity-ninety", e.TWO_OPACITY_NINETY = "--color-two-opacity-ninety", e.THREE_OPACITY_TWENTY = "--color-three-opacity-twenty", e.ONE_MONOCHROME_OPACITY_TWENTY = "--color-one-monochrome-opacity-twenty", e.TWO_MONOCHROME_OPACITY_TWENTY = "--color-two-monochrome-opacity-twenty", e.ONE_MONOCHROME_OPACITY_SIXTY = "--color-one-monochrome-opacity-sixty", e.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-one-monochrome-opacity-twenty-eighty", e.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-two-monochrome-opacity-twenty-eighty", e.TWO_COMPLEMENT = "--color-two-complement", e
    }({}),
    Wa = function(e) {
        return e[e.ZERO = 0] = "ZERO", e[e.TWENTY = .2] = "TWENTY", e[e.TWENTY_FIVE = .25] = "TWENTY_FIVE", e[e.FIFTY = .5] = "FIFTY", e[e.SIXTY = .6] = "SIXTY", e[e.SEVENTY_FIVE = .75] = "SEVENTY_FIVE", e[e.EIGHTY = .8] = "EIGHTY", e[e.NINETY = .9] = "NINETY", e[e.ONE_HUNDRED = 1] = "ONE_HUNDRED", e
    }({}),
    Ga = function(e) {
        return e.LIGHT = "light", e.DARK = "dark", e
    }({});
const Ya = (e = "") => 4 === (e = e.replace("#", "")).length || 8 === e.length,
    $a = (e, t, n) => {
        let i;
        try {
            i = new a(e)
        } catch (r) {
            return ""
        }
        null != n && n.complement && (i = i.complement);
        const o = (e => a.white.contrast(e).ratio >= 4.5 ? Ga.DARK : Ga.LIGHT)(i);
        return null != n && n.monochrome && (i = l(o === Ga.DARK ? a.white : a.black)), null == t || null != n && n.forceHexAlpha && Ya(e) ? Ya(e) ? i.hexWithAlpha : i.hex : ("object" == typeof t && (t = t[o]), i.alpha = t, i.hexWithAlpha)
    },
    Ka = e => e.map((([e, t]) => ((e, t) => e + ":" + t + ";")(e, t))).join("\n"),
    qa = () => {};

function za(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function ja(e, t) {
    try {
        var n = e()
    } catch (xe) {
        return t(xe)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const Xa = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}((function(e) {
    return ja(e, (function(e) {
        return za(new Promise((e => setTimeout(e, 1e3))), (function() {
            let t;
            if (e instanceof Error) {
                const n = e.message,
                    i = null == n ? void 0 : n.split(" ").find((e => e.includes("http")));
                t = new URL(i), t.searchParams.set("t", `${Date.now()}`)
            }
            return ja((function() {
                return za(
                    import (t.href))
            }), (function() {
                throw e
            }))
        }))
    }))
}));
let Za = function(e) {
        return e.CONNECTED = "CONNECTED", e.CONNECTING = "CONNECTING", e.NOT_CONNECTED = "NOT_CONNECTED", e.NOT_SETUP = "NOT_SETUP", e.NO_DEVICES_AVAILABLE = "NO_DEVICES_AVAILABLE", e.SETUP_DONE = "SETUP_DONE", e
    }({}),
    Ja = function(e) {
        return e.VimeoPlayer = "VimeoPlayer", e.BackgroundPlayer = "BackgroundPlayer", e.BarebonePlayer = "BarebonePlayer", e
    }({}),
    Qa = function(e) {
        return e.NORMAL = "normal", e.MINI = "mini", e.TINY = "tiny", e
    }({}),
    el = function(e) {
        return e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR", e
    }({}),
    tl = function(e) {
        return e[e.HAVE_NOTHING = 0] = "HAVE_NOTHING", e[e.HAVE_METADATA = 1] = "HAVE_METADATA", e[e.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e[e.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e[e.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA", e
    }({}),
    nl = function(e) {
        return e.PRIVACY_PUBLIC = "anybody", e.PRIVACY_NOBODY = "nobody", e.PRIVACY_FOLLOW = "contacts", e.PRIVACY_PASSWORD = "password", e.PRIVACY_USER = "users", e.PRIVACY_PURGATORY = "purgatory", e.PRIVACY_HIDE_FROM_VIMEO = "disable", e.PRIVACY_PAYTOVIEW = "ptv", e.PRIVACY_PAYTOVIEWEXTRA = "ptv_extra", e.PRIVACY_UNLISTED = "unlisted", e.PRIVACY_STOCK = "stock", e
    }({}),
    il = function(e) {
        return e.PLAY = "play", e.PAUSE = "pause", e.REPLAY = "replay", e.TRAILER = "trailer", e
    }({}),
    ol = function(e) {
        return e.FONT_SIZE = "fontSize", e.FONT_FAMILY = "fontFamily", e.FONT_OPACITY = "fontOpacity", e.COLOR = "color", e.EDGE_STYLE = "edgeStyle", e.BG_OPACITY = "bgOpacity", e.BG_COLOR = "bgColor", e.WINDOW_OPACITY = "windowOpacity", e.WINDOW_COLOR = "windowColor", e
    }({}),
    rl = function(e) {
        return e.CCMenu = "c", e.PrefsMenu = "h", e.Transcript = "T", e
    }({}),
    al = function(e) {
        return e.SINGLE_VIDEO_VIEW_MANAGE = "single_video_view_manage", e.VIEWER_HOME = "viewer_home", e.EMBEDDED_PAGE = "embedded_page", e.CLIP_PAGE = "clip_page", e.LIVE_EVENT_SETTINGS_PAGE = "live_event_settings_page", e
    }({}),
    ll = function(e) {
        return e[e.CacheMiss = 0] = "CacheMiss", e[e.MidCacheHit = 1] = "MidCacheHit", e[e.EdgeCacheHit = 2] = "EdgeCacheHit", e
    }({}),
    sl = function(e) {
        return e.TITLE = "ti", e.BYLINE = "by", e.PORTRAIT = "po", e.LIKE = "li", e.WATCH_LATER = "wl", e.SHARE = "sh", e.VIMEO_LOGO = "vl", e
    }({}),
    cl = function(e) {
        return e.FLOW = "fl", e.FLOW_ELEMENT = "fe", e.PGROUP = "pgroup", e
    }({});
const {
    REACHABLE: dl,
    UNREACHABLE: ul
} = {
    REACHABLE: "reachable",
    UNREACHABLE: "unreachable"
}, {
    VIMEO_URL: _l,
    VIEWER_HOME_URL: pl,
    SVV_MANAGE_URL: ml,
    PROFILE_URL: vl,
    VOD_URL: fl,
    VOD_VIDEO_MANAGE_URL: hl,
    NO_DESTINATION: El
} = {
    VIMEO_URL: "vimeoUrl",
    VIEWER_HOME_URL: "viewerHomeUrl",
    SVV_MANAGE_URL: "svvManageUrl",
    CLIP_URL: "clipUrl",
    PROFILE_URL: "profileUrl",
    VOD_URL: "vodUrl",
    VOD_VIDEO_MANAGE_URL: "vodVideoManageUrl",
    NO_DESTINATION: "noDestination"
}, gl = {
    [yt]: {
        viewer: {
            [wt]: pl,
            [Rt]: pl,
            [Nt]: _l,
            [Pt]: pl,
            [Ot]: pl,
            [Dt]: fl,
            privateMode: _l
        },
        creator: {
            [wt]: ml,
            [Rt]: ml,
            [Nt]: ml,
            [Pt]: ml,
            [Ot]: ml,
            [Dt]: hl,
            privateMode: ml
        }
    },
    [Lt]: {
        viewer: {
            [wt]: pl,
            [Rt]: pl,
            [Nt]: vl,
            [Pt]: pl,
            [Ot]: pl,
            [Dt]: fl,
            privateMode: _l
        },
        creator: {
            [wt]: ml,
            [Rt]: ml,
            [Nt]: ml,
            [Pt]: ml,
            [Ot]: ml,
            [Dt]: hl,
            privateMode: ml
        }
    },
    [St]: {
        viewer: {
            [wt]: vl,
            [Rt]: vl,
            [Nt]: vl,
            [Pt]: vl,
            [Ot]: vl,
            [Dt]: vl,
            privateMode: _l
        },
        creator: {
            [wt]: vl,
            [Rt]: vl,
            [Nt]: vl,
            [Pt]: vl,
            [Ot]: vl,
            [Dt]: hl,
            privateMode: ml
        }
    },
    [At]: {
        viewer: {
            [wt]: vl,
            [Rt]: vl,
            [Nt]: vl,
            [Pt]: vl,
            [Ot]: vl,
            [Dt]: vl,
            privateMode: _l
        },
        creator: {
            [wt]: vl,
            [Rt]: vl,
            [Nt]: vl,
            [Pt]: vl,
            [Ot]: vl,
            [Dt]: hl,
            privateMode: ml
        }
    },
    [It]: {
        viewer: {
            [wt]: pl,
            [Rt]: El,
            [Nt]: El,
            [Pt]: El,
            [Ot]: pl,
            [Dt]: fl,
            privateMode: El
        },
        creator: {
            [wt]: pl,
            [Rt]: El,
            [Nt]: El,
            [Pt]: El,
            [Ot]: pl,
            [Dt]: fl,
            privateMode: El
        }
    }
};

function bl(e = {}) {
    const t = {
        selectDestination(e) {
            const n = gl[e];
            if (!n) return "";
            const i = t.isOwner ? n.creator : n.viewer;
            let o = t.isPrivateMode ? i.privateMode : i[t.videoPrivacy];
            return function(e) {
                return "object" == typeof e && (dl in e || ul in e)
            }(o) && (o = t.isClipLinkUnreachable ? o[ul] : o[dl]), o
        },
        get [pl]() {
            var n, i;
            return Vl(t[_l], null == (n = e.video) ? void 0 : n.id, null == (i = e.video) ? void 0 : i.unlisted_hash)
        },
        get [ml]() {
            var n;
            return Ml(t[_l], null == (n = e.video) ? void 0 : n.id)
        },
        get [_l]() {
            return `https://${e.vimeo_url}`
        },
        get [vl]() {
            var t;
            return null == (t = e.video) || null == (t = t.owner) ? void 0 : t.url
        },
        get [fl]() {
            var t;
            return null == (t = e.video) || null == (t = t.vod) ? void 0 : t.url
        },
        get [hl]() {
            var t;
            return `https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(t=t.vod)?void 0:t.id}/settings/basic`
        },
        get [El]() {
            return ""
        },
        get videoPrivacy() {
            var t;
            return null == (t = e.video) ? void 0 : t.privacy
        },
        get isPrivateMode() {
            var t;
            return !(null == (t = e.user) || !t.private_mode_enabled)
        },
        get isOwner() {
            var t, n;
            return (null == (t = e.user) ? void 0 : t.id) === (null == (n = e.video) || null == (n = n.owner) ? void 0 : n.id)
        },
        get isClipLinkUnreachable() {
            var t, n, i;
            return 0 === (null == (t = e.embed) || null == (t = t.settings) ? void 0 : t.portrait) && 0 === (null == (n = e.embed) || null == (n = n.settings) ? void 0 : n.byline) && 0 === (null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.title)
        }
    };
    return t
}

function Cl(e, t) {
    let n = "";
    const i = bl(t),
        o = i.selectDestination(e);
    i[o] && (n = i[o]);
    const r = {
        [Lt]: sl.TITLE,
        [St]: sl.PORTRAIT,
        [At]: sl.BYLINE,
        [yt]: sl.VIMEO_LOGO
    }[e];
    return r && n && (n = Tl(n, r)), n
}

function Tl(e, t) {
    return n(e, {
        [cl.FLOW]: "pl",
        [cl.FLOW_ELEMENT]: t
    })
}
let yl = function(e) {
    return e.VARIANT = "plv", e.CONTROL = "plc", e
}({});
const Ll = /^(%20|\s)*(javascript|data)/im,
    Al = /[^\x20-\x7E]/gim,
    Sl = /^([^:]+):/gm,
    Il = [".", "/"];

function Ol(e, t, n) {
    Pl(e, t) || (e += ((e = "") => e.includes("?"))(e) ? `&${t}=` : `?${t}=`);
    const i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
    return e.replace(i, "$1" + t + "=" + n + "$2")
}

function Pl(e, t) {
    return -1 !== (null == e ? void 0 : e.indexOf(`?${t}=`)) || -1 !== (null == e ? void 0 : e.indexOf(`&${t}=`))
}

function Rl(e) {
    return -1 !== e.indexOf("VideoController")
}

function Nl(e, t = window.location.href) {
    const n = bl(e),
        i = -1 !== e.embed.context.indexOf("ClipController"),
        o = function(e, t) {
            const n = Ml(t),
                i = function(e) {
                    return `${e}/manage/showcases/`
                }(t);
            return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
        }(t, n.vimeoUrl),
        r = Rl(e.embed.context) && (-1 !== t.indexOf(n.viewerHomeUrl) || t === n.clipUrl);
    return function(e, t) {
        const n = function(e) {
                return `${e}/live/broadcaster/event/`
            }(t),
            i = function(e) {
                return `${e}/live/rtmp/event/`
            }(t);
        return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
    }(t, n.vimeoUrl) ? al.LIVE_EVENT_SETTINGS_PAGE : o ? al.SINGLE_VIDEO_VIEW_MANAGE : r ? al.VIEWER_HOME : i ? al.CLIP_PAGE : al.EMBEDDED_PAGE
}

function Dl(e, t, n) {
    if (!e) return "";
    const [i] = e.split("#");
    return `${i}#t=${t}&end=${n}`
}
const wl = e => {
        const t = e.match(Sl);
        return null == t ? void 0 : t[0]
    },
    kl = e => e ? decodeURI(encodeURI((e => {
        e = e.trim();
        const t = wl(e);
        return e && !t && (e = `https://${e}`), e
    })((e => {
        let t = e.replace(Al, "");
        if ((e => Il.indexOf(e[0]) > -1)(t)) return t;
        const n = wl(t);
        return n && Ll.test(n) ? "" : t
    })(e)))) : null;

function Ml(e, t) {
    return `${e}/manage/videos/${null!=t?t:""}`
}
const Vl = (e, t, n) => n ? `${e}/${t}/${n}` : `${e}/${t}`;

function Bl(e, t) {
    const n = "variant" === (t.group || "") ? yl.VARIANT : yl.CONTROL;
    return Ol(e, cl.PGROUP, n)
}

function Ul(e) {
    return !(!o.browser.chromium || e.video.spatial || "stock" === e.video.privacy || "https:" !== window.location.protocol)
}
const xl = s("Storage Access", "color: #fff; background-color: #fc6203; padding: 2px; border-radius: 2px;"),
    Fl = () => o.storageAccessAPI;
let Hl = function(e) {
        return e.started = "started", e.done = "done", e.error = "error", e
    }({}),
    Wl = function(e) {
        return e.pending = "pending", e.active = "active", e.started = "started", e.ended = "ended", e
    }({}),
    Gl = function(e) {
        return e.WEB_GLOBAL = "vimeo.web_global", e.COPY_VIDEO_EMBED_CODE = "workflow.copy_video_embed_code", e.PLAYER_PERFORMANCE_MEASUREMENT = "vimeo.player_performance_measurement", e.CHAPTER_SEGMENT_CLICK = "vimeo.chapter_segment_click", e.CLICK = "vimeo.click", e.TIMING_OBJECT_CONNECT = "vimeo.timing_object_connect", e.TIMING_OBJECT_DISCONNECT = "vimeo.timing_object_disconnect", e.EMBEDDED_TRANSCRIPT_CLICK = "vimeo.embedded_transcript_click", e.CLOSED_CAPTIONS_CLICK = "vimeo.closed_captions_click", e.MULTI_AUDIO_TRACK_CLICK = "vimeo.multi_audio_track_click", e.VIEW_PLAYER_CSAT_V1 = "vimeo.view_player_csat_v1", e.SELECT_THUMBS_UP_PLAYER_CSAT_V1 = "vimeo.select_thumbs_up_player_csat_v1", e.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1 = "vimeo.select_thumbs_down_player_csat_v1", e.DISMISS_PLAYER_CSAT_V1 = "vimeo.dismiss_player_csat_v1", e.DVR_MODE_ENTERED = "vimeo.dvr_mode_entered", e.SEEK_BEHIND_LIVE_EDGE = "vimeo.seek_behind_live_edge", e.SKIP_TO_LIVE_CLICK = "vimeo.skip_to_live_click", e.SEEK_TO_LIVE_EDGE = "vimeo.seek_to_live_edge", e.PLAY_VIDEO = "vimeo.play_video", e.FINISH_VIDEO = "vimeo.finish_video", e.START_VIDEO_SCRUB = "vimeo.start_video_scrub", e.END_VIDEO_SCRUB = "vimeo.end_video_scrub", e.WATCH_VIDEO_HEARTBEAT = "vimeo.watch_video_heartbeat", e.EMBED_SEGMENT = "vimeo.embed_segment", e.PLAY_SEGMENT = "vimeo.play_segment", e.WATCH_FULL_VIDEO = "vimeo.watch_full_video", e.SEEK_INSIDE_SEGMENT = "vimeo.seek_inside_segment", e.SHARE_CHAPTER = "vimeo.share_chapter", e.CHAPTER_PLAYED = "vimeo.chapter_played", e.CHAPTER_SELECTED = "vimeo.chapter_selected", e.OPEN_AI_OPTIONS = "vimeo.open_ai_options", e.PROCESS_STEP = "vimeo.process_step", e.REMOTE_COMPONENT_LOADED = "vimeo.remote_component_loaded", e.REMOTE_COMPONENT_TIMEOUT = "vimeo.remote_component_timeout", e.SELECT_LIKE_HEART_ICON = "vimeo.select_like_heart_icon", e.SELECT_PLAYER_ADD_TO_WATCH_LATER = "vimeo.select_player_add_to_watch_later", e.SELECT_PLAYER_TITLE = "vimeo.select_player_title", e.SELECT_PLAYER_BYLINE = "vimeo.select_player_byline", e.SELECT_PLAYER_PROFILE_PHOTO = "vimeo.select_player_profile_photo", e.SELECT_PLAYER_SHARE = "vimeo.select_player_share", e.SELECT_PLAYER_SHARE_COMPLETE = "vimeo.select_player_share_complete", e.REACH_TIME_ACTION = "vimeo.reach_time_action", e.VIEW_HOTSPOT = "vimeo.view_hotspot", e.CLICK_HOTSPOT = "vimeo.click_hotspot", e.VIEW_OVERLAY = "vimeo.view_overlay", e.CLOSE_OVERLAY = "vimeo.close_overlay", e.CLICK_OVERLAY = "vimeo.click_overlay", e.VIEW_POLL = "vimeo.view_poll", e.VOTE_POLL = "vimeo.vote_poll", e.SELECT_PLAYER_VIMEO_LOGO = "select_player_vimeo_logo", e
    }({}),
    Yl = function(e) {
        return e.TEAM = "team_context", e.ACTION = "action_context", e.VIEW = "view_context", e.WEB = "web_context", e.VIDEO = "video_context", e.PLAYER = "player_context", e.LIVE = "live_context", e.PRODUCT_ANALYTICS = "product_analytics_context", e.TARGET_TEAM = "target_team_context", e.USER_FACING_VIDEO_ANALYTICS = "user_facing_video_analytics_context", e.THIRD_PARTY_INTEGRATION = "third_party_integration_context", e
    }({}),
    $l = function(e) {
        return e[e.WEB_GLOBAL = 5] = "WEB_GLOBAL", e[e.COPY_VIDEO_EMBED_CODE = 5] = "COPY_VIDEO_EMBED_CODE", e[e.PLAYER_PERFORMANCE_MEASUREMENT = 1] = "PLAYER_PERFORMANCE_MEASUREMENT", e[e.CHAPTER_SEGMENT_CLICK = 2] = "CHAPTER_SEGMENT_CLICK", e[e.CLICK = 83] = "CLICK", e[e.TIMING_OBJECT_CONNECT = 1] = "TIMING_OBJECT_CONNECT", e[e.TIMING_OBJECT_DISCONNECT = 1] = "TIMING_OBJECT_DISCONNECT", e[e.EMBEDDED_TRANSCRIPT_CLICK = 6] = "EMBEDDED_TRANSCRIPT_CLICK", e[e.CLOSED_CAPTIONS_CLICK = 5] = "CLOSED_CAPTIONS_CLICK", e[e.MULTI_AUDIO_TRACK_CLICK = 2] = "MULTI_AUDIO_TRACK_CLICK", e[e.PLAY_VIDEO = 2] = "PLAY_VIDEO", e[e.FINISH_VIDEO = 2] = "FINISH_VIDEO", e[e.START_VIDEO_SCRUB = 2] = "START_VIDEO_SCRUB", e[e.END_VIDEO_SCRUB = 1] = "END_VIDEO_SCRUB", e[e.WATCH_VIDEO_HEARTBEAT = 4] = "WATCH_VIDEO_HEARTBEAT", e[e.EMBED_SEGMENT = 1] = "EMBED_SEGMENT", e[e.PLAY_SEGMENT = 1] = "PLAY_SEGMENT", e[e.WATCH_FULL_VIDEO = 1] = "WATCH_FULL_VIDEO", e[e.SEEK_INSIDE_SEGMENT = 1] = "SEEK_INSIDE_SEGMENT", e[e.SHARE_CHAPTER = 1] = "SHARE_CHAPTER", e[e.CHAPTER_PLAYED = 1] = "CHAPTER_PLAYED", e[e.CHAPTER_SELECTED = 1] = "CHAPTER_SELECTED", e[e.OPEN_AI_OPTIONS = 4] = "OPEN_AI_OPTIONS", e[e.PROCESS_STEP = 1] = "PROCESS_STEP", e[e.REMOTE_COMPONENT_LOADED = 1] = "REMOTE_COMPONENT_LOADED", e[e.REMOTE_COMPONENT_TIMEOUT = 1] = "REMOTE_COMPONENT_TIMEOUT", e[e.SELECT_PLAYER_SHARE = 1] = "SELECT_PLAYER_SHARE", e[e.SELECT_PLAYER_SHARE_COMPLETE = 1] = "SELECT_PLAYER_SHARE_COMPLETE", e[e.REACH_TIME_ACTION = 1] = "REACH_TIME_ACTION", e[e.VIEW_HOTSPOT = 1] = "VIEW_HOTSPOT", e[e.CLICK_HOTSPOT = 1] = "CLICK_HOTSPOT", e[e.VIEW_OVERLAY = 1] = "VIEW_OVERLAY", e[e.CLOSE_OVERLAY = 1] = "CLOSE_OVERLAY", e[e.CLICK_OVERLAY = 1] = "CLICK_OVERLAY", e[e.VIEW_POLL = 1] = "VIEW_POLL", e[e.VOTE_POLL = 1] = "VOTE_POLL", e[e.TEAM = 5] = "TEAM", e[e.ACTION = 5] = "ACTION", e[e.VIEW = 3] = "VIEW", e[e.WEB = 25] = "WEB", e[e.VIDEO = 18] = "VIDEO", e[e.PLAYER = 5] = "PLAYER", e[e.LIVE = 6] = "LIVE", e[e.PRODUCT_ANALYTICS = 171] = "PRODUCT_ANALYTICS", e[e.TARGET_TEAM = 6] = "TARGET_TEAM", e[e.USER_FACING_VIDEO_ANALYTICS = 2] = "USER_FACING_VIDEO_ANALYTICS", e[e.THIRD_PARTY_INTEGRATION = 5] = "THIRD_PARTY_INTEGRATION", e[e.DEFAULT = -1] = "DEFAULT", e
    }({});
const Kl = {
        [Gl.WEB_GLOBAL]: $l.WEB_GLOBAL,
        [Gl.COPY_VIDEO_EMBED_CODE]: $l.COPY_VIDEO_EMBED_CODE,
        [Gl.PLAYER_PERFORMANCE_MEASUREMENT]: $l.PLAYER_PERFORMANCE_MEASUREMENT,
        [Gl.CHAPTER_SEGMENT_CLICK]: $l.CHAPTER_SEGMENT_CLICK,
        [Gl.CLICK]: $l.CLICK,
        [Gl.TIMING_OBJECT_CONNECT]: $l.TIMING_OBJECT_CONNECT,
        [Gl.TIMING_OBJECT_DISCONNECT]: $l.TIMING_OBJECT_DISCONNECT,
        [Gl.EMBEDDED_TRANSCRIPT_CLICK]: $l.EMBEDDED_TRANSCRIPT_CLICK,
        [Gl.CLOSED_CAPTIONS_CLICK]: $l.CLOSED_CAPTIONS_CLICK,
        [Gl.MULTI_AUDIO_TRACK_CLICK]: $l.MULTI_AUDIO_TRACK_CLICK,
        [Gl.VIEW_PLAYER_CSAT_V1]: $l.DEFAULT,
        [Gl.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: $l.DEFAULT,
        [Gl.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: $l.DEFAULT,
        [Gl.DISMISS_PLAYER_CSAT_V1]: $l.DEFAULT,
        [Gl.DVR_MODE_ENTERED]: $l.DEFAULT,
        [Gl.SEEK_BEHIND_LIVE_EDGE]: $l.DEFAULT,
        [Gl.SKIP_TO_LIVE_CLICK]: $l.DEFAULT,
        [Gl.SEEK_TO_LIVE_EDGE]: $l.DEFAULT,
        [Gl.PLAY_VIDEO]: $l.PLAY_VIDEO,
        [Gl.FINISH_VIDEO]: $l.FINISH_VIDEO,
        [Gl.START_VIDEO_SCRUB]: $l.START_VIDEO_SCRUB,
        [Gl.END_VIDEO_SCRUB]: $l.END_VIDEO_SCRUB,
        [Gl.WATCH_VIDEO_HEARTBEAT]: $l.WATCH_VIDEO_HEARTBEAT,
        [Gl.EMBED_SEGMENT]: $l.EMBED_SEGMENT,
        [Gl.PLAY_SEGMENT]: $l.PLAY_SEGMENT,
        [Gl.WATCH_FULL_VIDEO]: $l.WATCH_FULL_VIDEO,
        [Gl.SEEK_INSIDE_SEGMENT]: $l.SEEK_INSIDE_SEGMENT,
        [Gl.SHARE_CHAPTER]: $l.SHARE_CHAPTER,
        [Gl.CHAPTER_PLAYED]: $l.CHAPTER_PLAYED,
        [Gl.CHAPTER_SELECTED]: $l.CHAPTER_SELECTED,
        [Gl.OPEN_AI_OPTIONS]: $l.OPEN_AI_OPTIONS,
        [Gl.PROCESS_STEP]: $l.PROCESS_STEP,
        [Gl.REMOTE_COMPONENT_LOADED]: $l.REMOTE_COMPONENT_LOADED,
        [Gl.REMOTE_COMPONENT_TIMEOUT]: $l.REMOTE_COMPONENT_TIMEOUT,
        [Gl.SELECT_LIKE_HEART_ICON]: $l.DEFAULT,
        [Gl.SELECT_PLAYER_ADD_TO_WATCH_LATER]: $l.DEFAULT,
        [Gl.SELECT_PLAYER_VIMEO_LOGO]: $l.DEFAULT,
        [Gl.SELECT_PLAYER_TITLE]: $l.DEFAULT,
        [Gl.SELECT_PLAYER_BYLINE]: $l.DEFAULT,
        [Gl.SELECT_PLAYER_PROFILE_PHOTO]: $l.DEFAULT,
        [Gl.SELECT_PLAYER_SHARE]: $l.SELECT_PLAYER_SHARE,
        [Gl.SELECT_PLAYER_SHARE_COMPLETE]: $l.SELECT_PLAYER_SHARE_COMPLETE,
        [Gl.REACH_TIME_ACTION]: $l.REACH_TIME_ACTION,
        [Gl.VIEW_HOTSPOT]: $l.VIEW_HOTSPOT,
        [Gl.CLICK_HOTSPOT]: $l.CLICK_HOTSPOT,
        [Gl.VIEW_OVERLAY]: $l.VIEW_OVERLAY,
        [Gl.CLOSE_OVERLAY]: $l.CLOSE_OVERLAY,
        [Gl.CLICK_OVERLAY]: $l.CLICK_OVERLAY,
        [Gl.VIEW_POLL]: $l.VIEW_POLL,
        [Gl.VOTE_POLL]: $l.VOTE_POLL,
        [Yl.TEAM]: $l.TEAM,
        [Yl.ACTION]: $l.ACTION,
        [Yl.VIEW]: $l.VIEW,
        [Yl.WEB]: $l.WEB,
        [Yl.VIDEO]: $l.VIDEO,
        [Yl.PLAYER]: $l.PLAYER,
        [Yl.LIVE]: $l.LIVE,
        [Yl.PRODUCT_ANALYTICS]: $l.PRODUCT_ANALYTICS,
        [Yl.USER_FACING_VIDEO_ANALYTICS]: $l.USER_FACING_VIDEO_ANALYTICS,
        [Yl.TARGET_TEAM]: $l.TARGET_TEAM,
        [Yl.THIRD_PARTY_INTEGRATION]: $l.THIRD_PARTY_INTEGRATION
    },
    ql = [Yl.PLAYER, Yl.VIDEO, Yl.WEB, Yl.TEAM],
    zl = [Yl.TEAM, Yl.VIDEO, Yl.LIVE, Yl.PRODUCT_ANALYTICS, Yl.USER_FACING_VIDEO_ANALYTICS, Yl.TARGET_TEAM, Yl.THIRD_PARTY_INTEGRATION],
    jl = {
        [Gl.VIEW_PLAYER_CSAT_V1]: [].concat(ql, [Yl.VIEW]),
        [Gl.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: [].concat(ql, [Yl.ACTION]),
        [Gl.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: [].concat(ql, [Yl.ACTION]),
        [Gl.DISMISS_PLAYER_CSAT_V1]: [].concat(ql, [Yl.ACTION]),
        [Gl.DVR_MODE_ENTERED]: [].concat(ql, [Yl.VIEW, Yl.LIVE, Yl.PRODUCT_ANALYTICS]),
        [Gl.SEEK_BEHIND_LIVE_EDGE]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS]),
        [Gl.SKIP_TO_LIVE_CLICK]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS]),
        [Gl.SEEK_TO_LIVE_EDGE]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS]),
        [Gl.PLAY_VIDEO]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS, Yl.TARGET_TEAM, Yl.USER_FACING_VIDEO_ANALYTICS]),
        [Gl.FINISH_VIDEO]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS, Yl.TARGET_TEAM, Yl.USER_FACING_VIDEO_ANALYTICS]),
        [Gl.START_VIDEO_SCRUB]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS, Yl.TARGET_TEAM, Yl.USER_FACING_VIDEO_ANALYTICS]),
        [Gl.END_VIDEO_SCRUB]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS, Yl.TARGET_TEAM, Yl.USER_FACING_VIDEO_ANALYTICS]),
        [Gl.WATCH_VIDEO_HEARTBEAT]: [].concat(ql, [Yl.ACTION, Yl.LIVE, Yl.PRODUCT_ANALYTICS, Yl.TARGET_TEAM, Yl.USER_FACING_VIDEO_ANALYTICS]),
        [Gl.WATCH_FULL_VIDEO]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS]),
        [Gl.SEEK_INSIDE_SEGMENT]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS]),
        [Gl.SHARE_CHAPTER]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS]),
        [Gl.CHAPTER_PLAYED]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS]),
        [Gl.CHAPTER_SELECTED]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.THIRD_PARTY_INTEGRATION]),
        [Gl.EMBED_SEGMENT]: [].concat(ql, [Yl.VIEW, Yl.PRODUCT_ANALYTICS]),
        [Gl.PLAY_SEGMENT]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS]),
        [Gl.OPEN_AI_OPTIONS]: [Yl.TEAM, Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.WEB, Yl.VIDEO],
        [Gl.PROCESS_STEP]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS]),
        [Gl.REMOTE_COMPONENT_LOADED]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.THIRD_PARTY_INTEGRATION]),
        [Gl.REMOTE_COMPONENT_TIMEOUT]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.THIRD_PARTY_INTEGRATION]),
        [Gl.SELECT_LIKE_HEART_ICON]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.SELECT_PLAYER_ADD_TO_WATCH_LATER]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.SELECT_PLAYER_VIMEO_LOGO]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.SELECT_PLAYER_TITLE]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.SELECT_PLAYER_BYLINE]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.SELECT_PLAYER_PROFILE_PHOTO]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.SELECT_PLAYER_SHARE]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.SELECT_PLAYER_SHARE_COMPLETE]: [].concat(ql, [Yl.ACTION, Yl.PRODUCT_ANALYTICS, Yl.VIEW, Yl.LIVE]),
        [Gl.REACH_TIME_ACTION]: [].concat(zl, [Yl.VIEW]),
        [Gl.VIEW_HOTSPOT]: [].concat(zl, [Yl.VIEW]),
        [Gl.CLICK_HOTSPOT]: [].concat(zl, [Yl.ACTION]),
        [Gl.VIEW_OVERLAY]: [].concat(zl, [Yl.VIEW]),
        [Gl.CLOSE_OVERLAY]: [].concat(zl, [Yl.ACTION]),
        [Gl.CLICK_OVERLAY]: [].concat(zl, [Yl.ACTION]),
        [Gl.VIEW_POLL]: [].concat(zl, [Yl.VIEW]),
        [Gl.VOTE_POLL]: [].concat(zl, [Yl.ACTION])
    },
    Xl = {
        PROVENANCE_AI_GENERATED: "ai_generated",
        PROVENANCE_USER_UPLOADED: "user_uploaded",
        PROVENANCE_USER_UPLOADED_AI_GENERATED: "user_uploaded_ai_generated"
    };
let Zl = function(e) {
    return e.WORKFLOW = "Workflow", e.PLAYBACK = "Playback", e
}({});

function Jl(e) {
    var t;
    return e.video.ecdn ? e.video.live_event ? "vimeo-live-ecdn" : "vimeo-vod-ecdn" : c(e.embed.interactive) ? null != (t = e.request.flags) && t.ott ? "vimeo-ott-vod" : e.video.live_event ? "vimeo-live" : e.embed.context && -1 !== e.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.video.vod ? "vimeo-ondemand" : "vimeo-vod" : "vimeo-interactive-vod"
}
const Ql = () => {
        const e = kr,
            [t, n, i] = e.split(".");
        return {
            full: e,
            major: t,
            minor: n,
            patch: i
        }
    },
    es = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function ts() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : es && (e = "mobile"), e
}

function ns() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function is(e) {
    var t;
    const {
        user: n,
        video: i
    } = e;
    let o = "viewer";
    return n.team_id && (o = n.id === n.team_origin_user_id ? "admin" : "contributor"), n.id === (null == (t = i.owner) ? void 0 : t.id) && (o = "owner"), o
}

function os(e, t) {
    return e === t ? "square" : t > e ? "portrait" : "landscape"
}

function rs(e) {
    return (null == e ? void 0 : e.status) === Wl.ended ? "ended" : (null == e ? void 0 : e.status) === Wl.started ? "streaming" : (null == e ? void 0 : e.status) === Wl.pending ? "unavailable" : "unknown"
}

function as(e) {
    return e.live_event ? "live_event" : "other"
}

function ls(e) {
    var t;
    return null != e && e.length && (null == (t = e.find((e => e.is_current))) ? void 0 : t.id) || null
}

function ss(e) {
    return e === nl.PRIVACY_PUBLIC ? "public" : e === nl.PRIVACY_PASSWORD ? "password" : e === nl.PRIVACY_UNLISTED ? "unlisted" : e === nl.PRIVACY_HIDE_FROM_VIMEO ? "hide_from_vimeo" : "private"
}
var cs = function(e) {
    return e.Origin = "c=o", e.Peer = "c=p", e.ParentCache = "c=c", e.CloudWrapper = "c=w", e
}(cs || {});

function ds(e) {
    const t = e.akamai_request_bc,
        n = e.x_cache;
    return t ? function(e) {
        return e.includes(cs.Origin) ? ll.CacheMiss : e.includes(cs.Peer) || e.includes(cs.ParentCache) || e.includes(cs.CloudWrapper) ? ll.MidCacheHit : ll.EdgeCacheHit
    }(t) : n ? function(e) {
        return "HIT" === e.slice(0, 3) ? ll.MidCacheHit : "HIT" === e.slice(-3) ? ll.EdgeCacheHit : ll.CacheMiss
    }(n) : ll.CacheMiss
}

function us(e) {
    if (!e) return {
        audioTrackLang: null,
        audioTrackProvenance: null,
        audioTrackType: null,
        textTrackLang: null,
        textTrackProvenance: null,
        textTrackType: null
    };
    const t = e.enabledAudioTrack,
        n = e.enabledTextTrack;
    return {
        audioTrackLang: (null == t ? void 0 : t.language) || null,
        audioTrackProvenance: Xl[null == t ? void 0 : t.provenance] || null,
        audioTrackType: (null == t ? void 0 : t.kind) || null,
        textTrackLang: (null == n ? void 0 : n.language) || null,
        textTrackProvenance: (null == n ? void 0 : n.provenance) || null,
        textTrackType: (null == n ? void 0 : n.kind) || null
    }
}

function _s(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const ps = (e, t) => e.split("/").slice(4).join("/"),
    ms = e => e.split("/")[4],
    vs = (e, t) => function(n) {
        try {
            const {
                type: i,
                url: o
            } = n;
            return i && o && o.includes(e) ? _s(i === u.MANIFEST || i === u.SEGMENT ? _(n, t) : null) : _s(null)
        } catch (xe) {
            return Promise.reject(xe)
        }
    },
    fs = () => {
        var e;
        const t = d(window, "_hiveStats", {
                cdnResponseBytes: 0,
                p2pResponseBytes: 0,
                partners: {}
            }),
            {
                cdnResponseBytes: n,
                p2pResponseBytes: i,
                partners: o
            } = t;
        return {
            ecdnBytesByCdn: n,
            ecdnBytesPeered: i,
            ecdnPeers: (null !== (e = Object.keys(o)) && void 0 !== e ? e : []).length
        }
    },
    hs = () => {
        const e = d(window, "_kollectiveStats", {
                originBytes: 0,
                ecdnBytes: 0,
                currentPeerConnections: 0
            }),
            {
                originBytes: t,
                ecdnBytes: n,
                currentPeerConnections: i
            } = e;
        return {
            ecdnBytesByCdn: t,
            ecdnBytesPeered: n,
            ecdnPeers: i
        }
    },
    Es = e => {
        const t = {
            hive: fs,
            kollective: hs
        };
        return t[e] ? t[e]() : {
            ecdnBytesByCdn: 0,
            ecdnBytesPeered: 0,
            ecdnPeers: 0
        }
    },
    gs = ({
        newPriority: e,
        currentPriority: t,
        priorityOrder: n
    }) => {
        const i = n.indexOf(t),
            o = n.indexOf(e);
        return -1 === i || -1 === o || i > o
    };

function bs(e) {
    return (null == e ? void 0 : e.parentElement) === document.body
}
const Cs = () => {
    try {
        return window.self !== window.top
    } catch (xe) {
        return !0
    }
};

function Ts(e, t) {
    const [n, i] = t;
    let o = i - n;
    for (var r, a = p(e); !(r = a()).done;) {
        const e = r.value,
            [t, a] = e,
            l = Math.max(n, t),
            s = Math.min(i, a);
        o -= Math.max(0, s - l)
    }
    return Math.max(o, 0)
}

function ys(e) {
    return Ua(gr(e, 3))
}
const Ls = e => {
        var t;
        const n = null == e || null == (t = e.ingest) ? void 0 : t.start_time;
        if (!n) return Xr;
        const i = Date.now() - n,
            o = Xr - i;
        return Math.min(Math.max(o, 0), Xr)
    },
    As = e => !!e && e.status === Wl.started && 0 === Ls(e);

function Ss(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function Is(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (xe) {}
    return null
}
let Os = function(e) {
        return e.EMPTY = "empty", e.LEAD_CAPTURE_FORM = "lead_capture_form", e
    }({}),
    Ps = function(e) {
        return e.BEFORE_VIDEO = "before_video", e.DURING_VIDEO = "during_video", e.AFTER_VIDEO = "after_video", e
    }({}),
    Rs = function(e) {
        return e.OPENED = "access_gate_opened", e.CLOSED = "access_gate_closed", e.ERROR = "access_gate_error", e
    }({});
const Ns = {
    [Os.LEAD_CAPTURE_FORM]: [Nr.main, Nr.privateUnlocked]
};
ea.REMOTE_ACCESS_GATE;
const Ds = (e, t) => {
        const i = t.vimeo_url;
        let o = {
            lc_param_session_id: t.request.session
        };
        return t.video.unlisted_hash && (o.lc_param_unlisted_hash = t.video.unlisted_hash), t.request.hashed_password && (o.lc_param_password = t.request.hashed_password), n(`https://${i}${e}`, o)
    },
    ws = (e, t, n = null) => e === Os.LEAD_CAPTURE_FORM ? {
        purpose: e,
        url: Ds(`/leadcapture/video/${t.video.id}/form`, t),
        title: "Lead Capture Form",
        gateId: n
    } : {
        purpose: Os.EMPTY,
        url: "",
        title: "",
        gateId: n
    },
    ks = (e, t) => {
        if (e === Os.LEAD_CAPTURE_FORM) {
            var n;
            let e = (e => "lc_" + e.video.id)(t),
                i = Is(e);
            return i || (e = (e => {
                const {
                    id: t,
                    unlisted_hash: n
                } = e.video;
                return "lc_" + ((e, t = 0) => {
                    let n = 3735928559 ^ t,
                        i = 1103547991 ^ t;
                    for (let o, r = 0; r < e.length; r++) o = e.charCodeAt(r), n = Math.imul(n ^ o, 2654435761), i = Math.imul(i ^ o, 1597334677);
                    return n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), (4294967296 * (2097151 & i) + (n >>> 0)).toString()
                })(n ? `${t}:${n}` : `${t}`)
            })(t), i = Is(e), null !== (n = i) && void 0 !== n ? n : "")
        }
        return ""
    },
    Ms = (e, t) => !!ks(e, t);

function Vs(e) {
    var t;
    const n = ks(Os.LEAD_CAPTURE_FORM, e);
    var i, o;
    return null != (t = e.user) && t.lead ? {
        leadUuid: (null == (i = e.user.lead) ? void 0 : i.id) || n,
        contentType: null == (o = e.user.lead) ? void 0 : o.type
    } : n ? {
        leadUuid: n
    } : {}
}
let Bs = function(e) {
        return e.NOT_LOGGED_IN = "not_logged_in", e.LOGGED_IN_STORAGE_ACCESS_REQUIRED = "logged_in_storage_access_required", e.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED = "storage_access_granted_login_unconfirmed", e.ALL_ACCESS_ATTEMPTS_FAILED = "all_access_attempts_failed", e.LOGGED_IN_NO_ACCESS = "logged_in_no_access", e.LOGGED_IN_HAS_ACCESS = "logged_in_has_access", e
    }({}),
    Us = function(e) {
        return e.PRIVATE_LOCKED = "private-locked", e.LOGIN_LIKE = "login-like", e.LOGIN_WATCH_LATER = "login-watch-later", e.PURCHASE = "purchase", e.PRIVATE = "private", e
    }({});
const xs = {
    storageAccessRequired: Fl,
    requestCookieAccess: e => new Promise(((t, n) => document.requestStorageAccess().then((() => {
        xl("User granted storage access"), t(!0)
    }), (() => {
        e(), xl("User storage access denied:"), t(!1)
    })).catch(n)))
};
const Fs = ["label"],
    Hs = "Hotspot",
    Ws = "Poll";

function Gs(e, t, n) {
    return e / t * n
}

function Ys(e = "") {
    try {
        const t = null == e ? void 0 : e.split(".")[1],
            n = JSON.parse(atob(t)).exp;
        return v(n) >= 0
    } catch (xe) {
        throw new Error("Failed to parse PHP token.")
    }
}
const $s = (e, t) => !e.isLive() || t;
let Ks = function(e) {
        return e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e.XXL = "xxl", e
    }({}),
    qs = function(e) {
        return e.MD = "md", e.SM = "sm", e.XS = "xs", e.CUSTOM = "custom", e
    }({}),
    zs = function(e) {
        return e.PRIMARY = "primary", e.ALTERNATIVE = "alternative", e.CUSTOM = "custom", e
    }({}),
    js = function(e) {
        return e.LEFT = "left", e.RIGHT = "right", e
    }({}),
    Xs = function(e) {
        return e.RESET = "reset", e.BUTTON = "button", e.SUBMIT = "submit", e
    }({}),
    Zs = function(e) {
        return e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e
    }({}),
    Js = function(e) {
        return e.NORMAL = "normal", e.BOLD = "bold", e[e.NUM_500 = 500] = "NUM_500", e
    }({}),
    Qs = function(e) {
        return e.CUSTOM = "custom", e.WHITE = "white", e
    }({}),
    ec = function(e) {
        return e.SM = "sm", e.LG = "lg", e
    }({}),
    tc = function(e) {
        return e.FULL_CONTROLS = "full-controls", e.VOLUME_SLIDER = "volume-slider", e.PROGRESS_BAR = "progress-bar", e.SIDE_DOCK_MENU = "side-dock-menu", e
    }({});
const nc = (e, t, n) => {
    switch (e) {
        case tc.FULL_CONTROLS:
        case tc.VOLUME_SLIDER:
            return t !== Qa.MINI && t !== Qa.TINY && n !== Ks.XXS;
        case tc.PROGRESS_BAR:
            return t !== Qa.TINY;
        case tc.SIDE_DOCK_MENU:
            return t === Qa.MINI || t === Qa.TINY || n === Ks.XXS || n === Ks.XS;
        default:
            return !1
    }
};

function ic(e) {
    return 1 === e
}

function oc(e, t = new Date) {
    return e.getTime() - t.getTime()
}

function rc() {
    let e = -1;
    if (void 0 !== window.performance && "function" == typeof window.performance.getEntriesByType) {
        const t = window.performance.getEntriesByType("resource");
        if (t) {
            const n = t.filter((e => null !== e.name.split("?")[0].match(/\.m4s$|\.ts$|\.mp4$/)));
            e = n.map((e => e.responseStart - e.connectStart)).reduce(((e, t) => e + t), 0) / (n.length || 1)
        }
    }
    return gr(e, 2)
}
const ac = [e => {
        var t;
        return o.mse && 1 === (null == (t = e.request.flags) ? void 0 : t.hls_js_live) ? {
            test: "hls_js_live",
            group: "variant"
        } : null
    }],
    lc = !!window.DD_RUM && "function" == typeof window.DD_RUM.setViewContextProperty && "function" == typeof window.DD_RUM.setGlobalContextProperty && "function" == typeof window.DD_RUM.addError && "function" == typeof window.DD_RUM.addAction,
    sc = [25, 50, 75, 90, 95, 100];

function cc(t) {
    let n, i = null,
        a = null,
        l = null,
        s = null,
        c = 0,
        d = 0,
        u = [],
        _ = !1,
        p = !1,
        m = !1,
        v = 0,
        b = 0,
        C = f(),
        T = !0,
        y = !0,
        L = [],
        A = [],
        S = 0,
        I = us(t.backbone);

    function O() {
        k(), t.bigPicture.sendEvent(Gl.PLAY_VIDEO, M(Gl.PLAY_VIDEO)), s = l
    }

    function P() {
        t.backbone.seeking || (_ = !1, N(), t.bigPicture.sendEvent(Gl.FINISH_VIDEO, M(Gl.FINISH_VIDEO)), y = !1, w())
    }

    function R() {
        _ && p && !m && (p = !1, k(), t.bigPicture.sendEvent(Gl.END_VIDEO_SCRUB, M(Gl.END_VIDEO_SCRUB)), s = l, D())
    }

    function N() {
        let n = v;
        (t.backbone.seeking || m) && (n = b), l = gr(n, 3), c && (S += d, function() {
            var n;
            const i = ys(t.config.video.duration);
            if (t.backbone.isLive() || 0 === i) return;
            A = [];
            const o = Math.round(S / i * 100);
            A = sc.filter((e => o >= e && !L.includes(e))), (n = L).push.apply(n, e(A))
        }(), t.bigPicture.sendEvent(Gl.WATCH_VIDEO_HEARTBEAT, function() {
            const e = M(Gl.WATCH_VIDEO_HEARTBEAT);
            return r(r({}, e), {}, {
                log_view_time: c,
                log_view_time_excluding_repeats: Math.min(d, c),
                previous_log_end_time: s,
                is_first_log: T,
                completion_quantiles: A
            })
        }(), {
            [Yl.VIDEO]: {
                audio_track_lang: I.audioTrackLang,
                audio_track_provenance: I.audioTrackProvenance,
                audio_track_type: I.audioTrackType,
                text_track_lang: I.textTrackLang,
                text_track_provenance: I.textTrackProvenance,
                text_track_type: I.textTrackType
            }
        }), c = 0, d = 0, T = !1, s = l, I = us(t.backbone))
    }

    function D() {
        n || (n = setInterval(N, 1e4))
    }

    function w() {
        clearInterval(n), n = null
    }

    function k() {
        const e = gr(Ua(t.currentTime), 3);
        i ? i++ : i = 1, a = e, l = e, c = 0, d = 0, b = e, C = f()
    }

    function M(e) {
        let n;
        switch (e) {
            case Gl.FINISH_VIDEO:
                n = {
                    session_segment_id: i,
                    segment_start_time: a,
                    log_end_time: l,
                    is_first_log: y
                };
                break;
            case Gl.PLAY_VIDEO:
                n = {
                    session_segment_id: i,
                    segment_start_time: a,
                    log_end_time: l,
                    video_duration_ms: ys(t.config.video.duration)
                };
                break;
            default:
                n = {
                    session_segment_id: i,
                    segment_start_time: a,
                    log_end_time: l
                }
        }
        return n
    }
    t.events.on(h.PLAY, (function() {
        if (D(), !_)
            if (_ = !0, t.backbone.isLive()) {
                const e = ({
                    currentTime: n
                }) => {
                    0 !== n && (O(), t.events.off(h.TIME_UPDATE, e))
                };
                t.events.on(h.TIME_UPDATE, e)
            } else O()
    })), t.events.on(h.PAUSE, (function() {
        t.backbone.ended || t.backbone.seeking || m || (N(), w())
    })), t.events.on(h.SEEKING, (function() {
        _ && !p && (p = !0, N(), t.bigPicture.sendEvent(Gl.START_VIDEO_SCRUB, M(Gl.START_VIDEO_SCRUB)), w())
    })), t.events.on(h.SEEKED, E(R, 750)), t.events.on(h.ENDED, P), t.events.on(h.TIME_UPDATE, (function() {
        if (t.backbone.seeking) return;
        const n = Ua(gr(t.currentTime, 3)),
            i = m ? b : n;
        let r = Math.round(i - b);
        const l = f();
        if (r = function(e, n, i) {
                const o = t.backbone.playbackRate || 1,
                    r = C || i,
                    a = Math.round((i - r) * o),
                    l = Math.max(a, 0),
                    s = ys(t.config.video.duration);
                return !t.backbone.isLive() && s && n > s || l && e > 1.3 * l ? Math.min(e, l) : e
            }(r, i, l), r <= 0) return;
        v = i;
        const s = [a, i];
        if (c += r, o.iOS && t.backbone.isLive()) {
            d += gr(Ts(u, s), 3);
            const t = function(e, t) {
                const [n, i] = t;
                return e.map(((e, t) => {
                    const [o, r] = e;
                    return n >= o && n <= r || i >= o && i <= r || o <= n && r >= i || n <= o && i >= r ? t : null
                })).filter((e => null !== e))
            }(u, s);
            u = function(t, n, i) {
                const [o, r] = n;
                let a;
                if (i.length) a = Math.min.apply(Math, e(i));
                else {
                    const e = t.findIndex((e => o < e[0]));
                    a = -1 === e ? t.length : e
                }
                const l = e(t),
                    s = [Math.min.apply(Math, [o].concat(e(i.map((e => t[e][0]))))), Math.max.apply(Math, [r].concat(e(i.map((e => t[e][1])))))];
                return l.splice(a, i.length, s), l
            }(u, s, t)
        } else {
            const e = t.backbone.played;
            d += gr(Ts(u, s), 3), u = function(e) {
                const t = e.length,
                    n = [];
                for (let i = 0; i < t; i++) {
                    const t = e.start(i),
                        o = e.end(i);
                    n.push([Ua(gr(t, 3)), Ua(gr(o, 3))])
                }
                return n
            }(e)
        }
        b = i, C = l, t.config.embed.loop && function(e) {
            if (_ && e >= ys(t.config.video.duration) - 300) {
                P();
                const e = () => {
                    t.currentTime >= 0 && (t.events.off(h.TIME_UPDATE, e), O())
                };
                t.events.on(h.TIME_UPDATE, e)
            }
        }(v)
    })), t.events.on(Kn, (function() {
        m = !0
    })), t.events.on(qn, (function() {
        m = !1, p && R()
    })), t.events.on(g.AUDIO_TRACK_CHANGED, (function() {
        N()
    })), t.events.on(Jn, (function() {
        N()
    })), t.events.on(Bi, (e => {
        e && (w(), i = null, a = null, l = null, s = null, c = 0, d = 0, u = [], _ = !1, p = !1, m = !1, v = 0, b = 0, C = f(), y = !0, T = !0, L = [], A = [], S = 0, I = us(t.backbone))
    })), window.addEventListener("pagehide", (function() {
        N()
    }))
}
const dc = {
    product_analytics_context: {
        product: "analysis",
        feature: "interactive"
    }
};
let uc = function() {
    function e(e) {
        b(this, "_overlayOpenTime", void 0), b(this, "_player", void 0), this._player = e, this._overlayOpenTime = new Map
    }
    var t = e.prototype;
    return t._sendEvent = function(e, t = {}) {
        this._player.bigPicture.sendEvent(e, t, dc)
    }, t.sendReachTimeAction = function({
        timeActionId: e
    }) {
        this._sendEvent(Gl.REACH_TIME_ACTION, {
            time_action_id: e
        })
    }, t.sendViewHotspot = function({
        hotspotId: e
    }) {
        this._sendEvent(Gl.VIEW_HOTSPOT, {
            hotspot_id: e
        })
    }, t.sendClickHotspot = function({
        hotspotId: e,
        clickActionType: t,
        clickoutId: n,
        overlayId: i
    }) {
        this._sendEvent(Gl.CLICK_HOTSPOT, {
            hotspot_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null,
            overlay_id: null != i ? i : null
        })
    }, t.sendViewOverlay = function({
        overlayId: e
    }) {
        this._overlayOpenTime.set(e, f()), this._sendEvent(Gl.VIEW_OVERLAY, {
            overlay_id: e
        })
    }, t.sendCloseOverlay = function({
        overlayId: e
    }) {
        const t = this._overlayOpenTime.get(e),
            n = f() - t;
        this._sendEvent(Gl.CLOSE_OVERLAY, {
            overlay_id: e,
            dwell_time: n
        })
    }, t.sendClickOverlay = function({
        overlayId: e,
        clickActionType: t,
        clickoutId: n
    }) {
        this._sendEvent(Gl.CLICK_OVERLAY, {
            overlay_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null
        })
    }, t.sendViewPoll = function({
        pollId: e
    }) {
        this._sendEvent(Gl.VIEW_POLL, {
            poll_id: e
        })
    }, t.sendVotePoll = function({
        pollId: e,
        pollOptionId: t,
        isPollOptionCorrect: n
    }) {
        this._sendEvent(Gl.VOTE_POLL, {
            poll_id: e,
            poll_option_id: t,
            is_poll_option_correct: null != n ? n : null
        })
    }, e
}();

function _c(e) {
    return Math.random() <= e
}

function pc(e, t, n = .1) {
    _c(n) && ((e, t = {}) => {
        if (lc && e) {
            const n = Object.assign({}, t, {
                manually_captured: 1
            });
            window.DD_RUM.addError(e, n)
        }
    })(e, t)
}
window.addEventListener("unhandledrejection", (e => {
    e.preventDefault(), e.reason && pc(e.reason, {
        unhandled_rejection: 1
    })
}));
var mc = {
    setUp: function(e, t = Ja.VimeoPlayer) {
        ((e, t = Ja.VimeoPlayer) => {
            if (lc) {
                var n, i, o;
                const r = {
                    js_modules: !0,
                    version_js: e.request.build.js,
                    version_backend: e.request.build.backend,
                    visibility_state: document.visibilityState,
                    vimeo_session: e.request.session,
                    locale: e.request.lang,
                    product: Jl(e),
                    video_embed_permission: e.video.embed_permission,
                    video_privacy: e.video.privacy,
                    live_session_id: null == (n = e.video.live_event) ? void 0 : n.id,
                    rawUserAgent: navigator.userAgent,
                    background_mode: Number(1 === (null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.background)),
                    player_name: t,
                    owner_account_type: null == (o = e.video.owner) ? void 0 : o.account_type
                };
                if (e.request.ab_tests)
                    for (const t in e.request.ab_tests) {
                        const n = e.request.ab_tests[t];
                        r[`${t}_test`] = 1, r[`${t}_group`] = n.group;
                        for (const e in n.data) r[`${t}_data_${e}`] = n.data[e]
                    }
                e.user.logged_in && (r.userId = e.user.id);
                for (let e in r) window.DD_RUM.setGlobalContextProperty(e, r[e]);
                if (t) {
                    const e = `has${t}`;
                    window.DD_RUM.setViewContextProperty(e, 1)
                }
            }
        })(e, t)
    },
    captureException: pc,
    captureMessage: function(e) {},
    captureBreadcrumb: function(e) {
        (e => {
            lc && window.DD_RUM.addAction(e)
        })(e)
    }
};
let vc;

function fc({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        a = {
            video: {},
            request: {},
            embed: {}
        };

    function l() {
        return n && n - 6e4 <= Date.now()
    }

    function s(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout((() => {
            "onLine" in navigator && !navigator.onLine || o || (o = d().catch(mc.captureException))
        }), 1e3 * e - 6e4 - 5e3), t
    }

    function c(e, i = {}) {
        var o, l;
        clearTimeout(r);
        const c = t;
        if (isNaN(e) && "string" != typeof e) {
            t = e, n = s(t.request.expires);
            let i = new URL(window.location.href);
            const o = i.searchParams.get("referrer"),
                r = i.searchParams.get("player_id");
            return o && (t.request.referrer = o, i.searchParams.delete("referrer")), r && (t.embed.player_id = r, i.searchParams.delete("player_id")), Promise.resolve({
                old: c,
                loaded: t
            })
        }
        Date.now(), a = T(a, t);
        const d = a.request.referrer;
        d && (i.referrer = d), i.s = a.request.signature, i.expires = a.request.expires, i.time = a.request.timestamp, vc || (vc = fr(e));
        const u = hr(vc || (null != (o = t) && o.player_url ? `https://${null==(l=t)?void 0:l.player_url}` : ""), e, i);
        return C(u, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then((e => (t = e, t.view !== Nr.error && (n = s(t.request.expires), a.request.session && t.video.id === a.video.id && (t.request.session = a.request.session), d && (t.request.referrer = d), a.embed.player_id && (t.embed.player_id = a.embed.player_id), a.embed.on_site && (t.embed.on_site = 1, t.embed.context = a.embed.context)), Date.now(), {
            old: c,
            loaded: t
        }))).catch((e => {
            mc.captureException(e)
        }))
    }

    function d() {
        return clearTimeout(r), Date.now(), C(t.request.config_refresh_url, {
            withCredentials: !0,
            retry: 3
        }).json().then((i => {
            const r = t.request.referrer;
            return t.request = i, r && (t.request.referrer = r), n = s(t.request.expires), Date.now(), o = null, e.fire(Yi), t.request
        })).catch((t => {
            const n = _a();
            throw e.fire(Cn, n.type, n), t
        }))
    }
    return window.addEventListener("online", (() => {
        l() && (o = d().catch(mc.captureException))
    })), e.on(Cn, (e => {
        o || "media-url-expired" !== e || (o = d().catch(mc.captureException))
    })), {
        get isExpired() {
            return l()
        },
        load: (e, t) => c(e, t),
        reload() {
            var e;
            return null != (e = t) && e.video.id ? c(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => l() ? (o || (o = d()), o) : Promise.resolve(t.request),
        refreshAssetUrls: () => d(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}
const hc = (e, t, n) => {
        let i;
        try {
            i = new URL(e)
        } catch (xe) {
            return null
        }
        const o = Array.isArray(t) ? t : [t],
            r = o.map((function(e) {
                return `${xr}${e}`
            })).concat(o),
            a = new URLSearchParams(i.hash.substring(1));
        let l = null;
        return r.some((e => {
            const t = `${e}_${n}`,
                i = a.get(t) || a.get(e);
            return !!i && (l = (e => {
                var t;
                let n, i = !1,
                    o = "0",
                    r = "0",
                    a = "0",
                    l = e;
                const s = l.startsWith("-");
                if (s && (l = l.substring(1)), n = l.match(/^(\d*\.?\d+)$/), null != (t = n) && t.length && (i = !0, a = n[0]), !1 === i && (n = l.match(/^(?:(\d*\.?\d+)h)?(?:(\d*\.?\d+)m)?(?:(\d*\.?\d+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = "0", r = "0", a = "0"] = n)), !1 === i && (n = l.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = "0", o = "0"] = l.split(":").reverse())), !i) return null;
                const c = 60 * Number(o) * 60 + 60 * Number(r) + Number(a);
                return s ? -c : c
            })(i), !0)
        })), l
    },
    Ec = (e, t, n) => -1 === e.indexOf("#") ? null : hc(e, t, n);

function gc(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const bc = Tc((function(e) {
    return new Promise(((t, n) => {
        Lc(e) ? t() : (e.events.once(h.LOADED_DATA, (() => {
            Lc(e) && t()
        })), e.events.once(h.PLAYING, (() => {
            n("Video started playing before start time thumbnail could be shown")
        })))
    }))
}));

function Cc() {}

function Tc(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}
const yc = Tc((function(e) {
    return function() {
        var t = function() {
            if (Ac(e)) return function(e) {
                if (e && e.then) return e.then(Cc)
            }(function(e, t) {
                try {
                    var n = e()
                } catch (xe) {
                    return t(xe)
                }
                return n && n.then ? n.then(void 0, t) : n
            }((function() {
                return gc(e.ready(), (function() {
                    return gc(e.inView(), (function() {
                        return e.backbone.preload = "auto", gc(bc(e), (function() {
                            ! function(e) {
                                var t;
                                null == (t = e.backbone.element) || null == (t = t.classList) || t.remove("invisible"), e.events.fire(gn)
                            }(e)
                        }))
                    }))
                }))
            }), (function(e) {})))
        }();
        if (t && t.then) return t.then(Cc)
    }()
}));

function Lc(e) {
    return e.currentTime === e.startTime && e.backbone.readyState >= tl.HAVE_CURRENT_DATA
}

function Ac(e) {
    var t;
    const n = 1 === (null == e || null == (t = e.config) || null == (t = t.embed) ? void 0 : t.autoplay);
    return o.videoContentPreload && e.segmentedPlaybackEnabled && !n
}

function Sc(e) {
    return !!Ac(e) && e.backbone.readyState < tl.HAVE_CURRENT_DATA
}
const Ic = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}((function(e) {
    const {
        events: t
    } = e;
    return new Promise((n => {
        t.on(Yo, (function(i) {
            const {
                backbone: o
            } = e, {
                startTime: r,
                endTime: a
            } = function(e, t) {
                const {
                    video: n,
                    embed: i
                } = t.config, o = n.id, r = n.duration, a = i.chapters, l = ((e, t) => Ec(e, Br, t))(e, o);
                let s, c;
                return l ? (({
                    startTime: s,
                    endTime: c
                } = Pc(l, a)), Nc(t, l)) : (s = ((e, t) => Ec(e, Ur, t))(e, o), c = ((e, t) => Ec(e, "end", t))(e, o)), ({
                    startTime: s,
                    endTime: c
                } = Rc(s, c, r)), {
                    startTime: s,
                    endTime: c
                }
            }(i, e);
            n({
                startTime: r,
                endTime: a
            }), null !== r && o.currentTime !== r && t.fire(cn, r, r / o.duration)
        }))
    }))
}));

function Oc(e) {
    const {
        video: t,
        embed: n
    } = e.config, i = e.progressController.canSeekForward;
    let o;
    if ((null == t || !t.live_event) && i) {
        let i = null,
            o = null;
        const a = ((e, t) => hc(e, Br, t))(document.location.href, t.id);
        a ? (({
            startTime: i,
            endTime: o
        } = Pc(a, n.chapters)), Nc(e, a)) : ({
            startTime: i,
            endTime: o
        } = function(e, t) {
            const n = document.location.href;
            let i = ((e, t) => hc(e, Ur, t))(n, e),
                o = ((e, t) => hc(e, "end", t))(n, e);
            var r;
            return null !== i && function(e) {
                var t; - 1 !== e.indexOf("at=") && null != (t = history) && t.replaceState && history.replaceState("", "", window.location.pathname + window.location.search)
            }(null == (r = document) || null == (r = r.location) ? void 0 : r.hash), ({
                startTime: i,
                endTime: o
            } = Rc(i, o, t)), {
                startTime: i,
                endTime: o
            }
        }(t.id, t.duration)), r(i, o), null === i && null === o && function(e, t) {
            e && e.then || (e = Promise.resolve(e)), t && e.then(t)
        }(Ic(e), (function({
            startTime: e,
            endTime: t
        }) {
            r(e, t)
        }))
    }

    function r(i, r) {
        null !== i && (e.startTime = mr(i, 0, t.duration)), null !== r && (e.endTime = r, o = function({
            player: e,
            startTime: t,
            endTime: n,
            loop: i = !1
        }) {
            let o = !0,
                r = !1;
            const {
                events: a
            } = e;
            (function() {
                const i = n - t,
                    o = {
                        duration: i,
                        endTime: n,
                        startTime: t
                    },
                    r = {
                        get currentFragment() {
                            return o
                        },
                        firstFragmentDuration: i,
                        checkForNewFragment: qa,
                        reset: qa,
                        hibernate: qa,
                        wake: qa,
                        getFragmentFromTime: () => o
                    },
                    a = function(e, t) {
                        return [1e3 * e, 1e3 * t]
                    }(t, n);
                e.overrideFragmentsHandler(r, a)
            })(), yc(e), a.on(h.TIME_UPDATE, l), a.on(Fn, c), a.on(Bi, d), a.on(h.SEEKED, u), a.once(y, (function() {
                o && e.bigPicture.sendEvent(Gl.PLAY_SEGMENT, {
                    start_time: t,
                    end_time: n
                })
            }));
            return () => {
                o = !1, a.off(h.TIME_UPDATE, l), a.off(Fn, c), a.off(Bi, d), a.off(h.SEEKED, u), e.restoreLastFragmentsHandler()
            };

            function l({
                currentTime: o
            }) {
                o >= n && (i ? s(t) : (e.backbone.pause(), a.fire(h.ENDED)))
            }

            function s(t) {
                r = !1, e.backbone.currentTime = t
            }

            function c() {
                e.backbone && (e.backbone.currentTime >= n || e.backbone.currentTime < t) && s(t)
            }

            function d(t) {
                t && (e.startTime = null, e.endTime = null)
            }

            function u() {
                o && r && e.bigPicture.sendEvent(Gl.SEEK_INSIDE_SEGMENT, {
                    start_time: t,
                    end_time: n
                }), r = !0
            }
        }({
            player: e,
            startTime: null != i ? i : 0,
            endTime: r,
            loop: !!n.loop
        }), e.ready().then((() => {
            e.bigPicture.sendEvent(Gl.EMBED_SEGMENT, {
                start_time: i,
                end_time: r
            })
        })).catch((e => {})))
    }
    return {
        clearSegmentedPlayback: () => null == o ? void 0 : o()
    }
}

function Pc(e, t) {
    const n = null == t ? void 0 : t.find((t => t.id === e));
    let i = {
        startTime: null,
        endTime: null
    };
    return n && (i = {
        startTime: n.timecode,
        endTime: null
    }), i
}

function Rc(e, t, n) {
    let i = e,
        o = t;
    return i && (i = Math.max(i, 0)), o && (o < 0 && (o = Math.max(0, n + o)), o = Math.min(o, n), i ? i > o && (i = null, o = null) : i = 0), {
        startTime: i,
        endTime: o
    }
}

function Nc(e, t) {
    e.events.once(y, (() => {
        e.bigPicture.sendEvent(Gl.CHAPTER_PLAYED, {
            chapter_id: t
        })
    }))
}

function Dc(e) {
    const t = !Ac(e);

    function n(e) {
        if ("opacity" === e.propertyName) {
            const e = i();
            var t;
            e && (L(e).off("transitionend", n), null == e || null == (t = e.parentNode) || t.removeChild(e))
        }
    }

    function i() {
        return document.querySelector(".vp-placeholder")
    }
    return {
        hide: function() {
            if (t) {
                const e = i();
                e && (L(e).on("transitionend", n), e.classList.add("vp-placeholder-fadeout"))
            }
        }
    }
}
const wc = "CAPTIONS_RESET",
    kc = "CAPTIONS_SET_FONT_SIZE",
    Mc = "CAPTIONS_SET_FONT_FAMILY",
    Vc = "CAPTIONS_SET_FONT_OPACITY",
    Bc = "CAPTIONS_SET_COLOR",
    Uc = "CAPTIONS_SET_BACKGROUND_OPACITY",
    xc = "CAPTIONS_SET_BACKGROUND_COLOR",
    Fc = "CAPTIONS_SET_WINDOW_OPACITY",
    Hc = "CAPTIONS_SET_WINDOW_COLOR",
    Wc = "CAPTIONS_SET_EDGE_STYLE",
    Gc = e => ({
        type: kc,
        payload: e
    }),
    Yc = e => ({
        type: Mc,
        payload: e
    }),
    $c = e => ({
        type: Vc,
        payload: e
    }),
    Kc = e => ({
        type: Bc,
        payload: e
    }),
    qc = e => ({
        type: Uc,
        payload: e
    }),
    zc = e => ({
        type: xc,
        payload: e
    }),
    jc = e => ({
        type: Fc,
        payload: e
    }),
    Xc = e => ({
        type: Hc,
        payload: e
    }),
    Zc = e => ({
        type: Wc,
        payload: e
    }),
    Jc = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "White"
            }, {
                id: "yellow",
                label: "Yellow"
            }, {
                id: "green",
                label: "Green"
            }, {
                id: "cyan",
                label: "Cyan"
            }, {
                id: "blue",
                label: "Blue"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Red"
            }, {
                id: "black",
                label: "Black"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Color",
            dispatch: zc
        },
        color: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "color",
            cookie: "color",
            title: "Color",
            dispatch: Kc
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Size",
            dispatch: Gc
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Monospace Serif"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Proportional Serif"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Monospace Sans-Serif"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Proportional Sans-Serif"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursive"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Small Capitals"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Family",
            dispatch: Yc
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacity",
            dispatch: $c
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "None"
            }, {
                id: "shadow",
                label: "Drop Shadow"
            }, {
                id: "raised",
                label: "Raised"
            }, {
                id: "depressed",
                label: "Depressed"
            }, {
                id: "outline",
                label: "Outline"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Edge style",
            dispatch: Zc
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacity",
            dispatch: qc
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Color",
            dispatch: Xc
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacity",
            dispatch: jc
        }
    }),
    Qc = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    },
    ed = ["quality", "volume", "captions", "transcript", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity", "audio_language", "audio_kind", "qoe_survey_vote"];
let td = null;

function nd(e) {
    const t = Jc(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = Is("player")
        } catch (xe) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = Ss(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = Ss(n), i && function(t, n) {
            if (td) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    td.then((n => {
                        const i = _r(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    })).catch((t => {
                        mc.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    }))
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            ed.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            ed.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o(ed);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=Ss(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    return document.cookie = a, !0
                } catch (xe) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        const o = !0;
        switch (t) {
            case "sync_quality":
                e.events.fire(Ht, n, o);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(Vt, n, o);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(Xt, o);
                    break
                }
                e.events.fire(jt, n, o);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(wi) : !t && e.config.user.logged_in && e.events.fire(Mi))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(Ji)
        }
    }
    return e.events.on(Rn, (function(e, t) {
            t || r("quality", e)
        })),
        function() {
            const t = (t, n) => {
                e.config.request.cookie.volume = Ss(t), n || r("volume", t, !1)
            };
            e.events.on(On, t), e.events.on(Pn, ((e, n) => {
                e && t(0, n)
            }))
        }(), e.events.on(Jn, (function(t, n) {
            if (t) {
                const i = `${t.language}.${t.kind}`;
                return e.config.request.cookie.captions = Ss(i), void(n || r("captions", e.config.request.cookie.captions))
            }
            e.config.request.cookie.captions = null, n || r("captions", null)
        })), e.events.on(Zt, (function(t, n) {
            const {
                dispatch: i,
                cookie: o
            } = t;
            e.store.dispatch(i(n)), r(`captions_${o}`, Ss(n))
        })), e.events.on(Jt, (function() {
            e.store.dispatch({
                type: wc
            }), Object.keys(t).forEach((e => {
                const {
                    cookie: n
                } = t[e];
                r(`captions_${n}`, null)
            }))
        })), e.events.on(Mo, (function(t, n) {
            if (t) return e.config.request.cookie.transcript = Ss(t.language), void(n || r("transcript", e.config.request.cookie.transcript));
            e.config.request.cookie.transcript = null, n || r("transcript", null)
        })),
        function() {
            const t = ["descriptions", "main-desc"];
            e.events.on(mn, (function(n, i) {
                e.config.request.cookie.audio_language = null != n && n.language ? Ss(n.language) : null, e.config.request.cookie.audio_kind = t.includes(null == n ? void 0 : n.kind) ? Ss(n.kind) : null, i || (r("audio_language", e.config.request.cookie.audio_language), r("audio_kind", e.config.request.cookie.audio_kind))
            }))
        }(), e.events.on(Go, (function() {
            const t = Date.now();
            e.config.request.cookie.qoe_survey_vote = t, r("qoe_survey_vote", t)
        })), e.events.on(Fn, (function() {
            e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(Zi))
        })), e.events.on([xn, In], (function() {
            o("active") === e.config.request.session && r("active", null)
        })), e.events.on(ki, (function() {
            r("login", !0)
        })), n && !td && (td = function(t) {
            return new Promise(((n, i) => {
                document.createElement("a").href = e.config.request.urls.proxy;
                const o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    const n = _r(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }, o.onerror = function(e) {
                    i(e)
                };
                const r = setTimeout((() => {
                    i()
                }), 1e4);
                window.addEventListener("message", (function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
                }), !1), document.body.appendChild(o)
            }))
        }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
            const n = _r(e.config.request.urls.proxy);
            t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
        }), !1) : window.addEventListener("storage", (function(e) {
            var t;
            if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
                try {
                    if (window.localStorage.getItem(e.key) !== e.newValue) return
                } catch (n) {}
                try {
                    a(e.key, JSON.parse(e.newValue))
                } catch (n) {
                    mc.captureException(n, {
                        extra: {
                            key: e.key,
                            oldValue: e.oldValue,
                            newValue: e.newValue
                        }
                    })
                }
            }
        }), !1), {
            reset: function() {
                r("login", !!e.config.user.logged_in)
            }
        }
}
const id = {
        id: "7742C69E",
        name: "prod"
    },
    od = {
        id: "BA42D416",
        name: "prod"
    },
    rd = {
        id: "78077C77",
        name: "prod"
    },
    ad = "urn:x-cast:com.vimeo.cast.media",
    ld = {
        connected: Sr(),
        disconnected: Sr(),
        playing: Sr(),
        paused: Sr(),
        buffering: Sr(),
        idle: Sr(),
        ended: Sr(),
        initialized: Sr(),
        castStateChanged: Sr(),
        sessionStateChanged: Sr(),
        timeUpdated: Sr(),
        mediaLoadedSuccess: Sr(),
        mediaLoadedFailed: Sr(),
        error: Sr()
    };
let sd = function() {
        function e({
            core: e
        }) {
            this._core = e, this._onControlSeek = this.onControlSeek.bind(this), this._onPlayerMutedChanged = this.onPlayerMutedChanged.bind(this), this._onPlayerVolumeChanged = this.onPlayerVolumeChanged.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onCastStateChanged = this.onCastStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._onReceiverMutedChanged = this.onReceiverMutedChanged.bind(this), this._onReceiverVolumeChanged = this.onReceiverVolumeChanged.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = O(this._endVideo, 500), this._onOutroDisplayed = this.onOutroDisplayed.bind(this), this._onOutroHidden = this.onOutroHidden.bind(this), this.volumeLevel = null, this.mutedState = null
        }
        var t = e.prototype;
        return t.calculateStartTime = function(e = null) {
            let t = Number(e) || this._core.backbone.currentTime - 7;
            return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
        }, t.loadMedia = function({
            contentId: e,
            currentTime: t = null,
            duration: n = null,
            token: i = null,
            bypassToken: o = null,
            autoRequest: a = !1,
            autoCaption: l = !0,
            autoDisconnect: s = !0,
            tracks: c = []
        } = {}) {
            if (dd.isLoadingMedia) return Promise.resolve(!1);
            const u = this._core.config;
            e = e || u.video.id;
            const _ = u.request,
                p = _.drm;
            let m;
            if (p) {
                const t = d(_, "files.dash.default_cdn");
                e = d(_, `files.dash.cdns.${t}.url`), m = d(p, "cdms.widevine.license_url"), c = (_.text_tracks || []).map((e => {
                    const {
                        pathname: t,
                        search: n
                    } = A(e.url);
                    return r(r({}, e), {}, {
                        url: `https://player.vimeo.com${t}${n}`
                    })
                }))
            }
            const v = this.calculateStartTime(t);
            n = Number(n) || this.duration, i = i || u.user.vimeo_api_client_token, o = o || u.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
            const f = {
                contentId: e,
                duration: n,
                autoRequest: a,
                tracks: c,
                currentTime: v,
                requestCustomData: {
                    token: i,
                    bypassToken: o,
                    tokenType: "jwt"
                }
            };
            return this._core.config.request.ott_chromecast_token && (f.requestCustomData.ottChromecastToken = this._core.config.request.ott_chromecast_token), this._core.config.ottCastOptions && (f.ottCastOptions = this._core.config.ottCastOptions), (m ? this._getLicenseUrl(m).then((e => r(r({}, f), {}, {
                mediaCustomData: {
                    widevineLicenseServerURL: e
                }
            }))) : Promise.resolve(f)).then((e => dd.loadMedia(e))).then((() => (dd.fire(ld.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._core.events.fire(y), this._core.events.fire(tn), this._isOutroRendered = !1, l && this.onCaptionsChanged(this._core.backbone.enabledTextTrack), this._core.backbone.paused || this._core.backbone.pause(), !0))).catch((e => (dd.fire(ld.mediaLoadedFailed, e), s && this.endCurrentSession(), Promise.reject(e))))
        }, t._getLicenseUrl = function(e) {
            return new Promise(((t, n) => {
                const i = new XMLHttpRequest;
                i.open("GET", e), i.onload = () => {
                    const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                    if (i.status >= 200 && i.status < 300) try {
                        t(i.response)
                    } catch (xe) {
                        n(e(xe))
                    } else n(e(i.status))
                }, i.onerror = n, i.send()
            }))
        }, t.init = function() {
            this.removeInitListeners(), this.addInitListeners()
        }, t.addInitListeners = function() {
            this.addSessionStateListener(), this.addCastStateListener(), this.addIsConnectedListener()
        }, t.endCurrentSession = function(e = !0) {
            dd.castContext && dd.castContext.endCurrentSession(e)
        }, t.syncBackbone = function() {
            !this.isOutroRendered && this._core.backbone.paused && (this._core.backbone.currentTime = this.lastCurrentTime, this.syncTime())
        }, t.stopBackbone = function() {
            this._core.events.fire(xt)
        }, t.storeBackboneData = function() {
            this.lastCurrentTime = this._core.backbone.currentTime
        }, t.applyBackboneData = function() {
            this.lastCurrentTime && (this._core.backbone.currentTime = this.lastCurrentTime)
        }, t.enableUI = function() {
            this._core.events.fire(En), this._core.element.classList.add("is-casting")
        }, t.disableUI = function() {
            this.isOutroRendered || (this._core.events.fire(gn), this._core.backbone.element.classList.remove("invisible")), this._core.element.classList.remove("is-casting")
        }, t.syncTime = function() {
            const e = this.lastCurrentTime / this.duration;
            dd.fire(ld.timeUpdated, {
                currentTime: this.lastCurrentTime,
                duration: this.duration,
                percent: e
            }), e > 0 && this._core.events.fire(h.TIME_UPDATE, {
                currentTime: this.lastCurrentTime,
                duration: this.duration,
                timeProgress: e
            })
        }, t._endVideo = function() {
            return this._isEndOfVideo = !0, this._core.events.fire(In), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch((() => {
                this.showOutro()
            })) : this.showOutro(), dd.fire(ld.ended), !0
        }, t.showOutro = function() {
            this.isOutroRendered || (this._isOutroRendered = !0, this._core.events.fire(en))
        }, t.dispose = function() {
            this.endCurrentSession(), this.removeAllRemoteListeners()
        }, t.onIsMediaLoadedChanged = function(e) {
            !1 === e.value ? this.isTimeEnded && this.endVideo() : this._core.backbone.paused || this._core.backbone.pause()
        }, t.onPlayerStateChanged = function(e) {
            switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
                case dd.PlayerState.PLAYING:
                    dd.fire(ld.playing);
                    break;
                case dd.PlayerState.PAUSED:
                    dd.fire(ld.paused);
                    break;
                case dd.PlayerState.BUFFERING:
                    dd.fire(ld.buffering);
                    break;
                case dd.PlayerState.IDLE:
                default:
                    dd.fire(ld.idle)
            }
        }, t.onReceiverVolumeChanged = function(e) {
            null === this.volumeLevel && (this.volumeLevel = dd.remotePlayer ? dd.remotePlayer.volumeLevel : 1), e.value !== this.volumeLevel && (this.volumeLevel = e.value, this._core.events.fire(Vt, e.value, !1, !1))
        }, t.onReceiverMutedChanged = function(e) {
            null === this.mutedState && (this.mutedState = !!dd.remotePlayer && dd.remotePlayer.isMuted), this._core.events.fire(Bt, e.value, !0)
        }, t.onPlayerMutedChanged = function(e) {
            dd.remotePlayer && dd.remotePlayerController && dd.remotePlayer.isMuted !== e && dd.remotePlayerController.muteOrUnmute()
        }, t.onPlayerVolumeChanged = function(e) {
            this._core.backbone.muted || dd.remotePlayer && dd.remotePlayerController && S(dd.remotePlayer.volumeLevel) !== S(e) && (dd.remotePlayer.volumeLevel = e, dd.remotePlayerController.setVolumeLevel())
        }, t.onCurrentTimeChanged = function(e) {
            this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
        }, t.onCaptionsChanged = function(e) {
            const t = dd.currentSession;
            t && t.sendMessage(ad, {
                action: "setActiveByLanguage",
                value: null == e ? void 0 : e.language
            })
        }, t.onSessionStateChanged = function(e) {
            switch (e.sessionState) {
                case dd.SessionState.SESSION_STARTING:
                    this.addPreventLocalPlayerEvents();
                    break;
                case dd.SessionState.SESSION_RESUMED:
                case dd.SessionState.SESSION_STARTED:
                    this.loadMedia();
                    break;
                case dd.SessionState.SESSION_ENDING:
                case dd.SessionState.SESSION_ENDED:
                    break;
                case dd.SessionState.SESSION_START_FAILED:
                    this.removePreventLocalPlayerEvents()
            }
            dd.fire(ld.sessionStateChanged, e.sessionState)
        }, t.onCastStateChanged = function(e) {
            dd.fire(ld.castStateChanged)
        }, t.onIsConnectedChanged = function(e) {
            e.value ? this.onConnected() : this.onDisconnected()
        }, t.onConnected = function() {
            this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), dd.fire(ld.connected, dd.currentSessionObj)
        }, t.onDisconnected = function() {
            this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), dd.fire(ld.disconnected)
        }, t.onConfigChanged = function() {
            this.loadMedia()
        }, t.onReset = function() {
            this.loadMedia()
        }, t.onPlayOrPausePressed = function() {
            this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && dd.remotePlayerController.playOrPause(), this._core.events.halt()
        }, t.onControlSeek = function(e) {
            e = this._core.progressController.getAllowedSeekTime(e), this.currentTime = e, this._core.events.halt()
        }, t.addSessionStateListener = function() {
            dd.castContext && dd.castContext.addEventListener(dd.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
        }, t.addCastStateListener = function() {
            dd.castContext && dd.castContext.addEventListener(dd.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)
        }, t.addMessageListener = function() {
            const e = dd.currentSession;
            e && e.addMessageListener(ad, this._onMessageReceived)
        }, t.onMessageReceived = function(e, t) {
            "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), dd.fire(ld.error, new Error("Chromecast encountered an error and media finished."))))
        }, t.onOutroDisplayed = function() {
            this._isOutroRendered = !0
        }, t.onOutroHidden = function() {
            this._isOutroRendered = !1
        }, t.addIsConnectedListener = function() {
            dd.remotePlayerController && dd.remotePlayerController.addEventListener(dd.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
        }, t.addPreventLocalPlayerEvents = function() {
            this._core.events.prependOn([Fn, xn, Kn, qn, g.BUFFER_STARTED, g.BUFFER_ENDED, Mt, Pn, On, Jn, Bi, xt], this._preventPlayerDefaultEvent)
        }, t.addRemotePlayerListenersOnIdle = function() {
            this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
        }, t.addLocalPlayerListeners = function() {
            this._core.events.prependOn(Fn, this._onPlayOrPausePressed), this._core.events.prependOn(xn, this._onPlayOrPausePressed), this._core.events.prependOn(Kn, this._preventPlayerDefaultEvent), this._core.events.prependOn(qn, this._preventPlayerDefaultEvent), this._core.events.prependOn(g.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.prependOn(g.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.prependOn(Mt, this._onControlSeek), this._core.events.prependOn(Pn, this._onPlayerMutedChanged), this._core.events.prependOn(On, this._onPlayerVolumeChanged), this._core.events.on(Jn, this._onCaptionsChanged), this._core.events.on(Bi, this._onConfigChanged), this._core.events.on(xt, this._onReset), this._core.events.on(zi, this._onOutroDisplayed), this._core.events.on(ji, this._onOutroHidden)
        }, t.preventPlayerDefaultEvent = function() {
            this._core.events.halt()
        }, t.addCurrentTimeChangedListener = function() {
            dd.remotePlayerController && dd.remotePlayerController.addEventListener(dd.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
        }, t.addIsMediaLoadedChangedListener = function() {
            dd.remotePlayerController && dd.remotePlayerController.addEventListener(dd.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
        }, t.addPlayerStateChangedListener = function() {
            dd.remotePlayerController && dd.remotePlayerController.addEventListener(dd.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
        }, t.addVolumeLevelChangedListener = function() {
            dd.remotePlayerController && (dd.remotePlayerController.addEventListener(dd.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onReceiverVolumeChanged), dd.remotePlayerController.addEventListener(dd.RemotePlayerEventType.IS_MUTED_CHANGED, this._onReceiverMutedChanged))
        }, t.addRemotePlayerListenersOnPlaying = function() {
            this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
        }, t.removeRemotePlayerListenersOnIdle = function() {
            this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
        }, t.removeInitListeners = function() {
            dd.castContext && (dd.castContext.removeEventListener(dd.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), dd.castContext.removeEventListener(dd.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)), dd.remotePlayerController && dd.remotePlayerController.removeEventListener(dd.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
        }, t.removeRemotePlayerListenersOnPlaying = function() {
            this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
        }, t.removeMessageListener = function() {
            const e = dd.currentSession;
            e && e.removeMessageListener(ad, this._onMessageReceived)
        }, t.removeCurrentTimeChangedListener = function() {
            dd.remotePlayerController && dd.remotePlayerController.removeEventListener(dd.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
        }, t.removeIsMediaLoadedChangedListener = function() {
            dd.remotePlayerController && dd.remotePlayerController.removeEventListener(dd.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
        }, t.removePlayerStateChangedListener = function() {
            dd.remotePlayerController && dd.remotePlayerController.removeEventListener(dd.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
        }, t.removeVolumeLevelChangedListener = function() {
            dd.remotePlayerController && (dd.remotePlayerController.removeEventListener(dd.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onReceiverVolumeChanged), dd.remotePlayerController.removeEventListener(dd.RemotePlayerEventType.IS_MUTED_CHANGED, this._onReceiverMutedChanged))
        }, t.removePreventLocalPlayerEvents = function() {
            this._core.events.off([Fn, xn, Kn, qn, g.BUFFER_STARTED, g.BUFFER_ENDED, Mt, Pn, On, Jn, Bi, xt], this._preventPlayerDefaultEvent)
        }, t.removeLocalPlayerListeners = function() {
            this._core.events.off(Fn, this._onPlayOrPausePressed), this._core.events.off(xn, this._onPlayOrPausePressed), this._core.events.off(Kn, this._preventPlayerDefaultEvent), this._core.events.off(qn, this._preventPlayerDefaultEvent), this._core.events.off(g.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.off(g.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.off(Mt, this._onControlSeek), this._core.events.off(Pn, this._onPlayerMutedChanged), this._core.events.off(On, this._onPlayerVolumeChanged), this._core.events.off(Jn, this._onCaptionsChanged), this._core.events.off(Bi, this._onConfigChanged), this._core.events.off(xt, this._onReset)
        }, t.removeRemotePlayerListeners = function() {
            this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
        }, t.removeAllRemoteListeners = function() {
            this.removeRemotePlayerListeners(), this.removeInitListeners()
        }, I(e, [{
            key: "currentTime",
            get: function() {
                return this.lastCurrentTime || 0
            },
            set: function(e) {
                dd.remotePlayer && dd.remotePlayerController && (e = this._core.progressController.getAllowedSeekTime(e), dd.remotePlayer.currentTime = e, dd.remotePlayerController.seek(), this.lastCurrentTime = e)
            }
        }, {
            key: "isTimeEnded",
            get: function() {
                return this.lastCurrentTime + .5 >= this.duration
            }
        }, {
            key: "isOutroRendered",
            get: function() {
                return this._isOutroRendered || !1
            }
        }, {
            key: "isLooped",
            get: function() {
                return this._core.config.embed.loop
            }
        }, {
            key: "isEndOfVideo",
            get: function() {
                return this._isEndOfVideo || !1
            }
        }, {
            key: "duration",
            get: function() {
                return this._core.config.video.duration
            }
        }, {
            key: "isPlayingOrPaused",
            get: function() {
                return dd.remotePlayer ? dd.remotePlayer.playerState === dd.PlayerState.PLAYING || dd.remotePlayer.playerState === dd.PlayerState.PAUSED : null
            }
        }, {
            key: "isIdle",
            get: function() {
                return dd.remotePlayer ? null === dd.remotePlayer.playerState || dd.remotePlayer.playerState === dd.PlayerState.IDLE : null
            }
        }, {
            key: "isMediaLoaded",
            get: function() {
                return !!dd.remotePlayer && dd.remotePlayer.isMediaLoaded
            }
        }])
    }(),
    cd = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        R(t, e);
        var n = t.prototype;
        return n.init = function({
            appId: t,
            chromecastPlayer: n = null
        } = {}) {
            var i, o;
            return t || (t = null != n && null != (i = n._core) && null != (i = i.config.request.flags) && i.ott ? null != n && null != (o = n._core) && o.config.ottCastOptions ? n._core.config.ottCastOptions.appId ? n._core.config.ottCastOptions.appId : od.id : rd.id : id.id), this.chromecastPlayer = n, this.setup().then((n => (n && (e.prototype.init.call(this, {
                receiverApplicationId: t,
                autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
            }), this.chromecastPlayer && this.chromecastPlayer.init(), this.fire(ld.initialized)), n))).catch((e => (this.fire(ld.error, e), Promise.reject(e))))
        }, n.dispose = function() {
            this.chromecastPlayer = null
        }, I(t, [{
            key: "chromecastPlayer",
            get: function() {
                return this._chromecastPlayer
            },
            set: function(e) {
                if (e && !(e instanceof sd)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
                this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
            }
        }])
    }(N);
const dd = P.extend(new cd),
    ud = "LIVE_UPDATE";

function _d(e, t) {
    return Object.keys(t).reduce(((n, i) => (t[i] && "object" == typeof t[i] ? n[e(i)] = _d(e, t[i]) : n[e(i)] = t[i], n)), {})
}

function pd(e) {
    return e.replace(/(_\w)/g, (e => e[1].toUpperCase()))
}

function md(e) {
    return _d(pd, e)
}
const vd = "CONFIG_LOAD",
    fd = e => ({
        type: vd,
        payload: r({}, md(e))
    });

function hd(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case vd:
            return n.video.liveEvent ? r(r({}, e), n.video.liveEvent) : null;
        case ud:
            return r(r({}, e), n);
        case "LIVE_SET_START_TIME":
            return r(r({}, e), {}, {
                ingest: r(r({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return r(r({}, e), {}, {
                settings: r(r({}, e.settings), n)
            });
        default:
            return e
    }
}
const Ed = e => {
        var t;
        return !(null == (t = e.liveEvent) || !t.status)
    },
    gd = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    bd = e => {
        var t;
        return (null == (t = e.liveEvent) ? void 0 : t.status) === Pr
    },
    Cd = e => {
        var t;
        return Ed(e) && "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Td = e => {
        var t;
        return (null == (t = e.liveEvent) || null == (t = t.archive) ? void 0 : t.status) === Or
    };
var yd = Object.freeze({
    __proto__: null,
    default: hd,
    liveExists: Ed,
    liveStatus: gd,
    liveStartTime: e => {
        var t;
        return (null == (t = e.liveEvent) || null == (t = t.ingest) ? void 0 : t.startTime) || null
    },
    isLiveStarted: bd,
    liveInProgress: Cd,
    isLiveArchived: Td
});
const Ld = "interactive";
let Ad = function(e) {
    return e.NONE = "none", e.METADATA = "metadata", e.METADATA_ON_HOVER = "metadata_on_hover", e.AUTO = "auto", e.AUTO_ON_HOVER = "auto_on_hover", e
}({});
const Sd = Ad.METADATA_ON_HOVER;
let Id = function(e) {
        return e.PQ = "PQ", e.DV5 = "DV5", e.DV81 = "DV81", e.DV82 = "DV82", e.DV84 = "DV84", e.HDR10 = "HDR10", e.HDR10_PLUS = "HDR10_PLUS", e.HLG = "HLG", e
    }({}),
    Od = function(e) {
        return e.KOLLECTIVE = "kollective", e.HIVE = "hive", e
    }({});

function Pd() {}

function Rd(e, t, i) {
    const r = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (xe) {
                    return Promise.reject(xe)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t;
                    if (Zr.includes(null == e || null == (t = e.config) || null == (t = t.user) ? void 0 : t.id)) return function(e) {
                        if (!void 0) return e && e.then ? e.then(Pd) : Promise.resolve()
                    }(J(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.refreshAssetUrls()
            }))
        })),
        a = e.events;
    let l = e.backbone;
    const s = Jc(),
        c = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad),
        d = (o.iOS >= 8 || Vr) && !o.iPad;
    let u = !1,
        _ = !1,
        p = !1,
        m = !1,
        v = null,
        f = !1,
        E = null,
        b = !1,
        C = !1,
        T = !1,
        L = !1,
        A = !1;

    function S(e) {
        l.element.classList.remove("invisible"), I()
    }

    function I() {
        let e = l.play();
        return A && (e = e.catch(O)), e.catch(R).then(N)
    }

    function O(e) {
        if (P(e)) return a.fire(Bt, !0, !0), l.play();
        throw e
    }

    function P(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function R(e) {
        return a.fire(Tn, e), new Promise((() => {}))
    }

    function N() {
        A = !1, a.fire(yn)
    }

    function Q(e) {
        try {
            l.currentTime = e
        } catch (t) {}
    }

    function ee(e = !1) {
        (!m || e) && !f && u && l.paused && I()
    }

    function te() {
        var t;
        const n = (null == (t = e.config.request.flags) ? void 0 : t.preload_video) || Sd;
        let i = n,
            r = "",
            s = "";
        n === Ad.AUTO_ON_HOVER && (r = Ad.AUTO), n === Ad.METADATA_ON_HOVER && (r = Ad.METADATA), n === Ad.AUTO && (s = Ad.AUTO);
        const c = o.isGoogleBot || o.isCrawler || "none" === n;

        function d(t) {
            e.config.request && l.preload === Ad.NONE && t && !c && !p && e.verifyConfig().then((() => (l.preload = t, !0))).catch((e => {}))
        }(r || s || c) && (i = Ad.NONE), l.preload = i, a.on(Ii, (function() {
            r && d(r)
        })), a.on(g.LOAD_SEGMENT_FAILED, (function(e) {
            mc.captureException(e)
        })), e.inView().then((() => {
            s && d(s)
        }))
    }

    function ne() {
        L = !1;
        const t = l.video;
        if (l.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (l.hasTextTrack(t)) {
                    const e = !0;
                    a.fire(jt, t, e)
                }
            } else a.on(g.TEXT_TRACKS_AVAILABLE, (() => {
                n(), i()
            })), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (l.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                a.fire(jt, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(s).forEach((t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = s[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some((e => e.id === r));
                e.store.dispatch(i(a ? r : Qc[t]))
            }))
        }
    }

    function ie(e, t, n, i) {
        if (_) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), _ = !1
        }
    }

    function oe() {
        e.startTime > 0 && a.fire(cn, e.startTime, e.startTime / l.duration)
    }

    function re() {
        if (e.config.embed.autoplay) {
            var n, i;
            if (t.get(Ed) && !t.get(bd)) return;
            if (t.get(Ed) && !As(null == (n = e.config.video) ? void 0 : n.live_event)) return void setTimeout((function() {
                a.fire($o), a.fire(Fn, {
                    fromUserGesture: !1
                })
            }), Ls(null == (i = e.config.video) ? void 0 : i.live_event));
            a.fire(Fn, {
                fromUserGesture: !1
            })
        }
    }
    l.element.classList.add("invisible"), d && l.element.classList.add("hide-webkit-controls"), e.config.video.live_event && i.classList.add("live-background"), e.config.embed.transparent && i.classList.add("transparent"), t.watch(gd, (function(e) {
            e === Pr && setTimeout((() => {
                ne(), l.element.classList.remove("invisible"), a.fire($o), a.fire(Fn, {
                    fromUserGesture: !1
                })
            }), Xr)
        })), t.watch(Td, r), t.watch("ui.video.scaleFactor", (e => {
            l.element.classList.toggle("vp-telecine-cover", e > 1)
        })),
        function t() {
            a.once(eo, t), l = e.backbone, Tr(l.on, a.fire, [D, w, k, y, M, V, B, U, x, F, H, W, G.ACTIVATED, G.AVAILABLE, G.DEACTIVATED, G.UNAVAILABLE, Y.ARCHIVE_DONE, Y.EVENT_ACTIVE, Y.EVENT_ENDED, Y.EVENT_STARTED, Y.STREAM_OFFLINE, Y.STREAM_ONLINE, Y.BUFFER_GAP_JUMP, Y.BUFFER_GAP_JUMP_PREVENT, Y.STALL_JUMP, Y.SETTINGS_UPDATED, Y.LOW_LATENCY_FALLBACK, Y.LIVE_STATS_SUCCESS, Y.LIVE_STATS_FAILURE, Y.LATENCY_UPDATED, $.MEDIASESSION_PAUSE, $.MEDIASESSION_PLAY, $.MEDIASESSION_SEEK_BACKWARD, $.MEDIASESSION_SEEK_FORWARD, $.MEDIASESSION_SEEK_TO, g.AV_DURATION_MISMATCH, g.BANDWIDTH, g.BUFFER_ENDED, g.BUFFER_OCCUPANCY, g.BUFFER_STARTED, g.CHAPTER_CUES_UPDATED, g.CUE_POINT, g.NO_SUPPORTED_CDM, g.CURRENT_FILE_CHANGE, g.DOWNLOAD_END, g.DOWNLOAD_TIMEOUT, g.DRM_AUTH_SUCCESS, g.DRM_CDM_CHANGE, g.DRM_KEY_SWITCH, g.DROPPED_FRAMES, g.MANIFEST_LOADED, g.MANIFEST_TIMEOUT, g.QUOTA_EXCEEDED_ERROR, g.SCANNER_CHANGE, g.STREAM_BUFFER_START, g.STREAM_CHANGE, g.STREAM_CHANGE_START, g.STREAM_TARGET_CHANGE, g.AVAILABLE_STREAMS_CHANGED, g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, g.TEXT_TRACKS_AVAILABLE, g.DROPPED_FRAME_PERCENT_EXCEEDED, g.LOAD_SEGMENT_FAILED, g.AUDIO_TRACK_CHANGED, g.SEGMENT_CUES_LOADED, K.CAMERA_CHANGE, K.CAMERA_UPDATE, K.MOTION_END, K.MOTION_START, K.SPATIAL_UNSUPPORTED, K.WEBVR_ENTER, K.WEBVR_EXIT, K.WEBVR_HARDWARE_AVAILABLE, h.DURATION_CHANGE, h.ENDED, h.ERROR, h.LOAD_START, h.LOADED_DATA, h.LOADED_METADATA, h.PAUSE, h.PLAY, h.PLAYING, h.PROGRESS, h.RATE_CHANGE, h.RESIZE, h.SEEKED, h.SEEKING, h.STALLED, h.TIME_UPDATE, h.VOLUME_CHANGE, h.WAITING, h.ENTER_PICTURE_IN_PICTURE, h.LEAVE_PICTURE_IN_PICTURE, h.WEBKIT_BEGIN_FULLSCREEN, h.WEBKIT_END_FULLSCREEN])
        }(), Tr(dd.on, a.fire, [ld.connected, ld.disconnected]), te(), a.on(h.LOADED_METADATA, (function(t) {
            e.config.video.duration = l.duration, e.config.video.video_width = l.videoWidth, e.config.video.video_height = l.videoHeight
        })), a.on(h.DURATION_CHANGE, (function(t) {
            e.config.video.duration = l.duration
        })), a.on(g.SCANNER_CHANGE, (() => {
            te(), setTimeout((() => {
                a.fire(q.settingVolume ? $t : Yt), a.fire(q.textTracks ? qt : Kt)
            }), 0), mc.captureBreadcrumb(`Scanner changed to ${l.currentScannerName}`, {}, "video")
        })), a.on([Y.EVENT_ACTIVE, Y.EVENT_STARTED, Y.EVENT_ENDED, Y.ARCHIVE_DONE], (n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: ud,
                payload: e
            }))(n))
        })), a.on(Fn, (function(t) {
            o.isGoogleBot || e.progressController.canPlayNow && (e.displayContext !== e.backbone ? e.displayContext.play() : function(t = {
                fromUserGesture: !0
            }) {
                var n;
                if (("disable" === e.config.video.privacy || !e.config.video.spatial || o.spatialPlayback || L) && l.element.classList.remove("invisible"), v) return a.fire(Cn, null == (n = v) ? void 0 : n.type, v), void a.fire(En);
                if (u = !0, f) a.fire(En);
                else {
                    if (l.off(h.PLAY, S), c && (b = !0, a.fire(zt)), t.fromUserGesture || (A = !0), !p) return !e.config.video.spatial || o.spatialPlayback || L ? void I().catch(console.error) : (L = !0, a.fire(Ut, "spatial-redirect", "browser-support"), void a.once(h.PLAY, S));
                    p && ee()
                }
            }(t))
        })).on(xn, (() => {
            u = !1, e.displayContext.pause()
        })).on(Ji, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !l.paused && !e.config.embed.settings.background || u) && (u = !1, a.fire(xn))
        })), a.on(h.ERROR, (function(t) {
            if (P(t) && !A) {
                if (e.config.embed.autoplay = 0, l.pause(), e.startTime) return Q(e.startTime), void a.fire(Ln, l.currentTime);
                if (0 === l.currentTime) return void a.fire(xt);
                a.fire(Ln, l.currentTime)
            }
        })), a.on(h.PLAY, (function(e) {
            l.element.classList.remove("invisible"), p = !0
        })), a.on(h.PAUSE, (function(e, t) {
            m || a.fire(Ln, e, t)
        })), a.on(h.TIME_UPDATE, (function({
            currentTime: e
        }) {})), a.on(h.ENDED, (function(t) {
            m || e.config.embed.loop || (b && a.fire(Un), u = !1, a.fire(In, t))
        })), a.on(g.DRM_AUTH_SUCCESS, (() => {
            _ = !0
        })), a.on(y, (() => {
            p = !0, a.once(h.TIME_UPDATE, (() => {
                a.fire(Dn)
            }))
        })), a.on(g.BUFFER_STARTED, (() => {})),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                var r, l;
                if (t) return;
                if (o.name.includes(z)) return;
                if (o.name === j) return void a.fire(Kt);
                mc.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let s = e.config.video.live_event ? .25 : .01;
                if (o.name === X && !n) {
                    n = !0, s = .5;
                    const t = e.config.request,
                        i = t.files,
                        r = i.dash.cdns.fastly_skyfire.url,
                        a = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        _ = t.file_codecs,
                        p = e.config.video.file_codecs,
                        m = e.config.user.logged_in,
                        v = t.build.js;
                    mc.captureBreadcrumb(o.name, {
                        fastly_dash_url: r,
                        fastly_hls_url: a,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: _,
                        video_file_codecs: p,
                        logged_in: m,
                        version: v
                    }, "MediaUrlBadRequest config", "error")
                }
                const c = "string" != typeof o.message ? o.name : o.message,
                    d = new Error(c);
                d.name = o.name;
                const u = "object" == typeof o.message ? o.message : null;
                mc.captureException(d, u, s);
                const _ = ma[o.name];
                if ("function" == typeof _) {
                    if (v = _(), null != (r = v) && r.final && a.off(h.ERROR, i), o.name === Z) {
                        let t = e.config.request.dynamic_drm_translation_map,
                            n = o.message.code;
                        v && t && n && t[n] && (v.title = t[n].title, v.message = t[n].msg), mc.captureBreadcrumb("DRM failure", o, "video")
                    }
                    a.fire(Cn, null != (l = v) && l.deferred ? v.type : null, v, c)
                }
            }
            window.addEventListener("pagehide", (() => {
                t = !0
            }), !1), a.on(h.ERROR, i), a.on("test-error", i)
        }(), a.on(Ft, (function(t) {
            const n = !!t && ("boolean" == typeof o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, l.loop = n
        })), a.fire(Ft, e.config.embed.loop), a.on(Gn, ((t, n) => {
            e.events.fire(Yn, n), e.events.fire(Mt, t), p || a.fire(Fn)
        })), a.on(Kn, (function() {
            f || (m || (u = !l.paused), m = !0, l.pause())
        })), a.on(qn, (function(e) {
            function t() {
                m = !1
            }
            return p ? !e && u ? (a.once(yn, t), void ee(!0)) : void t() : (a.once(yn, t), void a.fire(Fn))
        })), a.on(Mt, (function(t) {
            f || (t = e.progressController.getAllowedSeekTime(t), a.fire(cn, t))
        })), a.on(cn, (function(t) {
            p || e.fragmentsHandler.checkForNewFragment(t, l.duration), Q(t)
        })),
        function() {
            a.on(Vt, (function(t, n, i, o = !0) {
                i && (t += l.volume), t = gr(t = mr(t, 0, 1)), e.displayContext !== l && (e.displayContext.volume = t), l.volume = t, e.events.fire(On, t, n), l.muted && o && e.events.fire(Bt, !1, n)
            })), a.on(Bt, (function(t, n = !1) {
                l.muted = !!t, e.displayContext !== l && (e.displayContext.muted = t), e.events.fire(Pn, t, n)
            })), a.on(h.VOLUME_CHANGE, (() => {
                a.fire(On, l.volume, !0)
            }));
            const t = e.config.request.cookie.volume;
            a.fire(Vt, t, !0), a.fire(Bt, e.config.embed.muted, !0)
        }(),
        function() {
            let e;
            a.on(Ht, (function(n, i) {
                (l.video.currentFile.mime === kt.dash || t.get(bd)) && (i = !0), e = i, l.quality = n
            })), a.on(M, (function(t) {
                a.fire(Rn, t, e)
            }))
        }(),
        function() {
            let e = l.playbackRate;
            a.on(h.RATE_CHANGE, (function(t) {
                l.playbackRate !== e && (a.fire(wn, l.playbackRate, e), e = l.playbackRate)
            })), a.on(_n, (function(e) {
                l.playbackRate = e
            })), a.on(Qi, (function() {
                try {
                    l.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                f = !0, E = e, e !== Ld && p && !T && (u = u || !l.paused, l.pause(), a.fire(Ln, l.currentTime))
            }

            function t() {
                const e = E === Os.LEAD_CAPTURE_FORM && !p;
                f = !1, E = null, e ? a.fire(Fn) : u && !T && (b || C || !c || a.fire(zt), ee())
            }
            a.on(vi, e), a.on(jo, e), a.on(fi, t), a.on(Xo, t), a.on(Zn, (function(n) {
                n && n !== Hr && n.isCentered() && (n.isVisible() ? e() : t())
            }))
        }(), a.on(Ci, (function(e) {
            p && !T && (u = !l.paused, l.pause())
        })), a.on(yi, (function(e) {
            T || ee()
        })), a.on(ri, (function(e, t) {
            l.element.classList.remove("hide-webkit-controls"), e && (C = !0), e || (p || o.browser.safari || (l.poster = (e => {
                const t = e.querySelector(`.${Jr.VP_PREVIEW}`);
                return t && t.getAttribute("data-thumb") || ""
            })(i)), b = !0, setTimeout((() => {
                l.textTracks.forEach((e => {
                    "hidden" === e.mode && (e.mode = "showing")
                }))
            }), 500)), t || !o.windowsPhone || o.browser.edge || a.fire(Qt, !0)
        })), a.on(li, (function(t) {
            l.poster = "", t || l.pause(), p || e.segmentedPlaybackEnabled || l.element.classList.add("invisible"), b = !1, C = !1, d && l.element.classList.add("hide-webkit-controls"), l.textTracks.forEach((e => {
                "showing" === e.mode && (e.mode = "hidden")
            }))
        })), a.on(y, (function() {
            l.poster = ""
        })), a.on(Qt, (function(e) {
            if (e) return l.controls = !0, void i.classList.add("native-controls");
            l.controls = !1, i.classList.remove("native-controls")
        })), a.on(Yi, (function() {
            ne()
        })), a.on(Bi, (function() {
            ne(), re()
        })), a.on(xt, (function() {
            if (e.segmentedPlaybackEnabled) oe();
            else {
                const t = e.element.querySelector("[telecine-snapshot]");
                t && "none" !== t.style.display || (a.fire(En), l.element.classList.add("invisible")), setTimeout((() => {
                    l.unload(), a.fire(Ln, l.currentTime), p = !1, u = !1, v = null
                }), 300)
            }
        })),
        function() {
            let t;
            a.on(jt, (function(n, i = !1) {
                t = i;
                try {
                    var o;
                    (null != (o = e.config.request.flags) && o.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && l.videoElement && l.videoElement.setAttribute("crossorigin", "anonymous"), l.enableTextTrack(n)
                } catch (r) {}
            })).on(Xt, (function(n = !1) {
                var i;
                t = n, null != (i = e.config.request.flags) && i.ott && l.videoElement && l.videoElement.removeAttribute("crossorigin"), l.disableTextTrack()
            })).on(vn, (function() {
                l.requestCompleteLiveSubtitles()
            })).on(hn, (function(e) {
                l.setCaptionsShouldLoad(e)
            })), a.on(D, (function(e, n) {
                e && l.enableTextTrack(e.id), a.fire(Jn, e, t || n)
            })), a.on(h.WEBKIT_BEGIN_FULLSCREEN, (function() {
                var e;
                null == (e = l.videoElement) || e.setAttribute("crossorigin", "anonymous")
            })), a.on(h.WEBKIT_END_FULLSCREEN, (function() {
                var t, n;
                null != (t = e.config.request.flags) && t.ott || null == (n = l.videoElement) || n.removeAttribute("crossorigin")
            }))
        }(), a.on(G.AVAILABLE, (function({
            type: t
        }) {
            e.config.request.drm || "AirPlay" !== t || a.fire(fo)
        })), a.on(G.UNAVAILABLE, (function({
            type: t
        }) {
            e.config.request.drm || "AirPlay" !== t || a.fire(ho)
        })), a.on(G.ACTIVATED, (function({
            type: e
        }) {
            T = !0, "AirPlay" === e && a.fire(Eo)
        })), a.on(G.DEACTIVATED, (function({
            type: e
        }) {
            T = !1, "AirPlay" === e && a.fire(go)
        })), a.on(bo, (function() {
            l.showExternalDisplayPicker("AirPlay")
        })), a.on(rn, (() => {
            e.canPlayPictureInPicture && l.requestPictureInPicture()
        })), a.on(an, (() => {
            l.pictureInPictureEnabled && l.exitPictureInPicture()
        })), ne(), o.spatialPlayback ? (a.fire(ln), a.on([h.PLAY, h.SEEKED], (() => {
            a.fire(sn)
        })), a.on(K.SPATIAL_UNSUPPORTED, (() => {
            p ? a.fire(Tt, f) : a.once(Dn, (() => {
                a.fire(Tt, f)
            }))
        }))) : a.once(Dn, (() => {
            e.config.video.spatial && a.fire(Ct, f)
        })), window.addEventListener("beforeunload", (() => {
            const t = e.config.request.drm;
            t && ie(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), !1), a.on(Qi, (() => {
            const t = e.config.request && e.config.request.drm;
            t && ie(t.hoover_url, t.user, t.asset, t.hoover_token)
        })), e.events.on(pn, (() => l.destroy())), "mediaSession" in navigator && (a.on(h.LOADED_METADATA, (() => (navigator.mediaSession.setActionHandler("play", (() => {
            I().then((() => l.fire($.MEDIASESSION_PLAY))).catch(console.error)
        })), navigator.mediaSession.setActionHandler("pause", (() => {
            l.pause(), a.fire($.MEDIASESSION_PAUSE)
        })), navigator.mediaSession.setActionHandler("seekto", (e => {
            l.currentTime = e.seekTime, a.fire($.MEDIASESSION_SEEK_TO)
        })), navigator.mediaSession.setActionHandler("seekforward", (() => {
            l.currentTime = Math.min(l.duration, l.currentTime + 10), a.fire($.MEDIASESSION_SEEK_FORWARD)
        })), void navigator.mediaSession.setActionHandler("seekbackward", (() => {
            l.currentTime = Math.max(0, l.currentTime - 10), a.fire($.MEDIASESSION_SEEK_BACKWARD)
        }))))), a.on(h.PLAY, (() => (() => {
            const t = {
                title: e.config.video.title,
                artist: `from ${e.config.video.owner.name}`,
                artwork: [{
                    src: n(e.config.video.thumbnail_url, {
                        w: "640"
                    })
                }]
            };
            navigator.mediaSession.metadata = new MediaMetadata(t)
        })()))), e.ready().then((() => (setTimeout((() => re()), 0), oe(), null))).catch((e => {})), a.fire(uo)
}

function Nd(e) {
    return "dev" === e.request.build.js ? "dev" : kr
}
const Dd = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    wd = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    kd = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    Md = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    Vd = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    Bd = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    Ud = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    xd = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    Fd = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    Hd = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    };

function Wd(e) {
    var t, n, i, o, r = new Q;

    function a() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function l() {
        t = !1, n = e.backbone ? e.backbone.currentTime : 0, i = 0, o = 0
    }

    function s(t, n, i) {
        e.verifyConfig().then((() => {
            let o = n;
            o.signature = e.config.request.signature, o.session = e.config.request.session, o.time = e.config.request.timestamp, o.expires = e.config.request.expires;
            const a = JSON.stringify(o);
            if (null === o.sessionTime && (mc.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: o
                }), mc.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const l = e.config.request.urls.player_telemetry_url + t;
            return r.logRequestPromiseWithUrl(l, a).then((t => {
                if (200 !== t.status && i < 2) {
                    if (410 === t.status) return void e.events.once(Yi, (() => {
                        s(l, n, i + 1)
                    }));
                    setTimeout((() => {
                        s(l, n, i + 1)
                    }), 1e3)
                }
            })).catch((e => {
                throw e
            }))
        })).catch((e => {}))
    }

    function c(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: null != (i = e.config.video.vod) && i.id ? e.config.video.vod.id : null,
            vodSaleId: null != (o = e.config.video.vod) && o.sale_id ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: gr(e.config.video.duration),
            seconds: gr(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: Nd(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        s("/log/" + t, r)
    }
    return l(),
        function() {
            e.events.on(h.TIME_UPDATE, (function({
                currentTime: e,
                _duration: r,
                _timeProgress: l,
                playbackRate: s
            }) {
                !t && o + 1e3 < a() && (e > n && !(0 !== e && 0 === n) && (i += (e - n) / s), n = e)
            })), e.events.on(wn, (function(e, t) {
                c("playback_rate_change", {
                    oldPlaybackRate: t
                })
            })), e.events.on(Kn, (function() {
                o = a(), t = !0
            })), e.events.on(qn, (function() {
                n = e.backbone.currentTime, t = !1
            })), e.events.on(In, (function() {
                e.backbone.isLive() || (i += e.config.video.duration - n)
            }));
            let r = [],
                l = !1;

            function d() {
                let t = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                    n = 100,
                    o = Math.round(t.lat * n) / n,
                    a = Math.round(t.long * n) / n;
                const s = {
                    sessionTime: i,
                    videoTime: e.backbone.currentTime,
                    coordinates: {
                        lat: o,
                        lon: a
                    }
                };
                r.push(s), setTimeout((() => {
                    l && d()
                }), 1e3)
            }

            function u() {
                r.length && e.performDelegateAction(Hd, ((t, n = {}) => {
                    var i, o;
                    s("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: null != (i = e.config.video.vod) && i.id ? e.config.video.vod.id : null,
                        vodSaleId: null != (o = e.config.video.vod) && o.sale_id ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: Nd(e.config),
                        motionLog: JSON.stringify(r)
                    }, !1)
                }))
            }
            e.events.on(K.MOTION_START, (() => {
                l = !0, d()
            })), e.events.on(K.MOTION_END, (() => {
                l = !1, u()
            })), e.events.on(Qi, (() => {
                u(), r = []
            })), window.addEventListener("pagehide", (function() {
                e.backbone && e.backbone.currentTime > 0 && u()
            }), !1)
        }(),
        function() {
            let t;
            [{
                type: "share_press",
                event: di
            }, {
                type: "facebook_press",
                event: hi
            }, {
                type: "twitter_press",
                event: Ei
            }, {
                type: "tumblr_press",
                event: gi
            }, {
                type: "email_press",
                event: bi
            }, {
                type: "embed_press",
                event: ui
            }, {
                type: "login_success",
                event: ki
            }, {
                type: "airplay",
                event: Eo
            }, {
                type: "vod_press",
                event: _i
            }, {
                type: "collection_press",
                event: pi
            }].forEach((function(t) {
                e.events.on(t.event, function(e) {
                    return function() {
                        c(e)
                    }
                }(t.type))
            })), e.events.on(Jo, (function(e) {
                t = e
            })).on(zi, (function() {
                var n, i = {
                    outroType: e.config.embed.outro,
                    ownerAccountType: e.config.video.owner.account_type,
                    playerWidth: e.element.clientWidth,
                    playerHeight: e.element.clientHeight
                };
                null != (n = t) && null != (n = n.videos) && n.length && (i.outroVideos = t.videos.map((e => e.id)).join(",")), c("outro_displayed", i)
            })).on(Xi, (function(t) {
                c("outro_video_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    videoId: t
                })
            })).on(mi, (function() {
                c("outro_follow_press", {
                    add: !e.config.user.following
                })
            })).on(ro, (function(t) {
                c("outro_cta_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(to, (function(t) {
                c("outro_link_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(oo, (function(t) {
                c("outro_image_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(si, (function() {
                c("like_press", {
                    add: !e.config.user.liked
                })
            })).on(ci, (function() {
                c("watch_later_press", {
                    add: !e.config.user.watch_later
                })
            })).on(Ci, (function(e) {
                0 === e.indexOf("login-") && c("login_attempt")
            })).on(Jn, (function(e, t) {
                t || (e ? c("text_track_change", {
                    textTrackLanguage: e.language,
                    textTrackKind: e.kind
                }) : c("text_track_change"))
            })).on(ii, (function(e) {
                1 !== e && 12 !== e || c("badge_press", {
                    badgeId: e
                })
            })).on(lo, (function(t) {
                c("card_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    cardId: t,
                    cardType: "link"
                })
            })).on(ao, (function(t, n) {
                e.config.embed.editor || c("card_displayed", {
                    ownerAccountType: e.config.video.owner.account_type,
                    cardId: t,
                    cardType: n.url ? "link" : "text"
                })
            }))
        }(), e.events.on(Bi, (function(e) {
            e && l()
        })), e.events.fire(_o), {}
}
const Gd = {
    settings: {}
};

function Yd(e = Gd, {
    type: t,
    payload: n
}) {
    return t === vd ? r(r({}, e), n.embed) : e
}
var $d = Object.freeze({
    __proto__: null,
    default: Yd,
    transparent: e => e.embed.transparent
});

function Kd(e = {}, {
    type: t,
    payload: n
}) {
    return t === vd ? r(r({}, e), n.video) : e
}
const qd = e => e.video.height / e.video.width;
var zd = Object.freeze({
    __proto__: null,
    default: Kd,
    ratio: qd
});
const jd = "CONTAINER_RESIZE",
    Xd = "PLAYER_CONTAINER_RESIZE";

function Zd(e = {}, t) {
    return t.type === jd ? r(r({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var Jd = Object.freeze({
    __proto__: null,
    default: Zd,
    width: e => e.ui.container.width,
    height: e => e.ui.container.height
});

function Qd(e = {}, t) {
    return t.type === Xd ? r(r({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var eu = Object.freeze({
    __proto__: null,
    default: Qd,
    width: e => e.ui.playercontainer.width,
    height: e => e.ui.playercontainer.height
});
const tu = "PREVIEW_SET_SIZE";

function nu(e = {}, t) {
    return t.type === tu ? r(r({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var iu = Object.freeze({
    __proto__: null,
    default: nu,
    scaleFactor: e => pr({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: pu.width(e),
        elementHeight: pu.height(e)
    }).scaleFactor
});

function ou(e = Qc, t) {
    switch (t.type) {
        case wc:
            return r(r({}, e), Qc);
        case kc:
            return r(r({}, e), {}, {
                fontSize: t.payload
            });
        case Bc:
            return r(r({}, e), {}, {
                color: t.payload
            });
        case Mc:
            return r(r({}, e), {}, {
                fontFamily: t.payload
            });
        case Vc:
            return r(r({}, e), {}, {
                fontOpacity: t.payload
            });
        case Uc:
            return r(r({}, e), {}, {
                bgOpacity: t.payload
            });
        case xc:
            return r(r({}, e), {}, {
                bgColor: t.payload
            });
        case Hc:
            return r(r({}, e), {}, {
                windowColor: t.payload
            });
        case Fc:
            return r(r({}, e), {}, {
                windowOpacity: t.payload
            });
        case Wc:
            return r(r({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var ru = Object.freeze({
    __proto__: null,
    default: ou,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * pu.height(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const au = e => {
        const t = t => Math.min(e.height(t) / qd(t), e.width(t)),
            n = t => Math.min(e.width(t) * qd(t), e.height(t)),
            i = i => pr({
                width: t(i),
                height: n(i),
                elementWidth: e.width(i),
                elementHeight: e.height(i)
            }).scaleFactor,
            o = e => i(e) > 1,
            r = n => n.embed.transparent && !o(n) ? t(n) : e.width(n),
            a = t => t.embed.transparent && !o(t) ? n(t) : e.height(t),
            l = e => e.embed.transparent && !o(e) ? "contain" : "100% 100%",
            s = ee((e => ({
                width: r(e),
                height: a(e)
            }))),
            c = ee((e => ({
                ratio: qd(e),
                size: l(e)
            })));
        return {
            scaleFactor: i,
            width: r,
            height: a,
            size: l,
            boundingRect: s,
            settings: c
        }
    },
    lu = {
        xxs: 0,
        xs: 430,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    su = (e, t) => {
        const n = ee((n => ({
                width: e(n),
                height: t(n)
            }))),
            i = e => {
                const {
                    height: t,
                    width: n
                } = e.video;
                return t > n
            },
            o = n => {
                const o = e(n),
                    r = t(n);
                if (i(n)) return o < 225;
                const a = c(n.embed.settings.customLogo) && o < 300 || r < 169,
                    l = !c(n.embed.settings.customLogo) && (o < 338 || r < 190);
                return a || l
            },
            r = t => {
                const n = e(t);
                if (i(t)) return n < 300;
                const o = c(t.embed.settings.customLogo) && n <= 375,
                    r = !c(t.embed.settings.customLogo) && n <= 450;
                return o || r
            },
            a = t => {
                const n = e(t);
                return n >= lu.xxs && n < lu.xs
            },
            l = t => {
                const n = e(t);
                return n >= lu.xs && n < lu.sm
            },
            s = t => {
                const n = e(t);
                return n >= lu.sm && n < lu.md
            },
            d = t => {
                const n = e(t);
                return n >= lu.md && n < lu.lg
            },
            u = t => {
                const n = e(t);
                return n >= lu.lg && n < lu.xl
            },
            _ = t => {
                const n = e(t);
                return n >= lu.xl && n < lu.xxl
            },
            p = t => e(t) >= lu.xxl;
        return {
            width: e,
            height: t,
            breakpoint: e => {
                const t = {
                    xxs: a,
                    xs: l,
                    sm: s,
                    md: d,
                    lg: u,
                    xl: _,
                    xxl: p
                };
                return Object.keys(lu).find((n => t[n](e)))
            },
            xxl: p,
            xl: _,
            lg: u,
            md: d,
            sm: s,
            xs: l,
            xxs: a,
            mode: e => o(e) ? "tiny" : r(e) ? "mini" : "normal",
            isMiniMode: r,
            isTinyMode: o,
            isVerticalVideo: i,
            boundingRect: n
        }
    };
var cu = Object.freeze({
    __proto__: null,
    scaleFactor: e => pr({
        width: e.video.width,
        height: e.video.height,
        elementWidth: pu.width(e),
        elementHeight: pu.height(e)
    }).scaleFactor
});
const du = e => pu.isVerticalVideo(e) ? pu.isTinyMode(e) : pu.isMiniMode(e) || pu.isTinyMode(e) || pu.xs(e) || pu.xxs(e);
var uu = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && pu.width(e) < 415,
    isMenuFullWidth: du,
    isMenuVerticalVideoMode: e => !du(e) && pu.isVerticalVideo(e) && pu.xxs(e) && pu.height(e) > 300,
    doMenuItemsWrap: e => pu.width(e) < 240
});

function _u(e = {}, t) {
    return {
        container: Zd(e.container, t),
        preview: nu(e.preview, t),
        captions: ou(e.captions, t),
        playercontainer: Qd(e.playercontainer, t)
    }
}
const pu = su((e => fu.width(e)), (e => fu.height(e))),
    mu = su((e => vu.width(e)), (e => vu.height(e))),
    vu = au(Jd),
    fu = au(eu);
var hu = Object.freeze({
    __proto__: null,
    default: _u,
    container: Jd,
    player: pu,
    appLayout: vu,
    playerLayout: fu,
    preview: iu,
    video: cu,
    controlbar: uu,
    captions: ru,
    playercontainer: eu,
    app: mu
});

function Eu(e = {}, t) {
    const n = r(r({}, function(e = {}, t) {
        return t.type === vd ? r(r({}, e), t.payload) : e
    }(e, t)), {}, {
        embed: Yd(e.embed, t),
        video: Kd(e.video, t),
        liveEvent: hd(e.liveEvent, t)
    });
    return r(r({}, n), {}, {
        ui: _u(e.ui, t)
    })
}
var gu = Object.freeze({
    __proto__: null,
    default: Eu,
    embed: $d,
    video: zd,
    liveEvent: yd,
    ui: hu
});
const bu = function(e) {
    return (t, ...n) => (n.forEach((n => {
        for (const i in n) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            Object.defineProperty(t, i, Object.assign(o, e))
        }
    })), t)
}({
    enumerable: !0,
    configurable: !0,
    writeable: !1
});

function Cu(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Tu() {}

function yu(e) {
    var t = e();
    if (t && t.then) return t.then(Tu)
}

function Lu(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}

function Au(e, t, n) {
    const i = Lu((function() {
            return yu((function() {
                if (!c()) return Cu(e.ready(), (function() {
                    s()
                }))
            }))
        })),
        o = Lu((function() {
            return yu((function() {
                if (!c()) return Cu(e.playbackEngineReady(), (function() {
                    s()
                }))
            }))
        })),
        r = c() ? n.parentElement : n,
        a = n.querySelector(`.${Jr.VP_VIDEO_WRAPPER}`),
        l = E(s, 150);

    function s() {
        (function() {
            const {
                width: e,
                height: n
            } = ur(r), i = t.get("ui.app.width"), o = t.get("ui.app.height"), a = i > 0 && o > 0, l = e > 0 && n > 0;
            (c() || !a || l) && t.dispatch(((e, t) => ({
                type: jd,
                payload: {
                    width: e,
                    height: t
                }
            }))(e, n))
        })(),
        function() {
            const {
                width: e,
                height: n
            } = ur(a), i = t.get("ui.player.width"), o = t.get("ui.player.height"), r = i > 0 && o > 0, l = e > 0 && n > 0;
            (c() || !r || l) && t.dispatch(((e, t) => ({
                type: Xd,
                payload: {
                    width: e,
                    height: t
                }
            }))(e, n))
        }()
    }

    function c() {
        return n.parentElement === document.body
    }

    function d({
        size: e,
        ratio: t,
        bottom: i
    }) {
        c() && (r.classList.toggle("vp-center", "contain" === e), function(e) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map((t => e.style.removeProperty(t)))
        }(n), "contain" !== e ? i > 0 && Cr(n, {
            height: `calc(100% - ${i}px)`,
            bottom: i / 2 + "px"
        }) : Cr(n, i > 0 ? {
            maxWidth: `calc((100vh - ${i}px) / ${t})`,
            maxHeight: `calc(100vh - ${i}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: i / 2 + "px"
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.appLayout.settings", d), d(t.get("ui.appLayout.settings")), new ResizeObserver(l).observe(r), window.addEventListener("orientationchange", l), e.events.on(ri, l), e.events.on(li, l), e.events.on(Bi, l), s(), o(), i(), Cu()
}

function Su(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function Iu(e) {
    const {
        videoObject: t
    } = Pu();
    null == e || !e.length || null != t && t.transcript || Ou({
        transcript: e.map((({
            text: e
        }) => e)).join(" ")
    })
}

function Ou(e) {
    const {
        videoObject: t,
        element: n
    } = Pu();
    if (t) try {
        Object.assign(t, e), n.textContent = JSON.stringify(t)
    } catch (i) {}
}

function Pu() {
    const e = document.body.querySelector("script[type='application/ld+json']");
    if (e) try {
        return {
            videoObject: JSON.parse(e.textContent),
            element: e
        }
    } catch (t) {}
    return {}
}

function Ru(e, t) {
    switch (e.view) {
        case Nr.privateLocked:
            throw new ie("The video is private.", "PrivacyError", t);
        case Nr.privatePassword:
            throw new ie("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case Nr.geoBlocked:
            throw new ie("The video is not available in your region.", "GeoBlockedError", t);
        case Nr.error:
            throw new ie(e.message, "NotFoundError", t)
    }
}

function Nu(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}
const Du = [Dr.READY, Dr.ERROR, Dr.DRM_INIT_FAILED];

function wu(e) {
    const t = e.events;
    let n, i, o, l = new P,
        s = !1,
        c = !1,
        d = null,
        u = !1,
        _ = null,
        p = null,
        m = !1,
        v = [];

    function f(t) {
        i !== t && (i = t, e.config.embed.api = t)
    }

    function E() {
        n && n.emit("exitFullscreen"), e.events.halt()
    }

    function b() {
        var t = gr(e.config.request.cookie.volume);
        return 1 === i ? Math.round(100 * t) : t
    }

    function C(n, i, o, r = []) {
        const l = qr[i];
        let s = e.config.embed[l];
        s || i !== Gr || (s = e.config.embed.color);
        let c = e.config.embed.settings[`force_${l}`];
        if (c || i !== Gr || (c = e.config.embed.settings.color), c && !e.config.embed.on_site) throw new ie(`The creator of the video has chosen to always use ${new a(s).hex}.`, "EmbedSettingsError", o);
        try {
            const o = new a(n);
            t.fire(Gt, o.hex, i), r.forEach((function(t) {
                const n = qr[t],
                    i = e.config.embed[n];
                try {
                    new a(i).contrast(o).ratio
                } catch (xe) {}
            }))
        } catch (xe) {
            throw new ie("The color should be a valid hex value.", "TypeError", o)
        }
    }
    let T = {
        ping: () => e.config.video.id,
        notifyTimingObjectConnect() {
            e.bigPicture.sendEvent(Gl.TIMING_OBJECT_CONNECT)
        },
        notifyTimingObjectDisconnect() {
            e.bigPicture.sendEvent(Gl.TIMING_OBJECT_DISCONNECT)
        },
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t);
            const i = !0;
            t ? (e.events.prependOn(Un, E), n.listeners.exitFullscreen = !0, e.events.fire(oi), e.events.fire(ri, !0, i)) : (e.events.off(Un, E), n.listeners.exitFullscreen = !1, e.events.fire(ai), e.events.fire(li, i))
        },
        on(e, t) {
            e in wr && (e = wr[e]);
            const i = yr(Dr);
            if (i.indexOf(e) < 0) throw new ie(`“${e}” is not a valid event. Valid events are: ${i.join(", ")}.`, "TypeError", "on");
            t && l.on(e, t), n && (n.listeners[e] = !0), e === Dr.LOADED && O()
        },
        off(e, t) {
            t && l.off(e, t), n && (n.listeners[e] = !1)
        },
        play: () => new Promise(((n, i) => {
            t.once(yn, n), t.once(Tn, (e => {
                i(new ie(e.message, e.name, "play"))
            })), Ru(e.config, "play"), t.fire(Ir._play), t.fire(Fn, {
                fromUserGesture: !1
            })
        })),
        destroy() {
            t.fire(pn)
        },
        pause() {
            Ru(e.config, "pause"), t.fire(Ir._pause), t.fire(xn)
        },
        loadVideo(t) {
            const {
                id: i,
                url: o,
                params: r
            } = function(e) {
                if (!e) return {};
                if (lr(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!lr(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!i && !o) throw new ie("The video id must be an integer.", "TypeError", "loadVideo");
            if (o && ! function(e, t) {
                    return null !== e.match(new RegExp(`^https?://${t.player_url}/video/([0-9]+)`)) || null !== e.match(new RegExp(`^https?://${t.vimeo_url}/([0-9]+)`))
                }(o, e.config)) throw new ie("The url must be a valid Vimeo url.", "TypeError", "loadVideo");
            const a = function(e, t, n, i) {
                var o;
                if (t === e.video.id) return !0;
                const r = `^https?://${e.player_url}/video/${e.video.id}(/(config/?)?)?(\\?.*)?$`,
                    a = `^https?://${e.player_url}/video/([0-9]+)`;
                if (null != n && n.match(new RegExp(r))) return !0;
                const l = Pl(n || "", "s") || (null == i || null == (o = i.s) ? void 0 : o.length);
                return !(!n || null === n.match(new RegExp(a)) || !l)
            }(e.config, i, o, r) || !bs(e.element);
            if (a) return e.loadVideoViaConfig(o || i, r).then((() => t)).catch((() => {
                throw Ru(e.config, "loadVideo"), new ie("An error occurred loading the video.", "Error", "loadVideo")
            }));
            throw e.loadVideoViaIframe(o || i, r, n.listeners), new ie("The player is being reloaded.", "InternalError", "loadVideo")
        },
        unload() {
            e.config.view !== Nr.main && e.config.view !== Nr.privateUnlocked || t.fire(xt)
        },
        addCuePoint(n, i) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new ie(`Cue point time must be positive number less than the duration of the video (${gr(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(n, i);
                return setTimeout((() => {
                    t.fire(Qn, o)
                }), 0), o.id
            } catch (xe) {
                if ("CuePointsNotSupported" === xe.name) throw new ie("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new ie("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(n) {
            const i = e.backbone.cuePoints.filter((e => e.id === n))[0];
            if (!i) throw new ie(`Cue point “${n}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(i), setTimeout((() => {
                t.fire(ei, i)
            }), 0)
        },
        enableTextTrack(n, o = null) {
            let r = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map((e => (e.language = e.lang, e)));
            const a = r.some((e => e.language.toLowerCase() === n.toLowerCase()));
            if (!a) throw new ie(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const l = o ? `${n}.${o}` : n,
                {
                    track: s
                } = ((e, t = []) => {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter((e => r && e.language === n || e.language === o)).sort(((e, t) => {
                        const r = 2 * Number(e.language === o && e.kind === i) + 2 * Number(e.language === n) + 1 * Number(e.kind === i);
                        return 2 * Number(t.language === o && t.kind === i) + 2 * Number(t.language === n) + 1 * Number(t.kind === i) - r
                    }));
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                })(l, r);
            if (!s || o && s.kind !== o) throw new ie(`There are no ${o} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return t.fire(jt, s.id), i < 3 ? null : new Promise((e => {
                t.once(Jn, (t => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                }))
            }))
        },
        disableTextTrack() {
            t.fire(Xt)
        },
        toggleFullscreen(e) {
            const n = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise(((i, o) => {
                if (!ae.element === e) {
                    const r = () => {
                            ae.off("enter", r), i()
                        },
                        a = (t, i) => {
                            ae.off("error", a);
                            const r = n[i] || n.not_supported;
                            o(new ie(r.msg, r.name, (e ? "request" : "exit") + "Fullscreen"))
                        };
                    return ae.on("enter", r), ae.on("error", a), void t.fire(Un)
                }
                i()
            }))
        },
        requestFullscreen: () => T.toggleFullscreen(!0),
        exitFullscreen: () => T.toggleFullscreen(!1),
        get fullscreen() {
            return !!ae.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        remotePlaybackPrompt() {
            try {
                e.backbone.showExternalDisplayPicker()
            } catch (t) {
                throw new ie("Remote playback is not available.", "NotFoundError", "remotePlaybackPrompt")
            }
        },
        appendVideoMetadata: n => new Promise(((i, o) => {
            try {
                const o = Array.from(e.backbone.chapters);
                e.parentUrl = n,
                    function(e, t, n) {
                        const {
                            duration: i,
                            id: o,
                            privacy: r
                        } = e.video;
                        if (r !== Nt && r !== Ot && r !== wt) return;
                        const a = function(e, t, n, i) {
                            if (t < 30 || 0 === i.length) return [];
                            const o = [];
                            return i.forEach(((r, a) => {
                                const {
                                    startTime: l,
                                    text: s
                                } = r;
                                if (l < t) {
                                    var c;
                                    const t = null == i || null == (c = i[a + 1]) ? void 0 : c.startTime,
                                        r = `${Fr}${e}`,
                                        [d] = n.split("#"),
                                        u = `${d}#${r}=${l}`;
                                    o.push({
                                        "@type": "Clip",
                                        name: s,
                                        startOffset: l,
                                        endOffset: t,
                                        url: u
                                    })
                                }
                            })), o.length && (o[o.length - 1].endOffset = t), o
                        }(o, i, t, n);
                        Ou({
                            hasPart: a
                        })
                    }(e.config, n, o), t.fire(Yo, n), i()
            } catch (r) {
                o(new ie((null == r ? void 0 : r.message) || "", (null == r ? void 0 : r.name) || "", "appendVideoMetadata"))
            }
        })),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!dd.currentSession
        },
        get color() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorOne() {
            var t;
            return null == (t = e.config.embed.color_one) ? void 0 : t.replace("#", "")
        },
        get colorTwo() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorThree() {
            var t;
            return null == (t = e.config.embed.color_three) ? void 0 : t.replace("#", "")
        },
        get colorFour() {
            var t;
            return null == (t = e.config.embed.color_four) ? void 0 : t.replace("#", "")
        },
        set color(e) {
            C(e, Gr, "setColor")
        },
        set colorOne(e) {
            C(e, Wr, "setColorOne", [Gr, Yr])
        },
        set colorTwo(e) {
            C(e, Gr, "setColorTwo", [Wr])
        },
        set colorThree(e) {
            C(e, Yr, "setColorThree", [Wr])
        },
        set colorFour(e) {
            C(e, $r, "setColorFour")
        },
        get cuePoints() {
            return e.backbone.cuePoints.map((e => ({
                time: e.time,
                data: e.data,
                id: e.id
            })))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(n) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new ie(`Seconds must be a positive number less than the duration of the video (${gr(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return t.fire(Ir._seek), e.config.embed.on_site || (e.progressController.maxPlayedTime = n), t.fire(Mt, n), t.fire(Ii), i < 3 ? null : new Promise((e => {
                t.once(h.SEEKED, (({
                    currentTime: t
                }) => {
                    e(t)
                }))
            }))
        },
        get duration() {
            return gr(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            t.fire(Ft, e)
        },
        set muted(e) {
            t.fire(Bt, e, !0)
        },
        get muted() {
            return e.backbone.muted || 0 === b()
        },
        get paused() {
            return !e.backbone || !("paused" in e.backbone) || !!e.backbone.paused
        },
        get buffered() {
            return Nu(e.backbone.buffered)
        },
        get played() {
            return Nu(e.backbone.played)
        },
        get seekable() {
            return Nu(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(n) {
            if (!e.config.embed.settings.speed) throw new ie("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(n) || n > 2) throw new ie("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            t.fire(_n, n)
        },
        get remotePlaybackAvailability() {
            return e.backbone.externalDisplayAvailable
        },
        get remotePlaybackState() {
            return e.backbone.externalDisplayActive ? "connected" : "disconnected"
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map((e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === _ ? "showing" : "disabled"
            })))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new ie("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            return b()
        },
        set volume(e) {
            if (e = parseFloat(e), 1 === i && (e /= 100), isNaN(e) || e < 0 || e > 1) throw new ie("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            p = e;
            var n = !0;
            q.settingVolume || 0 !== e ? t.fire(Vt, e, n) : t.fire(Bt, !0, n)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!Su(e.config.video.owner)) throw new ie("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map((e => e.id));
            if (!n.includes(t)) throw new ie(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideoViaConfig(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(n) {
            e.config.user.liked !== n && t.fire(si, n)
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(n) {
            e.config.user.watch_later !== n && t.fire(ci, n)
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex((e => t === e.id));
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map(((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            })))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new ie(`Chapter timecode must be positive number less than the duration of the video (${gr(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (xe) {
                if ("ChaptersNotSupported" === xe.name) throw new ie(xe.message, "UnsupportedError", "_addChapter");
                throw new ie("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (xe) {
                throw new ie("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new ie("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (xe) {
                if ("ChaptersNotSupported" === xe.name) throw new ie("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new ie("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            t.fire(dn, e)
        },
        _removeCard(e) {
            t.fire(un, e)
        },
        _setOutro(n, i) {
            e.config.embed.outro !== n ? (t.fire(tn), setTimeout((() => {
                e.config.embed.outro = n, t.fire(en, n, i)
            }), 400)) : t.fire(en, n, i)
        },
        _hideOutro() {
            t.fire(tn)
        },
        _fireEvent(...e) {
            t.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(n) {
            e.config.video.live_event && (Object.keys(n).forEach((i => {
                let o = n[i];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[i] = o, t.fire(Ui, i, o), t.fire(Y.SETTINGS_UPDATED, i, o)
            })), t.fire(Bi, !1, e.config))
        },
        _setEmbedSettings(n) {
            Object.keys(n).forEach((i => {
                let r = n[i];
                r = "object" == typeof r ? r : Number(r), "badge" === i && (r ? r = o : o = e.config.embed.settings.badge), e.config.embed.settings[i] = r, t.fire($i, i, r)
            })), t.fire(Bi, !1, e.config)
        },
        _setEmbedSetting(n, i) {
            i = "object" == typeof i ? i : Number(i), "badge" === n && (i ? i = o : o = e.config.embed.settings.badge), e.config.embed.settings[n] = i, t.fire($i, n, i), t.fire(Bi, !1, e.config)
        },
        _setCreateInteractive(n, i) {
            e.config.embed.create_interactive = n, e.config.embed.interactive = i, t.fire(Ki, n, e.config), t.fire(Bi, !1, e.config)
        },
        _setOTTVideoMetadata(n) {
            var i;
            null != (i = e.config.request.flags) && i.ott && (e.ottVideoMetadata = n, t.fire(qi, n))
        },
        _toggleDebugPanel() {
            t.fire(Ti)
        },
        _overrideControlbarBehavior(e) {
            t.fire(on, e)
        },
        _setControlbarVisibility(e) {
            t.fire(nn, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new ie("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new ie("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (xe) {
                throw new ie(xe.message, xe.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new ie("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new ie("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new ie("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new ie("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (xe) {
                throw new ie(xe.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = dd.currentSession;
            t && le(e) && t.sendMessage(ad, {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: `.${Jr.VP_TITLE}`,
                sidedock: `.${Jr.VP_SIDEDOCK}`,
                controls: `.${Jr.VP_CONTROLS}`,
                customLogo: `.${Jr.CUSTOM_LOGO}`
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = 10,
                o = {
                    get details() {
                        const e = ur(document.querySelector(".headers > h1")),
                            t = ur(document.querySelector(".sub-title")),
                            n = ur(document.querySelector(".vp-portrait")),
                            o = Math.max(e.width, t.width) + n.width,
                            r = Math.max(n.height, e.height + t.height);
                        return {
                            top: i,
                            left: i,
                            width: Math.max(200, o),
                            height: Math.max(60, r)
                        }
                    },
                    get sidedock() {
                        return {
                            top: i,
                            left: t - i - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = o.customLogo,
                            r = Math.max(60, e.height);
                        return {
                            height: r,
                            top: n - i - r,
                            left: i,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            o = e ? ur(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - i - o.height,
                            left: t - i - o.width,
                            width: o.width,
                            height: o.height
                        }
                    }
                };
            return o
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        _lockPlayback() {
            e.progressController.lockPlayback()
        },
        _unlockPlayback() {
            e.progressController.unlockPlayback()
        },
        addEventListener(...e) {
            T.on.apply(T, e)
        },
        removeEventListener(...e) {
            T.off.apply(T, e)
        },
        seekTo(e) {
            T.currentTime = e
        },
        changeColor(e) {
            T.color = e
        }
    };
    const y = {
        addCuePoint: ({
            time: e,
            data: t
        }) => T.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            T.enableTextTrack(e, t)
        }
    };

    function L(e, t) {
        n && n.emit(e, t), l.fire(e, t)
    }
    const A = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        L(e, i)
    };

    function S({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: gr(e),
            percent: gr(n),
            duration: gr(t)
        }
    }

    function I(e) {
        return {
            playbackRate: e
        }
    }

    function O() {
        L(Dr.LOADED, u ? null : (u = !0, {
            id: e.config.video.id
        }))
    }

    function R(e) {
        return d = e, N(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new ie("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new ie("There was an error loading the files for this video.", "FileError")
            }
            return new ie("An error occurred during playback.", "PlaybackError")
        }(d))
    }

    function N(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            var e;
            let t = new URL(window.location.href);
            m = !!t.searchParams.get("fromLoadVideo"), v = (null == (e = t.searchParams.get("listeners")) ? void 0 : e.split(",")) || [], (m || v.length) && (t.searchParams.delete("fromLoadVideo"), t.searchParams.delete("listeners"))
        }(),
        function() {
            const i = e.config.embed.on_site;
            i && !bs(e.element) || (f(e.config.embed.api), n = new oe({
                hidePrivateMethods: !i
            }), n.configureClient(window.parent, "*"), n.filter((function() {
                return re()
            })), n.listeners = yr(Dr).reduce(((e, t) => r(r({}, e), {}, {
                [t]: !1
            })), {}), v.length ? v.forEach((e => {
                n.listeners[e] = !0
            })) : Du.forEach((e => n.listeners[e] = !0)), n.filter((e => n.listeners[e])), t.on(zo, ((e, t, i) => {
                n.addAllowedActor(e, null == t ? void 0 : t.contentWindow, i)
            })))
        }(),
        function() {
            if (!n) return;
            const t = bu({}, T, y);
            n.extendMethods(t), n.hooks({
                logError(e) {
                    "InternalError" !== e.name && L(Dr.ERROR, N(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (le(e)) return f(3), e;
                    try {
                        const t = JSON.parse(e);
                        return f(2), t
                    } catch (t) {
                        return f(null), L(Dr.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    null != (n = e.config.embed) && n.player_id && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === i && (t = function(e) {
                            if (e.event) {
                                for (const t in wr)
                                    if (wr[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), le(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (xe) {}
                    return t
                }
            })
        }(), t.on(g.BUFFER_STARTED, A(Dr.BUFFER_START)), t.on(g.BUFFER_ENDED, A(Dr.BUFFER_END)), t.on(g.CUE_POINT, A(Dr.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), t.on(g.NO_SUPPORTED_CDM, A(Dr.DRM_INIT_FAILED)), t.on(w, A(Dr.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), t.on($n, A(Dr.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex((e => t === e.id));
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), t.on(In, A(Dr.ENDED, (function() {
            return c = !1, {
                seconds: gr(e.config.video.duration),
                percent: 1,
                duration: gr(e.config.video.duration)
            }
        }))), t.on(Ln, A(Dr.PAUSE, (function(t) {
            return c = !1, {
                seconds: gr(t),
                percent: gr(t / e.config.video.duration),
                duration: gr(e.config.video.duration)
            }
        }))), t.on(wn, A(Dr.PLAYBACK_RATE_CHANGE, I)), t.on(wn, A(Dr.RATE_CHANGE, I)), t.on(Jn, A(Dr.TEXT_TRACK_CHANGE, (function(e) {
            _ = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), t.on(On, A(Dr.VOLUME_CHANGE, (function(t) {
            return {
                volume: gr(t),
                muted: e.backbone.muted
            }
        }))), t.on(zn, A(Dr.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(jn, A(Dr.TOAST_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(Bi, (function(e) {
            p && setTimeout((function() {
                var e = !0;
                q.settingVolume || 0 !== p ? t.fire(Vt, p, e) : t.fire(Bt, !0, e)
            }), 0), e && O()
        })), t.on(Cn, (function(e) {
            const t = R(e);
            s && L(Dr.ERROR, t)
        })), t.on(ri, A(Dr.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), t.on(li, A(Dr.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), t.on(Rn, A(Dr.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), t.on(Io, A(Dr.AD_STARTED)), t.on(To, A(Dr.AD_COMPLETED)), t.on(Lo, A(Dr.AD_ERROR)), t.on(Oo, A(Dr.AD_SKIPPED)), t.on(Po, A(Dr.AD_ALL_COMPLETED)), t.on(yo, A(Dr.AD_CLICKED)), t.on(No, A(Dr.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), t.on(Do, A(Dr.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), t.once(mo, (function() {
            s = !0, m ? (O(), function(e, t) {
                n && n.emitMethodEvent(e, t)
            }(Dr.LOAD_VIDEO, e.config.video.id)) : L(Dr.READY), d && (L(Dr.ERROR, R(d)), d = null)
        })), t.on(Y.EVENT_ENDED, A(Dr.LIVE_EVENT_ENDED)), t.on(Y.EVENT_STARTED, A(Dr.LIVE_EVENT_STARTED)), t.on(Y.STREAM_OFFLINE, A(Dr.LIVE_STREAM_OFFLINE)), t.on(Y.STREAM_ONLINE, A(Dr.LIVE_STREAM_ONLINE)), t.on(K.CAMERA_CHANGE, A(Dr.CAMERA_CHANGE, (function(e) {
            return e
        }))), t.on(K.MOTION_END, A(Dr.MOTION_END)), t.on(K.MOTION_START, A(Dr.MOTION_START)), t.on(K.WEBVR_HARDWARE_AVAILABLE, A(Dr.WEBVR_HARDWARE_AVAILABLE)), t.on(K.WEBVR_ENTER, A(Dr.ENTER_WEBVR)), t.on(K.WEBVR_EXIT, A(Dr.EXIT_WEBVR)), t.on(K.SPATIAL_UNSUPPORTED, A(Dr.SPATIAL_UNSUPPORTED)), t.on(h.PLAY, A(Dr.PLAY, (function(t) {
            return c ? null : (c = !0, {
                seconds: gr(t),
                percent: gr(t / e.config.video.duration),
                duration: gr(e.config.video.duration)
            })
        }))), t.on(h.PLAYING, A(Dr.PLAYING, (function() {
            return c ? {
                seconds: gr(e.currentTime),
                percent: gr(e.currentTime / e.config.video.duration),
                duration: gr(e.config.video.duration)
            } : null
        }))), t.on(h.PROGRESS, A(Dr.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let o = {
                seconds: gr(e),
                percent: gr(n),
                duration: gr(t)
            };
            return i < 3 && (o.bytesLoaded = -1, o.bytesTotal = -1), o
        }))), t.on(h.SEEKING, A(Dr.SEEKING, S)), t.on(h.SEEKED, A(Dr.SEEKED, S)), t.on(h.TIME_UPDATE, A(Dr.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: gr(e),
                percent: gr(n),
                duration: gr(t)
            }
        }))), t.on(h.LOADED_METADATA, A(Dr.LOADED_METADATA)), t.on(h.DURATION_CHANGE, A(Dr.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), t.on(h.WAITING, A(Dr.WAITING)), t.on(h.LOADED_DATA, A(Dr.LOADED_DATA)), t.on(h.LOAD_START, A(Dr.LOAD_START)), t.on(h.RESIZE, A(Dr.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), t.on(h.ENTER_PICTURE_IN_PICTURE, A(Dr.ENTER_PICTURE_IN_PICTURE)), t.on(h.LEAVE_PICTURE_IN_PICTURE, A(Dr.LEAVE_PICTURE_IN_PICTURE)), t.on(ld.connected, A(Dr.CHROMECAST_CONNECTED)), t.on(fo, A(Dr.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, (() => !0))), t.on(ho, A(Dr.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, (() => !1))), t.on(Eo, A(Dr.REMOTE_PLAYBACK_CONNECT)), t.on(go, A(Dr.REMOTE_PLAYBACK_DISCONNECT)), t.on(xt, (function() {
            d = null, u = !1
        })), t.on(so, (function(e = {}) {
            n && (n.listeners[Dr.SPACE_CHANGE] = !0, L(Dr.SPACE_CHANGE, e))
        })), t.fire(po), T
}
const ku = r(r({}, se), {}, {
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    MEDIASESSION_SEEK_TO: "mediasession-seekto",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr"
});

function Mu(e) {
    return Lr("av01", e) ? "AV1" : Lr("dvh1", e) ? "HEVC_DVH1" : Lr("hvc1", e) ? "HEVC" : Lr("avc1", e) ? "AVC" : e || ""
}

function Vu(e) {
    return Lr("mp4a", e) ? "AAC" : Lr("opus", e) ? "OPUS" : e || ""
}

function Bu(t, n) {
    const i = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (xe) {
                return Promise.reject(xe)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const r = i.headers;
        return function(e, t) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(a) {
            if ("video" === e.type) {
                const r = t.backbone.representations.reverse(),
                    l = r[e.stream];
                if (!l) return;
                const s = function(e, n, i, o, r, a) {
                    const l = i.headers;
                    delete l[""];
                    let s = {};
                    Object.keys(l).forEach((e => {
                        const t = l[e],
                            n = e.replace(c, "_");
                        s[n] = t
                    }));
                    let d = a.slice();
                    return d.forEach((e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    })), {
                        host: Ce(n.data.url),
                        product: Jl(t.config),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: d,
                        clip_id: t.config.video.id,
                        headers: s,
                        buffered: gr(pe(t.backbone.currentTime, t.backbone.buffered), 2),
                        request_id: n.data.uuid ? n.data.uuid : "",
                        ttfb: rc()
                    }
                }(e, n, i, a, l, r);
                let d = s;
                if (o && (d = Te({
                        extraContext: o
                    }, s)), t.events.fire(Ro, {
                        name: ku.CHUNK_DOWNLOADED,
                        data: d
                    }), Math.random() < -1) {
                    const e = function({
                        size: e,
                        duration: t,
                        quality: n
                    }) {
                        return {
                            chunk_request_duration: t,
                            chunk_size: Math.floor(e),
                            quality: n
                        }
                    }(s);
                    ie(ku.CHUNK_DOWNLOADED, e)
                }
                j += a.byteLength, Z = s
            }
            "akamai-grn" in r && (B = r["akamai-grn"]),
                function({
                    headers: e,
                    url: t
                }) {
                    const n = ds(e);
                    n === ll.CacheMiss ? x = {
                        url: t,
                        edge: !1,
                        tier1: !1,
                        tier2: !1
                    } : n === ll.MidCacheHit ? x = {
                        url: t,
                        edge: !1,
                        tier1: !0,
                        tier2: !1
                    } : n === ll.EdgeCacheHit && (x = {
                        url: t,
                        edge: !0,
                        tier1: !0,
                        tier2: !1
                    })
                }(i);
            let l = {};
            B && (l.akamai_reference_id = B), l.manifest_load_durations = t.backbone.manifestLoadDurations, l.successful_segment_count = t.backbone.successfulSegments.length, l.failed_segment_count = t.backbone.failedSegments.length, H = l
        }))
    }));
    let r, a, l;
    const s = new WeakMap,
        c = new RegExp("-", "g");
    let u, _, p = null,
        m = null,
        v = !1,
        E = !1,
        b = !1,
        C = "auto",
        T = {},
        L = {},
        A = null,
        S = null,
        I = null,
        O = [],
        P = null,
        R = {},
        N = !1,
        D = !1,
        w = !1,
        k = 0,
        M = 0,
        V = 0,
        B = null,
        x = null,
        F = !1,
        H = null,
        W = null,
        G = null,
        q = !1,
        z = !1,
        j = 0,
        X = 0,
        Z = null,
        J = "",
        ee = me;

    function te() {
        const e = s.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: a,
            _metricsBufferTracker: l
        } = e) : (l = new ve, a = new ue(t.backbone.videoElement, ie), ne(), s.set(t.backbone.videoElement, {
            _videoMonitor: a,
            _metricsBufferTracker: l
        }))
    }

    function ne() {
        const e = l;
        a.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(g.BUFFER_STARTED, (() => {
                    v && (q || F || (F = !0, e.trackBufferStart(a.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                })), t.events.on(g.BUFFER_ENDED, (() => {
                    v && F && (F = !1, e.trackBufferEnd(a.logBufferEnd, {
                        cdn_data: x
                    }), e.resetLastBufferTime())
                }))
            },
            addEventData(e) {
                const t = z;
                switch (z = !1, e) {
                    case ku.VIDEO_START_TIME:
                        return H;
                    case ku.VIDEO_SEEK:
                        const e = W;
                        return W = null, e;
                    case ku.VIDEO_PLAYED:
                    case ku.VIDEO_PAUSED:
                        return {
                            api_call: t
                        };
                    case ku.VIDEO_EXIT:
                        return {
                            bytes_loaded: j
                        }
                }
                return null
            },
            customMinuteTracker: {
                shouldCount: () => {
                    var e;
                    return t.backbone.isLive() && (null == (e = t.config.video.live_event) ? void 0 : e.dvr) && !t.backbone.atLiveEdge
                },
                onCount: e => {
                    X = e
                }
            }
        }), a.initHooks()
    }

    function ie(i, l = {}) {
        (function(e) {
            var n, i, o;
            switch (e) {
                case ku.VIDEO_SEEK:
                case ku.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (i = i.settings) ? void 0 : i.background);
                case ku.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (o = t.config.video.live_event) ? void 0 : o.low_latency;
                case ku.VIDEO_PLAYBACK_ERROR && (null == e ? void 0 : e.error_type) === g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED:
                    return _c(.1);
                default:
                    return !1
            }
        })(i) || (l = Object.assign(a ? a.globalProperties() : {}, Object.assign(function() {
            var e, i, r, a, l;
            const s = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                has_sd_drm_fallback: !(null == (e = t.config.request.drm) || !e.fallback_asset),
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                looping: !!t.config.embed.loop,
                owner_id: null == (i = t.config.video) || null == (i = i.owner) ? void 0 : i.id,
                product: Jl(t.config),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                version: Nd(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (r = t.config.user) ? void 0 : r.id,
                viewer_team_id: null == (a = t.config.user) ? void 0 : a.team_id,
                viewer_team_origin_user_id: null == (l = t.config.user) ? void 0 : l.team_origin_user_id,
                vuid: Is("vuid"),
                fps: t.config.video.fps
            };
            var c;
            return t.config.video.owner && (s.account_type = t.config.video.owner.account_type), t.config.embed.api && (s.api_version = t.config.embed.api), t.config.embed.app_id && (s.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (s.privacy = t.config.video.privacy), n.get(Cd) && (s.live_session_id = null == (c = t.config.video.live_event) ? void 0 : c.id), s
        }(), function() {
            var n, i, o, r;
            const a = t.backbone.video ? t.backbone.video.currentFile : {},
                l = function() {
                    const n = {},
                        i = f(),
                        o = fe("asc"),
                        r = t.backbone.currentScannerName,
                        a = r === he,
                        l = r === Ee,
                        s = [ge, be].includes(r);
                    let c = [];
                    l && (c = d(t.config, "request.files.progressive") || d(t.config, "request.files.hls") || []), a && (c = d(t.config, "request.files.dash.streams", [])), s && (c = t.backbone.video.currentFile.mime === kt.dashMpd ? d(t.config, "request.files.dash.streams", []) : d(t.config, "request.files.hls.streams", []));
                    const u = Array.from(c).sort(o).map((e => e.profile));
                    let _ = -1,
                        p = 0,
                        m = null;
                    if (Object.keys(L).forEach((e => {
                            const t = u.indexOf(parseInt(e, 10));
                            t > _ && (_ = t);
                            const n = L[e].reduce(((e, t) => ((t.end || i) - t.start) / 1e3 + e), 0);
                            n > p && (p = n, m = e)
                        })), n.highest_profile = u[_], n.highest_available_profile = u[u.length - 1], n.most_used_profile = m, (a || s) && O) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(O))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(O))) / 1e3;
                        const t = O.reduce(((e, t) => e + t), 0);
                        n.average_speed = Math.round(t / O.length) / 1e3
                    }
                    return n
                }();
            let {
                mime: s = kt.h264,
                metadata: {
                    profile: c = null
                } = {}
            } = a, u = !1, v = !1;
            switch (s) {
                case kt.dash:
                    0 === a.restrictedStreamIndexes.length && (u = !0), d(t.config, "request.files.dash.separate_av") && (v = !0), c = T ? T.profile : null;
                    break;
                case kt.hls:
                    u = !0
            }
            let h = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio", "average") / 1e3,
                audio_provenance: oe(),
                auto: u,
                average_speed: l.average_speed || 0,
                cdn: a.metadata ? a.metadata.cdn : "akamai",
                delivery: "live" !== Rr[s] ? Rr[s] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : t.backbone.videoElement.webkitCurrentPlaybackTargetIsWireless ? "airplay" : null,
                drm_cdm: J,
                drm_mode: ee,
                dropped_frame_percent: V,
                event_time: p + _e(m),
                fullscreen: D,
                is_visible: null === (n = null == (i = _) ? void 0 : i.isInView) || void 0 === n || n,
                picture_in_picture: w,
                highest_available_profile: l.highest_available_profile ? String(l.highest_available_profile) : null,
                highest_profile: l.highest_profile ? String(l.highest_profile) : null,
                max_speed: isFinite(l.max_speed) ? l.max_speed : 0,
                mime: a.mime || null,
                min_speed: isFinite(l.min_speed) ? l.min_speed : 0,
                most_used_profile: l.most_used_profile ? String(l.most_used_profile) : null,
                profile_id: c ? String(c) : null,
                codec: Mu(null == t.backbone.getCurrentStream || null == (o = t.backbone.getCurrentStream("video")) ? void 0 : o.codecs),
                audio_codec: Vu(null == t.backbone.getCurrentStream || null == (r = t.backbone.getCurrentStream("audio")) ? void 0 : r.codecs),
                quality: T ? T.quality : null,
                quality_downswitch_count: M,
                quality_upswitch_count: k,
                separate_av: v,
                target_profile_id: G,
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video", "average") / 1e3,
                video_duration: gr(t.config.video.duration)
            };
            if (t.backbone.isLive()) {
                var E;
                void 0 !== t.backbone.latency && (h.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (h.is_low_latency = t.backbone.lowLatencyMode);
                const e = !(null == (E = t.config.video.live_event) || !E.dvr);
                h.dvr = e, e && (h.in_dvr_mode = e && !t.backbone.atLiveEdge, h.dvr_minutes_watched = X)
            }
            if (t.config.video.ecdn) {
                const e = t.config.video.ecdn.ecdn_provider,
                    {
                        ecdnBytesByCdn: n,
                        ecdnBytesPeered: i,
                        ecdnPeers: o
                    } = Es(e);
                h.ecdn = !0, h.ecdn_provider = e, h.ecdn_bytes_via_cdn = n, h.ecdn_bytes_via_peering = i, h.ecdn_peers = o
            }
            return h
        }(), (t => {
            const n = ["example", "live_test"],
                i = t.config.request.ab_tests || {},
                o = Array.isArray(t.abTests) ? t.abTests : [],
                r = Object.keys(i).filter((e => !n.includes(e))).map((e => ({
                    test: e,
                    group: i[e].group
                })));
            return {
                ab_tests: [].concat(e(r), e(o))
            }
        })(t)), l), l.name = i, t.events.fire(Ro, {
            name: i,
            data: l
        }), r.log(l).catch((e => {})))
    }

    function oe() {
        if (!t.config.request.audio_tracks) return null;
        let e = t.backbone.audioTracks.find((e => !!e.active));
        if (!e) return null;
        if (e.provenance) return e.provenance;
        const n = t.config.request.audio_tracks.filter((t => t.language === e.language));
        return 1 === n.length ? n[0].provenance : null
    }

    function re(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        a.handleExternalError(i, t)
    }
    m = ce(), p = t.config.request.timestamp, r = new Q(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(Cn, re), t.events.on(xt, (function() {
        N = !1
    })), t.events.on(Mt, (function() {
        q = !0
    })), t.events.on(ri, (function() {
        D = !0, ie(ku.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(li, (function() {
        D = !1, ie(ku.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(h.ENTER_PICTURE_IN_PICTURE, (function() {
        w = !0, ie(ku.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(h.LEAVE_PICTURE_IN_PICTURE, (function() {
        w = !1, ie(ku.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(Bi, (function() {
        p = t.config.request.timestamp, m = ce(), v = !1, E = !1, b = !1, C = "auto", T = {}, L = {}, A = null, S = null, I = null, O = [], P = null, R = {}, N = !1, D = !1, k = 0, M = 0, V = 0, x = null, G = null, j = 0, X = 0, a && (a.reset(), ne())
    })), t.events.on(kn, (function() {
        W = {
            seek_type: "nudge"
        }
    })), t.events.on(Kn, (function(e) {
        const t = null == e ? void 0 : e.seekType;
        W = {
            seek_type: t
        }
    })), t.events.on(Yn, (function(e) {
        W = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(ko, (function(e) {
        W = {
            seek_type: e.type
        }
    })), t.events.on(wo, (function(e) {
        W = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(y, (function() {
        N || dd.isCastConnected || t.performDelegateAction(Hd, ((e, t = {}) => {
            N = !0, u.then((() => a.logStartRequest())).catch((() => {}))
        }))
    })), t.events.on(vi, (function(e) {
        e === Ld && ie(ku.SLATE_DISPLAYED, {
            slate_type: Ld
        })
    })), t.events.on(wn, (function(e, t) {
        ie(ku.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(Ht, (function(e) {
        t.backbone.video.currentFile.mime === kt.dash && ("auto" === e || E ? "auto" === e && E && !b && (ie(ku.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: C,
            auto: 1
        }), b = !0) : (ie(ku.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), E = !0), C = e)
    })), t.events.on(jt, (function(e) {
        P !== e && (P = e, ie(ku.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on(Xt, (function() {
        P && (P = null, ie(ku.CAPTIONS_DISABLED))
    })), t.events.on(ld.connected, (function() {
        ie(ku.CHROMECAST_CONNECTED)
    })), t.events.on(ld.disconnected, (function() {
        ie(ku.CHROMECAST_DISCONNECTED)
    })), t.events.on(g.STREAM_CHANGE, (function(e, t, n, i) {
        var o;
        T = e;
        const r = e.profile ? e.profile : e.id,
            a = f();
        if (L[r] = L[r] || [], A) {
            const e = L[A].length - 1;
            L[A][e] && (L[A][e].end = a)
        }
        S && (n[t].bitrate > S ? k += 1 : M += 1), L[r].push({
            start: a
        }), R[r] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        };
        let l = {
            previous_audio_bitrate: I / 1e3,
            previous_video_bitrate: S / 1e3,
            previous_profile_id: String(A),
            reason: null == i ? void 0 : i.reasonForSwitch
        };
        r.toString() === (null == (o = Z) ? void 0 : o.profile_id) && (Z.headers.akamai_request_bc || Z.headers.x_cache) && (l.cache_hit = ds(Z.headers)), ie(ku.VIDEO_STREAM_CHANGE, l), A = r, S = n[t].bitrate, I = n[t].audioBitrate
    })), t.events.on(g.STREAM_TARGET_CHANGE, (function(e) {
        e && (G = String(e.profile || "") || null)
    })), t.events.on(h.PLAYING, (function() {
        q = !1
    })), t.events.once(Dn, (function() {
        v = !0
    })), t.events.on(Co, (function() {
        ie(ku.AD_BUFFERING)
    })), t.events.on(To, (function() {
        ie(ku.AD_COMPLETE)
    })), t.events.on(yo, (function() {
        ie(ku.AD_CLICKED)
    })), t.events.on(Lo, (function(e) {
        ie(ku.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(Ao, (function() {
        ie(ku.AD_PAUSED)
    })), t.events.on(So, (function() {
        ie(ku.AD_RESUMED)
    })), t.events.on(Io, (function(e) {
        ie(ku.AD_STARTED, {
            startup_duration: e.time ? gr(e.time / 1e3, 2) : null
        })
    })), t.events.on(Oo, (function() {
        ie(ku.AD_SKIPPED)
    })), t.events.on(An, (function() {
        o.iPhone && a.setDisplayContext(1)
    })), t.events.on(Sn, (function() {
        o.iPhone && a.setDisplayContext(0)
    })), t.events.on(g.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        V = Math.round(100 * t) / 100
    })), t.events.on(g.BANDWIDTH, (function({
        speed: e
    }) {
        O.push(e), O.length > 500 && O.shift()
    })), t.events.on(g.MANIFEST_TIMEOUT, (function() {
        ie(ku.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(g.MANIFEST_LOADED, (function() {
        ie(ku.VIDEO_MANIFEST_LOADED)
    })), t.events.on(g.DOWNLOAD_END, i), t.events.on(g.DOWNLOAD_TIMEOUT, (function() {
        ie(ku.DOWNLOAD_TIMEOUT)
    })), t.events.on(g.DRM_CDM_CHANGE, (function(e) {
        J = e
    })), t.events.on(g.DRM_KEY_SWITCH, (function(e) {
        ee = e, ie(ku.DRM_KEY_SWITCH)
    })), t.events.on(g.SCANNER_CHANGE, (function() {
        x = null
    })), t.events.on(g.AV_DURATION_MISMATCH, (function(e) {
        ie(ku.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(g.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: g.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = gr(pe(0, e), 2), t.bytes_loaded = j, ie(ku.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(g.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: g.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        ie(ku.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, (function({
        incompatibleStreams: e,
        incompatibleStreamsAttributes: t
    }) {
        const n = ["codecs", "bitrate", "framerate", "quality", "width", "height", "mime_type"];
        e.forEach(((e, i) => {
            const o = n.reduce(((t, n) => (t.push(e[n]), t)), []).concat(t[i].join(",")).join("|"),
                r = {
                    error_type: g.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
                    error_reason: o
                };
            ie(ku.VIDEO_PLAYBACK_ERROR, r)
        }))
    })), t.events.on($.MEDIASESSION_PLAY, (function() {
        ie(ku.MEDIASESSION_PLAY)
    })), t.events.on($.MEDIASESSION_PAUSE, (function() {
        ie(ku.MEDIASESSION_PAUSE)
    })), t.events.on($.MEDIASESSION_SEEK_FORWARD, (function() {
        ie(ku.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on($.MEDIASESSION_SEEK_BACKWARD, (function() {
        ie(ku.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on($.MEDIASESSION_SEEK_TO, (function() {
        ie(ku.MEDIASESSION_SEEK_TO)
    })), t.events.on(Ir._seek, (function() {
        W = {
            seek_type: "api"
        }
    })), t.events.on(Ir._play, (function() {
        z = !0
    })), t.events.on(Ir._pause, (function() {
        z = !0
    })), t.events.on(K.WEBVR_ENTER, (function() {
        ie(ku.ENTER_WEBVR, !0)
    })), t.events.on(K.WEBVR_EXIT, (function() {
        ie(ku.EXIT_WEBVR, !0)
    })), t.events.on(Y.STALL_JUMP, (function({
        msg: e
    }) {
        re("livestall", {
            final: !1
        }, e)
    })), t.events.on(Y.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        re("livefallback", {
            final: !1
        }, e)
    })), u = new Promise((e => {
        var n;
        null != (n = t.backbone) && n.video && e(), t.events.on(U, e)
    })), u.then(te).catch((() => {})), _ = de(t.element), t.events.on(eo, te), t.events.on(pn, (() => {
        var e;
        return null == (e = _) ? void 0 : e.cleanup()
    }))
}
let Uu = function() {
    function e() {
        b(this, "player", void 0), b(this, "bpSessionInfo", void 0), this.player = null, this.bpSessionInfo = {
            transcriptId: null,
            transcriptStartTime: null,
            transcriptDefaultLanguage: null,
            leadUuid: null,
            contentType: null,
            vuid: Is("vuid")
        }
    }
    var t = e.prototype;
    return t.init = function(e) {
        this.player = e, this.player.doNotTrackEnabled || (this._initializeSessionData(), this._setupEventListeners(), this._configure())
    }, t._configure = function() {
        const e = this._getBPService(),
            t = this._createBPEvent(Gl.WEB_GLOBAL),
            n = new ye.Configuration(e, t, null, this.player.config.request.urls.telemetry_base);
        ye.BigPictureClient.configure(n)
    }, t._initializeSessionData = function() {
        this._updateSessionData(r({
            vuid: Is("vuid")
        }, Vs(this.player.config)))
    }, t._setupEventListeners = function() {
        this.player.events.on(Fo, (({
            id: e,
            startTime: t,
            defaultLanguage: n
        }) => {
            this._updateSessionData({
                transcriptId: e,
                transcriptStartTime: t,
                transcriptDefaultLanguage: n
            })
        })), this.player.events.on(Xo, (e => {
            null != e && e.leadUuid && this._updateSessionData({
                leadUuid: e.leadUuid
            })
        })), this.player.events.on(Bi, (() => {
            this._updateSessionData(r({}, Vs(this.player.config)))
        }))
    }, t._refreshConfigurationWithVuid = function() {
        if (this.bpSessionInfo.vuid) return;
        const e = Is("vuid");
        e && (this._updateSessionData({
            vuid: e
        }), this._configure())
    }, t._getBPService = function() {
        let e;
        switch (this.player.config.request.urls.telemetry_base) {
            case ye.Service.FRESNEL_PROD_CN:
                e = ye.Service.FRESNEL_PROD_CN;
                break;
            case ye.Service.EVENTS_PROD:
                e = ye.Service.EVENTS_PROD;
                break;
            case ye.Service.FRESNEL_PROD:
                e = ye.Service.FRESNEL_PROD;
                break;
            default:
                e = ye.Service.FRESNEL_DEV
        }
        return e
    }, t._updateSessionData = function(e) {
        Object.assign(this.bpSessionInfo, e)
    }, t._bpFieldsTyped = function(e) {
        return e
    }, t._getVersion = function(e) {
        return Kl[e]
    }, t._getDefaultFieldsForEvent = function(e) {
        var t, n, i, r, a, l;
        const s = this.player.config,
            {
                user: c,
                request: d,
                video: u,
                embed: _
            } = s,
            p = (null == (t = this.player.backbone) ? void 0 : t.currentTime) || 0;
        switch (e) {
            case Gl.WEB_GLOBAL:
                return this._bpFieldsTyped({
                    user: {
                        subscription_type: c.account_type || null,
                        is_mod: !!c.mod,
                        session_id: d.session || null,
                        teams: c.team_id ? [{
                            team_id: c.team_id,
                            team_role: is(s)
                        }] : [],
                        user_id: c.id || null,
                        vuid: this.bpSessionInfo.vuid || null,
                        flags: d.flags ? Object.keys(d.flags) : null,
                        is_free_trial: !1
                    },
                    application: {
                        application: "vimeo",
                        vimeo_language: d.lang || "en",
                        product: Jl(s),
                        build_environment: "production",
                        version: Ql()
                    },
                    platform: {
                        device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                        screen: {
                            dpi: screen.pixelDepth,
                            height: screen.height,
                            width: screen.width,
                            size: `${screen.width} x ${screen.height}`
                        },
                        network: null,
                        platform: "web"
                    }
                });
            case Gl.COPY_VIDEO_EMBED_CODE:
                return this._bpFieldsTyped({
                    hash: u.unlisted_hash,
                    height: u.height,
                    is_video_password_protected: u.privacy === Rt,
                    product: Zl.WORKFLOW,
                    sizing: _.playsinline ? "fixed" : "responsive",
                    video_embed_privacy: u.embed_permission,
                    video_id: `${u.id||""}`,
                    video_privacy: u.privacy,
                    width: u.width,
                    actor_resource_role: null,
                    actor_team_role: null,
                    entry_page: null,
                    is_preset_applied: null,
                    location: null,
                    page: null,
                    path: null,
                    team_owner_id: null,
                    team_size: null,
                    team_subscription_type: null,
                    upload_id: null,
                    video_app_id: null,
                    video_status: null,
                    video_type: null
                });
            case Gl.PLAYER_PERFORMANCE_MEASUREMENT:
                return this._bpFieldsTyped({
                    module_player: !0,
                    device_type: ts(),
                    browser: Object.keys(o.browser).find((e => o.browser[e])) || "",
                    device_os: ns(),
                    iframed: Cs(),
                    measurement_type: null,
                    measurement_value: null
                });
            case Gl.CHAPTER_SEGMENT_CLICK:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    team_owner_id: (null == (r = u.owner) ? void 0 : r.id) || 0,
                    is_creator_mode: !!c.owner,
                    chapter_seek_event_delta: null,
                    fragment_no_chapters_at_seek: null,
                    is_chapter_seek: null,
                    nearest_chapter_start_time: null,
                    seek_event_start_time: null,
                    total_no_chapters_at_seek: null
                });
            case Gl.CLICK:
                return this._bpFieldsTyped({
                    page: Nl(s),
                    click_type: null,
                    copy: null,
                    device_type: null,
                    feature: null,
                    location: null,
                    name: null,
                    path: null,
                    target: null,
                    target_path: null,
                    type: null
                });
            case Gl.EMBEDDED_TRANSCRIPT_CLICK:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    team_owner_id: (null == (a = u.owner) ? void 0 : a.id) || 0,
                    total_clip_duration: gr(u.duration, 2),
                    embedded_transcript_session_id: this.bpSessionInfo.transcriptId,
                    session_duration: gr(Ba(this.bpSessionInfo.transcriptStartTime), 2),
                    default_transcript_language: this.bpSessionInfo.transcriptDefaultLanguage,
                    video_timestamp: gr(p, 2) || 0,
                    copy: null,
                    current_transcript_language: null,
                    element: null,
                    location: null,
                    name: null
                });
            case Gl.CLOSED_CAPTIONS_CLICK:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    video_privacy: u.privacy,
                    final_action_reset_all: null,
                    has_changed_background: null,
                    has_changed_font: null,
                    has_changed_window: null,
                    has_clicked_background: null,
                    has_clicked_window: null,
                    has_clicked_customize: null,
                    has_clicked_font: null,
                    has_customized: null,
                    has_reset_all: null,
                    language_selected: null,
                    has_updated_language: null,
                    language_provenance: null,
                    prev_language_provenance: null,
                    prev_selected_language: null
                });
            case Gl.MULTI_AUDIO_TRACK_CLICK:
                return this._bpFieldsTyped({
                    video_id: `${u.id||""}`,
                    video_privacy: u.privacy,
                    video_owner_id: `${null==(l=u.owner)?void 0:l.id}`,
                    page: Nl(s),
                    event_name: null,
                    has_selected_track: null,
                    initial_track: null,
                    initial_track_provenance: null,
                    track_selected: null,
                    track_selected_provenance: null
                });
            case Gl.OPEN_AI_OPTIONS:
                return this._bpFieldsTyped({
                    if_uploader: !!c.owner,
                    value: null
                });
            case Gl.REACH_TIME_ACTION:
                return this._bpFieldsTyped({
                    time_action_id: null
                });
            case Gl.VIEW_HOTSPOT:
                return this._bpFieldsTyped({
                    hotspot_id: null
                });
            case Gl.CLICK_HOTSPOT:
                return this._bpFieldsTyped({
                    hotspot_id: null,
                    overlay_id: null,
                    click_action_type: null,
                    clickout_id: null
                });
            case Gl.VIEW_OVERLAY:
                return this._bpFieldsTyped({
                    overlay_id: null
                });
            case Gl.CLOSE_OVERLAY:
                return this._bpFieldsTyped({
                    overlay_id: null,
                    dwell_time: null
                });
            case Gl.CLICK_OVERLAY:
                return this._bpFieldsTyped({
                    overlay_id: null,
                    click_action_type: null,
                    clickout_id: null
                });
            case Gl.VIEW_POLL:
                return this._bpFieldsTyped({
                    poll_id: null
                });
            case Gl.VOTE_POLL:
                return this._bpFieldsTyped({
                    poll_id: null,
                    poll_option_id: null,
                    is_poll_option_correct: null
                });
            case Gl.SELECT_PLAYER_SHARE:
            case Gl.SELECT_PLAYER_SHARE_COMPLETE:
                return this._bpFieldsTyped({
                    ab_group: null
                });
            default:
                return {}
        }
    }, t._createEventFields = function(e, t = {}) {
        return Object.assign({}, this._getDefaultFieldsForEvent(e), t)
    }, t._createBPEvent = function(e, t = {}) {
        const n = this._createEventFields(e, t),
            i = this._getVersion(e);
        return new ye.Event(e, i, n)
    }, t._getDefaultFieldsForContext = function(e) {
        var t, n, i, r, a;
        const l = this.player.config,
            {
                embed: s,
                user: c,
                request: d,
                video: u
            } = l,
            _ = us(this.player.backbone),
            p = this.player.store.get("ui.player.breakpoint"),
            m = this.player.store.get("ui.player.width") || 0,
            v = this.player.store.get("ui.player.height") || 0,
            f = (null == (t = this.player.backbone) ? void 0 : t.currentTime) || 0;
        switch (e) {
            case Yl.TEAM:
                return this._bpFieldsTyped({
                    team_owner_id: c.team_origin_user_id,
                    team_subscription_type: c.account_type,
                    team_role: is(l),
                    team_id: c.team_id,
                    joined_team_at: null,
                    resource_permission_level: null,
                    team_size: null
                });
            case Yl.WEB:
                return this._bpFieldsTyped({
                    location: "player",
                    page_name: Nl(l),
                    referrer: d.referrer,
                    copy: null,
                    path: null,
                    referrer_page_name: null,
                    target: null,
                    target_path: null
                });
            case Yl.VIDEO:
                return this._bpFieldsTyped({
                    video_id: u.id,
                    title: u.title,
                    video_privacy: u.privacy,
                    video_embed_privacy: u.embed_permission,
                    content_rating: [`${null==(n=u.rating)?void 0:n.id}`],
                    duration: Math.round(u.duration),
                    resolution: `${u.width}x${u.height}`,
                    video_height: u.height,
                    video_width: u.width,
                    orientation: os(u.width, u.height),
                    is_auto_cc_enabled: null,
                    upload_method_api: null,
                    upload_method_api_id: null,
                    is_demo: null,
                    video_owner_id: (null == (i = u.owner) ? void 0 : i.id) || 0,
                    video_owner_account_type: (null == (r = u.owner) ? void 0 : r.account_type) || "",
                    video_categories: null,
                    has_embed_available: !!s.settings.embed,
                    video_version_id: ls(null == (a = u.version) ? void 0 : a.available),
                    embed_context: s.context,
                    is_drm_enabled: !!d.drm,
                    is_intaractive: !!s.interactive,
                    language: null,
                    audio_track_lang: _.audioTrackLang,
                    audio_track_provenance: _.audioTrackProvenance,
                    audio_track_type: _.audioTrackType,
                    text_track_lang: _.textTrackLang,
                    text_track_provenance: _.textTrackProvenance,
                    text_track_type: _.textTrackType
                });
            case Yl.PLAYER:
                return this._bpFieldsTyped({
                    player_session_id: d.session,
                    total_video_duration: u.duration,
                    video_timestamp: gr(f, 2) || 0,
                    player_location: s.on_site ? "onsite" : "embed",
                    player_breakpoint: p || null,
                    player_width: Math.floor(m),
                    player_height: Math.floor(v)
                });
            case Yl.ACTION:
                return this._bpFieldsTyped({
                    feature: "player",
                    action_type: o.touch ? "tap" : "click"
                });
            case Yl.VIEW:
                return this._bpFieldsTyped({
                    feature: "player",
                    view_type: "impression"
                });
            case Yl.LIVE:
                return this._bpFieldsTyped({
                    recurring_live_event_id: `${u.live_event_id}`,
                    live_event_id: null,
                    live_status: rs(null == u ? void 0 : u.live_event),
                    live_production_method: null,
                    encoder_type: null,
                    audience_type: as(u),
                    lead_source: null,
                    event_privacy: ss(u.privacy),
                    live_feature: null,
                    is_guest_speaker: null
                });
            case Yl.PRODUCT_ANALYTICS:
                return this._bpFieldsTyped({
                    product: "viewer_experience",
                    feature: "player",
                    location: "player",
                    modal_name: null,
                    flow: null,
                    element: null,
                    copy: null,
                    device_type: ts(),
                    is_user_facing_data: null,
                    entity_type: null,
                    cta_location_id: null,
                    scrolling_percentage: null
                });
            case Yl.TARGET_TEAM:
                return this._bpFieldsTyped({
                    is_team_member: !!c.team_id,
                    team_owner_id: c.team_origin_user_id,
                    team_subscription_type: c.account_type,
                    team_role: is(l),
                    team_id: c.team_id,
                    team_size: null,
                    resource_permission_level: null,
                    joined_team_at: null
                });
            case Yl.USER_FACING_VIDEO_ANALYTICS:
                const e = d.atid,
                    [t, h] = e.split(".").map(Number);
                return this._bpFieldsTyped({
                    session_ts: h,
                    session_id: t,
                    lead_id: this.bpSessionInfo.leadUuid,
                    content_type: this.bpSessionInfo.contentType,
                    is_do_not_track: !!s.dnt,
                    playback_route: "player_embed",
                    is_session_live: null
                });
            case Yl.THIRD_PARTY_INTEGRATION:
                return this._bpFieldsTyped({
                    is_integration: !1,
                    integration_id: null,
                    integration_type: null,
                    integration_name: null,
                    app_id: null,
                    managed_user_id: null,
                    partner_bucket: null,
                    is_partner: null
                });
            default:
                return {}
        }
    }, t._createContextFields = function(e, t = {}) {
        return Object.assign({}, this._getDefaultFieldsForContext(e), t)
    }, t._createBPContexts = function(e, t = {}) {
        const n = this.player.config,
            i = jl[e];
        return i ? i.reduce(((e, i) => {
            var o;
            if (i === Yl.LIVE && (null == (o = n.video) || !o.live_event_id)) return e;
            const r = this._getVersion(i),
                a = t[i] || {},
                l = this._createContextFields(i, a);
            return e[i] = new ye.EventContext(i, r, l), e
        }), {}) : {}
    }, t.sendEvent = function(e, t = {}, n = {}) {
        if (!this.player || this.player.doNotTrackEnabled) return;
        this._refreshConfigurationWithVuid();
        const i = this._createBPEvent(e, t),
            o = this._createBPContexts(e, n);
        ye.BigPictureClient.sendEventWithContexts(i, o)
    }, e
}();

function xu(e) {
    let t, i, o = e.config.ott || {};
    const r = o.analytics_url || "https://collector.vhx.tv/events.gif",
        a = new Q(r),
        l = E((function() {
            d("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        s = E((function() {
            d("seeking")
        }), 500);

    function c() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function d(i, l) {
        (l = Object.assign({}, l, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: dd.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === l.timestamp && (l.timestamp = Math.round(.001 * Date.now()));
        const s = n(r, l);
        return a.logRequestPromiseWithUrl(s, {}, !0, "GET").catch((e => {}))
    }

    function u() {
        e.events.on(h.ENDED, _), e.events.on(h.ERROR, p), e.events.on(h.PAUSE, m), e.events.on(h.PLAY, v), e.events.on(h.TIME_UPDATE, l), e.events.on(h.SEEKING, s), e.events.on(h.SEEKED, f), e.events.on(h.WAITING, g), e.events.on(ri, b), e.events.on(li, C), e.events.on(To, T), e.events.on(yo, y), e.events.on(Lo, L), e.events.on(Io, A), e.events.on(Oo, S)
    }

    function _() {
        l.cancel(), d("ended")
    }

    function p() {
        l.cancel(), d("error")
    }

    function m() {
        l.cancel(), d("pause")
    }

    function v() {
        if (!i) return i = !0, void d("firstplay");
        d("play")
    }

    function f() {
        s.cancel(), d("seeked")
    }

    function g() {
        d("waiting")
    }

    function b() {
        t = !0
    }

    function C() {
        t = !1
    }

    function T() {
        d(ku.AD_COMPLETE)
    }

    function y() {
        d(ku.AD_CLICKED)
    }

    function L() {
        d(ku.AD_ERROR)
    }

    function A() {
        d(ku.AD_STARTED)
    }

    function S() {
        d(ku.AD_SKIPPED)
    }
    e.events.on(Bi, c), c(), e.config.ott ? u() : new Promise((t => {
        e.ottVideoMetadata ? t() : e.events.on(qi, (e => {
            t()
        }))
    })).then((() => {
        o = e.ottVideoMetadata, u()
    })).catch((e => {}))
}

function Fu(e, t) {
    const n = new P;
    let i, r, a, l, s, c, d, u, _, p;

    function m() {
        var t, n;
        e.events.on(h.ERROR, O), e.events.on(y, R), e.events.on(G.ACTIVATED, I), i = document.querySelector(`.${Jr.ADS_WRAPPER}`), i || (i = document.createElement("div"), i.classList.add(Jr.ADS_WRAPPER), i.innerHTML = `\n                <div class="${Jr.ADS_TAG} hidden">\n                    <span class="${Jr.ADS_COUNTDOWN}"></span>\n                </div>\n            `, document.querySelector(".player").appendChild(i)), r = i.querySelector(`.${Jr.ADS_TAG}`), a = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            autoplay: Boolean(null == (t = e.config) || null == (t = t.embed) ? void 0 : t.autoplay),
            muted: Boolean(null == (n = e.config) || null == (n = n.embed) ? void 0 : n.muted),
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, s = new Le(i, a), s.on(Ae.ADS_MANAGER_LOADED, (() => {
            s.on(Ae.AD_BUFFERING, f), s.on(Ae.AD_COMPLETE, g), s.on(Ae.AD_CLICK, E), s.on(Ae.AD_ERROR, b), s.on(Ae.AD_STARTED, C), s.on(Ae.AD_SKIPPED, T), s.on(Ae.ALL_ADS_COMPLETED, L), s.on(Ae.CONTENT_PAUSE_REQUESTED, A), s.on(Ae.CONTENT_RESUME_REQUESTED, S), e.events.on(h.ENDED, D), e.store.watch("ui.player.width", U), e.events.on(ri, U, !0), e.events.on(li, U, !1), e.events.fire(An), s.isAutoPlayAllowed() && B()
        }))
    }

    function v() {
        r && (M(), r = null), s && (s.destroy(), s = null), d && (clearInterval(d), d = null), i = null, a = {}, l = null, c = !1, u = !1, _ = !1, p = !1, e.events.off(y, R), e.events.off(ri, U), e.events.off(li, U), e.events.off(G.ACTIVATED, I), e.events.off(h.ENDED, D), e.events.off(h.ERROR, O), e.events.off(h.PLAYING, N), e.store.unwatch("ui.player.width", U)
    }

    function f() {
        u && e.events.fire(Co)
    }

    function E() {
        e.events.fire(yo)
    }

    function g() {
        o.iPhone && e.backbone.addVideoEventListeners(), d && clearInterval(d), u = !1, e.events.fire(To)
    }

    function b(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(Lo, n), "adPlayError" === n.errorType && e.events.fire(Sn)
    }

    function C(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let n = t.getAd();
        const r = n.getTraffickingParameters();
        n.isLinear() && "0" !== r.ad && (d = setInterval((() => {
            let e = "AD " + (e => {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            })(s.remainingTime);
            i.querySelector(`.${Jr.ADS_COUNTDOWN}`).innerHTML = e
        }), 1e3), setTimeout(k, 1e3)), u = !0;
        let a = {
            type: n.isLinear() ? "linear" : "nonlinear"
        };
        l && (a.time = Date.now() - l, l = null), e.events.fire(Io, a)
    }

    function T(t) {
        e.events.fire(Oo, t)
    }

    function L(t) {
        c = !0, o.iPhone || v(), e.events.fire(Po, t)
    }

    function A() {
        e.events.fire(An), l = Date.now(), p = !0, _ || (e.backbone.paused ? e.events.once(h.PLAYING, N) : e.backbone.pause())
    }

    function S() {
        M(), e.events.fire(Sn), o.iPhone && c && s.destroy(), _ || (e.events.off(h.PLAYING, N), w())
    }

    function I() {
        v()
    }

    function O(e) {
        e && ("NotAllowedError" === e.name || e.name)
    }

    function R() {}

    function N() {
        e.backbone.pause()
    }

    function D() {
        _ = !0, s.setContentComplete()
    }

    function w() {
        p = !1, e.backbone.play()
    }

    function k() {
        r = i.querySelector(`.${Jr.ADS_TAG}`), r.classList.remove("hidden"), r.removeAttribute("hidden")
    }

    function M() {
        r.classList.add("hidden"), r.setAttribute("hidden", "")
    }

    function V() {
        const e = t.getBoundingClientRect();
        return {
            height: e.height,
            width: e.width
        }
    }

    function B() {
        const {
            width: t,
            height: n
        } = V();
        try {
            s.start(t, n)
        } catch (i) {
            _ && e.events.fire(To), p && w()
        }
    }

    function U(e) {
        const {
            width: t,
            height: n
        } = V();
        s.resize(t, n, e)
    }
    const x = {
        pause: () => (e.events.fire(Ao), s.pause()),
        play: () => (e.events.fire(So), B(), s.play()),
        get volume() {
            return s.volume
        },
        set volume(e) {
            s.volume = e
        },
        get muted() {
            return s.muted
        },
        set muted(e) {
            s.muted = e
        },
        events: n
    };
    return v(), m(), e.events.on(Bi, (() => {
        v(), m()
    })), x
}
let Hu = function(e) {
        return e.MARKER_SEEKED = "seeked", e.MARKER_ENDED = "ended", e.MARKER_UPSWITCH = "upswitch", e.MARKER_DOWNSWITCH = "downswitch", e.MARKER_SWITCH_COMPLETE = "switchcomplete", e.MARKER_RESIZE = "resize", e.MARKER_SCANNER_CHANGE = "scannerchange", e.MARKER_FILE_CHANGE = "filechange", e.MARKER_STALLED = "stalled", e.MARKER_BUFFER_GAP_JUMP = "buffergapjump", e.MARKER_BUFFER_GAP_JUMP_PREVENT = "buffergapjumpprevent", e.MARKER_STALL_JUMP = "stalljump", e
    }({}),
    Wu = function(e) {
        return e.FIELD_MARKERS = "markers", e.FIELD_CLIP_ID = "clip_id", e.FIELD_PROFILE_ID = "profile_id", e.FIELD_PLAYER_SIZE = "player_size", e.FIELD_DROPPED_FRAMES = "dropped_frames", e.FIELD_TOTAL_FRAMES = "total_frames", e.FIELD_BANDWIDTH = "bandwidth", e.FIELD_STREAMS = "streams", e.FIELD_FILES = "files", e.FIELD_VIDEO_DIMS = "video_dims", e.FIELD_MIN_BANDWIDTH = "min_bandwidth", e.FIELD_MAX_BANDWIDTH = "max_badwidth", e.FIELD_BUFFER_OCCUPANCY = "buffer_occupancy", e.FIELD_LIVE_LATENCY = "live_latency", e.FIELD_SCANNERS = "scanner", e.FIELD_VR_HEADSET = "vr_headset", e
    }({}),
    Gu = function(e) {
        return e.MARKER_SEEKED = "#0088cc", e.MARKER_ENDED = "#503873", e.MARKER_UPSWITCH = "#5a9e02", e.MARKER_DOWNSWITCH = "#d93636", e.MARKER_RESIZE = "#FF8A00", e.MARKER_SCANNER_CHANGE = "#e9ff00", e.MARKER_FILE_CHANGE = "#b5d3e2", e.MARKER_STALLED = "#f44283", e
    }({});
const Yu = {
        [Od.KOLLECTIVE]: "Kollective",
        [Od.HIVE]: "Hive"
    },
    $u = ["bandwidthSeriesData"];

function Ku(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function qu() {}
const zu = [ku.VIDEO_PLAYBACK_ERROR, ku.VIDEO_LOAD_FAILURE];
let ju = function() {
        function e(e, t) {
            b(this, "_core", void 0), b(this, "_debugPayloadCollectionPolicy", void 0), b(this, "_seriesStore", void 0), b(this, "_latencyInterval", void 0), this._core = e, this._debugPayloadCollectionPolicy = t || "none", this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._core.events.fire(Ai)
        }, t._setToSeries = function(e, t) {
            return Object.assign(this._seriesStore, {
                [e]: [t]
            }), this._core.events.fire(Ai), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._core.events.fire(Ai), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t.getDebugPayload = function() {
            var e, t, n, i, r;
            const {
                config: a,
                backbone: l
            } = this._core, {
                session: s
            } = a.request, c = this.getCurrent(Wu.FIELD_VIDEO_DIMS), d = this.getCurrent(Wu.FIELD_TOTAL_FRAMES) || 0, u = this.getCurrent(Wu.FIELD_DROPPED_FRAMES) || 0, _ = this.getCurrent(Wu.FIELD_FILES), p = this.getCurrent(Wu.FIELD_STREAMS), m = this.getCurrent(Wu.FIELD_SCANNERS), v = this.getCurrent(Wu.FIELD_BANDWIDTH), f = this._isLiveScanner(m), h = m === he, E = Se(l.currentTime, l.buffered), g = l.currentTime + E, b = this._serializeBufferedRanges(l.buffered), C = l.bufferTarget, T = l.presentationDelay, y = a.embed.dnt || (null == (e = a.request.flags) ? void 0 : e.dnt), L = {
                isLive: f,
                isDash: h,
                embedSize: c,
                sessionId: s,
                testGroup: Object.keys(a.request.ab_tests).map((e => {
                    var t;
                    return `${e}: ${null==(t=a.request.ab_tests[e])?void 0:t.group}`
                })).join(", "),
                isDNTEnabled: y,
                totalFrames: d,
                droppedFrames: u,
                bufferTarget: C,
                presentationDelay: T,
                ua: null == (t = navigator) ? void 0 : t.userAgent,
                clipId: a.video.id,
                readyState: l.readyState,
                support: JSON.stringify(o),
                bufferEnd: gr(g, 3),
                bufferAhead: gr(E, 3),
                currentTime: gr(l.currentTime, 3),
                clientIp: null == (n = a.request) || null == (n = n.client) ? void 0 : n.ip,
                playerVersion: Nd(a),
                bufferedRanges: JSON.stringify(b),
                brainDebug: JSON.stringify(l.brainDebug),
                codec: p ? p.codec : null,
                hideCloseButton: !!a.embed.settings.background,
                isCopyDisabled: !!y,
                vrHeadsetName: this.getCurrent(Wu.FIELD_VR_HEADSET),
                droppedFramesPercent: 0 !== d ? `${(u/d*100).toFixed(2)}%` : 0,
                resolution: p ? `${p.width}×${p.height}@${Math.round(p.framerate)} ${Math.round(p.avgBitrate/1e3).toLocaleString()} Kbps ${p.audioBitrate?` / ${Math.round(p.audioBitrate/1e3).toLocaleString()} Kbps`:""}` : null,
                payloadId: `${a.video.owner.id}_${a.video.id}_${a.request.session}_${Math.floor(Date.now()/1e3)}`,
                bandwidthKbps: v ? `${Math.floor(v.value/1e3).toLocaleString()} Kbps` : 0,
                bandwidthMinKbps: `${Math.floor(this.getCurrent(Wu.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
                bandwidthMaxKbps: `${Math.floor(this.getCurrent(Wu.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
                separateAudioVideo: !(null == (i = a.request.files) || !i.dash || !a.request.files.dash.separate_av),
                bandwidthSeriesData: this._getBandwidthSeriesData()
            };
            null != p && p.audioChannels && (L.resolution += p.ambisonicConnected && p.ambisonicOrder ? ` ambisonic ${p.ambisonicOrder} (${p.audioChannels}ch)` : ` ${p.audioChannels}ch`), _ && (L.delivery = _.mime);
            const A = null == (r = a.video.ecdn) ? void 0 : r.ecdn_provider;
            if (A) {
                const {
                    ecdnBytesByCdn: e,
                    ecdnBytesPeered: t,
                    ecdnPeers: n
                } = Es(A), i = {
                    p2pSources: n.toString(),
                    p2pOffload: `${this._getP2POffload(t,e)}%`,
                    ecdnVendor: Yu[A]
                };
                Object.assign(L, i)
            }
            return f && Object.assign(L, this._getLiveDebugData()), L
        }, t.sendDebugPayload = function() {
            try {
                const e = this,
                    t = e._core.config,
                    {
                        signature: n,
                        expires: i,
                        timestamp: o,
                        session: r
                    } = t.request,
                    {
                        id: a,
                        owner: l
                    } = t.video,
                    s = `/debug_payload/${a}/${l.id}_${a}_${r}_${Math.floor(Date.now()/1e3)}?s=${n}&expires=${i}&time=${o}`,
                    c = `https://${t.player_url}${s}`,
                    d = e.getDebugPayload(),
                    {
                        bandwidthSeriesData: u
                    } = d,
                    _ = {
                        version: 2,
                        tpl: m(d, $u),
                        mark: u.debugMarkers
                    };
                return Ku(Ie({
                    url: c,
                    method: "post",
                    json: _,
                    timeout: 1e4
                }).json())
            } catch (xe) {
                return Promise.reject(xe)
            }
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = T({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i), this._sendPayloadByCollectionPolicy(t)
        }, t._sendPayloadByCollectionPolicy = function(e) {
            try {
                const t = this;
                if (!t._debugPayloadCollectionPolicy) return Ku();
                const n = "on_error" === t._debugPayloadCollectionPolicy && zu.includes(e);
                return Ku(function() {
                    var e = function() {
                        if (n) return function(e) {
                            if (e && e.then) return e.then(qu)
                        }(function(e, t) {
                            try {
                                var n = e()
                            } catch (xe) {
                                return t(xe)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return function(e) {
                                if (!void 0) return e && e.then ? e.then(qu) : Promise.resolve()
                            }(t.sendDebugPayload())
                        }), (function(e) {})))
                    }();
                    if (e && e.then) return e.then(qu)
                }())
            } catch (xe) {
                return Promise.reject(xe)
            }
        }, t._filterMetricData = function(e, t) {
            let n;
            if (e === ku.CHUNK_DOWNLOADED) {
                let e = "number" == typeof t.duration ? t.duration : 0,
                    i = "number" == typeof t.buffered ? t.buffered : 0,
                    o = "number" == typeof t.ttfb ? t.ttfb : 0;
                return n = {}, n.host = t.host, n.duration = gr(e, 2), n.size = t.size, n.index = t.index, n.profile_id = t.profile_id, n.quality = t.quality, n.buffered = gr(i, 2), n.ttfb = gr(o, 2), n.extraContext = t.extraContext, n.headers = Oe(t.headers, ["x_cache", "akamai_request_bc", "akamai_grn", "content_type"]), n.cache_hit = ds(n.headers), n
            }
            return e === ku.VIDEO_PLAYBACK_ERROR || e === ku.VIDEO_LOAD_FAILURE || e === ku.VIDEO_START_FAILURE || e === ku.VIDEO_READY ? t : e === ku.DRM_KEY_SWITCH ? {
                cdn: t.cdn,
                quality: t.quality,
                drm_cdm: t.drm_cdm,
                drm_mode: t.drm_mode
            } : void 0 !== t.autoplay && void 0 !== t.looping ? (n = {}, n.cdn = t.cdn, n.quality = t.quality, void 0 !== t.reason && (n.reason = t.reason), n) : t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._core.backbone.currentTime,
                o = Date.now(),
                r = gr(pe(i, this._core.backbone.buffered), 2);
            this._addToSeries(Wu.FIELD_MARKERS, {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._core.events.on(Bi, (() => {
                this.reset()
            })), this._core.events.on(g.BANDWIDTH, this._onBandwidthChange.bind(this)), this._core.events.on(g.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._core.events.on(g.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._core.events.on(g.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._core.events.on(g.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._core.events.on(g.STREAM_CHANGE, this._onStreamChange.bind(this)), this._core.events.on(g.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._core.events.on(h.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._core.events.on(K.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._core.events.on(Ro, this._onLogMetric.bind(this)), this._core.events.on(Y.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._core.events.on(Y.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._core.events.on(Y.STALL_JUMP, this._onStallJump.bind(this))
        }, t._isLiveScanner = function(e) {
            return [ge, be].includes(e)
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries(Wu.FIELD_VR_HEADSET, e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval((() => {
                const e = this._core.backbone.buffered,
                    t = this._core.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._core.backbone.latency;
                    this._setToSeries(Wu.FIELD_LIVE_LATENCY, e)
                } else this._setToSeries(Wu.FIELD_LIVE_LATENCY, 0)
            }), 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._core.store.watch("ui.player.boundingRect", (e => {
                const t = this.getCurrent(Wu.FIELD_VIDEO_DIMS),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries(Wu.FIELD_VIDEO_DIMS, n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker(Hu.MARKER_RESIZE, i)
            }))
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${gr(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = Object.values(Wu).reduce(((e, t) => (e[t] = [], e)), {})
        }, t._setDefaults = function() {
            const e = this._core.backbone.currentFile,
                t = this._core.backbone.currentScannerName;
            this._addToSeries(Wu.FIELD_FILES, e), this._addToSeries(Wu.FIELD_SCANNERS, t), this._isLiveScanner(t) && this._setLatencyInterval(), this._setToSeries(Wu.FIELD_MIN_BANDWIDTH, 0), this._setToSeries(Wu.FIELD_MAX_BANDWIDTH, 0);
            const n = this._core.store.get("ui.player.boundingRect"),
                i = this._getVideoDimensionsString(n);
            this._addToSeries(Wu.FIELD_VIDEO_DIMS, i)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries(Wu.FIELD_BANDWIDTH, {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent(Wu.FIELD_MAX_BANDWIDTH),
                i = this.getCurrent(Wu.FIELD_MIN_BANDWIDTH);
            (!i || t < i) && this._setToSeries(Wu.FIELD_MIN_BANDWIDTH, t), (!n || t > n) && this._setToSeries(Wu.FIELD_MAX_BANDWIDTH, t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries(Wu.FIELD_TOTAL_FRAMES, n), this._setToSeries(Wu.FIELD_DROPPED_FRAMES, t)
        }, t._onSeeked = function() {
            this._addMarker(Hu.MARKER_SEEKED, `Seeked to ${this._core.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker(Hu.MARKER_ENDED, "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker(Hu.MARKER_DOWNSWITCH, `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker(Hu.MARKER_UPSWITCH, `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i, o, r, a;
            const l = n[t],
                s = this._getResolutionString(l),
                c = Mu(l.codecs),
                d = null == (i = this._core.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                u = Vu(null == d ? void 0 : d.codecs),
                _ = `${c}${u?` / ${u}`:""}`,
                p = null == (o = this._core.backbone) ? void 0 : o.telecine.getEffectByName("AmbisonicEffect");
            this._addMarker(Hu.MARKER_SWITCH_COMPLETE, `Completed switch to ${s}`), this._addToSeries(Wu.FIELD_STREAMS, {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${l.height}p`,
                avgBitrate: l.avg_bitrate,
                ambisonicConnected: null == p ? void 0 : p.connected,
                ambisonicOrder: null == d ? void 0 : d.ambisonic_order,
                audioBitrate: null == d ? void 0 : d.avg_bitrate,
                audioChannels: null !== (r = null !== (a = null == d ? void 0 : d.channels) && void 0 !== a ? a : l.channels) && void 0 !== r ? r : void 0,
                framerate: l.framerate,
                height: l.height,
                width: l.width,
                id: l.id,
                codec: _
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent(Wu.FIELD_FILES),
                t = this._core.backbone.currentFile;
            this._addToSeries(Wu.FIELD_FILES, t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? Rr[e.mime] : null,
                r = Rr[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker(Hu.MARKER_FILE_CHANGE, a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries(Wu.FIELD_BUFFER_OCCUPANCY, {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent(Wu.FIELD_SCANNERS),
                t = this._core.backbone.currentScannerName;
            this._setToSeries(Wu.FIELD_SCANNERS, t), e && this._addMarker(Hu.MARKER_SCANNER_CHANGE, `Scanner change to ${t}`), this._isLiveScanner(t) ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker(Hu.MARKER_BUFFER_GAP_JUMP, e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker(Hu.MARKER_BUFFER_GAP_JUMP_PREVENT, e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker(Hu.MARKER_STALL_JUMP, e.msg)
        }, t._onStalled = function() {
            this._addMarker(Hu.MARKER_STALLED, "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._core.events.fire(Ai)
        }, t._serializeBufferedRanges = function(e) {
            if (!e) return null;
            const t = e.length;
            let n = 0,
                i = [];
            for (; n < t; n++) {
                const t = e.start(n),
                    o = e.end(n);
                i.push({
                    i: n,
                    start: t,
                    end: o
                })
            }
            return i
        }, t._getP2POffload = function(e, t) {
            return 0 === e && 0 === t ? 0 : gr(e / (t + e) * 100, 1)
        }, t._getLiveDebugData = function() {
            var e;
            const t = (null == (e = this._core.config.video.live_event) ? void 0 : e.id) || null;
            let n = "";
            try {
                var i;
                n = `${(null!==(i=this.getCurrent(Wu.FIELD_LIVE_LATENCY))&&void 0!==i?i:0).toFixed(2)}`
            } catch (xe) {}
            return {
                liveLatency: n,
                liveSessionID: t
            }
        }, t._getBandwidthSeriesData = function() {
            const e = this.getSeries(Wu.FIELD_BANDWIDTH) || [],
                t = this.getCurrent(Wu.FIELD_MAX_BANDWIDTH) || 1;
            return {
                debugMarkers: this.getSeries(Wu.FIELD_MARKERS) || [],
                timeSeries: e,
                max: t
            }
        }, e
    }(),
    Xu = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._onReset = () => this.reset(), this._player.events.on(xt, this._onReset)
        }, t._detachEventHandlers = function() {
            this._player.events.off(xt, this._onReset)
        }, t.hibernate = function() {
            this._detachEventHandlers()
        }, t.wake = function() {
            this._attachEventHandlers()
        }, t._getFragment = function(e, t, n) {
            if (c(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex(((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                })),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                l = n[o + 1],
                s = r ? t : (l - 1) / 1e3;
            return {
                startTime: a,
                endTime: s,
                duration: s - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(Bn)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(h.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !c(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(h.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, t.getFragmentFromTime = function(e) {
            var t;
            const n = null == (t = this._player.config.embed.interactive) ? void 0 : t.fragments,
                i = this._player.config.video.duration;
            return this._getFragment(e, i, n)
        }, I(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !c(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return c(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }])
    }();
var Zu = function(e) {
    return e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint", e
}(Zu || {});
const Ju = 4e-4 / Object.keys(Zu).length,
    Qu = {};

function e_({
    debugCollector: e
}) {
    return e.getDebugPayload()
}
let t_ = function() {
    function e(e = (e, t) => e < t) {
        this._data = {}, this._sortedKeys = [], this._sort = e
    }
    var t = e.prototype;
    return t._insert = function(e) {
        var t = this._sortedKeys.length;
        if (0 === t) this._sortedKeys.push(e);
        else {
            for (var n = 0; n < t; n++)
                if (this._sort(e, this._sortedKeys[n])) {
                    this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e);
                    break
                }
            n === t && this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e)
        }
    }, t._binarySearch = function(e, t, n, i) {
        if (i < n) return -1;
        let o = parseInt(n + (i - n) / 2, 10);
        return e[o] > t ? this._binarySearch(e, t, n, o - 1) : e[o] < t ? this._binarySearch(e, t, o + 1, i) : o
    }, t.delete = function(e) {
        const t = this._binarySearch(this._sortedKeys, e, 0, this._sortedKeys.length);
        if (-1 === t) throw new Error("key does not exist");
        this._sortedKeys.splice(t, 1), delete this._data[e]
    }, t.set = function(e, t) {
        return this._data[e] = t, this._insert(e), this
    }, t.get = function(e) {
        return this._data[e]
    }, t.keys = function() {
        return this._sortedKeys.slice()
    }, t.values = function() {
        return this.keys().map((e => this._data[e]))
    }, t.forEach = function(e) {
        const t = this._sortedKeys.length;
        for (let n = 0; n < t && !1 !== e(this._data[this._sortedKeys[n]], this._sortedKeys[n], this); n++);
    }, I(e, [{
        key: "size",
        get: function() {
            return this._sortedKeys.length
        }
    }])
}();
const n_ = {},
    i_ = e => {
        var t;
        const n = new t_;
        return null != (t = e.embed) && null != (t = t.cards) && t.length && e.embed.cards.forEach((e => {
            const t = e.url ? r(r({}, e), {}, {
                url: kl(e.url)
            }) : e;
            n.set(e.timecode, md(t))
        })), n
    },
    o_ = e => {
        const {
            events: t,
            set: n
        } = e, i = function(e) {
            return {
                cardsMap: i_(e.config),
                activeCard: null,
                hoveredCard: null,
                displayedCard: null,
                cardPressed: void 0
            }
        }(e), o = e => {
            const {
                hoveredCard: t,
                activeCard: n
            } = e, i = null !== t ? t : n;
            return {
                cards: r(r({}, e), {}, {
                    displayedCard: i
                })
            }
        }, a = e => {
            e && t.fire(ao, e.id, e)
        }, l = e => e.timecode;
        return t.on(Bi, ((e, t) => {
            n((e => {
                const n = r(r({}, e.cards), {}, {
                    cardsMap: i_(t),
                    activeCard: null,
                    hoveredCard: null
                });
                return o(n)
            }))
        })), t.on(dn, (e => {
            n((t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.set(e.timecode, e), a(e);
                const i = r(r({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: e.timecode
                });
                return o(i)
            }))
        })), t.on(un, (e => {
            n((t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.delete(e.timecode);
                const i = r(r({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: null,
                    hoveredCard: null
                });
                return o(i)
            }))
        })), t.on(h.TIME_UPDATE, (({
            currentTime: e
        }) => {
            n((t => {
                const n = ((e, t) => {
                        const {
                            cardsMap: n
                        } = e.cards;
                        let i = n.values().filter((e => ((e, t) => t >= l(e) && t < (e => l(e) + (e.displayTime || 6))(e))(e, t))).slice(-1)[0];
                        return (null == i ? void 0 : i.timecode) || null
                    })(t, e),
                    i = t.cards.cardsMap.get(n);
                if (n === t.cards.activeCard) return n_;
                const s = r(r({}, t.cards), {}, {
                    activeCard: n
                });
                return a(i), o(s)
            }))
        })), t.on(In, (() => {
            n((e => {
                const t = r(r({}, e.cards), {}, {
                    activeCard: null,
                    hoveredCard: null
                });
                return o(t)
            }))
        })), {
            cards: i,
            setCards: (e, i) => {
                "cardPressed" !== e || "string" != typeof i && void 0 !== i ? ((e, t) => {
                    n((n => {
                        const i = r(r({}, n.cards), {}, {
                            [e]: t
                        });
                        return o(i)
                    }))
                })(e, i) : t.fire(lo, i)
            }
        }
    };

function r_(e) {
    var t, n, i;
    const {
        config: a
    } = e, {
        title: l
    } = a.video, {
        title: s,
        portrait: d
    } = a.embed.settings, u = Cs(), _ = a.embed.settings.spatial_label, p = !(!a.video.spatial || !_), m = a.request.file_codecs || a.video.file_codecs, v = !c(m), f = a.request.hdr_formats || [], h = v && (null == (t = m.hevc) || null == (t = t.hdr) ? void 0 : t.length) > 0, E = f.includes(Id.HDR10_PLUS), g = f.includes(Id.DV84) || v && (null == (n = m.hevc) || null == (n = n.dvh1) ? void 0 : n.length) > 0, b = !!a.video.ai, C = a.video.channel_layout || "stereo", T = a.video.owner[o.devicePixelRatio > 1 ? "img_2x" : "img"], y = a.video.owner.name, L = function(e) {
        let t = {
            displayByline: !1,
            displayBadge: !1
        };
        if (e.embed.settings.byline) {
            const {
                type: n,
                url: i
            } = e.embed.settings.byline_badge || {};
            Object.assign(t, {
                displayByline: !0,
                displayBadge: !e.video.live_event,
                bylineBadgeType: n,
                bylineBadgeUrl: i
            })
        }
        return t
    }(a);
    let A = Cl(St, a),
        S = Cl(At, a),
        I = Cl(Lt, a);
    e.segmentedPlaybackEnabled && (I = Dl(I, e.startTime, e.endTime));
    const O = null == (i = a.request.ab_tests) ? void 0 : i.persistent_logo;
    return O && (A = Bl(A, O), S = Bl(S, O), I = Bl(I, O)), r({
        ownerLinkUrl: A,
        titleLinkUrl: I,
        bylineLinkUrl: S,
        displayTitle: !!s,
        displayPortrait: !!d,
        ownerName: y,
        targetBlank: u,
        portraitImg: T,
        title: l,
        is360: p,
        hasAIContent: b,
        hasHDR: h,
        hasHDR10Plus: E,
        hasDolbyVision: g,
        channelLayout: C
    }, L)
}
const a_ = 250;
let l_;

function s_(e) {
    var t, n;
    const {
        config: i,
        store: o
    } = e, {
        request: r,
        video: a
    } = i, l = null == (t = a.vod) ? void 0 : t.button_text, s = o.get("ui.player.breakpoint"), c = o.get("ui.player.mode"), d = nc(tc.FULL_CONTROLS, c, s);
    let u = Cl(yt, e.config);
    const _ = null == (n = i.request.ab_tests) ? void 0 : n.persistent_logo;
    return _ && (u = Bl(u, _)), {
        overrideBehavior: !1,
        trailerButtonText: l,
        vimeoLogoUrl: u,
        thumbnailPreview: r.thumb_preview,
        showAllControls: d,
        expandedState: "collapsed",
        isExpanded: !1,
        shouldRestoreButtonsDisplayed: !1
    }
}
let c_ = function(e) {
    return e.EMPTY = "empty", e.UNMUTE = "unmute", e.WATCH_FULL_VIDEO = "watchFullVideo", e.SPATIAL_INSTRUCTIONS_CLICK = "spatialInstructionsClick", e.SPATIAL_INSTRUCTIONS_ARROWS = "spatialInstructionsArrows", e
}({});
const d_ = [c_.SPATIAL_INSTRUCTIONS_CLICK, c_.SPATIAL_INSTRUCTIONS_ARROWS, c_.WATCH_FULL_VIDEO, c_.UNMUTE];

function u_(e) {
    const {
        config: t
    } = e, {
        autoplay: n,
        settings: i
    } = t.embed;
    return {
        purpose: e.segmentedPlaybackEnabled && n && i.watch_full_video ? c_.WATCH_FULL_VIDEO : c_.EMPTY
    }
}

function __({
    displayList: e,
    playback: t,
    embed: n
}) {
    const {
        outro: i,
        controlBar: o
    } = e, {
        isSegmentedPlaybackEnabled: r,
        paused: a,
        scrubbing: l
    } = t;
    return !!r && (!i && o && !(a && !l) && n.watchFullVideo)
}

function p_(e) {
    const t = e.embed.access_gates;
    if (!t) return null;
    const n = t.find((e => e.placement === Ps.BEFORE_VIDEO));
    return n ? Ms(null == n ? void 0 : n.gate_type, e) ? null : ((e, t) => {
        const n = Ns[e];
        return !n || n.includes(t.view)
    })(null == n ? void 0 : n.gate_type, e) ? n : null : null
}
const m_ = e => !e.title && !e.portrait && !e.byline,
    v_ = e => {
        var t;
        const {
            config: n,
            element: i,
            get: o
        } = e, {
            embed: r
        } = n, a = i.classList.contains("player-tiny"), l = u_(e), s = (null == l ? void 0 : l.purpose) === c_.WATCH_FULL_VIDEO;
        return !(a || null !== p_(n) || (null == (t = o()) || null == (t = t.overlay) ? void 0 : t.purpose) === ka.INTERACTIVE || n.view && !Ca(n.view) || null != r && r.autoplay || m_(null == r ? void 0 : r.settings) || !Va(r) || s)
    },
    f_ = e => {
        var t;
        const {
            config: n,
            get: i
        } = e, {
            view: r,
            video: a,
            embed: l,
            request: s
        } = n, {
            vod: c
        } = a, d = r !== Nr.main && r !== Nr.privateUnlocked, u = !!l.settings.instant_sidedock, _ = c && "purchase_options" in c && !!c.purchase_options.length, p = c && ga(c.countries, s.country);
        return (null == (t = i()) || null == (t = t.overlay) ? void 0 : t.purpose) !== ka.INTERACTIVE && null === p_(n) && !!Va(l) && !e.segmentedPlaybackEnabled && (o.touch || d || u || _ && p)
    },
    h_ = e => {
        var t, n;
        const {
            config: i,
            get: o
        } = e, {
            view: r,
            embed: a,
            request: l
        } = i;
        return !(null !== p_(e.config) || (null == (t = o()) || null == (t = t.overlay) ? void 0 : t.purpose) === ka.INTERACTIVE || r && !Ca(r) || a.autoplay && null != (n = l.flags) && n.autohide_controls || !Va(a))
    };
let E_ = function(e) {
    return e.IMAGE = "image", e.STATIC_IMAGE = "static-image", e.VOD = "vod", e.LINK = "link", e.NOTHING = "nothing", e.BLANK = "blank", e.SHARE = "share", e.TEXT = "text", e.BEGINNING = "beginning", e.VIDEOS = "videos", e.THREEVIDEOS = "threevideos", e.PROMOTED = "promoted", e.APP_REDIRECT = "app-redirect", e
}({});
const g_ = (e, t, n) => !(e && e === t) && !1 !== (null == n ? void 0 : n.final);

function b_({
    get: e,
    set: t
}) {
    return {
        purpose: ka.EMPTY,
        spatialRedirectContext: null,
        overlayElementsUpdatedCount: 0,
        incrementOverlayElementsUpdatedCount: () => {
            t((t => ({
                overlay: r(r({}, t.overlay), {}, {
                    overlayElementsUpdatedCount: e().overlay.overlayElementsUpdatedCount + 1
                })
            })))
        }
    }
}

function C_(e) {
    return Object.values(ka).includes(e)
}
let T_ = function(e) {
    return e.EMPTY = "empty", e.SPATIAL_UNSUPPORTED = "spatial-unsupported", e.SPATIAL_FAILURE = "spatial-failure", e
}({});
const y_ = ({
    element: e,
    config: t
}) => {
    if (e.classList.contains("player-mini") || e.classList.contains("player-tiny")) return !1;
    const {
        embed: n
    } = t;
    return !(!n.settings.badge || n.autoplay && 16 !== n.settings.badge.id)
};
let L_ = function(e) {
        return e.IDLE = "idle", e.LOADED = "loaded", e.ERROR = "error", e.LOADING = "loading", e
    }({}),
    A_ = function(e) {
        return e.MAIN = "main", e.LANGUAGE = "language", e
    }({}),
    S_ = function(e) {
        return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
    }({}),
    I_ = function(e) {
        return e.PREV = "prev", e.NEXT = "down", e.FIRST = "first", e.LAST = "last", e
    }({});
const O_ = "en",
    P_ = e => {
        const t = document.createElement("div");
        return t.innerHTML = e, t.textContent || ""
    },
    R_ = {
        language: O_,
        id: "",
        label: "Transcript",
        rtl: !1
    },
    N_ = (e, t) => {
        const {
            lang: n,
            cookie: i
        } = e.request, {
            captions: o,
            transcript: r
        } = i, [a] = (r || "").split("."), [l] = (o || "").split("."), s = r && t.find((e => e.language.includes(a))) || l && t.find((e => e.language.includes(l))) || n && t.find((e => n.includes(e.language))) || t.find((e => e.language.includes(O_))) || t[0] || R_;
        return s
    },
    D_ = (e, t) => e.findIndex((e => e.startTime <= t && e.endTime > t)),
    w_ = (e, t) => !!e.find((e => e.index === t)),
    k_ = e => e ? e.endTime - e.startTime : 0;

function M_(e, t, n, i) {
    const a = ((e, t, n = null, i = null) => {
            let o;
            return o = t ? e.reduce(((e, n) => (n.startTime >= t.startTime && n.endTime <= t.endTime && e.push(r(r({}, n), {}, {
                startTimeDisplay: Fa(Sa(n.startTime, t))
            })), e)), []) : (e => e.map((e => r(r({}, e), {}, {
                startTimeDisplay: Fa(e.startTime)
            }))))(null !== n || null !== i ? e.filter((e => {
                const t = null === n || e.startTime >= n,
                    o = null === i || e.startTime <= i;
                return t && o
            })) : e), o
        })((e => e.map(((e, t) => ({
            startTime: e.startTime,
            endTime: e.endTime,
            startTimeDisplay: "",
            text: P_(e.text),
            originalIndex: t
        }))))(e), !o.isGoogleBot && t, n, i),
        l = (e => e.map(((e, t, n) => {
            const i = n[t + 1];
            return i && i.startTime < e.endTime ? r(r({}, e), {}, {
                endTime: i.startTime
            }) : e
        })))(((e, t = 20, n = 20, i = 10) => {
            if (0 === e.length) return [];
            let o, a, l, s, c;
            return d(e[0]), e.reduce((function(r, l, s, c) {
                var _;
                const {
                    text: p,
                    endTime: m
                } = l, v = function(e, t) {
                    return e + 1 === t.length
                }(s, c);
                if (a += `${p} `, v) return u(m, r);
                const f = p.split(" "),
                    h = function(e) {
                        return function(e) {
                            return [".", "?", "!"].some((t => e.trim().endsWith(t)))
                        }(e[e.length - 1])
                    }(f);
                o += f.length;
                const E = o >= n,
                    g = o >= t && h,
                    b = function(e, t, n) {
                        return t - e > n
                    }(l.endTime, null == (_ = c[s + 1]) ? void 0 : _.startTime, i);
                return (E || g || b) && (r = u(m, r), d(e[s + 1])), r
            }), []).map(((e, t) => r(r({}, e), {}, {
                originalIndex: t
            })));

            function d(e) {
                e && (o = 0, a = "", l = e.startTime, s = e.originalIndex, c = e.startTimeDisplay)
            }

            function u(e, t) {
                return t.concat({
                    originalIndex: s,
                    text: a.trim(),
                    startTime: l,
                    startTimeDisplay: c,
                    endTime: e
                })
            }
        })(a));
    return l
}

function V_(e) {
    var t;
    return (null == (t = e[0]) ? void 0 : t.startTime) || 0
}

function B_(e) {
    var t;
    return (null == (t = e[e.length - 1]) ? void 0 : t.endTime) || 0
}
const U_ = (e, t) => {
        let n = {
            index: 0,
            diff: 1 / 0
        };
        for (let i = 0; i < t.length; i++) {
            if (t[i].startTime <= e && t[i].endTime >= e) return i;
            const o = Math.abs(t[i].startTime - e),
                r = Math.abs(t[i].endTime - e),
                a = Math.min(o, r);
            a < n.diff && (n = {
                index: i,
                diff: a
            })
        }
        return n.index
    },
    x_ = e => o.isGoogleBot || Boolean(null == e ? void 0 : e.config.embed.tq),
    F_ = [ka.EMPTY, ka.HELP, ka.SHARE, ka.INTERACTIVE],
    H_ = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!n.settings.playbar) return !1;
        if (!Va(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return nc(tc.PROGRESS_BAR, o, i)
    },
    W_ = e => {
        const t = x_(e);
        return o.isGoogleBot && t
    };

function G_(e) {
    e((e => ({
        displayList: r(r({}, e.displayList), {}, {
            aiWidget: !1
        })
    })))
}
const Y_ = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!Va(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return nc(tc.FULL_CONTROLS, o, i)
    },
    $_ = e => {
        const {
            set: t,
            get: n
        } = e, i = function(e) {
            const t = f_(e),
                n = v_(e),
                i = (e => b_(e).purpose !== ka.EMPTY)(e),
                o = (({
                    store: e,
                    config: t,
                    events: n,
                    set: i
                }) => {
                    var o;
                    return n.on(Bi, ((e, t) => {
                        i((e => {
                            var n;
                            return {
                                displayList: r(r({}, e.displayList), {}, {
                                    cards: !(null == (n = t.embed) || null == (n = n.cards) || !n.length || e.appearance.isMenuBlockingUI)
                                })
                            }
                        }))
                    })), !(null == (o = t.embed) || null == (o = o.cards) || !o.length || e.get("ui.controlbar.isMenuFullWidth"))
                })(e),
                a = y_(e),
                l = h_(e),
                s = H_(e),
                c = W_(e),
                d = x_(e),
                u = function(e) {
                    const {
                        purpose: t
                    } = u_(e);
                    return t !== c_.EMPTY
                }(e),
                _ = (e => {
                    const {
                        config: t
                    } = e;
                    return null !== p_(t)
                })(e),
                p = Y_(e),
                m = i || _;
            return (({
                set: e,
                get: t,
                events: n,
                subscribe: i,
                performDelegateAction: o
            }) => {
                const a = e => {
                    t().displayList.outro !== e && (e && (t().displayList.accessGate || t().displayList.ad || t().embed.background || t().embed.loop || t().outro.purpose === E_.BEGINNING) || (e ? o(Fd, (() => {
                        s(e)
                    })) : s(e)))
                };

                function l(e) {
                    e ? a(!1) : t().playback.ended && a(!0)
                }

                function s(t) {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            outro: t
                        })
                    }))), n.fire(t ? zi : ji)
                }
                n.on([h.PLAY, h.SEEKED, Kn, tn, xt], (() => a(!1))), n.on(en, (() => a(!0))), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.ended
                }), (e => a(e))), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), l), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), l)
            })(e), (({
                store: e,
                config: t,
                set: n
            }) => {
                e.watch("ui.controlbar.isMenuFullWidth", (e => {
                    n((n => {
                        var i;
                        return {
                            displayList: r(r({}, n.displayList), {}, {
                                cards: !(null == (i = t.embed) || null == (i = i.cards) || !i.length || e)
                            })
                        }
                    }))
                }))
            })(e), (({
                set: e,
                events: t,
                store: n
            }) => {
                n.watch("ui.player.mode", (t => {
                    t === Qa.TINY && e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            debugPanel: !1
                        })
                    })))
                })), t.on(Ti, (() => {
                    e((e => n.get("ui.player.mode") === Qa.TINY ? n_ : {
                        displayList: r(r({}, e.displayList), {}, {
                            debugPanel: !e.displayList.debugPanel
                        })
                    }))
                }))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function a(e = {}) {
                    n().displayList.sideDock && t((t => {
                        const {
                            playback: n,
                            displayList: i,
                            appearance: a,
                            embed: l,
                            cards: s
                        } = t, {
                            fullPlayerElement: c,
                            alert: d,
                            menu: _,
                            toast: p
                        } = i, {
                            playInitiated: m,
                            targetTimeReached: v
                        } = n, {
                            forceExitedFullscreen: f
                        } = a, h = Ea(a, e, "mousedOverSidedock"), E = c || d || _ && a.isMenuBlockingUI || !!s.displayedCard || p && u();
                        return f ? n_ : m && v || E || l.autoHideControls ? h ? n_ : !a.externalDisplay && !a.pictureInPictureActive || E ? (o.fire(Xn, !1), {
                            appearance: r(r({}, t.appearance), {}, {
                                mousedOverSidedock: h
                            }),
                            displayList: r(r({}, t.displayList), {}, {
                                sideDock: !1
                            })
                        }) : n_ : n_
                    }))
                }

                function l(e = {}) {
                    n().displayList.sideDock || t((t => {
                        const {
                            displayList: n,
                            appearance: i,
                            embed: a,
                            cards: l,
                            playback: s
                        } = t, {
                            menu: c,
                            fullPlayerElement: d,
                            alert: _,
                            toast: p
                        } = n, m = d || _ || c && i.isMenuBlockingUI || !!l.displayedCard || p && u();
                        return Va(a) ? m || s.isSegmentedPlaybackEnabled ? n_ : (o.fire(Xn, !0), {
                            appearance: r(r({}, t.appearance), {}, {
                                mousedOverSidedock: Ea(t.appearance, e, "mousedOverSidedock")
                            }),
                            displayList: r(r({}, t.displayList), {}, {
                                sideDock: !0
                            })
                        }) : n_
                    }))
                }

                function s() {
                    return a({
                        mousedOverSidedock: !1
                    })
                }

                function c(e, t) {
                    e && t && s()
                }

                function d(e, t) {
                    !e && t && l()
                }

                function u() {
                    return [Ks.XXS, Ks.XS].includes(n().appearance.playerBreakpoint)
                }
                o.on([Si, Oi, kn], a), o.on([Ii, Eo, h.ENTER_PICTURE_IN_PICTURE], l), o.on(Bi, (function(n, i) {
                    const o = f_(r(r({}, e), {}, {
                        config: i
                    }));
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            sideDock: o
                        })
                    })))
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }), (e => e && a())), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => !e && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.alert
                }), (e => e && a())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => e ? c(e, n().appearance.isMenuBlockingUI) : d(e, n().appearance.isMenuBlockingUI))), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }), (e => e ? c(n().displayList.menu, e) : d(n().displayList.menu, e))), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => e ? s() : l())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            sideDock: !1
                        })
                    }))) : n().displayList.sideDock || l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.cards) ? void 0 : t.displayedCard
                }), (e => e && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => e && u() && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                }), (e => {
                    e ? s() : l()
                }))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o,
                    config: a
                } = e;

                function l() {
                    t((e => {
                        const {
                            appearance: t,
                            playback: n,
                            embed: i
                        } = e, {
                            externalDisplay: o
                        } = t, {
                            scrubbing: l,
                            paused: s
                        } = n, c = u(e), {
                            embed: d
                        } = a;
                        return Va(i) ? t.playerSizeMode === Qa.TINY || m_(d.settings) || c ? n_ : o ? {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !0
                            })
                        } : !s || l ? n_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !0
                            })
                        } : n_
                    }))
                }

                function s() {
                    t((e => {
                        const {
                            appearance: t,
                            playback: n
                        } = e, {
                            externalDisplay: i
                        } = t, {
                            playInitiated: o
                        } = n, a = u(e);
                        return t.playerSizeMode === Qa.TINY || a ? {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !1
                            })
                        } : i || !o ? n_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                title: !1
                            })
                        }
                    }))
                }

                function c(e, t) {
                    e && t && s()
                }

                function d(e, t) {
                    !e && t && l()
                }

                function u(e) {
                    const {
                        fullPlayerElement: t,
                        outro: n,
                        menu: i,
                        toast: o,
                        topCenterActionItem: r
                    } = e.displayList, {
                        isMenuBlockingUI: a
                    } = e.appearance;
                    return t || n || i && a || o || r
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }), (e => e && s())), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => {
                    e ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }), (e => {
                    e ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => e ? c(e, n().appearance.isMenuBlockingUI) : d(e, n().appearance.isMenuBlockingUI))), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }), (e => e ? c(n().displayList.menu, e) : d(n().displayList.menu, e))), i((e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }), (e => {
                    [ka.NOT_SUPPORTED, ka.HELP, ka.EMPTY].includes(e) || s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }), (e => {
                    e === Qa.TINY ? s() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => e ? s() : l())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.topCenterActionItem
                }), (e => e ? s() : l())), o.on(In, s).on(xt, l).on(Bi, ((n, i) => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            title: v_(r(r({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), (({
                set: e,
                subscribe: t
            }) => {
                t((e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }), (t => (t => {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            overlay: t
                        })
                    })))
                })(!Ma(t))))
            })(e), (({
                get: e,
                set: t,
                subscribe: n
            }) => {
                n((e => {
                    var t;
                    return null == e || null == (t = e.alert) ? void 0 : t.currentAlert
                }), (n => {
                    const i = e().displayList.alert;
                    if (!i && n === T_.EMPTY) return;
                    if (i && n !== T_.EMPTY) return;
                    const o = n !== T_.EMPTY;
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            alert: o
                        })
                    })))
                }))
            })(e), (({
                events: e,
                subscribe: t,
                set: n,
                get: i
            }) => {
                function o() {
                    n((e => {
                        const {
                            menu: t
                        } = e.displayList;
                        return t ? {
                            displayList: r(r({}, e.displayList), {}, {
                                menu: !1
                            })
                        } : n_
                    }))
                }
                e.on(xt, o), t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (t => {
                    const n = t ? Hr : "";
                    e.fire(Zn, n)
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => {
                    var t, n, r, a;
                    return e && ((null == (t = i()) ? void 0 : t.appearance.appBreakpoint) === Ks.XS || (null == (n = i()) ? void 0 : n.appearance.appBreakpoint) === Ks.XXS || (null == (r = i()) ? void 0 : r.appearance.appSizeMode) === Qa.MINI || (null == (a = i()) ? void 0 : a.appearance.appSizeMode) === Qa.TINY) && o()
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint
                }), (e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === Ks.XS || e === Ks.XXS) && o()
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appSizeMode
                }), (e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === Qa.MINI || e === Qa.TINY) && o()
                }))
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => e((e => ({
                    displayList: r(r({}, e.displayList), {}, {
                        ad: t
                    })
                })));
                t.on(An, (() => n(!0))), t.on([Sn, xt], (() => n(!1)))
            })(e), (({
                set: e,
                get: t,
                config: n,
                events: i,
                subscribe: o,
                store: a,
                element: l
            }) => {
                let s = n;
                const c = (t = {}) => {
                        var n;
                        (16 !== (null == (n = s.embed) || null == (n = n.settings) || null == (n = n.badge) ? void 0 : n.id) || t.isStockBadgeBehavior) && e((e => ({
                            displayList: r(r({}, e.displayList), {}, {
                                badge: !1
                            })
                        })))
                    },
                    d = (t = {}) => {
                        var n;
                        (16 !== (null == (n = s.embed) || null == (n = n.settings) || null == (n = n.badge) ? void 0 : n.id) || t.isStockBadgeBehavior) && e((e => {
                            const {
                                appearance: t
                            } = e;
                            return [Qa.MINI, Qa.TINY].includes(t.playerSizeMode) ? n_ : s.embed.settings.badge ? {
                                displayList: r(r({}, e.displayList), {}, {
                                    badge: !0
                                }),
                                appearance: r(r({}, e.appearance), {}, {
                                    shouldRestoreBadge: !1
                                })
                            } : n_
                        }))
                    };

                function u(t) {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            badge: y_({
                                config: t,
                                element: l
                            })
                        })
                    })))
                }
                i.on(zn, (e => {
                    var t;
                    16 === (null == (t = s.embed) || null == (t = t.settings) || null == (t = t.badge) ? void 0 : t.id) && (e ? d({
                        isStockBadgeBehavior: !0
                    }) : c({
                        isStockBadgeBehavior: !0
                    }))
                })), i.on(In, c), i.on(Bi, ((e, t) => {
                    s = t, u(t)
                })), i.on(xt, (() => {
                    u(s)
                })), a.watch("ui.player.mode", (n => {
                    n !== Qa.TINY && n !== Qa.MINI || !t().displayList.badge ? t().appearance.shouldRestoreBadge && d() : e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            badge: !1
                        }),
                        appearance: r(r({}, e.appearance), {}, {
                            shouldRestoreBadge: !0
                        })
                    })))
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    e ? d() : c()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }), (e => e && c())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    (function(e) {
                        return [ka.NOT_SUPPORTED, ka.HELP, null].includes(e)
                    })(e) || c(), e || t().playback.playInitiated || d()
                }))
            })(e), (({
                set: e,
                subscribe: t
            }) => {
                t((e => {
                    var t;
                    return null == e || null == (t = e.notification) ? void 0 : t.currentNotification
                }), (t => {
                    (t => {
                        e((e => ({
                            displayList: r(r({}, e.displayList), {}, {
                                notification: t
                            })
                        })))
                    })(!!t)
                }))
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            pipOverlay: t
                        })
                    })))
                };
                t.on(h.ENTER_PICTURE_IN_PICTURE, (() => n(!0))), t.on(h.LEAVE_PICTURE_IN_PICTURE, (() => n(!1)))
            })(e), (e => {
                const {
                    set: t,
                    events: n,
                    config: i,
                    subscribe: o
                } = e;

                function a(e = {}) {
                    t((t => {
                        const {
                            controlBar: i,
                            embed: o,
                            playback: a,
                            displayList: l,
                            appearance: s
                        } = t, c = Ea(s, e, "mousedOverControlBar"), d = {
                            appearance: r(r({}, t.appearance), {}, {
                                mousedOverControlBar: c
                            })
                        };
                        return i.overrideBehavior || s.forceExitedFullscreen ? d : a.playInitiated && a.targetTimeReached || l.fullPlayerElement || o.autoHideControls || l.ad ? c ? d : !s.externalDisplay && !s.pictureInPictureActive || l.fullPlayerElement ? a.buffering || a.scrubbing ? d : (n.fire(zn, !1), r(r({}, d), {}, {
                            displayList: r(r({}, t.displayList), {}, {
                                controlBar: !1
                            })
                        })) : d : d
                    }))
                }

                function l() {
                    t((e => {
                        const {
                            displayList: t,
                            controlBar: i,
                            embed: o
                        } = e;
                        return t.controlBar ? n_ : Va(o) ? i.overrideBehavior || t.fullPlayerElement ? n_ : (n.fire(zn, !0), {
                            displayList: r(r({}, e.displayList), {}, {
                                controlBar: !0
                            })
                        }) : n_
                    }))
                }

                function s() {
                    return a({
                        mousedOverControlBar: !1
                    })
                }

                function c(n) {
                    const i = h_(r(r({}, e), {}, {
                        config: n
                    }));
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            controlBar: i
                        })
                    })))
                }
                n.on([Ii, Kn, Vt, xt], l), n.on(Si, s), n.on(Oi, a), n.on(Bi, (function(e, t) {
                    c(t)
                })), n.on([Y.STREAM_ONLINE, Y.STREAM_OFFLINE, Y.EVENT_ENDED], (function() {
                    c(i)
                })), n.on(nn, (function(e) {
                    t((t => t.controlBar.overrideBehavior ? {
                        displayList: r(r({}, t.displayList), {}, {
                            controlBar: e
                        })
                    } : n_))
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }), (e => e && l())), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }), (e => e && a())), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => {
                    e ? s() : l()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? a() : l()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => {
                    e && l()
                }))
            })(e), (e => {
                const {
                    get: t,
                    set: n,
                    events: i,
                    subscribe: o,
                    config: a,
                    bigPicture: l
                } = e;

                function s() {
                    n((e => {
                        const {
                            transcript: t
                        } = e.displayList;
                        return t ? c(e, !1) : n_
                    }))
                }

                function c(e, t) {
                    return {
                        displayList: r(r({}, e.displayList), {}, {
                            transcript: t
                        })
                    }
                }
                i.on(Bi, (() => {
                    n((t => c(t, x_(e))))
                })), i.on(Ho, (function() {
                    var e, i, o, a, s;
                    const c = null == (e = t()) || null == (e = e.overlay) ? void 0 : e.purpose,
                        d = null == (i = t().displayList) ? void 0 : i.transcript,
                        u = null == (o = t()) || null == (o = o.displayList) ? void 0 : o.outro,
                        _ = null == (a = t()) || null == (a = a.displayList) ? void 0 : a.accessGate,
                        p = null == (s = t()) || null == (s = s.captions) ? void 0 : s.textTracks,
                        m = !!d || !u && F_.includes(c) && !!p.length && !_;
                    t().embed.transcript && m && (n((e => r(r({}, e), {}, {
                        displayList: r(r({}, e.displayList), {}, {
                            transcript: !e.displayList.transcript
                        })
                    }))), l.sendEvent(Gl.EMBEDDED_TRANSCRIPT_CLICK, {
                        name: d ? "exit_embed_transcript" : "open_embed_transcript",
                        copy: null,
                        location: "keyboard_shortcut",
                        element: "",
                        current_transcript_language: ""
                    }))
                })), i.on(Uo, s), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.stereoscopicEnabled
                }), (e => e && s())), o((e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.overlay) && !F_.includes(null == e || null == (n = e.overlay) ? void 0 : n.purpose)
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => {
                    var n;
                    (({
                        events: e
                    }, t) => {
                        e.fire(hn, t)
                    })({
                        events: i
                    }, e);
                    const o = null == (n = t()) || null == (n = n.captions) ? void 0 : n.textTrackEls;
                    e && (({
                        config: e,
                        events: t
                    }, n) => {
                        var i;
                        const o = n.map((e => ({
                                id: e.id,
                                label: e.label,
                                language: e.srclang
                            }))),
                            r = (null == (i = N_(e, o)) ? void 0 : i.language) || "";
                        t.fire(Fo, {
                            id: De(),
                            startTime: Date.now(),
                            defaultLanguage: r
                        })
                    })({
                        config: a,
                        events: i
                    }, o)
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.aiWidget
                }), (e => e && s()))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function a() {
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            progressBar: !1
                        })
                    })))
                }

                function l() {
                    t((e => {
                        const {
                            appearance: t,
                            displayList: n,
                            embed: i,
                            controlBar: o
                        } = e, {
                            playerSizeMode: a,
                            playerBreakpoint: l
                        } = t;
                        return i.playbar ? n.ad ? n_ : nc(tc.PROGRESS_BAR, a, l) ? !o.showAllControls && n.controlBarButtons ? n_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                progressBar: !0
                            })
                        } : n_ : n_
                    }))
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }), (e => {
                    e === Qa.TINY ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.controlBarButtons
                }), (e => {
                    e && !n().controlBar.showAllControls ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }), (e => {
                    !e && n().displayList.controlBarButtons ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? a() : l()
                })), o.on(Bi, ((n, i) => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            progressBar: H_(r(r({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;

                function a(e) {
                    o.fire(Vo, e), n((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            rightContentArea: e
                        }),
                        appearance: r(r({}, t.appearance), {}, {
                            rightContentAreaAnimating: !0
                        })
                    }))), clearTimeout(l), l = setTimeout((function() {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                rightContentAreaAnimating: !1
                            })
                        })))
                    }), 400)
                }
                let l;
                t((e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.transcript) || (null == e || null == (n = e.displayList) ? void 0 : n.aiWidget)
                }), (e => {
                    var t;
                    const n = null == (t = i()) || null == (t = t.displayList) ? void 0 : t.rightContentArea;
                    e && !n ? a(!0) : !e && n && a(!1)
                })), W_(e) && o.fire(Vo, !0)
            })(e), (({
                set: e,
                get: t,
                events: n,
                subscribe: i,
                config: o,
                backbone: a
            }) => {
                function l() {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            captions: !1
                        })
                    })))
                }

                function s() {
                    e((e => {
                        const {
                            appearance: t,
                            embed: n
                        } = e;
                        return n.cc ? t.pictureInPictureActive || n.background ? n_ : {
                            displayList: r(r({}, e.displayList), {}, {
                                captions: !0
                            })
                        } : (a.disableTextTrack(), n_)
                    }))
                }
                n.on(y, s), n.on(h.ENTER_PICTURE_IN_PICTURE, l), n.on(h.LEAVE_PICTURE_IN_PICTURE, s), n.on(In, (() => {
                    o.embed.outro !== E_.NOTHING && l()
                })), n.on(xt, l), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    !e && s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.scrubbing
                }), (e => {
                    e && s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? l() : s()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.captions) ? void 0 : t.activeCues
                }), (e => {
                    var n;
                    e.length && null != (n = t()) && null != (n = n.playback) && n.playInitiated ? s() : l()
                }))
            })(e), (e => {
                const {
                    subscribe: t,
                    events: n
                } = e;
                t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => n.fire(jn, e)))
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;
                t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => e && G_(n))), o.on(fn, (e => {
                    e === ia.AI_WIDGET_ID && G_(n)
                })), o.on(Wo, (() => {
                    const {
                        toggleDisplayList: e,
                        embed: t
                    } = i();
                    t.aiWidget && e("aiWidget")
                }))
            })(e), (e => {
                const {
                    set: t,
                    events: n
                } = e, i = e => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            accessGate: e
                        })
                    })))
                };
                n.on(jo, (() => {
                    i(!0)
                })), n.on(Xo, (() => {
                    i(!1)
                }))
            })(e), (({
                set: e,
                get: t,
                subscribe: n
            }) => {
                function i() {
                    e((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            fullPlayerElement: t().displayList.accessGate || t().displayList.overlay
                        })
                    })))
                }
                n((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                }), (() => i())), n((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), (() => i()))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function a() {
                    t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            controlBarButtons: !1
                        })
                    })))
                }

                function l() {
                    Va(n().embed) && (n().controlBar.isExpanded || t((e => ({
                        displayList: r(r({}, e.displayList), {}, {
                            controlBarButtons: !0
                        })
                    }))))
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }), (e => {
                    e || n().controlBar.shouldRestoreButtonsDisplayed ? l() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.isExpanded
                }), (e => {
                    !e && n().controlBar.showAllControls ? l() : a()
                })), o.on(Bi, ((n, i) => {
                    t((t => ({
                        displayList: r(r({}, t.displayList), {}, {
                            controlBarButtons: Y_(r(r({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), {
                debugPanel: false,
                cards: o,
                sideDock: t,
                title: n,
                controlBar: l,
                outro: false,
                overlay: i,
                alert: false,
                menu: false,
                ad: false,
                badge: a,
                notification: false,
                nudgeNotification: false,
                pipOverlay: false,
                transcript: d,
                progressBar: s,
                rightContentArea: c,
                captions: false,
                toast: false,
                topCenterActionItem: u,
                aiWidget: false,
                accessGate: _,
                fullPlayerElement: m,
                controlBarButtons: p
            }
        }(e), o = (e, n) => {
            t((t => ({
                displayList: r(r({}, t.displayList), {}, {
                    [e]: n
                })
            })))
        };
        return {
            displayList: i,
            setDisplayList: o,
            toggleDisplayList: e => {
                const t = n().displayList[e];
                o(e, !t)
            }
        }
    };

function K_(e) {
    const {
        config: t,
        store: i
    } = e, {
        video: o
    } = t, r = i.get("ui.player.width"), a = i.get("ui.player.height"), l = o.width, s = o.height, {
        videoWidth: c,
        videoHeight: d
    } = q_(r, a, l, s), u = Sc(e);
    return {
        playerBreakpoint: i.get("ui.player.breakpoint"),
        appBreakpoint: i.get("ui.app.breakpoint"),
        playerSizeMode: i.get("ui.player.mode"),
        appSizeMode: i.get("ui.app.mode"),
        transcriptNavActive: !1,
        fullscreen: !1,
        forceExitedFullscreen: !1,
        pictureInPictureActive: !1,
        externalDisplay: !1,
        mousedOverSidedock: !1,
        mousedOverControlBar: !1,
        isMenuBlockingUI: i.get("ui.controlbar.isMenuFullWidth"),
        isMenuVerticalVideoMode: i.get("ui.controlbar.isMenuVerticalVideoMode"),
        shouldRestoreBadge: !1,
        isVerticalVideo: i.get("ui.player.isVerticalVideo"),
        boundingClientRect: ur(e.element),
        isDisplayContextBackbone: e.displayContext === e.backbone,
        showAirPlayPicker: !1,
        shouldMenuItemsWrap: i.get("ui.controlbar.doMenuItemsWrap"),
        stereoscopicEnabled: !1,
        videoWidth: c,
        videoHeight: d,
        playerWidth: r,
        playerHeight: a,
        containerWidth: i.get("ui.container.width"),
        containerHeight: i.get("ui.container.height"),
        placeholderThumbnail: n(null == o ? void 0 : o.thumbnail_url, {
            mw: "80",
            q: "85"
        }),
        rightContentAreaAnimating: !1,
        isStartTimeThumbLoading: u
    }
}

function q_(e, t, n, i) {
    const o = n / i,
        r = o > e / t;
    return {
        videoWidth: r ? e : Math.round(t * o),
        videoHeight: r ? Math.round(e / o) : t
    }
}
const z_ = (e, t) => {
        we((() => {
            const n = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (xe) {
                        return Promise.reject(xe)
                    }
                }
            }((function() {
                return function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(t.playbackEngineReady(), (function() {
                    e()
                }))
            }));
            n()
        }))
    },
    j_ = e => ({
        onClick: t => {
            t.preventDefault(), t.stopPropagation(), e(t)
        },
        onKeyDown: t => {
            ["Enter", " "].includes(t.key) && document.body.classList.contains(Jr.SHOWFOCUS) && (t.preventDefault(), t.stopPropagation(), e(t))
        },
        onMouseDown: e => {
            e.preventDefault()
        }
    }),
    X_ = () => {
        const e = vv((e => e.playback.paused)),
            t = vv((e => e.playback.scrubbing)),
            n = vv((e => e.playback.scrubbingByFrame)),
            i = vv((e => e.playback.playInitiated)),
            o = vv((e => e.chromecast.isChromecastPlaying)),
            r = vv((e => e.chromecast.isChromecastConnected)),
            a = vv((e => e.playback.buffering)),
            l = vv((e => e.playback.isAdPlaying)),
            s = vv((e => e.embed.isTrailer)),
            c = vv((e => e.embed.autoPlay)),
            d = vv((e => e.displayList.outro)),
            u = vv((e => e.displayList.ad)),
            _ = s && !i;
        let p = il.PLAY;
        _ ? p = il.TRAILER : c && (p = il.PAUSE);
        const [m, v] = ke(p);
        return r && v(o ? il.PAUSE : il.PLAY), u && v(l ? il.PAUSE : il.PLAY), we((() => {
            d ? v(il.REPLAY) : t && !d && v(e ? il.PLAY : il.PAUSE)
        }), [d]), we((() => {
            t && !n || a || _ || r || d || u || v(e ? il.PLAY : il.PAUSE)
        }), [e, a, _, r, d, u]), we((() => {
            i && v(il.PAUSE)
        }), [i]), {
            buttonState: m,
            setButtonState: v
        }
    };
let Z_ = function(e) {
        return e.PREFS = "prefs", e.CHAPTERS = "chapters", e.CC = "cc", e.TRANSCRIPT = "transcript", e.SIDEDOCK = "sidedock", e
    }({}),
    J_ = function(e) {
        return e.EMPTY = "empty", e.PREFS = "prefs", e.QUALITY = "quality", e.SPEED = "speed", e.AUDIO = "audio", e.CHAPTERS = "chapters", e.LANGUAGES = "languages", e.SUBTITLES = "subtitles", e.CUSTOMIZE = "customize", e.FONT = "font", e.BACKGROUND = "background", e.WINDOW = "window", e.PREVIEW = "preview", e.TRANSCRIPT_SETTINGS = "transcriptSettings", e.TRANSCRIPT_LANGUAGES = "transcriptLanguages", e.SIDEDOCK = "sidedock", e
    }({}),
    Q_ = function(e) {
        return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
    }({});
const ep = () => {
    const e = _m(),
        t = vv((e => e.embed.cc)),
        n = vv((e => e.embed.speedChangeEnabled)),
        i = vv((e => e.playback.qualities)),
        o = vv((e => e.embed.quality)),
        r = vv((e => e.chromecast.isChromecastConnected)),
        a = vv((e => e.chapters.chapters)),
        l = vv((e => e.embed.transcript)),
        s = vv((e => e.embed.chapters)),
        c = vv((e => e.playback.isSegmentedPlaybackEnabled)),
        d = vv((e => e.playback.audioTracks)),
        u = vv((e => e.displayList.ad)),
        _ = vv((e => e.appearance.isDisplayContextBackbone)),
        p = vv((e => {
            var t;
            return !(null == (t = e.embed.flags) || !t.new_subtitles_ui)
        })),
        m = e && t,
        v = !(!o || null == i || !i.length),
        f = d.length > 1,
        h = _ && !!(n || v || f || m && p) && !r && !u,
        E = !(null == a || !a.length) && s && !u && !c,
        g = e && l;
    return {
        [Z_.CC]: m,
        [Z_.PREFS]: h,
        [Z_.CHAPTERS]: E,
        [Z_.TRANSCRIPT]: g
    }
};
let tp = function(e) {
    return e.IDLE = "idle", e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error", e
}({});

function np() {}
const ip = e => {
        const [t, n] = ke(tp.IDLE), i = Me(), o = Ve(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (xe) {
                    return Promise.reject(xe)
                }
            }
        }((function() {
            if (null == i || !i.current) return function(e) {
                if (e && e.then) return e.then(np)
            }(function(t, o) {
                try {
                    var r = function() {
                        let t;
                        return n(tp.LOADING),
                            function(e, t) {
                                var n = e();
                                return n && n.then ? n.then(t) : t(n)
                            }((function() {
                                return function(e, t) {
                                    return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                                }(Xa(e), (function(e) {
                                    t = e
                                }))
                            }), (function() {
                                i.current = t, n(tp.LOADED)
                            }))
                    }()
                } catch (xe) {
                    return o()
                }
                return r && r.then ? r.then(void 0, o) : r
            }(0, (function(e) {
                n(tp.ERROR)
            })))
        })), [e]);
        return {
            readyState: t,
            load: o,
            module: (null == i ? void 0 : i.current) || null
        }
    },
    op = (e, t, n) => {
        we((() => {
            function i(n) {
                n.key !== e && n.code !== e || t(n)
            }

            function o(t) {
                t.key !== e && t.code !== e || !n || n(t)
            }
            return window.addEventListener("keydown", i), n && window.addEventListener("keyup", o), () => {
                window.removeEventListener("keydown", i), n && window.removeEventListener("keyup", o)
            }
        }), [t, n, e])
    };
let rp = function(e) {
    return e[e.AUTO = 0] = "AUTO", e[e.BOTTOM = 1] = "BOTTOM", e[e.CENTER = 2] = "CENTER", e
}({});
const ap = () => {
        const e = vv((e => e.embed.playButtonPosition)),
            t = vv((e => e.embed.playbar)),
            n = vv((e => e.appearance.playerSizeMode)),
            i = vv((e => e.appearance.isVerticalVideo)),
            {
                buttonState: o
            } = X_(),
            r = n === Qa.TINY,
            a = n === Qa.MINI && i;
        return o === il.REPLAY ? rp.BOTTOM : r || a || e === rp.CENTER ? rp.CENTER : e === rp.BOTTOM || e !== rp.AUTO || t ? rp.BOTTOM : rp.CENTER
    },
    lp = () => {
        const e = vv((e => e.playback.volume)),
            t = vv((e => e.playback.muted)),
            n = vv((e => e.setPlayback)),
            i = () => {
                n("muted", !1), e <= 0 && n("volume", 100)
            },
            o = () => {
                n("muted", !0)
            };
        return {
            mute: o,
            unmute: i,
            toggleMuted: () => {
                t || e <= 0 ? i() : o()
            }
        }
    },
    sp = (e = 1e4) => {
        const [t, n] = ke(!1), [i, o] = ke(e), [r, a] = ke(Date.now());
        return {
            hasError: t,
            componentTimeout: i,
            componentVersion: r,
            onError: () => {
                n(!0)
            },
            onReload: () => {
                n(!1), o(i + 1e3), a(Date.now())
            }
        }
    };
let cp = function(e) {
    return e.VOLUME = "volume", e.CHROMECAST = "chromecast", e.AIRPLAY = "airplay", e.STEREOSCOPIC = "stereoscopic", e.PIP = "pip", e.FULLSCREEN = "fullscreen", e.VIMEO_LOGO = "vimeo_logo", e
}({});
const dp = e => {
        const t = vv((e => e.appearance.playerSizeMode)),
            n = vv((e => e.appearance.playerBreakpoint));
        return nc(e, t, n)
    },
    up = e => {
        let t = [];
        return (null != e && e.children ? Array.from(e.children) : []).forEach((e => {
            var n;
            const i = window.getComputedStyle(e);
            if (!i.display || "none" === i.display) return;
            const o = "none" !== i.pointerEvents;
            e.tabIndex > -1 && o && t.push(e), null != (n = e.children) && n.length && (t = t.concat(up(e)))
        })), t
    },
    _p = e => {
        document.body.classList.toggle(Jr.SHOWFOCUS, e)
    };

function pp() {
    return document.activeElement
}

function mp(e) {
    return null == e ? void 0 : e.contains(pp())
}

function vp(e, t) {
    let n = up(e),
        i = n.indexOf(pp()),
        o = "prev" === t ? i - 1 : i + 1,
        r = null;
    r = o >= n.length ? n[0] : o < 0 ? n[n.length - 1] : n[o], r && r.focus()
}
const fp = ["s", "?"],
    hp = ({
        parentRef: e,
        isActive: t,
        toggleKey: n,
        customKeyHandlers: i = {},
        externalElement: o,
        onEscape: r = qa,
        onToggle: a = qa
    }) => {
        const l = vv((e => e.config.view)),
            s = vv((e => e.embed.controls)),
            c = vv((e => e.embed.background)),
            d = vv((e => e.embed.keyboard)),
            u = vv((e => e.element)),
            _ = Me(null),
            p = Me(t),
            m = Me(null),
            v = Me(null);

        function f(e) {
            0 !== e.detail && _p(!1)
        }

        function h(e, t = 0) {
            t >= 5 || e && (e.focus(), e !== pp() && (clearTimeout(m.current), m.current = setTimeout((() => h(e, t + 1)), 100)))
        }

        function E() {
            const t = up(e.current);
            t.length > 0 && h(t[0])
        }

        function g() {
            _.current && (h(_.current), _.current = null), clearTimeout(v.current), v.current = setTimeout((() => {
                !u.contains(pp()) && null != o && o.current && h(o.current)
            }), 500)
        }

        function b() {
            var t;
            return null == e || null == (t = e.current) ? void 0 : t.contains(pp())
        }

        function C(e) {
            if (fp.includes(e.key) || "Space" === e.code) return !0;
            if (e.ctrlKey || e.metaKey || e.altKey || "Shift" === e.key) return !0;
            if ("keydown" !== e.type) return !0;
            if (!s || c) return !0;
            const t = e.target || e.srcElement,
                n = u.contains(t),
                i = t.tagName;
            if ("INPUT" === i || "SELECT" === i || "TEXTAREA" === i || t.isContentEditable) {
                const t = !n,
                    i = n && "Escape" !== e.key && "Tab" !== e.key && e.shiftKey;
                if (t || i) return !0
            }
            return !Ca(l)
        }
        const T = Ve((o => {
            if (C(o)) return;
            "Escape" !== o.key ? _p(!0) : _p(!1);
            const l = o.key,
                s = {
                    Escape: () => {
                        null != e && e.current && p.current && (o.preventDefault(), null == r || r(), g())
                    },
                    Tab: () => {
                        var n;
                        const i = o.shiftKey ? "prev" : "next",
                            r = "dialog" === (null == e || null == (n = e.current) || null == n.getAttribute ? void 0 : n.getAttribute("role"));
                        (t || b()) && r && (o.preventDefault(), vp(e.current, i))
                    }
                };
            n && (s[n] = () => {
                null == a || a(!p.current)
            }), "function" == typeof s[l] && s[l](), "function" == typeof i[l] && i[l](o)
        }), [i, t, b, r, a, e, C, n]);
        return we((() => {
            t ? E() : !t && p.current && g(), p.current = t
        }), [t]), we((() => (d && (document.addEventListener("click", f, !1), document.addEventListener("keydown", T, !1)), () => {
            document.removeEventListener("click", f, !1), document.removeEventListener("keydown", T, !1)
        })), [d, T]), {
            onFocus: function(t) {
                var n, i;
                (null == (n = e.current) ? void 0 : n.contains(pp())) && (null == (i = e.current) || !i.contains(t.relatedTarget)) && !_.current && (_.current = t.relatedTarget)
            },
            focusFirstItem: E
        }
    },
    Ep = ({
        menuRef: e,
        panelRef: t,
        buttonRef: n,
        isActive: i,
        toggleKey: o,
        shouldTrapFocus: r = !1,
        onBack: a = qa,
        setMenuDisplayed: l = qa
    }) => {
        const s = Ve((e => {
                mp(t.current) && (e.preventDefault(), vp(t.current, "prev"))
            }), [t]),
            c = Ve((e => {
                mp(t.current) && (e.preventDefault(), vp(t.current, "next"))
            }), [t]),
            d = Ve((e => {
                if (mp(t.current)) {
                    const t = e.target,
                        n = t.getAttribute("aria-haspopup"),
                        i = t.getAttribute("aria-expanded");
                    "true" === n && "true" === i ? t.click() : a(e)
                }
            }), [t, a]),
            u = Ve((e => {
                if (mp(t.current)) {
                    const t = e.target,
                        n = t.getAttribute("aria-haspopup"),
                        i = t.getAttribute("aria-expanded");
                    "true" === n && "false" === i && t.click()
                }
            }), [t]),
            _ = Ve((t => {
                var i;
                if ((null == (i = e.current) ? void 0 : i.contains(t.target)) && null != n && n.current) {
                    const i = !t.shiftKey;
                    if (r) {
                        const n = i ? "next" : "prev";
                        return t.preventDefault(), void vp(e.current, n)
                    }
                    const a = up(e.current),
                        l = a.indexOf(t.target);
                    var o;
                    (i && l === a.length - 1 || !i && 0 === l) && (t.preventDefault(), null == (o = n.current) || o.focus())
                }
            }), [e, n, r]);
        return hp({
            parentRef: t,
            isActive: i,
            toggleKey: o,
            onEscape: () => {
                l(!1)
            },
            onToggle: e => {
                l(e)
            },
            externalElement: n,
            customKeyHandlers: {
                ArrowUp: s,
                ArrowDown: c,
                ArrowLeft: d,
                ArrowRight: u,
                Tab: _
            }
        })
    },
    gp = e => {
        const t = vv((e => e.appearance.appSizeMode)),
            n = vv((e => e.appearance.appBreakpoint)),
            i = t === Qa.MINI || t === Qa.TINY || n === Ks.XXS || n === Ks.XS;
        return {
            role: i ? "dialog" : void 0,
            ariaModal: !!i || void 0,
            ariaHidden: !e || void 0
        }
    },
    bp = (e, t, n = 300) => {
        const i = O(t, n),
            o = Me(new ResizeObserver(i));
        we((() => {
            const t = o.current,
                n = null == e ? void 0 : e.current;
            return n && t.observe(n), () => {
                n && t.unobserve(n)
            }
        }), [])
    };
let Cp = function(e) {
    return e.DOLBY_VISION = "dolbyVision", e.CLOSE = "close", e.PIP = "pip", e.AIRPLAY = "airPlay", e.ENTER_FULLSCREEN = "enterFullscreen", e.EXIT_FULLSCREEN = "exitFullscreen", e.GEAR = "gear", e.VIMEO = "vimeo", e.VIMEO_SMALL = "vimeoSmall", e.ENTER_PICTURE_IN_PICTURE = "enterPictureInPicture", e.EXIT_PICTURE_IN_PICTURE = "exitPictureInPicture", e.PAUSE = "pause", e.PLAY = "play", e.REPLAY = "replay", e.CHAPTERS = "chapters", e.POINT = "point", e.CC = "cc", e.CC_FILLED = "ccFilled", e.CHECKMARK = "checkmark", e.STEREOSCOPIC = "stereoscopic", e.PERSON_FILLED = "personFilled", e.CHEVRON_DOWN = "chevronDown", e.CHEVRON_RIGHT = "chevronRight", e.CLOCK = "clock", e.CLOCK_FILLED = "clockFilled", e.COLLECTIONS = "collections", e.DISMISS_X = "dismissX", e.HEART = "heart", e.HEART_FILLED = "heartFilled", e.HEART_WIDER_FILLED = "heartWiderFilled", e.HEART_WIDER_BROKEN_FILLED = "heartWiderBrokenFilled", e.ONDEMAND = "ondemand", e.PAPER_PLANE = "paperPlane", e.POP_OUT = "popOut", e.VOLUME_OFF_FILLED = "volumeOffFilled", e.VOLUME_ON_FILLED = "volumeOnFilled", e.FAST_FORWARD = "fastForward", e.INFO_CIRCLE = "infoCircle", e.TRANSCRIPT_ON = "transcriptOn", e.TRANSCRIPT_OFF = "transcriptOff", e.SEARCH = "search", e.CHEVRON_UP = "chevronUp", e.CLOSE_CIRCLE = "closeCircle", e.SPINNER = "spinner", e.SLIDERS = "sliders", e.SWITCH_CONTAINER = "switchContainer", e.SWITCH_CIRCLE = "switchCircle", e.WARN_CIRCLE = "warnCircle", e.THUMBS_UP = "thumbsUp", e.THUMBS_DOWN = "thumbsDown", e.THUMBS_UP_FILLED = "thumbsUpFilled", e.THUMBS_DOWN_FILLED = "thumbsDownFilled", e.LINK = "link", e.SPARKLE_TWO_STARS_FILLED = "sparkleTwoStarsFilled", e.WARN_TRIANGLE = "warnTriangle", e.VERTICAL_ELLIPSIS = "verticalEllipsis", e.PLUS_SYMBOL = "plusSymbol", e.FACEBOOK = "facebook", e.TUMBLR = "tumblr", e.EMAIL = "email", e.EMBED = "embed", e.PREVIOUS = "previous", e.TWITTER = "twitter", e.VOD = "vod", e.VOD_DOWNLOAD = "vodDownload", e.VOD_RENT = "vodRent", e.VOD_SUBSCRIBE = "vodSubscribe", e.CAMERA = "camera", e
}({});
const Tp = () => {
        const e = vv((e => e.toggleDisplayList));
        return {
            label: "Ask Vimeo AI",
            enabled: vv((e => e.embed.aiWidget)),
            onSelect: () => e("aiWidget"),
            icon: Cp.SPARKLE_TWO_STARS_FILLED
        }
    },
    yp = () => {
        const e = vv((e => e.setUser));
        return {
            label: "Add to collections",
            enabled: vv((e => e.embed.collections)),
            onSelect: () => e("collected", !0),
            icon: Cp.COLLECTIONS
        }
    },
    {
        Provider: Lp,
        useStore: Ap
    } = Be(),
    Sp = ({
        player: e,
        children: t
    }) => (Ue((e => {})), xe(Lp, {
        createStore: () => Fe(((t, n) => {
            const {
                config: i,
                events: o,
                uuid: a,
                element: l,
                store: s,
                loadVideoViaIframe: c,
                loadVideoViaConfig: d,
                performDelegateAction: u,
                bigPicture: _
            } = e, p = {
                set: t,
                get: n,
                events: o,
                store: s,
                get config() {
                    return e.config
                },
                get bigPicture() {
                    return e.bigPicture
                },
                get backbone() {
                    return e.backbone
                }
            };
            return r(r(r(r(r(r(r(r({
                config: i,
                element: l,
                uuid: a,
                view: i.view,
                events: o,
                bigPicture: _,
                performDelegateAction: u,
                loadVideoViaIframe: c,
                loadVideoViaConfig: d
            }, (e => {
                const t = r(r({}, function() {
                    const t = p_(e.config),
                        n = (null == t ? void 0 : t.gate_type) || Os.EMPTY;
                    return ws(n, e.config, null == t ? void 0 : t.gate_id)
                }()), {}, {
                    accessGateLoaded: !1,
                    accessGateReady: !1,
                    setAccessGateLoaded: function() {
                        e.set((e => ({
                            accessGate: r(r({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateLoaded: !0
                            })
                        })))
                    },
                    setAccessGateReady: function() {
                        e.set((e => ({
                            accessGate: r(r({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateReady: !0
                            })
                        }))), n(Rs.OPENED)
                    },
                    closeAccessGate: o,
                    sendGateBPEvent: n
                });

                function n(t, n) {
                    var i;
                    null != (i = e.config.embed.access_gates) && i.length && e.bigPicture.sendEvent(Gl.PROCESS_STEP, {
                        process_name: "access_gate",
                        step_name: t,
                        status: t === Rs.ERROR ? "fail" : "success",
                        error: (null == n ? void 0 : n.message) || null,
                        error_code: "number" == typeof(null == n ? void 0 : n.code) ? `${n.code}` : null
                    })
                }

                function i(t, n = null) {
                    const i = ws(t, e.config, n);
                    e.set((e => ({
                        accessGate: r(r({}, null == e ? void 0 : e.accessGate), i)
                    }))), e.events.fire(jo, i.purpose)
                }

                function o(t) {
                    e.set((t => ({
                        accessGate: r(r({}, null == t ? void 0 : t.accessGate), {}, {
                            accessGateLoaded: !1,
                            accessGateReady: !1
                        }, ws(Os.EMPTY, e.config))
                    }))), e.events.fire(Xo, t), n(Rs.CLOSED)
                }

                function a() {
                    var t, n;
                    const r = e.config.embed.access_gates;
                    null != r && r.length && r.forEach((t => {
                        ! function(t) {
                            const {
                                gate_type: n,
                                placement: o,
                                timecode: r,
                                gate_id: a
                            } = t;

                            function l({
                                currentTime: t
                            }) {
                                t >= r && (i(n, a), e.events.off(h.TIME_UPDATE, l))
                            }

                            function s() {
                                i(n, a), e.events.off(In, s)
                            }
                            Ms(n, e.config) || (o === Ps.DURING_VIDEO && e.events.on(h.TIME_UPDATE, l), o === Ps.AFTER_VIDEO && e.events.on(In, s), e.events.on(Bi, (function() {
                                e.events.off(h.TIME_UPDATE, l), e.events.off(In, s)
                            })))
                        }(t)
                    }));
                    const a = p_(e.config),
                        l = null == (t = e.get()) || null == (t = t.accessGate) ? void 0 : t.gateId,
                        s = (null == (n = e.get()) || null == (n = n.accessGate) ? void 0 : n.purpose) || Os.EMPTY,
                        c = null == a ? void 0 : a.gate_id,
                        d = (null == a ? void 0 : a.gate_type) || Os.EMPTY,
                        u = l !== c || s !== d;
                    s !== Os.EMPTY && u && o(), d !== Os.EMPTY && c && u && (i(d, c), e.events.once(mo, (() => {
                        e.events.fire(jo, d)
                    })))
                }
                return a(), e.events.on(Bi, (function() {
                    a()
                })), {
                    accessGate: t
                }
            })(p)), Ip(p)), Pp(p)), Dp(p)), wp(p)), Vp(p)), Wp(p)), Gp(p))
        })),
        children: t
    })),
    Ip = e => {
        const t = Op(e),
            {
                set: n,
                events: i
            } = e;
        return i.on(xt, (() => {
            n((() => ({
                colors: Op(e)
            })))
        })), i.on(Gt, ((e, t) => {
            const i = $a(e);
            if (!i) return;
            const o = zr[t];
            n((e => ({
                colors: r(r({}, e.colors), {}, {
                    [o]: i
                })
            })))
        })), {
            colors: t
        }
    };

function Op(e) {
    const {
        embed: t
    } = e.config;
    return {
        colorOne: $a(t.color_one) || $a(Kr[Wr]),
        colorTwo: $a(t.color_two) || $a(t.color) || $a(Kr[Gr]),
        colorThree: $a(t.color_three) || $a(Kr[Yr]),
        colorFour: $a(t.color_four) || $a(Kr[$r])
    }
}
const Pp = e => {
    const t = Rp(e),
        {
            set: n,
            events: i
        } = e;
    return i.on(Bi, (() => {
        n((() => ({
            embed: Rp(e)
        })))
    })), {
        embed: t
    }
};

function Rp(e) {
    const {
        config: t
    } = e;
    return {
        playerUrl: t.player_url,
        referrer: t.request.referrer,
        transparent: !!t.embed.transparent,
        videoId: t.video.id,
        vimeoUrl: t.vimeo_url,
        onsite: !!t.embed.on_site
    }
}
let Np = function(e) {
    return e.EMPTY = "empty", e.PRIVATE_LOCKED = "private-locked", e.PASSWORD = "password", e.ERROR = "error", e.GEO_BLOCKED = "geo-blocked", e.DRM_PLAYBACK_UNAVAILABLE = "drm-playback-unavailable", e
}({});
const Dp = e => {
        const {
            get: t,
            set: n,
            events: i
        } = e;

        function o() {
            n((() => ({
                error: {
                    type: null,
                    title: null,
                    message: null
                }
            })))
        }
        return i.on(Cn, ((e, i) => {
            var o;
            const r = null == (o = t()) || null == (o = o.error) ? void 0 : o.type;
            g_(r, e, i) && n((() => ({
                error: {
                    type: e,
                    title: null == i ? void 0 : i.title,
                    message: null == i ? void 0 : i.message
                }
            })))
        })), i.on(bn, ((e, t) => {
            e !== Np.ERROR || n((() => ({
                error: {
                    type: ua.LOCAL_ACCESS_GATE_ERROR,
                    title: t.title,
                    message: t.message
                }
            })))
        })), i.on(Ut, (e => {
            e === ka.ERROR && n((() => ({
                error: {
                    type: ua.LOAD_VIDEO_VIA_CONFIG,
                    title: "Sorry",
                    message: "There was a problem. Please try again."
                }
            })))
        })), i.on(fi, o), i.on(Yi, (() => {
            var e;
            const n = _a();
            (null == (e = t()) || null == (e = e.error) ? void 0 : e.type) === n.type && o()
        })), {
            error: {
                type: null,
                title: null,
                message: null
            }
        }
    },
    wp = e => {
        const {
            set: t,
            events: n
        } = e, i = {
            purpose: kp(e.config.view)
        };
        return n.on(Bi, (function() {
            t((() => ({
                localAccessGate: {
                    purpose: kp(e.config.view)
                }
            })))
        })), n.on(bn, (e => {
            t((t => ({
                localAccessGate: r(r({}, t.localAccessGate), {}, {
                    purpose: e
                })
            })))
        })), {
            localAccessGate: i
        }
    };

function kp(e) {
    return e === Nr.geoBlocked ? Np.GEO_BLOCKED : e === Nr.error ? Np.ERROR : e === Nr.privateLocked ? Np.PRIVATE_LOCKED : e === Nr.privatePassword ? Np.PASSWORD : e === Nr.drmPlaybackUnavailable ? Np.DRM_PLAYBACK_UNAVAILABLE : Np.EMPTY
}
const Mp = [Nr.main, Nr.privateUnlocked],
    Vp = e => {
        const {
            set: t,
            events: n
        } = e, i = Bp(e);
        return n.on(er, (e => {
            t((t => ({
                login: r(r({}, t.login), {}, {
                    status: e
                })
            })))
        })), n.on(ki, (() => {
            t((() => ({
                login: Bp(e)
            })))
        })), n.on(Bi, (() => {
            t((() => ({
                login: Bp(e)
            })))
        })), {
            login: i
        }
    };

function Bp(e) {
    return {
        status: Up(e)
    }
}

function Up(e) {
    const {
        config: t
    } = e;
    return t.user.logged_in ? Mp.includes(t.view) ? Bs.LOGGED_IN_HAS_ACCESS : Bs.LOGGED_IN_NO_ACCESS : Bs.NOT_LOGGED_IN
}

function xp(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function Fp({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const l = parseInt(e, 10),
        s = parseInt(t, 10);
    return 0 === l || isNaN(l) || (r ? a.w = l : a.mw = l), 0 === s || isNaN(s) || (r ? a.h = s : a.mh = s), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function Hp(e, t = 0) {
    return function(e) {
        return new Promise(((t, n) => {
            const i = new Image;

            function o() {
                mc.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        }))
    }(e).catch((n => (mc.captureException(n, {
        extra: {
            imageUrl: e
        }
    }), t > 0 ? Hp(e, t - 1) : new Promise((() => {})))))
}
const Wp = e => {
        const {
            set: t,
            get: n,
            events: i,
            store: a
        } = e, l = (e, n) => {
            t((t => ({
                videoThumbnail: r(r({}, t.videoThumbnail), {}, {
                    [e]: n
                })
            })))
        }, s = () => l("isDisplayed", !0), c = () => l("isDisplayed", !1);

        function d() {
            return !!e.config.video.thumbnail_url
        }

        function u() {
            const t = a.get(Ed) && !a.get(bd),
                n = e.config.embed.autoplay,
                i = e.backbone && !e.backbone.paused;
            return t || !n && !i || dd.isCastConnected
        }

        function _() {
            return xp(a.get("ui.player.width") * o.devicePixelRatio, a.get("ui.player.height") * o.devicePixelRatio)
        }
        const p = () => (i.fire(Qo), Promise.resolve());

        function m() {
            if (!d()) return u() && s(), p();
            const {
                width: n,
                height: i
            } = _(), o = e.config.video.thumbnail_url, c = Fp({
                width: n,
                height: i,
                baseUrl: o
            });
            l("width", n);
            const m = Hp(c, 3).then((e => (e && a.dispatch(((e, t) => ({
                type: tu,
                payload: {
                    width: e,
                    height: t
                }
            }))(e.width, e.height)), u() && (t((e => ({
                videoThumbnail: r(r({}, e.videoThumbnail), {}, {
                    thumbnailUrl: c,
                    thumbnailBaseUrl: o
                })
            }))), s()), e)));
            if (!u()) return p();
            const v = new Promise((e => {
                setTimeout(e, 2e3)
            }));
            return Promise.race([m, v]).catch((e => {})).finally((() => {
                p()
            }))
        }

        function v() {
            var e, t, i;
            if (null == (e = n()) || null == (e = e.videoThumbnail) || !e.isDisplayed || null == (t = n()) || null == (t = t.videoThumbnail) || !t.thumbnailUrl) return;
            const {
                width: o
            } = _();
            o <= (null == (i = n()) || null == (i = i.videoThumbnail) ? void 0 : i.width) || 0 === o || m()
        }
        i.on(En, s), i.on(gn, c), i.on(Bi, (t => {
            var i;
            const o = e.config.video.thumbnail_url,
                r = null == (i = n()) || null == (i = i.videoThumbnail) ? void 0 : i.thumbnailBaseUrl;
            t || o && r && r !== o ? m() : p()
        })), i.on(ri, v), i.on([g.BUFFER_ENDED, h.PLAYING], c), a.watch("ui.player.width", O(v, 150)), a.watch("ui.preview.scaleFactor", (e => {
            l("shouldCoverBackground", e > 1)
        }));
        const {
            width: f,
            height: E
        } = _(), b = e.config.video.thumbnail_url;
        return {
            videoThumbnail: {
                thumbnailUrl: d() ? Fp({
                    width: f,
                    height: E,
                    baseUrl: b
                }) : "",
                thumbnailBaseUrl: b,
                width: f,
                isDisplayed: !1,
                shouldCoverBackground: a.get("ui.preview.scaleFactor") > 1
            },
            setVideoThumbnail: l
        }
    },
    Gp = e => {
        const t = Yp(e),
            {
                set: n,
                events: i
            } = e;
        return i.on(Bi, (() => {
            n((() => ({
                user: Yp(e)
            })))
        })), i.on(ki, (() => {
            n((() => ({
                user: Yp(e)
            })))
        })), {
            user: t
        }
    };

function Yp(e) {
    const {
        config: t
    } = e, {
        user: n
    } = t;
    return {
        isClipOwner: !!n.owner
    }
}
let $p = function(e) {
    return e.LIKES = "likes", e.WATCH_LATER = "watchlater", e.FOLLOWING = "following", e
}({});

function Kp() {}
const qp = () => {
    const e = Ap((e => e.events)),
        t = Ap((e => e.bigPicture)),
        n = Ap((e => e.user.isClipOwner)),
        i = Ap((e => e.performDelegateAction)),
        o = vv((e => e.user.loggedIn)),
        r = vv((e => e.user.liked)),
        a = vv((e => e.embed.like)),
        l = vv((e => e.embed.likePopupUrl)),
        s = vv((e => e.user.persistUserAction)),
        c = r ? "Unlike" : "Like",
        d = o ? c : "Like (this opens in a new window)",
        u = r ? Cp.HEART_FILLED : Cp.HEART,
        {
            openLoginPopup: _
        } = nm({
            url: l,
            context: Us.LOGIN_LIKE
        }),
        p = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (xe) {
                    return Promise.reject(xe)
                }
            }
        }((function() {
            if (t.sendEvent(Gl.SELECT_LIKE_HEART_ICON, {}, {
                    [Yl.WEB]: {
                        target: o ? null : "reg modal",
                        target_path: o ? null : l,
                        copy: "like"
                    },
                    [Yl.PRODUCT_ANALYTICS]: {
                        flow: o ? null : "open_embed_reg_modal",
                        element: "icon",
                        copy: "like"
                    }
                }), e.fire(si), !n) return function(e, t) {
                var n = function() {
                    if (!o) return function(e, t) {
                        return function(e, t, n) {
                            if (n) return t ? t(e()) : e();
                            try {
                                var i = Promise.resolve(e());
                                return t ? i.then(t) : i
                            } catch (xe) {
                                return Promise.reject(xe)
                            }
                        }(e, Kp, t)
                    }(_)
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                r ? i(wd, (() => {
                    s($p.LIKES, "DELETE"), e.fire(Ri)
                })) : i(Dd, (() => {
                    s($p.LIKES, "PUT"), e.fire(Pi)
                }))
            }))
        }));
    return {
        label: c,
        ariaLabel: d,
        enabled: a,
        onSelect: p,
        icon: u
    }
};

function zp() {}
const jp = () => {
        const e = vv((e => e.bigPicture)),
            t = vv((e => e.setOverlay)),
            n = vv((e => e.embed.shareUrlWithParams)),
            i = vv((e => e.title.title)),
            r = Me(!1),
            a = vv((e => e.embed.share)),
            l = vv((e => e.embed.embedOnlyShare)),
            s = l ? "Embed" : "Share",
            c = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (xe) {
                        return Promise.reject(xe)
                    }
                }
            }((function() {
                if (r.current) return;
                r.current = !0, e.sendEvent(Gl.SELECT_PLAYER_SHARE, {
                    ab_group: null
                }, {
                    [Yl.WEB]: {
                        target: "share overlay",
                        target_path: null,
                        copy: "share"
                    },
                    [Yl.PRODUCT_ANALYTICS]: {
                        flow: "viewer_home_from_embed_player",
                        element: "icon",
                        copy: "share"
                    }
                });
                const a = o.webShare && (o.iOS || o.android || o.mobileAndroid) && !l;
                return function(o, r) {
                    var l = function() {
                        if (a) return function(e) {
                            if (e && e.then) return e.then(zp)
                        }(function(e, t) {
                            try {
                                var n = e()
                            } catch (xe) {
                                return t(xe)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return function(e, t) {
                                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                            }(navigator.share({
                                title: i,
                                url: n
                            }), (function() {
                                e.sendEvent(Gl.SELECT_PLAYER_SHARE_COMPLETE, {
                                    ab_group: null
                                }, {
                                    [Yl.WEB]: {
                                        target: null,
                                        target_path: n,
                                        copy: null
                                    },
                                    [Yl.PRODUCT_ANALYTICS]: {
                                        flow: "share_video",
                                        element: "icon",
                                        copy: null
                                    }
                                })
                            }))
                        }), (function(e) {
                            "AbortError" !== e.name && t("purpose", ka.SHARE)
                        })));
                        t("purpose", ka.SHARE)
                    }();
                    return l && l.then ? l.then(r) : r()
                }(0, (function() {
                    r.current = !1
                }))
            }));
        return {
            label: s,
            enabled: a,
            onSelect: c,
            icon: Cp.PAPER_PLANE
        }
    },
    Xp = () => {
        const e = vv((e => e.vod.vodButtonVisible)),
            t = vv((e => e.vod.vodLabel));
        return {
            label: t,
            enabled: !(!e || !t),
            onSelect: am(),
            icon: Cp.ONDEMAND
        }
    };

function Zp() {}
const Jp = () => {
    const e = Ap((e => e.events)),
        t = Ap((e => e.bigPicture)),
        n = Ap((e => e.performDelegateAction)),
        i = vv((e => e.embed.privacy)),
        o = vv((e => e.embed.videoUrl)),
        r = vv((e => e.user.watchLater)),
        a = vv((e => e.user.loggedIn)),
        l = vv((e => e.embed.watchLaterPopupUrl)),
        s = vv((e => e.user.persistUserAction)),
        c = vv((e => e.embed.watchLater)),
        d = vv((e => e.user.watchLater)),
        u = d ? "Remove from Watch Later" : "Add to Watch Later",
        _ = a ? u : "Add to Watch Later (this opens in a new window)",
        p = d ? Cp.CLOCK_FILLED : Cp.CLOCK,
        {
            openLoginPopup: m
        } = nm({
            url: l,
            context: Us.LOGIN_WATCH_LATER
        }),
        v = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (xe) {
                    return Promise.reject(xe)
                }
            }
        }((function() {
            if (t.sendEvent(Gl.SELECT_PLAYER_ADD_TO_WATCH_LATER, {}, {
                    [Yl.WEB]: {
                        target: a ? null : "reg modal",
                        target_path: a ? null : l,
                        copy: "add to watch later"
                    },
                    [Yl.PRODUCT_ANALYTICS]: {
                        flow: a ? null : "open_embed_reg_modal",
                        element: "icon",
                        copy: "add to watch later"
                    }
                }), e.fire(ci), o || i === wt) return function(e, t) {
                var n = function() {
                    if (!a) return function(e, t) {
                        return function(e, t, n) {
                            if (n) return t ? t(e()) : e();
                            try {
                                var i = Promise.resolve(e());
                                return t ? i.then(t) : i
                            } catch (xe) {
                                return Promise.reject(xe)
                            }
                        }(e, Zp, t)
                    }(m)
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                r ? n(Md, (() => {
                    s($p.WATCH_LATER, "DELETE"), e.fire(Di)
                })) : n(kd, (() => {
                    s($p.WATCH_LATER, "PUT"), e.fire(Ni)
                }))
            }))
        }));
    return {
        label: u,
        ariaLabel: _,
        enabled: c,
        onSelect: v,
        icon: p
    }
};
let Qp = function(e) {
    return e.VOD = "vod", e.LIKE = "like", e.WATCH_LATER = "watch_later", e.COLLECTIONS = "collections", e.SHARE = "share", e.AI = "ai", e
}({});
const em = () => ({
    [Qp.VOD]: Xp(),
    [Qp.LIKE]: qp(),
    [Qp.WATCH_LATER]: Jp(),
    [Qp.COLLECTIONS]: yp(),
    [Qp.SHARE]: jp(),
    [Qp.AI]: Tp()
});
let tm = null;
const nm = ({
    url: e,
    context: t,
    delegateArg: n
}) => {
    const i = Ap((e => e.events)),
        o = Ap((e => e.embed.onsite)),
        r = Ap((e => e.loadVideoViaIframe)),
        a = Ap((e => e.performDelegateAction));
    return {
        openLoginPopup: () => new Promise((l => {
            switch (t) {
                case Us.PRIVATE_LOCKED:
                    a(Ud, (() => {
                        tm = vr(e, "login", {
                            width: 670,
                            height: 545,
                            scrollbars: "yes",
                            resizable: "yes",
                            toolbar: "no"
                        })
                    }));
                    break;
                case Us.LOGIN_LIKE:
                case Us.LOGIN_WATCH_LATER:
                    a(Ud, (() => {
                        tm = vr(e, "login", {
                            width: 670,
                            height: 545
                        })
                    })), i.fire(Ci, t);
                    break;
                case Us.PURCHASE:
                    a(Vd, (() => {
                        tm = vr(e, "purchase", {
                            width: 790,
                            height: 670
                        })
                    }), n), i.fire(Ci, t)
            }
            window.confirmLoginAction = function(e, t) {
                i.fire(wi, t), i.once(ki, (() => l()))
            }, window.closePopup = function() {
                if (tm) {
                    try {
                        tm.close(), i.fire(yi, t), i.once(ki, (() => l()))
                    } catch (xe) {}
                    tm = null
                }
            }, o || (window.confirmPurchase = function(e, t, n) {
                if (t) return r(e), void l();
                n && i.fire(Fn)
            })
        }))
    }
};

function im(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function om(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}

function rm() {}
const am = e => {
        const t = om((function() {
                return function() {
                    var e = function() {
                        if (!Cs()) return function(e) {
                            if (e && e.then) return e.then(rm)
                        }(function(e, t) {
                            try {
                                var n = e()
                            } catch (xe) {
                                return t(xe)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return im(m(l), (function() {
                                _("paused", !1)
                            }))
                        }), (function(e) {
                            mc.captureException(e), v("purpose", ka.ERROR)
                        })));
                        p(l)
                    }();
                    if (e && e.then) return e.then(rm)
                }()
            })),
            n = Ap((e => e.events)),
            i = Ap((e => e.embed.videoId)),
            o = Ap((e => e.embed.referrer)),
            r = Ap((e => e.embed.playerUrl)),
            a = vv((e => e.vod.productId)),
            l = vv((e => e.vod.featureId)),
            s = vv((e => e.vod.isFeature)),
            c = vv((e => e.vod.purchased)),
            d = vv((e => e.vod.url)),
            u = vv((e => e.vod.isComingSoon)),
            _ = vv((e => e.setPlayback)),
            p = Ap((e => e.loadVideoViaIframe)),
            m = Ap((e => e.loadVideoViaConfig)),
            v = vv((e => e.setOverlay)),
            f = (() => {
                const e = fv().getState,
                    t = Ap((e => e.embed.onsite));
                return function(n) {
                    if (!n) return;
                    const i = n.indexOf("#") > -1,
                        o = e().playback.currentTime,
                        r = e().playback.duration,
                        a = e().playback.paused,
                        l = e().setPlayback;
                    !i && o > 0 && o < r - 30 && !a && (n += `#at=${Math.floor(o)}`), t ? window.location.href = n : (window.open(n), l("paused", !0))
                }
            })(),
            h = e || a;
        let E = `https://${r}/video/${l||i}/purchase/vod`;
        h && (E += `/${h}`), E += `?referrer=${encodeURIComponent(o||"")}`;
        const {
            openLoginPopup: g
        } = nm({
            url: E,
            context: Us.PURCHASE,
            delegateArg: [h]
        });
        return om((function() {
            return n.fire(_i, h), c ? !s && l ? void t() : void _("paused", !1) : u ? void f(d) : (g(), im())
        }))
    },
    lm = (e, t) => {
        const [n, i] = ke(e), o = Me([e]), r = Me(null);
        return we((() => {
            t ? clearTimeout(r.current) : r.current = setTimeout((() => {
                o.current = [e], i(e)
            }), a_)
        }), [e, t]), {
            panel: n,
            setPanel: e => {
                e !== n && (o.current.push(e), i(e))
            },
            goToPreviousPanel: () => {
                if (o.current.length > 1) {
                    o.current.pop();
                    const e = o.current[o.current.length - 1];
                    i(e)
                }
            }
        }
    },
    sm = () => {
        const e = vv((e => e.playback.canSeekForward)),
            t = vv((e => e.playback.maxPlayedTime));
        return n => e || t >= n
    },
    cm = () => {
        const e = Me(!1),
            t = fv(),
            n = vv((e => e.element)),
            i = vv((e => e.setPlayback)),
            o = vv((e => e.progressController)),
            r = Ap((e => e.bigPicture)),
            a = e => n.classList.toggle(ea.SCRUBBING, e);

        function l(e) {
            return o.canSeekNow || o.canSeekToTime(e)
        }

        function s(n) {
            e.current = !l(n), e.current || (i("scrubbing", !0), a(!0), (e => {
                const {
                    chapters: n,
                    embed: i,
                    playback: o
                } = t.getState(), {
                    chapters: a
                } = n;
                if (!a.length || !i.chapters) return;
                const l = ((e, t) => t.reduce(((t, n) => {
                    if (null === t) return n;
                    const i = n.startTime - e,
                        o = t.startTime - e;
                    return Math.abs(i) > Math.abs(o) ? t : n
                }), null))(e, a);
                if (!l) return;
                const s = l.startTime,
                    c = e - s,
                    d = Math.abs(c) <= 5,
                    u = wa(a, o.currentFragment);
                r.sendEvent(Gl.CHAPTER_SEGMENT_CLICK, {
                    seek_event_start_time: e,
                    is_chapter_seek: d,
                    nearest_chapter_start_time: s,
                    chapter_seek_event_delta: c,
                    total_no_chapters_at_seek: a.length,
                    fragment_no_chapters_at_seek: u.length
                })
            })(n), i("currentTime", n))
        }
        return {
            startScrub: s,
            continueScrub: function(n) {
                l(n) && "expanding" !== t.getState().controlBar.expandedState && (e.current ? s(n) : i("currentTime", n))
            },
            endScrub: function() {
                e.current = !1, i("scrubbing", !1), a(!1),
                    function() {
                        const {
                            playback: e,
                            liveEvent: n
                        } = t.getState();
                        n.dvrEnabled && !n.isArchived && r.sendEvent(e.atLiveEdge ? Gl.SEEK_TO_LIVE_EDGE : Gl.SEEK_BEHIND_LIVE_EDGE)
                    }()
            }
        }
    },
    dm = (e, t) => {
        const n = vv((e => e.playback.currentFragment)),
            i = vv((e => e.playback.currentTime)),
            o = vv((e => e.playback.liveEdgeTime)),
            r = vv((e => e.playback.liveTailTime)),
            a = vv((e => e.playback.atLiveEdge)),
            l = vv((e => e.liveEvent.isLiveEvent)),
            s = vv((e => e.liveEvent.dvrEnabled)),
            c = vv((e => e.liveEvent.isPlayable)),
            d = vv((e => e.liveEvent.isArchived)),
            u = vv((e => e.liveEvent.isEnded)),
            _ = vv((e => e.playback.playInitiated)),
            p = u && !_ && 0 === i,
            m = d && 0 !== n.duration;
        return l && (s ? p : !d && !c) ? 0 : l && (s ? !p && !m && a : !d && c) ? 1 : !s || p || m || a ? ((e, t) => {
            const {
                startTime: n,
                endTime: i
            } = t;
            return e < n ? 0 : e > i ? 1 : (e - n) / (i - n)
        })(t, e) : Da(t, r, o)
    },
    um = () => {
        const e = Ap((e => e.bigPicture)),
            t = vv((e => e.captions.language)),
            n = vv((e => e.captions.provenance)),
            i = vv((e => e.captions.fontSize)),
            o = vv((e => e.captions.fontOpacity)),
            a = vv((e => e.captions.fontFamily)),
            l = vv((e => e.captions.color)),
            s = vv((e => e.captions.edgeStyle)),
            c = vv((e => e.captions.bgColor)),
            d = vv((e => e.captions.bgOpacity)),
            u = vv((e => e.captions.windowColor)),
            _ = vv((e => e.captions.windowOpacity)),
            p = Me({
                fontSize: i,
                fontOpacity: o,
                fontColor: l,
                fontFamily: a,
                edgeStyle: s,
                bgColor: c,
                bgOpacity: d,
                windowColor: u,
                windowOpacity: _
            }),
            m = Me({
                language_selected: t || "off",
                has_updated_language: !1,
                prev_selected_language: t || "off",
                language_provenance: n || null,
                prev_language_provenance: n || null,
                has_clicked_customize: !1,
                has_customized: !1,
                has_clicked_font: !1,
                has_changed_font: !1,
                has_clicked_background: !1,
                has_changed_background: !1,
                has_clicked_window: !1,
                has_changed_window: !1,
                has_reset_all: !1,
                final_action_reset_all: !1
            }),
            v = Ve((e => {
                m.current = r(r({}, m.current), e)
            }), []);
        return we((function() {
            const e = i !== p.current.fontSize || l !== p.current.fontColor || a !== p.current.fontFamily || o !== p.current.fontOpacity || s !== p.current.edgeStyle || c !== p.current.bgColor || d !== p.current.bgOpacity || u !== p.current.windowColor || _ !== p.current.windowOpacity;
            v({
                has_customized: e
            })
        }), [i, o, l, a, s, c, d, u, _, v]), {
            sendBPClosedCaptionsClickEvent: () => {
                e.sendEvent(Gl.CLOSED_CAPTIONS_CLICK, m.current), m.current = r(r({}, m.current), {}, {
                    prev_language_provenance: m.current.language_provenance || null,
                    prev_selected_language: m.current.language_selected,
                    has_updated_language: !1,
                    has_clicked_customize: !1,
                    has_customized: !1,
                    has_clicked_font: !1,
                    has_changed_font: !1,
                    has_clicked_background: !1,
                    has_changed_background: !1,
                    has_clicked_window: !1,
                    has_changed_window: !1,
                    has_reset_all: !1,
                    final_action_reset_all: !1
                }), p.current = {
                    fontSize: i,
                    fontOpacity: o,
                    fontColor: l,
                    fontFamily: a,
                    edgeStyle: s,
                    bgColor: c,
                    bgOpacity: d,
                    windowColor: u,
                    windowOpacity: _
                }
            },
            updateCCMetricsPayload: v
        }
    },
    _m = () => vv((e => e.playback.supportsTextTracks && e.captions.textTracks.length > 0 && e.appearance.isDisplayContextBackbone && !e.displayList.ad));

function pm(e) {
    var t, n, i, a, l, s, c, d;
    const {
        config: u,
        events: _,
        parentUrl: p,
        backbone: m
    } = e, {
        embed: v,
        request: f,
        video: h
    } = u, E = !!v.autoplay, g = !(!v.autoplay || null == (t = f.flags) || !t.autohide_controls), b = !!v.settings.playbar, C = !!v.settings.like, T = !!v.settings.share, y = !(null == (n = v.settings.share) || !n.embed_only), L = !!v.settings.collections, A = !!v.settings.watch_later, S = !(null == (i = v.settings) || !i.watch_trailer || v.autoplay || !v.on_site), I = $s(m, null == (a = h.live_event) ? void 0 : a.dvr), O = !!(v.settings.speed && I && q.settingPlaybackRate), P = !!v.keyboard, R = !!v.settings.logo, N = !!v.settings.volume, D = !!v.settings.fullscreen, w = !(null == (l = h.live_event) || null == (l = l.settings) || !l.hide_live_label), k = !(null == (s = h.live_event) || !s.show_viewer_count), M = !!v.settings.custom_logo, V = function(e) {
        var t;
        const {
            config: n
        } = e;
        let i = {
            customLogoUrl: null,
            customLogoImg: null,
            customLogoSticky: !1,
            customLogoWidth: null,
            customLogoHeight: null
        };
        if (null == (t = n.embed.settings.custom_logo) || !t.img) return i;
        const r = n.embed.settings.custom_logo;
        let a = r.img;
        return o.devicePixelRatio >= 2 && (a = a.replace(/(mw|mh)=(\d+)/g, (function(e, t, n) {
            return t + "=" + 2 * parseInt(n, 10)
        }))), i = {
            customLogoUrl: kl(r.url),
            customLogoImg: a,
            customLogoSticky: r.sticky,
            customLogoWidth: r.width,
            customLogoHeight: r.height
        }, i
    }(e), B = !!v.settings.background, U = 0 !== v.settings.controls, x = !!v.transparent, F = mm(e), H = !!v.settings.audio_tracks, W = !!v.settings.airplay, G = !!v.settings.chapters, Y = !!v.settings.chromecast, $ = !!v.settings.cc, K = !!v.settings.quality, z = v.settings.play_button_position, j = !!v.settings.watch_full_video, X = !!v.settings.ask_ai, Z = !!h.spatial && !!v.settings.spatial_compass, J = h.unlisted_hash, Q = !!u.embed.settings.badge, ee = v.tq || "", te = !!v.persistent_logo, ne = f.ai_widget_signature, ie = 0 !== v.unmute_button, oe = !!v.settings.pip, re = !!v.loop, ae = Rl(v.context), le = Boolean("public" === h.embed_permission && v.settings.embed), se = h.share_url, ce = `https://${u.player_url}/video/${h.id}/share`, de = h.embed_code, ue = h.url, _e = h.privacy, pe = 1 === (u.embed.dnt || (null == (c = u.request.flags) ? void 0 : c.dnt)), me = function(e) {
        return Object.keys(e).reduce(((t, n) => r(r({}, t), {}, {
            [n]: ic(e[n])
        })), {})
    }(u.request.flags), ve = u.vimeo_api_url, fe = u.embed.cards, he = Tl(se, sl.SHARE), Ee = !!F || !!X;
    Ee && _.fire(Bo);
    let ge = Tl(`https://${u.player_url}/video/${h.id}/login/like`, sl.LIKE),
        be = Tl(`https://${u.player_url}/video/${h.id}/login/watch-later`, sl.WATCH_LATER);
    const Ce = null == (d = u.request.ab_tests) ? void 0 : d.persistent_logo;
    return Ce && (ge = Bl(ge, Ce), be = Bl(be, Ce)), {
        autoPlay: E,
        autoHideControls: g,
        playbar: b,
        like: C,
        share: T,
        embedOnlyShare: y,
        collections: L,
        watchLater: A,
        isTrailer: S,
        speedChangeEnabled: O,
        keyboard: P,
        showVimeoLogo: R,
        volume: N,
        fullscreen: D,
        hideLiveLabel: w,
        showViewerCount: k,
        customLogo: M,
        customLogoFields: V,
        background: B,
        controls: U,
        transparent: x,
        transcript: F,
        rightContentAreaEnabled: Ee,
        multipleAudioTracks: H,
        airplay: W,
        chapters: G,
        cc: $,
        chromecast: Y,
        quality: K,
        playButtonPosition: z,
        parentUrl: p,
        watchFullVideo: j,
        aiWidget: X,
        compass: Z,
        videoUnlistedHash: J,
        badge: Q,
        transcriptQuery: ee,
        persistentLogo: te,
        aiWidgetSignature: ne,
        unmuteButton: ie,
        pip: oe,
        loop: re,
        svvContext: ae,
        allowEmbedShare: le,
        shareUrl: se,
        embedCode: de,
        videoUrl: ue,
        playerShareUrl: ce,
        privacy: _e,
        doNotTrack: pe,
        flags: me,
        vimeoApiUrl: ve,
        cards: fe,
        shareUrlWithParams: he,
        likePopupUrl: ge,
        watchLaterPopupUrl: be
    }
}

function mm(e) {
    const {
        embed: t,
        video: n
    } = e.config, i = n.live_event, o = !i || i.archive.status === Hl.done || i.dvr;
    return !!t.settings.transcript && o
}

function vm(e, t) {
    var n;
    return null != e && null != (n = e.request) && null != (n = n.ab_tests) && n[t] ? e.request.ab_tests[t] : {}
}
const fm = [{
        id: .5,
        label: "0.5x"
    }, {
        id: .75,
        label: "0.75x"
    }],
    hm = {
        id: 1,
        label: "Normal"
    },
    Em = [{
        id: 1.25,
        label: "1.25x"
    }, {
        id: 1.5,
        label: "1.5x"
    }, {
        id: 2,
        label: "2x"
    }],
    gm = [hm].concat(Em),
    bm = [].concat(fm, [hm], Em),
    Cm = [].concat(fm, [hm]);

function Tm(e) {
    var t;
    const {
        config: n,
        backbone: i,
        progressController: r
    } = e, a = ym(e), l = !!o.airPlay, s = n.embed.quality ? La(i.qualities, n.embed.quality) : i.qualities, c = Lm(i.qualities, n.embed.quality), d = Sm(n);
    return {
        playInitiated: !1,
        targetTimeReached: !1,
        scrubbing: !1,
        scrubbingByFrame: !1,
        paused: !n.embed.autoplay || (null == (t = n.video.live_event) || null == (t = t.archive) ? void 0 : t.status) === Hl.done,
        buffering: !1,
        loadedTime: 0,
        currentTime: i.currentTime,
        maxPlayedTime: r.maxPlayedTime,
        liveEdgeTime: i.liveEdgeTime,
        atLiveEdge: i.atLiveEdge,
        liveTailTime: i.liveTailTime,
        hasFragments: d,
        currentFragment: e.fragmentsHandler.currentFragment,
        duration: n.video.duration,
        qualities: s,
        currentQuality: c,
        playbackRates: a,
        loadedMetadata: i.readyState >= 1,
        loadedData: i.readyState > 1,
        canPlayPictureInPicture: e.canPlayPictureInPicture,
        supportsAirPlay: l,
        supportsTextTracks: q.textTracks,
        supportsStereoscopic: Am(e),
        isAdPlaying: !1,
        supportsSettingVolume: q.settingVolume,
        volume: i.volume,
        muted: i.muted || !!n.embed.muted,
        audioTracks: i.audioTracks,
        isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
        startTime: e.startTime,
        endTime: e.endTime,
        ended: i.ended,
        hasFirstTimeUpdate: !1,
        drm: !!n.request.drm,
        drmCdm: "",
        drmMode: me,
        canSeekForward: e.progressController.canSeekForward,
        canPlayForward: e.progressController.canPlayForward
    }
}

function ym(e) {
    var t;
    const {
        backbone: n,
        config: i
    } = e;
    let o = [];
    if ($s(n, null == (t = i.video.live_event) ? void 0 : t.dvr) && q.settingPlaybackRate && i.embed.settings.speed) {
        const e = function(e, t) {
            return e ? gm : t ? Cm : bm
        }(n.atLiveTail, n.atLiveEdge);
        o = La(e, `${n.playbackRate}`)
    }
    return o
}

function Lm(e, t) {
    var n;
    if (t) {
        var i;
        const n = "string" == typeof t ? t : t.quality || `${t.height}p`,
            o = null == e || null == (i = e.find((e => e.id === n))) ? void 0 : i.label;
        if (o) return o
    }
    return null == e || null == (n = e.find((e => e.active))) ? void 0 : n.label
}

function Am(e) {
    const {
        config: t
    } = e;
    return "disable" !== t.video.privacy && (o.webvr || o.stereoscopic) && t.video.spatial && vm(t, "webvr").group
}

function Sm(e) {
    var t;
    return !c(null == (t = e.embed.interactive) ? void 0 : t.fragments)
}

function Im(e) {
    const {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    } = e;
    return {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    }
}

function Om() {}

function Pm({
    config: e,
    get: t
}) {
    const {
        user: n,
        video: i
    } = e, o = n.id, r = Su(i.owner), a = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (xe) {
                return Promise.reject(xe)
            }
        }
    }((function(n, i, o = null) {
        const r = t().user.vimeoApiClientToken,
            a = t().user.vimeoApiInteractionTokens,
            l = t().embed.videoUnlistedHash;
        return function(e) {
            if (e && e.then) return e.then(Om)
        }(function(s, c) {
            try {
                var d = function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(t().updatePhpTokens(), (function() {
                    const s = n === $p.FOLLOWING ? t().user.ownerId : e.video.id;
                    let c;
                    r && (n === $p.LIKES ? c = a.likes : n === $p.WATCH_LATER ? c = a.watch_later : n === $p.FOLLOWING && (c = a.following));
                    const d = `?auth=${c}`,
                        u = l && n !== $p.FOLLOWING ? `:${l}` : "",
                        _ = `https://${t().embed.vimeoApiUrl}/users/${t().user.id}/${n}/${s}${u}${d}`;
                    return function(e) {
                        return e && e.then ? e.then(Om) : Promise.resolve()
                    }((null != o ? o : C)(_, {
                        jwt: r,
                        method: i
                    }))
                }))
            } catch (xe) {
                return c(xe)
            }
            return d && d.then ? d.then(void 0, c) : d
        }(0, (function(e) {
            mc.captureException(e, {
                extra: {
                    action: n,
                    method: i
                }
            })
        })))
    }));
    return {
        id: o,
        liked: !!n.liked,
        loggedIn: n.logged_in,
        watchLater: !!n.watch_later,
        ownerName: i.owner.name,
        ownerId: i.owner.id,
        following: !!n.following,
        collected: !1,
        shared: !1,
        isPayingOwner: r,
        vimeoBucketedLiveClientToken: n.vimeo_bucketed_live_client_token,
        vimeoApiInteractionTokens: n.vimeo_api_interaction_tokens,
        vimeoApiClientToken: n.vimeo_api_client_token,
        persistUserAction: a
    }
}
const Rm = {
    isVOD: !1,
    vodButtonVisible: !1
};

function Nm(e) {
    const {
        video: t,
        embed: n,
        user: i,
        request: o
    } = e.config;
    let a = r({}, Rm);
    if (t.vod) {
        const e = !0,
            l = t.vod.is_coming_soon,
            s = "ondemand.main" === n.context || "Vimeo\\Controller\\OnDemandController.main" === n.context,
            c = t.vod && i.purchased,
            d = t.vod.countries,
            u = o.country,
            _ = t.vod.purchase_options || [];
        let p = n.settings.vod && ga(d, u);
        p && l && s && (p = !1);
        const [m] = _;
        let v = null;
        m && (v = Dm(o.dynamic_translation_map, "label_string", o.currency, m)), a.isVOD = e, a.vodLabel = v, a.purchased = !!c, a.productId = null == m ? void 0 : m.product_id, a.isExpiring = !(null == m || !m.expiring), a.isPreorder = void 0 !== t.vod.is_preorder ? !!t.vod.is_preorder : !!t.vod.date_available, a.isComingSoon = !!t.vod.is_coming_soon, a.vodButtonVisible = p, a.purchaseOptions = _.map((e => r(r({}, e), {}, {
            formattedLabel: Dm(o.dynamic_translation_map, "outro_string", o.currency, e)
        }))), a.title = t.vod.feature_title, a.url = t.vod.url, a.releaseDate = t.vod.date_available_formatted_datetime || t.vod.date_available, a.isFeature = !!t.vod.is_feature, a.featureId = t.vod.feature_id, a.isAvailableInCountry = !d || 0 === d.length || -1 !== d.indexOf(u)
    }
    return a
}

function Dm(e, t, n, i) {
    var o = i[t];
    return o ? (o = function(e, t, n) {
        let i = n.USD;
        return t in n && (i = n[t]), -1 !== e.indexOf("${price}") ? e.replace("${price}", i) : -1 !== e.indexOf("{PRICE}") ? e.replace("{PRICE}", i) : e
    }(o = function(e, t) {
        return void 0 !== e && void 0 !== e[t] ? e[t] : t
    }(e, o), n, i.prices), i.expires_in_duration_str && (o = o.replace("{TIME}", i.expires_in_duration_str)), i.available_on_formatted && (o = o.replace("{DATE}", i.available_on_formatted)), o) : null
}

function wm({
    config: e
}) {
    const {
        badge: t
    } = e.embed.settings;
    let n = o.devicePixelRatio > 1 ? "img_2x" : "img";
    return o.svg && t.svg && (n = "svg"), {
        link: t.link,
        img: t[n],
        margin: t.margin || !1,
        width: t.width,
        height: t.height,
        name: t.name,
        shadow: !!t.shadow,
        id: t.id
    }
}

function km(e) {
    const t = Cl(It, e.config),
        n = Cs() ? t : window.location.href;
    return {
        chapters: Mm(e),
        chapterShareBaseUrl: n,
        activeCueId: null
    }
}

function Mm(e) {
    const t = Array.from(e.backbone.chapters),
        n = e.config.embed.chapters || [];
    return t.map((e => {
        const t = n.find((t => t.timecode === e.startTime));
        return {
            cueId: e.id,
            startTime: e.startTime,
            endTime: e.endTime,
            text: e.text,
            chapterId: null == t ? void 0 : t.id,
            clipId: null == t ? void 0 : t.clip_id,
            timecode: null == t ? void 0 : t.timecode,
            title: null == t ? void 0 : t.title
        }
    }))
}
let Vm = function(e) {
    return e.RTL = "rtl", e.LTR = "ltr", e
}({});
const Bm = {
    black: "#000",
    red: "#f00",
    yellow: "#ff0",
    green: "#0f0",
    blue: "#00f",
    white: "#fff",
    cyan: "#0ff",
    magenta: "#f0f"
};

function Um(e) {
    var t, n, i;
    const {
        backbone: o,
        config: a
    } = e, l = o.enabledTextTrack, s = o.textTracks, c = !!a.video.live_event, {
        textTracks: d,
        activeTextTrackId: u,
        language: _,
        direction: p,
        provenance: m
    } = xm(s, c, l), v = Fm(e), f = (null == s || null == (t = s.filter((e => e.trackElement))) ? void 0 : t.map((e => e.trackElement))) || [], h = 1 === (null == a || null == (n = a.request) || null == (n = n.flags) ? void 0 : n.ott) || "dev" === (null == a || null == (i = a.request) || null == (i = i.build) ? void 0 : i.js) || "gedevplayer.vimeows.com" === (null == a ? void 0 : a.player_url), E = (s || []).reduce(((e, t) => t.rtl ? e.concat(t.id) : e), []);
    return r({
        textTracks: d,
        textTrackEls: f,
        activeTextTrackId: u,
        requiresCrossOrigin: h,
        activeCues: [],
        language: _,
        direction: p,
        rtlTracks: E,
        provenance: m
    }, v)
}

function xm(e, t, n) {
    const i = "off";
    let o = [],
        r = Wm(n);
    return null != e && e.length && (r || (r = i), o.push({
        label: "Off",
        id: i,
        active: r === i,
        provenance: null,
        language: i
    }), e.forEach((e => {
        let n = "CC" === e.label.substring(e.label.length - 2),
            i = "captions" !== e.kind || n ? "" : " CC",
            a = t ? "Display Captions" : e.label + i;
        const l = Wm(e),
            s = {
                label: a,
                id: l,
                active: r === l,
                language: e.language,
                provenance: e.provenance
            };
        o.push(s)
    }))), {
        textTracks: o,
        activeTextTrackId: r,
        language: null == n ? void 0 : n.language,
        direction: Hm(n),
        provenance: null == n ? void 0 : n.provenance
    }
}

function Fm(e) {
    const {
        store: t
    } = e, n = Object.keys(Jc()), i = {};
    return n.forEach((e => {
        const n = t.get(`ui.captions.${e}`);
        i[e] = n
    })), i
}

function Hm(e) {
    return e ? e.rtl ? Vm.RTL : Vm.LTR : null
}

function Wm(e) {
    return e ? "" !== e.id ? `${e.id}` : `${e.language}.${e.kind}` : ""
}

function Gm(e) {
    var t, n;
    const {
        config: i
    } = e, o = i.video.live_event, a = null == o ? void 0 : o.status, l = !!a, s = null == o || null == (t = o.archive) ? void 0 : t.status, c = $m(a), d = Ym(s), u = c.isStarted && As(o), _ = null == o || null == (n = o.ingest) ? void 0 : n.scheduled_start_time, p = null == o ? void 0 : o.settings.event_schedule;
    return r(r(r({
        isLiveEvent: l,
        isPlayable: u
    }, c), d), {}, {
        dvrEnabled: null == o ? void 0 : o.dvr,
        viewerCount: ar(0),
        liveStatsRequestSucceeded: null,
        isOnline: null,
        liveEventSchedule: _,
        showEventSchedule: p
    })
}

function Ym(e) {
    return {
        isArchived: e === Or
    }
}

function $m(e) {
    return {
        isStarted: e === Wl.started,
        isEnded: e === Wl.ended,
        isPending: e === Wl.pending,
        isActive: e === Wl.active
    }
}

function Km(e, t) {
    let n;
    return function(i) {
        if (void 0 !== n) return n;
        if (t in window) return n = Promise.resolve(window[t]), n;
        const o = function(e) {
            switch (e.player_url) {
                case "player.vimeo.com":
                    return Mr;
                case "master.playerci.vimeows.com":
                case "player-backend-ci.vimeows.com":
                    return "CI";
                case "player2.vimeo.dev":
                    return "DEV";
                default:
                    return
            }
        }(i) === Mr ? "https://embedder-sdk.wirewax.com" : "https://embedder-sdk.wirewax.tv";
        return n = We(`${o}/${e}`, !0).then((() => window[t])), n
    }
}
const qm = Km("latest/wirewax-embedder-sdk@beta.umd.js", "WIREWAX"),
    zm = Km("latest-create/create-interactive-plugin@beta.umd.js", "CREATE_INTERACTIVE_PLUGIN");

function jm() {}

function Xm(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}

function Zm(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Jm(e, t) {
    const n = Xm((function() {
            return function(n, a) {
                try {
                    var m = function() {
                        u("loading");
                        const n = function(e) {
                            const {
                                interactive_id: t,
                                interactive_params: n,
                                create_interactive: i
                            } = e.config.embed;
                            return i.has_create_interactive ? {
                                vidDataURL: i.viddata_url,
                                metricsClient: new uc(e)
                            } : {
                                vidId: t,
                                interactiveParams: n
                            }
                        }(e);
                        return Zm(function(e) {
                            return e.embed.create_interactive.has_create_interactive ? zm(e) : qm(e)
                        }(i), (function(e) {
                            const a = e;
                            if (u("loaded"), !l) return s = a(t, n), Zm(s.ready(), (function() {
                                if (u("initialized"), l) return u("destroyed"), void s.destroy();
                                const e = s.getInteractiveData("hotspots"),
                                    t = s.getInteractiveData("polls");
                                o().setInteractive("hotspots", e), o().setInteractive("polls", t), d = function(e) {
                                    const t = () => o().backbone.play(),
                                        n = () => o().backbone.pause(),
                                        i = e => r.fire(No, e),
                                        a = e => r.fire(Do, e),
                                        l = ({
                                            seekTo: e,
                                            seekType: t
                                        }) => {
                                            r.fire(ko, {
                                                type: t
                                            }), o().progressController.maxPlayedTime = e, o().backbone.currentTime = e
                                        },
                                        s = e => {
                                            e.overlayOnDisplay ? (r.fire(vi, ka.INTERACTIVE), o().setInteractive("active", !0)) : (r.fire(fi, ka.INTERACTIVE), o().setInteractive("active", !1))
                                        };
                                    return e.on("play", t), e.on("pause", n), e.on("hotspotClick", i), e.on("overlayPanelClick", a), e.on("seeked", l), e.on("toggleOverlay", s), () => {
                                        e.off("play", t), e.off("pause", n), e.off("hotspotClick", i), e.off("overlayPanelClick", a), e.off("seeked", l), e.off("toggleOverlay", s)
                                    }
                                }(s), c = function(e) {
                                    function t() {
                                        _(e), e.play()
                                    }

                                    function n() {
                                        p(), e.pause()
                                    }

                                    function i() {
                                        e.setCurrentTime(o().playback.currentTime)
                                    }

                                    function a() {
                                        e.setEnded(!0), e.setCurrentTime(o().backbone.duration)
                                    }

                                    function l() {
                                        u("destroyed"), e.destroy(), s()
                                    }

                                    function s() {
                                        p(), r.off(h.PLAY, t), r.off(h.PAUSE, n), r.off(h.SEEKED, i), r.off(h.ENDED, a)
                                    }
                                    return r.on(h.PLAY, t), r.on(h.PAUSE, n), r.on(h.SEEKED, i), r.on(h.ENDED, a), r.once(Dn, t), l
                                }(s), i.embed.autoplay && (_(s), s.play())
                            }));
                            u("destroyed")
                        }))
                    }()
                } catch (xe) {
                    return a()
                }
                return m && m.then ? m.then(void 0, a) : m
            }(0, (function(e) {
                u("error")
            }))
        })),
        {
            config: i,
            get: o,
            events: r
        } = e;
    let a, l = !1,
        s = null,
        c = null,
        d = null;
    return {
        load: Xm((function() {
            if (!l) return function(e, t) {
                return function(e, t, n) {
                    if (n) return t ? t(e()) : e();
                    try {
                        var i = Promise.resolve(e());
                        return t ? i.then(t) : i
                    } catch (xe) {
                        return Promise.reject(xe)
                    }
                }(e, jm, t)
            }(n)
        })),
        destroy() {
            l = !0, null == d || d(), null == c || c()
        }
    };

    function u(e) {
        o().setInteractive("embedderStateHistory", o().interactive.embedderStateHistory.concat(e))
    }

    function _(e) {
        cancelAnimationFrame(a), a = requestAnimationFrame((() => {
            e.setCurrentTime(o().backbone.currentTime), _(e)
        }))
    }

    function p() {
        cancelAnimationFrame(a)
    }
}

function Qm() {}
const ev = e => {
    const t = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (xe) {
                    return Promise.reject(xe)
                }
            }
        }((function() {
            return function() {
                var t = function() {
                    if (function() {
                            var e, t, n;
                            return !(null != (e = i()) && null != (e = e.interactive) && e.destroyed) && (null == (t = i()) || null == (t = t.interactive) ? void 0 : t.enabled) && !(null == (n = i().interactive) || !n.instanceId) && !o.browser.ie
                        }()) {
                        const t = Jm(e, i().interactive.instanceId);
                        return c("embedderManager", t),
                            function(e, t) {
                                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                            }(t.load(), (function() {
                                c("ready", !0)
                            }))
                    }
                }();
                if (t && t.then) return t.then(Qm)
            }()
        })),
        {
            set: n,
            get: i,
            events: a,
            subscribe: l
        } = e,
        s = tv(e),
        c = (e, t) => {
            n((n => ({
                interactive: r(r({}, n.interactive), {}, {
                    [e]: t
                })
            })))
        },
        d = () => {
            u(), n((() => ({
                interactive: tv(e)
            })))
        };

    function u() {
        var e;
        c("destroyed", !0);
        const t = null == (e = i().interactive) ? void 0 : e.embedderManager;
        t && (t.destroy(), c("embedderManager", null), c("instanceId", null))
    }
    return a.on(Bi, (e => {
        e && d()
    })), a.on(Ki, d), a.on(pn, u), l((e => {
        var t;
        return null == e || null == (t = e.interactive) ? void 0 : t.instanceId
    }), t), {
        interactive: s,
        setInteractive: c
    }
};

function tv({
    config: e
}) {
    const {
        interactive: t
    } = e.embed, n = !(null == t || !t.markers);
    return {
        hotspots: [],
        polls: [],
        enabled: nv(e.embed),
        showMarkers: n,
        instanceId: null,
        active: !1,
        embedderManager: null,
        ready: !1,
        destroyed: !1,
        embedderStateHistory: []
    }
}

function nv(e) {
    return !!e.interactive_id || !!e.create_interactive && (1 === e.create_interactive.has_create_interactive || !0 === e.create_interactive.has_create_interactive)
}
let iv = function(e) {
    return e.EMPTY = "empty", e.QOE_SURVEY = "qoe_survey", e.SKIP_TO_LIVE = "skip_to_live", e.BROADCAST_OVER = "broadcast_over", e.FRAME_CAPTURED = "frame_captured", e
}({});
const ov = [iv.QOE_SURVEY, iv.BROADCAST_OVER, iv.FRAME_CAPTURED, iv.SKIP_TO_LIVE];

function rv(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const av = sv((function(e, t) {
        var n;
        const {
            width: i,
            height: r
        } = t().appearance.boundingClientRect;
        let a = Object.assign({}, e);
        if (null != e && e.img_base && (a.imageUrl = function(e, t, n) {
                const {
                    width: i,
                    height: r
                } = xp(t * o.devicePixelRatio, n * o.devicePixelRatio);
                return Fp({
                    baseUrl: e,
                    width: i,
                    height: r
                })
            }(e.img_base, i, r)), (null == a || null == (n = a.videos) ? void 0 : n.length) > 0) {
            const e = t().user.ownerId,
                n = t().user.ownerName,
                o = Math.round(i / a.videos.length),
                l = Math.round(r / a.videos.length);
            a.videos = a.videos.map(function(e, t, n, i) {
                return o => {
                    const {
                        owner: r
                    } = o, a = Object.assign({}, o);
                    return r.id !== e && (a.byline = "from " + t), o.thumbnail_base && (a.thumbnail = Fp({
                        baseUrl: o.thumbnail_base,
                        width: n,
                        height: i
                    })), a
                }
            }(e, n, o, l))
        }
        return a
    })),
    lv = function(e, t) {
        return rv(av(e, t), (function(e) {
            return null != e && e.url && (e.url = kl(e.url)), null != e && e.url2 && (e.url2 = kl(e.url2)), e
        }))
    };

function sv(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}

function cv() {}
const dv = e => {
    const {
        set: t,
        get: i,
        events: o,
        subscribe: a,
        config: l
    } = e, s = (e, n) => {
        t((t => ({
            outro: r(r({}, t.outro), {}, {
                [e]: n
            })
        })))
    };
    o.on(Bi, ((e, n) => {
        n.embed.outro !== i().outro.purpose && t((e => ({
            outro: r(r({}, e.outro), {}, {
                outroData: null,
                fetchingOutroData: !1,
                purpose: n.embed.outro
            })
        })))
    })), o.on(en, sv((function(e, t) {
        let n = !1;
        s("purpose", e);
        const o = !(null == t || !t.data);
        return function(r, a) {
            var l = function() {
                if (o) return rv(lv(t.data, i), (function(t) {
                    s("outroData", t), p(e, t), n = !0
                }))
            }();
            return l && l.then ? l.then(a) : a(l)
        }(0, (function(t) {
            if (n) return t;
            e === i().outro.purpose && i().outro.outroData || _(e)
        }))
    }))), a((e => {
        var t;
        return null == e || null == (t = e.displayList) ? void 0 : t.outro
    }), d), a((e => {
        var t;
        return null == e || null == (t = e.displayList) ? void 0 : t.overlay
    }), d), a((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.currentTime
    }), u), a((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.ended
    }), u), a((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.ended
    }), (function(e) {
        e && i().outro.purpose === E_.BEGINNING && o.fire(xt)
    }));
    const c = function({
        config: e
    }) {
        let {
            outro: t
        } = e.embed;
        return t !== E_.THREEVIDEOS && t !== E_.PROMOTED || (t = E_.VIDEOS), {
            purpose: t,
            active: !1,
            outroData: null,
            fetchingOutroData: !1
        }
    }(e);

    function d() {
        const e = i().displayList.outro && !i().displayList.overlay;
        e !== i().outro.active && s("active", e)
    }

    function u() {
        const e = i().outro.fetchingOutroData,
            t = i().playback.currentTime >= (i().playback.isSegmentedPlaybackEnabled ? i().playback.endTime - i().playback.startTime : i().playback.duration) - 10,
            n = null !== i().outro.outroData,
            o = i().embed.background;
        e || !t || n || o || _(i().outro.purpose)
    }

    function _(e) {
        const t = sv((function() {
            return function(e) {
                if (e && e.then) return e.then(cv)
            }(function(t, n) {
                try {
                    var r = function(e, t) {
                        try {
                            var n = e()
                        } catch (xe) {
                            return t(xe)
                        }
                        return n && n.then ? n.then(void 0, t) : n
                    }((function() {
                        return s("fetchingOutroData", !0), rv(C(m, {
                            withCredentials: !0,
                            retry: 3
                        }), (function(t) {
                            return rv(t.json(), (function(t) {
                                return rv(lv(t.data, i), (function(t) {
                                    return rv(function(e) {
                                        const t = function(e) {
                                            var t;
                                            let n = [];
                                            return null != e && e.imageUrl && n.push(e.imageUrl), (null == e || null == (t = e.videos) ? void 0 : t.length) > 0 && n.concat(e.videos.map((e => e.thumbnail))), n
                                        }(e);
                                        return Promise.all(t.map((e => Hp(e))))
                                    }(t), (function() {
                                        o.fire(Jo, t), s("outroData", t), p(e, t)
                                    }))
                                }))
                            }))
                        }))
                    }), (function(e) {}))
                } catch (xe) {
                    return n(!0, xe)
                }
                return r && r.then ? r.then(n.bind(null, !1), n.bind(null, !0)) : n(!1, r)
            }(0, (function(e, t) {
                return s("fetchingOutroData", !1),
                    function(e, t) {
                        if (e) throw t;
                        return t
                    }(e, t)
            })))
        }));
        if (i().outro.fetchingOutroData) return;
        const {
            player_url: r
        } = l, {
            id: a,
            unlisted_hash: c
        } = l.video, {
            on_site: d
        } = l.embed, u = `https://${r}/video/${a}/outro`, _ = {
            on_site: d ? 1 : 0,
            type: e
        };
        c && (_.h = c);
        const m = n(u, _);
        t()
    }

    function p(e, t) {
        var n;
        [E_.VIDEOS, E_.THREEVIDEOS].includes(e) && t.following && (null == (n = i()) || n.setUser("following", !!t.following))
    }
    return {
        outro: c,
        setOutro: s
    }
};
let uv = function(e) {
    return e.LikedAdded = "liked-added", e.LikeRemoved = "like-removed", e.WatchLaterAdded = "watch-later-added", e.WatchLaterRemoved = "watch-later-removed", e
}({});

function _v(e) {
    const {
        config: t
    } = e;
    return {
        supportsChromecast: Ul(t),
        isChromecastConnected: !1,
        isChromecastPlaying: !1,
        isChromecastBuffering: !1,
        isChromecastReady: pv(),
        receiverFriendlyName: null
    }
}

function pv() {
    return dd.castState !== Za.NOT_SETUP && dd.castState !== Za.NO_DEVICES_AVAILABLE
}
const {
    Provider: mv,
    useStore: vv,
    useStoreApi: fv
} = Be(), hv = ({
    player: e,
    children: t
}) => {
    const [n, i] = ke(!1);
    return z_((() => i(!0)), e), n ? xe(mv, {
        createStore: () => Fe(Ge(((t, n, {
            subscribe: i
        }) => {
            const a = r(r({
                    set: t,
                    get: n,
                    subscribe: i
                }, e), {}, {
                    get backbone() {
                        return e.backbone
                    },
                    get displayContext() {
                        return e.displayContext
                    },
                    get config() {
                        return e.config
                    },
                    get fragmentsHandler() {
                        return e.fragmentsHandler
                    },
                    get startTime() {
                        return e.startTime
                    },
                    set startTime(t) {
                        e.startTime = t
                    },
                    get endTime() {
                        return e.endTime
                    },
                    set endTime(t) {
                        e.endTime = t
                    },
                    get segmentedPlaybackEnabled() {
                        return e.segmentedPlaybackEnabled
                    },
                    get canPlayPictureInPicture() {
                        return e.canPlayPictureInPicture
                    },
                    get parentUrl() {
                        return e.parentUrl
                    },
                    set parentUrl(t) {
                        e.parentUrl = t
                    },
                    get progressController() {
                        return e.progressController
                    },
                    get bigPicture() {
                        return e.bigPicture
                    }
                }),
                {
                    config: s,
                    backbone: c,
                    element: d,
                    expose: u,
                    verifyConfig: _,
                    events: p,
                    updatePhpTokens: m,
                    progressController: v,
                    bigPicture: f,
                    debugCollector: E
                } = e,
                b = r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r(r({}, (e => {
                    const {
                        set: t,
                        events: n
                    } = e, i = e_(e);
                    return n.on(Ai, (() => {
                        t((() => ({
                            debug: e_(e)
                        })))
                    })), {
                        debug: i
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o
                    } = e, a = s_(e), l = (e, n) => {
                        t((t => ({
                            controlBar: r(r({}, t.controlBar), {}, {
                                [e]: n
                            })
                        })))
                    };

                    function s() {
                        const e = nc(tc.FULL_CONTROLS, n().appearance.playerSizeMode, n().appearance.playerBreakpoint);
                        l("showAllControls", e)
                    }
                    return i.on(Bi, (() => {
                        t((() => ({
                            controlBar: s_(e)
                        })))
                    })), i.on(on, (e => {
                        l("overrideBehavior", e)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                    }), s), o((e => {
                        var t;
                        return null == e || null == (t = e.appearance) ? void 0 : t.playerBreakpoint
                    }), s), o((e => {
                        var t;
                        return null == e || null == (t = e.controlBar) ? void 0 : t.expandedState
                    }), (e => l("isExpanded", "expanded" === e || "expanding" === e))), {
                        controlBar: a,
                        setControlBar: l
                    }
                })(a)), $_(a)), (e => {
                    const {
                        store: t,
                        set: n,
                        events: i,
                        element: o,
                        backbone: a,
                        config: l
                    } = e, s = K_(e), c = (e, t) => n((n => ({
                        appearance: r(r({}, n.appearance), {}, {
                            [e]: t
                        })
                    })));
                    return t.watch("ui.player.breakpoint", (e => c("playerBreakpoint", e))), t.watch("ui.player.mode", (e => c("playerSizeMode", e))), t.watch("ui.app.breakpoint", (e => c("appBreakpoint", e))), t.watch("ui.app.mode", (e => c("appSizeMode", e))), t.watch("ui.controlbar.isMenuFullWidth", (e => c("isMenuBlockingUI", e))), t.watch("ui.player.isVerticalVideo", (e => {
                        c("isVerticalVideo", e)
                    })), t.watch("ui.controlbar.isMenuVerticalVideoMode", (e => c("isMenuVerticalVideoMode", e))), t.watch("ui.player.width", (() => {
                        c("boundingClientRect", ur(o))
                    })), t.watch("ui.controlbar.doMenuItemsWrap", (e => {
                        c("shouldMenuItemsWrap", e)
                    })), t.watch("ui.player.width", (e => {
                        const {
                            videoHeight: i,
                            videoWidth: o
                        } = q_(e, t.get("ui.player.height"), l.video.width, l.video.height);
                        n((t => ({
                            appearance: r(r({}, t.appearance), {}, {
                                videoHeight: i,
                                videoWidth: o,
                                playerWidth: e
                            })
                        })))
                    })), t.watch("ui.player.height", (e => {
                        const {
                            videoHeight: i,
                            videoWidth: o
                        } = q_(t.get("ui.player.width"), e, l.video.width, l.video.height);
                        n((t => ({
                            appearance: r(r({}, t.appearance), {}, {
                                videoHeight: i,
                                videoWidth: o,
                                playerHeight: e
                            })
                        })))
                    })), t.watch("ui.container.height", (e => {
                        c("containerHeight", e)
                    })), t.watch("ui.container.width", (e => {
                        c("containerWidth", e)
                    })), i.on(oi, (() => c("fullscreen", !0))), i.on(li, (e => {
                        n((t => {
                            const n = {
                                fullscreen: !1,
                                forceExitedFullscreen: t.appearance.forceExitedFullscreen
                            };
                            return e || (n.forceExitedFullscreen = !0), {
                                appearance: r(r({}, t.appearance), n)
                            }
                        }))
                    })), i.on(h.WEBKIT_END_FULLSCREEN, (() => {
                        c("fullscreen", !1)
                    })), i.on(Eo, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                showAirPlayPicker: !0
                            })
                        })))
                    })), i.on(go, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                showAirPlayPicker: !1
                            })
                        })))
                    })), i.on(xt, (() => {
                        n((() => ({
                            appearance: K_(e)
                        })))
                    })), i.on(Eo, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                externalDisplay: !0
                            })
                        })))
                    })), i.on(go, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                externalDisplay: !1
                            })
                        })))
                    })), i.on(h.ENTER_PICTURE_IN_PICTURE, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                pictureInPictureActive: !0
                            })
                        })))
                    })), i.on(h.LEAVE_PICTURE_IN_PICTURE, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                pictureInPictureActive: !1
                            })
                        })))
                    })), i.on(K.WEBVR_ENTER, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                stereoscopicEnabled: !0
                            })
                        })))
                    })), i.on(K.WEBVR_EXIT, (() => {
                        n((e => ({
                            appearance: r(r({}, e.appearance), {}, {
                                stereoscopicEnabled: !1
                            })
                        })))
                    })), i.on(h.LOADED_DATA, (() => {
                        n((t => ({
                            appearance: r(r({}, t.appearance), {}, {
                                isStartTimeThumbLoading: Sc(e)
                            })
                        })))
                    })), {
                        appearance: s,
                        setAppearance: (e, t) => {
                            "fullscreen" !== e ? "pictureInPictureActive" !== e ? "showAirPlayPicker" !== e ? ("stereoscopicEnabled" === e && i.fire(ti), "transcriptNavActive" === e && "boolean" == typeof t && i.fire(xo, t), c(e, t)) : i.fire(bo) : i.fire(a.pictureInPictureActive ? an : rn) : i.fire(Un)
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i,
                        get: o
                    } = e, a = pm(e);
                    return n.on(Bi, (() => {
                        t((() => ({
                            embed: pm(e)
                        })))
                    })), n.on(Yo, (function(e) {
                        e && t((t => ({
                            embed: r(r({}, t.embed), {}, {
                                parentUrl: e
                            })
                        })))
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isArchived
                    }), (i => {
                        var a;
                        const l = mm(e),
                            s = null == (a = o()) || null == (a = a.embed) ? void 0 : a.transcript;
                        i && l && !s && (n.fire(Bo), t((e => ({
                            embed: r(r({}, e.embed), {}, {
                                rightContentAreaEnabled: !0,
                                transcript: !0
                            })
                        }))))
                    })), {
                        embed: a
                    }
                })(a)), o_(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = () => {
                        clearTimeout(l_), l_ = setTimeout((() => {
                            n((e => ({
                                displayList: r(r({}, e.displayList), {}, {
                                    nudgeNotification: !1
                                })
                            }))), t.fire(Vn)
                        }), 1050)
                    }, o = e => {
                        i(), n((t => ({
                            displayList: r(r({}, t.displayList), {}, {
                                nudgeNotification: !0
                            }),
                            nudge: e
                        })))
                    };
                    return t.on(Mn, (({
                        direction: e,
                        time: t
                    }) => {
                        o({
                            direction: e,
                            time: t
                        })
                    })), {
                        nudge: {
                            direction: null,
                            time: null
                        },
                        setNudge: (e, t) => {
                            i(), n((n => ({
                                nudge: r(r({}, n.nudge), {}, {
                                    [e]: t
                                })
                            })))
                        },
                        setNudgeProperties: o,
                        startNudgeHideTimeout: i
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n,
                        get: i,
                        backbone: o,
                        subscribe: a,
                        progressController: l,
                        bigPicture: s
                    } = e, c = (e, t) => {
                        n((n => ({
                            playback: r(r({}, n.playback), {}, {
                                [e]: t
                            })
                        })))
                    }, d = Tm(e);
                    return t.on(xt, (() => {
                        n((() => ({
                            playback: Tm(e)
                        })))
                    })), t.on(Bi, (t => {
                        t && n((() => ({
                            playback: Tm(e)
                        })))
                    })), t.on(y, (() => c("playInitiated", !0))), t.once(Dn, (() => c("hasFirstTimeUpdate", !0))), t.on(h.PLAY, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                scrubbing: !1,
                                scrubbingByFrame: !1,
                                paused: !1,
                                playInitiated: !0,
                                ended: !1
                            })
                        })))
                    })), t.on(Fn, (() => c("paused", !1))), t.on([h.PAUSE, Ln, xn], (() => c("paused", !0))), t.on(Nn, (() => c("targetTimeReached", !0))), t.on(g.BUFFER_STARTED, (() => c("buffering", !0))), t.on(g.BUFFER_ENDED, (() => c("buffering", !1))), t.on(Kn, (e => {
                        c("scrubbing", !0), "keyboard" === (null == e ? void 0 : e.seekType) && null != e && e.isFrameByFrame && c("scrubbingByFrame", !0)
                    })), t.on(qn, (() => {
                        c("scrubbing", !1), c("scrubbingByFrame", !1)
                    })), t.on(cn, (e => {
                        n((t => {
                            const n = t.liveEvent.dvrEnabled ? t.playback.liveTailTime : 0,
                                i = t.liveEvent.dvrEnabled ? t.playback.liveEdgeTime : t.playback.duration,
                                o = mr(e, n, i);
                            return {
                                playback: r(r({}, t.playback), {}, {
                                    currentTime: o
                                })
                            }
                        }))
                    })), t.on(h.TIME_UPDATE, (({
                        currentTime: t,
                        timeProgress: i,
                        liveEdgeTime: o,
                        atLiveEdge: a,
                        liveTailTime: s,
                        atLiveTail: c
                    }) => {
                        n((n => {
                            const d = Math.min(gr(100 * i), 100);
                            t = t || n.playback.duration * d || 0;
                            const u = ym(e),
                                _ = l.maxPlayedTime,
                                p = l.canSeekForward,
                                m = l.canPlayForward;
                            return {
                                playback: r(r({}, n.playback), {}, {
                                    currentTime: t,
                                    liveEdgeTime: o,
                                    atLiveEdge: a,
                                    liveTailTime: s,
                                    atLiveTail: c,
                                    playbackRates: u,
                                    maxPlayedTime: _,
                                    canSeekForward: p,
                                    canPlayForward: m
                                })
                            }
                        }))
                    })), t.on(In, (() => {
                        const e = i().liveEvent.dvrEnabled && !i().playback.atLiveEdge,
                            t = i().liveEvent.dvrEnabled && i().playback.atLiveEdge;
                        e || n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                ended: !0,
                                currentTime: t ? 0 : e.playback.currentFragment.duration
                            })
                        })))
                    })), t.on(h.PROGRESS, (({
                        loaded: e
                    }) => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                loadedTime: e
                            })
                        })))
                    })), t.on([Bn, h.DURATION_CHANGE], (() => {
                        const t = i().playback.currentFragment;
                        if (!He(t, e.fragmentsHandler.currentFragment)) {
                            const t = Sm(e.config);
                            n((n => ({
                                playback: r(r({}, n.playback), {}, {
                                    hasFragments: t,
                                    currentFragment: e.fragmentsHandler.currentFragment,
                                    maxPlayedTime: l.maxPlayedTime
                                })
                            })))
                        }
                    })), t.on(h.LOADED_METADATA, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                loadedMetadata: !0
                            })
                        })))
                    })), t.on(h.LOADED_DATA, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                loadedData: !0
                            })
                        })))
                    })), t.on([g.STREAM_CHANGE, x], (e => {
                        const t = {
                            currentQuality: Lm(o.qualities, e)
                        };
                        i().liveEvent.isLiveEvent && Object.assign(t, {
                            qualities: o.qualities
                        }), n((e => ({
                            playback: r(r({}, e.playback), t)
                        })))
                    })), t.on(Rn, (e => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                qualities: o.qualities,
                                currentQuality: Lm(o.qualities, e)
                            })
                        })))
                    })), t.on(g.AUDIO_TRACK_CHANGED, (() => c("audioTracks", o.audioTracks))), t.once(k, (() => c("canPlayPictureInPicture", e.canPlayPictureInPicture))), t.on(fo, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                supportsAirPlay: !0
                            })
                        })))
                    })), t.on(ho, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                supportsAirPlay: !1
                            })
                        })))
                    })), t.on(wn, (() => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                playbackRates: ym(e)
                            })
                        })))
                    })), t.on(On, (e => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                volume: e,
                                muted: o.muted
                            })
                        })))
                    })), t.on(Pn, (e => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                muted: e
                            })
                        })))
                    })), t.on(g.AVAILABLE_STREAMS_CHANGED, (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                qualities: o.qualities,
                                currentQuality: Lm(o.qualities)
                            })
                        })))
                    })), t.on([yo, Ao, To, Lo, Oo, Po], (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                isAdPlaying: !1
                            })
                        })))
                    })), t.on([Io, So], (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                isAdPlaying: !0
                            })
                        })))
                    })), t.on([Ko, qo], (() => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
                                startTime: e.startTime,
                                endTime: e.endTime
                            })
                        })))
                    })), t.on(Y.LATENCY_UPDATED, (function() {
                        n((e => e.playback.paused || e.playback.buffering ? e.playback.scrubbing ? n_ : {
                            playback: r(r({}, e.playback), Im(o))
                        } : n_))
                    })), t.on(g.SCANNER_CHANGE, (function() {
                        n((e => ({
                            playback: r(r({}, e.playback), Im(o))
                        })))
                    })), a((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                    }), (e => !e && i().liveEvent.dvrEnabled && !i().liveEvent.isArchived && s.sendEvent(Gl.DVR_MODE_ENTERED))), a((e => {
                        var t;
                        return null == e || null == (t = e.embed) ? void 0 : t.pip
                    }), (() => {
                        n((t => ({
                            playback: r(r({}, t.playback), {}, {
                                canPlayPictureInPicture: e.canPlayPictureInPicture
                            })
                        })))
                    })), t.on(g.DRM_CDM_CHANGE, (e => {
                        const t = i().playback.drmCdm;
                        He(t, e) || c("drmCdm", e)
                    })), t.on(g.DRM_KEY_SWITCH, (e => {
                        c("drmMode", e)
                    })), t.on([nr, ir], (() => {
                        n((e => ({
                            playback: r(r({}, e.playback), {}, {
                                canSeekForward: l.canSeekForward,
                                canPlayForward: l.canPlayForward
                            })
                        })))
                    })), {
                        playback: d,
                        clearSegment: () => {
                            e.startTime = null, e.endTime = null
                        },
                        setPlayback: (e, a, l) => {
                            if ("paused" !== e) {
                                if ("qualities" === e && "string" == typeof a) return t.fire(Ht, a), void n((e => {
                                    const t = La(e.playback.qualities, a);
                                    return {
                                        playback: r(r({}, e.playback), {}, {
                                            qualities: t,
                                            currentQuality: Lm(t)
                                        })
                                    }
                                }));
                                if ("playbackRates" === e && "string" == typeof a) return t.fire(_n, a), void n((e => {
                                    const t = La(e.playback.playbackRates, a);
                                    return {
                                        playback: r(r({}, e.playback), {}, {
                                            playbackRates: t
                                        })
                                    }
                                }));
                                if ("scrubbing" !== e)
                                    if ("currentTime" !== e || "number" != typeof a)
                                        if ("volume" !== e || "number" != typeof a)
                                            if ("muted" !== e || "boolean" != typeof a)
                                                if ("audioTracks" !== e) c(e, a);
                                                else {
                                                    const e = o.audioTracks.find((e => e.id === `${a}`));
                                                    e && (o.enableAudioTrack(e), t.fire(mn, e))
                                                }
                                else t.fire(Bt, a);
                                else t.fire(Vt, a);
                                else switch (null == l ? void 0 : l.seekType) {
                                    case "interactive-marker":
                                        t.fire(Mt, a), t.fire(Fn), t.fire(wo, {
                                            type: "interactive-marker",
                                            action: null == l ? void 0 : l.action
                                        });
                                        break;
                                    case "nudge":
                                        t.fire(kn), t.fire(Mt, a), i().playback.playInitiated || t.fire(Fn);
                                        break;
                                    default:
                                        t.fire(Mt, a)
                                } else a ? t.fire(Kn) : t.fire(qn)
                            } else !1 === a ? t.fire(Fn) : t.fire(xn)
                        }
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = (e, t) => {
                        n((n => ({
                            user: r(r({}, n.user), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return t.on(Pi, (() => i("liked", !0))), t.on(Ri, (() => i("liked", !1))), t.on(Ni, (() => i("watchLater", !0))), t.on(Di, (() => i("watchLater", !1))), t.on(Bi, ((e, t) => {
                        n((() => ({
                            user: Pm({
                                config: t
                            })
                        })))
                    })), t.on(ki, (() => {
                        n((() => ({
                            user: Pm(e)
                        })))
                    })), t.on(io, (() => i("following", !1))), t.on(no, (() => i("following", !0))), {
                        user: Pm(e),
                        setUser: (n, o) => {
                            if ("collected" !== n)
                                if ("shared" !== n) i(n, o);
                                else {
                                    const {
                                        share: n
                                    } = e.config.embed.settings, i = null != n && n.embed_only ? ui : di;
                                    t.fire(i)
                                }
                            else t.fire(pi)
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o
                    } = e, a = Nm(e);

                    function l(e) {
                        e && n().vod.vodButtonVisible ? t((e => ({
                            vod: r(r({}, e.vod), {}, {
                                vodButtonVisible: !1
                            })
                        }))) : e || !n().vod.isVOD || n().vod.vodButtonVisible || t((e => ({
                            vod: r(r({}, e.vod), {}, {
                                vodButtonVisible: !0
                            })
                        })))
                    }
                    return o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                    }), (e => {
                        l(e)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.ad
                    }), (e => l(e))), i.on(Bi, ((n, i) => {
                        t((() => ({
                            vod: Nm(r(r({}, e), {}, {
                                config: i
                            }))
                        })))
                    })), {
                        vod: a,
                        setVod: (e, n) => {
                            t((t => ({
                                vod: r(r({}, t.vod), {}, {
                                    [e]: n
                                })
                            })))
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i
                    } = e, a = b_(e);
                    let l = null;
                    const s = (e, i) => {
                        if ("purpose" !== e) t((t => ({
                            overlay: r(r({}, t.overlay), {}, {
                                [e]: i
                            })
                        })));
                        else {
                            const e = n().overlay.purpose === i ? ka.EMPTY : i;
                            t((t => ({
                                overlay: r(r({}, t.overlay), {}, {
                                    purpose: e
                                })
                            })))
                        }
                    };
                    return i.on(vi, ((e, t) => {
                        t || (n().overlay.purpose === e ? i.fire(fi) : s("purpose", e))
                    })), i.on(fi, (() => {
                        l = null, s("purpose", ka.EMPTY)
                    })), i.on(Ut, ((e, t, o) => {
                        o || (e === ka.SPATIAL_REDIRECT && s("spatialRedirectContext", t), n().displayList.accessGate || i.fire(vi, e))
                    })), i.on(Cn, ((e, t) => {
                        g_(l, e, t) && (l = e, s("purpose", ka.ERROR))
                    })), i.on(Yi, (() => {
                        l === ua.NETWORK && (l = null, s("purpose", ka.EMPTY))
                    })), o.stereoscopic && i.on(Li, (() => {
                        s("spatialRedirectContext", "headset"), s("purpose", ka.SPATIAL_REDIRECT)
                    })), {
                        overlay: a,
                        setOverlay: (e, t) => {
                            ("purpose" !== e || C_(t)) && ("purpose" === e && t === ka.EMPTY || t === ka.INTERACTIVE ? i.fire(fi) : ("purpose" === e && C_(t) && (i.fire(Ut, t, {}, !0), i.fire(vi, t, !0)), s(e, t)))
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        events: n
                    } = e, i = r_(e);
                    return n.on(Bi, ((n, i) => {
                        t((() => ({
                            title: r_(r(r({}, e), {}, {
                                config: i
                            }))
                        })))
                    })), n.on([Ko, qo], (() => {
                        var n;
                        const {
                            segmentedPlaybackEnabled: i
                        } = e;
                        let o = Cl(Lt, e.config);
                        i && (o = Dl(o, e.startTime, e.endTime));
                        const a = null == (n = e.config.request.ab_tests) ? void 0 : n.persistent_logo;
                        a && (o = Bl(o, a)), t((e => ({
                            title: r(r({}, e.title), {}, {
                                titleLinkUrl: o
                            })
                        })))
                    })), {
                        title: i
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = wm(e);
                    return t.on(Bi, ((e, t) => {
                        n((() => ({
                            badge: wm({
                                config: t
                            })
                        })))
                    })), {
                        badge: i,
                        setBadge: (e, i) => {
                            "id" !== e || "number" != typeof i ? ((e, t) => {
                                n((n => ({
                                    badge: r(r({}, n.badge), {}, {
                                        [e]: t
                                    })
                                })))
                            })(e, i) : t.fire(ii, i)
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        events: n
                    } = e, i = (e, n) => {
                        t((t => ({
                            chapters: r(r({}, t.chapters), {}, {
                                [e]: n
                            })
                        })))
                    }, o = km(e), a = ({
                        backbone: e
                    }) => {
                        if (e.chaptersTrack) {
                            const t = () => n.fire($n, null == e ? void 0 : e.currentChapterID);
                            e.chaptersTrack.addEventListener("cuechange", t)
                        }
                    };
                    return a(e), n.on($n, (e => {
                        t((t => ({
                            chapters: r(r({}, t.chapters), {}, {
                                activeCueId: e
                            })
                        })))
                    })), n.on(g.CHAPTER_CUES_UPDATED, (() => i("chapters", Mm(e)))), n.on(Bi, (() => {
                        t((() => ({
                            chapters: km(e)
                        }))), a(e)
                    })), {
                        chapters: o,
                        setChapters: i
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        backbone: o
                    } = e, a = Jc(), s = e => {
                        var i;
                        const a = xm(o.textTracks, null == (i = n()) || null == (i = i.liveEvent) ? void 0 : i.isLiveEvent, e);
                        t((e => ({
                            captions: r(r({}, e.captions), a)
                        })))
                    }, c = Um(e);
                    return i.on(Jn, (e => {
                        s(e)
                    })), i.on(g.TEXT_TRACKS_AVAILABLE, (() => {
                        s()
                    })), i.on(Bi, (() => {
                        t((() => ({
                            captions: Um(e)
                        })))
                    })), i.on(w, ((e, n = []) => {
                        o.enabledTextTrack && "disabled" !== (null == e ? void 0 : e.mode) && t((e => ({
                            captions: r(r({}, e.captions), {}, {
                                activeCues: l(n)
                            })
                        })))
                    })), i.on(Xt, (() => {
                        t((e => ({
                            captions: r(r({}, e.captions), {}, {
                                activeCues: []
                            })
                        })))
                    })), {
                        captions: c,
                        setCaptions: (n, o) => {
                            if ("activeTextTrackId" === n && "string" == typeof o) return "off" !== o && o ? void i.fire(jt, o) : void i.fire(Xt);
                            if (ol.hasOwnProperty(n) && "string" == typeof o) {
                                const l = a[n];
                                return i.fire(Zt, l, o), void t((t => ({
                                    captions: r(r({}, t.captions), Fm(e))
                                })))
                            }((e, n) => {
                                t((t => ({
                                    captions: r(r({}, t.captions), {}, {
                                        [e]: n
                                    })
                                })))
                            })(n, o)
                        },
                        resetCaptionsStyles: () => {
                            i.fire(Jt), t((t => ({
                                captions: r(r({}, t.captions), Fm(e))
                            })))
                        }
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n,
                        subscribe: i
                    } = e, a = Gm(e), l = (e, t) => {
                        n((n => ({
                            liveEvent: r(r({}, n.liveEvent), {}, {
                                [e]: t
                            })
                        })))
                    };
                    t.on(Bi, (() => {
                        n((() => ({
                            liveEvent: Gm(e)
                        })))
                    }));
                    const {
                        EVENT_ACTIVE: s,
                        EVENT_PENDING: c,
                        EVENT_STARTED: d,
                        EVENT_ENDED: u
                    } = Y, _ = {
                        [s]: Wl.active,
                        [c]: Wl.pending,
                        [d]: Wl.started,
                        [u]: Wl.ended
                    };
                    Object.getOwnPropertySymbols(_).forEach((e => t.on(e, (() => n((t => ({
                        liveEvent: r(r({}, t.liveEvent), $m(_[e]))
                    })))))));
                    const {
                        ARCHIVE_STARTED: p,
                        ARCHIVE_DONE: m,
                        ARCHIVE_ERROR: v
                    } = Y, f = {
                        [p]: Hl.started,
                        [m]: Hl.done,
                        [v]: Hl.error
                    };
                    return Object.getOwnPropertySymbols(f).forEach((e => t.on(e, (() => n((t => ({
                        liveEvent: r(r({}, t.liveEvent), Ym(f[e]))
                    }))))))), t.on(Y.LIVE_STATS_SUCCESS, (({
                        viewerCount: e
                    }) => {
                        n((t => ({
                            liveEvent: r(r({}, t.liveEvent), {}, {
                                viewerCount: ar(e),
                                liveStatsRequestSucceeded: !0
                            })
                        })))
                    })), t.on(Y.LIVE_STATS_FAILURE, (() => {
                        l("liveStatsRequestSucceeded", !1)
                    })), t.on(Y.STREAM_ONLINE, (() => {
                        l("isOnline", !0)
                    })), t.on(Y.STREAM_OFFLINE, (() => {
                        l("isOnline", !1), o.iOS && ae.element && (t.fire(ai), ae.exit())
                    })), t.on($o, (() => {
                        l("isPlayable", !0)
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isStarted
                    }), (e => !e && l("isPlayable", !1))), {
                        liveEvent: a,
                        setLiveEvent: l
                    }
                })(a)), ev(a)), (e => {
                    const {
                        set: t,
                        events: n,
                        config: i
                    } = e;
                    return n.on(Bi, (() => {
                        t((() => ({
                            cuePoints: {
                                cuePoints: []
                            }
                        })))
                    })), i.embed.on_site && (n.on(Qn, (e => {
                        t((t => {
                            const n = t.cuePoints.cuePoints.concat(e);
                            return {
                                cuePoints: r(r({}, t.cuePoints), {}, {
                                    cuePoints: n
                                })
                            }
                        }))
                    })), n.on(ei, (e => {
                        t((t => {
                            const n = t.cuePoints.cuePoints.filter((t => t.id !== e.id));
                            return {
                                cuePoints: r(r({}, t.cuePoints), {}, {
                                    cuePoints: n
                                })
                            }
                        }))
                    }))), {
                        cuePoints: {
                            cuePoints: []
                        },
                        setCuePoints: (e, n) => {
                            t((t => ({
                                cuePoints: r(r({}, t.cuePoints), {}, {
                                    [e]: n
                                })
                            })))
                        }
                    }
                })(a)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o,
                        element: a,
                        config: l
                    } = e, s = {
                        purpose: iv.EMPTY
                    };
                    let c = function(e) {
                        const {
                            request: t,
                            video: n,
                            embed: i
                        } = e.config, {
                            qoe_survey_forced: o,
                            ott: r
                        } = t.flags, {
                            qoe_survey_vote: a
                        } = t.cookie, {
                            duration: l,
                            live_event: s
                        } = n;
                        return !(!o && (l < 60 && !s || !Va(i) || r || Ba(7776e6) < a / 1e3 || !(Math.random() < .005)))
                    }(e);
                    const d = (e, i) => {
                            Va(l.embed) && gs({
                                newPriority: i,
                                currentPriority: n().toast.purpose,
                                priorityOrder: ov
                            }) && t((t => ({
                                toast: r(r({}, t.toast), {}, {
                                    [e]: i
                                })
                            })))
                        },
                        u = () => {
                            c && gs({
                                newPriority: iv.QOE_SURVEY,
                                currentPriority: n().toast.purpose,
                                priorityOrder: ov
                            }) && (e => {
                                if (!e) return !1;
                                const t = e.getBoundingClientRect(),
                                    n = t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth),
                                    i = "visible" === document.visibilityState;
                                return n && i
                            })(a) && (d("purpose", iv.QOE_SURVEY), i.fire(Go), c = !1)
                        };

                    function _() {
                        t((e => {
                            const {
                                liveEvent: t,
                                toast: n,
                                playback: i,
                                displayList: o
                            } = e;
                            return t.dvrEnabled && n.purpose !== iv.SKIP_TO_LIVE ? i.atLiveEdge ? n_ : t.isPlayable ? i.paused && !i.scrubbing ? n_ : o.controlBar ? {
                                toast: {
                                    purpose: iv.SKIP_TO_LIVE
                                }
                            } : n_ : n_ : n_
                        }))
                    }

                    function p() {
                        t((e => e.toast.purpose !== iv.SKIP_TO_LIVE ? n_ : {
                            toast: {
                                purpose: iv.EMPTY
                            }
                        }))
                    }
                    return o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                    }), (e => {
                        var t, i;
                        const o = function(e, t) {
                            return t ? 6e5 : Math.round(.4 * e * 1e3)
                        }(null == (t = n()) || null == (t = t.playback) ? void 0 : t.duration, null == (i = n()) || null == (i = i.liveEvent) ? void 0 : i.isLiveEvent);
                        e && o && setTimeout(u, o)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                    }), (e => {
                        e ? p() : _()
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                    }), (e => e && void t((e => e.liveEvent.dvrEnabled && e.liveEvent.isEnded ? {
                        toast: {
                            purpose: iv.BROADCAST_OVER
                        }
                    } : n_)))), o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.paused
                    }), (e => {
                        n().liveEvent.isEnded || n().playback.scrubbing || (e ? p() : _())
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                    }), (e => e ? _() : p())), i.on(tr, (() => {
                        d("purpose", iv.FRAME_CAPTURED)
                    })), {
                        toast: s,
                        setToast: d,
                        closeToast: () => {
                            d("purpose", iv.EMPTY)
                        }
                    }
                })(a)), (e => {
                    const {
                        get: t,
                        set: n,
                        subscribe: i,
                        config: a,
                        backbone: l
                    } = e, s = u_(e), c = (e, i) => {
                        Va(a.embed) && gs({
                            newPriority: i,
                            currentPriority: t().topCenterActionItem.purpose,
                            priorityOrder: d_
                        }) && n((t => ({
                            topCenterActionItem: r(r({}, t.topCenterActionItem), {}, {
                                [e]: i
                            })
                        })))
                    }, d = e => {
                        e && t().topCenterActionItem.purpose !== e || c("purpose", c_.EMPTY)
                    }, u = () => d(c_.UNMUTE), _ = () => c("purpose", c_.WATCH_FULL_VIDEO), p = () => d(c_.WATCH_FULL_VIDEO);
                    return i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.loadedData
                    }), (e => {
                        if (!e) return;
                        const n = t(),
                            i = n.embed.autoPlay || n.liveEvent.isLiveEvent,
                            o = 0 === n.playback.volume || n.playback.muted,
                            r = Va(n.embed),
                            a = l.hasAudio || n.liveEvent.isLiveEvent;
                        o && i && r && a && n.embed.unmuteButton && c("purpose", c_.UNMUTE)
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.volume
                    }), (e => e > 0 && u())), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.muted
                    }), (e => !e && u())), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                    }), (e => e && u())), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                    }), (() => {
                        __(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                    }), (() => {
                        __(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.outro
                    }), (() => {
                        __(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.paused
                    }), (() => {
                        __(t()) ? _() : p()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.hasFirstTimeUpdate
                    }), (e => {
                        if (a.video.spatial && e) {
                            const e = t().embed.cards;
                            if ((null == e ? void 0 : e.length) && e[0].timecode < 15) return;
                            setTimeout((() => {
                                c("purpose", c_.SPATIAL_INSTRUCTIONS_CLICK), setTimeout((() => d()), 3e3)
                            }), 7e3), o.android || setTimeout((() => {
                                c("purpose", c_.SPATIAL_INSTRUCTIONS_ARROWS), setTimeout((() => d()), 3e3)
                            }), 14e3)
                        }
                    })), {
                        topCenterActionItem: s,
                        setTopCenterActionItem: c,
                        closeTopCenterActionItem: d
                    }
                })(a)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = (e, t) => {
                        n((n => ({
                            spatial: r(r({}, n.spatial), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return t.on(K.WEBVR_ENTER, (() => {
                        i("webVRActive", !0)
                    })), t.on(K.WEBVR_EXIT, (() => {
                        i("webVRActive", !1)
                    })), t.on(K.CAMERA_UPDATE, (e => {
                        n((t => ({
                            spatial: r(r({}, t.spatial), {}, {
                                latitude: e.pitch,
                                longitude: e.yaw
                            })
                        })))
                    })), {
                        spatial: function(e) {
                            const {
                                spatial: t
                            } = e.config.video;
                            return {
                                webVRActive: !1,
                                longitude: 0,
                                latitude: 0,
                                fieldOfView: t ? t.fov : 0
                            }
                        }(e),
                        setSpatial: i
                    }
                })(a)), dv(a)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i,
                        get: o
                    } = e, a = (e, n) => {
                        t((t => ({
                            alert: r(r({}, t.alert), {}, {
                                [e]: n
                            })
                        })))
                    }, l = e => {
                        t((t => {
                            const n = t.embed.background;
                            return t.displayList.overlay || n ? n_ : {
                                alert: r(r({}, t.alert), {}, {
                                    currentAlert: e
                                })
                            }
                        }))
                    };
                    return n.on(Ct, (() => l(T_.SPATIAL_UNSUPPORTED))), n.on(Tt, (() => l(T_.SPATIAL_FAILURE))), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                    }), (e => {
                        e && o().alert.currentAlert !== T_.EMPTY && a("currentAlert", T_.EMPTY)
                    })), {
                        alert: {
                            currentAlert: T_.EMPTY
                        },
                        setAlert: a
                    }
                })(a)), (e => {
                    const {
                        get: t,
                        set: n,
                        events: i
                    } = e, o = (e, t) => {
                        n((n => ({
                            notification: r(r({}, n.notification), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return i.on([vo, xt], (() => o("currentNotification", null))), i.on([Pi, Ri], (() => {
                        const e = t().user.liked;
                        o("currentNotification", e ? uv.LikedAdded : uv.LikeRemoved)
                    })), i.on([Ni, Di], (() => {
                        const e = t().user.watchLater;
                        o("currentNotification", e ? uv.WatchLaterAdded : uv.WatchLaterRemoved)
                    })), {
                        notification: {
                            currentNotification: null
                        },
                        setNotification: o
                    }
                })(a)), (e => {
                    const {
                        set: t
                    } = e, n = (e, n) => {
                        t((t => ({
                            chromecast: r(r({}, t.chromecast), {}, {
                                [e]: n
                            })
                        })))
                    }, i = _v(e);
                    return dd.on([ld.initialized, ld.castStateChanged], (() => {
                        n("isChromecastReady", pv())
                    })), dd.on(ld.buffering, (() => {
                        n("isChromecastBuffering", !0)
                    })), dd.on(ld.error, (() => {
                        n("supportsChromecast", !1)
                    })), dd.on(ld.connected, (e => {
                        t((t => {
                            var n;
                            return {
                                chromecast: r(r({}, t.chromecast), {}, {
                                    isChromecastConnected: !0,
                                    receiverFriendlyName: null == e || null == (n = e.receiver) ? void 0 : n.friendlyName
                                })
                            }
                        }))
                    })), dd.on(ld.disconnected, (() => {
                        t((() => ({
                            chromecast: _v(e)
                        })))
                    })), dd.on(ld.playing, (() => {
                        t((e => ({
                            chromecast: r(r({}, e.chromecast), {}, {
                                isChromecastPlaying: !0,
                                isChromecastBuffering: !1
                            })
                        })))
                    })), dd.on([ld.error, ld.idle, ld.paused, ld.ended, ld.disconnected], (() => {
                        t((e => ({
                            chromecast: r(r({}, e.chromecast), {}, {
                                isChromecastPlaying: !1,
                                isChromecastBuffering: !1
                            })
                        })))
                    })), {
                        chromecast: i
                    }
                })(a)), {}, {
                    config: s,
                    backbone: c,
                    element: d,
                    name: (null == u ? void 0 : u.name) || Ja.VimeoPlayer,
                    verifyConfig: _,
                    events: p,
                    subscribe: i,
                    updatePhpTokens: m,
                    progressController: v,
                    bigPicture: f,
                    debugCollector: E
                });
            return p.fire(Zo, b), b
        }))),
        children: t
    }) : null
}, Ev = e => `opacity ${e}ms ease-out`, gv = ({
    children: e,
    visible: t,
    duration: n = 250,
    styleOverrides: i = {},
    onFaded: o,
    delay: r = 0,
    fadeIn: a = !0,
    fadeOut: l = !0
}) => {
    const s = vv((e => e.embed.background || !e.embed.controls || e.displayList.accessGate)),
        c = Ev(n),
        d = {
            enter: {
                opacity: 0
            },
            enterActive: {
                opacity: 1,
                transition: c,
                transitionDelay: `${r}ms`
            },
            enterDone: {
                opacity: 1
            },
            exit: {
                opacity: 1
            },
            exitActive: {
                opacity: 0,
                transition: c,
                transitionDelay: `${r}ms`
            },
            exitDone: s ? {
                display: "none"
            } : {
                overflow: "hidden",
                opacity: 0,
                pointerEvents: "none"
            }
        };
    return Object.keys(i).forEach((e => {
        e in d && Object.assign(d[e], i[e])
    })), a || delete d.enter, l || delete d.exit, xe(Ye, { in: t,
        duration: n,
        styles: d,
        alwaysMounted: !0,
        onExited: () => {
            o && o()
        },
        children: e
    })
};
const bv = ({
    children: e,
    text: t
}) => {
    const n = Me(t),
        [i, a] = ke(!1),
        [l, s] = ke(!1),
        c = () => {
            l || s(!0)
        },
        d = () => {
            i && (c(), a(!1))
        },
        u = () => {
            i || o.touch || (c(), a(!0))
        },
        _ = Ve((() => {
            l && s(!1)
        }), [l]),
        p = {
            className: "LabeledButton_module_box__2e0341f7",
            onMouseEnter: u,
            onMouseLeave: d,
            onFocus: u,
            onBlur: d
        },
        m = r({
            className: "LabeledButton_module_labeledButton__2e0341f7"
        }, va((t => {
            d(), e.props.onClick && e.props.onClick(t)
        }))),
        v = `${Ev(a_)} transform 250 ease-out`,
        f = {
            visible: i,
            styleOverrides: {
                enterActive: {
                    transform: "translateX(0)",
                    transition: v
                },
                exitActive: {
                    transform: "translateX(5px)",
                    transition: v
                }
            }
        };
    return n.current !== t && (l ? f.onFaded = _ : n.current = t), xe("div", r(r({}, p), {}, {
        children: [xe(gv, r(r({}, f), {}, {
            children: xe("label", r(r({}, m), {}, {
                role: "presentation",
                "aria-hidden": "true",
                children: xe("span", {
                    children: n.current
                })
            }))
        })), e]
    }))
};
const Cv = ["href", "children", "element", "className", "targetBlank"],
    Tv = $e(((e, t) => {
        let {
            href: n,
            children: i,
            element: o = "div",
            className: a = "",
            targetBlank: l = !0
        } = e, s = m(e, Cv);
        const c = Ke(o, r(r({}, s), {}, {
            className: a
        }), i);
        return n ? xe("a", r(r(r({
            href: n,
            className: ya("Link_module_link__05dd5324", a),
            ref: t,
            "aria-describedby": ta.NEW_WINDOW_DESCRIPTION
        }, l ? {
            target: "_blank",
            rel: "noopener"
        } : {}), s), {}, {
            children: i
        })) : c
    })),
    yv = ["direction"],
    Lv = ["fill"],
    Av = {
        [Cp.CLOSE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [Cp.AIRPLAY]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                "data-airplay-icon": !0
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"
                })
            }))
        },
        [Cp.DOLBY_VISION]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 844 126",
                "aria-labelledby": "dv-logo-title"
            }, t), {}, {
                children: [xe("title", {
                    id: "dv-logo-title",
                    children: "Dolby Vision"
                }), xe("path", {
                    d: "M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })]
            }))
        },
        [Cp.PIP]: e => {
            let {
                direction: t = "enter"
            } = e, n = m(e, yv);
            return xe("svg", r(r({
                viewBox: "0 0 16 12"
            }, n), {}, {
                children: [xe("polygon", {
                    className: Jr.FILL,
                    points: "6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"
                }), xe("rect", {
                    className: Jr.FILL,
                    x: "7",
                    y: "7",
                    width: "9",
                    height: "5"
                }), xe("polyline", {
                    className: Jr.FILL,
                    transform: "enter" === t ? "translate(4, 4) rotate(180) translate(-4, -4)" : "",
                    points: "5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"
                })]
            }))
        },
        [Cp.ENTER_FULLSCREEN]: () => xe("svg", {
            className: ea.ENTER_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-enter-fullscreen": !0,
            children: xe("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"
            })
        }),
        [Cp.EXIT_FULLSCREEN]: () => xe("svg", {
            className: ea.EXIT_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-exit-fullscreen": !0,
            children: [xe("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"
            }), xe("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"
            }), xe("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"
            }), xe("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"
            })]
        }),
        [Cp.GEAR]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"
                })
            }))
        },
        [Cp.VIMEO]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "54",
                height: "18",
                viewBox: "0 0 54 18",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"
                })
            }))
        },
        [Cp.VIMEO_SMALL]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"
                })
            }))
        },
        [Cp.ENTER_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                "data-enter-pip": !0,
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",
                    fill: "white"
                })
            }))
        },
        [Cp.EXIT_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-exit-pip": !0
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"
                })
            }))
        },
        [Cp.PAUSE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-pause-icon": !0
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    className: Jr.FILL,
                    d: "M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"
                })
            }))
        },
        [Cp.PLAY]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-play-icon": !0
            }, t), {}, {
                children: xe("path", {
                    d: "M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",
                    className: Jr.FILL
                })
            }))
        },
        [Cp.REPLAY]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    className: Jr.FILL,
                    d: "M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"
                })
            }))
        },
        [Cp.CHAPTERS]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"
                })
            }))
        },
        [Cp.POINT]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "8",
                height: "8",
                viewBox: "0 0 8 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("circle", {
                    className: Jr.FILL,
                    cx: "4",
                    cy: "4",
                    r: "4"
                })
            }))
        },
        [Cp.CC]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24",
                "data-cc-icon": !0
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"
                })
            }))
        },
        [Cp.CC_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24",
                "data-cc-filled-icon": !0
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"
                })
            }))
        },
        [Cp.CHECKMARK]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",
                    fill: "white"
                })
            }))
        },
        [Cp.STEREOSCOPIC]: () => xe("svg", {
            viewBox: "0 0 64 64",
            children: xe("path", {
                d: "M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"
            })
        }),
        [Cp.PERSON_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fill: "white",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"
                })
            }))
        },
        [Cp.CHEVRON_DOWN]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    d: "M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.CHEVRON_RIGHT]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    d: "M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.CLOCK]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"
                })
            }))
        },
        [Cp.CLOCK_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"
                })
            }))
        },
        [Cp.COLLECTIONS]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.DISMISS_X]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#1A2E3B",
                    fillRule: "evenodd"
                })
            }))
        },
        [Cp.HEART]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.HEART_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.HEART_WIDER_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 110 81"
            }, t), {}, {
                children: xe("path", {
                    d: "M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.HEART_WIDER_BROKEN_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 110 81"
            }, t), {}, {
                children: xe("path", {
                    d: "M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.ONDEMAND]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.PAPER_PLANE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 18.1 20.95"
            }, t), {}, {
                children: xe("path", {
                    d: "M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.POP_OUT]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: [xe("path", {
                    d: "M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",
                    fill: "#1a2e3b"
                }), xe("path", {
                    d: "M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",
                    fill: "#1a2e3b"
                })]
            }))
        },
        [Cp.VOLUME_OFF_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"
                })
            }))
        },
        [Cp.VOLUME_ON_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"
                })
            }))
        },
        [Cp.FAST_FORWARD]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"
                })
            }))
        },
        [Cp.INFO_CIRCLE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 4.66667C6.36819 4.66667 6.66667 4.36819 6.66667 4C6.66667 3.63181 6.36819 3.33333 6 3.33333C5.63181 3.33333 5.33333 3.63181 5.33333 4C5.33333 4.36819 5.63181 4.66667 6 4.66667ZM6 5.33333C6.36819 5.33333 6.66667 5.54653 6.66667 5.80952V8.19048C6.66667 8.45347 6.36819 8.66667 6 8.66667C5.63181 8.66667 5.33333 8.45347 5.33333 8.19048V5.80952C5.33333 5.54653 5.63181 5.33333 6 5.33333Z",
                    fill: "white"
                })
            }))
        },
        [Cp.TRANSCRIPT_ON]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 3C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C10.5711 17.3995 10.5711 13.6005 12.9142 11.2574C14.4297 9.74185 16.5543 9.20655 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5ZM18.5 11.7313C17.0907 11.2301 15.4565 11.5435 14.3284 12.6716C14.1332 12.8668 13.9623 13.0773 13.8159 13.2991C12.7907 14.8517 12.9616 16.9616 14.3284 18.3284C15.4515 19.4515 17.0762 19.7671 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313ZM7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H7.5ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.5C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16Z"
                })
            }))
        },
        [Cp.TRANSCRIPT_OFF]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 5H16.5V9.53585C17.1669 9.46283 17.8436 9.50136 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C12.6802 19.5086 12.4696 19.2601 12.2823 19H4.5V5ZM15.2182 19C16.2222 19.5567 17.415 19.6485 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313C17.857 11.5026 17.1672 11.4435 16.5 11.554C15.7048 11.6857 14.9418 12.0582 14.3284 12.6716C12.7663 14.2337 12.7663 16.7663 14.3284 18.3284C14.5992 18.5992 14.8992 18.8231 15.2182 19ZM6.5 8C6.5 7.44772 6.94772 7 7.5 7H12.5C13.0523 7 13.5 7.44772 13.5 8C13.5 8.55228 13.0523 9 12.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H10.5C11.0523 11 11.5 11.4477 11.5 12C11.5 12.5523 11.0523 13 10.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12ZM7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17H8.5C9.05228 17 9.5 16.5523 9.5 16C9.5 15.4477 9.05228 15 8.5 15H7.5Z"
                })
            }))
        },
        [Cp.SEARCH]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    className: Jr.FILL,
                    d: "M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5725 18 14.0238 17.4815 15.1925 16.6062L18.298 19.7076C18.6888 20.0978 19.3219 20.0974 19.7122 19.7066C20.1025 19.3159 20.1021 18.6827 19.7113 18.2924L16.6066 15.1919C17.4817 14.0233 18 12.5722 18 11C18 7.13401 14.866 4 11 4ZM6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11Z"
                })
            }))
        },
        [Cp.CHEVRON_UP]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    d: "M12 11.3454L16.331 15.2433L17.6689 13.7567L12.6689 9.25671C12.2886 8.91443 11.7113 8.91443 11.331 9.25671L6.33102 13.7567L7.66895 15.2433L12 11.3454Z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [Cp.CLOSE_CIRCLE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7071 9.26251C14.3571 8.9125 13.7896 8.9125 13.4396 9.26251L12 10.7023L10.5604 9.26252C10.2104 8.9125 9.64292 8.9125 9.29293 9.26252L9.26302 9.29244C8.91306 9.64243 8.91306 10.2099 9.26302 10.5599L10.7027 11.9997L9.26247 13.4401C8.91251 13.7901 8.91251 14.3576 9.26247 14.7076L9.29239 14.7375C9.64237 15.0875 10.2098 15.0875 10.5598 14.7375L12 13.2971L13.4402 14.7375C13.7902 15.0875 14.3576 15.0875 14.7076 14.7375L14.7375 14.7076C15.0875 14.3576 15.0875 13.7901 14.7375 13.4401L13.2973 11.9997L14.737 10.5599C15.0869 10.2099 15.0869 9.64243 14.737 9.29244L14.7071 9.26251Z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [Cp.SPINNER]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-spinner": !0
            }, t), {}, {
                children: [xe("circle", {
                    "data-spinner-trace": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                }), xe("circle", {
                    "data-spinner-circle": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                })]
            }))
        },
        [Cp.SLIDERS]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM19.8293 5C19.4175 3.83481 18.3062 3 17 3C15.6938 3 14.5825 3.83481 14.1707 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H14.1707C14.5825 8.16519 15.6938 9 17 9C18.3062 9 19.4175 8.16519 19.8293 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.8293ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.17071C4.58254 14.1652 5.69378 15 7 15C8.30622 15 9.41746 14.1652 9.82929 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H9.82929C9.41746 9.83481 8.30622 9 7 9C5.69378 9 4.58254 9.83481 4.17071 11H3ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H14.1707C14.5825 20.1652 15.6938 21 17 21C18.3062 21 19.4175 20.1652 19.8293 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19.8293C19.4175 15.8348 18.3062 15 17 15C15.6938 15 14.5825 15.8348 14.1707 17H3ZM18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z"
                })
            }))
        },
        [Cp.SWITCH_CIRCLE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",
                    fill: "white"
                })
            }))
        },
        [Cp.SWITCH_CONTAINER]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "32",
                height: "16",
                viewBox: "0 0 32 16",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: xe("rect", {
                    width: "32",
                    height: "16",
                    rx: "8",
                    fill: "#2F8363"
                })
            }))
        },
        [Cp.WARN_CIRCLE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
                    fill: "white"
                })
            }))
        },
        [Cp.THUMBS_UP]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C8.99855 21.3765 8.87772 21.3243 8.76692 21.2737C8.25906 21.7332 7.59078 22 6.88197 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89643 2.89367 9 3.99924 9H7.90182C8.9732 8.60827 9.61763 8.20384 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM13.4759 5.05072L13.4741 5.05871C13.4693 5.07933 13.4638 5.09979 13.4577 5.12006C12.9658 6.75821 12.4366 7.99485 11.6235 8.93936C10.9182 9.75858 10.0581 10.2914 9 10.7202V19.2174C9.08899 19.2196 9.17122 19.2384 9.24448 19.2784C9.38703 19.3561 9.60104 19.4634 9.87139 19.5715C10.4167 19.7897 11.163 20 12 20H17.8014C17.8514 19.9621 17.9179 19.9067 17.9987 19.8304C18.2399 19.6027 18.5483 19.2459 18.8517 18.777C19.4594 17.8379 20 16.5239 20 15V12C20 11.6482 19.9099 11.3969 19.7942 11.2538C19.707 11.1461 19.5294 11 19.0738 11H16.0654C16.0365 11.0006 15.9909 11.0009 15.9325 10.999C15.8501 10.9964 15.7377 10.9891 15.6076 10.971C15.3617 10.9367 14.9841 10.8544 14.6237 10.6345C14.2372 10.3985 13.8666 9.99723 13.7424 9.38864C13.6261 8.81811 13.7562 8.20634 14.0421 7.57802C14.4491 6.68359 14.568 5.82532 14.5835 5.18521C14.5913 4.86647 14.5732 4.60676 14.5541 4.43084C14.55 4.39233 14.5458 4.35787 14.5418 4.32773C14.5154 4.29227 14.4815 4.25162 14.4407 4.21169C14.323 4.09673 14.1856 4.01926 14 4.01926C13.8867 4.01926 13.8489 4.04221 13.8443 4.04499C13.8371 4.04925 13.8089 4.06724 13.7659 4.13728C13.7194 4.21297 13.6697 4.32623 13.6182 4.49311C13.5668 4.65929 13.5255 4.83727 13.4759 5.05072ZM7 19.9889V11H4V20H6.88197C6.91933 20 6.95876 19.9961 7 19.9889Z",
                    fill: "white"
                })
            }))
        },
        [Cp.THUMBS_DOWN]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38005 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926L12 2.01926C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C15.0015 2.64281 15.1223 2.69495 15.2331 2.74553C15.7409 2.28605 16.4092 2.01926 17.118 2.01926H20C21.1046 2.01926 22 2.91469 22 4.01926L22 13.0193C22 14.1228 21.1063 15.0193 20.0008 15.0193H16.0982C15.0268 15.411 14.3824 15.8154 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM10.5241 18.9685L10.5259 18.9606C10.5307 18.9399 10.5362 18.9195 10.5423 18.8992C11.0342 17.2611 11.5634 16.0244 12.3765 15.0799C13.0818 14.2607 13.9419 13.7279 15 13.2991L15 4.80189C14.911 4.79964 14.8288 4.78086 14.7555 4.7409C14.613 4.66315 14.399 4.55587 14.1286 4.44773C13.5833 4.2296 12.837 4.01926 12 4.01926L6.1986 4.01926C6.14859 4.05717 6.08207 4.11258 6.00131 4.18882C5.76012 4.41652 5.4517 4.77339 5.14827 5.24229C4.54059 6.18137 4 7.49534 4 9.01926V12.0193C4 12.371 4.09013 12.6224 4.20582 12.7654C4.29297 12.8732 4.47062 13.0193 4.9262 13.0193H7.93463C7.96345 13.0186 8.00911 13.0183 8.06745 13.0202C8.14991 13.0229 8.26226 13.0301 8.39236 13.0483C8.63827 13.0825 9.01586 13.1648 9.37627 13.3848C9.76282 13.6207 10.1334 14.022 10.2576 14.6306C10.3739 15.2012 10.2438 15.8129 9.95791 16.4412C9.55092 17.3357 9.43197 18.1939 9.41645 18.834C9.40873 19.1528 9.4268 19.4125 9.44585 19.5884C9.45002 19.6269 9.45424 19.6614 9.45823 19.6915C9.48457 19.727 9.5185 19.7676 9.55935 19.8076C9.67696 19.9225 9.81438 20 10 20C10.1133 20 10.1511 19.9771 10.1557 19.9743C10.1629 19.97 10.1911 19.952 10.2341 19.882C10.2806 19.8063 10.3303 19.693 10.3818 19.5262C10.4332 19.36 10.4745 19.182 10.5241 18.9685ZM17 4.03039V13.0193H20L20 4.01926H17.118C17.0807 4.01926 17.0412 4.02315 17 4.03039Z",
                    fill: "white"
                })
            }))
        },
        [Cp.THUMBS_UP_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C9.08468 21.4109 9.0418 21.3933 9 21.3758V8.51408C9.46407 8.25834 9.8137 7.9761 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM7 9H3.99924C2.89367 9 2 9.89643 2 11V20C2 21.1046 2.89543 22 4 22H6.88197C6.92144 22 6.96079 21.9992 7 21.9975V9Z",
                    fill: "white"
                })
            }))
        },
        [Cp.THUMBS_DOWN_FILLED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38006 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926H12C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C14.9153 2.60835 14.9582 2.62594 15 2.64348V15.5052C14.5359 15.7609 14.1863 16.0432 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM17 15.0193H20.0008C21.1063 15.0193 22 14.1228 22 13.0193V4.01926C22 2.91469 21.1046 2.01926 20 2.01926H17.118C17.0786 2.01926 17.0392 2.02008 17 2.02173V15.0193Z",
                    fill: "white"
                })
            }))
        },
        [Cp.LINK]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    className: Jr.FILL,
                    d: "M11.2929 8.46447C10.9024 8.07395 10.9024 7.44078 11.2929 7.05026L13.4142 4.92894C14.9763 3.36684 17.509 3.36684 19.0711 4.92894C20.6332 6.49103 20.6332 9.02369 19.0711 10.5858L16.9498 12.7071C16.5593 13.0976 15.9261 13.0976 15.5356 12.7071C15.145 12.3166 15.145 11.6834 15.5356 11.2929L17.6569 9.17158C18.4379 8.39053 18.4379 7.1242 17.6569 6.34315C16.8758 5.5621 15.6095 5.5621 14.8285 6.34315L12.7071 8.46447C12.3166 8.85499 11.6834 8.85499 11.2929 8.46447ZM8.46443 11.2929C8.07391 10.9024 7.44074 10.9024 7.05022 11.2929L4.9289 13.4142C3.3668 14.9763 3.3668 17.509 4.9289 19.0711C6.49099 20.6332 9.02365 20.6332 10.5858 19.0711L12.7071 16.9497C13.0976 16.5592 13.0976 15.9261 12.7071 15.5355C12.3165 15.145 11.6834 15.145 11.2929 15.5355L9.17154 17.6569C8.39049 18.4379 7.12416 18.4379 6.34311 17.6569C5.56206 16.8758 5.56206 15.6095 6.34311 14.8284L8.46443 12.7071C8.85495 12.3166 8.85495 11.6834 8.46443 11.2929ZM9.87874 12.7071C9.48821 13.0976 9.48821 13.7308 9.87874 14.1213C10.2693 14.5118 10.9024 14.5118 11.293 14.1213L14.1214 11.2929C14.5119 10.9024 14.5119 10.2692 14.1214 9.87868C13.7309 9.48816 13.0977 9.48816 12.7072 9.87868L9.87874 12.7071Z"
                })
            }))
        },
        [Cp.SPARKLE_TWO_STARS_FILLED]: e => {
            let {
                fill: t
            } = e, n = m(e, Lv);
            const i = {};
            return t && (i.fill = t), xe("svg", r(r({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none"
            }, n), {}, {
                children: [xe("path", {
                    style: i,
                    "data-shape": "smallStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 20.861 4.11 L 21.903 4.472 L 21.899 4.474 C 22.105 4.546 22.214 4.771 22.144 4.978 C 22.105 5.095 22.013 5.186 21.896 5.224 L 20.859 5.585 C 20.401 5.745 20.047 6.099 19.887 6.557 L 19.526 7.599 C 19.452 7.806 19.225 7.914 19.018 7.842 C 18.901 7.802 18.811 7.709 18.774 7.592 L 18.414 6.555 C 18.257 6.099 17.899 5.741 17.443 5.583 L 16.4 5.222 C 16.112 5.121 16.041 4.746 16.272 4.546 C 16.314 4.511 16.362 4.484 16.414 4.468 L 17.445 4.11 C 17.902 3.951 18.255 3.597 18.415 3.139 L 18.779 2.097 C 18.877 1.809 19.25 1.736 19.45 1.965 C 19.486 2.005 19.513 2.053 19.529 2.104 L 19.889 3.139 C 20.048 3.597 20.402 3.951 20.86 4.11 L 20.861 4.11 Z"
                }), xe("path", {
                    style: i,
                    "data-shape": "largeStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 15.732 10.906 L 18.352 11.817 L 18.354 11.815 C 18.734 11.949 18.935 12.364 18.804 12.745 C 18.73 12.96 18.56 13.127 18.344 13.197 L 15.732 14.107 C 14.507 14.528 13.545 15.49 13.122 16.714 L 12.212 19.336 C 12.077 19.712 11.669 19.912 11.289 19.789 C 11.069 19.718 10.897 19.545 10.828 19.324 L 9.922 16.716 C 9.499 15.492 8.538 14.531 7.314 14.108 L 4.697 13.2 C 4.165 13.02 4.027 12.331 4.449 11.96 C 4.521 11.897 4.606 11.848 4.697 11.817 L 7.314 10.907 C 8.538 10.485 9.5 9.524 9.922 8.3 L 10.832 5.677 C 10.894 5.495 11.026 5.346 11.198 5.262 C 11.594 5.068 12.069 5.265 12.213 5.681 L 13.123 8.3 C 13.545 9.524 14.508 10.486 15.732 10.907 L 15.732 10.906 Z"
                })]
            }))
        },
        [Cp.WARN_TRIANGLE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "36",
                height: "32.326",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "287.915 380.297 36 32.326"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "white",
                    d: "M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"
                })
            }))
        },
        [Cp.VERTICAL_ELLIPSIS]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "4",
                height: "19",
                viewBox: "0 0 4 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    d: "M2 4.5C2.39556 4.5 2.78224 4.3827 3.11114 4.16294C3.44004 3.94318 3.69639 3.63082 3.84776 3.26537C3.99914 2.89992 4.03874 2.49778 3.96157 2.10982C3.8844 1.72186 3.69392 1.36549 3.41421 1.08579C3.13451 0.806082 2.77814 0.615601 2.39018 0.53843C2.00222 0.46126 1.60009 0.500867 1.23463 0.652242C0.869182 0.803617 0.556825 1.05996 0.337062 1.38886C0.117299 1.71776 1.07779e-06 2.10444 1.07779e-06 2.5C1.07779e-06 3.03043 0.210715 3.53914 0.585788 3.91421C0.960861 4.28929 1.46957 4.5 2 4.5ZM2 14.5C1.60444 14.5 1.21776 14.6173 0.888861 14.8371C0.559963 15.0568 0.303617 15.3692 0.152242 15.7346C0.000866562 16.1001 -0.0387401 16.5022 0.0384303 16.8902C0.115601 17.2781 0.306083 17.6345 0.585788 17.9142C0.865493 18.1939 1.22186 18.3844 1.60982 18.4616C1.99778 18.5387 2.39992 18.4991 2.76537 18.3478C3.13082 18.1964 3.44318 17.94 3.66294 17.6111C3.8827 17.2822 4 16.8956 4 16.5C4 15.9696 3.78929 15.4609 3.41421 15.0858C3.03914 14.7107 2.53043 14.5 2 14.5ZM2 7.5C1.60444 7.5 1.21776 7.6173 0.888861 7.83706C0.559963 8.05682 0.303617 8.36918 0.152242 8.73463C0.000866562 9.10009 -0.0387401 9.50222 0.0384303 9.89018C0.115601 10.2781 0.306083 10.6345 0.585788 10.9142C0.865493 11.1939 1.22186 11.3844 1.60982 11.4616C1.99778 11.5387 2.39992 11.4991 2.76537 11.3478C3.13082 11.1964 3.44318 10.94 3.66294 10.6111C3.8827 10.2822 4 9.89556 4 9.5C4 8.96957 3.78929 8.46086 3.41421 8.08579C3.03914 7.71071 2.53043 7.5 2 7.5Z"
                })
            }))
        },
        [Cp.PLUS_SYMBOL]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24",
                preserveAspectRatio: "xMidYMid"
            }, t), {}, {
                children: xe("path", {
                    d: "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                })
            }))
        },
        [Cp.FACEBOOK]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: xe("path", {
                    d: "M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"
                })
            }))
        },
        [Cp.TUMBLR]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 12 20"
            }, t), {}, {
                children: xe("path", {
                    d: "M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"
                })
            }))
        },
        [Cp.EMAIL]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 72 72"
            }, t), {}, {
                children: [xe("path", {
                    d: "M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"
                }), xe("path", {
                    d: "M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"
                }), xe("path", {
                    d: "M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"
                }), xe("path", {
                    d: "M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"
                })]
            }))
        },
        [Cp.EMBED]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 55 48"
            }, t), {}, {
                children: [xe("polygon", {
                    points: "16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"
                }), xe("polygon", {
                    points: "42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"
                }), xe("polygon", {
                    points: "24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"
                })]
            }))
        },
        [Cp.PREVIOUS]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 27 48",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    d: "M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"
                })
            }))
        },
        [Cp.TWITTER]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: xe("path", {
                    d: "M17.751 3h3.067l-6.7 7.658L22 21.078h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L2 3h6.328l4.37 5.777L17.75 3Zm-1.076 16.243h1.7L7.404 4.739H5.58l11.094 14.504Z"
                })
            }))
        },
        [Cp.VOD]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "21",
                height: "23",
                viewBox: "0 0 21 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z",
                    fill: "white"
                })
            }))
        },
        [Cp.VOD_DOWNLOAD]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z",
                    fill: "white"
                }), xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z",
                    fill: "white"
                })]
            }))
        },
        [Cp.VOD_RENT]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z",
                    fill: "white"
                }), xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z",
                    fill: "white"
                })]
            }))
        },
        [Cp.VOD_SUBSCRIBE]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z",
                    fill: "white"
                }), xe("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13 20v-8l8 4",
                    fill: "white"
                })]
            }))
        },
        [Cp.CAMERA]: e => {
            let t = Object.assign({}, (qe(e), e));
            return xe("svg", r(r({
                width: "560",
                height: "560",
                viewBox: "0 0 560 560",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [xe("circle", {
                    cx: "280",
                    cy: "280",
                    r: "280",
                    fill: "#141414"
                }), xe("path", {
                    d: "M388.448 342.355L394.026 336.62V336.62L388.448 342.355ZM333.924 289.317L328.346 295.051L328.346 295.051L333.924 289.317ZM333.924 270.684L328.346 264.949L328.346 264.949L333.924 270.684ZM388.448 217.646L394.026 223.38L394.026 223.38L388.448 217.646ZM165 222.988C165 214.158 172.158 207 180.987 207V191C163.321 191 149 205.321 149 222.988H165ZM165 337.012V222.988H149V337.012H165ZM180.987 353C172.158 353 165 345.842 165 337.012H149C149 354.679 163.321 369 180.987 369V353ZM304.334 353H180.987V369H304.334V353ZM320.321 337.012C320.321 345.842 313.164 353 304.334 353V369C322 369 336.321 354.679 336.321 337.012H320.321ZM320.321 222.988V337.012H336.321V222.988H320.321ZM304.334 207C313.164 207 320.321 214.158 320.321 222.988H336.321C336.321 205.321 322 191 304.334 191V207ZM180.987 207H304.334V191H180.987V207ZM399.001 208.514H391.235V224.514H399.001V208.514ZM410.999 220.512C410.999 213.885 405.628 208.514 399.001 208.514V224.514C396.791 224.514 394.999 222.722 394.999 220.512H410.999ZM410.999 339.489V220.512H394.999V339.489H410.999ZM399.001 351.487C405.628 351.487 410.999 346.115 410.999 339.489H394.999C394.999 337.279 396.791 335.487 399.001 335.487V351.487ZM391.235 351.487H399.001V335.487H391.235V351.487ZM382.87 348.089C385.109 350.268 388.111 351.487 391.235 351.487V335.487C392.278 335.487 393.279 335.893 394.026 336.62L382.87 348.089ZM328.346 295.051L382.87 348.089L394.026 336.62L339.502 283.582L328.346 295.051ZM324.714 286.451C324.714 289.691 326.024 292.792 328.346 295.051L339.502 283.582C340.277 284.336 340.714 285.37 340.714 286.451H324.714ZM324.714 273.549V286.451H340.714V273.549H324.714ZM328.346 264.949C326.024 267.208 324.714 270.31 324.714 273.549H340.714C340.714 274.63 340.277 275.665 339.502 276.418L328.346 264.949ZM382.87 211.911L328.346 264.949L339.502 276.418L394.026 223.38L382.87 211.911ZM391.235 208.514C388.111 208.514 385.109 209.733 382.87 211.912L394.026 223.38C393.279 224.107 392.278 224.514 391.235 224.514V208.514Z",
                    fill: "#3d3d3d"
                })]
            }))
        }
    },
    Sv = ["name", "className"],
    Iv = e => {
        let {
            name: t,
            className: n
        } = e, i = m(e, Sv);
        const o = Av[t];
        return o && xe(o, r({
            className: n
        }, i))
    };
const Ov = ({
        headerContent: e,
        panelContent: t,
        bodyRef: n,
        headerRef: i,
        panelRef: o,
        bodyClassName: r,
        panelClassName: a,
        bodyInlineStyles: l = {},
        ariaLabel: s
    }) => xe(ze, {
        children: [e && xe("div", {
            ref: i,
            children: e
        }), xe("div", {
            ref: n,
            className: r,
            style: l,
            children: xe("div", {
                className: a,
                ref: o,
                role: "menu",
                "aria-label": s,
                children: t
            })
        })]
    }),
    Pv = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t = qa,
        panel: n,
        buttonRef: i,
        panelContent: o,
        headerContent: r,
        toggleKey: a,
        className: l,
        id: s,
        type: c,
        ariaLabel: d,
        onBack: u = qa
    }) => {
        const _ = Me(null),
            p = Me(null),
            m = Me(null),
            v = Me(null),
            f = vv((e => e.element)),
            h = vv((e => e.displayList.controlBar)),
            E = vv((e => e.appearance.playerWidth)),
            g = vv((e => e.appearance.playerHeight)),
            b = vv((e => e.appearance.fullscreen)),
            [C, T] = ke(!1),
            y = bs(f),
            {
                onFocus: L,
                focusFirstItem: A
            } = Ep({
                menuRef: _,
                panelRef: m,
                buttonRef: i,
                isActive: e && C,
                toggleKey: a,
                shouldTrapFocus: y,
                setMenuDisplayed: t,
                onBack: u
            });
        we((() => {
            e && A()
        }), [n]), we((() => {
            b && t(!1)
        }), [b, t]), we((() => {
            h || t(!1)
        }), [h, t]), we((() => {
            const e = _.current;
            return () => {
                null == e || null == e.close || e.close(), T(!1)
            }
        }), [_, T]), we((() => {
            var t, n, i, o;
            e && (null != _ && null != (t = _.current) && t.open && (null == _ || null == (n = _.current) || null == n.close || n.close()), y ? null == _ || null == (i = _.current) || null == i.showModal || i.showModal() : null == _ || null == (o = _.current) || null == o.show || o.show(), T(!0))
        }), [y, e, _]);
        const S = ya(Jr.VP_MENU, "ModalMenu_module_menu__78a8988e", l);
        return xe(gv, {
            visible: e && C,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            onFaded: () => {
                var e;
                null == _ || null == (e = _.current) || null == e.close || e.close(), T(!1)
            },
            children: xe("dialog", {
                id: s,
                className: S,
                ref: _,
                onFocus: L,
                onBlur: e => {
                    var n;
                    !e.relatedTarget || null != (n = _.current) && n.contains(e.relatedTarget) || t(!1)
                },
                "data-menu": c || !0,
                style: b ? {} : {
                    maxWidth: `${E}px`,
                    maxHeight: `${g}px`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                },
                "aria-modal": "true",
                children: xe(Ov, {
                    headerContent: r,
                    headerRef: v,
                    bodyRef: p,
                    bodyClassName: "ModalMenu_module_menuBody__78a8988e",
                    panelClassName: "ModalMenu_module_menuPanel__78a8988e",
                    panelRef: m,
                    panelContent: o,
                    ariaLabel: d
                })
            })
        })
    };
const Rv = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t = qa,
        panel: n,
        buttonRef: i,
        progressBarAndButtonsRef: o,
        panelContent: a,
        headerContent: l,
        toggleKey: s,
        className: c,
        id: d,
        type: u,
        resizeDependencies: _,
        ariaLabel: p,
        onBack: m = qa
    }) => {
        const v = Me(null),
            f = Me(null),
            h = Me(null),
            E = Me(null),
            g = Me(null),
            [b, C] = ke({
                height: "auto"
            }),
            [T, y] = ke({}),
            [L, A] = ke(!1),
            [S, I] = ke(!1),
            P = vv((e => e.appearance.isMenuVerticalVideoMode)),
            R = vv((e => e.appearance.boundingClientRect)),
            N = vv((e => e.appearance.playerBreakpoint)),
            D = vv((e => e.displayList.controlBar)),
            {
                isAccordionToggling: w
            } = je(wv),
            {
                onFocus: k,
                focusFirstItem: M
            } = Ep({
                menuRef: v,
                panelRef: h,
                buttonRef: i,
                isActive: e,
                toggleKey: s,
                setMenuDisplayed: t,
                onBack: m
            });
        we((() => {
            e && M()
        }), [n]);
        const V = e => {
                const t = window.getComputedStyle(e);
                return parseFloat(t.fontSize)
            },
            B = () => {
                A(!1), cancelAnimationFrame(null == g ? void 0 : g.current)
            },
            U = () => {
                if (!(null == v ? void 0 : v.current) || !e) return;
                let t = "auto";
                const n = ur(v.current),
                    i = V(v.current),
                    o = n.bottom - v.current.scrollHeight,
                    a = Math.max(R.top, 0) - o;
                if (a > 0) {
                    let e = v.current.scrollHeight - a - i;
                    t = e / i + "em"
                }
                C((e => r(r({}, e), {}, {
                    height: t
                }))), I(a > 0)
            },
            x = () => {
                if (null == h || !h.current) return;
                if (!e) return void y({
                    height: "0"
                });
                const t = V(h.current),
                    n = (h.current.scrollHeight + 16) / t + "em";
                y({
                    height: n
                })
            },
            F = () => {
                U(), L && (g.current = requestAnimationFrame(F))
            },
            H = O((n => {
                null != v && v.current && null != i && i.current && e && (i.current.contains(n.target) || v.current.contains(n.target) || !document.contains(n.target) || t(!1))
            }), 200),
            W = O((() => {
                t(!1)
            }), 200);
        we((() => (document.addEventListener("click", H, !1), window.addEventListener("blur", W, !1), () => {
            document.removeEventListener("click", H, !1), window.removeEventListener("blur", W, !1)
        })), [v, i, e]), we((() => ((() => {
            if (!((null == v ? void 0 : v.current) && (null == i ? void 0 : i.current) && (null == o ? void 0 : o.current) && e)) return;
            if (P && N === Ks.XXS && (null == R ? void 0 : R.width)) return void C((e => r(r({}, e), {}, {
                width: "",
                right: ""
            })));
            const t = ur(i.current),
                n = ur(v.current.parentElement),
                a = ur(o.current),
                l = ur(v.current);
            let s = -8 - a.right + n.right;
            const c = t.right - t.width / 2 + l.width / 2 + 8;
            c < a.right && (s = n.right - c);
            const d = V(v.current);
            C((e => r(r({}, e), {}, {
                right: s / d + "em"
            })))
        })(), e ? (x(), A(!0), F()) : (B(), x(), U()), () => {
            B()
        })), [e, n, null == R ? void 0 : R.width, N, _]), we((() => {
            D || t(!1)
        }), [D]), we((() => {
            (() => {
                if (null != f && f.current) {
                    if (w) return y((e => r(r({}, e), {}, {
                        height: "auto"
                    }))), A(!0), void F();
                    x(), F()
                }
            })()
        }), [w]);
        const G = ya(Jr.VP_MENU, "PopoverMenu_module_menu__41674725", c, S && "PopoverMenu_module_scroll__41674725", P && "PopoverMenu_module_verticalVideo__41674725");
        return xe(gv, {
            visible: e,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: xe("div", {
                id: d,
                className: G,
                ref: v,
                style: b,
                onTransitionEnd: e => {
                    e.target === (null == f ? void 0 : f.current) && "height" === e.propertyName && (U(), B())
                },
                onFocus: k,
                onBlur: e => {
                    var n;
                    !e.relatedTarget || null != (n = v.current) && n.contains(e.relatedTarget) || t(!1)
                },
                "data-menu": u || !0,
                children: xe(Ov, {
                    headerContent: l,
                    headerRef: E,
                    bodyRef: f,
                    bodyClassName: "PopoverMenu_module_menuBody__41674725",
                    panelClassName: "PopoverMenu_module_menuPanel__41674725",
                    panelRef: h,
                    panelContent: a,
                    ariaLabel: p,
                    bodyInlineStyles: T
                })
            })
        })
    },
    Nv = ["forceModalMenu", "setMenuDisplayed"],
    Dv = e => {
        let {
            forceModalMenu: t,
            setMenuDisplayed: n
        } = e, i = m(e, Nv);
        const o = vv((e => e.appearance.isMenuBlockingUI)),
            a = t || o,
            l = Ve(n, []);
        return xe(a ? Pv : Rv, r({
            setMenuDisplayed: l
        }, i))
    },
    wv = Xe({
        isAccordionToggling: !1,
        activeAccordion: "",
        setAccordionToggling: () => {},
        setActiveAccordion: () => {}
    }),
    kv = ({
        children: e
    }) => {
        const [t, n] = ke(!1), [i, o] = ke(""), r = {
            isAccordionToggling: t,
            activeAccordion: i,
            setAccordionToggling: n,
            setActiveAccordion: o
        };
        return xe(wv.Provider, {
            value: r,
            children: e
        })
    };
const Mv = ({
    buffer: e = !1
}) => xe("div", {
    className: "Divider_module_divider__74e2aa5b " + (e ? "Divider_module_buffer__74e2aa5b" : "")
});
const Vv = ({
    onBack: e = null,
    title: t,
    forceModalMenu: n,
    setMenuDisplayed: i = qa,
    hasCloseButton: o = !0,
    onClose: r = () => i(!1),
    size: a = Zs.MD
}) => {
    const l = vv((e => e.appearance.isMenuBlockingUI)),
        s = n || l,
        c = ya("MenuHeader_module_menuHeader__c10a9277", s && "MenuHeader_module_fullWidth__c10a9277", e && "MenuHeader_module_hasBack__c10a9277", !o && "MenuHeader_module_hideCloseButton__c10a9277");
    return xe("div", {
        className: c,
        children: [xe("header", {
            className: "MenuHeader_module_header__c10a9277",
            children: [xe("div", {
                className: "MenuHeader_module_backButtonWrapper__c10a9277",
                children: xe(df, {
                    className: "MenuHeader_module_backButton__c10a9277",
                    onClick: e,
                    "aria-label": "Back",
                    color: zs.ALTERNATIVE,
                    icon: xe(Iv, {
                        name: Cp.CHEVRON_RIGHT
                    }),
                    iconSize: qs.MD
                })
            }), xe(nf, {
                size: a,
                className: "MenuHeader_module_title__c10a9277",
                color: Qs.WHITE,
                element: s ? "h1" : "h2",
                children: t
            }), xe("div", {
                className: "MenuHeader_module_closeButtonWrapper__c10a9277",
                children: xe(df, {
                    className: "MenuHeader_module_closeButton__c10a9277",
                    "aria-label": "Close menu",
                    onClick: r,
                    color: zs.ALTERNATIVE,
                    icon: xe(Iv, {
                        name: Cp.DISMISS_X
                    }),
                    iconSize: qs.MD
                })
            })]
        }), xe(Mv, {})]
    })
};
const Bv = ["className", "id", "active", "withActive", "onSelect", "onMouseEnter", "onMouseLeave", "element", "styled", "children", "role", "describedBy"],
    Uv = e => {
        let {
            className: t,
            id: n,
            active: i,
            withActive: o = !0,
            onSelect: a,
            onMouseEnter: l,
            onMouseLeave: s,
            element: c = "div",
            styled: d = !0,
            children: u,
            role: _ = "menuitemradio",
            describedBy: p
        } = e, v = m(e, Bv);
        const {
            onClick: f,
            onKeyDown: h
        } = j_(a), E = ya("MenuOption_module_option__828f05b2", o && "MenuOption_module_withActive__828f05b2", d && "MenuOption_module_styled__828f05b2", t), g = r({
            className: E,
            role: _,
            "aria-checked": i,
            "aria-selected": i,
            "aria-describedby": p,
            "data-id": n,
            "data-menu-option": !0,
            tabIndex: 0,
            onClick: f,
            onKeyDown: h,
            onMouseDown: e => e.preventDefault(),
            onMouseEnter: l,
            onMouseLeave: s
        }, v);
        return Ke(c, g, u)
    };
const xv = ({
    className: e,
    onSelect: t,
    label: n,
    value: i,
    id: o,
    isAccordion: a = !1,
    hasPopup: l = !1,
    isOpened: s = !1,
    size: c = Q_.MEDIUM,
    role: d = "menuitem"
}) => {
    let u, _ = Zs.MD;
    c === Q_.LARGE ? (_ = Zs.LG, u = Zs.MD) : a && (_ = Zs.SM);
    const p = {};
    return l && Object.assign(p, {
        "aria-haspopup": "true",
        "aria-expanded": s
    }), xe(Uv, r(r({
        className: ya("MenuItem_module_optionButton__14a7084a", c === Q_.SMALL && "MenuItem_module_small__14a7084a", e),
        onSelect: t,
        id: o,
        withActive: !1,
        role: d,
        "data-menu-item": !0
    }, p), {}, {
        children: [xe(nf, {
            size: _,
            weight: a ? Js.BOLD : Js.NORMAL,
            className: "MenuItem_module_label__14a7084a",
            color: Qs.WHITE,
            children: n
        }), i && xe(nf, {
            weight: Js.NORMAL,
            size: u,
            className: "MenuItem_module_value__14a7084a",
            color: Qs.WHITE,
            children: i
        }), xe("div", {
            className: ya("MenuItem_module_icon__14a7084a", s && "MenuItem_module_open__14a7084a"),
            children: xe(Iv, {
                name: a ? Cp.CHEVRON_DOWN : Cp.CHEVRON_RIGHT
            })
        })]
    }))
};
const Fv = Zs.MD,
    Hv = Zs.SM,
    Wv = ({
        onSelect: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i,
        active: o,
        id: r,
        ordered: a = !1,
        index: l,
        isAccordion: s = !1,
        tabIndex: c,
        icon: d = null,
        role: u = "menuitemradio",
        hidden: _
    }) => {
        const p = ya("MenuOptionListItem_module_listItem__2a2a4b59", a && "MenuOptionListItem_module_ordered__2a2a4b59", o && "MenuOptionListItem_module_active__2a2a4b59", s && "MenuOptionListItem_module_accordion__2a2a4b59");
        return xe(Uv, {
            className: p,
            onSelect: e,
            onMouseEnter: t,
            onMouseLeave: n,
            active: o,
            id: r,
            tabIndex: c,
            role: u,
            hidden: _,
            children: [d && xe("div", {
                className: "MenuOptionListItem_module_icon__2a2a4b59",
                children: xe(Iv, {
                    name: d
                })
            }), a && !d && xe("div", {
                className: "MenuOptionListItem_module_number__2a2a4b59",
                children: l
            }), !a && !d && xe("div", {
                className: "MenuOptionListItem_module_check__2a2a4b59 " + (o ? "MenuOptionListItem_module_activeCheck__2a2a4b59" : ""),
                children: xe(Iv, {
                    name: Cp.CHECKMARK
                })
            }), xe(nf, {
                className: "MenuOptionListItem_module_text__2a2a4b59",
                weight: Js.NORMAL,
                size: s ? Hv : Fv,
                color: Qs.WHITE,
                children: i
            }), a && o && xe("div", {
                className: "MenuOptionListItem_module_point__2a2a4b59",
                children: xe(Iv, {
                    name: Cp.POINT
                })
            })]
        })
    },
    Gv = ({
        items: e,
        onSelect: t,
        onMenuOptionMouseEnter: n,
        onMenuOptionMouseLeave: i,
        ordered: o = !1,
        isAccordion: a = !1,
        listItemTabIndex: l = 0,
        hidden: s,
        itemComponent: c
    }) => {
        const d = e.map((e => {
            const d = {
                key: e.id,
                id: e.id,
                active: e.active,
                label: e.label,
                onSelect: t,
                onMouseEnter: n,
                onMouseLeave: i,
                ordered: o,
                isAccordion: a,
                tabIndex: l,
                icon: e.icon,
                hidden: s
            };
            return c ? c(r(r({}, d), e)) : xe(Wv, r({}, d))
        }));
        return xe(ze, {
            children: d
        })
    };
const Yv = ({
    id: e,
    label: t,
    items: n = [],
    onSelect: i
}) => {
    var o;
    const r = Me(null),
        a = Me(null),
        {
            setAccordionToggling: l,
            activeAccordion: s,
            setActiveAccordion: c
        } = je(wv),
        [d, u] = ke(!1),
        [_, p] = ke({}),
        m = null == (o = n.find((e => e.active))) ? void 0 : o.label,
        v = (e = void 0) => {
            const n = void 0 !== e ? e : !d;
            u(n), l(!0), n && c(t)
        },
        f = e => {
            e.target === a.current && "height" === e.propertyName && l(!1)
        },
        h = e => {
            null != r && r.current && !r.current.contains(e.target) && r.current !== e.target && v(!1)
        };
    return we((() => (document.addEventListener("click", h), document.addEventListener("transitionend", f), () => {
        c(""), document.removeEventListener("click", h), document.removeEventListener("transitionend", f)
    })), []), we((() => {
        p((() => {
            let e = {};
            if (d && null != a && a.current) {
                const t = window.getComputedStyle(a.current),
                    n = parseFloat(t.fontSize);
                e = {
                    height: a.current.scrollHeight / n + "em"
                }
            }
            return e
        })())
    }), [d, a]), we((() => {
        s && s !== t && v(!1)
    }), [s]), n.length && xe("div", {
        className: "Accordion_module_accordion__2cb96b8e",
        role: "group",
        ref: r,
        "aria-controls": e,
        children: [xe(xv, {
            label: t,
            value: m,
            onSelect: () => v(),
            isAccordion: !0,
            hasPopup: !0,
            isOpened: d,
            role: "button"
        }), xe("div", {
            className: "Accordion_module_content__2cb96b8e",
            "aria-hidden": !d,
            ref: a,
            style: _,
            role: "menu",
            id: e,
            "aria-label": t,
            children: xe(Gv, {
                items: n,
                onSelect: i,
                isAccordion: !0,
                listItemTabIndex: d ? 0 : -1,
                hidden: !d || void 0
            })
        })]
    })
};
const $v = ({
        id: e,
        label: t,
        className: n = ""
    }) => xe("div", {
        className: `MenuFieldLabel_module_menuField__832e2f60 ${n}`,
        "aria-hidden": !0,
        children: xe(nf, {
            id: e,
            className: "MenuFieldLabel_module_label__832e2f60",
            color: Qs.WHITE,
            children: t
        })
    }),
    Kv = ({
        labelId: e,
        items: t = [],
        label: n,
        onSelect: i
    }) => {
        const o = vv((e => e.appearance.shouldMenuItemsWrap));
        return xe(ze, {
            children: [xe($v, {
                label: n,
                id: e
            }), xe("ul", {
                className: "ButtonRow_module_buttonRow__ed961dd7 " + (o ? "ButtonRow_module_wrap__ed961dd7" : ""),
                role: "radiogroup",
                "aria-labelledby": e,
                children: t.map((t => xe(Uv, {
                    element: "li",
                    className: "ButtonRow_module_filledButton__ed961dd7 " + (t.active ? "ButtonRow_module_active__ed961dd7" : ""),
                    active: t.active,
                    id: t.id,
                    onSelect: i,
                    styled: !1,
                    role: "radio",
                    describedBy: e,
                    children: xe(nf, {
                        className: "ButtonRow_module_label__ed961dd7",
                        color: Qs.WHITE,
                        children: t.label
                    })
                }, t.id)))
            })]
        })
    };
const qv = ({
    labelId: e,
    items: t = [],
    label: n,
    onSelect: i
}) => {
    const o = vv((e => e.appearance.shouldMenuItemsWrap));
    return xe(ze, {
        children: [xe($v, {
            label: n,
            id: e
        }), xe("ul", {
            className: "ColorSwabs_module_colorSwabs__ee1dd808 " + (o ? "ColorSwabs_module_wrap__ee1dd808" : ""),
            role: "radiogroup",
            "aria-labelledby": e,
            children: t.map((t => xe(Uv, {
                id: t.id,
                element: "li",
                className: "ColorSwabs_module_colorSwab__ee1dd808 " + (t.active ? "ColorSwabs_module_active__ee1dd808" : ""),
                active: t.active,
                "aria-label": t.label,
                onSelect: i,
                styled: !1,
                describedBy: e,
                role: "radio",
                children: xe("div", {
                    className: "ColorSwabs_module_inner__ee1dd808",
                    style: {
                        backgroundColor: t.id
                    }
                })
            }, t.id)))
        })]
    })
};
let zv = function(e) {
    return e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right", e
}({});
const jv = {
        onPointerDown: e => e.preventDefault()
    },
    Xv = ({
        children: t,
        tooltipContent: n,
        className: i = "",
        containerEl: a,
        position: l,
        margin: s,
        visible: c = null,
        preventFocusOnClick: d = !1,
        id: u = null,
        animating: _ = !1
    }) => {
        var p, m, v;
        const [f, h] = ke(!1), E = () => h(!0), g = () => h(!1), b = null !== c, C = c || f, T = Zv("onPointerEnter", t, (e => {
            "mouse" === e.pointerType && E()
        })), y = Zv("onPointerLeave", t, g), L = Zv("onFocus", t, (() => {
            document.body.classList.contains(Jr.SHOWFOCUS) && E()
        })), A = Zv("onBlur", t, g);
        op("Escape", g);
        let S = null == t ? void 0 : t.ref;
        const I = Me(null);
        S = S || I;
        const O = Me(null),
            P = ya("Tooltip_module_tooltipContainer__d9b61844", null == t || null == (p = t.props) ? void 0 : p.className, b && c && "Tooltip_module_forceVisible__d9b61844"),
            R = r(r({}, null == t ? void 0 : t.props), {}, {
                className: P,
                ref: S,
                onPointerEnter: T,
                onPointerLeave: y,
                onFocus: L,
                onBlur: A,
                "aria-labelledby": null != u ? u : null,
                "data-touch-device": o.touch.toString()
            });
        d && Object.assign(R, jv);
        const N = (({
                tooltipEl: e,
                wrappedEl: t,
                visible: n,
                containerEl: i,
                position: o = zv.TOP,
                margin: a = 0,
                animating: l = !1
            }) => {
                const s = Me(null),
                    [c, d] = ke({
                        top: null,
                        bottom: null,
                        left: o === zv.LEFT ? "auto" : "50%",
                        right: o === zv.LEFT ? `calc(100% + ${a}px)` : "auto"
                    }),
                    u = vv((e => e.element)),
                    _ = Ve((() => {
                        const i = {};
                        if (e && t && n) {
                            const {
                                left: n,
                                right: r
                            } = u.getBoundingClientRect(), {
                                left: l,
                                right: s,
                                width: c
                            } = t.getBoundingClientRect(), {
                                width: d
                            } = e.getBoundingClientRect();
                            if (o === zv.TOP || o === zv.BOTTOM) {
                                const e = (d - c) / 2,
                                    t = l - e,
                                    o = s + e,
                                    u = Math.max(n + a - t, 0),
                                    _ = Math.max(o + a - r, 0);
                                Object.assign(i, {
                                    left: `calc(50% + ${u-_}px)`
                                })
                            }
                        }
                        return i
                    }), [a, u, o, e, n, t]),
                    p = Ve((() => {
                        const t = {};
                        if (e && i && n) {
                            const {
                                bottom: e
                            } = i.getBoundingClientRect(), {
                                top: n
                            } = u.getBoundingClientRect();
                            if (o === zv.BOTTOM) {
                                const i = e - n - a;
                                isNaN(i) || Object.assign(t, {
                                    top: `${i}px`
                                })
                            }
                        }
                        return t
                    }), [i, a, u, o, e, n]),
                    m = Ve((() => {
                        d((e => {
                            const t = r(r(r({}, e), _()), p());
                            return He(t, e) ? e : t
                        }))
                    }), [_, p]);
                return we((() => (l ? function e() {
                    m(), s.current = requestAnimationFrame(e)
                }() : (cancelAnimationFrame(s.current), m()), () => {
                    cancelAnimationFrame(s.current)
                })), [l, m]), c
            })({
                tooltipEl: null == O ? void 0 : O.current,
                wrappedEl: null == (m = S) ? void 0 : m.current,
                containerEl: null == a ? void 0 : a.current,
                position: l,
                margin: s,
                visible: b && c || f,
                animating: _
            }),
            D = ya("Tooltip_module_tooltip__d9b61844", i, l === zv.LEFT && "Tooltip_module_tooltipLeft__d9b61844"),
            w = xe(gv, {
                visible: C,
                children: xe("span", {
                    id: u,
                    ref: O,
                    style: N,
                    className: D,
                    "aria-hidden": "true",
                    children: n
                })
            }),
            k = Ze(null == t || null == (v = t.props) ? void 0 : v.children),
            M = [w].concat(e(k));
        return Je(t, R, M)
    };

function Zv(e, t, n) {
    return i => {
        var o;
        null != t && null != (o = t.props) && o[e] && t.props[e](i), n(i)
    }
}
var Jv = {
    text: "Text_module_text__705900fc",
    sm: "Text_module_sm__705900fc",
    md: "Text_module_md__705900fc",
    lg: "Text_module_lg__705900fc",
    xl: "Text_module_xl__705900fc",
    bpxxs_fontsm: "Text_module_bpxxs_fontsm__705900fc",
    bpxxs_fontmd: "Text_module_bpxxs_fontmd__705900fc",
    bpxxs_fontlg: "Text_module_bpxxs_fontlg__705900fc",
    bpxxs_fontxl: "Text_module_bpxxs_fontxl__705900fc",
    bpxs_fontsm: "Text_module_bpxs_fontsm__705900fc",
    bpxs_fontmd: "Text_module_bpxs_fontmd__705900fc",
    bpxs_fontlg: "Text_module_bpxs_fontlg__705900fc",
    bpxs_fontxl: "Text_module_bpxs_fontxl__705900fc",
    bpsm_fontsm: "Text_module_bpsm_fontsm__705900fc",
    bpsm_fontmd: "Text_module_bpsm_fontmd__705900fc",
    bpsm_fontlg: "Text_module_bpsm_fontlg__705900fc",
    bpsm_fontxl: "Text_module_bpsm_fontxl__705900fc",
    bpmd_fontsm: "Text_module_bpmd_fontsm__705900fc",
    bpmd_fontmd: "Text_module_bpmd_fontmd__705900fc",
    bpmd_fontlg: "Text_module_bpmd_fontlg__705900fc",
    bpmd_fontxl: "Text_module_bpmd_fontxl__705900fc",
    bplg_fontsm: "Text_module_bplg_fontsm__705900fc",
    bplg_fontmd: "Text_module_bplg_fontmd__705900fc",
    bplg_fontlg: "Text_module_bplg_fontlg__705900fc",
    bplg_fontxl: "Text_module_bplg_fontxl__705900fc",
    bpxl_fontsm: "Text_module_bpxl_fontsm__705900fc",
    bpxl_fontmd: "Text_module_bpxl_fontmd__705900fc",
    bpxl_fontlg: "Text_module_bpxl_fontlg__705900fc",
    bpxl_fontxl: "Text_module_bpxl_fontxl__705900fc",
    bpxxl_fontsm: "Text_module_bpxxl_fontsm__705900fc",
    bpxxl_fontmd: "Text_module_bpxxl_fontmd__705900fc",
    bpxxl_fontlg: "Text_module_bpxxl_fontlg__705900fc",
    bpxxl_fontxl: "Text_module_bpxxl_fontxl__705900fc",
    bold: "Text_module_bold__705900fc",
    normal: "Text_module_normal__705900fc",
    medium: "Text_module_medium__705900fc",
    white: "Text_module_white__705900fc"
};
const Qv = {
        [Zs.SM]: "sm",
        [Zs.MD]: "md",
        [Zs.LG]: "lg",
        [Zs.XL]: "xl"
    },
    ef = {
        [Js.BOLD]: Jv.bold,
        [Js.NORMAL]: Jv.normal,
        [Js.NUM_500]: Jv.medium
    },
    tf = {
        [Qs.WHITE]: Jv.white
    },
    nf = ({
        element: e = "span",
        children: t,
        size: n = Zs.SM,
        sizeMap: i,
        weight: o = Js.BOLD,
        color: r = Qs.CUSTOM,
        className: a = "",
        id: l = "",
        ariaHidden: s = !1,
        role: c,
        containsMarkup: d = !1
    }) => {
        let u = [];
        i ? Object.keys(i).forEach((e => {
            const t = Qv[i[e]];
            u.push(Jv[`bp${e}_font${t}`])
        })) : u.push(Jv[Qv[n]]);
        const _ = {
            className: ya.apply(void 0, [Jv.text].concat(u, [ef[o], tf[r], a])),
            id: l,
            ariaHidden: s,
            role: c
        };
        return d && (_.dangerouslySetInnerHTML = {
            __html: t
        }), Ke(e, _, t)
    },
    of = e => xe(Tv, {
        className: e.classNames,
        href: e.url,
        tabIndex: e.url ? "0" : "-1",
        style: e.style,
        children: xe("img", {
            className: e.imgClassNames,
            src: e.img,
            alt: e.imgAlt
        })
    });
var rf = {
    roundedBox: "shared_module_roundedBox__fd03e359",
    hidden: "shared_module_hidden__fd03e359",
    focusable: "shared_module_focusable__fd03e359",
    focusableButton: "shared_module_focusableButton__fd03e359",
    focusableCircle: "shared_module_focusableCircle__fd03e359",
    focusableMarker: "shared_module_focusableMarker__fd03e359",
    visuallyHidden: "shared_module_visuallyHidden__fd03e359"
};
const af = ["children", "className", "color", "size", "focusable", "icon", "iconPosition", "iconSize", "type", "style", "tabIndex"],
    lf = {
        [zs.PRIMARY]: "Button_module_primary__779846a6",
        [zs.ALTERNATIVE]: "Button_module_alternative__779846a6"
    },
    sf = {
        [qs.MD]: "Button_module_md__779846a6",
        [qs.SM]: "Button_module_sm__779846a6",
        [qs.XS]: "Button_module_xs__779846a6"
    },
    cf = {
        [qs.MD]: "Button_module_iconMd__779846a6",
        [qs.SM]: "Button_module_iconSm__779846a6"
    },
    df = $e(((e, t) => {
        let {
            children: n,
            className: i,
            color: o = zs.CUSTOM,
            size: a = qs.CUSTOM,
            focusable: l = !0,
            icon: s,
            iconPosition: c = js.LEFT,
            iconSize: d = qs.CUSTOM,
            type: u,
            style: _ = {},
            tabIndex: p = 0
        } = e, v = m(e, af);
        const f = ya("Button_module_button__779846a6", l && rf.focusable, lf[o], sf[a], s && "Button_module_icon__779846a6", s && cf[d], ea.EXCLUDE_GLOBAL_BUTTON_STYLES, i);
        return xe("button", r(r({
            className: f,
            ref: t,
            type: u || Xs.BUTTON,
            style: _,
            tabIndex: p
        }, v), {}, {
            children: [c === js.LEFT && s, n && xe("span", {
                className: "Button_module_buttonChildren__779846a6",
                children: n
            }), c === js.RIGHT && s]
        }))
    }));
const uf = ["Shift", "Tab"],
    _f = o.iOS ? "SearchInput_module_mobileSafari__8bd10fbf" : "",
    pf = $e((({
        onChange: e,
        onEnter: t,
        onSearchIterate: n,
        value: i,
        numSearchResults: o,
        ariaControls: a,
        disabled: l,
        placeholder: s,
        searchItemIterator: c
    }, d) => {
        var u;
        const _ = {
                defaultPlaceholder: "Search",
                clearResults: "Clear Search Results",
                previousResult: "Previous search result",
                nextResult: "Next search result",
                noResults: "No results",
                numberResults: 1 === o ? o + " result" : o + " results"
            },
            [p, m] = ke(!1),
            [v, f] = ke(!1),
            h = Me(null),
            E = i.length > 0,
            g = (() => {
                const [e, t] = ke(!1);
                return op("Shift", (() => {
                    t(!0)
                }), (() => {
                    t(!1)
                })), e
            })();
        let b = s;
        o && p && (b = _.numberResults), !o && i && p && (b = _.noResults);
        const [C, T] = ke(_.nextResult), [y, L] = ke(_.previousResult);
        s = null !== (u = s) && void 0 !== u ? u : _.defaultPlaceholder, we((function() {
            return clearTimeout(h.current), h.current = setTimeout((() => {
                m(!0)
            }), 1e3), () => clearTimeout(h.current)
        }), [i]);
        const A = () => {
                null != d && d.current && (null == d.current.focus || d.current.focus())
            },
            S = () => {
                e && e(""), t && t(""), A()
            },
            I = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = c < o - 1 ? c + 1 : 0, o && T("Result " + (t + 1) + " of " + o), n && n(t)
            },
            O = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = c > 0 ? c - 1 : o - 1, o && L("Result " + (t + 1) + " of " + o), n && n(t)
            },
            P = ya("SearchInput_module_inputForm__8bd10fbf", E && "SearchInput_module_active__8bd10fbf"),
            R = ya("SearchInput_module_searchButton__8bd10fbf", rf.focusableButton),
            N = 0 !== o && Number.isInteger(c) ? `${c+1}/${o}` : "0/0";
        return xe("form", {
            className: P,
            role: "search",
            "data-component-type": "SearchInput",
            "data-focused": `${v}`,
            "data-disabled": `${l}`,
            onReset: () => S(),
            onSubmit: e => {
                e.preventDefault(), t && t(i), g ? O() : I()
            },
            onClick: A,
            children: [!E && xe("div", r(r({
                "data-icon": "search",
                className: "SearchInput_module_searchIcon__8bd10fbf"
            }, va(A)), {}, {
                children: xe(Iv, {
                    name: Cp.SEARCH,
                    "aria-hidden": "true"
                })
            })), xe("input", {
                "aria-live": "polite",
                type: "text",
                ref: d,
                className: _f,
                onFocus: () => f(!0),
                onBlur: () => f(!1),
                onKeyDown: e => {
                    uf.includes(e.key) || e.stopPropagation()
                },
                "aria-controls": a,
                onInput: t => {
                    t.preventDefault(), e && e(t.target.value), m(!1)
                },
                value: i,
                "aria-describedby": "searchResultsStatus",
                disabled: l,
                id: ca.SEARCH_INPUT
            }), !E && xe("label", {
                htmlFor: ca.SEARCH_INPUT,
                className: "SearchInput_module_label__8bd10fbf",
                children: s
            }), i && xe("span", {
                id: "searchResultsStatus",
                "aria-live": "polite",
                className: rf.visuallyHidden,
                children: b
            }), E && xe(ze, {
                children: [Number.isInteger(c) && xe("div", {
                    "data-purpose": "search-item",
                    className: "SearchInput_module_searchItem__8bd10fbf",
                    "aria-hidden": "true",
                    children: N
                }), xe(df, r(r({
                    "aria-live": "polite"
                }, va(O)), {}, {
                    "data-purpose": "decrement-search",
                    "aria-label": y,
                    icon: xe(Iv, {
                        name: Cp.CHEVRON_UP
                    }),
                    iconSize: qs.SM,
                    className: R,
                    disabled: l || !o,
                    onBlur: () => {
                        L(_.previousResult)
                    }
                })), xe(df, r(r({
                    "aria-live": "polite"
                }, va(I)), {}, {
                    "aria-label": C,
                    "data-purpose": "increment-search",
                    icon: xe(Iv, {
                        name: Cp.CHEVRON_DOWN
                    }),
                    iconSize: qs.SM,
                    className: R,
                    disabled: l || !o,
                    onBlur: () => {
                        T(_.nextResult)
                    }
                })), xe(df, r(r({}, va(S)), {}, {
                    "data-icon": "close",
                    "data-purpose": "close",
                    "aria-label": _.clearResults,
                    icon: xe(Iv, {
                        name: Cp.CLOSE_CIRCLE,
                        "data-icon": "close"
                    }),
                    iconSize: qs.SM,
                    type: Xs.RESET,
                    className: R,
                    disabled: l
                }))]
            })]
        })
    }));
const mf = ["className", "size"],
    vf = e => {
        let {
            className: t = "",
            size: n = ec.SM
        } = e, i = m(e, mf);
        const o = ya(Jr.VP_SPIN, n === ec.LG && "Spinner_module_lg__c0a9f13b", n === ec.SM && "Spinner_module_sm__c0a9f13b", t);
        return xe(Iv, r({
            "data-component-type": "spinner",
            name: Cp.SPINNER,
            className: `Spinner_module_spinner__c0a9f13b ${o}`
        }, i))
    };
const ff = ({
    cues: e,
    language: t,
    direction: n,
    className: i,
    fontSize: o,
    fontFamily: l,
    fontOpacity: s,
    color: c,
    windowOpacity: d,
    windowColor: u,
    bgOpacity: _,
    bgColor: p,
    edgeStyle: m,
    height: v,
    style: f = {}
}) => {
    const h = Jc(),
        E = (e, t) => {
            const n = new a(Bm[e] || e);
            return n.alpha = t / 100, n.rgba
        },
        g = r(r(r(r(r({}, {
            fontSize: `${(e=>Math.max(10,Math.round(.045*v*e)))(o)}px`
        }), (() => {
            const e = ((e, t) => h.fontFamily.items.find((e => e.id === t)))(0, l);
            return {
                fontVariant: "small_capitals" === e.id ? "small-caps" : "initial",
                fontFamily: e.value
            }
        })()), {
            color: E(c, s)
        }), (() => {
            const e = "0, 0, 0, " + Number(s) / 100;
            let t;
            switch (m) {
                case "shadow":
                    t = `2px 2px 2px rgba(${e})`;
                    break;
                case "outline":
                    t = `1px 0px 1px rgba(${e}), 0px 1px 1px rgba(${e}), -1px 0px 1px rgba(${e}), 0px -1px 1px rgba(${e})`;
                    break;
                case "raised":
                    t = `rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;
                    break;
                case "depressed":
                    t = `rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;
                    break;
                default:
                    t = "none"
            }
            return {
                textShadow: t
            }
        })()), f),
        b = r({}, {
            backgroundColor: E(u, d)
        }),
        C = r({}, {
            background: E(p, _)
        }),
        T = ya(Jr.VP_CAPTIONS, "CaptionsRenderer_module_captions__f2659eec", i),
        y = (() => {
            let t = [];
            return e.forEach((e => {
                const n = e.html.split(/<br\s?\/?>/i).filter(Boolean);
                t = t.concat(n)
            })), t
        })();
    return xe("div", {
        className: T,
        "aria-live": "assertive",
        lang: t,
        dir: n,
        style: g,
        children: xe("span", {
            className: "CaptionsRenderer_module_captionsWindow__f2659eec",
            style: b,
            children: y.map((e => xe("span", {
                className: "CaptionsRenderer_module_captionsLine__f2659eec",
                style: C,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }, e)))
        })
    })
};
const hf = $e((({
    children: e,
    className: t,
    style: n,
    role: i = "status",
    ariaLabelledby: o
}, r) => xe("div", {
    role: i,
    "aria-labelledby": o,
    className: `ToastBase_module_toast__fb6cbe17 ${t||""}`,
    ref: r,
    style: n,
    children: e
})));
const Ef = () => xe("div", {
    className: "ToastDivider_module_divider__b81b458b"
});
const gf = ["tooltipLabel", "icon", "onClick", "containerRef", "fullToast", "className", "onMouseEnter", "onMouseLeave"],
    bf = e => {
        let {
            tooltipLabel: t,
            icon: n,
            onClick: i,
            containerRef: o,
            fullToast: a,
            className: l,
            onMouseEnter: s,
            onMouseLeave: c
        } = e, d = m(e, gf);
        const u = vv((e => e.appearance.playerBreakpoint)),
            _ = ["xl", "xxl"].includes(u) ? 16 : 8,
            p = ya("ToastButton_module_toastButton__a3f96132", a && "ToastButton_module_fullToast__a3f96132", l);
        return t ? xe(Xv, {
            tooltipContent: t,
            position: zv.BOTTOM,
            containerEl: o,
            margin: _,
            children: xe(df, r({
                color: a ? zs.PRIMARY : zs.ALTERNATIVE,
                icon: n,
                onClick: i,
                onMouseEnter: s,
                onMouseLeave: c,
                className: p
            }, d))
        }) : xe(df, r({
            color: a ? zs.PRIMARY : zs.ALTERNATIVE,
            icon: n,
            onClick: i,
            onMouseEnter: s,
            onMouseLeave: c,
            className: p
        }, d))
    },
    Cf = {
        [Ks.XXS]: Zs.MD,
        [Ks.LG]: Zs.LG,
        [Ks.XXL]: Zs.XL
    },
    Tf = ({
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i
    }) => xe(bf, {
        fullToast: !0,
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        children: xe(nf, {
            sizeMap: Cf,
            children: i
        })
    });
const yf = ({
    transitionTime: e,
    delay: t = 400,
    ariaLabelledby: n
}) => {
    const i = `width ${e-t}ms linear`,
        [o, r] = ke({});
    return we((() => {
        const e = setTimeout((() => {
            r({
                transition: i,
                width: "100%"
            })
        }), t);
        return () => {
            clearTimeout(e)
        }
    }), [r, i, t]), xe("div", {
        className: "ToastProgress_module_progressWrapper__c722ee37",
        role: "progressbar",
        "aria-labelledby": n,
        children: xe("div", {
            className: "ToastProgress_module_progress__c722ee37",
            style: o
        })
    })
};
const Lf = ({
    id: e,
    children: t,
    className: n
}) => {
    const i = ya("ToastMessage_module_label__1715956e", n);
    return xe(nf, {
        id: e,
        weight: Js.NORMAL,
        className: i,
        color: Qs.WHITE,
        sizeMap: {
            [Ks.XXS]: Zs.SM,
            [Ks.SM]: Zs.MD,
            [Ks.XL]: Zs.LG,
            [Ks.XXL]: Zs.XL
        },
        children: t
    })
};
const Af = ({
        onClick: e,
        describedBy: t,
        selected: n
    }) => xe(bf, {
        className: "CloseToastButton_module_close__cfcb6e11 " + (n ? "CloseToastButton_module_selected__cfcb6e11" : ""),
        icon: xe(Iv, {
            name: Cp.DISMISS_X
        }),
        onClick: e,
        "aria-label": "Close",
        "aria-describedby": t
    }),
    Sf = ({
        children: e,
        targetContent: t,
        onContentChange: n = qa,
        delay: i = 250,
        styleOverrides: o,
        fadeIn: r = !0,
        fadeOut: a = !0
    }) => {
        const l = Me(null),
            [s, c] = ke(t),
            d = t !== s,
            u = !d && !!t;
        if (d) {
            const e = d && !s ? 0 : i;
            l.current = function(e, i, o) {
                const r = new Promise((e => setTimeout((() => (c(t), n(t), e(void 0))), o)));
                return e ? e.then((() => r)) : r
            }(l.current, 0, e)
        }
        return xe(gv, {
            fadeIn: r,
            fadeOut: a,
            visible: u,
            duration: i,
            styleOverrides: o,
            children: null == e ? void 0 : e(s)
        })
    };
let If = function(e) {
    return e.LOAD_TIMEOUT = "Load timeout", e
}({});
const Of = 1e3,
    Pf = 100 * Math.random() <= 100,
    Rf = [Dr.PLAYER_LOGIN_SUCCESSFUL, Dr.PLAYER_LOGIN_FAILED, Dr.COMPONENT_VISIBILITY_CHANGE, Dr.APP_BREAKPOINT_CHANGE],
    Nf = e => {
        const {
            id: t,
            url: n,
            title: i,
            visible: o,
            userLoggedIn: a,
            appBreakpoint: l,
            bigPicture: s,
            onIframeLoad: c = qa,
            onError: d = qa,
            onRemoteComponentReady: u = qa,
            waitForReady: _ = !1,
            isAnimating: p = !1,
            timeout: m = Of,
            className: v
        } = e, f = Me(!1), [h, E] = ke(!1), [g, b] = ke(!1), C = Me(oe()), T = Me(null), y = Me(null), L = ya("RemoteComponent_module_remoteComponent__c2722e03", g && "RemoteComponent_module_loaded__c2722e03", v), A = Me(Date.now()), S = Ve((e => {
            f.current = !1, E(!0), d(e)
        }), [d]), I = Ve((() => {
            _ && b(!0), clearTimeout(y.current), u()
        }), [_, u]);
        we((function() {
            T.current && function(e, t, n) {
                const {
                    url: i,
                    onPlay: o = qa,
                    onPause: r = qa,
                    onSeek: a = qa,
                    onClose: l = qa,
                    onRemoteComponentReady: s = qa,
                    onError: c = qa
                } = e, d = _r(i);
                t.configureClient(n.contentWindow, d), t.extendMethods({
                    play: o,
                    pause: r,
                    set currentTime(e) {
                        a(e)
                    },
                    closeRemoteComponent: l,
                    remoteComponentReady: s,
                    reportRemoteComponentError: c
                }), Rf.forEach((function(e) {
                    t.listeners[e] = !0
                }))
            }(r(r({}, e), {}, {
                onRemoteComponentReady: I
            }), C.current, T.current)
        }), []), we((function() {
            clearTimeout(y.current), y.current = setTimeout((() => {
                g || (S({
                    message: If.LOAD_TIMEOUT,
                    code: 408
                }), s.sendEvent(Gl.REMOTE_COMPONENT_TIMEOUT, {
                    component_url: n,
                    component_timeout: m
                }))
            }), m)
        }), [g, m, n, S, s]), we((function() {
            a && C.current.emit(Dr.PLAYER_LOGIN_SUCCESSFUL)
        }), [a]), we((function() {
            o || document.activeElement !== T.current || T.current.blur(), p || C.current.emit(Dr.COMPONENT_VISIBILITY_CHANGE, o)
        }), [o, p]), we((function() {
            C.current.emit(Dr.APP_BREAKPOINT_CHANGE, l)
        }), [l]), we((function() {
            A.current = Date.now()
        }), [n]);
        const O = ya("RemoteComponent_module_spinner__c2722e03", !g && !h && "RemoteComponent_module_visible__c2722e03");
        return xe(ze, {
            children: [xe(vf, {
                className: O
            }), xe("iframe", {
                id: t,
                ref: T,
                onLoad: () => {
                    h || (f.current = !0, c(), Pf && s.sendEvent(Gl.REMOTE_COMPONENT_LOADED, {
                        component_url: n,
                        component_load_time: Date.now() - A.current
                    }), _ || (clearTimeout(y.current), b(!0)))
                },
                title: i,
                src: n,
                className: L
            })]
        })
    },
    Df = ["onPlay", "onPause", "onSeek", "url", "visible"],
    wf = e => {
        const {
            onPlay: t,
            onPause: n,
            onSeek: i,
            url: o,
            visible: a
        } = e, l = m(e, Df), s = vv((e => e.setPlayback)), c = Ap((e => e.bigPicture)), d = vv((e => e.user.loggedIn)), u = vv((e => e.appearance.appBreakpoint)), _ = Ap((e => e.colors.colorOne)), p = Ap((e => e.colors.colorTwo)), v = Ap((e => e.colors.colorThree)), f = Ap((e => e.colors.colorFour)), [h, E] = ke(kf(o, g()));

        function g() {
            return {
                loggedIn: d,
                appBreakpoint: u,
                visible: a,
                colorOne: _,
                colorTwo: p,
                colorThree: v,
                colorFour: f
            }
        }
        return we((function() {
            E(kf(o, g()))
        }), [o]), xe(Nf, r({
            userLoggedIn: d,
            onPlay: () => {
                s("paused", !1), null == t || t()
            },
            onPause: () => {
                s("paused", !0), null == n || n()
            },
            onSeek: e => {
                s("currentTime", e), null == i || i(e)
            },
            appBreakpoint: u,
            url: h,
            visible: a,
            bigPicture: c
        }, l))
    };

function kf(e, t) {
    const i = Object.keys(t).filter((e => void 0 !== t[e])),
        o = Oe(t, i);
    return n(e, o)
}
const Mf = ({
    playerBreakpoint: e
}) => {
    const t = [Ks.XS, Ks.XXS].includes(e),
        n = t ? Cp.VIMEO_SMALL : Cp.VIMEO,
        i = t ? "data-vimeo-small-icon" : "data-vimeo-icon";
    return xe(Iv, {
        name: n,
        "aria-hidden": !0,
        [i]: !0
    })
};
const Vf = ({
    url: e,
    className: t
}) => {
    const n = {
            backgroundImage: `url(${e})`
        },
        i = ya("Image_module_image__2d6414b2", t);
    return xe("div", {
        className: i,
        style: n
    })
};
var Bf = "shared_module_shareTitle__b1d5c277",
    Uf = "shared_module_shareFootnote__b1d5c277";
const xf = ["embedCode", "onClick"],
    Ff = e => {
        let {
            embedCode: t,
            onClick: n
        } = e, i = m(e, xf);
        const [o, a] = ke(!1), l = Me(null);
        return xe(df, r(r({
            onClick: () => {
                a(!0), fa(t), n(), clearTimeout(l.current), l.current = setTimeout((function() {
                    a(!1)
                }), 2e3)
            },
            className: "CopyEmbedCodeButton_module_copyEmbedCodeButton__ac44b4e7"
        }, i), {}, {
            children: o ? "Copied!" : "Copy"
        }))
    },
    Hf = ({
        visible: e
    }) => {
        const t = vv((e => e.embed.allowEmbedShare)),
            n = vv((e => e.embed.embedCode)),
            i = vv((e => e.embed.videoUrl)),
            o = vv((e => e.displayList.outro)),
            r = vv((e => e.embed.embedOnlyShare)),
            a = Ap((e => e.bigPicture)),
            l = Me(null),
            s = {
                title: "Embed",
                subtitle: "Add this video to your site with the embed code below.",
                customize: `<a href="${i}#embed" target="_blank" rel="noopener" aria-describedby="${ta.NEW_WINDOW_DESCRIPTION}">Customize this embed</a> on Vimeo`
            },
            c = ya("EmbedShare_module_embedShareContainer__fb691e4b", r && "EmbedShare_module_embedOnlyShare__fb691e4b", !e && "EmbedShare_module_hidden__fb691e4b"),
            d = Ve((e => {
                const t = o ? "end_screen" : "share_overlay";
                a.sendEvent(Gl.COPY_VIDEO_EMBED_CODE, {
                    location: `player_embed_${t}_${e}`,
                    path: window.location.pathname
                })
            }), [o, a]);
        return we((() => {
            l.current && l.current.setSelectionRange(0, n.length)
        }), [n]), t && xe(Ye, {
            duration: 200,
            alwaysMounted: !0,
            in: e,
            styles: Wf(),
            children: xe("section", {
                className: c,
                children: xe("div", {
                    children: [xe(nf, {
                        element: "h1",
                        color: Qs.WHITE,
                        size: Zs.XL,
                        className: Bf,
                        children: s.title
                    }), xe(nf, {
                        element: "p",
                        color: Qs.WHITE,
                        className: "EmbedShare_module_embedShareSubtitle__fb691e4b",
                        size: Zs.MD,
                        containsMarkup: !0,
                        children: s.subtitle
                    }), xe("div", {
                        className: "EmbedShare_module_embedShareEmbedCode__fb691e4b",
                        children: [xe("div", {
                            children: xe("input", {
                                onClick: e => {
                                    e.currentTarget.select()
                                },
                                onCut: () => d("keyboard"),
                                onCopy: () => d("keyboard"),
                                className: "EmbedShare_module_embedInput__fb691e4b",
                                readOnly: !0,
                                "aria-readonly": "true",
                                value: n,
                                ref: l
                            })
                        }), xe(Ff, {
                            embedCode: n,
                            onClick: () => d("button")
                        })]
                    }), xe(nf, {
                        element: "p",
                        size: Zs.MD,
                        className: `${Uf} EmbedShare_module_shareFootnote__fb691e4b`,
                        containsMarkup: !0,
                        children: s.customize
                    })]
                })
            })
        })
    };

function Wf() {
    const e = {
            transform: "translateX(125%)",
            opacity: 0
        },
        t = {
            transform: "translateX(-17%)",
            opacity: 1
        };
    return {
        enter: r({
            visibility: "hidden"
        }, e),
        enterActive: r({
            transition: "200ms",
            visibility: "visible"
        }, t),
        enterDone: {
            transform: "translateX(-17%)"
        },
        exit: r({}, t),
        exitActive: r(r({}, e), {}, {
            transition: "200ms"
        }),
        exitDone: {
            visibility: "hidden"
        }
    }
}
const Gf = {
        facebook: Cp.FACEBOOK,
        twitter: Cp.TWITTER,
        tumblr: Cp.TUMBLR,
        email: Cp.EMAIL,
        embed: Cp.EMBED
    },
    Yf = {
        facebook: hi,
        twitter: Ei,
        tumblr: gi,
        email: bi,
        embed: ui
    },
    $f = {
        facebook: "Share on Facebook",
        twitter: "Share on Twitter",
        tumblr: "Share on Tumblr",
        email: "Share via Email",
        embed: "Get embed code"
    },
    Kf = $e((({
        destination: e,
        onClick: t
    }, n) => {
        const i = vv((e => e.title.title)),
            o = vv((e => e.title.ownerName)),
            r = vv((e => e.embed.videoUrl)),
            a = vv((e => e.embed.playerShareUrl)),
            l = vv((e => e.embed.videoUnlistedHash)),
            s = vv((e => e.events)),
            c = {
                emailSubject: "Check out “" + i + "” from " + o + " on Vimeo",
                emailBody: "Check out “" + i + "” from " + o + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + vv((e => e.embed.shareUrlWithParams)) + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com."
            },
            d = Ve((e => {
                if ("email" === e) return `mailto:?subject=${encodeURIComponent(c.emailSubject)}&body=${encodeURIComponent(c.emailBody)}`;
                if ("embed" === e) return `${r}#share`;
                const t = Tl(`${a}/${e}`, sl.SHARE);
                return l ? Ol(t, "h", l) : t
            }), [a, l, r, c.emailBody, c.emailSubject]),
            u = Ve((n => {
                n.preventDefault(), s.fire(Yf[e], d(e)), t(e, n.currentTarget.href)
            }), [s, t]);
        return xe(Tv, {
            ref: n,
            className: "SocialShareLink_module_shareButton__5552a811",
            role: "button",
            href: d(e),
            onClick: u,
            ariaLabel: $f[e],
            children: xe(Iv, {
                name: Gf[e]
            })
        })
    }));
var qf = "SocialShare_module_shareButtonItem__8480906e";
const zf = ({
    visible: e,
    onEmbedClick: t
}) => {
    const n = vv((e => e.embed.allowEmbedShare)),
        i = vv((e => e.embed.shareUrl)),
        o = Me(null),
        r = Me(null),
        a = vv((e => e.embed.shareUrlWithParams)),
        l = vv((e => e.bigPicture)),
        s = ya("SocialShare_module_shareButtons__8480906e"),
        c = ya("SocialShare_module_socialShareContainer__8480906e", !e && "SocialShare_module_hidden__8480906e"),
        d = (e, n) => {
            l.sendEvent(Gl.SELECT_PLAYER_SHARE_COMPLETE, {
                ab_group: null
            }, {
                [Yl.WEB]: {
                    target: null,
                    target_path: n,
                    copy: e
                },
                [Yl.PRODUCT_ANALYTICS]: {
                    flow: "share_video",
                    element: "icon",
                    copy: e
                }
            }), "embed" !== e ? "email" !== e ? vr(n, e, {
                width: 600,
                height: 600
            }) : window.top.location = n : null == t || t()
        };
    return xe(Ye, {
        duration: 200,
        alwaysMounted: !0,
        in: e,
        styles: jf(),
        children: xe("section", {
            className: c,
            children: [xe(nf, {
                element: "h1",
                color: Qs.WHITE,
                size: Zs.XL,
                className: Bf,
                children: "Share"
            }), xe("ul", {
                className: s,
                children: [xe("li", {
                    className: qf,
                    children: xe(Kf, {
                        destination: "facebook",
                        onClick: d,
                        ref: o
                    })
                }), xe("li", {
                    className: qf,
                    children: xe(Kf, {
                        destination: "twitter",
                        onClick: d
                    })
                }), xe("li", {
                    className: qf,
                    children: xe(Kf, {
                        destination: "tumblr",
                        onClick: d
                    })
                }), a && xe("li", {
                    className: qf,
                    children: xe(Kf, {
                        destination: "email",
                        onClick: d
                    })
                })]
            }), n && xe("ul", {
                className: s,
                children: xe("li", {
                    className: qf,
                    children: xe(Kf, {
                        onClick: d,
                        destination: "embed",
                        ref: r
                    })
                })
            }), a && xe("p", {
                className: Uf,
                children: xe(Tv, {
                    className: "SocialShare_module_clipUrl__8480906e",
                    href: a,
                    children: i
                })
            })]
        })
    })
};

function jf() {
    const e = {
            transform: "translateX(-125%)",
            opacity: 0
        },
        t = {
            transform: "translateX(0)",
            opacity: 1
        };
    return {
        enter: r({
            visibility: "hidden"
        }, e),
        enterActive: r({
            transition: "200ms",
            visibility: "visible"
        }, t),
        exit: r({}, t),
        exitActive: r(r({}, e), {}, {
            transition: "200ms"
        }),
        exitDone: {
            visibility: "hidden"
        }
    }
}
const Xf = ({
    onEmbedShareVisibilityChange: e
}) => {
    const t = vv((e => e.embed.embedOnlyShare)),
        [n, i] = ke(t),
        o = ya("Share_module_backButton__248d76cb", n && "Share_module_visible__248d76cb");
    return we((function() {
        t !== n && i(t)
    }), [t]), we((function() {
        null == e || e()
    }), [n]), xe(ze, {
        children: [xe("div", {
            className: "Share_module_shareWrapper__248d76cb",
            children: [xe(zf, {
                visible: !n,
                onEmbedClick: () => i(!0)
            }), xe(Hf, {
                visible: n
            })]
        }), !t && xe(df, r(r({
            className: o,
            onClick: () => i(!1),
            "aria-label": "Back",
            tabIndex: n ? 0 : -1
        }, jv), {}, {
            children: xe(Iv, {
                className: "Share_module_backButtonIcon__248d76cb",
                name: Cp.PREVIOUS
            })
        }))]
    })
};
const Zf = {
        enter: {
            opacity: 0,
            animation: "wiggle 300ms linear 1"
        },
        enterActive: {
            opacity: 1,
            transition: "opacity 300ms",
            animation: "wiggle 300ms linear 1"
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: "opacity 300ms"
        },
        exitDone: {
            display: "none"
        }
    },
    Jf = ({
        message: e,
        visible: t,
        wrapperEl: n
    }) => {
        const [i, o] = ke(t), r = n && ur(n);
        return we((() => {
            let e;
            return clearTimeout(e), t ? (o(!0), e = setTimeout((() => {
                o(!1)
            }), 5e3)) : o(!1), () => clearTimeout(e)
        }), [t]), xe(Ye, { in: i,
            styles: Zf,
            children: xe("div", {
                className: "ValidationBubble_module_validationBubble__74475ac4",
                style: {
                    top: (null == r ? void 0 : r.height) + 4 + "px"
                },
                children: xe(nf, {
                    weight: Js.BOLD,
                    className: "ValidationBubble_module_message__74475ac4",
                    children: e
                })
            })
        })
    };
const Qf = () => {
    const e = Ap((e => e.error.title)),
        t = Ap((e => e.error.message));
    return xe("div", {
        className: "Error_module_error__b5478ed7",
        "aria-live": "assertive",
        role: "alert",
        "data-error": !0,
        children: [e && xe(nf, {
            element: "h1",
            className: "Error_module_header__b5478ed7",
            weight: Js.BOLD,
            children: e
        }), t && xe(nf, {
            className: "Error_module_description__b5478ed7",
            weight: Js.NORMAL,
            containsMarkup: !0,
            children: t
        })]
    })
};
const eh = $e(((e, t) => {
    const n = vv((e => e.setOverlay)),
        i = va((e => {
            e.preventDefault(), n("purpose", ka.EMPTY)
        }));
    return xe("button", r(r(r({
        ref: t,
        className: `CloseOverlayButton_module_closeOverlayButton__bc0b3ddc ${rf.focusableButton}`,
        "aria-label": "Close overlay"
    }, jv), i), {}, {
        "data-close-overlay": !0,
        children: xe(Iv, {
            name: Cp.CLOSE
        })
    }))
}));
const th = ({
        children: e,
        visible: t,
        style: n
    }) => {
        const i = Me(null),
            o = Me(null),
            r = vv((e => e.setOverlay)),
            a = vv((e => e.overlay.purpose)),
            l = vv((e => e.overlay.overlayElementsUpdatedCount)),
            s = Ze(e).length > 0,
            {
                onFocus: c,
                focusFirstItem: d
            } = hp({
                parentRef: o,
                isActive: t && s,
                onEscape: () => r("purpose", ka.EMPTY)
            }),
            u = ya("OverlayBase_module_overlay__b0cfa26d", t && "OverlayBase_module_visible__b0cfa26d");
        return we((function() {
            d()
        }), [l]), we((function() {
            !Ma(a) && t && d()
        }), [a, t]), xe("div", {
            ref: o,
            onFocus: c,
            className: "OverlayBase_module_overlayWrapper__b0cfa26d " + (t ? "" : "OverlayBase_module_hidden__b0cfa26d"),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": ta.VP_OVERLAY_LABELLEDBY,
            "data-content-area-sibling-eligible": !0,
            style: n,
            "data-overlay": !0,
            children: [xe("div", {
                className: "OverlayBase_module_overlayCell__b0cfa26d",
                children: xe("div", {
                    className: u,
                    children: e
                })
            }), xe("nav", {
                className: "OverlayBase_module_overlayNav__b0cfa26d",
                children: xe(eh, {
                    ref: i
                })
            })]
        })
    },
    nh = ["label", "icon", "onClick", "className", "children"],
    ih = $e(((e, t) => {
        let {
            label: n,
            icon: i,
            onClick: o,
            className: a = "",
            children: l
        } = e, s = m(e, nh);
        const c = vv((e => e.displayList.sideDock));
        return xe(df, r(r({
            tabIndex: c ? 0 : -1,
            ref: t,
            size: qs.SM,
            color: zs.PRIMARY,
            icon: i,
            iconSize: qs.SM,
            "aria-label": n,
            onClick: o,
            className: a
        }, s), {}, {
            children: l
        }))
    })),
    oh = () => {
        const {
            enabled: e,
            icon: t,
            label: n,
            onSelect: i
        } = yp();
        return e && xe(bv, {
            text: n,
            children: xe(ih, {
                label: n,
                onClick: i,
                icon: xe(Iv, {
                    name: t,
                    focusable: "false"
                })
            })
        })
    },
    rh = () => {
        const e = vv((e => e.user.liked)),
            {
                label: t,
                ariaLabel: n,
                enabled: i,
                icon: o,
                onSelect: r
            } = qp();
        return i && xe(bv, {
            text: t,
            children: xe(ih, {
                label: n,
                className: Qr.LIKE_BUTTON,
                on: e,
                icon: xe(Iv, {
                    name: o,
                    className: Jr.LIKE_ICON,
                    focusable: "false"
                }),
                "data-like-button": !0,
                onClick: r
            })
        })
    };
const ah = () => {
    const {
        label: e,
        icon: t,
        onSelect: n,
        enabled: i
    } = jp();
    return i && xe(bv, {
        text: e,
        children: xe(ih, {
            label: e,
            "data-share-button": !0,
            onClick: n,
            icon: xe(Iv, {
                name: t,
                className: "share-icon ShareButton_module_shareIcon__e4957da4",
                focusable: "false"
            })
        })
    })
};
const lh = () => {
        const e = vv((e => e.vod.purchased)),
            t = vv((e => e.vod.isExpiring)),
            {
                onSelect: n,
                enabled: i,
                icon: o,
                label: a
            } = Xp(),
            l = va(n);
        return i && xe("div", r(r({}, l), {}, {
            className: "VODButton_module_vodButtonContainer__33b65469 " + (t ? "VODButton_module_expiring__33b65469" : ""),
            "data-vod-expiring": t,
            "data-vod-purchased": e,
            "data-vod-button": !0,
            children: xe(df, {
                size: qs.SM,
                color: zs.PRIMARY,
                iconPosition: js.RIGHT,
                className: ya(Qr.VOD_BUTTON, "VODButton_module_vodButton__33b65469"),
                "data-vod-button": !0,
                icon: xe(Iv, {
                    name: o,
                    className: ya("VODButton_module_icon__33b65469"),
                    "data-vod-icon": !0
                }),
                iconSize: qs.SM,
                children: xe("span", {
                    "data-vod-button-label": !0,
                    children: a
                })
            })
        }))
    },
    sh = () => {
        const e = vv((e => e.user.watchLater)),
            {
                enabled: t,
                label: n,
                ariaLabel: i,
                onSelect: o,
                icon: r
            } = Jp();
        return t && xe(bv, {
            text: n,
            children: xe(ih, {
                label: i,
                className: Qr.WATCH_LATER_BUTTON,
                on: e,
                onClick: o,
                icon: xe(Iv, {
                    name: r,
                    className: Jr.WATCH_LATER_ICON,
                    focusable: "false"
                }),
                "data-watch-later-button": !0
            })
        })
    };
var ch = "AIButton_module_button__51e5bbdf";
const dh = () => {
        const [e, t] = ke(!1), [n, i] = ke(!1), o = Me(null), a = vv((e => e.displayList.aiWidget)), l = Me(null), s = Me(!1), {
            label: c,
            onSelect: d,
            enabled: u,
            icon: _
        } = Tp(), p = a ? [ia.AI_WIDGET_ID, ta.RIGHT_CONTENT_AREA].join(" ") : ta.RIGHT_CONTENT_AREA;
        we((() => {
            function e() {
                document.activeElement.id === ia.AI_WIDGET_ID && (s.current = !0)
            }
            return window.addEventListener("blur", e), () => {
                window.removeEventListener("blur", e)
            }
        }), []), op("Tab", (e => {
            const t = document.activeElement === document.body;
            var n;
            s.current && t && (e.preventDefault(), s.current = !1, null == (n = l.current) || n.focus())
        }));
        const m = () => {
                clearTimeout(o.current), t(!1), i(!0)
            },
            v = () => {
                clearTimeout(o.current), i(!1), t(!0), o.current = setTimeout((function() {
                    t(!1)
                }), 420)
            },
            f = ya(ch, n && "AIButton_module_transitionIn__51e5bbdf", e && "AIButton_module_transitionOut__51e5bbdf"),
            h = {
                backgroundColor: "rgb(0,0,0,0.9)",
                transitionProperty: n || e ? "background-position" : "none"
            };
        return u && xe(ze, {
            children: [xe("style", {
                children: `\n                    .${ch} {\n                        --shimmer-speed-in: 450ms;\n                        --shimmer-speed-out: 420ms;\n                    }\n                `
            }), xe(bv, {
                text: c,
                children: xe(ih, r({
                    label: c,
                    "data-ai-button": !0,
                    onClick: d,
                    ref: l,
                    className: f,
                    "aria-expanded": a,
                    "aria-controls": p,
                    "aria-haspopup": "true",
                    onFocus: m,
                    onBlur: v,
                    onPointerEnter: e => {
                        "mouse" === e.pointerType && m()
                    },
                    onPointerLeave: e => {
                        "mouse" === e.pointerType && v()
                    },
                    style: h,
                    icon: xe(Iv, {
                        fill: "#fff",
                        name: _,
                        focusable: "false",
                        className: "AIButton_module_icon__51e5bbdf"
                    })
                }, jv))
            })]
        })
    },
    uh = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n
    }) => {
        const i = em(),
            o = "More options",
            r = Object.keys(i).filter((e => i[e].enabled)).map((e => {
                const t = i[e];
                return {
                    id: e,
                    label: t.label,
                    icon: t.icon
                }
            }));
        return xe(Dv, {
            type: Z_.SIDEDOCK,
            ariaLabel: o,
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: J_.SIDEDOCK,
            panelContent: xe(Gv, {
                items: r,
                onSelect: e => {
                    const t = e.currentTarget.dataset.id;
                    (0, i[t].onSelect)(e)
                }
            }),
            headerContent: xe(Vv, {
                title: o,
                onClose: () => t(!1),
                forceModalMenu: !0
            }),
            forceModalMenu: !0,
            buttonRef: n
        })
    },
    _h = $e((({
        onClick: e,
        isMenuDisplayed: t
    }, n) => {
        const i = em(),
            o = "More options";
        return Object.values(i).filter((e => e.enabled)).length ? xe(bv, {
            text: o,
            children: xe(ih, {
                ref: n,
                label: o,
                onClick: e,
                icon: xe(Iv, {
                    name: Cp.VERTICAL_ELLIPSIS,
                    focusable: "false"
                }),
                "aria-haspopup": "dialog",
                ariaExpanded: t
            })
        }) : null
    })),
    ph = () => {
        const e = Me(null),
            t = vv((e => e.displayList.sideDock)),
            n = vv((e => e.appearance.fullscreen)),
            i = vv((e => e.displayList.outro)),
            o = vv((e => e.vod.purchased)),
            a = vv((e => e.displayList.menu)),
            l = vv((e => e.setAppearance)),
            s = vv((e => e.setDisplayList)),
            c = Xp(),
            d = dp(tc.SIDE_DOCK_MENU),
            [u, _] = ke(!1),
            p = e => {
                s("menu", e), _(e)
            };
        a || _(!1);
        const m = {
            className: ya(Jr.VP_SIDEDOCK, "SideDock_module_root__0918b45a", t && "SideDock_module_visible__0918b45a", i && "SideDock_module_outroVisible__0918b45a", n && "SideDock_module_fullscreen__0918b45a"),
            onPointerEnter: () => l("mousedOverSidedock", !0),
            onMouseEnter: () => l("mousedOverSidedock", !0),
            onPointerLeave: () => l("mousedOverSidedock", !1),
            onMouseLeave: () => l("mousedOverSidedock", !1)
        };
        return xe(kv, {
            children: [xe("div", r(r({}, m), {}, {
                "data-sidedock": !0,
                children: [c.enabled && !o && xe(lh, {}), xe(gv, {
                    visible: t,
                    children: xe("div", {
                        className: "SideDock_module_sidedockInner__0918b45a",
                        "data-sidedock-inner": !0,
                        children: d ? xe(_h, {
                            ref: e,
                            onClick: () => p(!0),
                            isMenuDisplayed: u
                        }) : xe(ze, {
                            children: [c.enabled && o && xe(lh, {}), xe(rh, {}), xe(sh, {}), xe(oh, {}), xe(ah, {}), xe(dh, {})]
                        })
                    })
                })]
            })), d && xe(uh, {
                isMenuDisplayed: u,
                setMenuDisplayed: p,
                buttonRef: e
            })]
        })
    };
const mh = Object.entries(Hu).reduce(((e, [t, n]) => (e[n] = Gu[t], e)), {}),
    vh = ({
        max: e = 1,
        timeSeries: t = [],
        debugMarkers: n = []
    }) => {
        const i = t.length,
            o = i < 100 ? 0 : i - 100,
            r = t[o],
            a = t[i - 1],
            l = r ? r.time : 0,
            s = a ? a.time : 0,
            c = t.slice(o).map((t => {
                let n = (t.time - l) / (s - l) * 250,
                    i = 14 - 14 * t.value / e;
                return isNaN(i) && (i = 0), isNaN(n) && (n = 0), `${n},${function(e){return Math.min(Math.max(e,0),14)}(i)}`
            })).join(" ");
        return xe("svg", {
            width: 250,
            height: 14,
            viewBox: "0 0 250 14",
            children: [xe("g", {
                children: xe("polyline", {
                    stroke: "white",
                    fill: "none",
                    points: c
                })
            }), xe("g", {
                children: !!n.length && n.filter((e => e.t >= l && e.t <= s)).map(((e, t) => {
                    let n = (e.t - l) / (s - l) * 250;
                    return isNaN(n) && (n = 0), xe("g", {
                        children: xe("line", {
                            className: "BandwidthSeriesDisplay_module_marker__e795ff85",
                            x1: n,
                            y1: "0",
                            x2: n,
                            y2: 14,
                            strokeWidth: "1",
                            stroke: mh[e.type]
                        })
                    }, `${e.t}-${t}`)
                }))
            })]
        })
    };
const fh = ({
        title: e = "",
        value: t
    }) => xe("div", {
        children: [xe("dt", {
            children: e
        }), xe("dd", {
            children: t
        })]
    }),
    hh = ({
        payloadId: e,
        showSessionId: t
    }) => {
        const n = vv((e => e.debug.codec)),
            i = vv((e => e.debug.isLive)),
            o = vv((e => e.debug.isDash)),
            a = vv((e => e.debug.delivery)),
            l = vv((e => e.debug.resolution)),
            s = vv((e => e.debug.embedSize)),
            c = vv((e => e.playback.drm)),
            d = vv((e => e.playback.drmMode)),
            u = vv((e => e.debug.sessionId)),
            _ = vv((e => e.debug.ecdnVendor)),
            p = vv((e => e.debug.p2pSources)),
            m = vv((e => e.debug.p2pOffload)),
            v = vv((e => e.debug.totalFrames)),
            f = vv((e => e.debug.liveLatency)),
            h = vv((e => e.debug.currentTime)),
            E = vv((e => e.debug.bufferEnd)),
            g = vv((e => e.debug.bufferAhead)),
            b = vv((e => e.debug.bufferTarget)),
            C = vv((e => e.debug.presentationDelay)),
            T = vv((e => e.debug.droppedFrames)),
            y = vv((e => e.debug.vrHeadsetName)),
            L = vv((e => e.debug.liveSessionID)),
            A = vv((e => e.debug.bandwidthKbps)),
            S = vv((e => e.debug.bandwidthMinKbps)),
            I = vv((e => e.debug.bandwidthMaxKbps)),
            O = vv((e => e.debug.separateAudioVideo)),
            P = vv((e => e.debug.bandwidthSeriesData)),
            R = vv((e => e.debug.droppedFramesPercent)),
            N = vv((e => e.debug.clipId)),
            {
                max: D,
                debugMarkers: w,
                timeSeries: k
            } = P;
        return xe("dl", {
            className: "DebugValues_module_values__54d9bb7b",
            children: [N && xe("div", r(r({}, va((() => {
                fa(`${N}`)
            }))), {}, {
                children: [xe("dt", {
                    children: "Clip ID:"
                }), xe("br", {}), xe("dd", {
                    className: "DebugValues_module_clipId__54d9bb7b",
                    children: N
                })]
            })), !!a && xe(fh, {
                title: "Delivery:",
                value: a
            }), !!n && xe(fh, {
                title: "Codec:",
                value: n
            }), !!l && xe(fh, {
                title: "Playing:",
                value: l
            }), !!s && xe(fh, {
                title: "Embed Size:",
                value: s
            }), o && xe(fh, {
                title: "Separate AV:",
                value: `${O}`
            }), (o || i) && xe(fh, {
                title: "Dropped Frames:",
                value: `${T} / ${v} - ${R}`
            }), !!y && xe(fh, {
                title: "VR Hardware:",
                value: y
            }), !!_ && xe(ze, {
                children: [xe(fh, {
                    title: "eCDN Vendor:",
                    value: _
                }), xe(fh, {
                    title: "Peers - P2P Delivery:",
                    value: `${p} - ${m}`
                })]
            }), c && xe(fh, {
                title: "DRM:",
                value: `${c.toString()} / ${d.toString().replace("sd-","")}`
            }), i && xe(ze, {
                children: [!!L && xe(fh, {
                    title: "Live Session ID:",
                    value: L
                }), xe(fh, {
                    title: "Live Latency / Target:",
                    value: `${f} / ${C}`
                })]
            }), xe(fh, {
                title: "Playhead / Buffer End:",
                value: `${h} / ${E}`
            }), !!b && xe(fh, {
                title: "Buffer Ahead / Target:",
                value: `${g} / ${b}`
            }), (o || i) && xe(ze, {
                children: [xe(fh, {
                    title: "Bandwidth:",
                    value: A
                }), xe("div", {
                    className: "DebugValues_module_bandwidthMinMax__54d9bb7b",
                    children: ["(", xe("b", {
                        className: "DebugValues_module_bandwidthMin__54d9bb7b",
                        children: S
                    }), xe("b", {
                        className: "DebugValues_module_bandwidthMax__54d9bb7b",
                        children: I
                    }), ")"]
                }), xe("div", {
                    className: "DebugValues_module_timeSeries__54d9bb7b",
                    children: xe(vh, {
                        max: D,
                        debugMarkers: w,
                        timeSeries: k
                    })
                })]
            }), u && t && xe("div", {
                children: [xe("dt", {
                    children: "Key:"
                }), xe("br", {}), xe("dd", {
                    className: "DebugValues_module_sessionId__54d9bb7b",
                    children: u
                })]
            }), e && xe("div", {
                children: [xe("dt", {
                    children: "Debug Key:"
                }), xe("br", {}), xe("dd", {
                    className: "DebugValues_module_payloadId__54d9bb7b",
                    children: e
                })]
            })]
        })
    };
var Eh = "DebugPanel_module_button__f18a1b0a";
const gh = ["bandwidthSeriesData"];

function bh() {}
let Ch;
const Th = $e((({
    onCopyFailed: e,
    labelResetDelay: t,
    className: n
}, i) => {
    const [o, r] = ke(!1), a = vv((e => e.debug)), {
        bandwidthSeriesData: l
    } = a, s = m(a, gh), c = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (xe) {
                return Promise.reject(xe)
            }
        }
    }((function() {
        const n = {
            version: 2,
            tpl: s,
            mark: l.debugMarkers
        };
        return clearTimeout(Ch),
            function(e) {
                if (e && e.then) return e.then(bh)
            }(function(o, a) {
                try {
                    var l = function() {
                        const o = btoa(JSON.stringify(n));
                        return function(e, t) {
                            return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                        }(fa(o), (function(n) {
                            n ? (r(!0), Ch = setTimeout((() => {
                                clearTimeout(Ch), r(!1)
                            }), t)) : e(), i.current.focus()
                        }))
                    }()
                } catch (xe) {
                    return a()
                }
                return l && l.then ? l.then(void 0, a) : l
            }(0, (function(t) {
                e()
            })))
    }));
    return xe(df, {
        ref: i,
        className: n,
        onClick: c,
        children: o ? "Copied" : "Copy Debug Payload"
    })
}));
let yh;

function Lh() {}
const Ah = ({
        onSendSuccess: e,
        labelResetDelay: t,
        className: n
    }) => {
        const i = vv((e => e.debugCollector)),
            [o, r] = ke(!1),
            [a, l] = ke(!1),
            s = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (xe) {
                        return Promise.reject(xe)
                    }
                }
            }((function() {
                return clearTimeout(yh),
                    function(e) {
                        if (e && e.then) return e.then(Lh)
                    }(function(t, n) {
                        try {
                            var o = function(e, t) {
                                try {
                                    var n = e()
                                } catch (xe) {
                                    return t(xe)
                                }
                                return n && n.then ? n.then(void 0, t) : n
                            }((function() {
                                return function(e, t) {
                                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                                }(i.sendDebugPayload(), (function({
                                    ID: t
                                }) {
                                    e(t), r(!0)
                                }))
                            }), (function() {
                                l(!0)
                            }))
                        } catch (xe) {
                            return n(!0, xe)
                        }
                        return o && o.then ? o.then(n.bind(null, !1), n.bind(null, !0)) : n(!1, o)
                    }(0, (function(e, n) {
                        return yh = setTimeout((() => {
                                clearTimeout(yh), r(!1), l(!1)
                            }), t),
                            function(e, t) {
                                if (e) throw t;
                                return t
                            }(e, n)
                    })))
            }));
        let c = "Send Debug Payload";
        return o ? c = "Sent" : a && (c = "Something Went Wrong"), xe(df, {
            className: n,
            onClick: s,
            children: c
        })
    },
    Sh = () => {
        const e = vv((e => e.appearance.playerBreakpoint)),
            t = vv((e => e.displayList.debugPanel)),
            n = vv((e => e.setDisplayList)),
            i = vv((e => e.debug.isDNTEnabled)),
            o = vv((e => e.debug.hideCloseButton)),
            a = vv((e => e.debug.isCopyDisabled)),
            [l, s] = ke(void 0),
            [c, d] = ke(!1),
            u = Me(null),
            _ = Me(null),
            p = Me(null),
            m = e => n("debugPanel", e),
            v = !o,
            f = !a,
            h = ya("DebugPanel_module_root__f18a1b0a", rf.roundedBox, (e === Ks.XS || e === Ks.XXS) && "DebugPanel_module_smallPlayer__f18a1b0a"),
            {
                onFocus: E
            } = hp({
                parentRef: u,
                isActive: t,
                onEscape: () => {
                    m(!1)
                }
            });
        return t && xe("div", {
            ref: u,
            className: h,
            role: "dialog",
            "aria-label": "Debug log",
            onFocus: E,
            children: [xe(hh, {
                payloadId: l,
                showSessionId: c
            }), f && xe("div", {
                className: "DebugPanel_module_buttonWrapper__f18a1b0a",
                children: [xe(Th, {
                    labelResetDelay: 1500,
                    onCopyFailed: () => d(!0),
                    className: Eh,
                    ref: p
                }), xe(Ah, {
                    labelResetDelay: 1500,
                    onSendSuccess: e => s(e),
                    className: Eh
                })]
            }), v && xe("button", r(r({}, va((() => m(!1)))), {}, {
                className: "DebugPanel_module_closeButton__f18a1b0a",
                "aria-label": "Close stats debug panel",
                ref: _,
                children: xe(Iv, {
                    name: Cp.DISMISS_X
                })
            })), !!i && "No Debug Key available as Do Not Track is enabled."]
        })
    };
const Ih = () => {
    const {
        link: e,
        img: t,
        margin: n,
        width: i,
        height: o,
        name: r,
        id: a
    } = vv((e => e.badge)), l = vv((e => e.setBadge)), s = vv((e => e.displayList.badge)), c = r + " Badge", d = {};
    return n && Object.assign(d, {
        margin: n
    }), xe(gv, {
        visible: s,
        children: xe("div", {
            className: "Badge_module_badge__7943985c",
            style: d,
            "data-badge": !0,
            children: xe(Tv, {
                href: e,
                onClick: () => l("id", a),
                targetBlank: !0,
                className: `Badge_module_badgeLink__7943985c ${rf.focusable}`,
                children: xe("img", {
                    src: t,
                    width: i,
                    height: o,
                    alt: c
                })
            })
        })
    })
};
const Oh = ({
    clip: e,
    is360: t,
    hasHDRNot10Plus: n,
    hasHDR10Plus: i,
    hasDolbyVision: o,
    hasAIContent: r,
    hasSurroundSound: a,
    hasAmbosonic: l,
    channelLayout: s,
    className: c
}) => {
    const d = ya("TitleTags_module_tag__68bba8ae", c);
    return xe("div", {
        className: "TitleTags_module_tagWrapper__68bba8ae",
        children: [e && xe("span", {
            className: d,
            children: "Clip"
        }), t && xe("span", {
            className: d,
            children: l ? "360 ambisonic" : "360"
        }), n && xe("span", {
            className: d,
            children: "HDR"
        }), i && xe("span", {
            className: d,
            children: "HDR10+"
        }), o && xe("span", {
            className: `${d} TitleTags_module_dolbyVisionTag__68bba8ae`,
            children: xe(Iv, {
                name: Cp.DOLBY_VISION
            })
        }), r && xe(Tv, {
            href: "https://help.vimeo.com/hc/en-us/articles/25551485186833/",
            className: `${d} TitleTags_module_aiTag__68bba8ae`,
            "data-ai-content-tag": "true",
            children: "Includes AI"
        }), a && xe("span", {
            className: d,
            children: s
        })]
    })
};
const Ph = () => {
    const e = vv((e => e.title.displayTitle)),
        t = vv((e => e.title.displayPortrait)),
        n = vv((e => e.title.ownerLinkUrl)),
        i = vv((e => e.title.targetBlank)),
        o = vv((e => e.title.portraitImg)),
        a = vv((e => e.title.titleLinkUrl)),
        l = vv((e => e.title.title)),
        s = vv((e => e.title.ownerName)),
        c = vv((e => e.title.is360)),
        d = vv((e => e.title.hasHDR)),
        u = vv((e => e.title.hasHDR10Plus)),
        _ = vv((e => e.title.hasDolbyVision)),
        p = vv((e => e.title.channelLayout)),
        m = vv((e => e.title.bylineLinkUrl)),
        v = vv((e => e.title.displayByline)),
        f = vv((e => e.title.hasAIContent)),
        h = "5.1" === p || "7.1" === p,
        E = p.startsWith("ambisonic"),
        g = vv((e => e.displayList.title)),
        b = vv((e => e.embed.badge)),
        C = vv((e => e.displayList.badge)),
        [T, y] = ke(t && !C),
        L = vv((e => e.playback.isSegmentedPlaybackEnabled)),
        A = vv((e => e.bigPicture)),
        S = {
            is360: c,
            hasHDRNot10Plus: d && !u,
            hasHDR10Plus: u,
            hasDolbyVision: _,
            hasAIContent: f,
            hasSurroundSound: h,
            clip: L
        },
        I = Object.values(S).some(Boolean);
    return we((() => {
        let e;
        return !C && t ? e = setTimeout((() => y(!0)), a_) : y(!1), () => clearTimeout(e)
    }), [C, t]), xe(ze, {
        children: [b && xe(Ih, {}), xe(gv, {
            visible: g,
            children: xe("div", {
                className: `${Jr.VP_TITLE} Title_module_title__296cb5dd`,
                role: "presentation",
                children: xe("header", {
                    className: "Title_module_header__296cb5dd",
                    role: "presentation",
                    children: [T && xe("div", {
                        className: "Title_module_portrait__296cb5dd",
                        children: xe(Tv, {
                            href: n,
                            targetBlank: i,
                            variant: "minimal",
                            className: ya("Title_module_portraitLink__296cb5dd", rf.focusableCircle),
                            tabIndex: g ? 0 : -1,
                            onClick: () => A.sendEvent(Gl.SELECT_PLAYER_PROFILE_PHOTO, {}, {
                                [Yl.WEB]: {
                                    target: "profile page",
                                    target_path: n,
                                    copy: null
                                },
                                [Yl.PRODUCT_ANALYTICS]: {
                                    flow: "profile_page_from_embed_player",
                                    element: "icon",
                                    copy: "portrait"
                                }
                            }),
                            children: xe("img", {
                                src: o,
                                alt: "Link to video owner's profile",
                                width: "60",
                                height: "60",
                                "data-trackClick": St
                            })
                        })
                    }), xe("div", {
                        className: "Title_module_headers__296cb5dd",
                        children: [e && xe("div", {
                            className: "Title_module_titleWrapper__296cb5dd",
                            children: [xe(Tv, {
                                href: a,
                                targetBlank: i,
                                "data-track-click": Lt,
                                variant: "minimal",
                                className: ya("Title_module_titleLink__296cb5dd", rf.focusable),
                                tabIndex: g ? 0 : -1,
                                "aria-labelledby": ra.TITLE_TEXT,
                                onClick: () => A.sendEvent(Gl.SELECT_PLAYER_TITLE, {}, {
                                    [Yl.WEB]: {
                                        target: "viewer home",
                                        target_path: a,
                                        copy: l
                                    },
                                    [Yl.PRODUCT_ANALYTICS]: {
                                        flow: "viewer_home_from_embed_player",
                                        element: "button",
                                        copy: "title"
                                    }
                                })
                            }), xe("div", {
                                className: "Title_module_textAndTagsWrapper__296cb5dd",
                                "data-title-tags": !!I || void 0,
                                children: [xe(nf, {
                                    id: ra.TITLE_TEXT,
                                    className: ya("Title_module_titleText__296cb5dd"),
                                    children: l
                                }), xe(Oh, r(r({}, S), {}, {
                                    hasAmbosonic: E,
                                    channelLayout: p,
                                    className: "Title_module_titleTag__296cb5dd"
                                }))]
                            })]
                        }), v && xe(Tv, {
                            href: m,
                            targetBlank: i,
                            variant: "minimal",
                            className: ya("Title_module_subtitle__296cb5dd", rf.focusable),
                            tabIndex: g ? 0 : -1,
                            onClick: () => A.sendEvent(Gl.SELECT_PLAYER_BYLINE, {}, {
                                [Yl.WEB]: {
                                    target: "profile page",
                                    target_path: m,
                                    copy: s
                                },
                                [Yl.PRODUCT_ANALYTICS]: {
                                    flow: "profile_page_from_embed_player",
                                    element: "button",
                                    copy: "byline"
                                }
                            }),
                            children: xe(nf, {
                                children: s
                            })
                        })]
                    })]
                })
            })
        })]
    })
};
var Rh = "Card_module_text__449914f1";
const Nh = ({
    id: e,
    timecode: t,
    className: n,
    teaser: i,
    url: o,
    imageUrl: r,
    headline: a,
    inView: l
}) => {
    const s = vv((e => e.appearance.isVerticalVideo)),
        c = vv((e => e.setCards)),
        d = vv((e => e.setPlayback)),
        u = () => {
            c("hoveredCard", null), c("cardPressed", e), o && d("paused", !0)
        },
        _ = ya("Card_module_card__449914f1", n, l && "Card_module_active__449914f1", r && "Card_module_hasThumbnail__449914f1", s && "Card_module_vertical__449914f1");
    return xe("div", {
        className: _,
        onMouseEnter: () => c("hoveredCard", t),
        onMouseLeave: () => c("hoveredCard", null),
        onClick: u,
        onKeyUp: e => {
            "Enter" === e.key && u()
        },
        role: "link",
        tabIndex: -1,
        "aria-hidden": !l,
        children: xe(Tv, {
            href: o,
            className: "Card_module_inner__449914f1",
            tabIndex: l ? 0 : -1,
            children: [!!r && xe("div", {
                className: "Card_module_imageWrap__449914f1",
                children: xe("img", {
                    className: "Card_module_image__449914f1",
                    src: r,
                    alt: ""
                })
            }), xe("div", {
                className: "Card_module_body__449914f1",
                children: [xe(nf, {
                    size: Zs.MD,
                    className: ya(Rh, "Card_module_title__449914f1"),
                    color: Qs.WHITE,
                    children: a
                }), !!i && xe(nf, {
                    weight: Js.NORMAL,
                    element: "p",
                    className: `${Rh} Card_module_detail__449914f1`,
                    color: Qs.WHITE,
                    children: i
                })]
            }), !!o && xe("div", {
                className: "Card_module_popOutWrapper__449914f1",
                children: xe(Iv, {
                    name: Cp.POP_OUT,
                    className: "Card_module_popOut__449914f1"
                })
            })]
        })
    })
};
const Dh = () => {
    const e = vv((e => e.cards.cardsMap)),
        t = vv((e => e.cards.displayedCard)),
        n = vv((e => e.displayList.cards)),
        i = vv((e => e.displayList.fullPlayerElement)),
        o = e => t === e && !i;
    return n && xe("div", {
        className: "Cards_module_cardsWrapper__9492d3ed",
        children: e.values().map((e => xe(Nh, {
            id: e.id,
            timecode: e.timecode,
            className: e.className,
            teaser: e.teaser,
            url: e.url,
            imageUrl: e.imageUrl,
            headline: e.headline,
            inView: o(e.timecode)
        }, e.id)))
    })
};
const wh = ({
    show: e
}) => {
    const {
        buffering: t,
        currentTime: n,
        loadedTime: i,
        currentFragment: o
    } = vv((e => e.playback)), r = Ia(n, o), a = Ia(i, o);
    return e && xe("div", {
        className: "TinyProgressBar_module_tinyBar__71fa705b",
        children: xe("svg", {
            className: "TinyProgressBar_module_tinyBarSVG__71fa705b",
            width: "100%",
            height: "100%",
            viewBox: "0 0 70 40",
            focusable: "false",
            children: [xe("defs", {
                children: [xe("clipPath", {
                    id: "rounded-border",
                    children: xe("rect", {
                        height: "100%",
                        width: "100%",
                        x: "0",
                        y: "0",
                        rx: "5"
                    })
                }), xe("pattern", {
                    id: "tiny-buffer",
                    "data-tiny-buffer-pattern": !0,
                    className: "TinyProgressBar_module_bufferPattern__71fa705b",
                    patternUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    children: [xe("line", {
                        x1: "5",
                        y1: "-1",
                        x2: "-5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), xe("line", {
                        x1: "10",
                        y1: "-1",
                        x2: "0",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), xe("line", {
                        x1: "15",
                        y1: "-1",
                        x2: "5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    })]
                })]
            }), xe("g", {
                clipPath: "url(#rounded-border)",
                children: t ? xe("rect", {
                    className: "TinyProgressBar_module_buffer__71fa705b",
                    height: "3",
                    width: "110%",
                    x: "0",
                    y: "37",
                    fill: "url(#tiny-buffer)"
                }) : xe(ze, {
                    children: [xe("rect", {
                        className: "TinyProgressBar_module_loaded__71fa705b",
                        "data-tiny-loaded": !0,
                        height: "3",
                        width: Oa(a),
                        x: "0",
                        y: "37"
                    }), xe("rect", {
                        className: "TinyProgressBar_module_played__71fa705b",
                        "data-tiny-played": !0,
                        height: "3",
                        width: Oa(r),
                        x: "0",
                        y: "37"
                    })]
                })
            })]
        })
    })
};
var kh = "PlayButton_module_trailer__d1afd73a",
    Mh = "PlayButton_module_progressExpanded__d1afd73a";
const Vh = ({
    className: e,
    controlBarVisibilityHandlers: t
}) => {
    const n = vv((e => e.displayList.controlBar)),
        i = vv((e => e.liveEvent.isLiveEvent)),
        o = vv((e => e.liveEvent.isPlayable)),
        r = vv((e => e.liveEvent.isArchived)),
        a = vv((e => e.liveEvent.isEnded)),
        l = vv((e => e.liveEvent.dvrEnabled)),
        s = vv((e => e.setPlayback)),
        c = vv((e => e.controlBar.trailerButtonText)),
        d = vv((e => e.embed.playbar)),
        u = vv((e => e.appearance.playerSizeMode)),
        _ = vv((e => e.controlBar.isExpanded)),
        {
            buttonState: p,
            setButtonState: m
        } = X_(),
        v = ap(),
        f = !i || o || r || l && a,
        h = u === Qa.TINY || !d,
        E = p === il.TRAILER,
        g = {
            [il.PLAY]: {
                icon: Cp.PLAY,
                onClick: () => {
                    s("paused", !1), m(il.PAUSE)
                },
                label: "Play",
                className: "PlayButton_module_playIcon__d1afd73a"
            },
            [il.PAUSE]: {
                icon: Cp.PAUSE,
                onClick: () => {
                    s("paused", !0), m(il.PLAY)
                },
                label: "Pause",
                className: "PlayButton_module_pauseIcon__d1afd73a"
            },
            [il.REPLAY]: {
                icon: Cp.REPLAY,
                onClick: () => {
                    s("paused", !1), m(il.PAUSE)
                },
                label: "Replay",
                className: "PlayButton_module_replayIcon__d1afd73a"
            },
            [il.TRAILER]: {
                icon: Cp.PLAY,
                onClick: () => {
                    s("paused", !1)
                },
                label: "Play",
                className: "PlayButton_module_trailerIcon__d1afd73a"
            }
        }[p],
        b = v === rp.CENTER,
        C = ya("PlayButton_module_playButtonWrapper__d1afd73a", b && "PlayButton_module_center__d1afd73a", E && kh, _ && !b && Mh),
        T = ya("PlayButton_module_playButton__d1afd73a", E && kh, rf.focusable, _ && !b && Mh, e);
    return f && xe(gv, {
        visible: n,
        children: xe("div", {
            className: C,
            children: xe(Xv, {
                id: "play-button-tooltip",
                tooltipContent: g.label,
                className: "Tooltip_module_playTooltip__d9b61844 " + (E ? "Tooltip_module_trailerPlayTooltip__d9b61844" : ""),
                children: xe(df, {
                    className: T,
                    onClick: g.onClick,
                    icon: xe(Iv, {
                        className: g.className,
                        name: g.icon
                    }),
                    onTouchStart: t.onTouchStart,
                    onTouchEnd: t.onTouchEnd,
                    onMouseEnter: t.onMouseEnter,
                    onMouseLeave: t.onMouseLeave,
                    "data-play-button": !0,
                    children: [xe(wh, {
                        show: h
                    }), E && xe("span", {
                        className: "PlayButton_module_text__d1afd73a",
                        children: c || "Watch Trailer"
                    })]
                })
            })
        })
    })
};
var Bh = "ControlBarButton_module_controlBarButton__179d9b92";
const Uh = e => {
        const t = vv((e => e.displayList.menu));
        return (o.touch || t) && Object.assign(e, {
            visible: !1
        }), xe(Xv, r({}, e))
    },
    xh = ["className", "icon", "children", "tooltipLabel", "hasTooltip", "animating", "id"],
    Fh = $e(((e, t) => {
        let {
            className: n = "",
            icon: i,
            children: o,
            tooltipLabel: a,
            hasTooltip: l = !0,
            animating: s = !1,
            id: c
        } = e, d = m(e, xh);
        const u = vv((e => e.appearance.playerBreakpoint)),
            _ = vv((e => e.displayList.controlBarButtons)),
            p = ya(Bh, rf.focusable, n),
            v = ["xl", "xxl"].includes(u) ? 16 : 8,
            f = _ ? 0 : -1;
        return l ? xe(Uh, {
            id: c ? `${c}-tooltip` : null,
            tooltipContent: a,
            margin: v,
            animating: s,
            children: xe(df, r(r({
                id: c,
                ref: t,
                className: p,
                icon: i,
                tabIndex: f
            }, d), {}, {
                children: o
            }))
        }) : xe(df, r({
            ref: t,
            className: p,
            icon: i,
            tabIndex: f
        }, d))
    }));
const Hh = ({
    onFocus: e,
    ariaHidden: t
}) => {
    const n = vv((e => e.appearance.fullscreen)),
        i = vv((e => e.setAppearance)),
        o = ya(Jr.FULLSCREEN, "FullscreenButton_module_fullscreen__81b38f0e"),
        r = n ? "Exit full screen" : "Fullscreen",
        a = n ? Cp.EXIT_FULLSCREEN : Cp.ENTER_FULLSCREEN;
    return xe(Fh, {
        id: la.FULLSCREEN,
        onClick: () => i("fullscreen", !n),
        onFocus: e,
        className: o,
        icon: xe(Iv, {
            name: a
        }),
        tooltipLabel: r,
        "data-fullscreen-button": !0,
        "aria-hidden": t
    })
};
const Wh = $e((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const r = vv((e => e.appearance.isMenuBlockingUI)),
            {
                onClick: a,
                onKeyDown: l,
                onMouseDown: s
            } = j_((() => t(!e)));
        return xe(Fh, {
            id: la.PREFS,
            ref: o,
            className: `${Qr.VP_PREFS} PrefsButton_module_prefsButton__cdff1984`,
            "aria-expanded": e,
            "aria-haspopup": r ? "dialog" : "true",
            "aria-hidden": i,
            icon: xe(Iv, {
                name: Cp.GEAR,
                className: "PrefsButton_module_gearIcon__cdff1984"
            }),
            onClick: a,
            onKeyDown: l,
            onMouseDown: s,
            onFocus: n,
            tooltipLabel: "Settings",
            "data-prefs-button": !0
        })
    })),
    Gh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = vv((e => e.appearance.pictureInPictureActive)),
            i = vv((e => e.setAppearance)),
            o = n ? "Exit Picture-in-Picture" : "Picture-in-Picture",
            r = n ? Cp.EXIT_PICTURE_IN_PICTURE : Cp.ENTER_PICTURE_IN_PICTURE;
        return xe(Fh, {
            id: la.PIP,
            className: Qr.PIP,
            icon: xe(Iv, {
                name: r
            }),
            onClick: () => i("pictureInPictureActive", !n),
            onFocus: e,
            tooltipLabel: o,
            "data-pip-button": !0,
            "aria-hidden": t
        })
    },
    Yh = $e((({
        onFocus: e,
        ariaHidden: t
    }, n) => {
        const i = vv((e => e.playback.volume)),
            o = vv((e => e.playback.muted)),
            r = o ? "Unmute" : "Mute",
            {
                toggleMuted: a
            } = lp();
        return xe(Fh, {
            ref: n,
            onClick: a,
            onFocus: e,
            icon: xe(Iv, !o && i > 0 ? {
                name: Cp.VOLUME_ON_FILLED,
                "data-volume-icon": !0
            } : {
                name: Cp.VOLUME_OFF_FILLED,
                "data-volume-muted-icon": !0
            }),
            "aria-label": r,
            "aria-hidden": t,
            "aria-keyshortcuts": "m",
            "data-volume-button": !0,
            hasTooltip: !1
        })
    }));
const $h = () => {
        const e = vv((e => e.controlBar.vimeoLogoUrl)),
            t = vv((e => e.appearance.playerBreakpoint)),
            n = vv((e => e.bigPicture));
        return xe(Tv, {
            className: ya("VimeoLogoLink_module_vimeoLogo__7428a3b3", rf.focusable),
            href: e,
            "data-vimeo-logo": !0,
            "aria-label": "Watch on Vimeo",
            onClick: () => {
                n.sendEvent(Gl.SELECT_PLAYER_VIMEO_LOGO, {}, {
                    [Yl.WEB]: {
                        target: "vimeo.com",
                        target_path: e,
                        copy: "vimeo"
                    },
                    [Yl.PRODUCT_ANALYTICS]: {
                        flow: "viewer_home_from_embed_player",
                        element: "icon",
                        copy: "vimeo"
                    }
                })
            },
            children: xe(Mf, {
                playerBreakpoint: t
            })
        })
    },
    Kh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = vv((e => e.appearance.showAirPlayPicker)),
            i = vv((e => e.setAppearance));
        return xe(Fh, {
            onClick: () => i("showAirPlayPicker", !n),
            onFocus: e,
            "aria-label": n ? "Turn off AirPlay" : "Choose an AirPlay device",
            "aria-hidden": t,
            tooltipLabel: "AirPlay",
            "data-airplay-button": !0,
            icon: xe(Iv, {
                name: Cp.AIRPLAY
            })
        })
    },
    qh = $e((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const r = vv((e => e.appearance.isMenuBlockingUI)),
            {
                onClick: a,
                onKeyDown: l,
                onMouseDown: s
            } = j_((() => t(!e)));
        return xe(Fh, {
            ref: o,
            onClick: a,
            onKeyDown: l,
            onMouseDown: s,
            onFocus: n,
            "aria-expanded": e,
            "aria-haspopup": r ? "dialog" : "true",
            "aria-hidden": i,
            icon: xe(Iv, {
                name: Cp.CHAPTERS
            }),
            tooltipLabel: "Chapters",
            "data-chapter-button": !0,
            id: la.CHAPTERS
        })
    })),
    zh = $e((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const a = vv((e => e.embed.flags.new_subtitles_ui)),
            l = vv((e => e.captions.activeTextTrackId)),
            s = vv((e => e.appearance.isMenuBlockingUI)),
            {
                onClick: c,
                onKeyDown: d,
                onMouseDown: u
            } = j_((() => t(!e))),
            _ = l && "off" !== l ? Cp.CC_FILLED : Cp.CC,
            p = {
                "aria-haspopup": s ? "dialog" : "true",
                "aria-expanded": e,
                onKeyDown: d,
                onMouseDown: u
            };
        return xe(Fh, r({
            id: la.CC,
            ref: o,
            className: Jr.CC,
            "aria-hidden": i,
            icon: xe(Iv, {
                name: _
            }),
            onClick: e => {
                a || c(e)
            },
            onFocus: n,
            tooltipLabel: "CC/Subtitles",
            "data-cc-button": !0
        }, !a && p))
    })),
    jh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = vv((e => e.setAppearance)),
            i = vv((e => e.appearance.stereoscopicEnabled)),
            o = i ? "Disable stereoscopic playback" : "Enable stereoscopic playback";
        return xe(Fh, {
            className: Jr.STEREOSCOPIC,
            onClick: () => n("stereoscopicEnabled", !i),
            onFocus: e,
            "aria-label": o,
            "aria-hidden": t,
            icon: xe(Iv, {
                name: Cp.STEREOSCOPIC
            }),
            tooltipLabel: "Stereoscopic",
            "data-stereoscopic-button": !0
        })
    };
const Xh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = ya(ea.EXCLUDE_GLOBAL_BUTTON_STYLES, "ChromecastButton_module_chromecastButton__a2d33bfd", Bh, rf.focusable, Jr.VP_CAST_BUTTON);
        return (() => {
            const [e, t] = ke(!1);
            we((() => {
                setTimeout((() => t(!0)), 500)
            }), [])
        })(), xe(Xv, {
            id: "chromecast-control-bar-button-tooltip",
            tooltipContent: "GoogleCast",
            children: xe("button", {
                className: n,
                is: "google-cast-button",
                "data-chromecast-button": !0,
                onFocus: e,
                "aria-hidden": t
            })
        })
    },
    Zh = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = Ap((e => e.bigPicture)),
            i = vv((e => e.displayList.transcript)),
            o = vv((e => e.toggleDisplayList)),
            r = "Transcript",
            {
                onClick: a,
                onKeyDown: l
            } = j_((() => {
                o("transcript"), n.sendEvent(Gl.EMBEDDED_TRANSCRIPT_CLICK, {
                    name: i ? "exit_embed_transcript" : "open_embed_transcript",
                    copy: r,
                    location: "control_bar",
                    element: "transcript_button",
                    current_transcript_language: ""
                })
            })),
            s = xe(Iv, {
                name: i ? Cp.TRANSCRIPT_ON : Cp.TRANSCRIPT_OFF
            }),
            c = i ? [na.TRANSCRIPT_VIEWER, ta.RIGHT_CONTENT_AREA].join(" ") : ta.RIGHT_CONTENT_AREA;
        return xe(Fh, {
            id: la.TRANSCRIPT,
            onClick: a,
            onKeyDown: l,
            onFocus: e,
            icon: s,
            tooltipLabel: r,
            "aria-controls": c,
            "aria-expanded": i,
            "aria-hidden": t
        })
    };
const Jh = () => {
    const e = vv((e => e.displayList.controlBarButtons)),
        t = vv((e => e.setDisplayList)),
        n = Me(e),
        [i, o] = ke(!1),
        r = vv((e => e.setControlBar));
    we((() => {
        e !== n.current && o(!0), n.current = e
    }), [e]);
    const a = e ? "Hide controls" : "Show controls",
        l = ya("CollapseButton_module_collapseButton__4f243c31", e && "CollapseButton_module_expanded__4f243c31");
    return xe(Fh, {
        id: la.COLLAPSE,
        onClick: () => {
            const n = !e;
            r("shouldRestoreButtonsDisplayed", n), t("controlBarButtons", n)
        },
        onTransitionEnd: e => {
            "transform" === e.propertyName && o(!1)
        },
        tooltipLabel: a,
        animating: i,
        tabIndex: 0,
        icon: xe(Iv, {
            "data-collapse-icon": !0,
            name: Cp.CHEVRON_RIGHT,
            className: l,
            "aria-hidden": "true"
        })
    })
};
var Qh = "CustomLogo_module_progressExpanded__a7229b47";
const eE = ({
        className: e
    }) => {
        const t = vv((e => e.displayList.controlBar)),
            n = vv((e => e.displayList.accessGate)),
            i = vv((e => e.appearance.playerSizeMode)) === Qa.TINY,
            o = vv((e => e.embed.customLogo)),
            r = vv((e => e.displayList.ad)),
            {
                customLogoUrl: a,
                customLogoImg: l,
                customLogoSticky: s
            } = vv((e => e.embed.customLogoFields)),
            c = vv((e => e.user.ownerName)),
            d = vv((e => e.controlBar.isExpanded)),
            u = o && !i && !r,
            _ = !n && (s || t),
            p = ya("CustomLogo_module_customLogo__a7229b47", a ? "CustomLogo_module_link__a7229b47" : "", rf.focusable, e, d && Qh),
            m = ya("CustomLogo_module_customLogoImg__a7229b47", d && Qh);
        return u && xe(gv, {
            visible: !!_,
            children: xe( of , {
                classNames: p,
                imgClassNames: m,
                url: a,
                img: l,
                imgAlt: c
            })
        })
    },
    tE = ({
        className: e,
        marker: t
    }) => {
        const n = vv((e => e.setPlayback)),
            i = vv((e => e.playback.currentFragment)),
            o = (t.startTime - i.startTime) / i.duration * 100,
            r = () => n("currentTime", t.startTime),
            a = "Seek to " + Math.round(100 * t.startTime) / 100 + " seconds.";
        return xe("div", {
            id: `cuepoint-${t.id}`,
            className: e,
            style: {
                left: `${o}%`
            },
            "data-time": t.startTime,
            role: "button",
            "aria-label": a,
            tabIndex: 0,
            onClick: r,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && r()
            },
            "data-cue-point-marker": !0
        })
    };
const nE = () => {
    const e = vv((e => e.playback.currentFragment)),
        t = vv((e => e.cuePoints.cuePoints)),
        n = vv((e => e.displayList.progressBar)),
        i = sm(),
        o = ya("CuePointMarkers_module_cuePoints__cc046812", rf.focusableMarker),
        r = t.filter((t => {
            const n = e.startTime <= t.time && t.time <= e.endTime,
                o = i(t.time);
            return n && o
        })).map((e => ({
            id: e.id,
            startTime: e.time
        }))),
        a = !!r.length && n;
    return xe(ze, {
        children: a && r.map((e => xe(tE, {
            className: o,
            marker: e
        }, e.startTime)))
    })
};
const iE = () => {
    const e = vv((e => e.playback.currentTime)),
        t = vv((e => e.playback.currentFragment)),
        n = vv((e => e.liveEvent.isLiveEvent)),
        i = vv((e => e.liveEvent.isArchived)),
        o = vv((e => e.playback.liveEdgeTime)),
        r = vv((e => e.playback.liveTailTime)),
        a = vv((e => e.playback.atLiveEdge)),
        l = vv((e => e.displayList.progressBar)),
        s = Sa(e, t),
        c = {
            progressBar: "Progress Bar",
            ariaTextVOD: Fa(s) + " of " + Fa(t.duration),
            ariaTextLiveEdge: "Live time at " + Fa(o),
            ariaTextLiveDVR: Fa(Math.abs(o - s)) + " behind Live"
        };
    let d = c.ariaTextVOD,
        u = 0,
        _ = t.duration;
    return n && !i && (d = a ? c.ariaTextLiveEdge : c.ariaTextLiveDVR, u = Math.round(r), _ = Math.round(o)), xe("div", {
        className: `FocusTarget_module_focusTarget__00a969cc ${rf.focusable}`,
        role: "slider",
        "aria-label": c.progressBar,
        "aria-valuemin": u,
        "aria-valuemax": _,
        "aria-valuenow": Math.round(s),
        "aria-valuetext": d,
        tabIndex: l ? 0 : -1,
        "data-progress-bar-focus-target": !0
    })
};
const oE = ({
        marker: e,
        setTabFocused: t,
        setHoverFocused: n
    }) => {
        const i = vv((e => e.setPlayback)),
            o = vv((e => e.playback.currentFragment)),
            r = (e.start - o.startTime) / o.duration,
            a = {
                visibleLabel: e.visibleLabel,
                ariaLabel: e.ariaLabel,
                id: e.id,
                start: e.start,
                left: r
            },
            l = ya("InteractiveMarker_module_interactiveMarker__2cec5fab", rf.focusableMarker);

        function s(t) {
            i("currentTime", e.start, {
                action: t.type,
                seekType: "interactive-marker"
            })
        }
        return xe("div", {
            className: l,
            role: "button",
            style: {
                left: Oa(r, !1)
            },
            "aria-label": e.ariaLabel,
            "data-time": e.start,
            tabIndex: 0,
            onClick: s,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && s(e)
            },
            onMouseEnter: () => n(a),
            onMouseLeave: () => n(null),
            onFocus: () => t(a),
            onBlur: () => t(null),
            "data-hotspot-marker": !0
        })
    },
    rE = ({
        width: t,
        setHoverFocused: n,
        setTabFocused: i
    }) => {
        const o = vv((e => e.playback.currentFragment)),
            r = vv((e => e.interactive.hotspots)),
            a = vv((e => e.interactive.polls)),
            l = vv((e => e.interactive.showMarkers)),
            s = vv((e => e.displayList.progressBar)),
            c = sm(),
            d = function({
                hotspots: t = [],
                polls: n = [],
                fragment: i,
                progressBarWidth: o
            }) {
                const r = function(t, n) {
                    return [].concat(e(t.map((e => ({
                        id: e.hotspotId,
                        label: Hs,
                        start: e.start,
                        visibleLabel: e.name,
                        ariaLabel: e.name,
                        name: e.name
                    })))), e(n.map((e => ({
                        id: e.pollId,
                        label: Ws,
                        name: e.questionText,
                        visibleLabel: e.questionText,
                        ariaLabel: e.questionText,
                        start: e.start
                    })))))
                }(t, n);
                let a, l = 1,
                    s = [],
                    c = [];
                return r.sort(((e, t) => e.start - t.start)).reduce(((e, t) => {
                    let {
                        label: n
                    } = t, r = m(t, Fs);
                    if (!(i.startTime <= r.start && r.start <= i.endTime)) return e;
                    if (n === Hs ? r.visibleLabel = "Hotspot: " + r.name : n === Ws && (r.visibleLabel = "Poll: " + r.name), r.ariaLabel = r.visibleLabel, r.leftPositionInProgressBar = function(e) {
                            return (e - i.startTime) / i.duration * 100
                        }(r.start), n === Ws ? s.push(r.name) : n === Hs && c.push(r.name), !e.length) return function(e, t, n) {
                        return e.push(t), a = n, e
                    }(e, r, n);
                    const d = e.length - 1,
                        u = function(e, t, n, i) {
                            const o = Gs(e, n, i),
                                r = Gs(t, n, i);
                            return Math.floor(r - o)
                        }(e[d].start - i.startTime, r.start - i.startTime, i.duration, o);
                    return !isNaN(u) && u <= 5 ? (l += 1, n !== a ? function(e, t) {
                        a = "Hotspots & Polls", e[t].visibleLabel = "Hotspots & Polls", e[t].name = "Hotspots & Polls", e[t].ariaLabel = c.length + " hotspots: " + c.join(", ") + "; " + s.length + " polls: " + s.join(", ")
                    }(e, d) : n === Hs ? function(e, t, n) {
                        e[t].visibleLabel = l + " hotspots", e[t].name += `, ${n.name}`, e[t].ariaLabel = l + " hotspots: " + e[t].name
                    }(e, d, r) : n === Ws && function(e, t, n) {
                        e[t].visibleLabel = l + " polls", e[t].name += `, ${n.name}`, e[t].ariaLabel = l + " polls: " + e[t].name
                    }(e, d, r)) : isNaN(u) || function(e, t, n) {
                        l = 1, e.push(t), a = n, s = [], c = []
                    }(e, r, n), e
                }), [])
            }({
                hotspots: r,
                polls: a,
                fragment: o,
                progressBarWidth: t
            }).filter((e => c(e.start)));
        return !!d.length && l && xe(ze, {
            children: s && d.map((e => xe(oE, {
                marker: e,
                setTabFocused: i,
                setHoverFocused: n
            }, e.start)))
        })
    };
const aE = ({
        time: e,
        left: t,
        visible: n = !0,
        disabled: i = !1
    }) => xe(gv, {
        visible: n,
        children: xe("div", {
            className: "Timecode_module_timecodeContainer__66300889",
            role: "presentation",
            style: {
                left: t
            },
            "aria-hidden": "true",
            "data-progress-bar-timecode-container": !0,
            children: xe("div", {
                className: "Timecode_module_timecode__66300889 " + (i ? "Timecode_module_disabled__66300889" : ""),
                "data-progress-bar-timecode": !0,
                children: Fa(e)
            })
        })
    }),
    lE = () => {
        const e = vv((e => e.playback.currentTime)),
            t = vv((e => e.playback.liveEdgeTime)),
            n = vv((e => e.playback.liveTailTime)),
            i = vv((e => e.playback.atLiveEdge)),
            o = vv((e => e.playback.currentFragment)),
            r = vv((e => e.playback.playInitiated)),
            a = vv((e => e.playback.paused)),
            l = vv((e => e.playback.buffering)),
            s = vv((e => e.displayList.progressBar)),
            c = vv((e => e.liveEvent.isLiveEvent)),
            d = vv((e => e.liveEvent.dvrEnabled)),
            u = vv((e => e.liveEvent.isEnded)),
            _ = vv((e => e.liveEvent.isArchived)),
            p = c ? t : o.duration,
            m = c && !_ ? 1 : 0;
        let v = p,
            f = m;
        const h = Sa(e, o);
        if (c)
            if (d) {
                if (d) {
                    const a = u && !r && 0 === e,
                        l = _ && 0 !== o.duration;
                    a ? (v = o.duration, f = 0) : l ? (v = e, f = e / o.duration) : i ? (f = 1, v = e) : (f = Da(e, n, t), v = e - t)
                }
            } else _ && (r || 0 !== e) ? (f = Ia(e, o), v = h) : _ ? (v = o.duration, f = m) : (f = 1, v = e);
        else r || 0 !== h ? (f = Ia(e, o), v = h) : (v = p, f = m);
        const E = (!c || _ || d && 0 !== t || !a && !l && 0 !== t) && !isNaN(v) && s;
        return xe(aE, {
            time: v,
            left: Oa(f, !1),
            disabled: c && !d,
            visible: E
        })
    };
var sE = "ThumbnailPreview_module_text__11395132";
const cE = {
        xs: 120,
        md: 160,
        xl: 200
    },
    dE = ({
        visible: e = !1,
        mousePercent: t = 0,
        progressBarWidth: n,
        isMousedOverProgress: i = !1,
        tabOrHoverFocusedMarker: o = null
    }) => {
        const a = vv((e => e.displayList.menu)),
            l = vv((e => e.playback.currentFragment)),
            s = vv((e => e.playback.duration)),
            c = vv((e => e.playback.liveEdgeTime)),
            d = vv((e => e.playback.liveTailTime)),
            u = vv((e => e.liveEvent.isLiveEvent)),
            _ = vv((e => e.liveEvent.dvrEnabled)),
            p = vv((e => e.liveEvent.isArchived)),
            m = vv((e => e.appearance.boundingClientRect)),
            v = vv((e => e.appearance.isVerticalVideo)),
            f = vv((e => e.appearance.playerBreakpoint)),
            h = vv((e => e.verifyConfig)),
            E = vv((e => e.chapters.chapters)),
            g = vv((e => e.embed.chapters)),
            b = vv((e => e.controlBar.thumbnailPreview)),
            C = vv((e => e.playback.isSegmentedPlaybackEnabled)),
            [T, y] = ke({
                width: 0,
                height: 0,
                backgroundImage: "",
                backgroundSize: "",
                backgroundPosition: ""
            }),
            [L, A] = ke(!1),
            S = m.height > 300 && n >= 185,
            I = 0 !== c && !isNaN(c);
        let O = S && !a && (!u || _ && I) && e;
        const [P, R] = ke(0);
        i ? R(t) : o ? R(o.left) : O = !1;
        const N = Pa(P, l);
        let D;
        D = _ ? p && 0 !== l.duration ? Ra(P, l) : ((e, t, n) => Na(e, t, n) - n)(P, d, c) : Ra(P, l), isNaN(D) && (O = !1);
        const w = sm()(N);
        let k = "";
        if (E.length && g && !C) {
            const e = E.find((e => e.startTime <= N && e.endTime >= N));
            k = (null == e ? void 0 : e.text) || ""
        }
        const M = (null == o ? void 0 : o.visibleLabel) || "",
            V = (e => {
                switch (e) {
                    case Ks.XL:
                    case Ks.XXL:
                        return "xl";
                    case Ks.SM:
                    case Ks.MD:
                    case Ks.LG:
                        return "md";
                    default:
                        return "xs"
                }
            })(f),
            B = ((e, t) => cE[e] * (t ? 9 / 16 : 1))(V, v),
            U = B / (null == b ? void 0 : b.frame_width);
        return we((() => {
            !L && S && e && b && h().then((() => Hp(b.url).then((() => {
                A(!0), y({
                    width: b.frame_width * U,
                    height: b.frame_height * U,
                    backgroundImage: `url(${b.url})`,
                    backgroundSize: `${b.width*U}px ${b.height*U}px`,
                    backgroundPosition: ""
                })
            })))).catch((() => {}))
        }), [e, L, S, b, U, h]), we((() => {
            A(!1)
        }), [b]), we((() => {
            b && y((e => r(r({}, e), {}, {
                width: b.frame_width * U,
                height: b.frame_height * U,
                backgroundSize: `${b.width*U}px ${b.height*U}px`
            })))
        }), [f]), we((() => {
            if (b && S) {
                let e = 0,
                    t = 0;
                if (b) {
                    const n = s / b.frames,
                        i = Math.min(b.frames - 1, Math.ceil(N / n)),
                        o = i % b.columns,
                        r = Math.floor(i / b.columns);
                    e = -o * b.frame_width * U, t = -r * b.frame_height * U
                }
                y((n => r(r({}, n), {}, {
                    backgroundPosition: `${e}px ${t}px`
                })))
            }
        }), [P, m, b, S, s, U, N]), xe(gv, {
            visible: O,
            children: xe("div", {
                className: "ThumbnailPreview_module_thumbnailPreview__11395132",
                role: "presentation",
                "aria-hidden": "true",
                style: {
                    left: Oa(P, !1),
                    maxWidth: B
                },
                children: [!!T.backgroundImage && L && w && xe("div", {
                    className: `${Jr.THUMB} ThumbnailPreview_module_thumbnailPreviewImage__11395132`,
                    style: {
                        width: `${T.width}px`,
                        height: `${T.height}px`,
                        backgroundImage: T.backgroundImage,
                        backgroundSize: T.backgroundSize,
                        backgroundPosition: T.backgroundPosition
                    }
                }), xe("div", {
                    className: "ThumbnailPreview_module_thumbnailPreviewText__11395132",
                    children: [M && xe("span", {
                        className: sE,
                        children: M
                    }), M && k && xe("span", {
                        className: "ThumbnailPreview_module_separator__11395132"
                    }), k && xe("span", {
                        className: sE,
                        children: k
                    }), xe("span", {
                        className: "ThumbnailPreview_module_time__11395132",
                        children: Fa(D)
                    })]
                })]
            })
        })
    };
var uE = "ChapterSegment_module_segmentBar__611ea95b",
    _E = "ChapterSegment_module_seekingDisabled__611ea95b";
const pE = ({
    segment: e,
    className: t
}) => {
    const n = vv((e => e.playback.canSeekForward)),
        i = vv((e => e.playback.maxPlayedTime)),
        o = vv((e => e.playback.currentFragment)),
        r = vv((e => e.playback.loadedTime)),
        a = dm(e, n ? r : i),
        l = Oa(a),
        s = ya("LoadedBar_module_loaded__9af6b4fa", o.duration < 60 && "LoadedBar_module_shortVideo__9af6b4fa", t);
    return xe("div", {
        className: s,
        style: {
            width: l
        },
        "data-progress-bar-loaded": !0
    })
};
const mE = ({
        segment: e,
        className: t
    }) => {
        const n = vv((e => e.playback.currentTime)),
            i = vv((e => e.liveEvent.isLiveEvent)),
            o = vv((e => e.liveEvent.dvrEnabled)),
            r = vv((e => e.liveEvent.isArchived)),
            a = i && !o && !r,
            l = dm(e, n),
            s = Oa(a ? 0 : l, !1);
        return xe("div", {
            className: ya("PlayedBar_module_played__a3ef1250", t),
            style: {
                width: s
            },
            "data-progress-bar-played": !0
        })
    },
    vE = ({
        segment: e,
        isExpanded: t
    }) => {
        const n = vv((e => e.playback.canSeekForward)),
            i = vv((e => e.playback.currentFragment)),
            o = vv((e => e.playback.liveEdgeTime)),
            r = vv((e => e.liveEvent.isLiveEvent)),
            a = vv((e => e.liveEvent.dvrEnabled)),
            l = vv((e => e.liveEvent.isArchived)),
            s = r && !l,
            c = 0 !== o && !isNaN(o),
            d = r ? 1 : ((e, t) => (e.endTime - e.startTime) / t.duration)(e, i),
            u = Oa(d, !1),
            _ = s && (!a || !c),
            p = sm()(e.startTime),
            m = ya("ChapterSegment_module_chapterWrapper__611ea95b", _ && "ChapterSegment_module_liveDisabled__611ea95b", !n && _E, t && "ChapterSegment_module_expanded__611ea95b", (_ || !p) && "ChapterSegment_module_hoverDisabled__611ea95b"),
            v = ya("ChapterSegment_module_chapter__611ea95b", !n && _E),
            f = e.startTime === i.startTime ? 0 : 2;
        return xe("div", {
            className: m,
            style: {
                width: `calc(${u} - ${f}px)`
            },
            children: xe("div", {
                className: v,
                children: [xe(pE, {
                    segment: e,
                    className: uE
                }), xe(mE, {
                    segment: e,
                    className: uE
                })]
            })
        })
    };
const fE = ({
    hoveredChapterId: e
}) => {
    const t = vv((e => e.playback.currentFragment)),
        n = vv((e => e.chapters.chapters)),
        i = vv((e => e.embed.chapters)),
        o = vv((e => e.appearance.playerBreakpoint)),
        r = vv((e => e.playback.isSegmentedPlaybackEnabled)),
        a = vv((e => e.controlBar.isExpanded));
    let l;
    return l = o === Ks.XXS || !i || r ? [{
        startTime: t.startTime,
        endTime: t.endTime
    }] : ((e, t) => {
        const n = wa(e, t);
        let i = [];
        return 0 === n.length ? i.push({
            startTime: t.startTime,
            endTime: t.endTime
        }) : n.forEach(((e, o) => {
            let r = e.startTime,
                a = e.endTime;
            0 === o && e.startTime > t.startTime && i.push({
                startTime: t.startTime,
                endTime: e.startTime
            }), 0 === o && e.startTime < t.startTime && (r = t.startTime), o === n.length - 1 && e.endTime > t.endTime && (a = t.endTime), i.push({
                startTime: r,
                endTime: a,
                chapterId: e.startTime
            })
        })), i
    })(n, t), xe("div", {
        className: "ChapterSegments_module_chapterSegmentsWrapper__e2d21102",
        children: l.map((t => xe(vE, {
            segment: t,
            isExpanded: a || t.chapterId === e
        }, t.startTime)))
    })
};
const hE = ({
    hoveredChapterId: e
}) => {
    const t = fv(),
        n = vv((e => e.playback.liveEdgeTime)),
        i = vv((e => e.liveEvent.isLiveEvent)),
        a = vv((e => e.liveEvent.isArchived)),
        l = vv((e => e.liveEvent.dvrEnabled)),
        s = vv((e => e.controlBar.isExpanded)),
        c = vv((e => e.displayList.progressBar)),
        [d, u] = ke(!1),
        [_, p] = ke(!1),
        [m, v] = ke(0),
        [f, h] = ke(null),
        [E, g] = ke(null),
        [b, C] = ke(null),
        T = Me(null),
        y = Me(null),
        L = Me(Aa(null == T ? void 0 : T.current)),
        [A, S] = ke(L.current.rightOffsetValue - L.current.leftOffsetValue);

    function I() {
        const e = Aa(null == T ? void 0 : T.current);
        L.current = e, S(L.current.rightOffsetValue - L.current.leftOffsetValue)
    }
    bp(T, I);
    const {
        startExpandingProgressBar: O,
        endExpandingProgressBar: P,
        onExpandTransitionEnd: R
    } = (() => {
        const e = Me(null),
            t = Me(null),
            n = fv(),
            i = vv((e => e.setControlBar));
        return {
            startExpandingProgressBar: function() {
                clearTimeout(e.current), clearTimeout(t.current), e.current = setTimeout((() => {
                    "expanded" !== n.getState().controlBar.expandedState && i("expandedState", "expanding")
                }), a_)
            },
            endExpandingProgressBar: function() {
                clearTimeout(e.current), clearTimeout(t.current);
                const o = n.getState().controlBar.expandedState;
                "collapsed" !== o && ("expanded" === o ? t.current = setTimeout((() => {
                    i("expandedState", "collapsing")
                }), a_) : i("expandedState", "collapsing"))
            },
            onExpandTransitionEnd: function() {
                const e = n.getState().controlBar.expandedState;
                "expanding" === e ? i("expandedState", "expanded") : "collapsing" === e && i("expandedState", "collapsed")
            }
        }
    })(), {
        startScrub: N,
        continueScrub: D,
        endScrub: w
    } = cm(), k = (e, t = 3) => gr(mr((e - L.current.leftOffsetValue) / (L.current.rightOffsetValue - L.current.leftOffsetValue), 0, 1), t);

    function M(e) {
        const {
            clientX: t
        } = e, n = k(t);
        v(n)
    }

    function V(e) {
        const n = (e => {
                let {
                    clientX: t
                } = e;
                return e.targetTouches && e.targetTouches.length > 0 && (t = e.targetTouches[0].clientX, e.preventDefault()), t
            })(e),
            i = k(n),
            {
                liveEvent: o,
                playback: r
            } = t.getState();
        return !o.dvrEnabled || o.isArchived && 0 !== r.currentFragment.duration ? Pa(i, r.currentFragment) : Na(i, r.liveTailTime, r.liveEdgeTime)
    }

    function B(e) {
        if (2 === (null == e ? void 0 : e.button) || null != e && e.ctrlKey) return;
        const t = V(e);
        if (N(t), "pointerdown" === e.type || "MSPointerDown" === e.type) {
            h(e.pointerId);
            try {
                e.target.msSetPointerCapture ? e.target.msSetPointerCapture(f) : e.target.setPointerCapture(f)
            } catch (xe) {}
            document.addEventListener("pointermove", U), document.addEventListener("pointerup", x)
        } else "touchstart" === e.type ? (document.addEventListener("touchmove", U), document.addEventListener("touchend", x), O()) : (document.addEventListener("mousemove", U), document.addEventListener("mouseup", x))
    }

    function U(e) {
        if (f && f !== e.pointerId || !1 === e.isPrimary) return;
        const t = V(e);
        D(t)
    }

    function x(e) {
        const t = e.type;
        "pointerup" === t || "MSPointerUp" === t ? (document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", x), h(null)) : "touchend" === t ? (document.removeEventListener("touchmove", U), document.removeEventListener("touchend", x), P()) : (document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", x)), w()
    }
    we((() => () => {
        document.removeEventListener("touchmove", U), document.removeEventListener("touchend", x), document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", x)
    }), []);
    let F = {};
    (!i || l && n || a) && (F = o.pointerEvents ? {
        onPointerDown: B
    } : {
        onTouchStart: B,
        onMouseDown: B
    });
    const H = ya("ProgressBar_module_progressBarContainer__8f93bbb9", !c && "ProgressBar_module_progressHidden__8f93bbb9", s && "ProgressBar_module_progressExpanded__8f93bbb9"),
        W = ya(Qr.VP_PROGRESS, "ProgressBar_module_progressBar__8f93bbb9");
    return xe("div", {
        className: H,
        ref: y,
        onTransitionEnd: function(e) {
            e.target === (null == y ? void 0 : y.current) && "flex-shrink" === e.propertyName && R()
        },
        children: xe("div", r(r({
            className: W,
            "data-progress-bar": !0,
            ref: T,
            onMouseEnter: e => {
                I(), M(e), p(!0)
            },
            onMouseMove: e => {
                M(e), u(!1), g(null)
            },
            onMouseLeave: () => p(!1),
            onFocus: () => u(!0),
            onBlur: () => u(!1),
            role: "presentation"
        }, F), {}, {
            children: [xe(iE, {}), xe(fE, {
                hoveredChapterId: e
            }), xe(nE, {}), xe(rE, {
                width: A,
                setTabFocused: g,
                setHoverFocused: C
            }), xe(dE, {
                visible: _ || d,
                mousePercent: m,
                isMousedOverProgress: _,
                progressBarWidth: A,
                tabOrHoverFocusedMarker: E || b
            }), xe(lE, {})]
        }))
    })
};
const EE = ({
    setMenuDisplayed: e
}) => {
    const t = vv((e => e.setDisplayList));
    return xe(df, {
        className: "DebugPanelButton_module_debugPanelButton__9c678770",
        onClick: () => {
            e(!1), t("debugPanel", !0)
        },
        icon: xe(Iv, {
            className: "DebugPanelButton_module_debugPanelButtonIcon__9c678770",
            name: Cp.INFO_CIRCLE
        }),
        color: zs.ALTERNATIVE,
        iconSize: qs.XS,
        "aria-haspopup": "dialog",
        children: xe(nf, {
            size: Zs.SM,
            weight: Js.NORMAL,
            children: "Debug log"
        })
    })
};
const gE = () => {
        const e = vv((e => e.captions.fontSize)),
            t = vv((e => e.captions.fontFamily)),
            n = vv((e => e.captions.fontOpacity)),
            i = vv((e => e.captions.color)),
            o = vv((e => e.captions.bgColor)),
            r = vv((e => e.captions.bgOpacity)),
            a = vv((e => e.captions.windowOpacity)),
            l = vv((e => e.captions.windowColor)),
            s = vv((e => e.captions.edgeStyle)),
            c = vv((e => e.appearance.videoHeight));
        return xe("div", {
            className: "PreviewWindow_module_previewWindow__13200e2c",
            role: "menuitem",
            children: xe("div", {
                className: "PreviewWindow_module_checkeredBackground__13200e2c",
                children: xe(ff, {
                    cues: [{
                        html: "This is a preview\n of a caption"
                    }],
                    fontSize: e,
                    fontFamily: t,
                    fontOpacity: n,
                    color: i,
                    bgColor: o,
                    bgOpacity: r,
                    windowOpacity: a,
                    windowColor: l,
                    edgeStyle: s,
                    height: c
                })
            })
        })
    },
    bE = ({
        setPanel: e
    }) => {
        const t = vv((e => e.appearance.isMenuBlockingUI)),
            n = vv((e => e.appearance.isMenuVerticalVideoMode));
        return (t || n) && xe(ze, {
            children: [xe(Mv, {}), xe(xv, {
                label: "Preview",
                onSelect: () => e(J_.PREVIEW),
                hasPopup: !0
            })]
        })
    };
const CE = ({
        updateMetricsPayload: e
    }) => {
        const t = vv((e => e.resetCaptionsStyles));
        return xe(df, r(r({
            className: `${ea.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__33762fc2 ${rf.focusable}`,
            withActive: !1,
            styled: !1,
            role: "menuitem"
        }, va((() => {
            t(), e({
                has_reset_all: !0,
                final_action_reset_all: !0
            })
        }))), {}, {
            children: xe("span", {
                children: "Reset all"
            })
        }))
    },
    TE = {
        [J_.EMPTY]: () => xe(ze, {}),
        [J_.PREFS]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => {
            var n;
            const i = _m(),
                a = vv((e => e.embed.cc)),
                l = vv((e => e.embed.speedChangeEnabled)),
                s = vv((e => e.embed.multipleAudioTracks)),
                c = vv((e => e.embed.quality)),
                d = vv((e => e.playback.qualities)),
                u = vv((e => {
                    var t;
                    return !(null == (t = e.embed.flags) || !t.new_subtitles_ui)
                })),
                _ = i && a && u,
                p = vv((e => e.playback.currentQuality)),
                m = vv((e => e.playback.playbackRates)),
                v = vv((e => e.playback.audioTracks)),
                f = c && (null == d ? void 0 : d.length) > 0,
                h = s && (null == v ? void 0 : v.length) > 1,
                E = (e = []) => {
                    var t;
                    return null == (t = e.find((e => e.active))) ? void 0 : t.label
                },
                g = E(m),
                b = vv((e => e.captions.activeTextTrackId)),
                C = {
                    quality: {
                        label: "Quality",
                        value: "Auto" === p ? "Auto" : p,
                        onSelect: () => e(J_.QUALITY),
                        hasPopup: !0
                    },
                    speed: {
                        label: "Speed",
                        value: "Normal" === g ? "Normal" : g,
                        onSelect: () => e(J_.SPEED),
                        hasPopup: !0
                    },
                    subtitles: {
                        label: "CC/subtitles",
                        value: null == (n = vv((e => e.captions.textTracks)).find((e => e.id === b))) ? void 0 : n.label,
                        onSelect: () => e(J_.SUBTITLES),
                        hasPopup: !0
                    },
                    audio: {
                        label: "Audio",
                        value: E(v),
                        onSelect: () => e(J_.AUDIO),
                        hasPopup: !0
                    }
                };
            return xe(ze, {
                children: [f && xe(xv, r({}, C.quality)), l && xe(xv, r({}, C.speed)), _ && xe(xv, r({}, C.subtitles)), h && xe(xv, r({}, C.audio)), o.touch && xe(ze, {
                    children: [xe(Mv, {
                        buffer: !0
                    }), xe(EE, {
                        setMenuDisplayed: t
                    })]
                })]
            })
        },
        [J_.QUALITY]: () => {
            const {
                qualities: e
            } = vv((e => e.playback)), t = vv((e => e.setPlayback)), n = e.map((e => r(r({}, e), {}, {
                label: "Auto" === e.label ? "Auto" : e.label
            })));
            return xe(Gv, {
                items: n,
                onSelect: e => t("qualities", e.currentTarget.dataset.id)
            })
        },
        [J_.SPEED]: () => {
            const {
                playbackRates: e
            } = vv((e => e.playback)), t = vv((e => e.setPlayback)), n = e.map((e => r(r({}, e), {}, {
                label: "Normal" === e.label ? "Normal" : e.label
            })));
            return xe(Gv, {
                items: n,
                onSelect: e => t("playbackRates", e.currentTarget.dataset.id)
            })
        },
        [J_.SUBTITLES]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.captions.textTracks)),
                i = vv((e => e.setCaptions)),
                o = {
                    customize: {
                        label: "Customize",
                        onSelect: () => {
                            e(J_.CUSTOMIZE), t({
                                has_clicked_customize: !0
                            })
                        },
                        hasPopup: !0
                    }
                };
            return xe(ze, {
                children: [xe(Gv, {
                    items: n,
                    onSelect: e => {
                        const o = e.currentTarget.dataset.id,
                            r = n.find((e => e.id === o));
                        i("activeTextTrackId", o), t({
                            language_selected: null == r ? void 0 : r.language,
                            language_provenance: (null == r ? void 0 : r.provenance) || null,
                            has_updated_language: !0
                        })
                    }
                }), xe(Mv, {
                    buffer: !0
                }), xe(xv, r({}, o.customize)), xe(bE, {
                    setPanel: e
                })]
            })
        },
        [J_.AUDIO]: () => {
            const e = vv((e => e.playback.audioTracks)),
                t = vv((e => e.setPlayback)),
                n = Ap((e => e.bigPicture)),
                i = Me(!1),
                o = Me(e.find((e => !!e.enabled)));
            return we((() => {
                const e = o.current.label,
                    t = Xl[o.current.provenance];
                return n.sendEvent(Gl.MULTI_AUDIO_TRACK_CLICK, {
                    event_name: "audio_menu_opened",
                    has_selected_track: i.current,
                    initial_track: e,
                    initial_track_provenance: t
                }), () => {
                    n.sendEvent(Gl.MULTI_AUDIO_TRACK_CLICK, {
                        event_name: "audio_menu_closed",
                        has_selected_track: i.current,
                        initial_track: e,
                        initial_track_provenance: t
                    })
                }
            }), [n]), xe(Gv, {
                items: e,
                onSelect: r => {
                    t("audioTracks", r.currentTarget.dataset.id), i.current = !0;
                    const a = e.find((e => e.id === r.currentTarget.dataset.id));
                    n.sendEvent(Gl.MULTI_AUDIO_TRACK_CLICK, {
                        event_name: "select_audio_track",
                        track_selected: a.label,
                        track_selected_provenance: Xl[a.provenance],
                        has_selected_track: i.current,
                        initial_track: o.current.label,
                        initial_track_provenance: Xl[o.current.provenance]
                    })
                }
            })
        },
        [J_.CUSTOMIZE]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = {
                font: {
                    label: "Font",
                    onSelect: () => {
                        e(J_.FONT), t({
                            has_clicked_font: !0
                        })
                    },
                    size: Q_.SMALL,
                    hasPopup: !0
                },
                background: {
                    label: "Background",
                    onSelect: () => {
                        e(J_.BACKGROUND), t({
                            has_clicked_background: !0
                        })
                    },
                    size: Q_.SMALL,
                    hasPopup: !0
                },
                window: {
                    label: "Window",
                    onSelect: () => {
                        e(J_.WINDOW), t({
                            has_clicked_window: !0
                        })
                    },
                    size: Q_.SMALL,
                    hasPopup: !0
                }
            };
            return xe(ze, {
                children: [xe(xv, r({}, n.font)), xe(xv, r({}, n.background)), xe(xv, r({}, n.window)), xe(CE, {
                    updateMetricsPayload: t
                }), xe(bE, {
                    setPanel: e
                })]
            })
        },
        [J_.FONT]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.setCaptions)),
                i = vv((e => e.captions.fontSize)),
                o = vv((e => e.captions.fontFamily)),
                a = vv((e => e.captions.fontOpacity)),
                l = vv((e => e.captions.color)),
                s = vv((e => e.captions.edgeStyle)),
                c = Jc(),
                d = () => t({
                    has_changed_font: !0,
                    final_action_reset_all: !1
                }),
                u = {
                    fontFamily: {
                        label: c.fontFamily.title,
                        items: La(c.fontFamily.items, o),
                        onSelect: e => {
                            n("fontFamily", e.currentTarget.dataset.id), d()
                        },
                        id: sa.FONT_FAMILY_ACCORDION
                    },
                    color: {
                        label: c.color.title,
                        labelId: sa.VP_CC_FONT_COLOR_LABEL,
                        items: La(c.color.items, l),
                        onSelect: e => {
                            n("color", e.currentTarget.dataset.id), d()
                        }
                    },
                    fontSize: {
                        label: c.fontSize.title,
                        labelId: sa.VP_CC_FONT_SIZE_LABEL,
                        items: La(c.fontSize.items, `${i}`),
                        onSelect: e => {
                            n("fontSize", e.currentTarget.dataset.id), d()
                        }
                    },
                    fontOpacity: {
                        label: c.fontOpacity.title,
                        labelId: sa.VP_CC_FONT_OPACITY_LABEL,
                        items: La(c.fontOpacity.items, a),
                        onSelect: e => {
                            n("fontOpacity", e.currentTarget.dataset.id), d()
                        }
                    },
                    edgeStyle: {
                        label: c.edgeStyle.title,
                        labelId: sa.VP_CC_FONT_EDGE_STYLE_LABEL,
                        items: La(c.edgeStyle.items, s),
                        onSelect: e => {
                            n("edgeStyle", e.currentTarget.dataset.id), d()
                        },
                        id: sa.EDGE_STYLE_ACCORDION
                    }
                };
            return xe(ze, {
                children: [xe(Yv, r({}, u.fontFamily)), xe(qv, r({}, u.color)), xe(Kv, r({}, u.fontSize)), xe(Kv, r({}, u.fontOpacity)), xe(Yv, r({}, u.edgeStyle)), xe(CE, {
                    updateMetricsPayload: t
                }), xe(bE, {
                    setPanel: e
                })]
            })
        },
        [J_.BACKGROUND]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.setCaptions)),
                i = vv((e => e.captions.bgColor)),
                o = vv((e => e.captions.bgOpacity)),
                a = Jc(),
                l = () => t({
                    has_changed_background: !0,
                    final_action_reset_all: !1
                }),
                s = {
                    bgColor: {
                        label: a.bgColor.title,
                        labelId: sa.VP_CC_BACKGROUND_COLOR_LABEL,
                        items: La(a.bgColor.items, i),
                        onSelect: e => {
                            n("bgColor", e.currentTarget.dataset.id), l()
                        }
                    },
                    bgOpacity: {
                        label: a.bgOpacity.title,
                        labelId: sa.VP_CC_BACKGROUND_OPACITY_LABEL,
                        items: La(a.bgOpacity.items, o),
                        onSelect: e => {
                            n("bgOpacity", e.currentTarget.dataset.id), l()
                        }
                    }
                };
            return xe(ze, {
                children: [xe(qv, r({}, s.bgColor)), xe(Kv, r({}, s.bgOpacity)), xe(CE, {
                    updateMetricsPayload: t
                }), xe(bE, {
                    setPanel: e
                })]
            })
        },
        [J_.WINDOW]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.setCaptions)),
                i = vv((e => e.captions.windowOpacity)),
                o = vv((e => e.captions.windowColor)),
                a = Jc(),
                l = () => t({
                    has_changed_window: !0,
                    final_action_reset_all: !1
                }),
                s = {
                    windowColor: {
                        label: a.windowColor.title,
                        labelId: sa.VP_CC_WINDOW_COLOR_LABEL,
                        items: La(a.windowColor.items, o),
                        onSelect: e => {
                            n("windowColor", e.currentTarget.dataset.id), l()
                        }
                    },
                    windowOpacity: {
                        label: a.windowOpacity.title,
                        labelId: sa.VP_CC_WINDOW_OPACITY_LABEL,
                        items: La(a.windowOpacity.items, i),
                        onSelect: e => {
                            n("windowOpacity", e.currentTarget.dataset.id), l()
                        }
                    }
                };
            return xe(ze, {
                children: [xe(qv, r({}, s.windowColor)), xe(Kv, r({}, s.windowOpacity)), xe(CE, {
                    updateMetricsPayload: t
                }), xe(bE, {
                    setPanel: e
                })]
            })
        },
        [J_.PREVIEW]: ({
            updateMetricsPayload: e
        }) => xe(ze, {
            children: [xe(gE, {}), xe(CE, {
                updateMetricsPayload: e
            })]
        })
    },
    yE = {
        [J_.EMPTY]: () => xe(ze, {}),
        [J_.QUALITY]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Quality",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.SPEED]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Speed",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.PREFS]: ({
            setMenuDisplayed: e
        }) => vv((e => e.appearance.isMenuBlockingUI)) && xe(Vv, {
            title: "Settings",
            setMenuDisplayed: e
        }),
        [J_.SUBTITLES]: ({
            setMenuDisplayed: e,
            onBack: t
        }) => xe(Vv, {
            title: "CC/subtitles",
            onBack: t,
            setMenuDisplayed: e
        }),
        [J_.AUDIO]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Audio",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.CUSTOMIZE]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Customize",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.FONT]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Font",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.BACKGROUND]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Background",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.WINDOW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Window",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.PREVIEW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Preview",
            onBack: e,
            setMenuDisplayed: t
        })
    },
    LE = J_.PREFS,
    AE = [J_.SUBTITLES, J_.CUSTOMIZE, J_.FONT, J_.BACKGROUND, J_.WINDOW, J_.PREVIEW],
    SE = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i
    }) => {
        const o = vv((e => e.playback.playbackRates)),
            {
                panel: r,
                setPanel: a,
                goToPreviousPanel: l
            } = lm(LE, e),
            s = Me(r),
            c = (e => TE[e] || TE[J_.EMPTY])(r),
            d = (e => yE[e] || yE[J_.EMPTY])(r),
            u = r === J_.SPEED ? o.length : null,
            {
                updateCCMetricsPayload: _,
                sendBPClosedCaptionsClickEvent: p
            } = um();
        return we((() => {
            AE.includes(s.current) && r === LE && p(), s.current = r
        }), [r, p]), xe(Dv, {
            ariaLabel: "Settings",
            type: Z_.PREFS,
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: r,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: rl.PrefsMenu,
            panelContent: xe(c, {
                setPanel: a,
                setMenuDisplayed: t,
                updateMetricsPayload: AE.includes(r) ? _ : void 0
            }),
            headerContent: xe(d, {
                setPanel: a,
                setMenuDisplayed: t,
                onBack: l
            }),
            resizeDependencies: u,
            onBack: l
        })
    },
    IE = ({
        setMenuDisplayed: e
    }) => vv((e => e.appearance.isMenuBlockingUI)) && xe(Vv, {
        title: "Chapters",
        setMenuDisplayed: e
    });
const OE = ({
    linkUrl: e,
    hoverStyles: t,
    chapterId: n,
    ariaDescribedBy: i
}) => {
    const r = Ap((e => e.bigPicture)),
        a = Me(null),
        l = Me(null),
        [s, c] = ke(!1),
        d = ya(o.touch && "CopyLinkButton_module_touchDevice__b24b40c0", "CopyLinkButton_module_copyLinkButton__b24b40c0", t),
        u = () => {
            clearTimeout(a.current), clearTimeout(l.current)
        },
        _ = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (xe) {
                    return Promise.reject(xe)
                }
            }
        }((function(t) {
            return t.preventDefault(), t.stopPropagation(),
                function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(fa(e), (function() {
                    r.sendEvent(Gl.SHARE_CHAPTER, {
                        chapter_id: n
                    }), c(!0), u(), a.current = setTimeout((() => c(!1)), 2e3)
                }))
        }));
    return xe(Xv, {
        id: "copy-link-button-tooltip",
        tooltipContent: s || o.touch ? xe("span", {
            className: "CopyLinkButton_module_linkCopied__b24b40c0",
            children: [xe(Iv, {
                name: Cp.CHECKMARK,
                className: "CopyLinkButton_module_linkCopiedIcon__b24b40c0"
            }), "Link copied"]
        }) : "Copy link",
        visible: s,
        position: zv.LEFT,
        margin: 4,
        preventFocusOnClick: !0,
        children: xe(df, {
            icon: xe("div", {
                className: "CopyLinkButton_module_shareIconContainer__b24b40c0",
                children: xe(Iv, {
                    name: Cp.LINK
                })
            }),
            iconSize: qs.MD,
            className: d,
            onMouseLeave: () => {
                u(), l.current = setTimeout((() => c(!1)), 150)
            },
            onClick: _,
            role: "menuitem",
            "aria-describedby": i
        })
    })
};
var PE = "ChaptersPanelMenuOption_module_active__aad1c14d";
const RE = ({
        startTime: e,
        id: t,
        chapterId: n,
        active: i,
        label: o,
        onMouseEnter: a,
        onMouseLeave: l,
        onSelect: s
    }) => {
        const c = vv((e => e.playback.canSeekForward)),
            d = vv((e => e.embed.parentUrl)),
            u = vv((e => e.chapters.chapterShareBaseUrl)),
            _ = vv((e => e.debug.clipId)),
            p = sm()(e),
            {
                onClick: m,
                onKeyDown: v
            } = j_(s),
            f = ya("ChaptersPanelMenuOption_module_chapterListItem__aad1c14d", i && PE, !p && "ChaptersPanelMenuOption_module_disabled__aad1c14d"),
            h = ya(i && PE, "ChaptersPanelMenuOption_module_chapterListButton__aad1c14d", ea.EXCLUDE_GLOBAL_BUTTON_STYLES),
            E = d ? function(e, t, n) {
                const [i] = n.split("#");
                return `${i}#vimeo_chapter_${e}=${t}`
            }(_, n, d) : function(e, t) {
                if (!t) return "";
                const [n] = t.split("#");
                return `${n}#chapter=${e}`
            }(n, u);
        return xe("div", {
            className: f,
            children: [xe("button", r(r({
                id: t,
                role: "menuitem",
                "data-id": t,
                disabled: !p || null,
                "data-testid": "chapter-list-item-button",
                tabIndex: 0,
                className: h,
                onClick: m,
                onKeyDown: v,
                onMouseEnter: a,
                onMouseLeave: l
            }, jv), {}, {
                children: xe("div", {
                    className: "ChaptersPanelMenuOption_module_chapterInfoContainer__aad1c14d",
                    children: [xe("div", {
                        className: "ChaptersPanelMenuOption_module_chapterTitleText__aad1c14d",
                        children: o
                    }), xe("div", {
                        className: "ChaptersPanelMenuOption_module_chapterStartTime__aad1c14d",
                        children: Fa(e)
                    })]
                })
            })), E && c && xe(OE, {
                linkUrl: E,
                chapterId: n,
                hoverStyles: "ChaptersPanelMenuOption_module_copyLinkButton__aad1c14d",
                ariaDescribedBy: t
            })]
        }, t)
    },
    NE = ({
        setMenuDisplayed: e,
        onMenuOptionMouseEnter: t,
        onMenuOptionMouseLeave: n
    }) => {
        const i = vv((e => e.events)),
            o = vv((e => e.chapters.chapters)),
            r = vv((e => e.chapters.activeCueId)),
            a = Ap((e => e.bigPicture)),
            l = o.map((e => ({
                label: e.text,
                id: e.cueId,
                active: e.cueId === r,
                startTime: e.startTime,
                chapterId: e.chapterId
            })));
        return xe(Gv, {
            items: l,
            onSelect: t => {
                const n = t.currentTarget.dataset.id;
                "string" == typeof n && (i.fire(Gn, parseFloat(n) + .001, "menu"), a.sendEvent(Gl.CHAPTER_SELECTED, {
                    chapter_id: parseInt(n),
                    provenance: null
                })), e(!1)
            },
            onMenuOptionMouseEnter: t,
            onMenuOptionMouseLeave: n,
            itemComponent: RE
        })
    },
    DE = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        onMenuOptionMouseEnter: o,
        onMenuOptionMouseLeave: r
    }) => xe(Dv, {
        ariaLabel: "Chapters",
        type: Z_.CHAPTERS,
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        panel: J_.CHAPTERS,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        panelContent: xe(NE, {
            setMenuDisplayed: t,
            onMenuOptionMouseEnter: o,
            onMenuOptionMouseLeave: r
        }),
        headerContent: xe(IE, {
            setMenuDisplayed: t
        })
    });
const wE = ({
    updateMetricsPayload: e
}) => {
    const t = vv((e => e.resetCaptionsStyles));
    return xe(df, r(r({
        className: `${ea.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__33762fc2 ${rf.focusable}`,
        withActive: !1,
        styled: !1,
        role: "menuitem"
    }, va((() => {
        t(), e({
            has_reset_all: !0,
            final_action_reset_all: !0
        })
    }))), {}, {
        children: xe("span", {
            children: "Reset all"
        })
    }))
};
const kE = () => {
        const e = vv((e => e.captions.fontSize)),
            t = vv((e => e.captions.fontFamily)),
            n = vv((e => e.captions.fontOpacity)),
            i = vv((e => e.captions.color)),
            o = vv((e => e.captions.bgColor)),
            r = vv((e => e.captions.bgOpacity)),
            a = vv((e => e.captions.windowOpacity)),
            l = vv((e => e.captions.windowColor)),
            s = vv((e => e.captions.edgeStyle)),
            c = vv((e => e.appearance.videoHeight));
        return xe("div", {
            className: "PreviewWindow_module_previewWindow__13200e2c",
            role: "menuitem",
            children: xe("div", {
                className: "PreviewWindow_module_checkeredBackground__13200e2c",
                children: xe(ff, {
                    cues: [{
                        html: "This is a preview\n of a caption"
                    }],
                    fontSize: e,
                    fontFamily: t,
                    fontOpacity: n,
                    color: i,
                    bgColor: o,
                    bgOpacity: r,
                    windowOpacity: a,
                    windowColor: l,
                    edgeStyle: s,
                    height: c
                })
            })
        })
    },
    ME = ({
        setPanel: e
    }) => {
        const t = vv((e => e.appearance.isMenuBlockingUI)),
            n = vv((e => e.appearance.isMenuVerticalVideoMode));
        return (t || n) && xe(ze, {
            children: [xe(Mv, {}), xe(xv, {
                label: "Preview",
                onSelect: () => e(J_.PREVIEW),
                hasPopup: !0
            })]
        })
    },
    VE = {
        [J_.EMPTY]: () => xe(ze, {}),
        [J_.LANGUAGES]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.captions.textTracks)),
                i = vv((e => e.setCaptions)),
                o = {
                    customize: {
                        label: "Customize",
                        onSelect: () => {
                            e(J_.CUSTOMIZE), t({
                                has_clicked_customize: !0
                            })
                        },
                        hasPopup: !0
                    }
                };
            return xe(ze, {
                children: [xe(Gv, {
                    items: n,
                    onSelect: e => {
                        const o = e.currentTarget.dataset.id,
                            r = n.find((e => e.id === o));
                        i("activeTextTrackId", o), t({
                            language_selected: null == r ? void 0 : r.language,
                            language_provenance: (null == r ? void 0 : r.provenance) || null,
                            has_updated_language: !0
                        })
                    }
                }), xe(Mv, {
                    buffer: !0
                }), xe(xv, r({}, o.customize)), xe(ME, {
                    setPanel: e
                })]
            })
        },
        [J_.CUSTOMIZE]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = {
                font: {
                    label: "Font",
                    onSelect: () => {
                        e(J_.FONT), t({
                            has_clicked_font: !0
                        })
                    },
                    size: Q_.SMALL,
                    hasPopup: !0
                },
                background: {
                    label: "Background",
                    onSelect: () => {
                        e(J_.BACKGROUND), t({
                            has_clicked_background: !0
                        })
                    },
                    size: Q_.SMALL,
                    hasPopup: !0
                },
                window: {
                    label: "Window",
                    onSelect: () => {
                        e(J_.WINDOW), t({
                            has_clicked_window: !0
                        })
                    },
                    size: Q_.SMALL,
                    hasPopup: !0
                }
            };
            return xe(ze, {
                children: [xe(xv, r({}, n.font)), xe(xv, r({}, n.background)), xe(xv, r({}, n.window)), xe(wE, {
                    updateMetricsPayload: t
                }), xe(ME, {
                    setPanel: e
                })]
            })
        },
        [J_.FONT]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.setCaptions)),
                i = vv((e => e.captions.fontSize)),
                o = vv((e => e.captions.fontFamily)),
                a = vv((e => e.captions.fontOpacity)),
                l = vv((e => e.captions.color)),
                s = vv((e => e.captions.edgeStyle)),
                c = Jc(),
                d = () => t({
                    has_changed_font: !0,
                    final_action_reset_all: !1
                }),
                u = {
                    fontFamily: {
                        label: c.fontFamily.title,
                        items: La(c.fontFamily.items, o),
                        onSelect: e => {
                            n("fontFamily", e.currentTarget.dataset.id), d()
                        },
                        id: sa.FONT_FAMILY_ACCORDION
                    },
                    color: {
                        label: c.color.title,
                        labelId: sa.VP_CC_FONT_COLOR_LABEL,
                        items: La(c.color.items, l),
                        onSelect: e => {
                            n("color", e.currentTarget.dataset.id), d()
                        }
                    },
                    fontSize: {
                        label: c.fontSize.title,
                        labelId: sa.VP_CC_FONT_SIZE_LABEL,
                        items: La(c.fontSize.items, `${i}`),
                        onSelect: e => {
                            n("fontSize", e.currentTarget.dataset.id), d()
                        }
                    },
                    fontOpacity: {
                        label: c.fontOpacity.title,
                        labelId: sa.VP_CC_FONT_OPACITY_LABEL,
                        items: La(c.fontOpacity.items, a),
                        onSelect: e => {
                            n("fontOpacity", e.currentTarget.dataset.id), d()
                        }
                    },
                    edgeStyle: {
                        label: c.edgeStyle.title,
                        labelId: sa.VP_CC_FONT_EDGE_STYLE_LABEL,
                        items: La(c.edgeStyle.items, s),
                        onSelect: e => {
                            n("edgeStyle", e.currentTarget.dataset.id), d()
                        },
                        id: sa.EDGE_STYLE_ACCORDION
                    }
                };
            return xe(ze, {
                children: [xe(Yv, r({}, u.fontFamily)), xe(qv, r({}, u.color)), xe(Kv, r({}, u.fontSize)), xe(Kv, r({}, u.fontOpacity)), xe(Yv, r({}, u.edgeStyle)), xe(wE, {
                    updateMetricsPayload: t
                }), xe(ME, {
                    setPanel: e
                })]
            })
        },
        [J_.BACKGROUND]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.setCaptions)),
                i = vv((e => e.captions.bgColor)),
                o = vv((e => e.captions.bgOpacity)),
                a = Jc(),
                l = () => t({
                    has_changed_background: !0,
                    final_action_reset_all: !1
                }),
                s = {
                    bgColor: {
                        label: a.bgColor.title,
                        labelId: sa.VP_CC_BACKGROUND_COLOR_LABEL,
                        items: La(a.bgColor.items, i),
                        onSelect: e => {
                            n("bgColor", e.currentTarget.dataset.id), l()
                        }
                    },
                    bgOpacity: {
                        label: a.bgOpacity.title,
                        labelId: sa.VP_CC_BACKGROUND_OPACITY_LABEL,
                        items: La(a.bgOpacity.items, o),
                        onSelect: e => {
                            n("bgOpacity", e.currentTarget.dataset.id), l()
                        }
                    }
                };
            return xe(ze, {
                children: [xe(qv, r({}, s.bgColor)), xe(Kv, r({}, s.bgOpacity)), xe(wE, {
                    updateMetricsPayload: t
                }), xe(ME, {
                    setPanel: e
                })]
            })
        },
        [J_.WINDOW]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = vv((e => e.setCaptions)),
                i = vv((e => e.captions.windowOpacity)),
                o = vv((e => e.captions.windowColor)),
                a = Jc(),
                l = () => t({
                    has_changed_window: !0,
                    final_action_reset_all: !1
                }),
                s = {
                    windowColor: {
                        label: a.windowColor.title,
                        labelId: sa.VP_CC_WINDOW_COLOR_LABEL,
                        items: La(a.windowColor.items, o),
                        onSelect: e => {
                            n("windowColor", e.currentTarget.dataset.id), l()
                        }
                    },
                    windowOpacity: {
                        label: a.windowOpacity.title,
                        labelId: sa.VP_CC_WINDOW_OPACITY_LABEL,
                        items: La(a.windowOpacity.items, i),
                        onSelect: e => {
                            n("windowOpacity", e.currentTarget.dataset.id), l()
                        }
                    }
                };
            return xe(ze, {
                children: [xe(qv, r({}, s.windowColor)), xe(Kv, r({}, s.windowOpacity)), xe(wE, {
                    updateMetricsPayload: t
                }), xe(ME, {
                    setPanel: e
                })]
            })
        },
        [J_.PREVIEW]: ({
            updateMetricsPayload: e
        }) => xe(ze, {
            children: [xe(kE, {}), xe(wE, {
                updateMetricsPayload: e
            })]
        })
    },
    BE = {
        [J_.EMPTY]: () => xe(ze, {}),
        [J_.LANGUAGES]: ({
            setMenuDisplayed: e
        }) => vv((e => e.appearance.isMenuBlockingUI)) && xe(Vv, {
            title: "CC/Subtitles",
            setMenuDisplayed: e
        }),
        [J_.CUSTOMIZE]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Customize",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.FONT]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Font",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.BACKGROUND]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Background",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.WINDOW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Window",
            onBack: e,
            setMenuDisplayed: t
        }),
        [J_.PREVIEW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => xe(Vv, {
            title: "Preview",
            onBack: e,
            setMenuDisplayed: t
        })
    },
    UE = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i
    }) => {
        const o = J_.LANGUAGES,
            r = vv((e => e.embed.flags.new_subtitles_ui)),
            {
                panel: a,
                setPanel: l,
                goToPreviousPanel: s
            } = lm(o, e),
            c = (e => VE[e] || VE[J_.EMPTY])(a),
            d = (e => BE[e] || BE[J_.EMPTY])(a),
            {
                sendBPClosedCaptionsClickEvent: u,
                updateCCMetricsPayload: _
            } = um(),
            p = Me(e);
        if (we((() => {
                p.current && !e && u(), p.current = e
            }), [e, u]), !r) return xe(Dv, {
            type: Z_.CC,
            ariaLabel: "CC/Subtitles",
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: a,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: rl.CCMenu,
            onBack: s,
            panelContent: xe(c, {
                setPanel: l,
                setMenuDisplayed: t,
                onBack: s,
                updateMetricsPayload: _
            }),
            headerContent: xe(d, {
                setPanel: l,
                setMenuDisplayed: t,
                onBack: s
            })
        })
    };
const xE = ({
    buttonProperties: e = {}
}) => {
    const t = Me(null),
        n = Me(null),
        i = vv((e => e.setPlayback)),
        a = vv((e => e.setDisplayList)),
        l = vv((e => e.playback.volume)),
        s = vv((e => e.playback.muted)) ? 0 : l,
        c = vv((e => e.playback.supportsSettingVolume)),
        d = vv((e => e.displayList.controlBar)),
        [u, _] = ke(!1),
        p = 100 * s,
        [m, v] = ke(!1),
        [f, h] = ke(!1),
        E = dp(tc.VOLUME_SLIDER) && c,
        g = u && E,
        b = Math.round(100 * s) + "% volume";
    we((() => {
        d || _(!1)
    }), [d]);
    const C = e => {
            O(e)
        },
        T = () => {
            _(!0), a("menu", !1)
        },
        y = e => {
            Ta(t.current, e) || Ta(null == n ? void 0 : n.current, e) || _(!1), v(!1), document.removeEventListener("mouseup", y), document.removeEventListener("mousemove", C), document.removeEventListener("pointerup", y), document.removeEventListener("pointermove", C)
        },
        L = e => {
            v(!0), O(e), o.pointerEvents ? (document.addEventListener("pointerup", y), document.addEventListener("pointermove", C)) : (document.addEventListener("mouseup", y), document.addEventListener("mousemove", C))
        },
        A = () => {
            m || _(!1)
        },
        S = () => h(!0),
        I = () => h(!1);

    function O(e) {
        let n = e.clientY;
        e.targetTouches && e.targetTouches.length && (n = e.targetTouches[0].clientY, e.preventDefault());
        const o = function(e) {
            const n = ur(t.current).top,
                i = ur(t.current).bottom;
            return mr((i - e) / (i - n), 0, 100)
        }(n);
        i("volume", o)
    }
    const P = ya("VolumeControl_module_volumeControl__a0c94891", Qr.VOLUME, rf.focusable),
        R = ya("VolumeControl_module_volumeBar__a0c94891", f || m ? "VolumeControl_module_mouseEnteredSlider__a0c94891" : ""),
        N = !E || e.ariaHidden || void 0,
        D = o.pointerEvents ? {
            onPointerEnter: T,
            onPointerLeave: A
        } : {
            onMouseEnter: T,
            onMouseLeave: A
        },
        w = o.pointerEvents ? {
            onPointerDown: L,
            onPointerEnter: S,
            onPointerLeave: I
        } : {
            onMouseDown: L,
            onMouseEnter: S,
            onMouseLeave: I
        };
    return xe("div", r(r({
        className: "VolumeControl_module_volumeControlContainer__a0c94891"
    }, D), {}, {
        "data-volume-control-container": !0,
        children: [xe(Yh, r({
            ref: n
        }, e)), xe(gv, {
            visible: g,
            children: xe("div", r(r({
                role: "slider",
                className: P,
                ref: t,
                tabIndex: E ? 0 : -1,
                "aria-label": "Volume (use up/down arrow keys to change)",
                "aria-valuenow": 100 * s,
                "aria-valuetext": b,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-hidden": N,
                onBlur: () => {
                    m || _(!1)
                },
                onFocus: () => {
                    _(!0), a("menu", !1)
                },
                onTouchMove: O
            }, w), {}, {
                "data-volume-control": !0,
                children: xe("div", {
                    className: R,
                    children: [xe("div", {
                        className: "VolumeControl_module_volumeBarFill__a0c94891",
                        style: {
                            height: `${p}%`
                        }
                    }), xe("div", {
                        className: "VolumeControl_module_sliderHandle__a0c94891",
                        style: {
                            bottom: `${p}%`
                        }
                    })]
                })
            }))
        })]
    }))
};
var FE = "ControlBarButtonsAndMenus_module_progressHidden__83ef5043",
    HE = "ControlBarButtonsAndMenus_module_buttonsHidden__83ef5043",
    WE = "ControlBarButtonsAndMenus_module_collapsingEnabled__83ef5043",
    GE = "ControlBarButtonsAndMenus_module_canScroll__83ef5043";
const YE = [cp.VIMEO_LOGO],
    $E = ({
        menuProps: e
    }) => {
        const t = fv(),
            n = vv((e => e.appearance.isMenuBlockingUI)),
            i = vv((e => e.appearance.isMenuVerticalVideoMode)),
            a = vv((e => e.controlBar.showAllControls)),
            l = vv((e => e.displayList.controlBarButtons)),
            s = vv((e => e.displayList.progressBar)),
            c = vv((e => e.controlBar.isExpanded)),
            d = ep(),
            u = (() => {
                const e = vv((e => e.playback.canPlayPictureInPicture)),
                    t = vv((e => e.embed.fullscreen)),
                    n = vv((e => e.embed.showVimeoLogo)),
                    i = vv((e => e.embed.volume)),
                    r = vv((e => e.appearance.fullscreen)),
                    a = vv((e => e.embed.airplay)),
                    l = vv((e => e.playback.supportsAirPlay)),
                    s = vv((e => e.embed.chromecast)),
                    c = vv((e => e.chromecast.supportsChromecast)),
                    d = vv((e => e.chromecast.isChromecastReady)),
                    u = vv((e => e.appearance.stereoscopicEnabled)),
                    _ = vv((e => e.playback.supportsStereoscopic)),
                    p = vv((e => e.displayList.ad)),
                    m = vv((e => e.playback.loadedMetadata)),
                    v = vv((e => {
                        var t;
                        return null == (t = e.interactive.hotspots) ? void 0 : t.length
                    })),
                    f = vv((e => e.interactive.enabled)),
                    h = vv((e => e.interactive.ready)),
                    E = vv((e => e.liveEvent.isLiveEvent)),
                    g = vv((e => e.liveEvent.isArchived)),
                    b = !!f && (!h || v),
                    C = l && m && !p && !b && a,
                    T = s && c && d && !p && !b && (!E || g),
                    y = u && _ && !p,
                    L = e && !p,
                    A = (t || r) && !(o.iOS && v),
                    S = n && !p;
                return {
                    [cp.AIRPLAY]: C,
                    [cp.CHROMECAST]: T,
                    [cp.FULLSCREEN]: A,
                    [cp.PIP]: L,
                    [cp.STEREOSCOPIC]: y,
                    [cp.VIMEO_LOGO]: S,
                    [cp.VOLUME]: i
                }
            })(),
            _ = Me(),
            p = Me(),
            m = Object.keys(u).filter((e => u[e])),
            v = Object.keys(d).filter((e => d[e])),
            f = !!m.length || !!v.length,
            h = m.concat(v).filter((e => !YE.includes(e))),
            E = h.length > 0,
            g = h.length > 1,
            [b, C] = ke(!1),
            T = () => {
                if (t.getState().controlBar.showAllControls) return void C(!1);
                const e = _.current,
                    n = p.current,
                    i = null == e ? void 0 : e.children;
                if (!n || null == i || !i.length || !t.getState().displayList.controlBarButtons) return;
                const o = n.clientWidth,
                    r = Array.from(i).reduce(((e, t) => e + t.clientWidth + 4), 4);
                C(o < r)
            };
        bp(_, T, 100), we((() => {
            T()
        }), [m.length, v.length]);
        const y = !n && !i,
            L = !a && g && b,
            A = !a && g,
            S = !l && g,
            I = !s && !S && E,
            O = u[cp.VIMEO_LOGO],
            P = ya("ControlBarButtonsAndMenus_module_wrapper__83ef5043", S && HE, !s && FE, c && "ControlBarButtonsAndMenus_module_progressExpanded__83ef5043"),
            R = ya("ControlBarButtonsAndMenus_module_collapsibleWrapper__83ef5043", S && HE, !s && FE, A && WE, L && GE, I && "ControlBarButtonsAndMenus_module_buttonsOnly__83ef5043", O && "ControlBarButtonsAndMenus_module_vimeoLogoEnabled__83ef5043"),
            N = ya("ControlBarButtonsAndMenus_module_collapsibleContent__83ef5043", S && HE, A && WE, L && GE);
        if (!f) return null;
        const D = {
            onFocus: e => {
                const t = null == e ? void 0 : e.target;
                if (!t || !l || a || !_.current || !p.current || !b) return;
                const n = ur(t),
                    i = ur(p.current);
                if (n.left > i.left && n.right < i.right) return;
                const o = n.right - i.width;
                _.current.scrollTo({
                    top: 0,
                    left: o,
                    behavior: "smooth"
                })
            }
        };
        return S && (D.ariaHidden = !0), xe("div", {
            className: P,
            children: [A && xe(Jh, {}), xe("div", {
                className: R,
                ref: p,
                onKeyDown: e => {
                    "ArrowLeft" !== e.code && "ArrowRight" !== e.code || e.preventDefault()
                },
                role: "none",
                children: xe("div", {
                    className: N,
                    ref: _,
                    role: "none",
                    children: [u[cp.VOLUME] && xe(xE, {
                        buttonProperties: D
                    }), d[Z_.CC] && xe(zh, r(r({}, e[Z_.CC]), {}, {
                        ref: e[Z_.CC].buttonRef
                    }, D)), y && d[Z_.CC] && xe(UE, r({}, e[Z_.CC])), d[Z_.TRANSCRIPT] && xe(Zh, r({}, D)), d[Z_.PREFS] && xe(Wh, r(r({}, e[Z_.PREFS]), {}, {
                        ref: e[Z_.PREFS].buttonRef
                    }, D)), y && d[Z_.PREFS] && xe(SE, r({}, e[Z_.PREFS])), d[Z_.CHAPTERS] && xe(qh, r(r({}, e[Z_.CHAPTERS]), {}, {
                        ref: e[Z_.CHAPTERS].buttonRef
                    }, D)), y && d[Z_.CHAPTERS] && xe(DE, r({}, e[Z_.CHAPTERS])), u[cp.CHROMECAST] && xe(Xh, r({}, D)), u[cp.AIRPLAY] && xe(Kh, r({}, D)), u[cp.STEREOSCOPIC] && xe(jh, r({}, D)), u[cp.PIP] && xe(Gh, r({}, D)), u[cp.FULLSCREEN] && xe(Hh, r({}, D))]
                })
            }), O && xe($h, {})]
        })
    },
    KE = ({
        menuProps: e
    }) => {
        const t = ep(),
            n = vv((e => e.appearance.isMenuBlockingUI)),
            i = vv((e => e.appearance.isMenuVerticalVideoMode));
        return (n || i) && xe(ze, {
            children: [t[Z_.CC] && xe(UE, r({}, e[Z_.CC])), t[Z_.PREFS] && xe(SE, r({}, e[Z_.PREFS])), t[Z_.CHAPTERS] && xe(DE, r({}, e[Z_.CHAPTERS]))]
        })
    },
    qE = () => {
        const e = Me(null),
            t = vv((e => e.displayList.controlBar)),
            n = vv((e => e.displayList.outro)),
            i = vv((e => e.playback.playInitiated)),
            o = vv((e => e.embed.isTrailer)),
            a = vv((e => e.displayList.controlBarButtons)),
            l = vv((e => e.controlBar.showAllControls)),
            s = vv((e => e.embed.playbar)),
            c = (() => {
                const e = vv((e => e.setAppearance)),
                    [t, n] = ke(!1);
                return {
                    onMouseEnter: () => {
                        t || e("mousedOverControlBar", !0), n(!1)
                    },
                    onMouseLeave: () => {
                        t || e("mousedOverControlBar", !1), n(!1)
                    },
                    onTouchStart: () => {
                        e("mousedOverControlBar", !0), n(!0)
                    },
                    onTouchEnd: () => {
                        e("mousedOverControlBar", !1), n(!0)
                    }
                }
            })(),
            d = ap() === rp.CENTER,
            u = o && !i,
            _ = dp(tc.PROGRESS_BAR) && s,
            [p, m] = ke(null),
            v = (({
                setHoveredChapterId: e,
                progressBarAndButtonsRef: t
            }) => {
                const n = vv((e => e.displayList.menu)),
                    i = vv((e => e.setDisplayList)),
                    o = Me(null),
                    r = Me(null),
                    a = Me(null),
                    [l, s] = ke(!1),
                    [c, d] = ke(!1),
                    [u, _] = ke(!1),
                    p = e => t => {
                        e(t), i("menu", t), e !== s && s(!1), e !== d && d(!1), e !== _ && _(!1)
                    };
                n || (s(!1), d(!1), _(!1));
                const m = p(s),
                    v = p(_),
                    f = p(d),
                    h = {
                        [Z_.CC]: {
                            isMenuDisplayed: c,
                            setMenuDisplayed: f,
                            buttonRef: a,
                            progressBarAndButtonsRef: t
                        },
                        [Z_.PREFS]: {
                            isMenuDisplayed: l,
                            setMenuDisplayed: m,
                            buttonRef: o,
                            progressBarAndButtonsRef: t
                        },
                        [Z_.CHAPTERS]: {
                            isMenuDisplayed: u,
                            setMenuDisplayed: v,
                            buttonRef: r,
                            progressBarAndButtonsRef: t,
                            onMenuOptionMouseEnter: t => {
                                var n;
                                return e(parseInt(null == t || null == (n = t.currentTarget) || null == (n = n.dataset) ? void 0 : n.id, 10))
                            },
                            onMenuOptionMouseLeave: () => e(null)
                        }
                    };
                return h
            })({
                setHoveredChapterId: m,
                progressBarAndButtonsRef: e
            }),
            f = ya("ControlBar_module_controlBarWrapper__293a16b4", d && "ControlBar_module_centerPlayButton__293a16b4"),
            h = ya(Jr.VP_CONTROLS, "ControlBar_module_controls__293a16b4", u && "ControlBar_module_trailer__293a16b4"),
            E = ya("ControlBar_module_progressBarAndButtons__293a16b4", !_ && "ControlBar_module_progressBarDisabled__293a16b4", l && "ControlBar_module_showAllControls__293a16b4", a && !l && "ControlBar_module_buttonsExpanded__293a16b4");
        return xe(kv, {
            children: [xe("div", {
                className: f,
                children: [xe(Vh, {
                    controlBarVisibilityHandlers: c
                }), xe(gv, {
                    visible: t,
                    children: xe("div", r(r({
                        className: h
                    }, c), {}, {
                        "data-control-bar": !0,
                        children: !n && !u && xe("div", {
                            className: E,
                            ref: e,
                            children: [_ && xe(hE, {
                                hoveredChapterId: p
                            }), xe($E, {
                                menuProps: v
                            })]
                        })
                    }))
                }), xe(eE, {})]
            }), xe(KE, {
                menuProps: v
            })]
        })
    },
    zE = ({
        styles: e
    }) => xe(Iv, {
        name: Cp.HEART_WIDER_FILLED,
        style: e
    }),
    jE = ({
        styles: e
    }) => xe(Iv, {
        name: Cp.HEART_WIDER_BROKEN_FILLED,
        style: e
    });
var XE = "AnimatedClock_module_hands__167fcd36",
    ZE = "AnimatedClock_module_reverse__167fcd36";
const JE = ({
        style: e,
        animateDirection: t = "forward"
    }) => {
        const n = ya(XE, "AnimatedClock_module_hour__167fcd36", "reverse" === t && ZE),
            i = ya(XE, "AnimatedClock_module_minute__167fcd36", "reverse" === t && ZE);
        return xe("svg", {
            viewBox: "0 0 20 20",
            style: e,
            children: [xe("polyline", {
                className: n,
                points: "9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68"
            }), xe("polyline", {
                className: i,
                points: "14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65"
            }), xe("circle", {
                className: "AnimatedClock_module_circle__167fcd36",
                cx: "10",
                cy: "10",
                r: "8",
                strokeWidth: "2"
            })]
        })
    },
    QE = ({
        styles: e
    }) => xe(JE, {
        style: e
    }),
    eg = ({
        styles: e
    }) => xe(JE, {
        animateDirection: "reverse",
        style: e
    });
const tg = () => {
    const e = Me(null),
        t = vv((e => e.displayList.menu)),
        n = vv((e => e.notification.currentNotification)),
        i = vv((e => e.setNotification)),
        {
            width: o,
            height: r
        } = vv((e => e.appearance.boundingClientRect)),
        a = dp(tc.SIDE_DOCK_MENU);
    return xe(Sf, {
        fadeIn: !1,
        onContentChange: function(t) {
            null !== t && (clearTimeout(e.current), e.current = setTimeout((() => {
                i("currentNotification", null)
            }), 750))
        },
        targetContent: n,
        children: e => {
            const n = ya("Notification_module_root__c083c238", null !== e && "Notification_module_active__c083c238", a && t && "Notification_module_behindSideDock__c083c238"),
                i = function(e, t, n) {
                    const i = e === uv.WatchLaterAdded || e === uv.WatchLaterRemoved ? .5 : .4,
                        o = n > t ? t : n;
                    return {
                        width: `${Math.round(o*i*1.6)}px`,
                        height: `${Math.round(o*i)}px`
                    }
                }(e, o, r);
            return xe("div", {
                className: n,
                children: [e === uv.LikedAdded && xe(zE, {
                    styles: i
                }), e === uv.LikeRemoved && xe(jE, {
                    styles: i
                }), e === uv.WatchLaterAdded && xe(QE, {
                    styles: i
                }), e === uv.WatchLaterRemoved && xe(eg, {
                    styles: i
                })]
            })
        }
    })
};
let ng = function(e) {
    return e.Backward = "backward", e.Forward = "forward", e
}({});
const ig = () => {
    const e = vv((e => e.displayList.nudgeNotification)),
        t = vv((e => e.nudge.direction)),
        n = vv((e => e.nudge.time));
    return xe(gv, {
        visible: e,
        children: xe("div", {
            "aria-hidden": "true",
            className: `NudgeNotification_module_nudge__24f10a71 ${t===ng.Backward&&"NudgeNotification_module_nudgeBackward__24f10a71"}`,
            children: xe("div", {
                className: "NudgeNotification_module_nudgeInfo__24f10a71",
                children: [xe("div", {
                    className: "NudgeNotification_module_nudgeIcon__24f10a71",
                    children: xe(Iv, {
                        name: Cp.FAST_FORWARD
                    })
                }), xe("div", {
                    className: "NudgeNotification_module_nudgeTime__24f10a71",
                    children: n ? n + " seconds" : ""
                })]
            })
        })
    })
};
var og = "NudgeArea_module_nudgeArea__7d84d7de";
let rg;
const ag = () => {
        const e = fv(),
            t = vv((e => e.displayList.fullPlayerElement)),
            n = vv((e => e.displayList.ad)),
            i = vv((e => e.liveEvent.isLiveEvent)),
            r = vv((e => e.liveEvent.dvrEnabled)),
            a = vv((e => e.liveEvent.isArchived)),
            l = i && !a && !r,
            s = vv((e => e.embed.background)),
            c = vv((e => e.embed.controls)),
            d = vv((e => e.displayList.outro)),
            u = vv((e => e.config.video.spatial)),
            _ = vv((e => e.progressController)),
            p = vv((e => e.playback.playInitiated)),
            m = !(!o.spatialPlayback || !u),
            v = o.touch && !t && !n && !l && !s && c && !d && !m,
            f = vv((e => e.setPlayback)),
            h = vv((e => e.setNudgeProperties)),
            E = vv((e => e.startNudgeHideTimeout)),
            [g, b] = ke({
                left: 0,
                right: 0
            }),
            C = t => n => {
                let o;
                n.preventDefault(), t === ng.Forward ? (o = g.left + 1, b({
                    left: o,
                    right: 0
                })) : (o = g.right + 1, b({
                    left: 0,
                    right: o
                })), clearTimeout(rg), rg = setTimeout(T, 250), o >= 2 && function(t, n) {
                    let o, r;
                    const {
                        liveTailTime: a,
                        liveEdgeTime: l,
                        currentFragment: s,
                        currentTime: c
                    } = e.getState().playback;
                    i ? (o = a, r = l) : ({
                        startTime: o,
                        endTime: r
                    } = s);
                    let d = 0;
                    d = t === ng.Forward ? c + 10 : c - 10;
                    let u = _.getAllowedSeekTime(d);
                    u < o && (u = o), u >= r && (u = r - .001), t === ng.Forward && !_.canSeekNow && p || (u === d && h({
                        direction: t,
                        time: 10 + 10 * (n - 2)
                    }), E(), f("currentTime", u, {
                        seekType: "nudge"
                    }))
                }(t, o)
            };

        function T() {
            b({
                left: 0,
                right: 0
            })
        }
        return v && xe(ze, {
            children: [xe("div", {
                className: `${og} NudgeArea_module_nudgeBackwardArea__7d84d7de`,
                onTouchEnd: C(ng.Backward)
            }), xe("div", {
                className: `${og} NudgeArea_module_nudgeForwardArea__7d84d7de`,
                onTouchEnd: C(ng.Forward)
            })]
        })
    },
    lg = ({
        element: e,
        children: t
    }) => Qe(xe(ze, {
        children: t
    }), e);
var sg = "HelpOverlay_module_hideOnSmall__079276a9",
    cg = "HelpOverlay_module_arrow__079276a9";
const dg = () => {
        const e = Ap((e => e.embed.onsite)),
            t = vv((e => e.embed.like)),
            n = vv((e => e.embed.watchLater)),
            i = vv((e => e.embed.share)),
            o = vv((e => e.embed.transcript)),
            r = vv((e => e.embed.aiWidget)),
            a = vv((e => e.playback.drm)),
            l = vv((e => e.playback.playInitiated)),
            s = [{
                key: "↑",
                text: "Volume up",
                className: `${cg} ${sg}`
            }, {
                key: "↓",
                text: "Volume down",
                className: `${cg} ${sg}`
            }, {
                key: "→",
                text: "Scrub forward",
                className: `${cg} ${sg}`
            }, {
                key: "←",
                text: "Scrub backwards",
                className: `${cg} ${sg}`
            }, {
                key: "X",
                text: "Like",
                ignore: !t
            }, {
                key: "S",
                text: "Share",
                ignore: !i
            }, {
                key: "W",
                text: "Watch Later",
                ignore: !n
            }, {
                key: "C",
                text: "Toggle Captions"
            }, {
                key: "H",
                text: "Toggle Preferences Menu"
            }, {
                key: "F",
                text: "Toggle fullscreen"
            }, {
                key: "⇧T",
                text: "Toggle Transcript",
                ignore: !o
            }, {
                key: "⇧A",
                text: "Toggle Vimeo AI",
                ignore: !r
            }, {
                key: "V",
                text: "View on Vimeo",
                ignore: e
            }, {
                key: "J",
                text: "Scrub backwards"
            }, {
                key: "K",
                text: "Play/Pause"
            }, {
                key: "L",
                text: "Scrub forward"
            }, {
                key: "M",
                text: "Toggle Mute"
            }, {
                key: "P",
                text: "Screenshot frame",
                ignore: !("ClipboardItem" in window && "clipboard" in navigator) || a || !l
            }];
        return xe(ze, {
            children: [xe("h1", {
                id: ta.VP_OVERLAY_LABELLEDBY,
                children: "Keyboard Shortcuts"
            }), xe("div", {
                className: "HelpOverlay_module_keysWrapper__079276a9",
                "data-help-keys": !0,
                children: s.map((e => !e.ignore && xe("div", {
                    className: `HelpOverlay_module_keyWrapper__079276a9 ${e.className||""}`,
                    children: [xe("div", {
                        className: "HelpOverlay_module_keySymbol__079276a9",
                        children: e.key
                    }), xe("div", {
                        className: "HelpOverlay_module_keyText__079276a9",
                        children: e.text
                    })]
                })))
            })]
        })
    },
    ug = () => {
        const e = vv((e => e.overlay.incrementOverlayElementsUpdatedCount));
        return xe(Xf, {
            onEmbedShareVisibilityChange: e
        })
    };
const _g = [Nt, wt],
    pg = () => {
        const e = Ap((e => e.embed.onsite)),
            t = Ap((e => e.embed.videoId)),
            n = vv((e => e.overlay.spatialRedirectContext)),
            i = {
                title: "headset" === n ? "Headset viewing isn’t currently supported in your mobile browser." : null,
                buttonText: "Watch in the Vimeo app",
                lowerText: "browser-support" === n ? "360 not supported in this browser" : null
            },
            o = vv((e => e.embed.doNotTrack)),
            r = vv((e => !_g.includes(e.embed.privacy))),
            a = vv((e => e.embed.shareUrl));
        return xe(ze, {
            children: [xe(gv, {
                visible: !0,
                children: xe("div", {
                    className: "SpatialRedirectOverlay_module_background__43dc92f8"
                })
            }), "headset" === n && xe("div", {
                className: "SpatialRedirectOverlay_module_title__43dc92f8",
                children: i.title
            }), r && xe(df, {
                className: "SpatialRedirectOverlay_module_button__43dc92f8",
                onClick: () => {
                    const n = o ? a : function(e) {
                        return `https://vimeo.page.link/?link=https%3A%2F%2Fvimeo.com%2F${e}%3Futm_source%3Dvimeo%26utm_campaign%3Dmobileweb%26utm_content%3Dplayer-button-360video&apn=com.vimeo.android.videoapp&ibi=com.vimeo&isi=425194759&utm_source=vimeo&utm_campaign=mobileweb&utm_content=player-button&ct=360video&pt=417731&efr=1`
                    }(t);
                    window.open(n, e && "_blank", e ? "noopener" : "")
                },
                children: i.buttonText
            }), "browser-support" === n && xe("div", {
                className: "SpatialRedirectOverlay_module_lowerText__43dc92f8",
                children: i.lowerText
            })]
        })
    },
    mg = () => {
        const e = vv((e => e.overlay.purpose)),
            t = vv((e => e.displayList.overlay)),
            n = vv((e => e.setDisplayList)),
            i = Ma(e) ? null : e;
        return xe(Sf, {
            onContentChange: e => {
                n("overlay", !(null === e || e === ka.EMPTY))
            },
            styleOverrides: {
                exitDone: {
                    display: "block",
                    visibility: "hidden"
                }
            },
            targetContent: i,
            children: n => xe(th, {
                visible: n === e && t,
                children: [n === ka.ERROR && xe(Qf, {}), n === ka.HELP && xe(dg, {}), n === ka.SHARE && xe(ug, {}), n === ka.SPATIAL_REDIRECT && xe(pg, {})]
            })
        })
    };
const vg = () => {
    const {
        pipOverlay: e
    } = vv((e => e.displayList));
    return xe(gv, {
        visible: e,
        children: xe("div", {
            className: "PipOverlay_module_overlay__8ff12d1a",
            "aria-hidden": "true",
            children: [xe(Iv, {
                name: Cp.PIP
            }), xe("div", {
                className: "PipOverlay_module_title__8ff12d1a",
                children: "Playing in picture-in-picture"
            })]
        })
    })
};
const fg = () => {
    const e = vv((e => e.liveEvent.isLiveEvent)),
        t = vv((e => e.liveEvent.isPlayable)),
        n = vv((e => e.playback.paused)),
        i = vv((e => e.liveEvent.isEnded)),
        o = e && !i,
        r = vv((e => e.displayList.controlBar)),
        a = vv((e => e.displayList.topCenterActionItem)),
        l = vv((e => e.displayList.title)),
        s = vv((e => e.displayList.toast)),
        c = vv((e => e.playback.atLiveEdge));
    return !!o && xe(gv, {
        visible: (r || a) && !(l || s) && t && !n && c,
        children: xe("div", {
            className: "LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__62de121d",
            "aria-hidden": "true",
            children: [xe(gg, {}), xe(yg, {})]
        })
    })
};
var hg = "LiveStatusLabel_module_offline__dccd53f8",
    Eg = "LiveStatusLabel_module_live__dccd53f8";
const gg = () => {
    const e = vv((e => e.embed.hideLiveLabel)),
        t = vv((e => e.liveEvent.isLiveEvent)),
        n = vv((e => e.liveEvent.isPlayable)),
        i = vv((e => e.liveEvent.isArchived)),
        o = ya("LiveStatusLabel_module_liveStatusCircle__dccd53f8", n ? Eg : hg),
        r = ya("LiveStatusLabel_module_liveStatusText__dccd53f8", n ? Eg : hg);
    return t && !i && !e && xe("div", {
        className: "LiveStatusLabel_module_liveStatusLabel__dccd53f8",
        "data-live-status-label": !0,
        children: [xe("div", {
            className: o
        }), xe("span", {
            className: r,
            children: "LIVE"
        })]
    })
};

function bg(e, t) {
    try {
        var n = e()
    } catch (xe) {
        return t(xe)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Cg() {}

function Tg(e) {
    if (e && e.then) return e.then(Cg)
}
const yg = () => {
        const e = Ap((e => e.embed.videoId)),
            t = Ap((e => e.config.vimeo_api_url)),
            n = vv((e => e.events)),
            i = vv((e => e.updatePhpTokens)),
            o = vv((e => e.liveEvent.isPlayable)),
            r = vv((e => e.embed.showViewerCount)),
            a = vv((e => e.liveEvent.viewerCount)),
            l = vv((e => e.liveEvent.liveStatsRequestSucceeded)),
            s = vv((e => e.liveEvent.isStarted)),
            c = vv((e => e.liveEvent.isOnline)),
            d = vv((e => e.embed.privacy)),
            u = vv((e => e.embed.videoUnlistedHash)),
            _ = vv((e => e.user.vimeoBucketedLiveClientToken)),
            p = s && r && c,
            m = Ve(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (xe) {
                        return Promise.reject(xe)
                    }
                }
            }((function() {
                let o = `${e}`;
                d === nl.PRIVACY_UNLISTED && u && (o += `:${u}`);
                const r = `https://${t}/videos/${o}/stats/live`,
                    a = {
                        jwt_token: _
                    };
                return Tg(bg((function() {
                    return function(e, t) {
                        try {
                            var n = Promise.resolve(e());
                            return t ? n.then(t) : n
                        } catch (xe) {
                            return Promise.reject(xe)
                        }
                    }(i, (function() {
                        return Tg(bg((function() {
                            return function(e, t) {
                                return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                            }(C({
                                url: r,
                                searchParams: a
                            }).json(), (function(e) {
                                e.viewers && n.fire(Y.LIVE_STATS_SUCCESS, {
                                    viewerCount: e.viewers.current
                                })
                            }))
                        }), (function() {
                            n.fire(Y.LIVE_STATS_FAILURE)
                        })))
                    }))
                }), (function(e) {
                    n.fire(Y.LIVE_STATS_FAILURE)
                })))
            })), [n, i, e, t, _, d, u]);
        return we((() => {
            if (p) {
                m();
                const e = setInterval(m, 3e4);
                return () => clearInterval(e)
            }
            return () => {}
        }), [p, m]), o && r && l && xe("div", {
            className: "LiveViewerCounter_module_liveViewerCounter__29a255e3",
            "data-live-viewer-counter": !0,
            children: [xe(Iv, {
                className: "LiveViewerCounter_module_liveViewerCounterIcon__29a255e3",
                name: Cp.PERSON_FILLED
            }), xe("span", {
                className: "LiveViewerCounter_module_liveViewerCountValue__29a255e3",
                "data-live-viewer-count": !0,
                children: a
            })]
        })
    },
    Lg = [Nr.privateLocked, Nr.privatePassword, Nr.geoBlocked, Nr.drmPlaybackUnavailable],
    Ag = {
        [Ga.LIGHT]: Wa.EIGHTY,
        [Ga.DARK]: Wa.TWENTY
    },
    Sg = "transparent !important",
    Ig = () => {
        const e = Ap((e => e.uuid)),
            t = Ap((e => e.view)),
            n = Ap((e => e.embed.transparent)),
            i = Ap((e => e.colors.colorOne)),
            o = Ap((e => e.colors.colorTwo)),
            r = Ap((e => e.colors.colorThree)),
            a = Ap((e => e.colors.colorFour)),
            l = [
                [Ha.ONE, $a(i, Wa.ONE_HUNDRED)],
                [Ha.TWO, $a(o, Wa.ONE_HUNDRED)],
                [Ha.THREE, $a(r, Wa.ONE_HUNDRED)],
                [Ha.FOUR, $a(a, Wa.ONE_HUNDRED, {
                    forceHexAlpha: !0
                })],
                [Ha.ONE_MONOCHROME, $a(i, Wa.ONE_HUNDRED, {
                    monochrome: !0
                })],
                [Ha.TWO_MONOCHROME, $a(o, Wa.ONE_HUNDRED, {
                    monochrome: !0
                })],
                [Ha.ONE_OPACITY_NINETY, $a(i, Wa.NINETY, {
                    forceHexAlpha: !0
                })],
                [Ha.TWO_OPACITY_NINETY, $a(o, Wa.NINETY, {
                    forceHexAlpha: !0
                })],
                [Ha.THREE_OPACITY_TWENTY, $a(r, Wa.TWENTY)],
                [Ha.ONE_MONOCHROME_OPACITY_TWENTY, $a(i, Wa.TWENTY, {
                    monochrome: !0
                })],
                [Ha.TWO_MONOCHROME_OPACITY_TWENTY, $a(o, Wa.TWENTY, {
                    monochrome: !0
                })],
                [Ha.ONE_MONOCHROME_OPACITY_SIXTY, $a(i, Wa.SIXTY, {
                    monochrome: !0
                })],
                [Ha.TWO_COMPLEMENT, $a(o, Wa.ONE_HUNDRED, {
                    complement: !0
                })],
                [Ha.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY, $a(i, Ag, {
                    monochrome: !0
                })],
                [Ha.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY, $a(o, Ag, {
                    monochrome: !0
                })]
            ];
        let s, c;
        return Lg.includes(t) ? (s = "#000 !important", c = Sg) : n ? (s = Sg, c = Sg) : (s = `var(${Ha.FOUR})`, c = `var(${Ha.FOUR})`), xe("style", {
            type: "text/css",
            "data-player-colors": e,
            children: [`.player-${e} {\n                ${Ka(l)}\n            }`, `.player-${e} {\n                background-color: ${s};\n            }`, `.player-${e} .${Jr.VP_VIDEO_WRAPPER} {\n                background-color: ${c};\n            }`]
        })
    };
const Og = () => {
    const e = vv((e => e.embed.rightContentAreaEnabled)),
        t = vv((e => e.displayList.rightContentArea)),
        n = vv((e => e.appearance.rightContentAreaAnimating));
    let i = vv((e => e.element));
    const r = {
            transcript: {
                component: Ug,
                displayed: vv((e => e.displayList.transcript))
            },
            aiWidget: {
                component: ob,
                displayed: vv((e => e.displayList.aiWidget))
            }
        },
        a = o.isGoogleBot && r.transcript.displayed;
    var l;
    a && (i = null == (l = i) ? void 0 : l.parentElement);
    const s = ya("RightContentArea_module_rightContentArea__98a162b1", t && "RightContentArea_module_visible__98a162b1", Cs && "RightContentArea_module_iframeEmbed__98a162b1", a && "RightContentArea_module_googleBot__98a162b1"),
        c = Object.keys(r).some((e => {
            var t;
            return null == (t = r[e]) ? void 0 : t.displayed
        })),
        d = !t && n,
        u = d ? 400 : void 0,
        _ = d || c && t && !n ? void 0 : 0,
        p = {
            exitDone: {
                visibility: "hidden",
                display: "block"
            }
        };
    return e && Qe(xe("div", {
        id: ta.RIGHT_CONTENT_AREA,
        className: s,
        "aria-hidden": !t,
        children: Object.keys(r).map((function(e) {
            var t, n;
            const i = null == (t = r[e]) ? void 0 : t.component,
                o = null == (n = r[e]) ? void 0 : n.displayed;
            return i ? xe(gv, {
                duration: _,
                visible: o,
                delay: u,
                styleOverrides: p,
                children: xe(i, {})
            }, e) : null
        }))
    }), i)
};
const Pg = () => {
    const [e, t] = ke(!1), n = vv((e => e.appearance.placeholderThumbnail)), i = vv((e => e.appearance.appSizeMode)), a = vv((e => e.appearance.appBreakpoint)), l = vv((e => e.embed.rightContentAreaEnabled)), s = vv((e => e.displayList.rightContentArea)), c = vv((e => e.appearance.rightContentAreaAnimating)), d = vv((e => e.element)), u = l && (s || c), _ = a === Ks.XS || a === Ks.XXS || i === Qa.MINI || i === Qa.TINY, p = ya("ContentAreaBackground_module_img__5e37c38e", e && "ContentAreaBackground_module_loaded__5e37c38e"), m = _ ? {
        visible: s,
        duration: 400
    } : {
        visible: u,
        duration: 0
    };
    return o.isGoogleBot ? null : Qe(xe(gv, r(r({}, m), {}, {
        children: xe("div", {
            className: "ContentAreaBackground_module_imgContainer__5e37c38e",
            children: xe("img", {
                onLoad: () => t(!0),
                alt: "video thumbnail",
                className: p,
                src: n
            })
        })
    })), null == d ? void 0 : d.querySelector(`.${ea.CONTENT_AREA_BACKGROUND_CONTAINER}`))
};
et(".TranscriptError_lazy_module_refresh__eeacf550{background:#ffffff1a;border:none;border-radius:4px;gap:4px;height:32px;padding:4px 12px}.TranscriptError_lazy_module_icon__eeacf550{height:40px;width:40px}", {});
const {
    Provider: Rg,
    useStore: Ng
} = Be(), Dg = {
    timecodeDisplayed: !0,
    selectedSettingsMenu: A_.MAIN,
    settingsDisplayed: !1,
    currentSearchResultIndex: 0,
    searchTerms: {
        terms: "",
        timestamp: null
    },
    searchResults: [],
    transcriptDisabled: !1,
    autofollowEnabled: !0
}, wg = ({
    children: e
}) => {
    const t = vv((e => e.subscribe)),
        n = vv((e => e.captions.textTrackEls)),
        i = vv((e => e.captions.rtlTracks)),
        o = vv((e => e.config)),
        a = vv((e => e.events)),
        l = vv((e => e.displayList.transcript)),
        s = vv((e => e.displayList.fullPlayerElement)),
        c = vv((e => e.appearance.appBreakpoint)),
        d = vv((e => e.appearance.appSizeMode)),
        u = Ap((e => e.bigPicture)),
        _ = ((e, t) => e.map((e => {
            const n = e.id.replace(aa.TEXT_TRACK_ID_PREFIX, ""),
                i = t.includes(n);
            return {
                id: e.id,
                label: e.label,
                language: e.srclang,
                rtl: i
            }
        })))(n, i),
        p = N_(o, _),
        m = Me(null == p ? void 0 : p.language);
    return xe(Rg, {
        createStore: () => Fe(((e, n) => {
            const i = (t, n) => e((e => r(r({}, e), {}, {
                    [t]: n
                }))),
                o = Dg.selectedSettingsMenu,
                v = e => i("selectedSettingsMenu", e),
                f = Dg.settingsDisplayed,
                h = t => {
                    var i, o;
                    const l = {};
                    if (t !== (null == (i = n()) ? void 0 : i.settingsDisplayed)) {
                        var s;
                        l.settingsDisplayed = t;
                        const e = null == (s = n()) || null == (s = s.selectedTrack) ? void 0 : s.language;
                        t ? u.sendEvent(Gl.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "open_embed_transcript_setting",
                            copy: "settings",
                            location: "player_embedded_transcript",
                            element: "embedded_transcript_settings_menu",
                            current_transcript_language: e
                        }) : t || e === m.current || (u.sendEvent(Gl.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "change_language_settings",
                            copy: e,
                            location: "player_embedded_transcript_settings",
                            element: "language_select_panel",
                            current_transcript_language: e
                        }), m.current = e)
                    }(null == (o = n()) ? void 0 : o.settingsDisplayed) && !t && (l.selectedSettingsMenu = Dg.selectedSettingsMenu), Object.keys(l).length && e((e => r(r({}, e), l)));
                    const c = t ? Hr : "";
                    a.fire(Zn, c)
                },
                E = Dg.timecodeDisplayed,
                g = Dg.currentSearchResultIndex,
                b = e => i("currentSearchResultIndex", e),
                C = Dg.searchResults,
                T = e => {
                    0 === e.length && i("currentSearchResultIndex", 0), i("searchResults", e)
                },
                y = Dg.searchTerms,
                L = e => i("searchTerms", e),
                A = !l || s,
                S = kg(c, d),
                I = Dg.autofollowEnabled;

            function O() {
                L(Dg.searchTerms), T(Dg.searchResults), b(Dg.currentSearchResultIndex)
            }
            return t((e => {
                var t;
                return null == e || null == (t = e.displayList) ? void 0 : t.transcript
            }), (e => {
                e || (h(Dg.settingsDisplayed), v(Dg.selectedSettingsMenu))
            })), t((e => {
                var t, n;
                return {
                    transcriptVisible: null == e || null == (t = e.displayList) ? void 0 : t.transcript,
                    overlayVisible: null == e || null == (n = e.displayList) ? void 0 : n.fullPlayerElement
                }
            }), (({
                transcriptVisible: e,
                fullPlayerElement: t
            }) => {
                i("transcriptDisabled", !(e && !t))
            })), t((e => {
                var t, n;
                return {
                    breakpoint: null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint,
                    sizeMode: null == e || null == (n = e.appearance) ? void 0 : n.appSizeMode
                }
            }), (({
                breakpoint: t,
                sizeMode: i
            }) => {
                const o = kg(t, i);
                o !== n().transcriptSizeMode && e((e => r(r({}, e), {}, {
                    transcriptSizeMode: o
                })))
            })), t((e => {
                var t, n;
                return {
                    outroDisplayed: null == e || null == (t = e.displayList) ? void 0 : t.outro,
                    animationActive: null == e || null == (n = e.appearance) ? void 0 : n.rightContentAreaAnimating
                }
            }), (({
                outroDisplayed: e,
                animationActive: t
            }) => {
                e && !t && O()
            })), {
                timecodeDisplayed: E,
                searchTerms: y,
                setSearchTerms: L,
                resetSearchTerms: () => L(Dg.searchTerms),
                currentSearchResultIndex: g,
                setCurrentSearchResultIndex: b,
                settingsDisplayed: f,
                setSettingsDisplayed: h,
                selectedTrack: p,
                availableTracks: _,
                setSelectedTrack: e => {
                    const t = _.find((t => t.id === e));
                    i("selectedTrack", t), O(), a.fire(Mo, t)
                },
                selectedSettingsMenu: o,
                setSelectedSettingsMenu: v,
                searchResults: C,
                setSearchResults: T,
                toggleTimecodeDisplayed: () => {
                    var e;
                    return i("timecodeDisplayed", !(null != (e = n()) && e.timecodeDisplayed))
                },
                toggleSettingsDisplayed: () => {
                    var e;
                    return h(!(null != (e = n()) && e.settingsDisplayed))
                },
                transcriptDisabled: A,
                transcriptSizeMode: S,
                autoFollowEnabled: I,
                setAutoFollowEnabled: e => i("autoFollowEnabled", e)
            }
        })),
        children: e
    })
};

function kg(e, t) {
    const n = e === Ks.XS || e === Ks.XXS,
        i = t === Qa.MINI || t === Qa.TINY;
    return n || i ? S_.SMALL : e === Ks.XL || e === Ks.XXL ? S_.LARGE : S_.MEDIUM
}
const Mg = ({
    onClose: e
}) => {
    const t = ya(ea.EXCLUDE_GLOBAL_BUTTON_STYLES, "ContentAreaCloseButton_module_closeContentAreaButton__22a1987e", rf.focusableButton),
        n = "Close";
    let i = qs.MD;
    const r = vv((e => e.appearance.appBreakpoint)),
        a = vv((e => e.displayList.rightContentArea));
    r !== Ks.XL && r !== Ks.XXL || (i = qs.CUSTOM);
    const {
        onClick: l,
        onKeyDown: s
    } = va(e), c = xe(df, {
        onClick: l,
        onKeyDown: s,
        size: i,
        icon: xe(Iv, {
            name: Cp.CLOSE,
            focusable: "false"
        }),
        "aria-label": n,
        disabled: !a,
        color: zs.CUSTOM,
        className: t
    });
    return o.touch ? c : xe(Xv, {
        tooltipContent: n,
        className: "ContentAreaCloseButton_module_tooltip__22a1987e",
        children: c
    })
};
const Vg = ({
        message: e,
        icon: t,
        componentType: n,
        children: i,
        onClose: o
    }) => xe("div", {
        className: "ContentAreaMessage_module_container__7df41131",
        "data-component-type": n,
        children: [xe(Mg, {
            onClose: o
        }), t || xe(Iv, {
            name: Cp.INFO_CIRCLE,
            className: "ContentAreaMessage_module_icon__7df41131"
        }), xe(nf, {
            size: Zs.MD,
            weight: Js.NORMAL,
            className: "ContentAreaMessage_module_messageText__7df41131",
            children: e
        }), i]
    }),
    Bg = ({
        onRetry: e
    }) => {
        const t = Ap((e => e.bigPicture)),
            n = Ng((e => e.selectedTrack)),
            i = vv((e => e.setDisplayList)),
            o = "Refresh",
            r = xe(Iv, {
                name: Cp.WARN_CIRCLE,
                className: "TranscriptError_lazy_module_icon__eeacf550"
            });
        return xe(Vg, {
            message: "There was a problem loading the transcript.",
            onClose: () => i("transcript", !1),
            componentType: "transcript-error",
            icon: r,
            children: xe(df, {
                className: "TranscriptError_lazy_module_refresh__eeacf550",
                color: zs.PRIMARY,
                onClick: () => {
                    e(), t.sendEvent(Gl.EMBEDDED_TRANSCRIPT_CLICK, {
                        name: "click_refresh_error",
                        copy: o,
                        location: "player_embedded_transcript_error",
                        element: "refresh_transcript_button",
                        current_transcript_language: null == n ? void 0 : n.language
                    })
                },
                "data-component-type": "retry-request",
                children: xe(nf, {
                    size: Zs.MD,
                    weight: Js.BOLD,
                    color: Qs.WHITE,
                    children: o
                })
            })
        })
    };
const Ug = ({
    style: e = {}
}) => {
    const t = Me(!0),
        n = vv((e => e.displayList.transcript)),
        {
            module: i,
            load: o,
            readyState: r
        } = ip(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (xe) {
                    return Promise.reject(xe)
                }
            }
        }((function() {
            return import ("./Transcript.lazy.module.js")
        }))),
        a = null == i ? void 0 : i.Transcript,
        l = vv((e => e.embed.transcript));
    if (n && t.current && (o(), t.current = !1), !l || r !== tp.LOADED && !n) return null;
    const s = ya(!n && "TranscriptLoader_module_hidden__48b2f57a");
    return xe("div", {
        style: e,
        className: s,
        children: [r === tp.LOADING && xe(vf, {}), r === tp.ERROR && xe(Bg, {
            onRetry: o
        }), r === tp.LOADED && xe(a, {})]
    })
};
let xg;
const Fg = () => {
    const e = vv((e => e.playback.buffering)),
        t = vv((e => e.chromecast.isChromecastBuffering)),
        n = vv((e => e.chromecast.isChromecastConnected)),
        i = vv((e => e.displayList.progressBar)),
        [o, r] = ke(!1);
    return e || t ? xg = setTimeout((() => {
        r(!0)
    }), 600) : (clearTimeout(xg), r(!1)), i && xe(ze, {
        children: [xe(gv, {
            visible: n || o,
            styleOverrides: {
                enterActive: {
                    opacity: .4
                },
                enterDone: {
                    opacity: .4
                },
                exit: {
                    opacity: .4
                },
                exitDone: {
                    display: "none"
                }
            },
            children: xe("div", {
                className: "BufferHandler_module_shade__a4e303c9",
                "data-shade": !0
            })
        }), xe(gv, {
            visible: o,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: xe(vf, {
                size: ec.LG
            })
        })]
    })
};
const Hg = () => {
    const e = vv((e => e.captions.activeCues)),
        t = vv((e => e.captions.language)),
        n = vv((e => e.captions.direction)),
        i = vv((e => e.displayList.captions)),
        o = vv((e => e.displayList.controlBar)),
        r = vv((e => e.displayList.progressBar)),
        a = vv((e => e.appearance.fullscreen)),
        l = vv((e => e.embed.rightContentAreaEnabled)),
        s = vv((e => e.captions.fontSize)),
        c = vv((e => e.captions.fontFamily)),
        d = vv((e => e.captions.fontOpacity)),
        u = vv((e => e.captions.color)),
        _ = vv((e => e.captions.bgColor)),
        p = vv((e => e.captions.bgOpacity)),
        m = vv((e => e.captions.windowOpacity)),
        v = vv((e => e.captions.windowColor)),
        f = vv((e => e.captions.edgeStyle)),
        h = vv((e => e.appearance.videoHeight)),
        E = vv((e => e.appearance.containerHeight)),
        g = Ap((e => e.embed.transparent));
    let b = null,
        C = {};
    !a && g || h < E - 58 && (b = `translateY(-${(E-h)/2}px)`, C.transform = b);
    const T = ya("Captions_module_captions__0d35c569", !i && "Captions_module_hide__0d35c569", o && !b && "Captions_module_withControls__0d35c569", !r && "Captions_module_noPlaybar__0d35c569", a && "Captions_module_fullscreen__0d35c569", l && "Captions_module_contentAreaSibling__0d35c569");
    return xe(ff, {
        cues: e,
        language: t,
        direction: n,
        className: T,
        fontSize: s,
        fontFamily: c,
        fontOpacity: d,
        color: u,
        bgColor: _,
        bgOpacity: p,
        windowOpacity: m,
        windowColor: v,
        edgeStyle: f,
        height: h,
        style: C
    })
};
var Wg = "QoESurvey_module_selected__32b208ff";
let Gg;
const Yg = ({
        containerRef: e
    }) => {
        const t = vv((e => e.closeToast)),
            n = Ap((e => e.bigPicture)),
            [i, o] = ke(!1),
            [r, a] = ke(!1),
            [l, s] = ke(!1);
        we((() => {
            n.sendEvent(Gl.VIEW_PLAYER_CSAT_V1), Gg = setTimeout(t, 1e4)
        }), [n, t]);
        const c = "Good",
            d = "Poor";
        return xe(ze, {
            children: [xe(yf, {
                transitionTime: 1e4,
                ariaLabelledby: oa.QOE_SURVEY_TEXT
            }), xe(Lf, {
                id: oa.QOE_SURVEY_TEXT,
                children: "How's the viewing experience?"
            }), xe(bf, {
                className: `QoESurvey_module_thumbsUp__32b208ff ${i?Wg:""}`,
                tooltipLabel: c,
                "aria-label": c,
                "aria-describedby": oa.QOE_SURVEY_TEXT,
                icon: xe(Iv, {
                    name: i ? Cp.THUMBS_UP_FILLED : Cp.THUMBS_UP
                }),
                onClick: () => {
                    i || r || l || (n.sendEvent(Gl.SELECT_THUMBS_UP_PLAYER_CSAT_V1), o(!0), clearTimeout(Gg), setTimeout(t, 200))
                },
                containerRef: e
            }), xe(bf, {
                className: `QoESurvey_module_thumbsDown__32b208ff ${r?Wg:""}`,
                tooltipLabel: d,
                "aria-label": d,
                "aria-describedby": oa.QOE_SURVEY_TEXT,
                icon: xe(Iv, {
                    name: r ? Cp.THUMBS_DOWN_FILLED : Cp.THUMBS_DOWN
                }),
                onClick: () => {
                    i || r || l || (n.sendEvent(Gl.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1), a(!0), clearTimeout(Gg), setTimeout(t, 200))
                },
                containerRef: e
            }), xe(Ef, {}), xe(Af, {
                onClick: () => {
                    i || r || l || (n.sendEvent(Gl.DISMISS_PLAYER_CSAT_V1), s(!0), clearTimeout(Gg), t())
                },
                describedBy: oa.QOE_SURVEY_TEXT,
                selected: l
            })]
        })
    },
    $g = () => {
        const e = vv((e => e.playback.liveEdgeTime)),
            t = vv((e => e.setPlayback)),
            n = Ap((e => e.bigPicture));
        return xe(Tf, {
            onClick: () => {
                t("atLiveEdge", !0), t("currentTime", e), n.sendEvent(Gl.SKIP_TO_LIVE_CLICK)
            },
            label: "Skip to live"
        })
    },
    Kg = () => {
        const e = vv((e => e.closeToast));
        return xe(ze, {
            children: [xe(Lf, {
                id: oa.BROADCAST_OVER,
                children: "The live broadcast is over"
            }), xe(Ef, {}), xe(Af, {
                onClick: e,
                describedBy: oa.BROADCAST_OVER
            })]
        })
    },
    qg = () => {
        const e = vv((e => e.closeToast));
        return we((() => {
            const t = setTimeout(e, 3e3);
            return () => {
                clearTimeout(t)
            }
        }), [e]), xe(ze, {
            children: [xe(yf, {
                transitionTime: 3e3,
                ariaLabelledby: oa.FRAME_CAPTURED
            }), xe(Lf, {
                id: oa.FRAME_CAPTURED,
                children: "Screenshot copied to your clipboard!"
            }), xe(Ef, {}), xe(Af, {
                onClick: e,
                describedBy: oa.FRAME_CAPTURED
            })]
        })
    };
const zg = {
        [iv.QOE_SURVEY]: oa.QOE_SURVEY_TEXT,
        [iv.BROADCAST_OVER]: oa.BROADCAST_OVER
    },
    jg = () => {
        const e = Me(null),
            t = vv((e => e.toast.purpose)),
            n = vv((e => e.appearance.fullscreen)),
            i = vv((e => e.setDisplayList)),
            r = zg[t],
            a = "translateY(" + (n && o.iPadOS ? "calc(36px + 16px)" : "0") + ")",
            l = "translateY(calc(-100% - 16px))",
            s = "transform 400 ease-in-out",
            c = {
                enter: {
                    transform: l,
                    opacity: 1
                },
                enterActive: {
                    transition: s,
                    transform: a
                },
                enterDone: {
                    transform: a
                },
                exit: {
                    transform: a
                },
                exitActive: {
                    transition: s,
                    transform: l,
                    opacity: 1
                },
                exitDone: {
                    transform: l,
                    display: "none"
                }
            };
        return xe(Sf, {
            targetContent: t !== iv.EMPTY ? t : null,
            onContentChange: e => {
                i("toast", !!e)
            },
            delay: 400,
            styleOverrides: c,
            children: t => xe(hf, {
                className: "Toasts_module_toasts__25d07d44",
                ref: e,
                ariaLabelledby: r,
                children: [t === iv.QOE_SURVEY && xe(Yg, {
                    containerRef: e
                }), t === iv.SKIP_TO_LIVE && xe($g, {}), t === iv.BROADCAST_OVER && xe(Kg, {}), t === iv.FRAME_CAPTURED && xe(qg, {})]
            })
        })
    };
const Xg = ({
        text: e
    }) => xe("div", {
        className: "SpatialInstructions_module_instructions__4867d5d0",
        children: xe(nf, {
            size: Zs.MD,
            weight: Js.NORMAL,
            children: e
        })
    }),
    Zg = () => {
        const e = vv((e => e.liveEvent.isLiveEvent)) ? "Unmute broadcast" : "Unmute",
            {
                unmute: t
            } = lp();
        return xe(Tf, {
            onClick: t,
            label: e
        })
    },
    Jg = () => {
        const e = vv((e => e.setAppearance)),
            t = vv((e => e.clearSegment)),
            n = vv((e => e.playback.startTime)),
            i = vv((e => e.playback.endTime)),
            o = Ap((e => e.bigPicture));
        return xe(Tf, {
            onMouseEnter: () => e("mousedOverControlBar", !0),
            onMouseLeave: () => e("mousedOverControlBar", !1),
            onClick: () => {
                o.sendEvent(Gl.WATCH_FULL_VIDEO, {
                    start_time: n,
                    end_time: i
                }), t()
            },
            label: "Watch full video"
        })
    };
const Qg = o.android ? "Look around" : "Click and drag to look around",
    eb = o.android ? "Look around" : "Use arrow keys to see more",
    tb = () => {
        const e = vv((e => e.topCenterActionItem.purpose)),
            t = vv((e => e.setDisplayList));
        return xe(Sf, {
            targetContent: e !== c_.EMPTY ? e : null,
            onContentChange: e => {
                t("topCenterActionItem", !!e)
            },
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: e => xe(hf, {
                className: "TopCenterActionItems_module_topCenterActionItems__2bfde47f",
                children: [e === c_.UNMUTE && xe(Zg, {}), e === c_.WATCH_FULL_VIDEO && xe(Jg, {}), e === c_.SPATIAL_INSTRUCTIONS_CLICK && xe(Xg, {
                    text: Qg
                }), e === c_.SPATIAL_INSTRUCTIONS_ARROWS && xe(Xg, {
                    text: eb
                })]
            })
        })
    };
const nb = ({
    onReload: e
}) => {
    const t = vv((e => e.setDisplayList)),
        n = ya(ea.EXCLUDE_GLOBAL_BUTTON_STYLES, "AIWidgetError_module_reload__12d5a300");
    return xe(Vg, {
        message: "Unable to load Vimeo AI",
        componentType: "ai-error",
        onClose: () => t("aiWidget", !1),
        children: xe(df, {
            className: n,
            size: qs.CUSTOM,
            onClick: e,
            "data-component-type": "reload-ai",
            children: xe(nf, {
                size: Zs.MD,
                weight: Js.BOLD,
                children: "Try again"
            })
        })
    })
};
const ib = "Ask Vimeo AI",
    ob = ({
        style: e = {}
    }) => {
        const t = vv((e => e.displayList.aiWidget)),
            i = Ap((e => e.embed.vimeoUrl)),
            o = Ap((e => e.embed.videoId)),
            a = Ap((e => e.embed.onsite)),
            l = vv((e => e.embed.videoUnlistedHash)),
            s = vv((e => e.setDisplayList)),
            c = vv((e => e.appearance.rightContentAreaAnimating)),
            d = vv((e => e.embed.aiWidgetSignature)),
            u = Ap((e => e.bigPicture)),
            _ = gp(t),
            [p, m] = ke(!1),
            v = ya("AIWidget_module_aiWidget__9bd9d0b8", !t && "AIWidget_module_hidden__9bd9d0b8"),
            f = {
                transparentBackground: !a
            };
        d && (f.guestSignature = d);
        const h = n(`https://${i}/ai-player/${o}${l?`/${l}`:""}`, f),
            {
                componentVersion: E,
                hasError: g,
                componentTimeout: b,
                onError: C,
                onReload: T
            } = sp(),
            y = Ve((() => {
                u.sendEvent(Gl.OPEN_AI_OPTIONS, {}, {
                    [Yl.WEB]: {
                        page_name: "player"
                    },
                    [Yl.PRODUCT_ANALYTICS]: {
                        copy: ib,
                        feature: "ai",
                        product: "ai",
                        element: "icon"
                    }
                })
            }), [u]);
        return we((() => {
            t && (y(), p || m(!0))
        }), [t]), xe("div", r(r({
            className: v,
            style: e,
            "aria-label": "Ask Vimeo AI"
        }, _), {}, {
            children: [g && xe(nb, {
                onReload: T
            }), !g && p && xe(wf, {
                id: ia.AI_WIDGET_ID,
                url: h,
                title: ib,
                onError: C,
                timeout: b,
                visible: t,
                onClose: () => {
                    s("aiWidget", !1)
                },
                isAnimating: c,
                waitForReady: !0
            }, E)]
        }))
    },
    rb = () => {
        const e = Me(!0),
            {
                module: t,
                load: n,
                readyState: i
            } = ip(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (xe) {
                        return Promise.reject(xe)
                    }
                }
            }((function() {
                return import ("./Compass.lazy.module.js")
            }))),
            o = null == t ? void 0 : t.Compass,
            r = vv((e => e.playback.playInitiated)),
            a = vv((e => e.embed.compass));
        return a && r && e.current && (n(), e.current = !1), !a || i !== tp.LOADED && !r ? null : xe(o, {})
    };
const ab = () => {
    const e = vv((e => e.embed.persistentLogo)),
        t = vv((e => e.appearance.playerBreakpoint));
    return e && xe("div", {
        className: "PersistentLogo_module_persistentLogo__e4ddb428",
        tabIndex: -1,
        "aria-hidden": "true",
        "data-persistent-logo": !0,
        children: xe(Mf, {
            playerBreakpoint: t
        })
    })
};
const lb = ({
    children: e,
    shade: t,
    hideOnTiny: n
}) => {
    const i = vv((e => e.appearance.playerSizeMode)),
        o = ya("OutroContentWrapper_module_outroContent__1c499014", t && "OutroContentWrapper_module_outroShade__1c499014", i === Qa.TINY && n && "OutroContentWrapper_module_hidden__1c499014");
    return xe("div", {
        className: o,
        children: e
    })
};
const sb = () => {
    const e = vv((e => e.outro.outroData));
    return xe(lb, {
        hideOnTiny: !0,
        shade: !0,
        children: xe("div", {
            className: "TextOutro_module_textWrapper__eb1c7bb7",
            children: e && xe("div", {
                className: "TextOutro_module_text__eb1c7bb7",
                dangerouslySetInnerHTML: {
                    __html: e.text
                }
            })
        })
    })
};
const cb = ({
        url: e
    }) => {
        const t = {};
        return e && (t.backgroundImage = `url(${e})`), xe("div", {
            className: "OutroContentBackground_module_background__fad7b858",
            style: t
        })
    },
    db = () => {
        const e = vv((e => e.outro.outroData));
        return e && xe(ze, {
            children: [xe(cb, {
                url: null == e ? void 0 : e.imageUrl
            }), xe(lb, {
                shade: !0,
                hideOnTiny: !0,
                children: xe(Xf, {})
            })]
        })
    };
const ub = () => {
    const e = vv((e => e.events)),
        t = vv((e => e.outro.outroData)),
        n = {};
    return null != t && t.imageUrl && (n.backgroundImage = `url(${t.imageUrl})`), xe(ze, {
        children: [xe(gv, {
            visible: !0,
            children: xe("div", {
                className: "LinkOutro_module_linkBackground__1d6e5c98",
                style: n
            })
        }), xe(lb, {
            shade: !0,
            children: xe("div", {
                className: "LinkOutro_module_linkWrapper__1d6e5c98",
                children: t && xe(ze, {
                    children: [t.title && xe("h1", {
                        className: "LinkOutro_module_title__1d6e5c98",
                        children: t.title
                    }), t.description && xe("p", {
                        className: "LinkOutro_module_description__1d6e5c98",
                        children: t.description
                    }), t.text && t.url && xe("div", {
                        className: "LinkOutro_module_buttonWrap__1d6e5c98",
                        children: xe(Tv, {
                            href: t.url,
                            className: "LinkOutro_module_button__1d6e5c98",
                            onClick: () => e.fire(ro, null == t ? void 0 : t.url),
                            children: xe("span", {
                                children: t.text
                            })
                        })
                    }), t.text2 && t.url2 && xe(Tv, {
                        href: t.url2,
                        className: "LinkOutro_module_link__1d6e5c98",
                        onClick: () => e.fire(to, null == t ? void 0 : t.url2),
                        children: xe("span", {
                            children: t.text2
                        })
                    })]
                })
            })
        })]
    })
};
const _b = () => {
    const e = vv((e => e.outro.outroData)),
        t = function(e) {
            const t = vv((e => e.events));
            return Ve((function() {
                t.fire(oo, e)
            }), [e, t])
        }(null == e ? void 0 : e.url);
    return e && xe(lb, {
        children: null != e && e.url ? xe(Tv, {
            href: e.url,
            className: "ImageOutro_module_imageOutroLink__7a84ec40",
            onClick: t,
            targetBlank: !0,
            children: xe(pb, {
                url: e.imageUrl,
                altText: null == e ? void 0 : e.alt_text
            })
        }) : xe(pb, {
            url: e.imageUrl,
            altText: null == e ? void 0 : e.alt_text
        })
    })
};

function pb({
    url: e,
    altText: t
}) {
    return xe("div", r({
        role: "img",
        className: "ImageOutro_module_imageOutro__7a84ec40",
        style: {
            backgroundImage: `url(${e})`
        }
    }, t ? {
        ariaLabel: t
    } : {}))
}
const mb = () => xe(ze, {
    children: [xe(cb, {}), xe(lb, {
        shade: !0
    }), ";"]
});
const vb = ({
    videos: e
}) => {
    const t = Ap((e => e.loadVideoViaIframe)),
        n = Ap((e => e.embed.onsite)),
        i = vv((e => e.events)),
        o = vv((e => e.user.isPayingOwner)),
        a = vv((e => e.embed.svvContext)),
        l = e => n => {
            i.fire(Xi, e.id), o && !a && (n.preventDefault(), t(e.id, {
                autoplay: !0
            }))
        },
        s = ya("VideosList_module_videoLink__e7886b41", rf.focusable);
    return e.length && xe("ul", {
        className: "VideosList_module_videosList__e7886b41",
        "data-num-videos": e.length,
        children: e.map((e => xe("li", {
            children: xe(Tv, r(r({
                className: s,
                targetBlank: !n,
                href: e.url,
                onClick: l(e)
            }, jv), {}, {
                children: [xe(Vf, {
                    url: e.thumbnail,
                    className: "VideosList_module_videoThumbnail__e7886b41"
                }), xe("header", {
                    className: "VideosList_module_videoHeader__e7886b41",
                    children: [xe(nf, {
                        className: "VideosList_module_videoTitle__e7886b41",
                        weight: Js.BOLD,
                        element: "h1",
                        size: Zs.MD,
                        color: Qs.WHITE,
                        children: e.title
                    }), e.byline && xe(nf, {
                        className: "VideosList_module_videoByline__e7886b41",
                        element: "h2",
                        children: e.byline
                    })]
                })]
            }))
        }, e.id)))
    })
};
var fb = "FollowButton_module_icon__9a75dd35";
const hb = () => {
    const [e, t] = ke(!1), n = Ap((e => e.user.isClipOwner)), i = vv((e => e.events)), o = vv((e => e.user.following)), r = vv((e => e.user.loggedIn)), a = vv((e => e.user.persistUserAction));
    let l = "Follow";
    const s = o && e,
        c = o && !e;
    s && (l = "Unfollow"), c && (l = "Following");
    const d = ya(fb, "FollowButton_module_check__9a75dd35"),
        u = ya(fb, "FollowButton_module_close__9a75dd35"),
        _ = ya("FollowButton_module_followButton__9a75dd35", c && "FollowButton_module_following__9a75dd35");
    return xe("div", {
        onMouseEnter: () => o && t(!0),
        onMouseLeave: () => t(!1),
        className: "FollowButton_module_followButtonContainer__9a75dd35",
        children: xe(df, {
            className: _,
            onClick: () => {
                if (r && !n) {
                    if (i.fire(mi), o) return a($p.FOLLOWING, "DELETE"), void i.fire(io);
                    a($p.FOLLOWING, "PUT"), i.fire(no)
                }
            },
            children: [!o && xe(Iv, {
                className: fb,
                name: Cp.PLUS_SYMBOL
            }), c && xe(Iv, {
                className: d,
                name: Cp.CHECKMARK
            }), s && xe(Iv, {
                className: u,
                name: Cp.CLOSE
            }), xe("span", {
                className: "FollowButton_module_followButtonText__9a75dd35",
                children: l
            })]
        })
    })
};
const Eb = ({
    titleMarkup: e
}) => {
    const t = Ap((e => !e.user.isClipOwner));
    return xe("div", {
        className: "VideosHeader_module_videosHeaderWrapper__82d8877c",
        children: xe("header", {
            className: "VideosHeader_module_videosHeader__82d8877c",
            children: [xe(nf, {
                className: "VideosHeader_module_videosTitle__82d8877c",
                size: Zs.LG,
                element: "h1",
                containsMarkup: !0,
                children: e
            }), t && xe(hb, {})]
        })
    })
};
const gb = () => {
    var e;
    const t = vv((e => e.outro.outroData));
    return (null == t || null == (e = t.videos) ? void 0 : e.length) > 0 && xe(ze, {
        children: [xe(cb, {
            url: t.imageUrl
        }), xe(lb, {
            shade: !0,
            children: xe("div", {
                className: "VideosOutro_module_videosOutro__aa31a3f4",
                children: [xe(Eb, {
                    titleMarkup: t.context
                }), xe(vb, {
                    videos: t.videos
                })]
            })
        })]
    })
};

function bb({
    children: e,
    url: t,
    onClick: n,
    type: i = "purchase-item"
}) {
    const o = ya("VODButton_module_VODButton__3dccb3f8", "watch" === i && "VODButton_module_watch__3dccb3f8");
    return xe(Tv, r(r({
        className: o,
        role: "button",
        href: t
    }, va(n)), {}, {
        children: e
    }))
}
const Cb = () => {
        const e = vv((e => e.vod.url)),
            t = vv((e => e.setDisplayList)),
            n = vv((e => e.vod.isPreorder)),
            i = (vv((e => e.vod.releaseDate)), n ? "Watch on {releaseDate}" : "Watch Now"),
            o = am();
        return xe(bb, {
            url: e,
            type: "watch",
            onClick: e => {
                n || (e.preventDefault(), t("outro", !1), o(e))
            },
            children: i
        })
    },
    Tb = () => {
        const e = vv((e => e.vod.isComingSoon)),
            t = vv((e => e.vod.isPreorder)),
            n = vv((e => e.vod.releaseDate));
        let i = "Coming soon to Vimeo On Demand.";
        return e && n && (i = "Coming soon to Vimeo On Demand on " + n + "."), t && (i = "Pre-order now. Watch on " + n + "."), xe("p", {
            children: i
        })
    };
const yb = e => {
    const t = function({
        type: e
    }) {
        switch (e) {
            case "buy":
                return Cp.VOD_DOWNLOAD;
            case "rent":
                return Cp.VOD_RENT;
            case "subscribe":
                return Cp.VOD_SUBSCRIBE;
            default:
                return Cp.VOD
        }
    }(e);
    return xe("div", {
        className: "VODIcon_module_VODIconContainer__f6dd6c94",
        children: xe(Iv, {
            className: "VODIcon_module_VODIcon__f6dd6c94",
            name: t
        })
    })
};
const Lb = ({
    product_id: e,
    formattedLabel: t,
    type: n
}) => {
    const i = vv((e => e.vod.url)),
        o = am(e);
    return xe("li", {
        className: "PurchaseOptionItem_module_purchaseOptionItem__9ee33594",
        children: xe(bb, {
            url: `${i}#buy=${e}`,
            onClick: e => {
                e.preventDefault(), o(e)
            },
            children: [xe(yb, {
                type: n
            }), xe("p", {
                className: "PurchaseOptionItem_module_label__9ee33594",
                children: t
            })]
        })
    })
};
const Ab = () => {
        const e = vv((e => e.vod.purchaseOptions));
        return xe("ul", {
            className: "PurchaseOptions_module_purchaseOptions__2aad36ed",
            children: e.map(((e, t) => xe(Lb, r({}, e), `${e.type}-${t}`)))
        })
    },
    Sb = () => {
        const e = vv((e => e.vod.isComingSoon)),
            t = vv((e => e.vod.isPreorder));
        return xe(ze, {
            children: [!e && xe(Ab, {}), (t || e) && xe(Tb, {})]
        })
    };
const Ib = () => {
        const e = vv((e => e.vod.url)),
            t = vv((e => e.vod.title)),
            n = vv((e => e.vod.isAvailableInCountry)),
            i = vv((e => e.vod.purchased)),
            o = vv((e => e.outro.outroData));
        return o && xe(ze, {
            children: [(null == o ? void 0 : o.imageUrl) && xe(cb, {
                url: null == o ? void 0 : o.imageUrl
            }), xe(lb, {
                shade: !0,
                children: xe("div", {
                    className: "VODOutro_module_VODOutroContainer__e53bfe58",
                    children: [xe("h1", {
                        "aria-describedby": "new-window",
                        className: "VODOutro_module_VODHeader__e53bfe58",
                        children: xe(Tv, {
                            href: e,
                            children: t
                        })
                    }), n && xe(i ? Cb : Sb, {})]
                })
            })]
        })
    },
    Ob = () => {
        const e = vv((e => e.displayList.outro)),
            t = vv((e => e.outro.active)),
            n = vv((e => e.outro.purpose)),
            i = ya("Outro_module_outroWrapper__552ef1cd", Qr.VP_OUTRO_WRAPPER, !t && "Outro_module_inactive__552ef1cd");
        return xe(gv, {
            visible: e,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: xe("div", {
                className: i,
                "data-content-area-sibling-eligible": !0,
                children: xe("div", {
                    className: "Outro_module_outro__552ef1cd",
                    role: "dialog",
                    children: [n === E_.TEXT && xe(sb, {}), n === E_.SHARE && xe(db, {}), n === E_.VIDEOS && xe(gb, {}), n === E_.LINK && xe(ub, {}), n === E_.IMAGE && xe(_b, {}), n === E_.NOTHING && xe(mb, {}), n === E_.VOD && xe(Ib, {})]
                })
            })
        })
    };
const Pb = ({
    text: e
}) => xe("h3", {
    children: [xe(Iv, {
        name: Cp.WARN_TRIANGLE,
        className: "Warning_module_warningIcon__d2643ae4"
    }), xe("span", {
        dangerouslySetInnerHTML: {
            __html: e
        }
    })]
});

function Rb() {
    const e = `See a <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="${ta.NEW_WINDOW_DESCRIPTION}">list of browsers</a> that support 360 viewing.`;
    return xe(Pb, {
        text: e
    })
}

function Nb() {
    const e = `Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="${ta.NEW_WINDOW_DESCRIPTION}">supported browsers and settings</a>.`;
    return xe(Pb, {
        text: e
    })
}
const Db = ({
        visible: e,
        children: t,
        duration: n,
        onComplete: i
    }) => xe(Ye, { in: e,
        duration: n,
        styles: {
            enter: {
                transform: "translateY(-100%)",
                transition: `transform ${n}ms linear, opacity ${n}ms`,
                opacity: 0
            },
            enterActive: {
                opacity: 1,
                transition: `transform ${n}ms cubic-bezier(0, 1.14, 0.57, 1.21), opacity ${n}ms`,
                transform: "translateY(0)",
                animationName: "bounce",
                animationDelay: n,
                animationDuration: "0.5s",
                animationFillMode: "forwards"
            },
            enterDone: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exit: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exitActive: {
                animationFillMode: "none",
                opacity: 0,
                transform: "translateY(-100%)",
                transition: `transform ${2*n}ms linear, opacity ${2*n}ms linear`
            },
            exitDone: {
                display: "none"
            }
        },
        onExited: i,
        children: t
    }),
    wb = () => {
        const e = vv((e => e.displayList.alert)),
            t = Me(null),
            n = vv((e => e.setAlert)),
            i = vv((e => e.setDisplayList)),
            o = vv((e => e.alert.currentAlert)),
            r = Ve((() => i("alert", !1)), [i]),
            a = Ve((() => n("currentAlert", T_.EMPTY)), [n]);
        return we((function() {
            e && (clearTimeout(t.current), t.current = setTimeout(r, 1e3))
        }), [e, o]), xe(Db, {
            visible: e,
            duration: 100,
            onComplete: a,
            children: xe("div", {
                className: "Alert_module_alert__bde6a4f3",
                role: "alert",
                hidden: !e,
                children: [xe(df, {
                    onClick: r,
                    icon: xe(Iv, {
                        name: Cp.CLOSE,
                        className: "Alert_module_closeIcon__bde6a4f3"
                    }),
                    "aria-label": "Close alert",
                    className: "Alert_module_close__bde6a4f3"
                }), o === T_.SPATIAL_UNSUPPORTED && xe(Rb, {}), o === T_.SPATIAL_FAILURE && xe(Nb, {})]
            })
        })
    };
const kb = "opacity 250ms ease-out",
    Mb = {
        enter: {
            opacity: 0
        },
        enterActive: {
            opacity: 1,
            transition: kb
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: kb
        },
        exitDone: {
            display: "none"
        }
    },
    Vb = Object.values(If),
    Bb = () => {
        const e = Ap((e => e.element)),
            t = Ap((e => e.accessGate.purpose)),
            n = Ap((e => e.accessGate.url)),
            i = Ap((e => e.accessGate.title)),
            o = Ap((e => e.accessGate.accessGateReady)),
            r = Ap((e => e.accessGate.accessGateLoaded)),
            a = Ap((e => e.accessGate.closeAccessGate)),
            l = Ap((e => e.accessGate.setAccessGateReady)),
            s = Ap((e => e.accessGate.setAccessGateLoaded)),
            c = Ap((e => e.accessGate.sendGateBPEvent)),
            d = Ap((e => e.bigPicture)),
            [u, _] = ke(!1),
            [p, m] = ke(!1),
            v = t !== Os.EMPTY,
            f = u && p && v,
            h = u && v && !r,
            E = f && o,
            g = ya(ea.REMOTE_ACCESS_GATE, "RemoteAccessGate_module_accessGate__82178468", h && "RemoteAccessGate_module_waitingToDisplay__82178468", E && "RemoteAccessGate_module_visible__82178468"),
            {
                componentVersion: b,
                hasError: C,
                componentTimeout: T,
                onError: y,
                onReload: L
            } = sp();
        return we((() => {
            _(!0)
        }), []), we((() => {
            const t = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (xe) {
                        return Promise.reject(xe)
                    }
                }
            }((function() {
                return function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(tt(e), (function() {
                    m(!0)
                }))
            }));
            p || t()
        }), [p, e]), xe(Ye, { in: f,
            styles: Mb,
            duration: 250,
            children: xe("div", {
                className: "RemoteAccessGate_module_accessGateWrapper__82178468",
                children: [C && xe(Ub, {
                    onReload: L
                }), !C && f && xe(Nf, {
                    visible: E,
                    id: t,
                    url: n,
                    title: i,
                    className: g,
                    timeout: T,
                    bigPicture: d,
                    waitForReady: !0,
                    onClose: a,
                    onError: e => {
                        Vb.includes(null == e ? void 0 : e.message) && y(), c(Rs.ERROR, e)
                    },
                    onRemoteComponentReady: l,
                    onIframeLoad: s
                }, b)]
            })
        })
    };
const Ub = ({
    onReload: e
}) => {
    const t = ya(ea.EXCLUDE_GLOBAL_BUTTON_STYLES, "RemoteAccessGateError_module_reload__765f151c");
    return xe("div", {
        className: "RemoteAccessGateError_module_container__765f151c",
        "data-component-type": "access-gate",
        children: [xe(Iv, {
            name: Cp.INFO_CIRCLE,
            className: "RemoteAccessGateError_module_icon__765f151c",
            "aria-hidden": "true"
        }), xe(nf, {
            size: Zs.LG,
            weight: Js.NORMAL,
            className: "RemoteAccessGateError_module_messageText__765f151c",
            role: "alert",
            children: "Unable to load registration form"
        }), xe(df, {
            className: t,
            size: qs.CUSTOM,
            onClick: e,
            "data-component-type": "reload-access-gate",
            children: xe(nf, {
                size: Zs.MD,
                weight: Js.BOLD,
                children: "Try again"
            })
        })]
    })
};
const xb = () => {
    const e = Ap((e => e.login.status)),
        t = Ap((e => e.embed.videoId)),
        n = Ap((e => e.embed.vimeoUrl)),
        {
            loginText: i,
            buttonTarget: o
        } = ((e = Bs.NOT_LOGGED_IN) => {
            const t = {
                loginText: Fl() ? {
                    title: "Sign in to Vimeo to watch this video",
                    subtitle: "You may need to allow cookies first. If asked, select <b>Allow</b> to continue.",
                    buttonText: "Sign in"
                } : {
                    title: "Sign in to Vimeo",
                    subtitle: "This video is private. Sign in to watch.",
                    buttonText: "Sign in"
                },
                buttonTarget: jr.POPUP
            };
            switch (e) {
                case Bs.LOGGED_IN_NO_ACCESS:
                    t.loginText = {
                        title: "Private Video",
                        subtitle: "Sorry, you don’t have permission to watch.",
                        buttonText: null
                    };
                    break;
                case Bs.LOGGED_IN_STORAGE_ACCESS_REQUIRED:
                    t.loginText = {
                        title: "Allow cookies",
                        subtitle: "Your browser will ask if you want to allow cookies. Select <b>Allow</b> to continue.",
                        buttonText: "Continue"
                    };
                    break;
                case Bs.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED:
                    t.loginText = {
                        title: "Continue to sign in",
                        subtitle: "You may now sign in to watch this video.",
                        buttonText: "Continue"
                    };
                    break;
                case Bs.ALL_ACCESS_ATTEMPTS_FAILED:
                    t.loginText = {
                        title: "Video unavailable",
                        subtitle: "Try watching on vimeo.com.",
                        buttonText: "Watch on Vimeo"
                    }, t.buttonTarget = jr.ON_SITE
            }
            return t
        })(e),
        {
            loginHandler: r
        } = (() => {
            const e = Ap((e => e.events)),
                t = Ap((e => e.embed.videoId)),
                n = Me(null),
                {
                    openLoginPopup: i
                } = nm({
                    url: `/video/${t}/login/private`,
                    context: Us.PRIVATE_LOCKED
                });
            return we((() => {
                n.current = function({
                    events: e,
                    dependencies: t = xs
                }) {
                    const n = {
                            onLoginRequested: function(t) {
                                c = t, !i() || a ? (d(), u()) : (l++, o(d).then((t => t ? (a = !0, r || u(), void e.fire(wi, Us.PRIVATE)) : void(v(1) ? p(Bs.ALL_ACCESS_ATTEMPTS_FAILED) : u()))).catch((e => {})))
                            }
                        },
                        {
                            storageAccessRequired: i,
                            requestCookieAccess: o
                        } = t;
                    let r = !1,
                        a = !1,
                        l = 0,
                        s = 0,
                        c = qa;

                    function d() {
                        r = !0, c()
                    }

                    function u() {
                        e.once(Vi, _)
                    }

                    function _() {
                        s++;
                        const e = m();
                        v() ? p(Bs.ALL_ACCESS_ATTEMPTS_FAILED) : p(!e && r ? Bs.LOGGED_IN_STORAGE_ACCESS_REQUIRED : Bs.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED)
                    }

                    function p(t) {
                        e.fire(er, t)
                    }

                    function m() {
                        return l >= 2
                    }

                    function v(e = 2) {
                        const t = !i() && r && s > 0,
                            n = s >= e,
                            o = m();
                        return n && o || t
                    }
                    return n
                }({
                    events: e
                })
            }), [e]), {
                loginHandler: () => {
                    n.current && n.current.onLoginRequested(i)
                }
            }
        })(),
        a = e === Bs.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED || e === Bs.ALL_ACCESS_ATTEMPTS_FAILED;
    return xe("div", {
        className: "PrivateGate_module_privateGateWrapper__19e4c72e",
        "data-private-gate": !0,
        children: [xe(nf, {
            element: "h1",
            className: "PrivateGate_module_header__19e4c72e",
            children: i.title
        }), xe(nf, {
            className: "PrivateGate_module_subtitle__19e4c72e",
            weight: Js.NORMAL,
            containsMarkup: !0,
            "data-private-text": !0,
            children: i.subtitle
        }), e !== Bs.LOGGED_IN_NO_ACCESS && xe(df, {
            role: a ? "link" : void 0,
            color: zs.PRIMARY,
            className: ya("PrivateGate_module_login__19e4c72e", "PrivateGate_module_loginButton__19e4c72e", rf.focusableButton),
            "aria-describedby": a ? ta.NEW_WINDOW_DESCRIPTION : void 0,
            onClick: () => {
                if (o === jr.POPUP) return void r();
                const e = `https://${n}/${t}`;
                window.open(e, "_blank")
            },
            children: i.buttonText
        })]
    })
};

function Fb(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Hb = Yb((function(e, i) {
    const o = new URLSearchParams({
            password: window.btoa(sr(e))
        }),
        r = n(i, t(window.location.search));
    return Fb(Ie(r, {
        method: "post",
        body: o.toString(),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include"
    }), (function(e) {
        return Fb(e.json(), (function(t) {
            if (!e.ok || !1 === t) throw new Error("Password submission failed");
            return t
        }))
    }))
}));

function Wb() {}

function Gb(e) {
    var t = e();
    if (t && t.then) return t.then(Wb)
}

function Yb(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}
const $b = () => {
    const e = Ap((e => e.events)),
        t = Ap((e => e.embed.playerUrl)),
        n = Ap((e => e.embed.referrer)),
        i = Ap((e => e.embed.videoId)),
        o = Me(null),
        r = Me(null),
        a = Me(null),
        [l, s] = ke(!1),
        [c, d] = ke("There is an error with this input."),
        [u, _] = ke(!1),
        p = `https://${t}/video/${i}/check-password?referrer=${n}`,
        m = "Enter password",
        v = ya("PasswordGate_module_submitPassword__34c044bd", u && "PasswordGate_module_loading__34c044bd"),
        f = () => {
            const e = a.current;
            e.focus(), _(!1), s(!0), e.value.length ? d("The password you entered is incorrect. Please try again.") : d("Please enter the password.")
        },
        h = Yb((function(t) {
            return t.preventDefault(), d(""), s(!1), Gb((function() {
                if (a.current.checkValidity()) return _(!0), Gb((function() {
                    if (a.current.checkValidity()) return function(e) {
                        if (e && e.then) return e.then(Wb)
                    }(function(n, i) {
                        try {
                            var o = Fb(Hb(a.current.value, p), (function(t) {
                                t && e.fire(xi, t)
                            }))
                        } catch (t) {
                            return i()
                        }
                        return o && o.then ? o.then(void 0, i) : o
                    }(0, (function() {
                        f()
                    })))
                }));
                f()
            }))
        }));
    return xe("div", {
        className: "PasswordGate_module_passwordGateWrapper__34c044bd",
        "data-password-gate": !0,
        children: [xe(nf, {
            className: "PasswordGate_module_header__34c044bd",
            element: "h1",
            children: "Password required"
        }), xe(nf, {
            className: "PasswordGate_module_subtitle__34c044bd",
            weight: Js.NORMAL,
            containsMarkup: !0,
            "data-private-text": !0,
            children: "If you have access, enter the password to watch."
        }), xe("form", {
            className: "PasswordGate_module_form__34c044bd",
            ref: o,
            noValidate: !0,
            onSubmit: h,
            children: [xe(Jf, {
                message: c,
                visible: l,
                wrapperEl: a.current
            }), xe("input", {
                className: "PasswordGate_module_passwordInput__34c044bd",
                placeholder: m,
                required: !0,
                "aria-required": "true",
                "aria-label": m,
                "aria-invalid": l ? "true" : "false",
                ref: a,
                onInput: () => s(!1),
                minLength: 1,
                type: "password"
            }), xe(df, {
                className: v,
                onClick: h,
                ref: r,
                disabled: l,
                focusable: !1,
                "data-submit-password": !0,
                children: "Submit"
            })]
        })]
    })
};
const Kb = () => xe("div", {
    className: "GeoBlockingGate_module_geoblockingGateWrapper__075a0430",
    "data-geo-blocking-gate": !0,
    children: xe(nf, {
        className: "GeoBlockingGate_module_header__075a0430",
        element: "h1",
        weight: Js.BOLD,
        children: "This video is not available in your region"
    })
});
const qb = () => {
        const e = Ap((e => e.user.isClipOwner)),
            t = {
                header: e ? "Account is over the DRM limit" : "Video is currently unavailable",
                message: "Contact the Vimeo sales team to add more licenses, or turn off DRM. Until then, viewers will see this video listed as unavailable."
            };
        return xe("div", {
            className: "DRMPlaybackUnavailableGate_module_wrapper__9e5b96d5",
            "data-drm-playback-unavailable-gate": !0,
            children: [xe(nf, {
                className: "DRMPlaybackUnavailableGate_module_header__9e5b96d5",
                element: "h1",
                weight: Js.BOLD,
                children: t.header
            }), e && xe(nf, {
                className: "DRMPlaybackUnavailableGate_module_message__9e5b96d5",
                weight: Js.NORMAL,
                children: t.message
            })]
        })
    },
    zb = () => {
        const e = Ap((e => e.localAccessGate.purpose));
        return e !== Np.EMPTY && xe("div", {
            className: "LocalAccessGate_module_localAccessGateWrapper__28aa198a",
            children: [e === Np.GEO_BLOCKED && xe(Kb, {}), e === Np.DRM_PLAYBACK_UNAVAILABLE && xe(qb, {}), e === Np.PASSWORD && xe($b, {}), e === Np.PRIVATE_LOCKED && xe(xb, {}), e === Np.ERROR && xe(Qf, {})]
        })
    };

function jb() {
    const e = vv((e => e.setInteractive)),
        t = vv((e => e.interactive.instanceId)),
        n = vv((e => e.interactive.active)),
        i = vv((e => e.interactive.enabled)),
        o = ya("VimeoInteractive_module_container__211f1fff", n && "VimeoInteractive_module_active__211f1fff");
    return i ? t ? xe("div", {
        children: xe("div", {
            id: t,
            className: o
        }, t)
    }) : (e("instanceId", `vp-vimeo-interactive-instance-${Math.random().toString(36).substring(2)}`), null) : null
}
const Xb = () => xe("div", {
        className: "DefaultVideoThumbnail_module_defaultVideoThumbnail__1992ba48",
        children: xe(Iv, {
            name: Cp.CAMERA,
            className: "DefaultVideoThumbnail_module_icon__1992ba48"
        })
    }),
    Zb = () => {
        const e = Ap((e => e.videoThumbnail.isDisplayed)),
            t = Ap((e => e.videoThumbnail.thumbnailUrl)),
            n = Ap((e => e.videoThumbnail.shouldCoverBackground)),
            i = {
                backgroundImage: `url(${t})`
            },
            o = ya(Jr.VP_PREVIEW, "VideoThumbnail_module_videoThumbnail__d1b35579", n && "VideoThumbnail_module_cover__d1b35579");
        return e ? t ? xe("div", {
            className: o,
            style: i,
            "data-thumb": t
        }) : xe(Xb, {}) : null
    },
    Jb = () => xe("span", {
        id: ta.NEW_WINDOW_DESCRIPTION,
        hidden: !0,
        children: "(opens a new window)"
    });
var Qb = "LiveStatusAlerts_module_schedule__cf2b4eb9";
const eC = () => {
    const e = vv((e => e.liveEvent.isLiveEvent)),
        t = vv((e => e.liveEvent.isOnline)),
        n = vv((e => e.liveEvent.liveEventSchedule)),
        i = vv((e => e.liveEvent.isPending)),
        o = vv((e => e.liveEvent.isActive)),
        r = vv((e => e.liveEvent.isEnded)),
        a = vv((e => e.liveEvent.isArchived)),
        l = vv((e => e.liveEvent.dvrEnabled)),
        s = vv((e => e.liveEvent.showEventSchedule)),
        c = vv((e => e.playback.currentTime)),
        d = vv((e => e.playback.atLiveEdge)),
        u = vv((e => e.config.request.lang)),
        _ = vv((e => e.element)),
        [p, m] = ke(null),
        [v, f] = ke(null),
        [h, E] = ke(new Date),
        g = Me(null),
        b = nt((() => new Date(n)), [n]),
        C = r && l && 0 !== c || !1 === t && !d,
        T = null === t,
        y = r && !C && !a,
        L = !1 === t && !C;
    return we((() => (T && s ? (i || o) && n ? oc(b, h) > 0 ? (m("time"), f(function(e, t, n = new Date) {
        const i = oc(t),
            o = Math.ceil(i / 1e3).toFixed(0),
            r = Math.ceil(i / 6e4).toFixed(0),
            a = Math.ceil(i / 36e5).toFixed(0),
            l = Math.ceil(i / 864e5).toFixed(0),
            s = n.toDateString() === t.toDateString();
        if (parseInt(l, 10) > 1 || !s) return ("This event is scheduled for\n" + new Intl.DateTimeFormat(e, {
            month: "long",
            day: "numeric"
        }).format(t) + "\nat " + new Intl.DateTimeFormat(e, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(t)).split("\n");
        if (parseInt(a, 10) > 1 && s) return ("This event is scheduled for\nToday\nat " + new Intl.DateTimeFormat(e, {
            hour: "numeric",
            minute: "numeric"
        }).format(t)).split("\n");
        let c;
        const d = parseInt(r, 10) > 1;
        return c = d ? "minutes" : parseInt(o, 10) > 1 ? "seconds" : "second", ("This event will start in\n" + (d ? r : o) + " " + c).split("\n")
    }(u, b, h)), g.current = setInterval((() => {
        E(new Date)
    }), 1e3)) : (m("text"), f("This event hasn't started yet")) : (i || o) && (m("text"), f("This event hasn't started yet")) : y ? (m("text"), f("Live event ended")) : L ? (m("text"), f("Live stream offline")) : (m(null), f(null)), () => {
        g.current && (clearInterval(g.current), g.current = null)
    })), [i, o, r, a, t, C, n, u, b, h, T, s, y, L]), e && p && v && Qe(xe("div", {
        className: "LiveStatusAlerts_module_eventTextWrapper__cf2b4eb9",
        "data-live-status-alerts": !0,
        children: ["text" === p && xe("span", {
            className: Qb,
            children: v
        }), "time" === p && xe("div", {
            className: Qb,
            "data-live-event-schedule": !0,
            children: [xe("span", {
                className: "LiveStatusAlerts_module_scheduleTitle__cf2b4eb9",
                children: v[0]
            }), xe("span", {
                className: "LiveStatusAlerts_module_scheduleBody__cf2b4eb9",
                children: v[1]
            }), xe("span", {
                className: "LiveStatusAlerts_module_scheduleFooter__cf2b4eb9",
                children: v[2]
            })]
        })]
    }), _)
};
const tC = () => {
    const e = vv((e => e.chromecast.isChromecastConnected)),
        t = vv((e => e.chromecast.receiverFriendlyName)),
        n = vv((e => e.playback.ended));
    return e && !n && xe("div", {
        className: "ChromecastText_module_wrapper__5708223b",
        children: xe("span", {
            className: "ChromecastText_module_text__5708223b",
            children: `Casting on ${t}`
        })
    })
};

function nC(e, t) {
    const n = t.querySelector(`.${Jr.VP_PLAYER_UI_CONTAINER}`),
        i = t.querySelector(`.${Jr.VP_PLAYER_UI_OVERLAYS}`),
        o = t.querySelector(`.${Jr.VP_VIDEO_WRAPPER}`);
    it(xe(Sp, {
        player: e,
        children: [xe(Ig, {}), xe(Bb, {}), xe(zb, {}), xe(lg, {
            element: o,
            children: xe(Zb, {})
        }), xe(hv, {
            player: e,
            children: [xe(ig, {}), xe(vg, {}), xe(lg, {
                element: i,
                children: [xe(tb, {}), xe(jg, {}), xe(fg, {}), xe(Ph, {}), xe(ph, {}), xe(Sh, {}), xe(Dh, {}), xe(tg, {}), xe(mg, {}), xe(qE, {}), xe(ag, {}), xe(Fg, {}), xe(Hg, {}), xe(rb, {}), xe(Ob, {}), xe(wb, {}), xe(jb, {}), xe(tC, {})]
            }), xe(eC, {}), xe(ab, {}), xe(Pg, {}), xe(Og, {})]
        }), xe(Jb, {})]
    }), n)
}
const iC = Symbol("CONFIG_CHANGED"),
    oC = Symbol("TELECINE_READY"),
    rC = Symbol("TELECINE_VIDEO_INIT"),
    aC = Symbol("PLAY_INITIATED"),
    lC = Symbol("QUALITY_CHANGED"),
    sC = Symbol("CUE_CHANGED"),
    cC = Symbol("CAPTIONS_CHANGED"),
    dC = Symbol("SPATIAL_PLAYBACK_TOGGLED"),
    uC = Symbol("PICTURE_IN_PICTURE_AVAILABLE_SAFARI"),
    _C = Symbol("HLS_QUALITY_CHANGED"),
    pC = Symbol("REQUEST_COMPLETE_LIVE_SUBTITLES"),
    mC = Symbol("COMPLETE_LIVE_SUBTITLES_LOADED"),
    vC = Symbol("COMPLETE_LIVE_SUBTITLES_ERROR");
var fC = Object.freeze({
    __proto__: null,
    CONFIG_CHANGED: iC,
    TELECINE_READY: oC,
    TELECINE_VIDEO_INIT: rC,
    PLAY_INITIATED: aC,
    QUALITY_CHANGED: lC,
    CUE_CHANGED: sC,
    CAPTIONS_CHANGED: cC,
    SPATIAL_PLAYBACK_TOGGLED: dC,
    PICTURE_IN_PICTURE_AVAILABLE_SAFARI: uC,
    HLS_QUALITY_CHANGED: _C,
    REQUEST_COMPLETE_LIVE_SUBTITLES: pC,
    COMPLETE_LIVE_SUBTITLES_LOADED: mC,
    COMPLETE_LIVE_SUBTITLES_ERROR: vC
});
const hC = Symbol("liveeventpending"),
    EC = Symbol("liveeventactive"),
    gC = Symbol("liveeventstarting"),
    bC = Symbol("liveeventstarted"),
    CC = Symbol("liveeventended"),
    TC = Symbol("livearchivestarted"),
    yC = Symbol("livearchivedone"),
    LC = Symbol("livearchiveerror"),
    AC = Symbol("livesettingsupdated"),
    SC = Symbol("lowlatencyfallback"),
    IC = Symbol("livestatssuccess"),
    OC = Symbol("livestatsfailure");
var PC = Object.freeze({
    __proto__: null,
    EVENT_PENDING: hC,
    EVENT_ACTIVE: EC,
    EVENT_STARTING: gC,
    EVENT_STARTED: bC,
    EVENT_ENDED: CC,
    ARCHIVE_STARTED: TC,
    ARCHIVE_DONE: yC,
    ARCHIVE_ERROR: LC,
    SETTINGS_UPDATED: AC,
    LOW_LATENCY_FALLBACK: SC,
    LIVE_STATS_SUCCESS: IC,
    LIVE_STATS_FAILURE: OC
});
r(r(r(r(r(r(r(r({}, h), g), ot), PC), K), G), $), fC), r(r({}, ot), PC);
let RC = function() {
        function e() {}
        return e.init = function(e) {
            this.configurePictureInPicture(e.config, e.backbone), e.backbone.on(iC, ((t, n) => {
                this.getPipSetting(n) !== this.getPipSetting(t) && this.configurePictureInPicture(t, e.backbone)
            }))
        }, e.getPipSetting = function(e) {
            var t;
            return null == (t = e.embed) || null == (t = t.settings) ? void 0 : t.pip
        }, e.configurePictureInPicture = function(e, t) {
            var n, i, o, r;
            t.disablePictureInPicture = !(null === (n = null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.pip) || void 0 === n || n), t.autoPictureInPicture = !(null !== (o = null == (r = e.embed) || null == (r = r.settings) ? void 0 : r.auto_pip) && void 0 !== o && !o)
        }, e
    }(),
    NC = function(e) {
        RC.init(e)
    };
const DC = `\n    <div class="${ea.CONTENT_AREA_BACKGROUND_CONTAINER}" aria-hidden="true"></div>\n        <div class="${Jr.VP_VIDEO_WRAPPER}" ${da.CONTENT_AREA_SIBLING_ELIGIBLE} aria-hidden="true">\n            <div class="${Jr.VP_VIDEO}">\n                <div class="${Jr.VP_TELECINE}"></div>\n            </div>\n        </div>\n        <div class="${Jr.VP_TARGET}" ${da.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n        <div class="${Jr.VP_PLAYER_UI_CONTAINER}" ${da.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n        <div class="${Jr.VP_PLAYER_UI_OVERLAYS}" ${da.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n    </div>\n`;
var wC = new WeakMap,
    kC = new WeakMap,
    MC = new WeakMap,
    VC = new WeakMap,
    BC = new WeakMap;
let UC = function() {
    function e(e) {
        var t;
        st(this, wC, void 0), st(this, kC, void 0), st(this, MC, void 0), st(this, VC, void 0), st(this, BC, void 0), lt(wC, this, e), lt(kC, this, {}), lt(MC, this, 0 !== (null == (t = e.config) || null == (t = t.embed) || null == (t = t.settings) ? void 0 : t.skipping_forward)), lt(VC, this, !0), lt(BC, this, {
            timeStamp: null,
            videoTime: null,
            timeElapsed: 0,
            playbackElapsed: 0
        }), this._onTimeUpdate = this._onTimeUpdate.bind(this), this._onConfigChanged = this._onConfigChanged.bind(this), this._init()
    }
    var t = e.prototype;
    return t._init = function() {
        rt(wC, this).events.on(h.TIME_UPDATE, this._onTimeUpdate), rt(wC, this).events.on(Bi, this._onConfigChanged)
    }, t._onTimeUpdate = function() {
        this._captureTimeUpdateElapsedTime();
        const e = rt(wC, this).currentTime;
        if (!rt(VC, this) && !this.canPlayNow) return rt(wC, this).events.fire(xn), void(!this.canPlayToTime(e - 1) && this._resetToMaxPlayedTime());
        if (this.canSeekForward) return void(this.maxPlayedTime = e);
        if (rt(wC, this).backbone.seeking) return;
        const t = at(rt(BC, this).timeElapsed, 0, 1) + 1;
        S(e) > S(this.maxPlayedTime + t) ? this._resetToMaxPlayedTime() : this.maxPlayedTime = e
    }, t._resetToMaxPlayedTime = function() {
        try {
            dd.isCastConnected && (dd.chromecastPlayer.currentTime = this.maxPlayedTime), rt(wC, this).backbone.currentTime = this.maxPlayedTime
        } catch (e) {}
    }, t._onConfigChanged = function(e, t) {
        var n;
        e && (lt(kC, this, {}), lt(VC, this, !0)), lt(MC, this, 0 !== (null == t || null == (n = t.embed) || null == (n = n.settings) ? void 0 : n.skipping_forward))
    }, t._captureTimeUpdateElapsedTime = function() {
        var e, t;
        const n = performance.now() / 1e3,
            i = rt(wC, this).currentTime,
            o = n - (null !== (e = rt(BC, this).timeStamp) && void 0 !== e ? e : n),
            r = i - (null !== (t = rt(BC, this).videoTime) && void 0 !== t ? t : i);
        Object.assign(rt(BC, this), {
            timeStamp: n,
            videoTime: i,
            timeElapsed: o,
            playbackElapsed: r
        })
    }, t._getMaxPlayedTimeForFragment = function(e) {
        const t = e.startTime;
        return void 0 === rt(kC, this)[t] && (rt(kC, this)[t] = t), rt(kC, this)[t]
    }, t._clampToMaxPlayedTime = function(e) {
        const t = rt(wC, this).fragmentsHandler.getFragmentFromTime(e),
            n = this._getMaxPlayedTimeForFragment(t);
        return Math.min(e, n)
    }, t.getAllowedPlayTime = function(e) {
        return this.canPlayForward ? e : this._clampToMaxPlayedTime(e)
    }, t.getAllowedSeekTime = function(e) {
        return this.canSeekForward ? e : this._clampToMaxPlayedTime(e)
    }, t.canPlayToTime = function(e) {
        return this.getAllowedPlayTime(e) >= e
    }, t.canSeekToTime = function(e) {
        return this.getAllowedSeekTime(e) >= e
    }, t.lockPlayback = function() {
        lt(VC, this, !1), rt(wC, this).events.fire(nr), this.canPlayNow || rt(wC, this).events.fire(xn)
    }, t.unlockPlayback = function() {
        const e = !rt(VC, this) && !this.canPlayToTime(rt(wC, this).currentTime + 1);
        lt(VC, this, !0), rt(wC, this).events.fire(ir), e && rt(wC, this).events.fire(Fn)
    }, I(e, [{
        key: "maxPlayedTime",
        get: function() {
            const e = rt(wC, this).fragmentsHandler.getFragmentFromTime(rt(wC, this).currentTime);
            return this._getMaxPlayedTimeForFragment(e)
        },
        set: function(e) {
            const t = rt(wC, this).fragmentsHandler.getFragmentFromTime(e),
                n = this._getMaxPlayedTimeForFragment(t);
            e = Math.max(e, n), rt(kC, this)[t.startTime] = e
        }
    }, {
        key: "canSeekForward",
        get: function() {
            return rt(VC, this) && rt(MC, this)
        }
    }, {
        key: "canSeekNow",
        get: function() {
            return !!this.canSeekForward || this.canSeekToTime(rt(wC, this).currentTime)
        }
    }, {
        key: "canPlayNow",
        get: function() {
            return !!this.canPlayForward || this.canPlayToTime(rt(wC, this).currentTime)
        }
    }, {
        key: "canPlayForward",
        get: function() {
            return rt(VC, this)
        }
    }])
}();

function xC(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function FC(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xe) {
            return Promise.reject(xe)
        }
    }
}

function HC() {}

function WC({
    element: n,
    delegate: i = {},
    cssLoadedPromise: a = Promise.resolve(null),
    name: l = null
}) {
    const c = FC((function(e) {
            const t = e.abTests.some((e => "hls_js_live" === e.test && "variant" === e.group));
            return function() {
                var e = function() {
                    if (t) return function(e, t) {
                        return function(e, t, n) {
                            if (n) return t ? t(e()) : e();
                            try {
                                var i = Promise.resolve(e());
                                return t ? i.then(t) : i
                            } catch (xe) {
                                return Promise.reject(xe)
                            }
                        }(e, HC, t)
                    }(gt)
                }();
                if (e && e.then) return e.then(HC)
            }()
        })),
        u = FC((function(e) {
            return function(e) {
                ac.forEach((t => {
                    const n = t(e.config);
                    n && e.addABTest(n)
                }))
            }(e), xC(c(e), (function() {
                W = new UC(e), H = Oc(e), le(),
                    function(e) {
                        R = new Dc(e), O = new mt(g, f.config, e.abTests), L = O;
                        const t = e.config.embed.settings.debug_payload_collection_policy;
                        B = new ju(e, t), new Rd(e, p, n.querySelector(`.${Jr.VP_VIDEO_WRAPPER}`)), ce(e), e.doNotTrackEnabled || (new Bu(e, p), G.init(e), new Wd(e), new xu(e), new cc(e), function(e) {
                                function t(t) {
                                    return function({
                                        value: n
                                    }) {
                                        Qu[t] || (Qu[t] = !0, function(t, n) {
                                            e.bigPicture.sendEvent(Gl.PLAYER_PERFORMANCE_MEASUREMENT, {
                                                measurement_type: t,
                                                measurement_value: n
                                            })
                                        }(t, n))
                                    }
                                }
                                Math.random() <= Ju && (Pe(t(Zu.FIRST_INPUT_DELAY)), Re(t(Zu.CUMULATIVE_LAYOUT_SHIFT)), Ne(t(Zu.LARGEST_CONTENTFUL_PAINT)))
                            }(e)), D = new nd(e),
                            function(e) {
                                if (!Ul(e.config) || !e.config.embed.settings.chromecast) return;
                                const t = new sd({
                                    core: e
                                });
                                dd.init({
                                    chromecastPlayer: t
                                }), dd.on([ld.error, ld.mediaLoadedFailed], (e => {
                                    mc.captureException(e)
                                }))
                            }(e), se(e)
                    }(e), new NC(e)
            }))
        }));
    ct.set(mc);
    let _ = !1;
    const p = dt(Eu, _t((e => (...t) => {
            const n = e.apply(void 0, t),
                i = dr();

            function o(e, t) {
                return (e = [].concat(e)).map((e => t(n.createGetter(e))))
            }
            return r(r({}, n), {}, {
                watch: function(e, t) {
                    return o(e, (e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    }))
                },
                unwatch: function(e, t) {
                    return o(e, (e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    }))
                }
            })
        }), function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const a = ee((e => {
                    if (te(e)) return e;
                    const t = d(o(), e);
                    return te(t) ? t : t => d(t, e)
                }));
                return r(r({}, i), {}, {
                    getSelectors: o,
                    createGetter: a,
                    get: function(e, t) {
                        let n = (e = a(e))(i.getState());
                        return void 0 !== t && (n = ne(n, t)), n
                    }
                })
            }
        }(gu), ut.apply(void 0, []))),
        m = new Map,
        v = new P,
        f = new fc({
            events: v
        }),
        E = De();
    n.classList.add(`player-${E}`), n.classList.add("loading"), n.id || (n.id = `player${E}`), n.innerHTML = DC;
    const g = n.querySelector(`.${Jr.VP_TELECINE}`);
    if (o.iOS) {
        const e = document.createElement("video");
        g.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (xe) {
            mc.captureException(xe)
        }
    }
    let b, T, y, L, A, S, I, O = null,
        R = null,
        N = null,
        D = null,
        w = null,
        M = null,
        V = [],
        B = null,
        U = null,
        x = null,
        F = null,
        H = null,
        W = null,
        G = new Uu,
        Y = !1,
        $ = !1,
        K = null,
        q = null,
        z = {};
    const j = new Promise(((e, t) => {
        S = e, I = t, Y = !0
    })).then((() => (Y = !1, v.fire(mo), null)));
    let X, Z;
    const J = new Promise(((e, t) => {
        X = e, Z = t, $ = !0
    })).then((() => ($ = !1, null)));
    let Q = ((e, t, n, i = !0) => new Promise(((o, r) => {
            e.on(t, ((...e) => {
                o.apply(void 0, e)
            })), "number" == typeof n && setTimeout((() => {
                i ? r() : o(null)
            }), n)
        })))(v, Qo),
        ie = {
            get config() {
                return f.config
            },
            set config(e) {
                f.config = e
            },
            get delegate() {
                return i
            },
            set delegate(e) {
                i = e
            },
            ready(e) {
                if (!e) return j;
                j.then((() => e())).catch((e => {
                    mc.captureException(e)
                }))
            },
            playbackEngineReady(e) {
                if (!e) return J;
                J.then((() => e())).catch((e => {
                    mc.captureException(e)
                }))
            },
            get sessionId() {
                return f.config.request.session
            },
            get name() {
                return l
            },
            get parentUrl() {
                return F
            },
            set parentUrl(e) {
                F = e
            },
            destroy() {
                (Y || $) && (I("Cancelling ready promise for player initialization."), Z("Cancelling playback engine ready promise for player initialization.")), v.fire(pn)
            }
        };

    function oe(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), vt(ft(i.request.flags.disable_mms)), null != (t = i.request) && t.urls.js && ht(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== Nr.main && i.view !== Nr.privateUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, null != (o = history) && o.replaceState && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== Nr.main && i.view !== Nr.privateUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        ! function(e, t) {
            null != e && e.embed && null != t && t.embed && [
                ["color", Gr],
                ["color_one", Wr],
                ["color_two", Gr],
                ["color_three", Yr],
                ["color_four", $r]
            ].forEach((([n, i]) => {
                t.embed[n] && e.embed[n] !== t.embed[n] && v.fire(Gt, t.embed[n], i)
            }))
        }(n, i), D && D.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return T = null, L = O, v.fire(xt), p.dispatch(fd(i)), v.fire(Bi, r, i), e
    }

    function re() {
        var e;
        null == (e = R) || e.hide(), n.classList.remove("loading"), S()
    }

    function ae(e) {
        return a.then((() => {
            if (se(e), v.fire(gn), "function" != typeof z.authorizationHandler) throw new Error("Config was not authorized.");
            return z.authorizationHandler(re)
        })).then((e => (f.config = e, T = null, p.dispatch(fd(f.config)), v.fire(xt), v.fire(Bi, !0, f.config), e)))
    }

    function le() {
        _ || (v.on(wi, (function(e) {
            f.reload().then((t => f.config.user.logged_in ? (v.fire(ki), "private" === e && v.fire(Fi, t.loaded), t) : (v.fire(Vi), t))).catch((e => {
                mc.captureException(e)
            }))
        })), v.on(Mi, (() => {
            f.reload().catch((e => {
                mc.captureException(e)
            }))
        })), _ = !0)
    }

    function se(e) {
        N || (N = new wu(e), bu(ie, N), Et.set(mc))
    }

    function ce(e) {
        const t = f.config.request.ads;
        t && (t.adcode && t.adunit || t.adurl) && (w = new Fu(e, n.querySelector(`.${Jr.VP_VIDEO_WRAPPER}`)), v.on(An, (() => {
            L = w, v.fire(co)
        })), v.on(Sn, (() => {
            L = O, v.fire(co)
        })), dd && (dd.on(ld.connected, (() => {
            w.toggleCastingState(!0)
        })), dd.on(ld.disconnected, (() => {
            w.toggleCastingState(!1)
        }))))
    }

    function de(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = hr(fr(e), e, t)), n
    }
    const ue = {
        get store() {
            return p
        },
        get config() {
            return f.config
        },
        get element() {
            return n
        },
        get events() {
            return v
        },
        get uuid() {
            return E
        },
        get expose() {
            return ie
        },
        get backbone() {
            return O
        },
        get adHandler() {
            return w
        },
        get displayContext() {
            return L
        },
        get doNotTrackEnabled() {
            var e;
            return f.config.embed.dnt || (null == (e = f.config.request.flags) ? void 0 : e.dnt)
        },
        get playLoggingEnabled() {
            var e;
            return f.config.embed.log_plays && (null == (e = f.config.request.flags) ? void 0 : e.plays)
        },
        get canPlayPictureInPicture() {
            var e;
            const t = !1 !== o.pictureInPictureSupportType,
                n = o.spatialPlayback && (null == (e = f.config.video) ? void 0 : e.spatial),
                i = (o.iOS >= 17 || o.browser.safari) && O.readyState < 2;
            i && O.once(h.LOADED_DATA, (() => v.fire(k)));
            const r = 1 === f.config.embed.settings.pip;
            return t && !i && !n && r
        },
        get currentTime() {
            return dd.isCastConnected ? dd.chromecastPlayer.currentTime : O.currentTime
        },
        get debugCollector() {
            return B
        },
        overrideFragmentsHandler(e, t) {
            var n;
            null == (n = U) || n.hibernate(), b = f.config.embed.interactive, x = U, U = e, f.config.embed.interactive = f.config.embed.interactive || {
                markers: 0
            }, f.config.embed.interactive.fragments = t, v.fire(Bn)
        },
        restoreLastFragmentsHandler() {
            var e;
            U = x, null == (e = U) || e.wake(), f.config.embed.interactive && (f.config.embed.interactive = b), v.fire(Bn)
        },
        get fragmentsHandler() {
            return U
        },
        get progressController() {
            return W
        },
        get ottVideoMetadata() {
            return M
        },
        set ottVideoMetadata(e) {
            M = e
        },
        get startTime() {
            return K
        },
        set startTime(e) {
            var t;
            null !== K && null === e && null === q && (null == (t = H) || t.clearSegmentedPlayback()), K = e, v.fire(Ko, K)
        },
        get endTime() {
            return q
        },
        set endTime(e) {
            var t;
            null !== q && null === e && null === K && (null == (t = H) || t.clearSegmentedPlayback()), q = e, v.fire(qo, q)
        },
        get segmentedPlaybackEnabled() {
            return null !== K && null !== q
        },
        get bigPicture() {
            return G
        },
        get abTests() {
            return V
        },
        inView: () => tt(n),
        addABTest(e) {
            s("A/B Test", "color: white; background-color: blue")(`Test: ${e.test}, Group: ${e.group}`), V.push(e)
        },
        init: (e, t) => y || (U = new Xu(ue), new Au(ue, p, n), z = t, y = f.load(e).then((e => (new nC(ue, n), e))).then(oe).catch((e => (le(), ae(ue)))).then((() => "function" == typeof z.initializationHandler ? Promise.resolve(t.initializationHandler()) : null)).then((function() {
            return xC(u(ue), (function() {
                return X(), "function" == typeof z.postInitializationHandler ? Promise.resolve(t.postInitializationHandler()) : null
            }))
        })).then((() => Promise.all([Q, a]))).then(re).then((() => (mc.setUp(ue.config, l || Ja.VimeoPlayer), null))).catch((e => {
            mc.captureException(e)
        })), y),
        loadVideoViaIframe(e, n = {}, i = {}) {
            let o = [],
                r = n;
            for (const t in i) !0 === i[t] && o.push(t);
            o.length && (r.listeners = o.join(",")), r.fromLoadVideo = 1, r.referrer = f.config.request.referrer;
            const a = t(window.location.search),
                l = t(`${e}`.split("?")[1]);
            r = Object.assign(a, l, r);
            const s = pt(r),
                c = Er(e);
            window.location.replace(`https://${f.config.player_url}/video/${c}?${s}`)
        },
        loadVideoViaConfig(e, t) {
            if (A === e && T) return T;
            if (v.fire(gn), null != t && t.video_version) {
                let e = f.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map((e => e.id)), -1 === e.indexOf(t.video_version)) return Promise.reject("Invalid version id specified")
            }
            v.fire(Qi), A = e, n.classList.add("loading");
            const i = de(e, t),
                o = m.get(i);
            return e = o ? o._config.loaded : e, T = f.load(e, t).then((e => {
                if (o) {
                    const e = O.element;
                    O = o._backbone, O.element.style.visibility = "visible", e.parentNode.replaceChild(O.element, e), v.fire(eo)
                }
                return e = oe(e), w || ce(ue), e
            })).catch((e => ae(ue))).then((() => Promise.resolve(Q))).then(re), T
        },
        preloadVideo(e, t, n) {
            const i = de(t, n),
                o = m.get(i);
            return o ? Promise.resolve(o) : new fc({
                events: v
            }).load(t, n).then((t => {
                t.loaded.preload = !0;
                const n = O.element.cloneNode(!1);
                n.style.visibility = "hidden", O.element.parentNode.insertBefore(n, O.element);
                const o = new mt(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return m.set(i, r), r
            }))
        },
        performDelegateAction(t, n = () => {}, o = []) {
            var r, a;
            let l;
            var s;
            null != (r = i) && r[t.will] && (l = (s = i)[t.will].apply(s, [f.config.video.id].concat(e(o))), !1 === l) || (n.apply(void 0, [f.config.video.id].concat(e(o), [l])), null != (a = i) && a[t.did] && i[t.did]())
        },
        ready: () => j,
        playbackEngineReady: () => J,
        verifyConfig: () => f.verify(),
        refreshAssetUrls: () => f.refreshAssetUrls().then((e => {
            const t = r(r({}, f.config), {}, {
                request: e
            });
            return oe({
                old: f.config,
                loaded: t
            })
        })).catch((e => ae(ue))),
        updatePhpTokens: () => new Promise(((e, t) => {
            if (function(e) {
                    const {
                        vimeo_api_client_token: t,
                        vimeo_api_interaction_tokens: {
                            likes: n,
                            watch_later: i,
                            following: o
                        } = {},
                        vimeo_live_client_token: r,
                        vimeo_bucketed_live_client_token: a
                    } = e;
                    return t && Ys(t) || n && Ys(n) || i && Ys(i) || o && Ys(o) || r && Ys(r) || a && Ys(a)
                }(f.config.user)) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = f.config.request, a = `https://${f.config.player_url}/video/${f.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                C(a, {
                    withCredentials: !0
                }).json().then((t => (f.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, f.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, f.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, f.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e()))).catch((e => {
                    mc.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                }))
            } else e()
        }))
    };
    return ue
}

function GC(e, t, n) {
    var i, r = 2e3,
        a = 4500,
        l = null,
        s = o.touch ? a : r,
        c = !0,
        d = !0,
        u = !1,
        _ = null,
        p = !1,
        m = null,
        v = null,
        f = !0,
        E = !1,
        b = !1,
        C = !1,
        T = !1;
    let A = !1;
    var S = !1;
    let I, O;
    var P = n.querySelector(`.${Jr.VP_TARGET}`),
        R = n.querySelector(`.${Jr.VP_CONTROLS}`);
    let N = n.querySelector('button[class*="_playButton_"]');
    var D = n.querySelector(`.${Jr.VP_TITLE}`),
        w = n.querySelector(`.${Jr.VP_VIDEO}`);
    let k, M = n.querySelector(`.${Jr.VP_SIDEDOCK}`),
        B = n.querySelectorAll(`.${Jr.VP_MENU}`),
        U = n.querySelector(`.${Jr.ADS_WRAPPER}`),
        x = n.querySelector(`.${Jr.COMPASS_WRAPPER}`),
        F = Array.from(n.querySelectorAll("dialog[data-menu]"));
    const H = e.config.embed.autoplay && (null == (i = e.config.request.flags) ? void 0 : i.autohide_controls),
        W = o.touch ? 300 : 0;
    let G = null;
    const Y = vm(e.config, "webvr").group || !1;

    function $() {
        clearTimeout(l), l = null
    }

    function q() {
        v !== Hr && (v && v.isNewMenu && v.isFullwidth() || S && (clearTimeout(l), l = setTimeout((() => j(!1, !0)), s)))
    }

    function z() {
        ae.element && ae.element.classList.contains("js-player-fullscreen") && (u || (n.classList.add("player-cursor-hide"), d = !0, u = !0))
    }

    function j(t, i) {
        var r, a, l;
        if (v === Hr && i) return;
        if (v && v.isNewMenu && v.isFullwidth()) return;
        if (!E && !f && !n.classList.contains("player-ad")) return;
        if (C) return;
        $(), R = te(), N = ne(), M = ee(), B = n.querySelectorAll(`.${Jr.VP_MENU}`);
        const s = document.activeElement && document.body.classList.contains(Jr.SHOWFOCUS) && ((null == (r = M) ? void 0 : r.contains(document.activeElement)) || (null == (a = R) ? void 0 : a.contains(document.activeElement)) || (null == (l = N) ? void 0 : l.contains(document.activeElement))),
            u = document.activeElement && v === Hr && Array.from(B).find((e => null == e ? void 0 : e.contains(document.activeElement)));
        s || u || (e.events.fire(t ? Si : Oi), d = !0, o.spatialPlayback && e.config.video.spatial || (P.classList.add("hidden"), P.setAttribute("hidden", "")), c = !0, z())
    }

    function X() {
        q(), T || (e.events.fire(Ii), P.classList.remove("hidden"), P.removeAttribute("hidden"))
    }

    function Z() {
        E || f ? n.removeAttribute("tabindex") : E || f || b || n.setAttribute("tabindex", "0")
    }

    function J() {
        e.events.on([h.TIME_UPDATE, h.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === l && (e.events.fire(Nn), e.events.off([h.TIME_UPDATE, h.SEEKED], t))
        }))
    }

    function Q() {
        e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing")
    }

    function ee() {
        return M || (M = n.querySelector(`.${Jr.VP_SIDEDOCK}`), M)
    }

    function te() {
        return R || (R = n.querySelector(`.${Jr.VP_CONTROLS}`))
    }

    function ne() {
        return N || (N = n.querySelector('button[class*="_playButton_"]'), N)
    }
    return function() {
            var t = !0;

            function i() {
                X()
            }

            function l(i) {
                var a;
                if (s = r, d) d = !1;
                else if (void 0 === I || void 0 === O || i.screenX !== I || i.screenY !== O)
                    if (I = i.screenX, O = i.screenY, u && (n.classList.remove("player-cursor-hide"), u = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                        if (t = !0, o.spatialPlayback && null != (a = e.config.video) && a.spatial) {
                            const t = ur(e.element),
                                n = i.clientX - t.left,
                                o = i.clientY - t.top,
                                r = 180,
                                a = o > e.element.clientHeight - 55,
                                l = n > e.element.clientWidth - 45 && o < r;
                            if (p || !a && !l) return
                        }
                        c && X(), q()
                    } else $(), z(), t && (j(!0), t = !1)
            }

            function _(e) {
                var t;
                U = U || (U = n.querySelector(`.${Jr.ADS_WRAPPER}`), U), F.length || (F = Array.from(n.querySelectorAll("dialog[data-menu]"))), null != (t = U) && t.contains(e.target) || F.length && F.some((t => t.contains(e.target))) || j(!0)
            }

            function m(e) {
                var t, i, o, r;
                R = te(), M = ee(), N = ne(), x = x || (x = n.querySelector(`.${Jr.COMPASS_WRAPPER}`), x);
                var a = (null == (t = R) ? void 0 : t.contains(e.target)) || (null == (i = M) ? void 0 : i.contains(e.target)) || (null == (o = N) ? void 0 : o.contains(e.target));
                let l = null == (r = x) ? void 0 : r.contains(e.target);
                E && f || l ? a || !E && !f || j(!0) : (clearTimeout(G), G = setTimeout(X, W))
            }

            function v(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return l(e)
            }
            o.pointerEvents ? L(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return s = r, i();
                s = a, m(e)
            })).on("pointermove", v).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return _(e)
            })) : L(n).on("touchmove", (function() {
                s = a, q()
            })).on("touchend", m).on("mouseenter", i).on("mousemove", l).on("mouseleave", _), e.events.on(ri, (function(e) {
                var t;
                o.pointerEvents ? L(ae.element).on("pointermove", v) : L(ae.element).on("mousemove", l), e || (null == (t = k) || t.focus(), A = !0)
            })), e.events.on(li, (function() {
                o.pointerEvents ? L(ae.element).off("pointermove", v) : L(ae.element).off("mousemove", l), k && A && k.focus(), A = !1
            }))
        }(), e.events.on(h.PLAY, (function(e) {
            H || 0 === e || X()
        })).on(Ln, X).on([g.BUFFER_ENDED, h.SEEKED, qn, On, ni], q).on(y, (function() {
            S = !0
        })), e.events.on(Zn, (function(e) {
            e && q()
        })), e.events.on(vi, Z).on(jo, Z).on(zn, (function(e) {
            f = e, Z()
        })).on(Xn, (function(e) {
            E = e, Z()
        })), e.events.on(zi, (function() {
            C = !0, X()
        })).on(ji, (function() {
            C = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(Zn, (function(e, t) {
                v = e === Hr ? e : e ? t : null
            })), L(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (v) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return M = ee(), D = D || (D = n.querySelector(`.${Jr.VP_TITLE}`)), (e.classList.contains(Jr.VP_TITLE) || e.classList.contains(Jr.VP_TARGET) || (null == (t = D) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || w.contains(e)) && !(null != (i = M) && i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const l = S && o.spatialPlayback && e.config.video.spatial && _;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!l) {
                        if (S && t) return;
                        return void e.events.fire(Fn)
                    }
                }
                1 === ++r && setTimeout((function() {
                    if (l) {
                        let t = m && m.x === i.clientX && m.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? Fn : xn), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(Ed) && !t.get(bd) && !t.get(Td)) return;
                        e.events.fire(e.backbone.paused ? Fn : xn)
                    } else e.events.fire(Un);
                    r = 0
                }), 200)
            })), L(n).on("mousedown", `.${Jr.VP_VIDEO_WRAPPER}`, (function(e) {
                var t;
                if (!i) return P.classList.remove("hidden"), P.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), P.dispatchEvent(t)), !1
            })).on("contextmenu", `.${Jr.VP_VIDEO}`, (function(e) {
                return P.classList.remove("hidden"), P.removeAttribute("hidden"), !1
            })), e.events.on(Qt, (function(e) {
                if (e) return i = !0, void P.classList.add("hidden");
                i = !1, P.classList.remove("hidden")
            }))
        }(),
        function() {
            function t() {
                b = !0, n.removeAttribute("tabindex")
            }

            function i() {
                b = !1, Z()
            }
            let o;
            L(n).on("focus", "a, button, input, [tabindex]", (function(e) {
                A || (k = this), clearTimeout(o), o = null, document.activeElement === this && X()
            })), L(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (o = setTimeout(j, 50))
            })), n.addEventListener("focus", (function() {
                X(), k && k.focus()
            }), !1), e.events.on(vi, t), e.events.on(fi, i), e.events.on(jo, t), e.events.on(Xo, i)
        }(), e.events.on(ri, (function(e) {
            z(), _ && _.adjustRenderSize(), C && X()
        })).on(li, (function(e) {
            c = !0, _ && _.adjustRenderSize(), e ? j() : (X(), $())
        })), J(), e.events.on(xt, (function() {
            c = !0, d = !0, f = !0, E = !1, T = !1, S = !1, J(), $()
        })), e.events.on(ln, (function() {
            const t = e => (...t) => {
                    _ && e.apply(void 0, t)
                },
                i = t((t => {
                    const n = e.element.classList.contains("webvr");
                    _ && n && _.toggleVR()
                })),
                r = t((t => {
                    _.isVRPresenting ? setTimeout((() => {
                        e.events.fire(K.WEBVR_ENTER)
                    }), 100) : setTimeout((() => {
                        e.events.fire(K.WEBVR_EXIT)
                    }), 100)
                }));
            e.events.on(sn, t((() => {
                e.element.classList.contains("webvr") || e.element.classList.add("grabbable")
            }))), e.events.on(In, t((() => {
                Q(), o.webvr && _.isVRPresenting && Y && _.toggleVR()
            }))), e.events.on(y, t((() => {
                e.config.video.spatial || Q()
            }))), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(ti, t((() => {
                o.webvr && _.hasVRHeadset && Y ? _.toggleVR() : e.events.fire(Li)
            }))), e.events.on(K.WEBVR_HARDWARE_AVAILABLE, t((e => {
                const t = n.querySelector(`.${Jr.STEREOSCOPIC}`);
                t && t.classList.contains("off") && Y && t.classList.remove("off")
            }))), e.events.on(K.WEBVR_ENTER, t((t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), _.isUserInteracting = !1
            }))), e.events.on(K.WEBVR_EXIT, t((t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), _.isUserInteracting = !0
            }))));
            let a = null;
            const l = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p || n || (p = !0, t.preventDefault(), e.element.classList.add("grabbing"), m = {
                        x: t.clientX,
                        y: t.clientY
                    }, _.makeContact(m))
                })),
                s = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && _.move({
                        x: t.clientX,
                        y: t.clientY
                    })
                })),
                c = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && (e.element.classList.remove("grabbing"), _.releaseContact(!1), p = !1)
                })),
                d = t((t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (_.isUserInteracting || (_.isUserInteracting = !0), null !== a && clearTimeout(a), a = setTimeout((() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), _.isUserInteracting = !1
                    }), 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), _.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                })),
                u = t((e => {
                    p || (p = !0, _.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                })),
                v = t((e => {
                    p && (e.preventDefault(), _.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                })),
                f = t((e => {
                    _.releaseContact(!0), p = !1
                })),
                h = t((e => {
                    _.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                })),
                E = t((t => {
                    p = !1, e.element.classList.remove("grabbing"), _.abandonMotion()
                }));
            e.events.on(y, (() => {
                o.android && _ && window.addEventListener("deviceorientation", h, !1)
            })), e.events.once(y, (() => {
                e.store.watch("ui.player.boundingRect", (() => {
                    _ && _.adjustRenderSize(), p = !1
                })), o.pointerEvents ? (L(P).on("pointerdown", l), window.addEventListener("pointermove", s), window.addEventListener("pointerup", c), window.addEventListener("pointerleave", E)) : (L(P).on("mousedown", l).on("wheel", d), P.addEventListener("touchstart", u, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", v, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", f, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", s), window.addEventListener("mouseup", c), window.addEventListener("mouseleave", E))
            }))
        })), e.events.on(V, (e => {
            Q(), _ = e
        })), e.events.on(kn, (() => {
            T = !0, clearTimeout(G), G = null
        })), e.events.on(Vn, (() => {
            T = !1
        })), {}
}
const YC = {
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        74: "j",
        75: "k",
        76: "l",
        80: "p"
    },
    $C = {
        106: "j",
        107: "k",
        108: "l",
        112: "p"
    },
    KC = ["up", "down", "left", "right"],
    qC = ["right", "l"],
    zC = ["left", "j"],
    jC = "scrub",
    XC = [jC],
    ZC = [na.TRANSCRIPT_LIST];

function JC(e, t, n) {
    var i = !!e.config.embed.on_site,
        r = n.querySelector(".volume"),
        a = !1;
    let l;
    var s = null;
    let c = !1;
    var d = !1,
        u = e.config.video.fps / 5,
        _ = u,
        p = 0,
        m = !1,
        v = E(A, 80),
        f = 5;
    const g = o.spatialPlayback && e.config.video.spatial;

    function b(n) {
        var i;
        return !t.get(Ed) || !(XC.includes(n) && (null == (i = e.config.video.live_event) || !i.dvr)) && (t.get(bd) || t.get(Td))
    }

    function C(t) {
        return "d" === t || !i && (e.config.view === Nr.main || e.config.view === Nr.privateUnlocked)
    }

    function T(e) {
        return "number" != typeof e.which && (e.which = e.keyCode), e
    }

    function y(e) {
        if (!e) return "";
        if ("keypress" === e.type) {
            var t = String.fromCharCode(e.which);
            return e.shiftKey || (t = t.toLowerCase()), t
        }
        return e.which in YC ? YC[e.which] : String.fromCharCode(e.which).toLowerCase()
    }

    function L(t) {
        if (e.config.embed.settings.background) return !0;
        var n = t.target || t.srcElement;
        return "INPUT" === n.tagName || "SELECT" === n.tagName || "TEXTAREA" === n.tagName || n.isContentEditable
    }

    function A(n, i) {
        var o, r;
        const a = qC.includes(n);
        if (!b(jC)) return;
        if (null != (o = e.backbone) && null != (o = o.telecine) && o.ended && a) return;
        if (null != (r = e.config.video.live_event) && r.dvr && a && e.backbone.atLiveEdge) return;
        if (a && !e.progressController.canSeekNow) return;
        m || (i && !e.backbone.paused && e.events.fire(xn), e.events.fire(Kn, {
                seekType: "keyboard",
                isFrameByFrame: i
            }), m = !0),
            function(n) {
                var i = n,
                    o = Math.ceil(u),
                    r = Math.ceil(function() {
                        const n = t.get(Ed) ? e.backbone.liveEdgeTime - e.backbone.liveTailTime : e.config.video.duration;
                        return Math.max(u, .618 * n)
                    }() - u);
                _ = function(e, t, n) {
                    return e /= 100, n * (--e * e * e + 1) + t
                }(i, o, r)
            }(p), 1 === ++p && (_ = e.config.video.fps * f);
        const l = i ? 1 : _,
            s = a ? l : -l,
            c = e.currentTime * e.config.video.fps;
        ! function(n, i) {
            let o, r;
            t.get(Ed) ? (o = e.backbone.liveTailTime, r = e.backbone.liveEdgeTime) : (o = e.fragmentsHandler.currentFragment.startTime, r = e.fragmentsHandler.currentFragment.endTime);
            let a = n / e.config.video.fps;
            a < o ? a = o : a >= r ? a = r - .001 : e.events.fire(Mn, {
                direction: a - e.currentTime > 0 ? "forward" : "backward",
                time: 1 !== p || i ? null : f
            }), e.events.fire(Mt, a)
        }((a ? Math.ceil(c) : Math.floor(c)) + s, i)
    }

    function S(e) {
        if (s === Hr) return !1;
        var t = s.getTabIndexItems(),
            n = t.indexOf(document.activeElement),
            i = "up" === e ? n - 1 : n + 1,
            o = null;
        return !(o = i >= t.length ? t[0] : i < 0 ? t[t.length - 1] : t[i]) || (o.focus(), !1)
    }

    function I(t, n) {
        if (s && document.body.classList.contains(Jr.SHOWFOCUS) && "k" !== n) return !0;
        if (!b("play/pause")) return !0;
        if (!document.activeElement || document.activeElement === document.body || !document.body.classList.contains(Jr.SHOWFOCUS) || "k" === n) {
            const t = e.backbone.paused ? Fn : xn;
            return e.events.fire(t), !1
        }
    }

    function O() {
        const t = e.backbone.muted,
            n = e.backbone.volume;
        return t ? (e.events.fire(Bt, !1), 0 === n && e.events.fire(Vt, 1)) : t || 0 !== n ? !t && n > 0 && e.events.fire(Bt, !0) : e.events.fire(Vt, 1), !1
    }

    function P() {
        const t = "ClipboardItem" in window && "clipboard" in navigator,
            n = e.element.querySelector("video");
        if (!t || !n || e.config.request.drm || !c) return !1;
        let i = document.createElement("canvas");
        i.width = n.videoWidth, i.height = n.videoHeight, i.getContext("2d").drawImage(n, 0, 0);
        const o = new ClipboardItem({
            "image/png": new Promise((e => {
                i.toBlob((t => {
                    e(t)
                }), "image/png")
            }))
        });
        return navigator.clipboard.write([o]).then((() => {
            e.events.fire(tr)
        })), !0
    }

    function R() {
        return s !== Hr && (s ? (s.element.contains(document.activeElement) && s.button.focus(), s.hide(), !1) : !a && void 0)
    }

    function N() {
        return !d && (s === Hr || (s ? !s.element.contains(document.activeElement) || S("up") : g ? (e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"), !1) : !(!e.config.embed.on_site || !document.activeElement || n.contains(document.activeElement)) || (e.events.fire(Vt, .05, !1, !0), !1)))
    }

    function D() {
        return !d && (s === Hr || (s ? !s.element.contains(document.activeElement) || S("down") : g ? (e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"), !1) : !(!e.config.embed.on_site || !document.activeElement || n.contains(document.activeElement)) || (e.events.fire(Vt, -.05, !1, !0), !1)))
    }

    function w(t, n) {
        const i = KC.includes(n);
        if (s === Hr) return !0;
        if (e.displayContext === e.adHandler) return !0;
        if (s) return !s.element.contains(document.activeElement) || !i || S("left" === n ? "up" : "down");
        if (a && l !== ka.HELP) return !0;
        if (g && i) return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n), !1;
        if (document.activeElement && document.activeElement === r && i) {
            var o = "left" === n ? -.05 : .05;
            return e.events.fire(Vt, o, !1, !0), !1
        }
        t.shiftKey || 0 === p ? A(n, t.shiftKey) : v(n, t.shiftKey)
    }
    return function() {
            function t(e) {
                a = !0, l = e, e !== ka.NOT_SUPPORTED && e !== Os.LEAD_CAPTURE_FORM || (i = !0)
            }

            function n() {
                a = !1, l = null
            }
            e.events.on(vi, t), e.events.on(jo, t), e.events.on(fi, n), e.events.on(Xo, n)
        }(), e.events.on(Zn, (function(e, t) {
            s = e ? t || e : null
        })), e.events.on(xo, (function(e) {
            d = e
        })), e.events.on(Bi, (function(e) {
            e && (i = !1)
        })),
        function() {
            const {
                like: t,
                watch_later: n,
                share: i
            } = e.config.embed.settings, o = {
                c: [Wn, !0],
                h: [Hn, !0],
                T: Ho,
                f: Un,
                d: Ti,
                A: Wo,
                k: I,
                j: w,
                l: w,
                m: O,
                p: P,
                space: I,
                up: N,
                down: D,
                left: w,
                right: w,
                esc: R,
                "?": [Ut, ka.HELP]
            };

            function r(t) {
                T(t);
                const n = y(t);
                if (function(e) {
                        return !(e.ctrlKey || e.metaKey || e.altKey || "keypress" === e.type && e.charCode in $C || (e.which in YC ? "keydown" !== e.type : "keypress" !== e.type))
                    }(t) && !L(t) && C(n) && n in o) {
                    if ("function" == typeof o[n]) {
                        if (!1 === o[n](t, n)) {
                            var i;
                            if (t.preventDefault(), ZC.includes(null == (i = t.target) ? void 0 : i.id)) return;
                            t.stopPropagation()
                        }
                        return
                    }
                    if (!1 === function(t) {
                            return t = Array.isArray(t) ? t : [t], e.events.fire.apply(null, t), !1
                        }(o[n])) {
                        var r;
                        if (t.preventDefault(), ZC.includes(null == (r = t.target) ? void 0 : r.id)) return;
                        t.stopPropagation()
                    }
                }
            }
            e.config.embed.on_site || (o.v = Wt), t && (o.x = si), n && (o.w = ci), i && (o.s = di), e.config.embed.keyboard && (document.addEventListener("keydown", r, !1), document.addEventListener("keypress", r, !1), document.addEventListener("keyup", (function(t) {
                if (s !== Hr && (T(t), !L(t) && C())) {
                    var n = y(t);
                    g && KC.includes(n) ? e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(n) : b(jC) && (zC.includes(n) || qC.includes(n)) && function(t) {
                        v.cancel(), _ = u, p = 0;
                        var n = t.shiftKey;
                        e.events.fire(qn, n), m = !1
                    }(t)
                }
            }), !1))
        }(), e.events.on(Zi, (function() {
            i = !1
        })).on(Ji, (function() {
            i = !0
        })), e.config.embed.on_site && document.querySelector(".player") === n && (i = !1),
        function() {
            let e, t = !1;
            document.body.addEventListener("keyup", (e => {
                T(e), 9 !== e.which || document.body.classList.contains(Jr.SHOWFOCUS) || document.body.classList.add(Jr.SHOWFOCUS)
            })), document.body.addEventListener("keydown", (n => {
                T(n), 32 !== n.which && 13 !== n.which || (t = !0, clearTimeout(e), e = setTimeout((() => {
                    t = !1
                }), 200))
            })), document.body.addEventListener("click", (e => {
                t || document.body.classList.remove(Jr.SHOWFOCUS)
            }))
        }(), e.events.on(pn, (() => {
            i = !0
        })), e.events.on(h.PLAY, (() => {
            c = !0
        })), e.events.on(h.ENDED, (() => {
            c = !1
        })), {
            pause: function() {
                i = !0
            },
            unpause: function() {
                i = !1
            }
        }
}

function QC(e, t, n, i) {
    const r = function(e) {
            if (!0 === e) return Promise.resolve(null);
            let t = !1;
            return new Promise((n => {
                e.link.addEventListener("load", (() => {
                    if (!t) {
                        t = !0;
                        const i = (new Date).getTime() - e.startTime;
                        setTimeout((() => n(i)), 100)
                    }
                }), !1)
            }))
        }(n),
        a = new WC({
            element: e,
            delegate: i,
            cssLoadedPromise: r
        }),
        l = a.store;
    e.classList.add("js-player-fullscreen");
    let s = a.expose,
        c = null,
        d = null,
        u = null,
        _ = null,
        p = null,
        m = null;
    const v = e.querySelector(`.${Jr.VP_CONTROLS}`),
        f = {
            tiny: Hi,
            mini: Wi,
            normal: Gi,
            none: Gi
        };

    function h(t) {
        t && void 0 !== f[t] && (a.events.fire(f[t]), e.classList.toggle("player-normal", "normal" === t), e.classList.toggle("player-mini", "mini" === t), e.classList.toggle("player-tiny", "tiny" === t))
    }

    function E(t) {
        t && void 0 !== f[t] && (e.classList.toggle("app-normal", "normal" === t), e.classList.toggle("app-mini", "mini" === t), e.classList.toggle("app-tiny", "tiny" === t))
    }

    function g(t) {
        Object.keys(lu).forEach((n => e.classList.toggle(`player-${n}`, t === n)))
    }

    function b(t) {
        Object.keys(lu).forEach((n => e.classList.toggle(`app-${n}`, t === n)))
    }

    function C() {
        const t = a.config.embed.settings;
        e.classList.toggle("with-fullscreen", !!t.fullscreen);
        const n = t.custom_logo;
        e.classList.toggle("with-custom-logo", !!n), e.classList.toggle("with-sticky-custom-logo", n && n.sticky), e.classList.toggle("hide-controls-mode", !!t.background || 0 === t.controls), e.classList.toggle("touch-support", o.touch), e.classList.toggle("is-google-bot", o.isGoogleBot)
    }

    function T(e, t = a.config.video.url) {
        if (!(!t || e && e.metaKey)) {
            if (-1 === t.indexOf("#") && a.backbone.currentTime > 0 && a.backbone.currentTime < a.config.video.duration - 30 && !a.backbone.paused && (t += `#at=${Math.floor(a.backbone.currentTime)}`), !a.config.embed.on_site) return window.open(t),
                function(e) {
                    if (e && e.detail > 0) try {
                        document.activeElement.blur()
                    } catch (xe) {}
                }(e), a.events.fire(xn), !1;
            window.location = t
        }
    }

    function y() {
        _ || (h(l.get("ui.player.mode")), _ = l.watch("ui.player.mode", h)), p || (h(l.get("ui.app.mode")), p = l.watch("ui.app.mode", E))
    }

    function A() {
        d || (g(l.get("ui.player.breakpoint")), d = l.watch("ui.player.breakpoint", g)), u || (b(l.get("ui.app.breakpoint")), u = l.watch("ui.app.breakpoint", b))
    }

    function S() {
        C(), m = new Promise((e => {
                let t = null;
                const n = () => {
                    clearTimeout(t), window.innerWidth > 0 && window.innerHeight > 0 ? e() : t = setTimeout(n, 250)
                };
                a.events.once(mo, n), a.events.once(Cn, n)
            })), a.events.on(pi, (() => {
                a.performDelegateAction(xd, (() => {
                    a.config.video.vod && a.config.video.vod.url ? T(null, `${a.config.video.vod.url}#collections`) : a.config.video.url && T(null, `${a.config.video.url}#collections`)
                }))
            })), a.events.on(di, (() => {
                const e = a.config.embed.settings.share && a.config.embed.settings.share.embed_only,
                    t = () => {
                        a.events.fire(Ut, "share", e)
                    };
                ae.element ? t() : a.performDelegateAction(Bd, t)
            })), a.events.on(ui, (() => {
                a.config.embed.settings.share.embed_only && a.performDelegateAction(Bd, (() => {
                    a.events.fire(Ut, "share", !0)
                }))
            })), a.events.on(An, (() => {
                e.classList.add("player-ad")
            })), a.events.on([Sn, xt], (() => {
                e.classList.remove("player-ad")
            })),
            function() {
                const t = function() {
                    return function(e, t) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(m, (function() {
                        const t = function() {
                            const {
                                width: t,
                                height: n
                            } = ur(e), i = "10px";
                            return es ? n <= 200 ? i : t < 450 ? "12px" : t <= 1024 ? "11px" : i : i
                        }();
                        v && (v.style.fontSize = t);
                        const n = e.querySelector(`.${Jr.VP_SIDEDOCK}`);
                        n && (n.style.fontSize = t)
                    }))
                };
                a.events.on(ri, t), a.events.on(li, t), window.addEventListener("orientationchange", t), es && (e.classList.add("mobile"), t())
            }(), y(), A(),
            function() {
                function t() {
                    let t = e;
                    if (i && i.getFullscreenElement && "function" == typeof i.getFullscreenElement) {
                        const n = i.getFullscreenElement();
                        n && n instanceof HTMLElement && n.contains(e) && n.classList.contains("js-player-fullscreen") && (t = n)
                    }
                    return t
                }
                a.config.embed.fullscreen = !0, o.iPad && e.classList.add("no-fullscreen-api-support");
                const n = a.config.embed.playsinline && (o.iOS >= 10 || Vr),
                    r = o.iPad || n;
                ae.enabled || r || (e.classList.add("no-fullscreen-support"), o.iOS || (a.config.embed.fullscreen = !1));
                let l = !1,
                    s = !1;
                a.events.on(zt, (function() {
                    ae.enabled || ae.videoEnabled(e) ? (a.events.fire(oi), s = !1, ae.request(t())) : a.events.fire(Qt, !0)
                })), a.events.on(Un, (function() {
                    if (a.backbone.pictureInPictureActive && a.backbone.exitPictureInPicture(), ae.element) a.events.fire(ai), ae.exit();
                    else {
                        const {
                            HAVE_CURRENT_DATA: e
                        } = a.backbone.videoElement;
                        o.fullscreenRequiresDataLoaded && a.backbone.readyState < e && a.backbone.play(), a.events.fire(oi), s = !0, ae.request(t())
                    }
                }));
                var c = ae.onenter,
                    d = ae.onexit;
                if (ae.onenter = function(e) {
                        null !== document.webkitFullScreenElement && (l || (t().contains(e) ? function(e) {
                            l || (l = !0, a.events.fire(ri, t() === e, s))
                        }(e) : "function" == typeof c && c(e)))
                    }, ae.onexit = function() {
                        document.webkitFullScreenElement || (l ? l && (l = !1, a.events.fire(li, s), s || a.events.fire(Qt, !1), s = !1) : "function" == typeof d && d())
                    }, L(e).on("click", "a", (function(e) {
                        ae.element === t() && ae.exit()
                    })), L(e).on("gestureend", (function(e) {
                        e.scale > 1 && a.events.fire(Un)
                    })), "undefined" != typeof MSGesture) {
                    var u = 1,
                        _ = new MSGesture;
                    _.target = e, L(e).on("pointerdown", (function(e) {
                        _.addPointer(e.pointerId)
                    })).on(["MSGestureChange"], (function(e) {
                        u *= e.scale
                    })).on(["MSGestureEnd"], (function() {
                        (!l && u >= 2 || l && u < 1) && a.events.fire(Un), u = 1
                    }))
                }
            }(),
            function() {
                const t = Cl(yt, a.config);
                ! function(e, t, n, i) {
                    var o = !1;
                    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
                    var r = function(e) {
                            var t = !0;
                            if (e.changedTouches) {
                                var r = e.changedTouches[0].pageX - window.pageXOffset,
                                    a = e.changedTouches[0].pageY - window.pageYOffset,
                                    l = document.elementFromPoint(r, a);
                                null !== l && this.contains(l) && (t = n.call(this, e))
                            }
                            return "function" == typeof i && i.call(this, e), o = !0, t
                        },
                        a = function(e) {
                            if (!o) return n.call(this, e);
                            o = !1
                        };
                    (t = "function" == typeof t ? null : t) ? L(e).on("click", t, a).on("touchend", t, r): L(e).on("click", a).on("touchend", r)
                }(e, "a[data-clip-link]", (e => T(e, t))), a.events.on(Wt, T)
            }(), a.events.on(Bi, (() => {
                C()
            }))
    }

    function I() {
        c || (c = new JC(a, l, e), Object.defineProperties(s, {
            pauseKeyboard: {
                enumerable: !0,
                value: c.pause
            },
            unpauseKeyboard: {
                enumerable: !0,
                value: c.unpause
            }
        }))
    }
    const O = "right-content-area-open",
        P = "right-content-area-supported",
        R = "[data-content-area-sibling-eligible]",
        N = "content-area-sibling-enabled";
    let D;

    function w(e = 400) {
        var t;
        D && clearTimeout(D), null == (t = a.element) || null == (t = t.classList) || t.add("animating"), D = setTimeout((() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.remove("animating")
        }), e)
    }
    const k = {
        initializationHandler: () => (a.events.on(Vo, (e => {
            e && !a.element.classList.contains(O) ? (w(), a.element.classList.add(O)) : !e && a.element.classList.contains(O) && (w(), a.element.classList.remove(O))
        })), a.events.on(Bo, (() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.add(P), Array.from(a.element.querySelectorAll(R)).forEach((e => {
                var t;
                return null == e || null == (t = e.classList) ? void 0 : t.add(N)
            }))
        })), a.events.on(Uo, (() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.remove(P), Array.from(a.element.querySelectorAll(R)).forEach((e => {
                var t;
                return null == e || null == (t = e.classList) ? void 0 : t.remove(N)
            }))
        })), new GC(a, l, e), I(), S(), Promise.resolve()),
        postInitializationHandler: () => Promise.resolve(),
        authorizationHandler(e) {
            A(), y(), e(), I();
            let t = "Error",
                n = "Unhandled video privacy";
            switch (a.config.view) {
                case Nr.privatePassword:
                    return new Promise((e => {
                        a.events.once(xi, (t => {
                            e(t)
                        }))
                    }));
                case Nr.privateLocked:
                    let e;
                    return e = a.config.user.logged_in ? Promise.reject() : new Promise(((e, t) => {
                        a.events.once(Fi, (n => {
                            n.view !== Nr.privateLocked ? e(n) : t()
                        }))
                    })), e;
                case Nr.geoBlocked:
                case Nr.drmPlaybackUnavailable:
                    return Promise.reject();
                case Nr.error:
                    t = a.config.title, n = a.config.message
            }
            return a.config.view !== Nr.main && a.config.view !== Nr.privateUnlocked && a.events.fire(bn, "error", {
                title: t,
                message: n
            }), Promise.reject()
        }
    };
    return a.init(t, k).catch((t => {
        mc.captureException(t), e.classList.remove("loading");
        const n = pa();
        a.events.fire(Cn, n.type, n)
    })), s
}
window.requestModule = window.requestModule || bt, window.BigScreen = window.BigScreen || ae;
export {
    la as $, S_ as A, df as B, ea as C, O_ as D, Zs as E, gv as F, xv as G, nf as H, Iv as I, Js as J, Gv as K, Jr as L, Q_ as M, Vv as N, J_ as O, Dv as P, U_ as Q, pf as R, A_ as S, Xv as T, Vg as U, bs as V, QC as VimeoPlayer, Iu as W, qs as X, j_ as Y, Qs as Z, vn as _, ya as a, up as a0, wg as a1, gp as a2, Bg as a3, kv as a4, vf as a5, zv as b, va as c, ps as d, vs as e, Cp as f, ms as g, L_ as h, el as i, Ol as j, B_ as k, V_ as l, rf as m, qa as n, Ng as o, M_ as p, na as q, I_ as r, op as s, rr as t, vv as u, Ap as v, D_ as w, k_ as x, w_ as y, Gl as z
};