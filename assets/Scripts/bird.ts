
import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = bird
 * DateTime = Wed Jul 06 2022 18:32:08 GMT+0800 (中国标准时间)
 * Author = Wicky_Leung
 * FileBasename = bird.ts
 * FileBasenameNoExtension = bird
 * URL = db://assets/Scripts/bird.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('bird')
export class bird extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property({ type: Animation })
    anim: Animation | null = null;
    flappingAnim: Animation | null = null;

    onLoad() {
        this.flappingAnim = this.getComponent(Animation);
    }

    start() {
        // [3]
        if (this.flappingAnim) {
            this.flappingAnim.play('birdFlapping');
        }
        if (this.anim) {
            this.anim.play("birdWing");
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
