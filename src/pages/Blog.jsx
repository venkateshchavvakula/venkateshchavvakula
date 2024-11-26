import React, { useEffect } from "react";
import updateMeta from "../helpers/seo-meta";
const list = [
    {
        image: "https://blog.logrocket.com/wp-content/uploads/2024/01/checkbox-ui-design-best-practices-examples.png?w=420",
        title: "Checkbox UI design: Best practices and examples",
        tag: 'Angular',
        sub_title: `The checkbox is one of the most common elements in UX design.
        Learn all about the feature, its states, and the types of
        selection.`,
        date_time: "Jan 26, 2024 ⋅ 4 min read"
    },
    {
        image: "https://blog.logrocket.com/wp-content/uploads/2024/01/9-best-Git-based-CMS-platforms.png?w=420",
        title: "9 best Git-based CMS platforms for your next project",
        tag: 'React',
        sub_title: `Join us as we compare the benefits of Git-based CMS platforms
        over API-first CMS platforms and explore the best Git-based CMSs
        available.`,
        date_time: "Jan 25, 2024 ⋅ 4 min read"
    },
    {
        image: "https://blog.logrocket.com/wp-content/uploads/2024/01/Extrinsic-Motivation-How-Incentives-Influence-Behavior.png?w=420",
        title: "Extrinsic motivation: How incentives influence behavior",
        tag: 'CSS',
        sub_title: ` Extrinsic motivation is driven by external rewards, as opposed
        to intrinsic motivation which is driven from within.`,
        date_time: "Jan 25, 2024 ⋅ 4 min read"
    },
    {
        image: "https://blog.logrocket.com/wp-content/uploads/2024/01/How-To-Craft-An-Engaging-Elevator-Pitch.png?w=420",
        title: "How to craft an engaging elevator pitch",
        tag: 'CSS',
        sub_title: `An elevator pitch is a technique to help you introduce yourself
        and get the person interested in knowing more.`,
        date_time: "Jan 25, 2024 ⋅ 3 min read"
    }
]
const Blog = () => {
    useEffect(() => {
        document.title = "Venkatesh | Senior Software Engineer";
        updateMeta(
            "description",
            `The Future of Business Cards is here, switch to the next generation smart business card. Be creative and personalize your Scube card.`,
        );
    }, []);
    return (
        <div className=" md:px-6 px-3 w-full">
            <div class="container mx-auto">
                    <div class="flex flex-col gap-4">
                        <h4 class="block text-black font-semibold text-base">All Posts </h4>
                        <div class="grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-8 m-auto">
                            {
                                list.map((x, index) =>
                                    <div class="max-w-[320px] " key={'blogs-' + index}>
                                        <a class="blog-card-img">
                                            <img
                                                width="420"
                                                height="280"
                                                src={x.image}
                                            />
                                        </a>
                                        <a className="mt-2 block">
                                            <h4 className="font-bold">
                                                {x.title}
                                            </h4>
                                        </a>
                                        <div class="flex flex-row items-center w-full justify-between mt-2">
                                            <div class="bg-[#ffeded] rounded-full px-3 py-1 flex items-center justify-center">
                                                <p class="text-red-500  text-xs font-semibold">
                                                    {x.tag}
                                                </p>
                                            </div>
                                            <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" /></svg>
                                            </div>
                                        </div>
                                        <div class="mt-2 block">
                                            <p>
                                                {x.sub_title}
                                            </p>
                                        </div>
                                        <div class="mt-2 block">{x.date_time}</div>
                                    </div>
                                )
                            }
                     </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;
