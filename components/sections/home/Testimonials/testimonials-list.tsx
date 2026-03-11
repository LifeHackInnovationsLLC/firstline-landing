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
  TestimonialsMobileGrid,
  TestimonialsRow,
} from "@/components/ui/testimonial";
import { cdn, images } from "@/lib/cdn";

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const testimonials = {
  column1: [
    {
      testimonial: LOREM_LONG,
      author: "Sarah Chen",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "VP Sales at TechCorp",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Michael Torres",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "Sales Director at Growth Inc",
    },
    {
      testimonial: LOREM_LONG,
      author: "Emily Watson",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "CEO at Digital Agency",
    },
    {
      testimonial: LOREM_SHORT,
      author: "David Kim",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "Founder at StartupX",
    },
  ],
  column2: [
    {
      testimonial: LOREM_SHORT,
      author: "Jessica Martinez",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "Operations Lead at ScaleUp",
    },
    {
      testimonial: LOREM_LONG,
      author: "Alex Johnson",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "Finance Manager at RetailPro",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Rachel Adams",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "Partnership Manager at BrandCo",
    },
    {
      testimonial: LOREM_LONG,
      author: "James Wilson",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "Head of Sales at Enterprise Ltd",
    },
  ],
  column3: [
    {
      testimonial: LOREM_LONG,
      author: "Nina Patel",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "International Director at GlobalSales",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Tom Garcia",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "CTO at AgencyHub",
    },
    {
      testimonial: LOREM_LONG,
      author: "Lisa Park",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "COO at SalesForce Pro",
    },
    {
      testimonial: LOREM_SHORT,
      author: "Chris Brown",
      authorImage: images.testimonials.profilePhoto,
      authorPosition: "Director at MediaGroup",
    },
  ],
};

// Reusable testimonial card renderer
function TestimonialItem({ item }: { item: (typeof testimonials.column1)[0] }) {
  return (
    <TestimonialCard>
      <TestimonialCardQuote>{item.testimonial}</TestimonialCardQuote>
      <TestimonialCardAuthor>
        <img
          src={cdn(item.authorImage, { width: 80 })}
          alt={item.author}
          width={40}
          height={40}
          className="rounded-full"
        />
        <TestimonialCardAuthorInfo>
          <TestimonialCardAuthorName>{item.author}</TestimonialCardAuthorName>
          <TestimonialCardAuthorRole>
            {item.authorPosition}
          </TestimonialCardAuthorRole>
        </TestimonialCardAuthorInfo>
      </TestimonialCardAuthor>
    </TestimonialCard>
  );
}

// Mobile: Two horizontal rows
function TestimonialsListMobile() {
  const row1 = [...testimonials.column1, ...testimonials.column2.slice(0, 2)];
  const row2 = [...testimonials.column2.slice(2), ...testimonials.column3];

  return (
    <Testimonials className="lg:hidden">
      <TestimonialsMobileGrid>
        <TestimonialsRow speed={30} repeat={2}>
          {row1.map((item) => (
            <TestimonialItem key={item.author} item={item} />
          ))}
        </TestimonialsRow>
        <TestimonialsRow speed={25} reverse repeat={2}>
          {row2.map((item) => (
            <TestimonialItem key={item.author} item={item} />
          ))}
        </TestimonialsRow>
      </TestimonialsMobileGrid>
    </Testimonials>
  );
}

// Desktop: Three vertical columns
function TestimonialsListDesktop() {
  return (
    <Testimonials className="hidden lg:block">
      <TestimonialsGrid height={700}>
        <TestimonialsColumn speed={30} repeat={2}>
          {testimonials.column1.map((item) => (
            <TestimonialItem key={item.author} item={item} />
          ))}
        </TestimonialsColumn>
        <TestimonialsColumn speed={25} reverse repeat={2}>
          {testimonials.column2.map((item) => (
            <TestimonialItem key={item.author} item={item} />
          ))}
        </TestimonialsColumn>
        <TestimonialsColumn speed={35} repeat={2}>
          {testimonials.column3.map((item) => (
            <TestimonialItem key={item.author} item={item} />
          ))}
        </TestimonialsColumn>
      </TestimonialsGrid>
    </Testimonials>
  );
}

export function TestimonialsList() {
  return (
    <>
      <TestimonialsListMobile />
      <TestimonialsListDesktop />
    </>
  );
}
