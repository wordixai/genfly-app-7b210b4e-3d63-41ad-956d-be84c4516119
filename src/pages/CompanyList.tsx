import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyCard from "@/components/CompanyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { mockCompanies } from "@/data/mockData";
import { Company } from "@/types";

const CompanyList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>(mockCompanies);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = mockCompanies.filter((company) => {
      return !searchQuery || 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.location.toLowerCase().includes(searchQuery.toLowerCase());
    });
    
    setFilteredCompanies(filtered);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Companies
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover great places to work
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  placeholder="Search companies by name, industry, or location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">
              {filteredCompanies.length > 0 
                ? `${filteredCompanies.length} Companies` 
                : "No Companies Found"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyList;