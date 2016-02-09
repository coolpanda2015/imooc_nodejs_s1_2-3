var express = require('express');
var path = require('path')
//var moment = require('moment')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
//app.use(express.bodyParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.locals.moment = require('moment')
app.listen(port);

console.log('imooc started on port ' + port);

//index page
app.get('/', function(req, res){
	res.render('index', {
		title: 'imooc 首页',
	movies: [{
		title: '机械战警',
		_id: 1,
		poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	},{
		title: '机械战警',
		_id: 2,
		poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
	}]
	})
})

//detail page
app.get('/movie/:id', function(req, res){
	res.render('detail', {
		title: 'imooc 详情页',
		movie:{
			doctor: 'hesai',
			country: 'USA',
			title: '机械战警',
			year: 2014,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language: 'English',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '翻拍自1987年同名经典科幻。'
		}
	})
})

//admin page
app.get('/admin/movie', function(req, res){
	res.render('admin', {
		title: 'imooc 后台录入页',
		movie:{
			doctor: '',
			country: '',
			title: '',
			year: '',
			poster: '',
			language: '',
			flash: '',
			summary: ''
		}
	})
})

//list page
app.get('/admin/list', function(req, res){
	res.render('list', {
		title: 'imooc 列表页',
		movies: [{
			_id: 1,
			doctor: 'hesai',
			country: 'USA',
			title: '机械战警',
			year: 2014,
			language: 'English',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
		}]
	})
})




