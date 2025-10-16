export default function LifeCyclePage(){

    function getMyName(firstName: string, lastName: string){
        return `${firstName} ${lastName}`;
    }

    const name = "Long Vibol"

    return (
        <div>
            <h1>Hello Analytic frmo {name} </h1>

            <p>My name is {getMyName("Hi","Vibol")}</p>
        </div>

    );
}