import express from "express";
import { Data } from "../models/mongoapp.js";
const router = express.Router();
router.post('/', async (request, response) => {
    try {
        if (!request.body.name || !request.body.age || request.body.status===undefined) {
            return response.status(400).send({
                message: "Send all feilds",
            });
        }
        const newData = {
            name: request.body.name,
            age: request.body.age,
            status: request.body.status,
        };
        const data = await Data.create(newData);
        return response.status(201).send(data);
    } catch (error) {
        console.log(error);
    }
});

router.get('/', async (request, response) => {
    try {
        const datall = await Data.find({});
        return response.status(200).json(datall);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data1 = await Data.findById(id);
        return response.status(200).json(data1);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.name || !request.body.age || !request.body.status) {
            return response.status(400).send({ message: 'Send all feilds: "name", "age", "status"' });

        }
        const { id } = request.params;
        const result = await Data.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Data Not found' })
        }
        return response.status(200).send({ message: 'Data Updated Successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Data.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Book Not found' })
        }
        return response.status(200).send({ message: 'Book Deleted Successfully' })


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
// for code reusabiliy and better structures we use this model.

export default router;