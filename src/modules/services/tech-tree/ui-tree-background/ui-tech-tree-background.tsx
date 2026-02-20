import FillBrusToolIcon from './assets/ui-fill-brush-tool-icon.svg'
import CurveToolIcon from './assets/ui-curve-tool-icon.svg'
import BrushToolIcon from './assets/ui-brush-tool-icon.svg'
import EraserToolIcon from './assets/ui-eraser-tool-icon.svg'
import LasooToolIcon from './assets/ui-lasso-tool-icon.svg'
import CropToolIcon from './assets/ui-crop-tool-icon.svg'
import MoveToolIcon from './assets/ui-move-tool-icon.svg'
import ColorPickerToolIcon from './assets/ui-color-picker-tool-icon.svg'
import TextToolIcon from './assets/ui-text-tool-icon.svg'
import styles from './ui-tech-tree-background.module.scss'

const UiTechTreeBackground = () => {
  return (
    <div className={styles.uiTreeBackground} aria-hidden="true">
      <FillBrusToolIcon
        className={`${styles.layer} ${styles.floatSlowUp} ${styles.fillBrusToolIcon}`}
      />
      <CurveToolIcon
        className={`${styles.layer} ${styles.floatRotateDrift} ${styles.curveToolIcon}`}
      />
      <BrushToolIcon
        className={`${styles.layer} ${styles.floatDriftUpRight} ${styles.brushToolIcon}`}
      />
      <EraserToolIcon
        className={`${styles.layer} ${styles.floatDriftDownLeft} ${styles.eraserToolIcon}`}
      />
      <LasooToolIcon
        className={`${styles.layer} ${styles.floatPulseUp} ${styles.lasooToolIcon}`}
      />
      <CropToolIcon
        className={`${styles.layer} ${styles.floatDriftUpRight} ${styles.cropToolIcon}`}
      />
      <MoveToolIcon
        className={`${styles.layer} ${styles.floatRotateDrift} ${styles.moveToolIcon}`}
      />
      <ColorPickerToolIcon
        className={`${styles.layer} ${styles.floatDriftDownLeft} ${styles.colorPickerToolIcon}`}
      />
      <TextToolIcon
        className={`${styles.layer} ${styles.floatSlowUp} ${styles.textToolIcon}`}
      />
    </div>
  )
}

export default UiTechTreeBackground
