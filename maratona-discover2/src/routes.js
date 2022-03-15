const express = require('express')
const routes = express.Router()

// ejs não precisa do '/' e '.html' nos files e ele localiza a pasta views como basePath
// const views = __dirname + '/views/';

const Profile = {
	data: {
		name: 'lucas',
		avatar: 'https://github.com/lucaskohler.png',
		'monthly-budget': 3000,
		'days-per-week': 5,
		'hours-per-day': 3,
		'vacation-per-year': 4,
		'value-hours': 75
	},
	controllers: {
		index(req, res) {
			return res.render('profile', { profile: Profile.data })
		},
		update(req, res) {
			// TODO: Calculate value per hour
		}
	}
}

const Job = {
	data: [
		{
			id: 1,
			name: 'Pizzaria Guloso',
			'daily-hours': 3,
			'total-hours': 3,
			created_at: Date.now()
		},
		{
			id: 2,
			name: 'OneTwo project',
			'daily-hours': 3,
			'total-hours': 47,
			created_at: Date.now()
		}
	],
	controllers: {
		index(req, res) {
			const updatedJobs = Job.data.map(job => {
				const remaining = Job.services.remainingDays(job)
				const status = remaining <= 0 ? 'done' : 'progress'

				return {
					...job,
					remaining,
					status,
					budget: Profile.data['value-hours'] * job['total-hours']
				}
			})

			return res.render('index', { jobs: updatedJobs })
		},
		create(req, res) {
			return res.render('job')
		},
		save(req, res) {
			const lastId = Job.data[Job.data.length - 1]?.id || 1

			Job.data.push({
				id: lastId + 1,
				name: req.body.name,
				'daily-hours': req.body['daily-hours'],
				'total-hours': req.body['total-hours'],
				created_at: Date.now()
			})

			return res.redirect('/')
		}
	},
	services: {
		remainingDays(job) {
			const remaingDays = (job['total-hours'] / job['daily-hours']).toFixed()

			const createdDate = new Date(job.created_at)
			const dueDay = createdDate.getDate() + Number(remaingDays)
			const dueDateInMs = createdDate.setDate(dueDay)

			const timeDiffInMs = dueDateInMs - Date.now()
			const dayInMs = 1000 * 60 * 60 * 24
			const dayDiff = Math.floor(timeDiffInMs / dayInMs)

			return dayDiff
		}
	}
}

routes.get('/', Job.controllers.index)
routes.get('/job', Job.controllers.create)
routes.post('/job', Job.controllers.save)
routes.get('/job/edit', (req, res) => res.render('job-edit'))
routes.get('/profile', Profile.controllers.index)
routes.post('/profile', Profile.controllers.update)

module.exports = routes
