var env			= process.env.NODE_ENV || 'development'
  , packageJson = require('../package.json')
  , path		= require('path')
  , express		= require('express')

console.log('------------------------------------------------')
console.log('---------Loading Rebel ISP Monitoring-----------')
console.log('------------------------------------------------')

global.App = {
	app: express()
,	port: process.env.PORT || 4000
,	version: packageJson.version
,	root: path.join(__dirname, '..')
,	appPath: function(path) {
		return this.root + '/' + path
	}
,	require: function(path) {
		return require(this.appPath(path))
	}
,	env: env || 4000
,	start: function() {
		if (!this.started){
			this.started = true
			this.app.listen(this.port)
			console.log("Running Rebel App version " + App.version + " on port " + App.port + " in " + App.env + " mode")
		}
	}
}