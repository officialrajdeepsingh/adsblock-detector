function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var adsDetector = /*#__PURE__*/ function() {
    "use strict";
    function adsDetector() {
        _classCallCheck(this, adsDetector);
        var ref;
        _defineProperty(this, "getGoogleInsHTML", document.querySelectorAll("ins > ins"));
        _defineProperty(this, "getGoogleAllInsHTML", document.querySelectorAll("ins"));
        _defineProperty(this, "status", (ref = this.getGoogleAllInsHTML[0]) === null || ref === void 0 ? void 0 : ref.getAttribute("data-adsbygoogle-status"));
        console.log("adsblock detector npm package is start working ");
    }
    _createClass(adsDetector, [
        {
            key: "total",
            value: function total() {
                if (this.getGoogleAllInsHTML.length > 0) {
                    if (this.status == null) {
                        return "Ads blocker active";
                    } else {
                        return this.getGoogleInsHTML.length;
                    }
                } else {
                    return "google ads not detected!";
                }
            }
        },
        {
            key: "check",
            value: function check() {
                if (this.getGoogleAllInsHTML.length > 0) {
                    if (this.status == null) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return "google ads not detected!";
                }
            }
        }
    ]);
    return adsDetector;
}();
export default adsDetector;


//# sourceMappingURL=build.js.map