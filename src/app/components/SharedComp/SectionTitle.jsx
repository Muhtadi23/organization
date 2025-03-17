const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center my-8">
            <h3 className="text-3xl uppercase">{heading}</h3>
            <h5 className="">{subHeading}</h5>
        </div>
    );
};

export default SectionTitle;