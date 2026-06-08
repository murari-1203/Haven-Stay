const User = require("../models/user");

module.exports.signUp = async(req, res) => {
    try {
        let { email, username, password } = req.body;
        const newUser = new User({
            email,
            username,
        });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err)
            }
            req.flash("success", "welcome to Haven-Stay")
            res.redirect("/listings");
        })

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

}

module.exports.renderSignup = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.renderLogin = (req, res) => {
    res.render("users/login.ejs")
}

module.exports.login = async(req, res) => {
    req.flash("success", `Welcome Back ${req.body.username}`)
    const redirect = res.locals.redirectUrl || "/listings";
    res.redirect(redirect)
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/");
    });
}