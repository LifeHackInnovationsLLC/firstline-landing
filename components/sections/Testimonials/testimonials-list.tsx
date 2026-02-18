"use client";

import {
  TestimonialCard,
  TestimonialCardAuthor,
  TestimonialCardAuthorInfo,
  TestimonialCardAuthorName,
  TestimonialCardAuthorRole,
  TestimonialCardQuote,
  Testimonials,
  TestimonialsColumn,
  TestimonialsGrid,
} from "@/components/ui/testimonial";
import Image from "next/image";

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const testimonials = {
  column1: [
    {
      testimonial: LOREM_LONG,
      author: "Sarah Chen",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "VP Sales at TechCorp",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Michael Torres",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "Sales Director at Growth Inc",
    },
    {
      testimonial: LOREM_LONG,
      author: "Emily Watson",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "CEO at Digital Agency",
    },
    {
      testimonial: LOREM_SHORT,
      author: "David Kim",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "Founder at StartupX",
    },
  ],
  column2: [
    {
      testimonial: LOREM_SHORT,
      author: "Jessica Martinez",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "Operations Lead at ScaleUp",
    },
    {
      testimonial: LOREM_LONG,
      author: "Alex Johnson",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "Finance Manager at RetailPro",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Rachel Adams",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "Partnership Manager at BrandCo",
    },
    {
      testimonial: LOREM_LONG,
      author: "James Wilson",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "Head of Sales at Enterprise Ltd",
    },
  ],
  column3: [
    {
      testimonial: LOREM_LONG,
      author: "Nina Patel",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "International Director at GlobalSales",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Tom Garcia",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "CTO at AgencyHub",
    },
    {
      testimonial: LOREM_LONG,
      author: "Lisa Park",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "COO at SalesForce Pro",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Chris Brown",
      authorImage: "/sections/hero/mock-profile-picture.png",
      authorPosition: "Director at MediaGroup",
    },
  ],
};

export function TestimonialsList() {
  return (
    <Testimonials>
      <TestimonialsGrid height={500}>
        <TestimonialsColumn speed={30}>
          {testimonials.column1.map((item) => (
            <TestimonialCard key={item.author}>
              <TestimonialCardQuote>{item.testimonial}</TestimonialCardQuote>
              <TestimonialCardAuthor>
                <Image
                  src={item.authorImage}
                  alt={item.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <TestimonialCardAuthorInfo>
                  <TestimonialCardAuthorName>{item.author}</TestimonialCardAuthorName>
                  <TestimonialCardAuthorRole>{item.authorPosition}</TestimonialCardAuthorRole>
                </TestimonialCardAuthorInfo>
              </TestimonialCardAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsColumn>
        <TestimonialsColumn speed={25} reverse>
          {testimonials.column2.map((item) => (
            <TestimonialCard key={item.author}>
              <TestimonialCardQuote>{item.testimonial}</TestimonialCardQuote>
              <TestimonialCardAuthor>
                <Image
                  src={item.authorImage}
                  alt={item.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <TestimonialCardAuthorInfo>
                  <TestimonialCardAuthorName>{item.author}</TestimonialCardAuthorName>
                  <TestimonialCardAuthorRole>{item.authorPosition}</TestimonialCardAuthorRole>
                </TestimonialCardAuthorInfo>
              </TestimonialCardAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsColumn>
        <TestimonialsColumn speed={35} className="hidden md:flex">
          {testimonials.column3.map((item) => (
            <TestimonialCard key={item.author}>
              <TestimonialCardQuote>{item.testimonial}</TestimonialCardQuote>
              <TestimonialCardAuthor>
                <Image
                  src={item.authorImage}
                  alt={item.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <TestimonialCardAuthorInfo>
                  <TestimonialCardAuthorName>{item.author}</TestimonialCardAuthorName>
                  <TestimonialCardAuthorRole>{item.authorPosition}</TestimonialCardAuthorRole>
                </TestimonialCardAuthorInfo>
              </TestimonialCardAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsColumn>
      </TestimonialsGrid>
    </Testimonials>
  );
}
