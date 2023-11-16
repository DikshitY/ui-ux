function Card({number, title, desc, src}){

    const style = {
        backgroundImage: `url(${src})` ,
        backgroundSize: "cover",
    }

    return <div style = {style} className="card">
        <h3>{number}</h3>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
}

export default Card;