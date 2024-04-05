import express from 'express';
import mongoose from 'mongoose';
import { Data } from './models/mongoapp.js';
import userRoute from './Routes/Route.js';
import cors from 'cors';
const app = express();
const PORT = 8000;
import { PORTmongo, mongodbURL } from './config.js';
//Routes
app.use(express.json());
app.use(cors());
app.get('/', (request, response) => {
    // console.log(request);
    return response.status(234).send('Express connected');
});

app.use('/users', userRoute);

mongoose.connect(mongodbURL)
    .then(() => {
        console.log("App connected with mongodbAtlas");
        app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));

    })
    .catch((error) => { console.log(error); });



// app.post('/users', async (request, response) => {
//     try {
//         if (!request.body.name || !request.body.age || !request.body.status) {
//             return response.status(400).send({
//                 message: "Send all feilds",
//             });
//         }
//         const newData = {
//             name: request.body.name,
//             age: request.body.age,
//             status: request.body.status,
//         };
//         const data = await Data.create(newData);
//         return response.status(201).send(data);
//     } catch (error) {
//         console.log(error);
//     }
// });

// app.get('/users', async (request, response) => {
//     try {
//         const datall = await Data.find({});
//         return response.status(200).json(datall);

//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });
// app.get('/users/:id', async (request, response) => {
//     try {
//         const {id}=request.params;
//         const data1 = await Data.findById(id);
//         return response.status(200).json(data1);

//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });
// app.put('/users/:id', async (request, response) => {
//     try {
//         if (!request.body.name || !request.body.age || !request.body.status) {
//             return response.status(400).send({ message: 'Send all feilds: "name", "age", "status"' });
            
//         }
//         const {id}= request.params;
//         const result = await Data.findByIdAndUpdate(id, request.body);
//         if(!result){
//             return response.status(404).json({ message: 'Data Not found' })
//         } 
//         return response.status(200).send({ message: 'Data Updated Successfully' })
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

// app.delete('/users/:id', async (request, response) => {
//     try {
//         const {id}=request.params;
//         const result = await Data.findByIdAndDelete(id);
//         if(!result){
//             return response.status(404).json({ message: 'Book Not found' })
//         } 
//         return response.status(200).send({ message: 'Book Deleted Successfully' })


//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });