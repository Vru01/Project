import { PythonShell } from 'python-shell'

export const getdata = async (req, res) => {
    const { N, P, K, temperature, humidity, ph, rainfall } = req.body;

    // Convert input data to a space-separated string
    const inputData = `${N} ${P} ${K} ${temperature} ${humidity} ${ph} ${rainfall}`;

    let ps = new PythonShell('./controller/model.py');
    
    // Send the input data as a single string
    ps.send(inputData);
    
    ps.on('message', async function (message) {
        res.status(201).send(message);
        console.log(message);
    });
}