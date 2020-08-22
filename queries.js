const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'person',
    password: 'rpassword',
    port: 5432,
    //connectionString : isProduction ? process.env.DATABASE_URL :connectionString,
    //ssl : isProduction,
})



const getPerson = (request, response) => {
    pool.query('SELECT * FROM person', (error, results) =>{
        if(error){
            throw error
        }
        console.log(results.rows)
        response.status(200).json(results.rows)
    })
}

const addPerson = (request, response ) =>{
    const {fullname, birth} = request.body
    pool.query(
        'INSERT INTO person (fullname, birth) VALUES ($1, $2)',
        [fullname, birth], (error) =>{
            if(error){
                throw error
            }
            response.status(201).json({
                status:'success',
                message : 'Person added'
            })
        }
    )
}


module.exports={
    getPerson,
    addPerson
}