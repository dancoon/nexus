"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Rating from "@mui/material/Rating";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomAvatar from "../ui/custom/avatar";
import { Testimonial, User } from "@/lib/types";

const TestimonialCard: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, jumps: true })
  );

  return (
    <div className="max-w-screen-2xl px-4 mx-auto mt-12 md:mt-20">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map(({ rating, comment, user }, index) => (
            <CarouselItem key={index} className=" basis-5/6 md:basis-1/3">
              <div className="p-1">
                <Card className="rounded-none">
                  <CardContent className="flex flex-col text-left p-6">
                    <Rating name="rating" value={rating} readOnly />
                    <p className="mt-6">{comment}</p>
                    <div className="mt-5">
                      <CustomAvatar user={user} />
                      <div className="mt-4"> 
                        <span className="block">{user.firstname + " " + user.lastname}</span>
                        <span className="block">Software Engineer</span>
                      </div>
                    </div>
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

export default TestimonialCard;
