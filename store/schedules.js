export const state = () => ({
  collections: {
    OCT15: [],
    OCT16: [],
    OCT17: [],
    OCT18: []
  }
})

export const mutations = {
  setCollection (state, item) {
    state.collections.OCT15 = item.OCT15
    state.collections.OCT16 = item.OCT16
    state.collections.OCT17 = item.OCT17
    state.collections.OCT18 = item.OCT18
  }
}

export const actions = {
  async getCollections ({ commit }) {
    const { data } = await this.$axios.get('https://spreadsheets.google.com/feeds/cells/1s4drALWH3gIGMq5xzplb6dmjwbFGtQnar4KQqMtCpF8/1/public/full?alt=json').catch(e => console.error(e))
    const collections = data.feed.entry
    const item = {}
    item.OCT15 = collections.filter(i => i.title.$t.includes('B') && parseInt(i.gs$cell.row) > 4)
    item.OCT16 = collections.filter(i => i.title.$t.includes('C') && parseInt(i.gs$cell.row) > 4)
    item.OCT17 = collections.filter(i => i.title.$t.includes('E') && parseInt(i.gs$cell.row) > 3)
    item.OCT18 = collections.filter(i => i.title.$t.includes('G') && parseInt(i.gs$cell.row) > 4)
    const getStart = (row, col) => {
      return (collections.find(j => parseInt(j.gs$cell.row) === row && parseInt(j.gs$cell.col) === col)) ? (collections.find(j => parseInt(j.gs$cell.row) === row && parseInt(j.gs$cell.col) === col)).content.$t : 'start'
    }
    const getEnd = (row, col) => {
      return (collections.find(j => parseInt(j.gs$cell.row) === row + 1 && parseInt(j.gs$cell.col) === col)) ? (collections.find(j => parseInt(j.gs$cell.row) === row + 1 && parseInt(j.gs$cell.col) === col)).content.$t : 'end'
    }
    item.OCT15 = item.OCT15.map((i) => {
      i.start = getStart(parseInt(i.gs$cell.row), 1)
      i.end = getEnd(parseInt(i.gs$cell.row), 1)
      return i
    })
    item.OCT16 = item.OCT16.map((i) => {
      i.start = getStart(parseInt(i.gs$cell.row), 1)
      i.end = getEnd(parseInt(i.gs$cell.row), 1)
      return i
    })
    item.OCT17 = item.OCT17.map((i) => {
      i.start = getStart(parseInt(i.gs$cell.row), 4)
      i.end = getEnd(parseInt(i.gs$cell.row), 4)
      return i
    })
    item.OCT18 = item.OCT18.map((i) => {
      i.start = getStart(parseInt(i.gs$cell.row), 6)
      i.end = getEnd(parseInt(i.gs$cell.row), 6)
      return i
    })
    commit('setCollection', item)
    return item
  }
}
