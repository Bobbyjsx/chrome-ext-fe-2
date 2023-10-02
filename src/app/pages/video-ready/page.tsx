import Two from "src/app/components/module/video-ready/Two";
import One from "src/app/components/module/video-ready/one"
import FruitfulNav from "src/app/components/navs/FruitfulNav"

const page = () => {
  return (
		<div className="flex-  w-full">
			<FruitfulNav />

			<div className=" grid grid-cols-5 gap-3 place-items-center w-[80%] mx-auto">
				<section className="w-full col-span-2">
					<One />
				</section>
              {/* TODO: vertical rule */}
              <div className="col-span-1 w-[1%] border-r-2 border-r-gray-200 h-full"></div>
              <section className="w-full col-span-2">
                  <Two/>
                </section>
			</div>
		</div>
  );
}

export default page
