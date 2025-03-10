import SearchPatients from "../components/SearchPatients.jsx";

export const options = {
    loggedIn: [
        {
            name: "Search Patients",
            element: <SearchPatients />,
        },
        {
            name: "All Patients",
            element: <div>Hello</div>,
        },
        {
            name: "Create Patients",
            element: <div>Hello</div>,
        },
        {
            name: "Delete Patients",
            element: <div>Hello</div>,
        },
    ],
    loggedOut: [
        {
            name: "Search Patients",
            element: <SearchPatients />,
        },
        {
            name: "All Patients",
            element: <div>Hello</div>,
        },
    ],
    admin: [
        {
            name: 'All Users',
            element: <div>Hello</div>
        },
        {
            name: 'Find User',
            element: <div>Hello</div>
        },
        {
            name: 'Create User',
            element: <div>Hello</div>
        },
        {
            name: 'Update User',
            element: <div>Hello</div>
        },
        {
            name: 'Delete User',
            element: <div>Hello</div>
        }
    ]
};