export class Task {
    constructor(
        public id:number,
        public name: string,
        public status: boolean
    ) {
    }

    getName() {
        return this.name.toUpperCase();
    }

    getStatus() {
        return this.status ? "done" : "to do" ;
    }

    changeStatus() {
        this.status = !this.status;
    }
}