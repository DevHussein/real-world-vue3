type TaskType = 'personal' | 'work' | 'miscellaneous'

export default interface Todo {
  label: string
  type: TaskType
  isComplete: boolean
}