<template lang="pug">
  div.list-item(:class="{isStar: item.star}")
    div.top-content
      div.first
        el-checkbox(v-model="item.complete")
        input.title(v-model="item.title",
          :readonly="open == false")
        div.first-icons
          i.fa-star(@click="item.star=!item.star",
            :class="{star: item.star, far: !item.star, fas: item.star}")
          i.fas.fa-pencil-alt(@click="open=!open",
            :class="{open: open}")
      div.second
        i.far.fa-calendar-alt 
        span {{item.date}}
        i.far.fa-file
        i.far.fa-comment-dots
      
    div.bottom-content(v-if="open")
      div.control
        h3 
          i.far.fa-calendar-alt
          span Deadline
        el-date-picker(placeholder="yyyy/mm/dd",
          v-model="item.date",
          value-format="yyyy/MM/dd")
        h3
          i.far.fa-file
          span File
        i.fa.fa-plus-square
        h3 
          i.far.fa-comment-dots
          span Comment
        el-input.title(
          rows=5,
          type="textarea",
          placeholder="Type your memo here…",
          v-model="item.comment"
          )
      .btns
        .btn.cancel
          i.fa.fa-times
          span Cancel 
        .btn.add
          i.fa.fa-plus
          span Add
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      open: false
    }
  }
}
</script>
