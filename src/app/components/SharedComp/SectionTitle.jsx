const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <p className="max-w-[900px] md:text-xl lg:text-base xl:text-xl text-white60">{subHeading}</p>
                <h2 className="text-3xl font-bold sm:text-5xl text-white">{heading}</h2>
            </div>

        </div>
    );
};

export default SectionTitle;