import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building, MapPin, Calendar, Briefcase, DollarSign, Clock } from "lucide-react";
import { mockJobs, mockCompanies } from "@/data/mockData";
import { Job, Company } from "@/types";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  
  useEffect(() => {
    const foundJob = mockJobs.find(j => j.id === id);
    if (foundJob) {
      setJob(foundJob);
      const foundCompany = mockCompanies.find(c => c.id === foundJob.companyId);
      if (foundCompany) {
        setCompany(foundCompany);
      }
    }
  }, [id]);
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job not found</h1>
            <Link to="/">
              <Button>Back to Jobs</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Link to={`/companies/${job.companyId}`} className="hover:text-primary">
                      {job.companyName}
                    </Link>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  {job.featured && <Badge variant="success">Featured</Badge>}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-md text-sm">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.jobType}</span>
                </div>
                
                {job.experienceLevel && (
                  <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-md text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{job.experienceLevel}</span>
                  </div>
                )}
                
                {job.salary && (
                  <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-md text-sm">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-md text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Posted {job.postedAt}</span>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p>{job.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {job.benefits && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-8">
                <Button size="lg">Apply Now</Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-80 shrink-0">
              <div className="border rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">About the Company</h2>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                    {job.companyLogo ? (
                      <img 
                        src={job.companyLogo} 
                        alt={`${job.companyName} logo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Building className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{job.companyName}</h3>
                    {company && (
                      <p className="text-sm text-muted-foreground">{company.industry}</p>
                    )}
                  </div>
                </div>
                
                {company && (
                  <>
                    <Separator className="my-4" />
                    
                    <div className="space-y-3 text-sm">
                      <p>{company.description}</p>
                      
                      <div>
                        <span className="font-medium">Location:</span> {company.location}
                      </div>
                      
                      {company.size && (
                        <div>
                          <span className="font-medium">Company size:</span> {company.size}
                        </div>
                      )}
                      
                      {company.founded && (
                        <div>
                          <span className="font-medium">Founded:</span> {company.founded}
                        </div>
                      )}
                      
                      {company.website && (
                        <div>
                          <span className="font-medium">Website:</span>{" "}
                          <a 
                            href={company.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {company.website.replace(/^https?:\/\//, '')}
                          </a>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <Link to={`/companies/${company.id}`}>
                        <Button variant="outline" className="w-full">
                          View Company Profile
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;