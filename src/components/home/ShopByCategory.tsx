"use client";
import Image from "next/image";
import CountUp from "react-countup";

const categories = [
    {
        name: "Peanut Butter",
        image: "/images/categories/Categories-1.png",
    },
    {
        name: "Supernatural Protein",
        image: "/images/categories/Categories-2.png",
    },
    {
        name: "Super Oats",
        image: "/images/categories/Categories-3.png",
    },
    {
        name: "Super Muesli",
        image: "/images/categories/Categories-4.png",
    },
    {
        name: "Corn Flakes",
        image: "/images/categories/Categories-5.png",
    },
];

const stats = [
    {
        id: 1,
        value: 50,
        suffix: '+',
        label: 'Countries Served'
    },
    {
        id: 2,
        value: 500,
        suffix: '+',
        label: 'B2B Partners'
    },
    {
        id: 3,
        value: 10,
        suffix: 'M+',
        label: 'Units Exported'
    },
    {
        id: 4,
        value: 15,
        suffix: '+',
        label: 'Years Experience'
    }
];

export default function ShopByCategory() {
    return (
        <section className="bg-[#5C6AAE] py-16 md:py-24">
            <div className="container">
                <h2 className="text-center text-white font-heading2 text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 tracking-wide">
                    SHOP BY CATEGORY
                </h2>

                <div className="sm:flex flex-row grid grid-cols-3 sm:gap-0 gap-y-4">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="flex flex-col items-center group cursor-pointer w-full"
                        >
                            <div className="relative">
                                <div className="rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <p className="text-center text-sm md:text-base lg:text-lg font-bold text-wrap text-primary">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center justify-center text-center sm:p-6 p-4 bg-white rounded-2xl shadow-sm border border-neutral-100/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex items-baseline">
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                <span className="text-primary">{stat.suffix}</span>
                            </div>
                            <p className="text-sm md:text-base font-medium text-neutral-900 uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
