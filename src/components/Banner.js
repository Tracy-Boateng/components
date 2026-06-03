import Button from "./Button";

function Banner(props) {
    return (
      <section>
       <h2>{props.title}</h2>

       <p>{props.text}</p>

       <div className="button-group">
        <Button
            text="Book Now"
            type="primary"
        />

        <Button
            text="Learn More"
            type="secondary"
        />
       </div>
      </section>  
    );
}

export default Banner;