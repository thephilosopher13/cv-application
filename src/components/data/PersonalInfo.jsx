export const PersonalInfo = {
    name: '',
    email: '',
    address: '',
    number: '',
    updateData: function(newName, newEmail, newAddress, newNumber) {
        this.name = newName;
        this.email = newEmail;
        this.address = newAddress;
        this.number = newNumber;
    }
}