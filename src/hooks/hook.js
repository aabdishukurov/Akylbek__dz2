export const useFilter = (state, search) => {
    const newState = state.sort((a, b) => a.id - b.id)
    return newState.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  }
  
  export const useSort = (state, search) => {
    const newStateByTitle = state.sort((a, b) => a.title.localeCompare(b.title))
    return newStateByTitle.filter((item) =>  item.title.toLowerCase().includes(search.toLowerCase()))
  }