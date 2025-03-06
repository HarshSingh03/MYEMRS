export function verifyAdmin(req) {
    const { userId, pass } = req.body.credentials;
    if (!userId || !pass || userId !== process.env.ADMIN_USER || pass !== process.env.ADMIN_PASS) {
        return false;
    }
    else {
        return true;
    }
}