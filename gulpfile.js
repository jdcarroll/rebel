var gulp = require('gulp')
,	chalk = require('chalk')
,	nodemon = require('gulp-nodemon')


var cyanWatch = chalk.black.bgCyan.bold;


gulp.task('default',function(done){
	nodemon({
		script: 'server.js',
		ignore: ['ignore.js'],
		env: { 'NODE_ENV': 'development' }
	}).on('restart');
	console.log(cyanWatch('Going into dev watch mode...'));
	console.log('Watching...');
})