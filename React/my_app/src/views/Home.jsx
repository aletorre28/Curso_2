import Input from "../components/Input";
import UseStateHook from "../Hooks/UseStateHook";
import ApiFetch from "../Hooks/ApiFetch";

const Home = () => {
    return ( 
        <>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident minima voluptatibus maiores rerum ducimus est? Vitae deserunt aut iusto pariatur officiis magnam distinctio voluptate adipisci. Ad natus corporis mollitia.</p>
            <Input
                placeholder1="Nombre"
                tipo1="text"
                placeholder2="Apellido"
                tipo2="text"
                placeholder3="Email"
                tipo3="email"
                placeholder4="Contraseña"
                tipo4="password"
                placeholder5="Confirmar contraseña"
                tipo5="password"
            />
            <UseStateHook />
            <br />
            <br />
            {/* <ApiFetch /> */}
        </>
    );
}

export default Home;