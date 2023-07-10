const {db} = require("./util/admin");
const cors = require('cors')({origin: true});

exports.getAllRegisteredUsers = (request, response) => {
    db
        .collection("access-request-users")
        .orderBy("createdAt", "desc")
        .get()
        .then((data) => {
            let todos = [];
            data.forEach((doc) => {
                todos.push({
                    userId: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    createdAt: doc.data().createdAt,
                });
            });
            return response.json(todos);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code});
        });
};

exports.addUser = (request, response) => {
    cors(request, response, () => {
    if (request.body.name.trim() === '') {
        return response.status(400).json({ body: 'Must not be empty' });
    }

    if(request.body.email.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    }

    const newUser = {
        name: request.body.name,
        email: request.body.email,
        createdAt: new Date().toISOString()
    }
    db
        .collection("access-request-users")
        .add(newUser)
        .then((doc)=>{
            const responseTodoItem = newUser;
            responseTodoItem.id = doc.id;
            return response.json(responseTodoItem);
        })
        .catch((err) => {
            response.status(500).json({ error: 'Something went wrong' });
            console.error(err);
        });
});
};