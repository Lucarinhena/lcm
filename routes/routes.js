// routes/routes.js
const express = require('express');
const passport = require('passport');
const path = require('path');

const router = express.Router();

// Rota de Login
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
);

// Rota de Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Rota de Dashboard
router.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile('dashboard.html', { root: './views' });
  } else {
    res.redirect('/');
  }
});

// Rota para a Página de Login
router.get('/', (req, res) => {
  res.sendFile('login.html', { root: './views' });
});

module.exports = router;
