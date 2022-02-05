export default function Handler(req, res) {
  console.log(req.url)
  return res.status(200).json(
      {
        "id": req.query.id,
        "name": "Laptop"
      }
    )
}