/*
    参数说明：
        callback：滚动到底部的回调
        gap：距离底部多高时，执行回调
    说明：
        用于滚动到底部，进行相应处理
*/
class  BottomScrolling {
    constructor({callback, gap = 4}) {
        let options = {
            callback,
            gap
        }
        Object.assign(this, options)
        this.touchObj = {}
        this.scrollCB = {}
        this._init()
    }
    // 取消监听
    destroy() {
//      document.removeEventListener('touchstart', this._touchstartCB, false)
//      document.removeEventListener('touchmove', this._touchmoveCB, false)
        document.removeEventListener('scroll', this.scrollCB, false)
    }
    _init() {
        this._bindEvent()
    }
    // 监听touch，判断用户拉动方向
    // 监听scroll，判断滚动位置
    _bindEvent() {
//      document.addEventListener('touchstart', this._touchstartCB.bind(this), false)
//      document.addEventListener('touchmove', this._touchmoveCB.bind(this), false)
        // 使用尾部防抖动避免频繁操作
        this.scrollCB = this._debounceTail((event) => {
            // 是否为向上翻
//          if (typeof this.touchObj.gap === 'undefined' || this.touchObj.gap >= 0) {
//              return false
//          }
            // 是否到达底部
            if (!this._atBottom()) {
                return false
            }
            // 到达底部，执行相应的函数
            this.callback && this.callback()
        }, 17, this)
        document.addEventListener('scroll', this.scrollCB, false)
    }
    // touchstart回调
    _touchstartCB(event) {
        this.touchObj.startPos = event.touches[0].pageY
    }
    // touchmove回调
    _touchmoveCB(event) {
        let movePos = event.touches[0].pageY
        this.touchObj.gap = movePos - this.touchObj.startPos
    }
    // 判断是否滚动到底部
    _atBottom() {
        let top = document.body.offsetTop
        let scrollHeight = document.body.scrollHeight
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        let windowHeight = window.innerHeight
        if (top + scrollHeight - (scrollTop + windowHeight) < this.gap) {
            return true
        }
        return false
    }
    _debounceTail(fn, delay, ctx) {
        let movement = null
        return function() {
            let args = arguments

            // 清空上一次操作
            clearTimeout(movement)

            // delay时间之后，任务执行
            movement = setTimeout(function() {
                fn.apply(ctx, args)
            }, delay)
        }
    }
}

export default BottomScrolling;
