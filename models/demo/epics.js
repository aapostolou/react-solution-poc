import { combineEpics, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'

import { fetchBasicData } from './actions'

const handleFetchBasicDataEpic = (action$) =>
  action$.pipe(
    ofType(fetchBasicData.type),
    map(() => {
      const randomTrueFalse = Math.random() <= 0.5

      if (randomTrueFalse) {
        return fetchBasicData.succeeded({ data: [1, 2, 3, 4] })
      } else {
        return fetchBasicData.failed({ data: [] })
      }
    })
  )

const epics = combineEpics(handleFetchBasicDataEpic)

export default epics
