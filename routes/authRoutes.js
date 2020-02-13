const passport = require('passport');

module.exports = app => {
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


