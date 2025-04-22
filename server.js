import 'dotenv/config';
import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import register from './controllers/register.js';
import signin from './controllers/signin.js';
import clarifai from './controllers/clarifai.js';
import image from './controllers/image.js';
import profile from './controllers/profile.js';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
const db = knex({
	client: 'pg',
	connection: {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	}
});

app.post('/signin', signin.handleSignin(db, bcrypt)); //1st way
app.post('/register', (req, res) => {
	register.handleRegister(req, res, db, bcrypt);
}); //2nd way
app.get('/profile/:id', (req, res) => {
	profile.handleProfile(req, res, db);
});
app.post('/clarifai', (req, res) => {
	clarifai.handleClarifai(req, res);
});
app.put('/image', (req, res) => {
	image.handleImage(req, res, db);
});

app.listen(PORT, () =>
	console.log(`✅ Proxy-server is working on port ${PORT}`)
);
