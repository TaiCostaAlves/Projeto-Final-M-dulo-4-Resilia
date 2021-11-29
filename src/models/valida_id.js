class ConfirmaID {
    constructor(id) {
        console.log("id",id)
        this.id = this.verificaId(id)
       }

    verificaId(id){
        if(id != 0){
            return id
        } else {
            return -1
        }
    }
}

module.exports = ConfirmaID