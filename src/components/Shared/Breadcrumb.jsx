import React from 'react';
import { Link } from "react-router-dom";
import uuid from "react-uuid";

import routes from "../../routes";

const Breadcrumb = ({ links = [] }) => {
    return (
        <div
        className="breadcrumbs mt-12 flex flex-row lg:border-b px-2 pb-4 lg:mb-6 lg:px-4"
        itemScope
            itemType="https://schema.org/BreadcrumbList"
        >
            <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
            >
                <Link to={routes.home} itemProp="item">
                    <span itemProp="name">
                        Home
                    </span>
                    <meta itemProp="position" content="1" />
                </Link>
            </div>
            {links.length > 0 &&
                links.map((link, key) => {
                    return (
                        <div className="flex flex-row" key={uuid()}>
                            <div className="mx-1 lg:mx-4 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="lg:h-6 lg:w-6 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                            <div
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                {key + 1 === links.length ? (
                                    <span className="text-orange-600">
                                        <a href={link.href} itemProp="item" className="hidden">
                                            {link.title}
                                        </a>
                                        <meta
                                            itemProp="position"
                                            content={key + 2}
                                        />
                                        <span itemProp="name">
                                            {link.title}
                                        </span>
                                    </span>
                                ) : (
                                    <>
                                        <Link
                                            to={link.href}
                                            itemProp="item"
                                            className="main-text-color"
                                        >
                                            <meta
                                                itemProp="position"
                                                content={key + 2}
                                            />
                                            <span itemProp="name">
                                                {link.title}
                                            </span>
                                        </Link>
                                    </>

                                )}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Breadcrumb;
