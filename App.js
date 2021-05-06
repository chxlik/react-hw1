import Car from "./components/car";

export default function App() {
    return (
        <div>
            <Car model={"subaru"}
                 description={"electrocar"}
                 power={300}
                 volume={2}
            />
            <Car model={"audi"}
                 description={"smartcar"}
                 power={450}
                 volume={5}
            />
            <Car model={"bmw"}
                 description={"sportcar"}
                 power={500}
                 volume={4}
            />
        </div>
    )
}