
import { _decorator, Component, Node, tween, easing, UIOpacity, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('startButtonManager')
export class startButtonManager extends Component {
    @property({ type: Node })
    maskLayer: Node | null = null;

    start() {

    }

    onClickStartButton() {
        console.log('onClickStartButton')
        this.maskLayer.active = true
        let opacityCom = this.maskLayer.getComponent(UIOpacity)
        opacityCom.opacity = 0
        if (opacityCom) {
            tween(opacityCom)
                .to(0.25, { opacity: 255 }, { easing: easing.fade })
                .call(() => {
                    // 重新加载场景
                    console.log('anim finish')
                    director.loadScene('Game');
                })
                .start()
        }
    }
}
