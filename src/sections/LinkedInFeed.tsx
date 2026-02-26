import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

interface LinkedInPost {
  id: string;
  date: string;
  content: string;
  link: string;
}

const LinkedInFeed: React.FC = () => {
  const titleRef = useScrollAnimation("linkedin", "fadeUp");

  // Sample LinkedIn posts - easily updateable
  const linkedInPosts: LinkedInPost[] = [
    {
      id: "1",
      date: "2 weeks ago",
      content:
        "Just shipped a new product feature that reduces manual reporting by 40% using LLM automation. Healthcare teams are already seeing significant time savings.",
      link: "https://www.linkedin.com/in/vaibhavisatish/",
    },
    {
      id: "2",
      date: "1 month ago",
      content:
        "Data reliability isn't just a technical metric—it's about trust. Improved our platform's data reliability by 95%, which directly impacts patient outcomes.",
      link: "https://www.linkedin.com/in/vaibhavisatish/",
    },
    {
      id: "3",
      date: "6 weeks ago",
      content:
        "Building products for healthcare means understanding both the data and the humans behind it. Empathy + Analytics = Better outcomes.",
      link: "https://www.linkedin.com/in/vaibhavisatish/",
    },
    {
      id: "4",
      date: "2 months ago",
      content:
        "Just completed my Lean Six Sigma Green Belt certification! Excited to apply DMAIC methodology to product optimization challenges.",
      link: "https://www.linkedin.com/in/vaibhavisatish/",
    },
  ];

  return (
    <section id="linkedin" className="py-20 sm:py-28 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl sm:text-5xl font-bold text-text-primary mb-4"
          >
            Latest Insights
          </h2>
          <p className="text-text-secondary">
            Recent thoughts and updates from my LinkedIn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {linkedInPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-accent-blue/30 bg-white/40 backdrop-blur-sm hover:border-accent-coral/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-sm text-text-secondary">{post.date}</div>
                <span className="text-accent-coral group-hover:scale-110 transition-transform">
                  in
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
                {post.content}
              </p>

              <span className="text-accent-coral font-medium text-sm hover:underline">
                Read on LinkedIn →
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/vaibhavisatish/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue hover:text-text-primary transition-all duration-300"
          >
            <span>View All on LinkedIn</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeed;
