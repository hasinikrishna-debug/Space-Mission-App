/* =========================
   SPACE MISSION DATA
========================= */

const missions = [

    {
        name: "Apollo 11",

        agency: "NASA",

        year: 1969,

        destination: "Moon",

        status: "Completed",

        description:
            "First human mission to land astronauts on the Moon."
    },


    {
        name: "Chandrayaan-3",

        agency: "ISRO",

        year: 2023,

        destination: "Moon",

        status: "Completed",

        description:
            "Indian lunar mission that successfully landed on the Moon."
    },


    {
        name: "Mangalyaan",

        agency: "ISRO",

        year: 2013,

        destination: "Mars",

        status: "Completed",

        description:
            "India's first interplanetary mission to Mars."
    },


    {
        name: "Mars Curiosity Rover",

        agency: "NASA",

        year: 2011,

        destination: "Mars",

        status: "Active",

        description:
            "A robotic mission studying the surface and environment of Mars."
    },


    {
        name: "James Webb Space Telescope",

        agency: "NASA / ESA / CSA",

        year: 2021,

        destination: "Deep Space",

        status: "Active",

        description:
            "A powerful space telescope used to study the universe."
    },


    {
        name: "Voyager 1",

        agency: "NASA",

        year: 1977,

        destination: "Outer Solar System",

        status: "Active",

        description:
            "A spacecraft exploring the outer regions of our solar system."
    }

];


/* =========================
   HTML ELEMENTS
========================= */

const missionContainer =
    document.getElementById(
        "missionContainer"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const detailsModal =
    document.getElementById(
        "detailsModal"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalAgency =
    document.getElementById(
        "modalAgency"
    );


const modalYear =
    document.getElementById(
        "modalYear"
    );


const modalDestination =
    document.getElementById(
        "modalDestination"
    );


const modalStatus =
    document.getElementById(
        "modalStatus"
    );


const modalDescription =
    document.getElementById(
        "modalDescription"
    );


/* =========================
   DISPLAY MISSIONS
========================= */

function displayMissions(missionList) {

    missionContainer.innerHTML = "";


    if (missionList.length === 0) {

        missionContainer.innerHTML = `

            <div class="mission-card">

                <h2>
                    🚀 No Missions Found
                </h2>

                <p>
                    Try searching for another
                    mission, agency or destination.
                </p>

            </div>

        `;

        return;
    }


    missionList.forEach(
        mission => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "mission-card";


            card.innerHTML = `

                <h2>
                    🚀 ${mission.name}
                </h2>


                <p>
                    <strong>Agency:</strong>
                    ${mission.agency}
                </p>


                <p>
                    <strong>Launch Year:</strong>
                    ${mission.year}
                </p>


                <p>
                    <strong>Destination:</strong>
                    ${mission.destination}
                </p>


                <p>
                    <strong>Description:</strong>
                    ${mission.description}
                </p>


                <span class="status">
                    ${mission.status}
                </span>


                <button
                    class="details-btn"
                    onclick="showDetails('${mission.name}')">

                    View Details

                </button>

            `;


            missionContainer.appendChild(
                card
            );

        }
    );
}


/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
    "input",
    () => {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        const filteredMissions =
            missions.filter(
                mission =>

                    mission.name
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    mission.agency
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    mission.destination
                        .toLowerCase()
                        .includes(searchText)
            );


        displayMissions(
            filteredMissions
        );

    }
);


/* =========================
   SHOW DETAILS
========================= */

function showDetails(
    missionName
) {

    const mission =
        missions.find(
            item =>
                item.name === missionName
        );


    if (!mission) {
        return;
    }


    modalTitle.textContent =
        "🚀 " + mission.name;


    modalAgency.textContent =
        mission.agency;


    modalYear.textContent =
        mission.year;


    modalDestination.textContent =
        mission.destination;


    modalStatus.textContent =
        mission.status;


    modalDescription.textContent =
        mission.description;


    detailsModal.style.display =
        "flex";
}


/* =========================
   CLOSE DETAILS
========================= */

function closeDetails() {

    detailsModal.style.display =
        "none";
}


/* =========================
   CLOSE WHEN CLICKING
   OUTSIDE POPUP
========================= */

window.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            detailsModal
        ) {

            closeDetails();

        }

    }
);


/* =========================
   CLOSE WITH ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeDetails();

        }

    }
);


/* =========================
   STATISTICS
========================= */

document.getElementById(
    "totalMissions"
).textContent =
    missions.length;


document.getElementById(
    "nasaMissions"
).textContent =

    missions.filter(
        mission =>
            mission.agency
                .includes("NASA")
    ).length;


document.getElementById(
    "isroMissions"
).textContent =

    missions.filter(
        mission =>
            mission.agency
                .includes("ISRO")
    ).length;


document.getElementById(
    "activeMissions"
).textContent =

    missions.filter(
        mission =>
            mission.status === "Active"
    ).length;


/* =========================
   LOAD MISSIONS
========================= */

displayMissions(
    missions
); 