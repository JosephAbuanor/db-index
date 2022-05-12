const Doctor = require("../models").Doctor
const { NamesArray, Specialization, Hospitals } = require("./Data")
const { faker } = require("@faker-js/faker");
const ObjectsToCsv = require('objects-to-csv');


module.exports.GetData = async (_req, res) => {
    
    const getDoctor = () => {
        let fakeName = faker.name.findName();
        let splited = fakeName.split(" ");
        let firstName;
        let lastName;
        if (splited.length === 2) {
            firstName = splited[0];
            lastName = splited[1];
        } else {
            firstName = splited[1];
            lastName = splited[2];
        }
        return {
            name: fakeName,
            email: faker.internet.email(firstName, lastName),
            age: faker.datatype.number({
                min: 25,
                max: 70,
            }),
            specialization: Specialization[Math.floor(Math.random() * Specialization.length)].toString(),
            practiceYear: faker.datatype.number({
                min: 1970,
                max: 2020,
            }),
            country: "Germany",
            state: "State",
            city: Hospitals[Math.floor(Math.random() * Hospitals.length)].City,
            zip: Hospitals[Math.floor(Math.random() * Hospitals.length)].Postcode,
            hospital: Hospitals[Math.floor(Math.random() * Hospitals.length)].Name
        };
    };
    
    let doctors = []
    for (let i = 1; i <= 30000; i++) {
        doctors.push({...getDoctor() })
    }
    new ObjectsToCsv(doctors).toDisk('./doctor.csv');
    
    return res.status(200).send("success")
   
}

function getSpecialization() {
    let specList = []
    for (let i = 1; i < 30001; i++) {
        let specPos = Math.floor(Math.random() * Specialization.length)
        specList.push(Specialization[specPos].toString())
    }
    let count = specList.length
    return { count, specList }
}

function getAge() {
    let max = 70;
    let min = 25;
    let ageList = []

    for (let i = 1; i < 30001; i++) {
        let randomAge = Math.floor(Math.random() * (max - min + 1) + min)
        ageList.push(randomAge)
    }

    let count = ageList.length
    return { count, ageList }

}

function getPracticeYear() {
    let max = 2020;
    let min = 1970;
    let yearList = []

    for (let i = 1; i < 30001; i++) {
        let randomYear = Math.floor(Math.random() * (max - min + 1) + min)
        yearList.push(randomYear)
    }

    let count = yearList.length
    return { count, yearList }

}

function getEmails() {

    let initMail = "workmail";
    var emailList = []
    for (let i = 1; i < 30001; i++) {
        let email = initMail + i + "@gmail.com"
        emailList.push(email)
    }

    let count = emailList.length
    return { count, emailList }
}

function getNames() {
    var nameListAll = []
    for (let fName of NamesArray) {
        let randomFirstName = fName

        for (let lName of NamesArray) {
            let randomLastName = lName

            if (randomFirstName !== randomLastName) {
                let fullName = (randomFirstName + " " + randomLastName).toString();
                if (!nameListAll.includes(fullName)) {
                    nameListAll.push(fullName)
                }
            }
        }
    }

    let nameList = nameListAll.splice(102)
    let count = nameList.length
    return { count, nameList }
}

// module.exports.GetData = async(_req, res) => {

// }

