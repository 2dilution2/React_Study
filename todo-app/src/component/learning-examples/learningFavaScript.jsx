const person = {
    name: 'Heeseok',
    address: {
        line1: '221B Baker Street',
        city: 'London',
        contry: 'UK'
    },
    profiles:['twitter','linkedin', 'instargram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}
export default function LearningJavaScript() {
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}