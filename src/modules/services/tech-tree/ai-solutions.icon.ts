import AiChipIcon from './assets/ai-solutions-tree/ai-chip.svg'
import HuggingFaceIcon from './assets/ai-solutions-tree/huggingface.svg'
import OpenAiIcon from './assets/ai-solutions-tree/openai.svg'
import PythonIcon from './assets/ai-solutions-tree/python.svg'
import RagIcon from './assets/ai-solutions-tree/rag.svg'
import TensorflowIcon from './assets/ai-solutions-tree/tensorflow.svg'

export const AiSolutionsTreeIcons = [
  {
    icon: OpenAiIcon,
    position: 'top',
    label: 'OpenAI',
    backgroundColor: '#F2F2F2',
  },
  {
    icon: TensorflowIcon,
    position: 'top-leaf',
    label: 'TensorFlow',
    backgroundColor: '#FFF3E6',
  },
  {
    icon: PythonIcon,
    position: 'top-leaf-right',
    label: 'Python',
    backgroundColor: '#FFF6DB',
  },
  {
    icon: HuggingFaceIcon,
    position: 'bottom-right-leaf',
    label: 'Hugging Face',
    backgroundColor: '#FFF3D6',
  },
  {
    icon: RagIcon,
    position: 'bottom-left-leaf',
    label: 'RAG',
    backgroundColor: '#EAF2FE',
  },
  {
    icon: AiChipIcon,
    position: 'top-left-leaf',
    label: 'AI & ML',
    backgroundColor: '#F0F0F0',
  },
]
