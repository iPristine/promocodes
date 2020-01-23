const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'postgres',
  database: 'api',
  password: 'password',
  port: 5432,
})


const getTest = (request, response) => {
  console.log('GET TEST request')
  response.status(200).json(['Nice, backend working'])
}

const getUsers = (request, response) => {
    console.log('getUsers')
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUserByName = (request, response) => {
    const name = request.params.name;
    pool.query('SELECT * FROM users WHERE name = $1', [name], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }
  // DELETE me for secure
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  // DELETE me for secure
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }


// CREATE TABLE offers (
//   ID SERIAL PRIMARY KEY,
//   name VARCHAR(30),
//   title VARCHAR(200),
//   description VARCHAR(500),
//   image_link VARCHAR(200),
//   promocode VARCHAR(20)
// );



const getOffers = (request, response) => {
  pool.query('SELECT * FROM offers ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOfferById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM offers WHERE id = $1', [id], (error, results) => {
      if (error) {
      throw error
      }
      response.status(200).json(results.rows)
  })
}

const createOffer = (request, response) => {
  const { name, title, description, image_link, promocode } = request.body;
  console.log( name, title, description, image_link, promocode, request.body);
  pool.query('INSERT INTO offers (name, title, description, image_link, promocode ) VALUES ($1, $2, $3, $4, $5)', [name, title, description, image_link, promocode], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Offer added with ID: ${result.insertId}`)
  })
}

const updateOffer = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, title, description, image_link, promocode } = request.body

  pool.query(
    'UPDATE offers SET name = $1, title = $2, description = $3, image_link = $4, promocode = $5 WHERE id = $6',
    [name, title, description, image_link, promocode, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Offer modified with ID: ${id}`)
    }
  )
}

const deleteOffer = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM offers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Offer deleted with ID: ${id}`)
  })
}


  module.exports = {
    getTest,
    getUsers,
    getUserByName,
    createUser,
    updateUser,
    deleteUser,
    getOffers,
    getOfferById,
    createOffer,
    updateOffer,
    deleteOffer
  }