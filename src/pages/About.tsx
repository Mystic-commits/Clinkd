import { Button } from "@/components/ui/button";
import { Music, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-primary">About</span>
            <span className="text-foreground"> Clikd Fest</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about connecting college students with unforgettable festival experiences. 
            Clikd Fest is more than just an event platform—we're building a community of music lovers 
            and culture enthusiasts.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize how students discover and connect with festivals and concerts. 
              We believe every student deserves access to amazing cultural experiences and 
              the opportunity to find like-minded festival partners.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the go-to platform for festival discovery in India, creating a vibrant 
              ecosystem where students can explore, connect, and experience the best of music 
              and cultural events together.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Our</span>
            <span className="text-foreground"> Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Music First</h3>
              <p className="text-muted-foreground">
                We celebrate the power of music to bring people together and create lasting memories.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Community</h3>
              <p className="text-muted-foreground">
                Building authentic connections between students who share a passion for live events.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly improving our platform to enhance the festival discovery experience.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-muted/30 rounded-lg p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Started by college students who were passionate about music but struggled to find 
              festival partners, Clikd Fest was born from a simple idea: what if discovering 
              and attending festivals could be easier and more social?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're proud to serve thousands of students across India, helping them 
              discover amazing events and connect with fellow music enthusiasts. Our platform 
              continues to evolve based on feedback from our vibrant community.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Join the Community?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start exploring events and connecting with fellow festival-goers today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/events">Browse Events</a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;