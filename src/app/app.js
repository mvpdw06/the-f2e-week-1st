import listitem from '../listitem/listitem'

export default {
  comments: {
    listitem
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: '待辦事項1',
          completed: false,
          date: '',
          comment: '',
          star: false,
          file: ''
        },
        {
          id: 1,
          title: '待辦事項2',
          completed: false,
          date: '',
          comment: '',
          star: false,
          file: ''
        }
      ]
    }
  },
  computed: {
    orderedItems() {
      return this.items.sort((a, b) => {
        let scoreA = (a.star ? -10000 : 0) + (a.complete ? 20000 : 0)
        let scoreB = (b.star ? -10000 : 0) + (b.complete ? 20000 : 0)

        if (scoreA > scoreB) return 1
        else if (scoreA == scoreB) return 0
        else return -1
      })
    }
  }
}
