const state = {
    personalData: {
        name: "Johnny",
        lastname: "Depp",
        age: 44,
        nationality: "American",
        residence: "France",
        occupation: "Actor / Producer",
        avatar: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"
    },
    experience: [
        { id: 1, movie: "Pirates of the Caribbean"},
        { id: 2, movie: "Edward Scissors hand"},
        { id: 3, movie: "Johnny Brasco"}
    ],
    education: [
        { id: 1, institute: "University of Arts."},
        { id: 2, institute: "University UCLA"},
        { id: 3, institute: "University of Paris"}
    ],
    bio: "I am a person like everyone else, trying to have a normal life whilst doing the things that make me happy"
}


export const Info = (props) => {
    return (
        <main>
            <section className="personalData">
                <h2>Personal Information:</h2>
                <p>
                    Name: {props.name}
                </p>
                <p>
                    lastname: {props.lastname}
                </p>
                <p>
                    Age: {props.age}
                </p>
                <p>
                    Nationality: {props.nationality}
                </p>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                {
                    props.experience.map(movie => {
                        <p key={movie.id}>Movie: {movie.movie}</p>
                    })
                }
                                
            </section>
            <section className="education">
            <h2>Experience</h2>
                {
                    props.experience.map(movie => {
                        <p key={movie.id}>Movie: {movie.movie}</p>
                    })
                }
            </section>
            <p className="bio">

            </p>
        </main>
    )
}