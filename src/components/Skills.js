import React from "react";

const tools = [
    {
        id: 1,
        imgSrc:
            "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
        size: "col-span-2 row-span-2",
    },
    {
        id: 2,
        imgSrc:
            "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png",
        size: "col-span-1 row-span-1",
    },
    {
        id: 3,
        imgSrc:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
        size: "col-span-1 row-span-2",
    },
    {
        id: 4,
        imgSrc:
            "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
        size: "col-span-2 row-span-1",
    },
    {
        id: 5,
        imgSrc: "https://logowik.com/content/uploads/images/git6963.jpg",
        size: "col-span-1 row-span-1",
    },
    {
        id: 6,
        imgSrc:
            "https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxy1c2bvl6odeo52dodk.jpg",
        size: "col-span-2 row-span-2",
    },
    {
        id: 7,
        imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        size: "col-span-1 row-span-1",
    },
    {
        id: 8,
        imgSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        size: "col-span-1 row-span-1",
    },
    {
        id: 9,
        imgSrc: "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
        size: "col-span-2 row-span-1",
    },
];

const ToolsSection = () => {
    return (
        <section id="tools" className="bg-white dark:bg-gray-900 py-10 h-screen">
            <div className="container mx-auto px-4 h-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 h-full">
                    {tools.map((tool) => (
                        <div
                            key={tool.id}
                            className={`relative group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform transform hover:scale-105 ${tool.size}`}
                        >
                            <img
                                src={tool.imgSrc}
                                alt={`Tool ${tool.id}`}
                                className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
