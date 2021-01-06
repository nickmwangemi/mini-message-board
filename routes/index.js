var express = require('express')
var router = express.Router()

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
]
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Messageboard', messages: messages })
})

router.get('/new', (req, res) => {
	res.render('form')
})

router.post('/new', (req, res) => {
	console.log(req.body)
	let user = req.body.messageUser
	let text = req.body.messageText

	messages.push({
		text,
		user,
		added: new Date(),
	})

	console.log(messages)
	res.redirect('/')
})
module.exports = router
