
export const getUser = (req, res) => {
    let { user, pass } = req.query;
    console.log(user,pass)
    if (user === 'admin' && pass === 'admin') {
        return res.send('Welcome Admin');
    }
    else {
        return res.status(401).send('Invalid Credentials');
    }

}