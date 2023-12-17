import './App.css';
import Card from './components/Card/Card';

const App = () => {
    const courses = [
        {
            id: 1,
            image:
                "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
            level: "Intermediate",
            title: "Introduction Basic Programming HTML & CSS",
            user: {
                avatar:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
                name: "John Doe"
            },
            rating: 4.5,
            students: 1234,
            modules: 5,
            duration: 5400
        },
        {
            id: 2,
            image:
                "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
            level: "Beginner",
            title: "Introduction Basic Programming JS & REACT",
            user: {
                avatar:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
                name: "Joe Biden"
            },
            rating: 5.0,
            students: 5678,
            modules: 3,
            finishedModules: 2,
            duration: 6500,
            isMyCourse: true
        }
    ];

    return (
        <div id={'wrapper'} className={'wrapper'}>
            <Card coursesInfo={courses}  />
        </div>
    );
};

export default App;
