const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users =[]
let counter = 1;

// path = GAT /users
app.get('/users', (req, res)=> {
    res.json(users);
});

// path = POST /user
app.post('/user', (req, res)=> {
    let user = req.body;
    console.log('user', user);
    res.json({
        message: 'User added successfully',
        user: user
    });
    //path = PUT /user/:id
    app.put('/user/:id', (req, res)=> {
        let id = req.params.id;
        let updatedUser = req.body;
        // หา users จาก id
        let selectedIndex = users.findIndex(user => user.id == id);
    
        // update userนั้น
        if (updatedUser.name){
            users[selectedIndex].name = updatedUser.name;
        }
        if (updatedUser.age){
            users[selectedIndex].age = updatedUser.age;
        }
        users[selectedIndex].name = updatedUser.name|| users[selectedIndex].name;
        users[selectedIndex].age = updatedUser.age || users[selectedIndex].age;
    
        //ส่ง response กลับไปว่า update ที่เลือกสำเร็จแล้ว
        res.json({
            message: 'User updated successfully',
            data : {
                 user: updatedUser,
                 indexUpdated: selectedIndex
            }
           
        })
    })
    // path = DELETE /user/:id
    app.delete('/user/:id', (req,res)=>{
        let id = req.params.id;
        let selectedIndex = users.findIndex(user => user.id == id);
        if (selectedIndex !== -1){
            users.splice(selectedIndex, 1);
            res.json({
                message: 'User deleted successfully',
                data: {
                    indexDeleted: selectedIndex
                }
            })
        }else{
            res.status(404).json({
                message: 'User not found'
            })
        }
    })
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});