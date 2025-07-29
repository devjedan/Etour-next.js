import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Clock, Users, Briefcase, Upload } from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState("");
  
  const jobOpenings = [
    {
      id: "travel-consultant",
      title: "Travel Consultant",
      department: "Sales",
      location: "New Delhi",
      experience: "2-4 years",
      type: "Full-time",
      description: "Plan and sell travel packages to customers, provide travel advice and handle customer queries.",
      requirements: ["Bachelor's degree", "Excellent communication skills", "Travel industry experience preferred", "Customer service oriented"]
    },
    {
      id: "tour-guide",
      title: "Tour Guide",
      department: "Operations",
      location: "Multiple Cities",
      experience: "1-3 years",
      type: "Full-time",
      description: "Lead tour groups, provide information about destinations, ensure customer satisfaction.",
      requirements: ["Good knowledge of tourist destinations", "Multilingual preferred", "Energetic personality", "Problem-solving skills"]
    },
    {
      id: "marketing-executive",
      title: "Marketing Executive",
      department: "Marketing",
      location: "New Delhi",
      experience: "3-5 years",
      type: "Full-time",
      description: "Develop marketing strategies, manage digital campaigns, and promote tour packages.",
      requirements: ["Marketing degree", "Digital marketing experience", "Creative thinking", "Analytics skills"]
    },
    {
      id: "operations-manager",
      title: "Operations Manager",
      department: "Operations",
      location: "New Delhi",
      experience: "5-8 years",
      type: "Full-time",
      description: "Oversee tour operations, manage vendor relationships, ensure smooth tour execution.",
      requirements: ["Management experience", "Operations background", "Leadership skills", "Travel industry knowledge"]
    }
  ];

  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", applicationData);
    // Handle application submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Build your career in the exciting world of travel and tourism
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With ETour?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a dynamic team that's passionate about creating unforgettable travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-sm text-muted-foreground">Opportunities for professional development and career advancement</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Great Team</h3>
              <p className="text-sm text-muted-foreground">Work with passionate professionals who love travel and hospitality</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Travel Benefits</h3>
              <p className="text-sm text-muted-foreground">Enjoy travel discounts and explore destinations while working</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-sm text-muted-foreground">Flexible schedules and time for personal growth and well-being</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted-foreground">Find the perfect role to start or advance your career with us</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-muted-foreground">{job.department}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedJob(job.id)}
                  >
                    Apply Now
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>

                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>• {req}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Position</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Select onValueChange={(value) => setApplicationData({...applicationData, position: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobOpenings.map((job) => (
                        <SelectItem key={job.id} value={job.id}>{job.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Select onValueChange={(value) => setApplicationData({...applicationData, experience: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-8">5-8 years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  rows={5}
                  placeholder="Tell us why you'd be a great fit for this role..."
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="resume">Upload Resume</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground/25 rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="flex text-sm text-muted-foreground">
                      <label htmlFor="resume" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                        <span>Upload a file</span>
                        <input id="resume" name="resume" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>

              <Button type="submit" variant="tour" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;