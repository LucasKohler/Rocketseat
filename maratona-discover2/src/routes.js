const express = require('express')
const routes = express.Router()

// ejs não precisa do '/' e '.html' nos files e ele localiza a pasta views como basePath
// const views = __dirname + '/views/';

const profile = {
	name: 'lucas',
	avatar: 'https://github.com/lucaskohler.png',
	'monthly-budget': 3000,
	'days-per-week': 5,
	'hours-per-day': 3,
	'vacation-per-year': 4
}

const jobs = []

routes.get('/', (req, res) => res.render('index'))
routes.get('/job', (req, res) => res.render('job'))
routes.post('/job', (req, res) => {
	jobs.push({
		name: re.body.name,
		'daily-hours': req.body['daily-houres'],
		'total-hours': req.body['total-hours'],
		created_at: Date.now()
	})

	return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render('job-edit'))
routes.get('/profile', (req, res) => res.render('profile', { profile: profile }))

module.exports = routes
