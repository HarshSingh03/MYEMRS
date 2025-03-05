
export const getUser = asyncHandler(async (req, res) => {
    let { user, pass } = req.query;
    console.log(user, pass)
    if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
        return res.send('Welcome Admin');
    }
    else {
        return res.status(401).send('Invalid Credentials');
    }
})