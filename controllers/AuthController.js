import bcrypt from 'bcryptjs';
import Users from '../models/Users.js';
import passport from 'passport';
class AuthController{

  registerView(req, res){
    res.render('register');
  }

  loginView(req, res){
    res.render('login');
  }

 async registerUser(req, res){
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
      return res.render('register', { error: 'Please fill all fields' });
    }
    if(await Users.findOne({where: {email}})) {
      return res.render('register', { error: 'A user account already exists with this email' });
    }

    await Users.create({name, email, password: bcrypt.hashSync(password, 8)});


    res.redirect('login?registrationdone');  
  }

  loginUser(req, res){
    passport.authenticate('local', {
      successRedirect: '/?loginsuccess',
      failureRedirect: '/login?error=invalid_credentials'
    })(req, res);
  }

  logoutUser(req, res){
    req.logout(() => res.redirect('/login?loggedout'));
  }
   
}

export default AuthController;