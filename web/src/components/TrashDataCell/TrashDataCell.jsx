import { get } from '@redwoodjs/forms'
import { useEffect } from 'react'

export const QUERY = gql`
  query TrashDataQuery($transcript: String!) {
    trashData: trashData(transcript: $transcript) {
      data
    }
  }
`

const getProcessedData = ({ data }) => {
  const getIntegerValue = (property) => {
    let value = 0
    if (Number.isInteger(data.items[property])) value = data.items[property]
    if (Array.isArray(data.items[property]))
      value = data.items[property].reduce((partialSum, a) => partialSum + a, 0)
    return value
  }

  const getTotalWeight = () => {
    let totalWeight = 0
    if (Array.isArray(data.trashBags))
      totalWeight += data.trashBags.reduce((partialSum, a) => partialSum + a, 0)
    else if (Number.isInteger(data.trashBags)) totalWeight += data.trashBags
    if (Array.isArray(data.otherWeights))
      totalWeight += data.otherWeights.reduce(
        (partialSum, a) => partialSum + a,
        0
      )
    else if (Number.isInteger(data.otherWeights))
      totalWeight += data.otherWeights
    return totalWeight
  }

  return {
    totalWeight: getTotalWeight(),
    numberOfTrashBagsUsed: Array.isArray(data.trashBags)
      ? data.trashBags.length
      : 0,
    cans: getIntegerValue('metalCans'),
    drums: getIntegerValue('drums'),
    electronics: getIntegerValue('electronics'),
    footwear: getIntegerValue('footwear'),
    glass: getIntegerValue('glassContainers'),
    jerryCans: getIntegerValue('jerryCans'),
    other: Array.isArray(data.items.other) ? data.items.other.join(', ') : '',
    plasticContainers: getIntegerValue('plasticContainers'),
    plasticStraws: getIntegerValue('plasticStraws'),
    smokingRelated: getIntegerValue('smokingRelated'),
    tires: getIntegerValue('tires'),
  }
}

export const Loading = () => (
  <div className="text-center mb-5 mt-5 text-light-400">
    <h2>
      <i className="bi bi-hourglass-split mb-2 icon--large d-block"></i>
      Combobulating&hellip;
    </h2>
  </div>
)

export const Empty = ({ setIsLoading }) => {
  useEffect(() => {
    setIsLoading(false)
  })
  return <></>
}

export const Failure = ({ error, setters, setIsLoading }) => {
  useEffect(() => {
    setters.setDataError(error)
    setIsLoading(false)
  })
  return <p style={{ color: '#FB7463' }}>Error: {error?.message}</p>
}

export const Success = ({ trashData, setIsLoading, toggleModal, setters }) => {
  // console.log(JSON.parse(trashData.data))
  const data = getProcessedData({ data: JSON.parse(trashData.data) })
  console.log(data)
  useEffect(() => {
    setters.setTotalWeight(data.totalWeight)
    setters.trashBagsUsed(data.numberOfTrashBagsUsed)
    setters.setCans(data.cans)
    setters.setDrums(data.drums)
    setters.setElectronics(data.electronics)
    setters.setFootwear(data.footwear)
    setters.setGlass(data.glass)
    setters.setJerryCans(data.jerryCans)
    setters.setOther(data.other)
    setters.setPlasticContainers(data.plasticContainers)
    setters.setPlasticStraws(data.plasticStraws)
    setters.setSmokingRelated(data.smokingRelated)
    setters.setTires(data.tires)
    setIsLoading(false)
    toggleModal(false)
  })
  return <></>
}
