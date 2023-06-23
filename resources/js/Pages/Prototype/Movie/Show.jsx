import ReactPlayer from "react-player";
import { Link } from "@inertiajs/react";
export default function Show() {
    return (
        <section
            class="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg"
            id="stream"
        >
            <div className="pt-[100px]">
                <ReactPlayer
                    id="stream-video"
                    class="overflow-hidden h-screen w-screen"
                    url={"https://www.youtube.com/watch?v=P6nZAiuFSms"}
                    controls
                    width={"100%"}
                    height={"600px"}
                >
                    <source
                        src="https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4"
                        type="video/mp4"
                    />
                    <p class="vjs-no-js text-twmdark">
                        To view this video please enable JavaScript, and
                        consider upgrading to a web browser that
                        <a
                            href="https://videojs.com/html5-video-support/"
                            target="_blank"
                        >
                            supports HTML5 video
                        </a>
                    </p>
                </ReactPlayer>
            </div>
            {/* <!-- Button back to dashboard --> */}
            <div class="absolute top-5 left-5 z-20">
                <Link href={route("prototype.dashboard")}>
                    <img
                        src="/icons/ic_arrow-left.svg"
                        class="transition-all btn-back w-[46px]"
                        alt="stream"
                    />
                </Link>
            </div>
            {/* <!-- Video Title --> */}
            <div class="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span class="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
}
