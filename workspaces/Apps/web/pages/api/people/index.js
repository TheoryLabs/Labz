import { people } from '@theorylabs/people-data'

export default function handler(req, res) {
  res.status(200).json(people)
}
