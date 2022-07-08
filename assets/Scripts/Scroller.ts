
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Scroller
 * DateTime = Wed Jul 06 2022 15:35:49 GMT+0800 (中国标准时间)
 * Author = Wicky_Leung
 * FileBasename = Scroller.ts
 * FileBasenameNoExtension = Scroller
 * URL = db://assets/Scripts/Scroller.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('Scroller')
export class Scroller extends Component {
    @property
    speed = 300;

    private resetX = -300
    private canScroll = false

    onLoad() {
        this.canScroll = true
        console.log('onLoad')
    }

    start() {
        // this.canScroll = true
        console.log('start')
    }


    update(deltaTime: number) {
        if (!this.canScroll) {
            return;
        }

        let x = this.node.position.x - this.speed * deltaTime;

        if (x < this.resetX) {
            this.node.setPosition(-this.resetX, this.node.position.y, this.node.position.z);
        } else {
            this.node.setPosition(x, this.node.position.y, this.node.position.z);
        }
    }

    stopScroll() {
        this.canScroll = false;
    }

    startScroll() {
        this.canScroll = true;
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
