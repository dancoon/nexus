"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Partners = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, jumps: true })
  );

  return (
    <div className="max-w-screen-2xl px-4 mx-auto mt-14 md:mt-28">
      <h4 className="text-center font-semibold mb-8 text-lg">
        Trusted by top industry leaders for exceptional networking experiences
      </h4>

      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {Array.from({ length: 45 }).map((_, index) => (
            <CarouselItem key={index} className="basis-24">
              <div className="p-1">
                <Card className="rounded-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="font-semibold">
                      {"Icon "}
                      {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
