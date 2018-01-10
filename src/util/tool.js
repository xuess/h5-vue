import store from '../store'
/** 
*   Toast公共方法
*/
export function toast(str, icon) {
    store.dispatch('showToast', true)
    if (icon == 'success') {
        store.dispatch('showSuccess', true)
        store.dispatch('showFail', false)
    } else {
         store.dispatch('showSuccess', false)
        store.dispatch('showFail', true)
    }
    store.dispatch('toastMsg',str);
    setTimeout(() => {
        store.dispatch('showToast', false); 
    },1500); 
}

/**
 * dialog公共方法
 */

export function alert(str) {
    store.dispatch('showAlert', true)
    store.dispatch('alertMsg', str)
    setTimeout(() => {
        store.dispatch('showAlert', false); 
    },1500);
}

/**
 * 事件节流
 */
export function _debounceTail (fn, delay, ctx) {
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