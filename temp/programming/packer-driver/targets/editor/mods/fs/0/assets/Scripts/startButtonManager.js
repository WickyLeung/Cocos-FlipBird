System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, easing, UIOpacity, director, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, startButtonManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      easing = _cc.easing;
      UIOpacity = _cc.UIOpacity;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "398a6pFrCNGcqvtcidS7Thb", "startButtonManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("startButtonManager", startButtonManager = (_dec = ccclass('startButtonManager'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class startButtonManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "maskLayer", _descriptor, this);
        }

        start() {}

        onClickStartButton() {
          console.log('onClickStartButton');
          this.maskLayer.active = true;
          let opacityCom = this.maskLayer.getComponent(UIOpacity);
          opacityCom.opacity = 0;

          if (opacityCom) {
            tween(opacityCom).to(0.25, {
              opacity: 255
            }, {
              easing: easing.fade
            }).call(() => {
              // 重新加载场景
              console.log('anim finish');
              director.loadScene('Game');
            }).start();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=startButtonManager.js.map