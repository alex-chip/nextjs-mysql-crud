import { createPool } from "mysql2/promise"

const pool = createPool({
  host: 'localhost',
  user: 'alex',
  password: 'password',
  port: 3306,
  database: 'productsDB'
})

export { pool }
