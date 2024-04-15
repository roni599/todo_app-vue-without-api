<template>
  <input type="text" v-model="bookName"  name="bookName" id="">
  <button type="button" @click="addBook">Add</button>
  <h4>Total Book : {{ $store.getters.totalBook }}</h4>
  <ul>
    <li v-for="(book,index) in bookList" :key="index">
      {{ book }} <button @click="deleteItem(index)">Delete</button>
      <button @click="updateItem(book,index)">Update</button>
    </li>
  </ul>
</template>

<script>
export default {
 name:'App',
 data() {
  return {
    bookName:'',
    bookIndex:null
  }
 },
 computed:{
  bookList(){
    return this.$store.state.bookList
  },
 },
 methods:{
  addBook(){
    if(this.bookIndex!==null){
      this.$store.dispatch('updateBook',{
        index:this.bookIndex,
        newItem:this.bookName
      })
      this.bookIndex=null
    }
    else{
      this.$store.dispatch('addBook',this.bookName);
    }
    this.bookName='';
  },
  deleteItem(index){
    this.$store.dispatch('deleteBook',index)
  },
  updateItem(book,index){
    this.bookName=book;
    this.bookIndex=index;
  }
 }
}
</script>

<style>

</style>