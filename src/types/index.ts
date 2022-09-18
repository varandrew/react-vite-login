type User = {
  name: string
  avatar: string
  tableNo: string
  score: number
}

export interface CUser extends User {
  success: boolean
}

export { type User }
