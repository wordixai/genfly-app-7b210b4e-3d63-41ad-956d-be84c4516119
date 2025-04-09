import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import JobCard from "@/components/JobCard";
import { mockJobs } from "@/data/mockData";
import { Job } from "@/types";

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);

  const handleSearch = (filters: {
    query: string;
    location: string;
    jobType: string;
  }) => {
    const { query, location, jobType } = filters;
    
    const filtered = mockJobs.filter((job) => {
      const matchesQuery = !query || 
        job.title.toLowerCase().includes(query.toLowerCase()) || 
        job.companyName.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase());
      
      const matchesLocation = !location || 
        job.location.toLowerCase().includes(location.toLowerCase());
      
      const matchesJobType = !jobType || job.jobType === jobType;
      
      return matchesQuery && matchesLocation && matchesJobType;
    });
    
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Dream Job
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover thousands of job opportunities with top employers
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SearchFilters onSearch={handleSearch} />
            </div>
          </div>
        </section>
        
        {/* Featured Jobs */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {filteredJobs.length > 0 
                ? `${filteredJobs.length} Jobs Available` 
                : "No Jobs Found"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;