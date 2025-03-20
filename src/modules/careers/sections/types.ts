export interface Skill {
  title: string
  description: string
}

export interface Position {
  title: string
  heading: string
  isOpening: boolean
  description: string
  skills: Skill[]
}

export interface Department {
  department: string
  id: number
  positions: Position[]
}
