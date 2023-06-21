import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";

const flickityOptions = {
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: ">1",
};
export default function Dashboard() {
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>

                <Flickity
                    className="gap-[30px] pb-10"
                    options={flickityOptions}
                >
                    {/* <!-- Movie Thumbnail --> */}

                    {[1, 2, 3, 4].map((i) => (
                        <FeatureMovie
                            key={i}
                            slug="batman-in-love"
                            name={"Batman In Love " + i}
                            category="Action & Horror"
                            thumbnail="https:picsum.photos/id/1/300/300"
                            rating={i + 1}
                        />
                    ))}
                </Flickity>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Browse
                    </div>
                    <Flickity options={flickityOptions} className="gap-[30px]">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                slug="batman-in-love"
                                name={"Batman In Love " + i}
                                category="Action & Horror"
                                thumbnail="https:picsum.photos/id/1/300/300"
                                rating={i + 1}
                            />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
}
