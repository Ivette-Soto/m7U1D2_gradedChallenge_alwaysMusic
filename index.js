const {Pool} = require('pg');

const config = {
    host: 'localhost',
    port: 5432,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASS,
};

const pool = new Pool(config)

//  1. Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.
const insertEstudiante = async () => {
    const text = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *';
    const value = ['Brian may', '10.112.152-9', "Bajo", "Basico"];

    const result = await pool.query(text, value)

    console.log(result)
}

// 2. Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su rut.
const selectEstudianteRut = async (rut) => {
    const text = 'SELECT * FROM estudiantes WHERE rut = $1'
    const values = [rut]
    const result = await pool.query(text, values)

    console.log(result.rows)
}

// 3. Crear una función asíncrona para obtener por consola todos los estudiantes registrados.
const selectEstudiante = async () => {
    const text = 'SELECT * FROM estudiantes'

    const result = await pool.query(text)

    console.log(result)
}



// 4. Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.
const updateEstudiante = async () => {
    const text = 'UPDATE estudiantes SET nivel = $1 WHERE nivel = $2'
    const values = [ 'Avanzado', 'Basico' ]

    const result = await pool.query(text, values)
    console.log(result)
}

  // 5. Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos.
const deleteEstudiante = async (nombre) => {
    const text = 'DELETE FROM estudiantes WHERE nombre = $1'
    const values = [nombre]

    const result = await pool.query(text, values)

    console.log(result)
}
// Alternative:
// const deleteEstudiante = async () => {
//     const text = 'DELETE FROM estudiantes WHERE nombre = $1'
//     const values = ['Brian may']

//     const result = await pool.query(text, values)

//     console.log(result.rows)
// }
// deleteEstrudiante();




// Calling functions:
// 
// insertEstudiante();
// selectEstudianteRut('10.112.152-9');
// selectEstudiante();
// updateEstudiante();
// deleteEstudiante('Brian may');





