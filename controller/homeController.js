module.exports = {
    home: async (req, res) => {
        try {
            console.log('hello world');
            res.send('Hello World')
        } catch (error) {
            console.log(error);
        }
    }
}