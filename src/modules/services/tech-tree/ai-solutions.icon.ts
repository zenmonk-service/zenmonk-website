import AiChipIcon from './assets/ai-solutions-tree/ai-chip.svg'
import AirflowIcon from './assets/ai-solutions-tree/airflow.svg'
import HuggingFaceIcon from './assets/ai-solutions-tree/huggingface.svg'
import OpenAiIcon from './assets/ai-solutions-tree/openai.svg'
import PythonIcon from './assets/ai-solutions-tree/python.svg'
import PytorchIcon from './assets/ai-solutions-tree/pytorch.svg'
import RagIcon from './assets/ai-solutions-tree/rag.svg'
import TensorflowIcon from './assets/ai-solutions-tree/tensorflow.svg'

export const AiSolutionsTreeIcons = [
  {
    icon: OpenAiIcon,
    position: 'top',
    label: 'OpenAI',
    backgroundColor: 'transparent',
    padding: '0',
  },
  {
    icon: PytorchIcon,
    position: 'top-leaf',
    label: 'PyTorch',
    backgroundColor: '#FDE4E0',
    padding: 'max(11px, 0.85vw)',
  },
  {
    icon: RagIcon,
    position: 'top-leaf-right',
    label: 'RAG',
    backgroundColor: '#EAE7FA',
    padding: 'max(9px, 0.7vw)',
  },
  {
    icon: PythonIcon,
    position: 'bottom-right-leaf',
    label: 'Python',
    backgroundColor: '#FFF6DB',
    padding: 'max(13px, 1.0vw)',
  },
  {
    icon: TensorflowIcon,
    position: 'top-left-leaf',
    label: 'TensorFlow',
    backgroundColor: '#FFEED6',
    padding: 'max(12px, 0.95vw)',
  },
  {
    icon: HuggingFaceIcon,
    position: 'bottom-left-leaf',
    label: 'Hugging Face',
    backgroundColor: '#FFF1C8',
    padding: 'max(10px, 0.8vw)',
  },
  {
    icon: AirflowIcon,
    position: 'bottom-filler-leaf',
    label: 'Apache Airflow',
    backgroundColor: '#EBF1FD',
    padding: 'max(6px, 0.5vw)',
  },
  {
    icon: AiChipIcon,
    position: 'top-left-filler-leaf',
    label: 'AI & ML',
    backgroundColor: '#D5D5D5',
    padding: 'max(6px, 0.45vw)',
    style: { left: '23%', width: '10.5%' },
  },
]
