import {
    Store,
    BarChart3,
    Users,
    ShoppingCart,
    Settings,
    Headphones
} from "lucide-react";
import SectionTitle from "../SharedComp/SectionTitle";

const BestFeatures = () => {

    const cardData = [
        {
            icon: <Store className="h-10 w-10 text-primary" />,
            title: "Point of Sale (POS)",
            description:
                "Optimize your in-store sales with a user-friendly POS system that supports multiple payment methods, tracks inventory in real-time, generates receipts, and provides detailed sales analytics for smarter business decisions."
        },
        {
            icon: <BarChart3 className="h-10 w-10 text-primary" />,
            title: "Enterprise Resource Planning (ERP)",
            description:
                "Seamlessly connect finance, human resources, procurement, inventory, and other departments with a centralized ERP system. Gain full visibility into operations, automate workflows, and boost productivity across your organization."
        },
        {
            icon: <Users className="h-10 w-10 text-primary" />,
            title: "Customer Relationship Management (CRM)",
            description:
                "Build stronger customer relationships by managing contacts, tracking interactions, automating marketing efforts, and monitoring sales pipelines. Our CRM system empowers your team to deliver personalized customer experiences at scale."
        },
        {
            icon: <ShoppingCart className="h-10 w-10 text-primary" />,
            title: "E-Commerce Solutions",
            description:
                "Launch and grow your online store with a feature-rich e-commerce platform. Manage products, orders, payments, promotions, and shipping all in one place. Integrate with third-party tools to scale your business globally."
        },
        {
            icon: <Settings className="h-10 w-10 text-primary" />,
            title: "Custom Software Development",
            description:
                "We develop tailored software solutions to meet your specific business challenges. Whether it's automating internal processes or building customer-facing applications, our development team delivers scalable, secure, and modern systems."
        },
        {
            icon: <Headphones className="h-10 w-10 text-primary" />,
            title: "Dedicated Support",
            description:
                "Our expert support team is available 24/7 to assist you with troubleshooting, updates, and technical guidance. We’re committed to ensuring your systems run smoothly so you can focus on growing your business."
        }
    ];

    return (
        <div className="p-4">
            <SectionTitle
                heading="Everything You Need to Succeed"
                subHeading="Our platform provides all the tools you need to build, deploy, and scale your applications."
            />
            <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col justify-between h-full rounded-lg border p-6 transition-all hover:-translate-y-1"
                    >
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                {card.icon}
                                <h3 className="text-xl font-bold">{card.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600">{card.description}</p>
                        </div>
                        <div className="mt-6 h-1 w-16 bg-primary rounded-full group-hover:w-24 transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestFeatures;
