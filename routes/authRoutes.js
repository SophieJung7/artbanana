const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    //Local Auth - SIGN UP
    app.post('/auth/signup', (req, res) => {
        const { username, password } = req.body;
        User.register(new User({ username: username }), password, (err, user) => {
            if (err) {
                throw err;
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.send(user);
                });
            }
        });
    });

    app.post('/auth/signin',
        passport.authenticate('local'), (req, res) => {
            try {
                res.send(req.user);
            } catch (err) {
                throw err;
            }
        }
    );

    // app.post('/auth/signin',
    //     passport.authenticate('local', {
    //         successRedirect: '/success',
    //         failureRedirect: '/failure'
    //     }), (req, res) => {
    //         res.send(req.user);
    //     }
    // );

    app.get('/auth/signout', (req, res) => {
        req.logout();
        res.send(null);
    });

    // Google Auth 
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: [ 'profile', 'email' ]
        })
    );

    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        }
    );

    //Naver Auth 
    app.get('/auth/naver',
        passport.authenticate('naver', {
            failureRedirect: '/'
        })
    );

    app.get('/auth/naver/callback',
        passport.authenticate('naver', {
            failureRedirect: '/'
        }),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};


