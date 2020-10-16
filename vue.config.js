const title = '[Your name here] | Developer';
const keywords = '[username], [name], skills';
const description = '[Your name here] | Developer';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/simplefolio-vue/'
		: '/',
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = title;
				args[0].meta = {
					viewport: 'width=device-width, initial-scale=1',
					keywords,
					description
				}
				return args;
			})
	}
}