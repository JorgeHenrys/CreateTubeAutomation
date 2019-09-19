const robots = {
	input: require('./robots/input.js'),
	text: require('./robots/text.js'),
	state: require('./robots/state.js'),
	image: require('./robots/image.js'),
	video: require('./robots/video.js'),
	youtube: require('./robots/youtube.js')
}

async function start() {

	//robots.input()
	//await robotst.ext()
	//await robots.image()
	//await robots.video()
	await robots.youtube()


}

start()