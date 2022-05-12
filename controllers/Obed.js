const { faker } = require("@faker-js/faker");
const ObjectsToCsv = require('objects-to-csv');

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
        };
    };

    let doctors = []
    for (let i = 1; i <= 30000; i++) {
        doctors.push({ ...getDoctor(), id: i })
    }
    new ObjectsToCsv(doctors).toDisk('./doctor.csv');