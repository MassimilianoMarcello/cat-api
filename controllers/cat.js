let cats = [
    { id: 1, name: 'Whiskers', age: 3 },
    { id: 2, name: 'Fluffy', age: 2 },
    { id: 3, name: 'Mittens', age: 5 }
];

const controllers = {
    getCats: (req, res) => {
        res.status(200).json(cats);
    },
    getCatById: (req, res) => {
        const cat = cats.find((c) => c.id === req.params.id);
        if (cat) {
            res.status(200).json(cat);
        } else {
            res.status(404).send('Cat not found');
        }
    },
    createCat: (req, res) => {
        const { name, age } = req.body;
        if (!name || !age) {
            return res.status(400).send('please provide name or age');
        }
        const newId =
            cats.length > 0 ? Math.max(...cats.map((cat) => cat.id)) + 1 : 1;
        const newCat = { id: newId, name, age };
        cats.push(newCat);
        res.status(201).json(newCat);
    },
    updateCat: (req, res) => {
        const { id } = req.params;
        const { name, age } = req.body;

        console.log(`ID from params: ${id}`);
        console.log(`Cats array: ${JSON.stringify(cats)}`);

        const cat = cats.find(cat => cat.id === parseInt(id, 10));

        if (!cat) {
            return res.status(404).json({ message: 'Cat not found' });
        }

        if (name) cat.name = name;
        if (age) cat.age = age;

        res.status(200).json(cat);
    },
    deleteCat: (req, res) => {
        const { id } = req.params;
        const idNumber = parseInt(id, 10);
const index = cats.findIndex(cat => cat.id === idNumber);

        if (index === -1) {
            return res.status(404).json({ message: 'Cat not found' });
        }
const deletedCat = cats.splice(index, 1)[0];
res.status(200).json(deletedCat);
    }
};

export default controllers;
