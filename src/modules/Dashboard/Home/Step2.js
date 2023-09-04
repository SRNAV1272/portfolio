export default function save(value) {
	if (global.localStorage) {
		global.localStorage.setItem(
			'rgl-7',
			JSON.stringify({
				layout: value,
			})
		)
	}
}