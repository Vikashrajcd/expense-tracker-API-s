const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT||3000;
app.listen(port);
const Expense = require('./models/expense');

mongoose.connect('mongodb+srv://Vikashraj123:Vikashraj123@newcluster.exjxc8h.mongodb.net/newDb?retryWrites=true&w=majority',{
    useUnifiedTopology: true
});
app.use(express.json());//in body allow only json format
// app.get('/expenses', async(req, res)=>{
//     const expenses = await Expense.find();
//     res.send(expenses);
// });
// app.put('/expense/:id', async(req, res)=>{
//     const id = req.params.id;
//     const updateObject = req.body;
//     const UpdatedObject = await Expense.findByIdAndUpdate(id, {$set: updateObject}, {
//         new: true
//     });
//     res.send(UpdatedObject);
// });
//     if(result)
//         res.send(result);
//     else
//         res.send("No Expense with that id");
//     }catch(err){
//         res.send(err)
//     }
// });
app.post('/expense',async (req, res)=>{
    console.log(req.body);
    const newExpense = req.body;
    await Expense.create(newExpense);
    res.send('created')
});

// app.get('/expense', async(req, res)=>{
//     const expenses = await Expense.find();
//     res.send(expenses);
// });


app.listen(port, () =>{
    console.log(`example app running ${port}`)
})
