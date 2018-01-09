

/**
 * 事件节流
 */
exports._debounceTail = (fn, delay, ctx) => {
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