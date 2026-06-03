function Gallery(props) {
    return(
        <section className="gallery">

            {props.images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Airbnb Property"
                />
            ))}

        </section>
    );
}

export default Gallery;