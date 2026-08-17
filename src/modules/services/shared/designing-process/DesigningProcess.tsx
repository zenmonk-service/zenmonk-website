import React from 'react'
import ProcessWorkflow, { ProcessStep, TitleCharacter } from './index'
import Research from './assets/research.png'
import Sketch from './assets/sketch.png'
import Create from './assets/create.png'
import Test from './assets/test.png'
import Develop from './assets/develop.png'

// Define the designing process steps
const designingSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Research",
    color: "#2EC2CC",
    description: "Understanding user needs and market trends",
    image: Research
  },
  {
    id: 2,
    title: "Sketch",
    color: "#A263F5",
    description: "Creating initial wireframes and concepts",
    image: Sketch
  },
  {
    id: 3,
    title: "Create",
    color: "#5FCC62",
    description: "Developing high-fidelity designs",
    image: Create
  },
  {
    id: 4,
    title: "Test",
    color: "#4A9FF5",
    description: "Validating designs with users",
    image: Test
  },
  {
    id: 5,
    title: "Develop",
    color: "#FF9021",
    description: "Implementing the final design",
    image: Develop
  }
]

const designingTitle: TitleCharacter[] = [
  { char: 'D', color: '#2EC2CC' },
  { char: 'E', color: '#A263F5' },
  { char: 'S', color: '#6CC77D' },
  { char: 'I', color: '#3C95DB' },
  { char: 'G', color: '#FF9D00' },
  { char: 'N', color: '#2EC2CC' },
  { char: 'I', color: '#A263F5' },
  { char: 'N', color: '#6CC77D' },
  { char: 'G', color: '#3C95DB' },
]

const DesigningProcess = () => {
  return (
    <ProcessWorkflow
      titlePrefix="OUR"
      titleHighlightedText={designingTitle}
      titleSuffix="WORK PROCESS"
      steps={designingSteps}
    />
  )
}

export default DesigningProcess