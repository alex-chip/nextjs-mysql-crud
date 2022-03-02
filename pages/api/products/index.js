import { pool } from '../../../config/db'

export default async function Handler(req, res) {
  switch(req.method) {
    case 'GET':
      return res.status(200).json('getting a product')
    case 'POST':
      const { name, description, price } = req.body

      const [result] = await pool.query('INSERT INTO product SET ?', {
        name,
        description,
        price
      })
      return res
        .status(200)
        .json({name, price, description, id: result.insertId})
  }
}