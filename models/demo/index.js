import { changeLanguage, fetchBasicData } from './actions'
import { selectedLanguage, demoData } from './selectors'

import reducer from './reducer'
import epics from './epics'

export {
  changeLanguage,
  fetchBasicData,
  selectedLanguage,
  demoData,
  reducer,
  epics,
}
