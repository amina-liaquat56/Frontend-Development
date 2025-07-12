class Admin extends User {
    editData() {
        console.log(`${this.name} is editing data`);
    }
}

let admin1 = new Admin("Amina", "amina@example.com");
admin1.viewData();  // Output: Amina is viewing data
admin1.editData();  // Output: Amina is editing data
