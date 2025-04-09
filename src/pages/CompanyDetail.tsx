import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Building, MapPin, Globe, Users, Calendar } from "lucide-react";
import { mockCompanies, mockJobs } from "@/data/mockData";
import { Company, Job } from "@/types";

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [companyJobs, setCompanyJobs] = useState<Job[]>([]);
  
  useEffect(() => {
    const foundCompany = mockCompanies.find(c => c.id === id);
    if (foundCompany) {
      setCompany(foundCompany);
      const jobs = mockJobs.filter(job => job.companyId === id);
      setCompanyJobs(jobs);
    }
  }, [id]);
  
  if (!company) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Company not found</h1>
            <Link to="/companies">
              <Button>Back to Companies</Button>
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
        {/* Company Header */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 rounded-lg bg-background flex items-center justify-center overflow-hidden">
                {company.logo ? (
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Building className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
                <div className="flex flex-col md:flex-row gap-4 md:items-center text-muted-foreground">
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    <Building className="h-4 w-4" />
                    <span>{company.industry}</span>
                  </div>
                  
                  {company.website && (
                    <div className="flex items-center justify-center md:justify-start gap-1">
                      <Globe className="h-4 w-4" />
                      <a 
                        href={company.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        {company.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-semibold mb-4">About {company.name}</h2>
                <p>{company.description}</p>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  {companyJobs.length > 0 
                    ? `Open Positions (${companyJobs.length})` 
                    : "No Open Positions"}
                </h2>
                
                {companyJobs.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {companyJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    There are currently no open positions at {company.name}.
                  </p>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="border rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                
                <div className="space-y-4">
                  {company.founded && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Founded</p>
                        <p className="text-sm text-muted-foreground">{company.founded}</p>
                      </div>
                    </div>
                  )}
                  
                  {company.size && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Company Size</p>
                        <p className="text-sm text-muted-foreground">{company.size}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{company.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Industry</p>
                      <p className="text-sm text-muted-foreground">{company.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyDetail;