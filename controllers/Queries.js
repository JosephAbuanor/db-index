const { Specialization, Hospitals } = require("./Data")
const { faker } = require("@faker-js/faker");
const ObjectsToCsv = require('objects-to-csv');
const Doctor = require("../models").Doctor
const Hospital = require("../models").Hospital
const SpecializationModel = require("../models").Specialization
module.exports.GetData = async (_req, res) => {

    createDocSpecialization()

    return res.status(200).send({ message: "success" })

}


function getDocs() {
    const createDoctor = () => {
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
            id: faker.datatype.uuid(),
            name: fakeName,
            email: faker.internet.email(firstName, lastName),
            age: faker.datatype.number({
                min: 25,
                max: 70,
            }),
        };
    };

    let doctors = []
    for (let i = 1; i <= 30000; i++) {
        doctors.push({ ...createDoctor() })
    }
    new ObjectsToCsv(doctors).toDisk('./doctor.csv');
}

function getSpecialization() {
    let specList = []

    for (let specialization of Specialization) {
        specList.push({ specialization })
    }
    new ObjectsToCsv(specList).toDisk('./doctor.csv')
}

function getHospitals() {
    let hospitalList = []

    for (let hospital of Hospitals) {
        hospitalList.push(
            {
                name: hospital.Name,
                zip: hospital.Postcode,
                city: hospital.City,
                state: "State",
                country: "Germany"
            }
        )
    }
    new ObjectsToCsv(hospitalList).toDisk('./doctor.csv')
}

async function createDocHospital() {

    let dhArray = [];

    let hospitalArray = await Hospital.findAll().catch((error) => { return ({ "message": "failed to fetch hospitals", error }) })
    let randomHospital = ""
    await Doctor.findAll().then(
        (allDoctors) => {

            allDoctors.forEach(doctor => {

                for (let i = 0; i < 3; i++) {

                    randomHospital = hospitalArray[Math.floor(Math.random() * hospitalArray.length)]

                    dhArray.push({
                        doctorId: doctor.id,
                        hospitalId: randomHospital.id
                    })
                }
            });

            new ObjectsToCsv(dhArray).toDisk('./doctor.csv')

        }).catch((error) => { return ({ "message": "failed to fetch doctors", error }) })

}

async function createDocSpecialization() {

    let dsArray = [];

    let specializationArray = await SpecializationModel.findAll().catch((error) => { return ({ "message": "failed to fetch specialization", error }) })
    let randomSpecialization = ""
    await Doctor.findAll().then(
        (allDoctors) => {

            allDoctors.forEach(doctor => {

                for (let i = 0; i < 3; i++) {

                    randomSpecialization = specializationArray[Math.floor(Math.random() * specializationArray.length)]

                    dsArray.push({
                        doctorId: doctor.id,
                        specializationId: randomSpecialization.id,
                        practiceYear: faker.datatype.number({
                            min: 1970,
                            max: 2020,
                        }),
                    })
                }
            });

            new ObjectsToCsv(dsArray).toDisk('./doctor.csv')

        }).catch((error) => { return ({ "message": "failed to fetch doctors", error }) })

}



