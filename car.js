export default function Car(props) {

    let {model, description, power, volume} = props;
    return (
        <div>
            <h1>{model}</h1>
            <p>{description}</p>
            <p>{power} {volume}</p>
        </div>
    )
}