class Users {
  constructor(){
    this.user = []
  }
  add(user){
    this.user.push(user)
  }
  get(id){
    return this.user.find(user => user.id === id)
  }
  remove(id){
    const user = this.get(id)
    if(user){
      this.user = this.user.filter(user => user.id !== id)
    }
    return user
  }
  getByRoom(room){
    return this.user.filter(user => user.room === room)
  }
}
module.exports = function () {
  return new Users();
}
