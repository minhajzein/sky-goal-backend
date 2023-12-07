module.exports = {
    home: async (req, res) => {
        try {
            res.send('Hello World')
        } catch (error) {
            console.log(error);
        }
    }
}