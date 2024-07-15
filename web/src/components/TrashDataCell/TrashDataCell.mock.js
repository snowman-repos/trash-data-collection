// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  trashData: {
    data: '{"trashBags":[1,2,3],"otherWeights":[1,2,3],"items":{"plasticContainers":1,"plasticStraws":2,"glassContainers":3,"metalCans":4,"footwear":5,"smokingRelated":6,"jerryCans":7,"drums":8,"electronics":9,"tires":10,"other":["lots","of","things"]}}',
  },
  setIsLoading: () => {},
  toggleModal: () => {},
  setters: {
    setTotalWeight: () => {},
    setTrashBagsUsed: () => {},
    setCans: () => {},
    setDrums: () => {},
    setElectronics: () => {},
    setFootwear: () => {},
    setGlass: () => {},
    setJerryCans: () => {},
    setOther: () => {},
    setPlasticContainers: () => {},
    setPlasticStraws: () => {},
    setSmokingRelated: () => {},
    setTires: () => {},
    setDataError: () => {},
  },
})
